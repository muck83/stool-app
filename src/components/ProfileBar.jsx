import { useState } from 'react'
import { useProfile } from '../context/ProfileContext.jsx'
import { buildShareUrl } from '../utils/shareUrl.js'

function SaveModal({ onClose, onSave }) {
  const [email, setEmail] = useState('')
  const [state, setState] = useState('idle')

  const handleSave = async () => {
    if (!email.trim()) return
    setState('saving')
    const result = await onSave(email.trim())
    if (result.ok) {
      setState('saved')
      setTimeout(onClose, 1500)
    } else {
      setState('error')
      setTimeout(() => setState('idle'), 3000)
    }
  }

  return (
    <div
      style={{
        position: 'fixed', inset: 0, background: 'rgba(26,25,23,.45)',
        zIndex: 9000, display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1rem', backdropFilter: 'blur(2px)',
      }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        style={{
          background: 'white', borderRadius: 'var(--rl)', padding: '1.75rem',
          maxWidth: 380, width: '100%', boxShadow: 'var(--sh-4)',
        }}
      >
        <div style={{ fontFamily: 'var(--serif)', fontSize: '1.35rem', marginBottom: '.35rem', lineHeight: 1.2 }}>
          Save your profile
        </div>
        <div style={{ fontSize: 13, color: 'var(--ink-3)', marginBottom: '1.1rem', lineHeight: 1.55 }}>
          Enter your email and we'll save your profile so you can load it from any device. No password needed.
        </div>
        <div className="fg" style={{ marginBottom: '.85rem' }}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSave()}
            placeholder="your@email.com"
            autoFocus
          />
        </div>
        {state === 'saved' && (
          <div className="ibox" style={{ marginBottom: '.75rem' }}>Saved.</div>
        )}
        {state === 'error' && (
          <div className="ibox danger" style={{ marginBottom: '.75rem' }}>
            Something went wrong. Check your connection and try again.
          </div>
        )}
        <div style={{ display: 'flex', gap: '.5rem', justifyContent: 'flex-end' }}>
          <button onClick={onClose} className="btn btn-ghost btn-sm">Cancel</button>
          <button
            onClick={handleSave}
            disabled={state === 'saving' || !email.trim()}
            className="btn btn-primary btn-sm"
          >
            {state === 'saving' ? 'Saving…' : 'Save →'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function ProfileBar() {
  const { profile, isSharedView, profileEmail, saveToCloud, syncToCloud, cloudSyncState } = useProfile()
  const [copied, setCopied] = useState(false)
  const [showSave, setShowSave] = useState(false)

  const clean = (value) => {
    if (typeof value !== 'string') return value
    const trimmed = value.trim()
    return trimmed || ''
  }

  const joinLocation = (...values) => values.map(clean).filter(Boolean).join(', ')

  const parts = []
  const home = clean(profile.home)
  const school = clean(profile.school)
  const currentLocation = joinLocation(profile.city, profile.cc)
  const destination = joinLocation(profile.dcity, profile.dc)
  const curriculum = clean(profile.curr)

  if (home) parts.push({ label: 'From', value: home })
  if (school) parts.push({ label: 'School', value: school })
  else if (currentLocation) parts.push({ label: 'Now', value: currentLocation })
  if (!school && destination) parts.push({ label: 'Considering', value: destination })
  if (school && currentLocation) parts.push({ label: 'Location', value: currentLocation })
  if (school && destination) parts.push({ label: 'Considering', value: destination })
  if (curriculum) parts.push({ label: 'Curriculum', value: curriculum })

  const handleShare = () => {
    const url = buildShareUrl(profile)
    if (!url) return
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }).catch(() => {
      window.prompt('Copy this link to share your stool:', url)
    })
  }

  const handleSync = async () => {
    if (cloudSyncState !== 'idle') return
    await syncToCloud()
  }

  const syncLabel = cloudSyncState === 'saving' ? 'Saving…'
    : cloudSyncState === 'saved' ? 'Saved ✓'
    : cloudSyncState === 'error' ? 'Save failed'
    : 'Sync'

  if (!parts.length) return null

  return (
    <>
      {showSave && (
        <SaveModal
          onClose={() => setShowSave(false)}
          onSave={saveToCloud}
        />
      )}

      <div className="pbar">
        <div className="pbar-summary">
          {parts.map((part, i) => (
            <span key={`${part.label}-${i}`} className="pbi">
              <span className="pbil">{part.label}</span>
              <span>{part.value}</span>
            </span>
          ))}
        </div>

        {!isSharedView && (
          <div className="pbar-actions">
            {profileEmail && (
              <div className="pbar-cloud" title={`Saved to ${profileEmail}`}>
                <span
                  style={{
                    fontSize: 11, color: 'var(--ink-4)',
                    whiteSpace: 'nowrap', maxWidth: 180,
                    overflow: 'hidden', textOverflow: 'ellipsis',
                  }}
                >
                  {profileEmail}
                </span>
                <button
                  onClick={handleSync}
                  title="Sync latest changes to your saved profile"
                  className={`btn btn-sm ${cloudSyncState === 'saved' ? 'btn-outline' : cloudSyncState === 'error' ? 'btn-coral' : 'btn-ghost'}`}
                  disabled={cloudSyncState !== 'idle'}
                >
                  {syncLabel}
                </button>
              </div>
            )}

            {!profileEmail && (
              <button
                onClick={() => setShowSave(true)}
                title="Save your profile to load it from any device"
                className="btn btn-outline btn-sm"
              >
                Save profile
              </button>
            )}

            <button
              onClick={handleShare}
              title="Copy a link to your stool scores"
              className={`btn btn-sm ${copied ? 'btn-outline' : 'btn-ghost'}`}
            >
              <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.554 3.509a2.5 2.5 0 0 1 0 .726l6.554 3.509a2.5 2.5 0 1 1-.764 1.3L3.735 9.773a2.5 2.5 0 1 1 0-3.546l6.554-3.508A2.52 2.52 0 0 1 11 2.5z" />
              </svg>
              {copied ? 'Link copied' : 'Share'}
            </button>
          </div>
        )}
      </div>
    </>
  )
}
