import { useProfile } from '../../context/ProfileContext.jsx'
import { CITIES } from '../../data/geo.js'

export default function Financial() {
  const { profile } = useProfile()
  const { sal = 0, cc, city, dc, dcity } = profile
  const cd = Object.values(CITIES).find(c => c.country === cc) || null
  const col = cd ? cd.col : 50
  const power = sal > 0 ? Math.round(sal * 100 / col) : 0
  const pct = cd && sal > 0 ? Math.round((sal - cd.med) / cd.med * 100) : null
  const ncUrl = city && dcity
    ? `https://www.numbeo.com/cost-of-living/compare_cities.jsp?country1=${encodeURIComponent(cc)}&city1=${encodeURIComponent(city)}&country2=${encodeURIComponent(dc)}&city2=${encodeURIComponent(dcity)}`
    : 'https://www.numbeo.com/cost-of-living/comparison.jsp'
  const tblCities = ['Bangkok','Dubai','Singapore','Tokyo','Shanghai','London','Zurich','Mexico City','Doha','Riyadh']

  return (
    <div className="tp active">
      <div className="g4" style={{ marginBottom: '1.25rem' }}>
        <div className="chip"><div className="chl">Your salary</div><div className="chv">{sal > 0 ? '$' + sal.toLocaleString() : '—'}</div><div className="chs">USD monthly</div></div>
        <div className="chip"><div className="chl">Buying power</div><div className="chv">{power > 0 ? '$' + power.toLocaleString() : '—'}</div><div className="chs">London-equivalent monthly</div></div>
        <div className="chip"><div className="chl">vs regional median</div><div className="chv" style={{ color: pct === null ? 'inherit' : pct >= 0 ? 'var(--teal-dark)' : 'var(--coral-dark)' }}>{pct !== null ? (pct >= 0 ? '+' : '') + pct + '%' : '—'}</div><div className="chs">Median: $4,307/mo</div></div>
        <div className="chip"><div className="chl">Cost of living</div><div className="chv">{col}</div><div className="chs">London = 100</div></div>
      </div>
      <div className="g2">
        <div className="card">
          <div className="ct">Purchasing power by city</div>
          <div className="cs">Adjusted for local costs — London = 100 baseline.</div>
          <div style={{ overflowX: 'auto' }}>
            <table className="data-table">
              <thead><tr><th>City</th><th>COL</th><th>Median salary</th><th>Buying power</th></tr></thead>
              <tbody>
                {tblCities.map(c => {
                  const d = CITIES[c]; if (!d) return null
                  const pp = Math.round(d.med * 100 / d.col)
                  const isCur = c === city
                  return (
                    <tr key={c} style={isCur ? { background: 'var(--teal-light)' } : undefined}>
                      <td style={{ fontWeight: isCur ? 500 : 400 }}>{c}{isCur && <span className="pill pt"> you</span>}</td>
                      <td>{d.col}</td>
                      <td style={{ color: 'var(--teal-dark)', fontWeight: 500 }}>${d.med.toLocaleString()}</td>
                      <td>${pp.toLocaleString()}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="card">
          <div className="ct">Deep dive with Numbeo</div>
          <div className="cs">Line-by-line city cost comparison for {city || 'your city'}{dcity ? ` vs ${dcity}` : ''}.</div>
          <a href={ncUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'inline-block', marginTop: '.75rem', textDecoration: 'none' }}>Compare cities →</a>
        </div>
      </div>
    </div>
  )
}
