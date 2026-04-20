import { useProfile } from '../../context/ProfileContext.jsx'
import { HOF, DLBLS, DABBR, DCOLS } from '../../data/hofstede.js'

const DIMENSIONS = [
  {
    key: 'Power Distance',
    short: 'Hierarchy',
    intro: 'how comfortable people are with unequal authority',
    low: 'Flatter — people push back openly',
    high: 'Steeper — authority is less questioned',
  },
  {
    key: 'Individualism',
    short: 'Group vs self',
    intro: 'whether people act more as individuals or as part of the group',
    low: 'Group-first — loyalty and harmony lead',
    high: 'Individual-first — autonomy and self-advocacy lead',
  },
  {
    key: 'Masculinity',
    short: 'Competition',
    intro: 'whether visible success or balance tends to be rewarded more',
    low: 'Collaborative — balance and relationships valued',
    high: 'Competitive — results and visible success valued',
  },
  {
    key: 'Uncertainty Avoidance',
    short: 'Need for structure',
    intro: 'how much people want clear rules and predictable systems',
    low: 'Flexible — comfortable with ambiguity',
    high: 'Structured — clear rules and plans preferred',
  },
  {
    key: 'Long-term Orientation',
    short: 'Future focus',
    intro: 'whether people are more long-term and pragmatic or more present-focused',
    low: 'Present-focused — tradition and quick wins',
    high: 'Future-focused — patience and pragmatism',
  },
  {
    key: 'Indulgence',
    short: 'Social freedom',
    intro: 'how relaxed or restrained everyday life tends to feel',
    low: 'More restrained — duty and norms lead',
    high: 'More relaxed — enjoyment and expression lead',
  },
]

function classroomRead(hC) {
  if (!hC) return []
  const notes = []
  notes.push(
    hC[0] > 70
      ? { icon: '👆', text: 'Hierarchy is likely to matter. Students and colleagues may be less comfortable challenging authority in public, so low-stakes feedback channels help.' }
      : { icon: '🤝', text: 'Professional pushback may be more open and direct. Disagreement is more likely to be part of engagement than a sign of disrespect.' }
  )
  notes.push(
    hC[1] < 35
      ? { icon: '👥', text: 'Group belonging may carry more weight than standing out. Public individual praise can land awkwardly, while group success often matters more.' }
      : hC[1] > 70
        ? { icon: '🙋', text: 'Students may be more likely to self-advocate, compare outcomes, and argue for individual exceptions.' }
        : { icon: '↔️', text: 'You may see both group-minded and individual-minded behavior depending on the situation.' }
  )
  notes.push(
    hC[3] > 65
      ? { icon: '📋', text: 'Clear instructions, visible routines, and strong examples will usually lower anxiety faster than open ambiguity.' }
      : { icon: '🧭', text: 'People may be more comfortable starting before everything is fully defined, with less need for rigid structure.' }
  )
  return notes
}

function biggestShift(fromScores, toScores) {
  if (!fromScores || !toScores) return null
  let best = null
  DLBLS.forEach((label, i) => {
    const gap = Math.abs(fromScores[i] - toScores[i])
    if (!best || gap > best.gap) {
      best = { label: DIMENSIONS[i].short, gap, intro: DIMENSIONS[i].intro, index: i }
    }
  })
  return best
}

function gapColor(gap) {
  if (gap > 30) return 'var(--coral)'
  if (gap > 15) return 'var(--amber)'
  return 'var(--teal)'
}

function gapLabel(gap) {
  if (gap > 30) return 'Big shift'
  if (gap > 15) return 'Noticeable'
  return 'Familiar'
}

export default function Culture() {
  const { profile } = useProfile()

  const countries = []
  if (profile.home && HOF[profile.home]) {
    countries.push({ key: 'home', label: 'Home', country: profile.home, scores: HOF[profile.home], color: 'var(--teal)' })
  }
  if (profile.cc && HOF[profile.cc]) {
    countries.push({ key: 'current', label: 'Now', country: profile.cc, scores: HOF[profile.cc], color: 'var(--blue)' })
  }
  if (profile.dc && HOF[profile.dc]) {
    countries.push({ key: 'dest', label: 'Next', country: profile.dc, scores: HOF[profile.dc], color: '#3F3A8F' })
  }

  const hCurrent = HOF[profile.cc]
  const hHome = HOF[profile.home]
  const hDest = HOF[profile.dc]
  const currentShift = biggestShift(hHome, hCurrent)
  const nextShift = biggestShift(hCurrent, hDest)
  const classroomNotes = classroomRead(hCurrent)

  return (
    <div className="tp active">
      <div style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', marginBottom: '.35rem' }}>Cultural lens</div>
      <div style={{ fontSize: 13, color: 'var(--ink-3)', marginBottom: '1.25rem', lineHeight: 1.6, maxWidth: 720 }}>
        Broad country-level patterns from cross-cultural research. Use them to slow down your interpretations and ask better questions — not to make assumptions about individuals.
      </div>

      {countries.length === 0 && (
        <div className="ibox info" style={{ marginBottom: '1.25rem' }}>
          Add your home and current country in your profile to see this page in context.
        </div>
      )}

      {/* Country legend */}
      {countries.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.75rem', marginBottom: '1.5rem' }}>
          {countries.map((c) => (
            <div key={c.key} style={{
              display: 'flex', alignItems: 'center', gap: 8,
              background: 'white', border: '1px solid var(--border)',
              borderRadius: 'var(--r)', padding: '.5rem .85rem',
            }}>
              <div style={{ width: 10, height: 10, borderRadius: 999, background: c.color, flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: 11, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.06em', lineHeight: 1 }}>{c.label}</div>
                <div style={{ fontSize: 13.5, fontWeight: 500, color: 'var(--ink)' }}>{c.country}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Dimension comparison — one row per dimension */}
      {countries.length > 0 && (
        <div className="card" style={{ padding: '1.25rem', marginBottom: '1.5rem' }}>
          <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--ink-4)', marginBottom: '1rem' }}>
            Dimension comparison
          </div>

          {DIMENSIONS.map((dim, i) => (
            <div key={dim.key} style={{
              padding: '1rem 0',
              borderBottom: i < DIMENSIONS.length - 1 ? '1px solid var(--border)' : 'none',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '.5rem' }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)' }}>{dim.short}</div>
                  <div style={{ fontSize: 11.5, color: 'var(--ink-4)', marginTop: 1 }}>{dim.intro}</div>
                </div>
              </div>

              {/* Track with dots */}
              <div style={{ position: 'relative', height: 28, margin: '4px 0' }}>
                {/* Background track */}
                <div style={{ position: 'absolute', top: 12, left: 0, right: 0, height: 4, background: 'var(--surface-2)', borderRadius: 2 }} />

                {/* Dots for each country */}
                {countries.map((c) => (
                  <div key={c.key} style={{
                    position: 'absolute',
                    left: `${c.scores[i]}%`,
                    top: 4,
                    transform: 'translateX(-50%)',
                    zIndex: 2,
                  }}>
                    <div style={{
                      width: 20,
                      height: 20,
                      borderRadius: 999,
                      background: c.color,
                      border: '3px solid white',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
                    }} />
                  </div>
                ))}
              </div>

              {/* Scale labels */}
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10.5, color: 'var(--ink-4)', marginTop: 2 }}>
                <span>{dim.low}</span>
                <span>{dim.high}</span>
              </div>

              {/* Score chips */}
              <div style={{ display: 'flex', gap: '.5rem', marginTop: '.5rem', flexWrap: 'wrap' }}>
                {countries.map((c) => (
                  <span key={c.key} style={{
                    fontSize: 11.5,
                    color: c.color,
                    background: `${c.color}12`,
                    padding: '2px 8px',
                    borderRadius: 999,
                    fontWeight: 600,
                  }}>
                    {c.country}: {c.scores[i]}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Biggest shift cards */}
      {(currentShift || nextShift) && (
        <div style={{ display: 'grid', gridTemplateColumns: currentShift && nextShift ? '1fr 1fr' : '1fr', gap: '1rem', marginBottom: '1.5rem' }}>
          {hHome && hCurrent && currentShift && (
            <div style={{
              background: 'white',
              border: '1px solid var(--border)',
              borderLeft: `3px solid ${gapColor(currentShift.gap)}`,
              borderRadius: '0 var(--r) var(--r) 0',
              padding: '1rem 1.1rem',
            }}>
              <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--ink-4)', marginBottom: '.4rem' }}>
                {profile.home} → {profile.cc}
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)', marginBottom: '.35rem' }}>
                {currentShift.label}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: '.4rem' }}>
                <span style={{
                  fontSize: 20, fontWeight: 700,
                  color: gapColor(currentShift.gap),
                }}>{currentShift.gap}</span>
                <span style={{ fontSize: 11.5, color: 'var(--ink-3)' }}>point gap</span>
                <span style={{
                  fontSize: 11, fontWeight: 600,
                  color: gapColor(currentShift.gap),
                  background: currentShift.gap > 30 ? '#F5DFD3' : currentShift.gap > 15 ? '#F5E5C6' : '#DCF0E6',
                  padding: '2px 8px',
                  borderRadius: 999,
                }}>{gapLabel(currentShift.gap)}</span>
              </div>
              <div style={{ fontSize: 12.5, color: 'var(--ink-3)', lineHeight: 1.55 }}>
                {currentShift.intro}
              </div>
            </div>
          )}

          {hCurrent && hDest && nextShift && (
            <div style={{
              background: 'white',
              border: '1px solid var(--border)',
              borderLeft: `3px solid ${gapColor(nextShift.gap)}`,
              borderRadius: '0 var(--r) var(--r) 0',
              padding: '1rem 1.1rem',
            }}>
              <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--ink-4)', marginBottom: '.4rem' }}>
                {profile.cc} → {profile.dc}
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)', marginBottom: '.35rem' }}>
                {nextShift.label}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: '.4rem' }}>
                <span style={{
                  fontSize: 20, fontWeight: 700,
                  color: gapColor(nextShift.gap),
                }}>{nextShift.gap}</span>
                <span style={{ fontSize: 11.5, color: 'var(--ink-3)' }}>point gap</span>
                <span style={{
                  fontSize: 11, fontWeight: 600,
                  color: gapColor(nextShift.gap),
                  background: nextShift.gap > 30 ? '#F5DFD3' : nextShift.gap > 15 ? '#F5E5C6' : '#DCF0E6',
                  padding: '2px 8px',
                  borderRadius: 999,
                }}>{gapLabel(nextShift.gap)}</span>
              </div>
              <div style={{ fontSize: 12.5, color: 'var(--ink-3)', lineHeight: 1.55 }}>
                {nextShift.intro}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Classroom insights */}
      {hCurrent && classroomNotes.length > 0 && (
        <div className="card" style={{ padding: '1.25rem', marginBottom: '1.5rem' }}>
          <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--ink-4)', marginBottom: '.35rem' }}>
            In your classroom right now
          </div>
          <div style={{ fontSize: 12.5, color: 'var(--ink-3)', marginBottom: '1rem', lineHeight: 1.55 }}>
            Practical patterns based on {profile.cc}'s cultural profile. Not every student behaves this way — these are the patterns easiest to misread.
          </div>

          <div style={{ display: 'grid', gap: '.75rem' }}>
            {classroomNotes.map((note) => (
              <div key={note.text} style={{
                display: 'flex', gap: '.75rem', alignItems: 'flex-start',
                background: 'var(--surface-2)', borderRadius: 'var(--r)',
                padding: '.75rem .85rem',
              }}>
                <span style={{ fontSize: 18, lineHeight: 1, flexShrink: 0, marginTop: 1 }}>{note.icon}</span>
                <div style={{ fontSize: 12.5, color: 'var(--ink-2)', lineHeight: 1.6 }}>{note.text}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer note */}
      <div style={{ fontSize: 12, color: 'var(--ink-4)', lineHeight: 1.55, maxWidth: 600 }}>
        Scores from Hofstede's research (0–100 scale). These describe broad national patterns, not individuals. One school, one team, or one neighborhood can still feel very different from the country average.
      </div>
    </div>
  )
}
