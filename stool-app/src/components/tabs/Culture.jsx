import { useProfile } from '../../context/ProfileContext.jsx'
import { HOF, DLBLS, DABBR, DCOLS } from '../../data/hofstede.js'

export default function Culture() {
  const { profile } = useProfile()
  const ctrs = []
  if (profile.home && HOF[profile.home]) ctrs.push({ lbl: 'Your home culture', c: profile.home, note: 'Your baseline — what you learned as normal' })
  if (profile.cc   && HOF[profile.cc])   ctrs.push({ lbl: 'Current posting',   c: profile.cc,   note: 'Where you are now adapting to' })
  if (profile.dc   && HOF[profile.dc])   ctrs.push({ lbl: 'Considering',        c: profile.dc,   note: 'Potential next move' })
  const hC = HOF[profile.cc], hH = HOF[profile.home]

  return (
    <div className="tp active">
      {ctrs.length > 0 ? (
        <div className="g3" style={{ marginBottom: '1.25rem' }}>
          {ctrs.map(({ lbl, c, note }) => (
            <div key={c} className="card">
              <div className="csec">{lbl}</div>
              <div className="ct" style={{ fontSize: '1rem' }}>{c}</div>
              <div className="cs">{note}</div>
              {DLBLS.map((d, i) => (
                <div key={d} className="hbar">
                  <div className="hbh">
                    <span className="hbn">{DABBR[i]} — {d}</span>
                    <span className="hbsc" style={{ color: DCOLS[i] }}>{HOF[c][i]}</span>
                  </div>
                  <div className="hbt"><div className="hbf" style={{ width: `${HOF[c][i]}%`, background: DCOLS[i] }} /></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div className="ibox info" style={{ marginBottom: '1.25rem' }}>Add your home and current country in your profile to see your cultural analysis.</div>
      )}
      {hC && (
        <div className="card">
          <div className="ct">What this means in your classroom right now</div>
          <div className="cs">Grounded in cross-cultural research — see the Research tab for the scholars behind this.</div>
          <div style={{ fontSize: 13.5, color: 'var(--ink-3)', lineHeight: 1.75 }}>
            {hC[0] > 70
              ? <p style={{ marginBottom: '1rem' }}><strong>Authority distance ({hC[0]}):</strong> Hierarchy is the operating system. Students are unlikely to challenge you publicly. "Yes" is often a relational response — build explicit low-stakes feedback channels.</p>
              : <p style={{ marginBottom: '1rem' }}><strong>Authority distance ({hC[0]}):</strong> Students expect genuine collegial dialogue. Professional pushback is engagement, not disrespect.</p>}
            {hC[1] < 35
              ? <p style={{ marginBottom: '1rem' }}><strong>Group-oriented culture ({hC[1]}):</strong> Students' identity is relational. Individual praise in front of peers can cause discomfort. Group work is a genuine cultural strength — lean into it.</p>
              : hC[1] > 70
              ? <p style={{ marginBottom: '1rem' }}><strong>Individually-oriented culture ({hC[1]}):</strong> Students are self-advocating. Expect individual grade negotiations and direct disagreement.</p>
              : <p style={{ marginBottom: '1rem' }}><strong>Mixed individualism ({hC[1]}):</strong> Students shift between individual and group modes.</p>}
            {hH && <p><strong>Your adaptation gap:</strong> Moving from {profile.home} to {profile.cc}. {Math.abs(hH[0]-hC[0]) > 30 || Math.abs(hH[1]-hC[1]) > 30 ? 'This is a significant cultural distance — expect adaptation to take 6–12 months.' : 'Cultural distance is moderate and manageable.'}</p>}
          </div>
        </div>
      )}
    </div>
  )
}
