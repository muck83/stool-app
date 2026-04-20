import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import CharacterAvatar from '../../components/learn/CharacterAvatar.jsx'
import { moduleBySlug } from '../../lib/slugMap.js'
import { fetchSimulation, saveSimulationResponse } from '../../lib/pd/queries.js'
import {
  getSimProgress,
  saveSimProgress,
  markSimComplete,
} from '../../lib/pd/progress.js'

/**
 * /learn/:slug/sim/:simId — branching simulation state machine.
 * Manages node traversal, choice recording, and reflection capture.
 */
export default function SimulationPage() {
  const { slug, simId } = useParams()
  const navigate = useNavigate()
  const modMeta = moduleBySlug(slug)

  // Data
  const [simulation, setSimulation] = useState(null)
  const [loading, setLoading] = useState(true)

  // Session tracking
  const [sessionId, setSessionId] = useState(null)

  // State machine
  const [currentNodeId, setCurrentNodeId] = useState('setup')
  const [progress, setProgress] = useState(null)
  const [visible, setVisible] = useState(false)

  // UI state
  const [locked, setLocked] = useState(false)
  const [debriefText, setDebriefText] = useState('')
  const [selectedReflections, setSelectedReflections] = useState(new Set())
  const [reflectionFreetext, setReflectionFreetext] = useState('')

  // Load simulation and restore progress
  useEffect(() => {
    let cancelled = false
    async function load() {
      if (!modMeta || !simId) {
        setLoading(false)
        return
      }

      // Get or create session ID
      const existingSession = localStorage.getItem('pd_session_id')
      const sid = existingSession || `anon-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
      if (!existingSession) {
        localStorage.setItem('pd_session_id', sid)
      }
      setSessionId(sid)

      // Fetch simulation
      const rawSim = await fetchSimulation(simId)
      if (cancelled) return

      // Normalise: Codex produces nodes as an array; engine expects an object keyed by id.
      // Support both formats so either can be stored in the DB.
      let sim = rawSim
      if (sim && Array.isArray(sim.nodes)) {
        const nodesById = {}
        sim.nodes.forEach(n => { nodesById[n.id] = n })
        sim = { ...sim, nodes: nodesById }
      }
      setSimulation(sim)

      // Restore progress
      const savedProgress = getSimProgress(simId)
      if (savedProgress) {
        setProgress(savedProgress)
        setCurrentNodeId(savedProgress.currentNode)
      } else {
        setProgress({ currentNode: 'setup', choices: {}, reflections: {} })
      }

      setLoading(false)
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)))
    }
    load()
    return () => { cancelled = true }
  }, [slug, simId, modMeta])

  function getCurrentNode() {
    if (!simulation || !simulation.nodes) return null
    return simulation.nodes[currentNodeId] || null
  }

  function handleChoiceMade(choiceId, nextNodeId) {
    if (locked) return
    setLocked(true)

    // Save to localStorage + Supabase
    const newProgress = {
      ...progress,
      currentNode: nextNodeId,
      choices: { ...progress.choices, [currentNodeId]: choiceId },
    }
    setProgress(newProgress)
    saveSimProgress(simId, nextNodeId, choiceId)

    // Fire Supabase in background
    if (sessionId) {
      saveSimulationResponse(sessionId, simId, currentNodeId, choiceId, null)
    }

    // Fade transition
    setVisible(false)
    setTimeout(() => {
      setCurrentNodeId(nextNodeId)
      setLocked(false)
      setVisible(true)
    }, 300)
  }

  function handleReflectionSubmit(nextNodeId) {
    if (locked) return
    setLocked(true)

    const reflectText = reflectionFreetext || Array.from(selectedReflections).join('; ')

    const newProgress = {
      ...progress,
      currentNode: nextNodeId,
      reflections: { ...progress.reflections, [currentNodeId]: reflectText },
    }
    setProgress(newProgress)
    saveSimProgress(simId, nextNodeId, null, reflectText)

    if (sessionId) {
      saveSimulationResponse(sessionId, simId, currentNodeId, null, reflectText)
    }

    setSelectedReflections(new Set())
    setReflectionFreetext('')
    setVisible(false)
    setTimeout(() => {
      setCurrentNodeId(nextNodeId)
      setLocked(false)
      setVisible(true)
    }, 300)
  }

  function handleDebriefComplete() {
    if (locked) return
    setLocked(true)

    // Save final reflection
    if (sessionId) {
      saveSimulationResponse(sessionId, simId, 'debrief', null, debriefText)
    }

    // Mark complete + check badge
    markSimComplete(simId)

    // Navigate back to module
    navigate(`/learn/${slug}`)
  }

  function handleBackWithConfirm() {
    if (currentNodeId === 'setup') {
      navigate(`/learn/${slug}`)
    } else {
      const confirmed = window.confirm(
        'Progress is saved. You can resume later. Back to module?'
      )
      if (confirmed) navigate(`/learn/${slug}`)
    }
  }

  // ── Loading / error states ─────────────────────────────────────────────

  if (loading) {
    return (
      <div style={{
        maxWidth: '720px', margin: '0 auto', padding: '2rem 1.5rem',
        color: 'var(--ink-4)', textAlign: 'center',
      }}>
        Loading simulation...
      </div>
    )
  }

  if (!modMeta || !simulation) {
    return (
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '2rem 1.5rem' }}>
        <Link to="/learn" style={{ fontSize: '12px', color: 'var(--ink-4)', textDecoration: 'none' }}>
          ← Back to modules
        </Link>
        <div className="card" style={{ marginTop: '1rem', textAlign: 'center', padding: '3rem' }}>
          <p style={{ fontSize: '14px', color: 'var(--ink-3)' }}>Simulation not found.</p>
        </div>
      </div>
    )
  }

  const node = getCurrentNode()
  const estimatedNodeCount = simulation.nodeOrder
    ? simulation.nodeOrder.length
    : Object.keys(simulation.nodes).length
  const visitedNodeCount = Object.keys(progress?.reflections || {}).length +
                           Object.keys(progress?.choices || {}).length + 1
  const progressPercent = Math.round((visitedNodeCount / estimatedNodeCount) * 100)

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes nodeEnter {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        .sim-choice-card {
          border: 1px solid var(--border);
          border-radius: var(--r);
          padding: 16px;
          cursor: pointer;
          transition: all .2s ease;
          background: white;
        }
        .sim-choice-card:hover {
          border-color: ${modMeta.color};
          box-shadow: 0 2px 8px rgba(0,0,0,.06);
        }
        .sim-choice-card.selected {
          background: ${modMeta.color};
          color: white;
          border-color: ${modMeta.color};
          animation: pulse .3s ease;
        }
        .sim-reflection-pill {
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 8px 16px;
          background: white;
          cursor: pointer;
          transition: all .2s ease;
          font-size: 13px;
          color: var(--ink-2);
          white-space: nowrap;
        }
        .sim-reflection-pill:hover {
          border-color: ${modMeta.color};
          background: ${modMeta.color}08;
        }
        .sim-reflection-pill.selected {
          background: ${modMeta.color};
          border-color: ${modMeta.color};
          color: white;
        }
        .sim-perspective-block {
          background: ${modMeta.color}08;
          border-left: 3px solid ${modMeta.color};
          border-radius: 0 var(--r) var(--r) 0;
          padding: 16px;
          margin: 16px 0;
        }
      `}</style>

      <div style={{
        maxWidth: '720px', margin: '0 auto', padding: '2rem 1.5rem',
        opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(10px)',
        transition: 'opacity .3s ease, transform .3s ease',
      }}>

        {/* Breadcrumb */}
        <button
          onClick={handleBackWithConfirm}
          style={{
            background: 'none', border: 'none', padding: 0,
            fontSize: '12px', color: 'var(--ink-4)', cursor: 'pointer',
            display: 'inline-block', marginBottom: '12px',
          }}
        >
          ← {modMeta.country} module
        </button>

        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem',
        }}>
          <h1 style={{
            fontFamily: 'var(--serif)', fontSize: '1.3rem', color: 'var(--ink)',
            margin: 0, flex: 1,
          }}>
            {simulation.title}
          </h1>
          <Link to={`/learn/${slug}?tab=dimensions`} style={{
            fontSize: '12px', color: 'var(--ink-4)', textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}>
            Reference Library →
          </Link>
        </div>

        {/* Progress bar */}
        <div style={{
          height: '3px', background: 'var(--surface-2)', borderRadius: '2px',
          marginBottom: '1.5rem', overflow: 'hidden',
        }}>
          <div style={{
            height: '100%', background: modMeta.color, width: `${progressPercent}%`,
            transition: 'width .6s ease',
          }} />
        </div>

        {!node ? (
          <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
            <p style={{ color: 'var(--ink-4)' }}>Node not found.</p>
          </div>
        ) : node.type === 'setup' ? (
          <SetupNode
            node={node}
            simulation={simulation}
            modMeta={modMeta}
            onContinue={() => handleChoiceMade(null, node.next)}
            locked={locked}
          />
        ) : node.type === 'dilemma' ? (
          <DilemmaNode
            node={node}
            modMeta={modMeta}
            onChoice={(choiceId, nextId) => handleChoiceMade(choiceId, nextId)}
            locked={locked}
          />
        ) : node.type === 'consequence' ? (
          <ConsequenceNode
            node={node}
            modMeta={modMeta}
            onContinue={() => handleChoiceMade(null, node.next)}
            locked={locked}
          />
        ) : node.type === 'perspective' ? (
          <PerspectiveNode
            node={node}
            modMeta={modMeta}
            onContinue={() => handleChoiceMade(null, node.next)}
            locked={locked}
          />
        ) : node.type === 'reflection' ? (
          <ReflectionNode
            node={node}
            modMeta={modMeta}
            selectedReflections={selectedReflections}
            setSelectedReflections={setSelectedReflections}
            reflectionFreetext={reflectionFreetext}
            setReflectionFreetext={setReflectionFreetext}
            onSubmit={() => handleReflectionSubmit(node.next)}
            locked={locked}
          />
        ) : node.type === 'debrief' ? (
          <DebriefNode
            node={node}
            simulation={simulation}
            progress={progress}
            modMeta={modMeta}
            debriefText={debriefText}
            setDebriefText={setDebriefText}
            onComplete={handleDebriefComplete}
            locked={locked}
          />
        ) : (
          <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
            <p style={{ color: 'var(--ink-4)' }}>Unknown node type: {node.type}</p>
          </div>
        )}
      </div>
    </>
  )
}

// ── Node Components ────────────────────────────────────────────────────────────

function SetupNode({ node, simulation, modMeta, onContinue, locked }) {
  const schoolLabel = simulation.meta?.schoolContext || modMeta.country
  const flagEmoji = getFlagEmoji(modMeta.countryCode)

  return (
    <div className="card" style={{
      padding: 0,
      borderLeft: `3px solid ${modMeta.color}`,
      overflow: 'hidden',
      animation: 'simSetupEnter .35s ease both',
      boxShadow: '0 10px 30px rgba(16, 24, 40, 0.06)',
    }}>
      <style>{`
        @keyframes simSetupEnter {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div style={{
        height: '180px',
        background: `
          radial-gradient(circle at 20% 20%, ${modMeta.color}20 0%, transparent 32%),
          radial-gradient(circle at 82% 18%, rgba(255,255,255,.72) 0%, transparent 26%),
          linear-gradient(135deg, ${modMeta.color}1c 0%, ${modMeta.color}07 58%, rgba(255,255,255,.92) 100%)
        `,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '1.5rem',
        borderBottom: `1px solid ${modMeta.color}14`,
      }}>
        <div>
          <div style={{
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '.12em',
            color: modMeta.color,
            fontWeight: 700,
            marginBottom: '12px',
          }}>
            {modMeta.country}
          </div>
          <div style={{ fontSize: '2rem', lineHeight: 1, marginBottom: '10px' }}>
            {flagEmoji}
          </div>
          <div style={{
            fontFamily: 'var(--serif)', fontSize: '1.7rem', color: 'var(--ink)',
            marginBottom: '6px',
          }}>
            {schoolLabel}
          </div>
          <div style={{ fontSize: '0.95rem', color: 'var(--ink-3)', fontWeight: 500 }}>
            {simulation.title}
          </div>
        </div>
      </div>
      <div style={{ padding: '2rem' }}>
      <h2 style={{
        fontFamily: 'var(--serif)', fontSize: '1.1rem', color: 'var(--ink)',
        marginTop: 0,
      }}>
        The Setting
      </h2>

      {/* Characters */}
      {simulation.characters && simulation.characters.length > 0 && (
        <div style={{ marginBottom: '1.5rem' }}>
          <div className="csec">Characters</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {simulation.characters.map((char, i) => (
              <div key={i} style={{
                padding: '12px 14px',
                background: `${modMeta.color}08`,
                borderRadius: 'var(--r)',
                border: `1px solid ${modMeta.color}10`,
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.55)',
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '3px',
                  background: `linear-gradient(90deg, ${modMeta.color}45 0%, ${modMeta.color}12 100%)`,
                  borderTopLeftRadius: 'var(--r)',
                  borderTopRightRadius: 'var(--r)',
                }} />
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <CharacterAvatar
                    name={char.name}
                    role={char.role}
                    color={modMeta.color}
                    countryCode={modMeta.countryCode}
                    size={44}
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 600, color: modMeta.color, marginBottom: '2px' }}>
                      {char.name}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--ink-2)', marginBottom: '6px' }}>
                      {char.role}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--ink-3)', lineHeight: 1.55 }}>
                      {char.description || char.background}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Context + content */}
      {simulation.context && (
        <p style={{ fontSize: '14px', color: 'var(--ink-2)', lineHeight: 1.7, margin: '1rem 0' }}>
          {simulation.context}
        </p>
      )}
      {node.content && renderContent(node.content)}

      {/* Begin button */}
      <div style={{ marginTop: '1.5rem', display: 'flex', gap: '12px' }}>
        <button
          onClick={onContinue}
          disabled={locked}
          style={{
            padding: '10px 20px',
            background: modMeta.color,
            color: 'white',
            border: 'none',
            borderRadius: 'var(--r)',
            fontSize: '13px',
            fontWeight: 600,
            cursor: locked ? 'not-allowed' : 'pointer',
            opacity: locked ? 0.6 : 1,
            transition: 'opacity .15s',
          }}
          onMouseEnter={e => { if (!locked) e.currentTarget.style.opacity = '.85' }}
          onMouseLeave={e => { if (!locked) e.currentTarget.style.opacity = '1' }}
        >
          Begin →
        </button>
      </div>
      </div>
    </div>
  )
}

// Renders node.content whether it's a plain string or an array of paragraph strings
function renderContent(content, style = {}) {
  const base = { fontSize: '14px', color: 'var(--ink-2)', lineHeight: 1.7, margin: '0 0 0.85rem 0' }
  const s = { ...base, ...style }
  if (!content) return null
  if (Array.isArray(content)) {
    return content.map((para, i) => (
      <p key={i} style={{ ...s, ...(i === content.length - 1 ? { marginBottom: 0 } : {}) }}>
        {para}
      </p>
    ))
  }
  return <p style={{ ...s, marginBottom: 0 }}>{content}</p>
}

function DilemmaNode({ node, modMeta, onChoice, locked }) {
  const [selected, setSelected] = useState(null)

  function handleSelect(choice) {
    if (locked) return
    setSelected(choice.id)
    setTimeout(() => {
      onChoice(choice.id, choice.next)
    }, 300)
  }

  return (
    <div className="card" style={{ padding: '2rem', animation: 'simDilemmaEnter .35s ease both' }}>
      <style>{`
        @keyframes simDilemmaEnter {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      {/* Codex format: content is an array where all items are paragraphs.
          If there's a separate prompt field, show content as context + prompt as question.
          If no prompt, render all content items as paragraphs. */}
      {node.content && (() => {
        const paras = Array.isArray(node.content) ? node.content : [node.content]
        const hasPrompt = !!node.prompt
        const contextParas = hasPrompt ? paras : paras.slice(0, -1)
        const question = hasPrompt ? node.prompt : paras[paras.length - 1]
        return (
          <>
            {contextParas.length > 0 && (
              <div style={{ marginBottom: '1.25rem' }}>
                {renderContent(contextParas)}
              </div>
            )}
            <h2 style={{
              fontFamily: 'var(--serif)', fontSize: '1.05rem', color: 'var(--ink)',
              marginTop: 0, marginBottom: '1.5rem',
            }}>
              {question}
            </h2>
          </>
        )
      })()}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {node.choices && node.choices.map(choice => (
          <div
            key={choice.id}
            className="sim-choice-card"
            onClick={() => handleSelect(choice)}
            style={{
              opacity: !locked || selected === choice.id ? 1 : 0.6,
              pointerEvents: locked && selected !== choice.id ? 'none' : 'auto',
              ...(selected === choice.id ? {
                background: modMeta.color,
                color: 'white',
                borderColor: modMeta.color,
                animation: 'pulse .3s ease',
              } : {}),
            }}
          >
            {choice.label && (
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                marginBottom: '10px',
                padding: '4px 10px',
                borderRadius: '999px',
                background: selected === choice.id ? 'rgba(255,255,255,.18)' : `${modMeta.color}12`,
                color: selected === choice.id ? 'white' : modMeta.color,
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '.01em',
              }}>
                {choice.label}
              </div>
            )}
            <div style={{ fontSize: '13px', lineHeight: 1.6 }}>
              {choice.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ConsequenceNode({ node, modMeta, onContinue, locked }) {
  return (
    <div className="card" style={{ padding: '2rem', animation: 'simConsequenceEnter .35s ease both' }}>
      <style>{`
        @keyframes simConsequenceEnter {
          from { opacity: 0; transform: translateX(-6px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
      <div style={{ marginBottom: '1.5rem' }}>
        {renderContent(node.content)}
      </div>

      <button
        onClick={onContinue}
        disabled={locked}
        style={{
          padding: '9px 18px',
          background: modMeta.color,
          color: 'white',
          border: 'none',
          borderRadius: 'var(--r)',
          fontSize: '13px',
          fontWeight: 600,
          cursor: locked ? 'not-allowed' : 'pointer',
          opacity: locked ? 0.6 : 1,
          transition: 'opacity .15s',
        }}
        onMouseEnter={e => { if (!locked) e.currentTarget.style.opacity = '.85' }}
        onMouseLeave={e => { if (!locked) e.currentTarget.style.opacity = '1' }}
      >
        Continue →
      </button>
    </div>
  )
}

function PerspectiveNode({ node, modMeta, onContinue, locked }) {
  // Support both explicit node.character field and Codex-style node.title
  // e.g. "Perspective 1: Mrs. Park's View" → "Mrs. Park's View"
  // e.g. "Perspective 2: Mrs. Alharbi's View" → "Mrs. Alharbi's View"
  const perspectiveLabel = (() => {
    if (node.character) return `${node.character}'s Perspective`
    if (node.title) {
      // Strip leading "Perspective N: " prefix if present
      const match = node.title.match(/^Perspective \d+:\s*(.+)$/)
      return match ? match[1] : node.title
    }
    return 'Their Perspective'
  })()

  const perspectiveName = extractPerspectiveName(perspectiveLabel)

  return (
    <div className="card" style={{ padding: '2rem', animation: 'simPerspectiveEnter .38s ease both' }}>
      <style>{`
        @keyframes simPerspectiveEnter {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
      <div style={{ marginBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
          <CharacterAvatar
            name={perspectiveName}
            role={node.character_role}
            color={modMeta.color}
            countryCode={modMeta.countryCode}
            size={36}
          />
          <div>
            <div style={{
              fontSize: '11px', fontWeight: 600, color: modMeta.color,
              textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '2px',
            }}>
              Perspective Shift
            </div>
            <div style={{ fontSize: '14px', color: 'var(--ink)', fontWeight: 600 }}>
              {perspectiveLabel}
            </div>
          </div>
        </div>
        {node.character_role && (
          <div style={{
            fontSize: '12px', color: 'var(--ink-3)', fontStyle: 'italic',
            paddingLeft: '46px',
          }}>
            {node.character_role}
          </div>
        )}
      </div>

      <div className="sim-perspective-block">
        {renderContent(node.content)}
      </div>

      <button
        onClick={onContinue}
        disabled={locked}
        style={{
          padding: '9px 18px',
          background: modMeta.color,
          color: 'white',
          border: 'none',
          borderRadius: 'var(--r)',
          fontSize: '13px',
          fontWeight: 600,
          cursor: locked ? 'not-allowed' : 'pointer',
          opacity: locked ? 0.6 : 1,
          transition: 'opacity .15s',
        }}
        onMouseEnter={e => { if (!locked) e.currentTarget.style.opacity = '.85' }}
        onMouseLeave={e => { if (!locked) e.currentTarget.style.opacity = '1' }}
      >
        Continue →
      </button>
    </div>
  )
}

function ReflectionNode({
  node, modMeta, selectedReflections, setSelectedReflections,
  reflectionFreetext, setReflectionFreetext, onSubmit, locked,
}) {
  const hasSelection = selectedReflections.size > 0 || reflectionFreetext.trim().length > 0

  function togglePill(option) {
    const newSet = new Set(selectedReflections)
    if (newSet.has(option)) {
      newSet.delete(option)
    } else {
      newSet.add(option)
    }
    setSelectedReflections(newSet)
  }

  return (
    <div className="card" style={{ padding: '2rem', animation: 'simReflectionEnter .5s ease both' }}>
      <style>{`
        @keyframes simReflectionEnter {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <h3 style={{
        fontFamily: 'var(--serif)', fontSize: '1rem', color: 'var(--ink)',
        margin: '0 0 1.5rem 0',
      }}>
        {node.prompt}
      </h3>

      {/* Reflection options */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '1.5rem' }}>
        {node.options && node.options.map((option, i) => (
          <button
            key={i}
            className="sim-reflection-pill"
            onClick={() => togglePill(option)}
            style={{
              background: selectedReflections.has(option) ? modMeta.color : 'white',
              color: selectedReflections.has(option) ? 'white' : 'var(--ink-2)',
              borderColor: selectedReflections.has(option) ? modMeta.color : 'var(--border)',
              textAlign: 'left',
            }}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Free-text input */}
      <textarea
        value={reflectionFreetext}
        onChange={e => setReflectionFreetext(e.target.value)}
        placeholder="Or write your own response…"
        rows={3}
        style={{
          width: '100%', padding: '10px 12px',
          border: '1px solid var(--border)', borderRadius: 'var(--r)',
          fontSize: '13px', fontFamily: 'inherit', color: 'var(--ink)',
          lineHeight: 1.6, resize: 'vertical', outline: 'none',
          marginBottom: '1.25rem', boxSizing: 'border-box',
        }}
        onFocus={e => { e.currentTarget.style.borderColor = modMeta.color }}
        onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)' }}
      />

      <button
        onClick={onSubmit}
        disabled={locked || !hasSelection}
        style={{
          padding: '9px 18px',
          background: hasSelection ? modMeta.color : 'var(--surface-2)',
          color: hasSelection ? 'white' : 'var(--ink-4)',
          border: 'none', borderRadius: 'var(--r)',
          fontSize: '13px', fontWeight: 600,
          cursor: locked || !hasSelection ? 'not-allowed' : 'pointer',
          opacity: locked ? 0.6 : 1,
          transition: 'background .2s, color .2s, opacity .15s',
        }}
        onMouseEnter={e => { if (!locked && hasSelection) e.currentTarget.style.opacity = '.85' }}
        onMouseLeave={e => { if (!locked && hasSelection) e.currentTarget.style.opacity = '1' }}
      >
        Submit reflection →
      </button>
    </div>
  )
}

function DebriefNode({ node, simulation, progress, modMeta, debriefText, setDebriefText, onComplete, locked }) {
  const allChoices = progress?.choices || {}
  const choiceCount = Object.keys(allChoices).length

  return (
    <div className="card" style={{ padding: '2rem', animation: 'nodeEnter .45s ease both' }}>
      {/* Header */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '10px',
        marginBottom: '1.5rem', paddingBottom: '1.25rem', borderBottom: '1px solid var(--border)',
      }}>
        <div style={{
          width: '36px', height: '36px', borderRadius: '50%',
          background: `${modMeta.color}15`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '18px', flexShrink: 0,
        }}>
          💬
        </div>
        <div>
          <div style={{
            fontSize: '11px', fontWeight: 700, color: modMeta.color,
            textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: '2px',
          }}>
            Debrief
          </div>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', color: 'var(--ink)', margin: 0 }}>
            {node.title || 'What did you take away?'}
          </h2>
        </div>
      </div>

      {choiceCount > 0 && (
        <div style={{
          background: `${modMeta.color}08`, borderRadius: 'var(--r)',
          padding: '14px 16px', marginBottom: '1.25rem',
          fontSize: '13px', color: 'var(--ink-3)', lineHeight: 1.6,
        }}>
          <span style={{ fontWeight: 600, color: modMeta.color }}>
            {choiceCount} decision{choiceCount !== 1 ? 's' : ''} made.
          </span>
          {' '}Your choices shaped how this scenario unfolded for your school community.
        </div>
      )}

      {node.content && (
        <div style={{ marginBottom: '1.25rem' }}>
          {renderContent(node.content)}
        </div>
      )}

      {node.prompt && (
        <>
          <h3 style={{
            fontFamily: 'var(--serif)', fontSize: '0.95rem', color: 'var(--ink)',
            margin: '0 0 10px 0',
          }}>
            {node.prompt}
          </h3>
          <textarea
            value={debriefText}
            onChange={e => setDebriefText(e.target.value)}
            placeholder="Write your thoughts here… (optional)"
            rows={4}
            style={{
              width: '100%', padding: '10px 12px',
              border: '1px solid var(--border)', borderRadius: 'var(--r)',
              fontSize: '13px', fontFamily: 'inherit', color: 'var(--ink)',
              lineHeight: 1.6, resize: 'vertical', outline: 'none',
              marginBottom: '1.25rem', boxSizing: 'border-box',
            }}
            onFocus={e => { e.currentTarget.style.borderColor = modMeta.color }}
            onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)' }}
          />
        </>
      )}

      <button
        onClick={onComplete}
        disabled={locked}
        style={{
          padding: '10px 20px', background: modMeta.color, color: 'white',
          border: 'none', borderRadius: 'var(--r)',
          fontSize: '13px', fontWeight: 600,
          cursor: locked ? 'not-allowed' : 'pointer',
          opacity: locked ? 0.6 : 1, transition: 'opacity .15s',
        }}
        onMouseEnter={e => { if (!locked) e.currentTarget.style.opacity = '.85' }}
        onMouseLeave={e => { if (!locked) e.currentTarget.style.opacity = '1' }}
      >
        Complete simulation ✓
      </button>
    </div>
  )
}

// ── Utility components & helpers ───────────────────────────────────────────────

/**
 * CharacterAvatar — initials-based avatar circle.
 * Stable hue shift per name gives each character a distinct tint.
 */
/**
 * Map ISO 3166-1 alpha-2 country code to flag emoji.
 */
function getFlagEmoji(countryCode) {
  if (!countryCode) return '🏫'
  const flags = { SA: '🇸🇦', CN: '🇨🇳', KR: '🇰🇷', IN: '🇮🇳', JP: '🇯🇵', US: '🇺🇸', GB: '🇬🇧' }
  const code = countryCode.toUpperCase()
  if (flags[code]) return flags[code]
  try {
    return String.fromCodePoint(...[...code].map(c => 0x1F1E6 + c.charCodeAt(0) - 65))
  } catch { return '🏫' }
}

/**
 * Pull the character name out of a perspective label.
 * "Mrs. Park's Perspective" → "Mrs. Park"
 */
function extractPerspectiveName(label) {
  if (!label) return ''
  const m = label.match(/^((?:Mr|Mrs|Ms|Dr|Prof)\.?\s+\S+)/i)
  return m ? m[1] : label.split("'")[0].trim()
}
