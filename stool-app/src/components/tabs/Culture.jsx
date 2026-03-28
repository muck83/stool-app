import { useProfile } from '../../context/ProfileContext.jsx'
import { HOF, DLBLS, DABBR, DCOLS } from '../../data/hofstede.js'

const DIMENSIONS = [
  {
    key: 'Power Distance',
    short: 'Hierarchy',
    intro: 'how comfortable people are with unequal authority',
  },
  {
    key: 'Individualism',
    short: 'Group vs self',
    intro: 'whether people act more as individuals or as part of the group',
  },
  {
    key: 'Masculinity',
    short: 'Competition',
    intro: 'whether visible success or balance tends to be rewarded more',
  },
  {
    key: 'Uncertainty Avoidance',
    short: 'Need for structure',
    intro: 'how much people want clear rules and predictable systems',
  },
  {
    key: 'Long-term Orientation',
    short: 'Future focus',
    intro: 'whether people are more long-term and pragmatic or more present-focused',
  },
  {
    key: 'Indulgence',
    short: 'Social freedom',
    intro: 'how relaxed or restrained everyday life tends to feel',
  },
]

function classroomRead(hC) {
  if (!hC) return []

  const notes = []

  notes.push(
    hC[0] > 70
      ? 'Hierarchy is likely to matter. Students and colleagues may be less comfortable challenging authority in public, so low-stakes feedback channels help.'
      : 'Professional pushback may be more open and direct. Disagreement is more likely to be part of engagement than a sign of disrespect.'
  )

  notes.push(
    hC[1] < 35
      ? 'Group belonging may carry more weight than standing out. Public individual praise can land awkwardly, while group success often matters more.'
      : hC[1] > 70
        ? 'Students may be more likely to self-advocate, compare outcomes, and argue for individual exceptions.'
        : 'You may see both group-minded and individual-minded behavior depending on the situation.'
  )

  notes.push(
    hC[3] > 65
      ? 'Clear instructions, visible routines, and strong examples will usually lower anxiety faster than open ambiguity.'
      : 'People may be more comfortable starting before everything is fully defined, with less need for rigid structure.'
  )

  return notes
}

function biggestShift(fromScores, toScores) {
  if (!fromScores || !toScores) return null

  let best = null
  DLBLS.forEach((label, i) => {
    const gap = Math.abs(fromScores[i] - toScores[i])
    if (!best || gap > best.gap) {
      best = {
        label: DIMENSIONS[i].short,
        gap,
        intro: DIMENSIONS[i].intro,
      }
    }
  })

  return best
}

export default function Culture() {
  const { profile } = useProfile()
  const cards = []

  if (profile.home && HOF[profile.home]) {
    cards.push({
      label: 'Country you grew up in',
      country: profile.home,
      note: 'Your starting baseline - what first felt normal to you.',
    })
  }
  if (profile.cc && HOF[profile.cc]) {
    cards.push({
      label: 'Where you are now',
      country: profile.cc,
      note: 'The culture you are currently adapting to at work and outside it.',
    })
  }
  if (profile.dc && HOF[profile.dc]) {
    cards.push({
      label: 'Where you may be going',
      country: profile.dc,
      note: 'A possible next setting if you make the move.',
    })
  }

  const hCurrent = HOF[profile.cc]
  const hHome = HOF[profile.home]
  const hDest = HOF[profile.dc]
  const currentShift = biggestShift(hHome, hCurrent)
  const nextShift = biggestShift(hCurrent, hDest)

  return (
    <div className="tp active">
      <div className="ibox info" style={{ marginBottom: '1.25rem' }}>
        These are broad country-level patterns from cross-cultural research. Use them to slow down your interpretations and ask better questions, not to make assumptions about every student, parent, or colleague.
      </div>

      {cards.length > 0 ? (
        <div className="g3" style={{ marginBottom: '1.25rem' }}>
          {cards.map(({ label, country, note }) => (
            <div key={country} className="card">
              <div className="csec">{label}</div>
              <div className="ct" style={{ fontSize: '1rem' }}>{country}</div>
              <div className="cs">{note}</div>
              <div style={{ display: 'grid', gap: '.7rem' }}>
                {DIMENSIONS.map((dimension, i) => (
                  <div key={dimension.key} className="hbar" style={{ marginBottom: 0 }}>
                    <div className="hbh" style={{ gap: 8, alignItems: 'center' }}>
                      <div>
                        <span className="hbn" style={{ display: 'block' }}>{dimension.short}</span>
                        <span style={{ fontSize: 11.5, color: 'var(--ink-4)' }}>{dimension.intro}</span>
                      </div>
                      <span className="hbsc" style={{ color: DCOLS[i], textAlign: 'right' }}>
                        {HOF[country][i]}
                        <span style={{ display: 'block', fontSize: 10.5, color: 'var(--ink-4)' }}>{DABBR[i]}</span>
                      </span>
                    </div>
                    <div className="hbt" style={{ marginTop: 6 }}>
                      <div className="hbf" style={{ width: `${HOF[country][i]}%`, background: DCOLS[i] }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="ibox info" style={{ marginBottom: '1.25rem' }}>
          Add your home and current country in your profile to see this page in context.
        </div>
      )}

      {hCurrent && (
        <div className="g2">
          <div className="card">
            <div className="ct">What may be going on in your classroom now</div>
            <div className="cs">
              This is the practical reading of your current posting. It is not saying every student behaves this way. It is showing the patterns that may be easiest to misread.
            </div>
            <div style={{ display: 'grid', gap: '.75rem' }}>
              {classroomRead(hCurrent).map((note) => (
                <div key={note} style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.65, paddingLeft: '.9rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, top: 0, color: 'var(--blue)' }}>•</span>
                  {note}
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <div className="ct">What the biggest shift looks like</div>
            <div className="cs">
              This helps translate the scores into the one change most likely to be shaping your experience.
            </div>

            {hHome && currentShift && (
              <div style={{ marginBottom: '1rem', padding: '.9rem 1rem', background: 'var(--surface-2)', borderRadius: 'var(--r)' }}>
                <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--ink-4)', marginBottom: 4 }}>
                  Home to current posting
                </div>
                <div style={{ fontSize: 13.5, fontWeight: 500, color: 'var(--ink)', marginBottom: 4 }}>
                  The biggest shift looks like {currentShift.label.toLowerCase()}.
                </div>
                <div style={{ fontSize: 12.5, color: 'var(--ink-3)', lineHeight: 1.55 }}>
                  Moving from {profile.home} to {profile.cc} creates a {currentShift.gap}-point gap around {currentShift.label.toLowerCase()} - {currentShift.intro}.
                </div>
              </div>
            )}

            {hCurrent && hDest && nextShift && (
              <div style={{ padding: '.9rem 1rem', background: '#EEEDFE', borderRadius: 'var(--r)' }}>
                <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--ink-4)', marginBottom: 4 }}>
                  Current posting to next move
                </div>
                <div style={{ fontSize: 13.5, fontWeight: 500, color: 'var(--ink)', marginBottom: 4 }}>
                  If you move, the biggest new adjustment may be {nextShift.label.toLowerCase()}.
                </div>
                <div style={{ fontSize: 12.5, color: 'var(--ink-3)', lineHeight: 1.55 }}>
                  Moving from {profile.cc} to {profile.dc} creates a {nextShift.gap}-point gap around {nextShift.label.toLowerCase()} - {nextShift.intro}.
                </div>
              </div>
            )}

            {!hHome && !hDest && (
              <div style={{ fontSize: 13, color: 'var(--ink-3)', lineHeight: 1.6 }}>
                Add both your home country and a destination to make this comparison more useful.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
