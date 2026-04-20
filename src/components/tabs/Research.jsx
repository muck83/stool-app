const RESEARCHERS = [
  { name: 'Geert Hofstede', key: 'Six cultural dimensions — the foundational framework', desc: 'Measured cultures across power distance, individualism, masculinity, uncertainty avoidance, long-term orientation, and indulgence. The original IBM study across 50+ countries remains the most replicated cross-cultural research.', tags: ['Power distance','Individualism','Masculinity','Uncertainty avoidance'] },
  { name: 'Markus & Kitayama (1991)', key: 'Independent vs. interdependent self-construal', desc: "Pioneered research on how culture shapes selfhood. These construals explain why the same feedback lands completely differently in different classrooms.", tags: ['Self-construal','Classroom dynamics'] },
  { name: 'Harry C. Triandis (1995)', key: 'In-group loyalty and high-context communication', desc: "Showed that in-group loyalty in collectivist cultures can supersede formal institutional rules — essential for understanding why policies don't always translate into behaviour.", tags: ['In-group loyalty','Communication'] },
  { name: 'Shalom H. Schwartz (1992)', key: 'Cultural value priorities — autonomy vs embeddedness', desc: 'His embeddedness vs autonomy dimension directly predicts whether teachers will be expected to follow curriculum strictly or exercise professional judgment.', tags: ['Value theory','Autonomy'] },
  { name: 'Inglehart & Welzel (WVS)', key: 'Traditional/secular and survival/self-expression axes', desc: "The World Values Survey tracks cultural values across 100+ countries over 40+ years, revealing how quickly a culture's values are actually shifting.", tags: ['WVS','Value change'] },
  { name: 'Michael Minkov', key: 'Refined individualism scores using WVS', desc: "Revealed important North-South distinctions Hofstede's East-West framing missed. Within-region variation can be as significant as cross-continental differences.", tags: ['Refined scores','North-South distinctions'] },
  { name: 'Grossmann & Santos', key: 'Individualism is rising — scores are not static', desc: 'Research showing individualism is increasing globally, particularly in rapidly urbanising economies. Published scores may significantly underestimate current individualism.', tags: ['Cultural change','Urbanisation'] },
]

export default function Research() {
  return (
    <div className="tp active">
      <div style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', marginBottom: '.5rem' }}>The research behind this platform</div>
      <div style={{ fontSize: 13, color: 'var(--ink-3)', maxWidth: 600, lineHeight: 1.6, marginBottom: '1.5rem' }}>
        The cultural insights, dimension scores, and classroom guidance throughout stool are grounded in peer-reviewed research. These are the scholars whose work has been translated into practical guidance for educators.
      </div>
      <div className="g3" style={{ marginBottom: '1.5rem' }}>
        {RESEARCHERS.map(r => (
          <div key={r.name} className="card" style={{ transition: 'box-shadow .2s' }}
            onMouseOver={e => e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,.08)'}
            onMouseOut={e => e.currentTarget.style.boxShadow = 'none'}>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '1rem', marginBottom: 3 }}>{r.name}</div>
            <div style={{ fontSize: 11, color: 'var(--teal-dark)', fontWeight: 500, marginBottom: '.6rem' }}>{r.key}</div>
            <div style={{ fontSize: 12.5, color: 'var(--ink-3)', lineHeight: 1.6, marginBottom: '.75rem' }}>{r.desc}</div>
            {r.tags.map(t => <span key={t} className="pill pt">{t}</span>)}
          </div>
        ))}
      </div>
      <div className="card">
        <div className="ct">A note on using this research</div>
        <div style={{ fontSize: 13.5, color: 'var(--ink-3)', lineHeight: 1.75, maxWidth: 720 }}>
          <p style={{ marginBottom: '1rem' }}>Cultural dimension scores are national averages — they describe tendencies, not individuals. Your school's specific culture may differ significantly from the national average.</p>
          <p>These scores are also not fixed in time. Research by Grossmann and Santos shows that cultures — especially rapidly urbanising ones in Asia — are shifting toward more individual expression faster than the published scores reflect. Use this as a starting orientation, not a prediction.</p>
        </div>
      </div>
    </div>
  )
}
