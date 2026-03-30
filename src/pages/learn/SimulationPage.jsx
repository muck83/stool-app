import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { moduleBySlug } from '../../lib/slugMap.js'
import { fetchSimulation, saveSimulationResponse } from '../../lib/pd/queries.js'
import {
  getSimProgress,
  saveSimProgress,
  isSimCompleted,
  markSimComplete,
  checkAndMaybeAwardSimBadge,
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
  const isCompleted = isSimCompleted(simId)
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

        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem',
        }}>
          <button
            onClick={handleBackWithConfirm}
            style={{
              background: 'none', border: 'none', fontSize: '16px',
              cursor: 'pointer', color: modMeta.color, padding: '0',
            }}
            title="Back to module"
          >
            ←
          </button>
          <h1 style={{
            fontFamily: 'var(--serif)', fontSize: '1.3rem', color: 'var(--ink)',
            margin: 0, flex: 1,
          }}>
            {simulation.title}
          </h1>
          <Link to={`/learn/${slug}`} style={{
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
  return (
    <div className="card" style={{
      padding: '2rem',
      borderLeft: `3px solid ${modMeta.color}`,
    }}>
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
                padding: '10px 12px',
                background: `${modMeta.color}08`,
                borderRadius: 'var(--r)',
                fontSize: '13px',
              }}>
                <div style={{ fontWeight: 600, color: modMeta.color, marginBottom: '2px' }}>
                  {char.name}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--ink-3)', marginBottom: '4px' }}>
                  {char.role}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--ink-3)', lineHeight: 1.5 }}>
                  {char.background}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Context + content */}
      <p style={{ fontSize: '14px', color: 'var(--ink-2)', lineHeight: 1.7, margin: '1rem 0' }}>
        {simulation.context}
      </p>
      {node.content && (
        <p style={{ fontSize: '14px', color: 'var(--ink-2)', lineHeight: 1.7, margin: '1rem 0' }}>
          {node.content}
        </p>
      )}

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
  )
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
    <div className="card" style={{ padding: '2rem' }}>
      <h2 style={{
        fontFamily: 'var(--serif)', fontSize: '1rem', color: 'var(--ink)',
        marginTop: 0, marginBottom: '1.5rem',
      }}>
        {node.prompt}
      </h2>

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
    <div className="card" style={{ padding: '2rem' }}>
      <p style={{
        fontSize: '14px', color: 'var(--ink-2)', lineHeight: 1.7, margin: '0 0 1.5rem 0',
      }}>
        {node.content}
      </p>

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
  return (
    <div className="card" style={{ padding: '2rem' }}>
      <div style={{ marginBottom: '1rem' }}>
        <div style={{
          fontSize: '11px', fontWeight: 600, color: modMeta.color,
          textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '4px',
        }}>
          {node.character}'s perspective
        </div>
        {node.character_role && (
          <div style={{
            fontSize: '12px', color: 'var(--ink-3)', fontStyle: 'italic',
          }}>
            {node.character_role}
          </div>
        )}
      </div>

      <div className="sim-perspective-block">
        <p style={{
          fontSize: '14px', color: 'var(--ink-2)', lineHeight: 1.7, margin: 0,
        }}>
          {node.content}
        </p>
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
    <div className="card" style={{ padding: '2rem' }}>
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

      {/* Freetext */}
      {node.freetext && (
        <textarea
          placeholder="Or describe in your own words..."
          value={reflectionFreetext}
          onChange={e => setReflectionFreetext(e.target.value)}
          style={{
            width: '100%', minHeight: '80px', padding: '10px',
            border: `1px solid var(--border)`, borderRadius: 'var(--r)',
            fontSize: '13px', fontFamily: 'inherit', resize: 'vertical',
            marginBottom: '1rem', boxSizing: 'border-box',
          }}
        />
      )}

      {/* Continue button */}
      <button
        onClick={onSubmit}
        disabled={locked || !hasSelection}
        style={{
          padding: '9px 18px',
          background: hasSelection ? modMeta.color : 'var(--border)',
          color: hasSelection ? 'white' : 'var(--ink-4)',
          border: 'none',
          borderRadius: 'var(--r)',
          fontSize: '13px',
          fontWeight: 600,
          cursor: locked || !hasSelection ? 'not-allowed' : 'pointer',
          opacity: locked ? 0.6 : 1,
          transition: 'opacity .15s',
        }}
        onMouseEnter={e => { if (hasSelection && !locked) e.currentTarget.style.opacity = '.85' }}
        onMouseLeave={e => { if (hasSelection && !locked) e.currentTarget.style.opacity = '1' }}
      >
        Continue →
      </button>
    </div>
  )
}

function DebriefNode({
  node, simulation, progress, modMeta, debriefText, setDebriefText,
  onComplete, locked,
}) {
  if (!node.sections) {
    return (
      <div className="card" style={{ padding: '2rem' }}>
        <p style={{ color: 'var(--ink-3)' }}>Debrief content not available.</p>
      </div>
    )
  }

  return (
    <div>
      {/* Choice path reconstruction */}
      {node.sections[0] && (
        <div className="card" style={{ padding: '2rem', marginBottom: '1rem' }}>
          <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1rem', margin: '0 0 1rem 0' }}>
            Your Choice Path
          </h3>
          <div style={{ fontSize: '13px', color: 'var(--ink-2)', lineHeight: 1.8 }}>
            {Object.entries(progress.choices).map(([nodeId, choiceId], i) => (
              <div key={i} style={{ paddingBottom: '8px' }}>
                <strong>Decision {i + 1}:</strong> {choiceId}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Other debrief sections */}
      {node.sections.slice(1).map((section, i) => (
        <div key={i} className="card" style={{ padding: '2rem', marginBottom: '1rem' }}>
          <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1rem', margin: '0 0 1rem 0' }}>
            {section.heading}
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--ink-2)', lineHeight: 1.7, margin: 0 }}>
            {section.content}
          </p>
          {section.dimension_refs && section.dimension_refs.length > 0 && (
            <div style={{ marginTop: '1rem', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {section.dimension_refs.map(dim => (
                <Link
                  key={dim}
                  to={`/learn/${simulation.module_id ? 'placeholder' : 'china'}/reference/${dim}`}
                  style={{
                    fontSize: '11px', padding: '4px 10px',
                    background: `${modMeta.color}15`, color: modMeta.color,
                    borderRadius: '20px', textDecoration: 'none',
                  }}
                >
                  D{dim} ↗
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Final reflection */}
      <div className="card" style={{ padding: '2rem', marginBottom: '1rem' }}>
        <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1rem', margin: '0 0 1rem 0' }}>
          What Would You Do Differently?
        </h3>
        <textarea
          placeholder="Reflect on your choices now that you've seen the full picture..."
          value={debriefText}
          onChange={e => setDebriefText(e.target.value)}
          style={{
            width: '100%', minHeight: '100px', padding: '10px',
            border: `1px solid var(--border)`, borderRadius: 'var(--r)',
            fontSize: '13px', fontFamily: 'inherit', resize: 'vertical',
            marginBottom: '1rem', boxSizing: 'border-box',
          }}
        />
        <button
          onClick={onComplete}
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
          Complete Simulation →
        </button>
      </div>
    </div>
  )
}
