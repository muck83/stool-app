import { useState } from 'react'
import { useProfile } from '../context/ProfileContext.jsx'
import { buildShareUrl } from '../utils/shareUrl.js'

export default function ProfileBar() {
  const { profile, isSharedView } = useProfile()
  const [copied, setCopied] = useState(false)
  const parts = []

  if (profile.home) parts.push({ label: 'From', value: profile.home })
  if (profile.cc)   parts.push({ label: 'Now', value: [profile.city, profile.cc].filter(Boolean).join(', ') })
  if (profile.dc)   parts.push({ label: 'Considering', value: [profile.dcity, profile.dc].filter(Boolean).join(', ') })
  if (profile.curr) parts.push({ label: 'Curriculum', value: profile.curr })

  const handleShare = () => {
    const url = buildShareUrl(profile)
    if (!url) return
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }).catch(() => {
      // Fallback: prompt
      window.prompt('Copy this link to share your stool:', url)
    })
  }

  if (!parts.length) return null

  return (
    <div className="pbar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 0 }}>
        {parts.map((p, i) => (
          <span key={p.label}>
            {i > 0 && <span style={{ color: 'rgba(26,25,23,.15)', margin: '0 4px' }}>·</span>}
            <span className="pbi">
              <span className="pbil">{p.label}:</span>
              {p.value}
            </span>
          </span>
        ))}
      </div>

      {/* Share button — only show when viewing own profile */}
      {!isSharedView && (
        <button
          onClick={handleShare}
          title="Copy a link to your stool scores"
          style={{
            fontSize: 11, fontWeight: 500,
            color: copied ? 'var(--teal-dark)' : 'var(--ink-3)',
            background: copied ? '#E1F5EE' : 'transparent',
            border: `1px solid ${copied ? 'var(--teal)' : 'var(--border-2)'}`,
            borderRadius: 'var(--r)', padding: '3px 10px',
            cursor: 'pointer', transition: 'all .2s', whiteSpace: 'nowrap',
            display: 'flex', alignItems: 'center', gap: 5,
          }}
        >
          <svg width="11" height="11" viewBox="0 0 16 16" fill="currentColor">
            <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.554 3.509a2.5 2.5 0 0 1 0 .726l6.554 3.509a2.5 2.5 0 1 1-.764 1.3L3.735 9.773a2.5 2.5 0 1 1 0-3.546l6.554-3.508A2.52 2.52 0 0 1 11 2.5z"/>
          </svg>
          {copied ? 'Link copied!' : 'Share my stool'}
        </button>
      )}
    </div>
  )
}
