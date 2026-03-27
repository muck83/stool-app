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
      style={{ position: 'fixed', inset: 0, background: 'rgba(26,25,23,.45)', zIndex: 9000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div style={{ background: 'white', borderRadius: 12, padding: '1.5rem', maxWidth: 360, width: '100%', boxShadow: '0 8px 40px rgba(0,0,0,.18)' }}>
        <div style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', marginBottom: '.35rem' }}>Save your profile</div>
        <div style={{ fontSize: 13, color: 'var(--ink-3)', marginBottom: '1rem', lineHeight: 1.55 }}>
          Enter your email. We will save your profile so you can load it from any device. No password needed.
        </div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSave()}
          placeholder="your@email.com"
          autoFocus
          style={{ width: '100%', fontSize: 14, padding: '9px 12px', border: '1px solid var(--border)', borderRadius: 'var(--r)', outline: 'none', boxSizing: 'border-box', marginBottom: '.75rem' }}
        />
        {state === 'saved' && (
          <div style={{ fontSize: 13, color: 'var(--teal-dark)', background: '#E1F5EE', borderRadius: 'var(--r)', padding: '8px 12px', marginBottom: '.75rem' }}>
            Saved.
          </div>
        )}
        {state === 'error' && (
          <div style={{ fontSize: 13, color: '#D85A30', background: '#FAECE7', borderRadius: 'var(--r)', padding: '8px 12px', marginBottom: '.75rem' }}>
            Something went wrong. Check your connection and try again.
          </div>
        )}
        <div style={{ display: 'flex', gap: '.5rem', justifyContent: 'flex-end' }}>
          <button onClick={onClose} style={{ fontSize: 13, color: 'var(--ink-3)', background: 'none', border: '1px solid var(--border)', borderRadius: 'var(--r)', padding: '7px 14px', cursor: 'pointer' }}>
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={state === 'saving' || !email.trim()}
            style={{ fontSize: 13, fontWeight: 500, color: 'white', background: 'var(--teal)', border: 'none', borderRadius: 'var(--r)', padding: '7px 16px', cursor: state === 'saving' ? 'wait' : 'pointer', opacity: !email.trim() ? 0.6 : 1 }}
          >
            {state === 'saving' ? 'Saving...' : 'Save ->'}
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

  const syncLabel = cloudSyncState === 'saving' ? 'Saving...'
    : cloudSyncState === 'saved' ? 'Saved'
    : cloudSyncState === 'error' ? 'Save failed'
    : 'Sync'

  const syncColor = cloudSyncState === 'saved'
    ? 'var(--teal-dark)'
    : cloudSyncState === 'error'
      ? '#D85A30'
      : 'var(--ink-3)'

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
              <span className="pbil">{part.label}:</span>
              <span>{part.value}</span>
            </span>
          ))}
        </div>

        {!isSharedView && (
          <div className="pbar-actions">
            {profileEmail && (
              <div className="pbar-cloud">
                <span style={{ fontSize: 11, color: 'var(--ink-4)', whiteSpace: 'nowrap' }}>
                  {profileEmail}
                </span>
                <button
                  onClick={handleSync}
                  title="Sync latest changes to your saved profile"
                  style={{
                    fontSize: 11,
                    fontWeight: 500,
                    color: syncColor,
                    background: cloudSyncState === 'saved' ? '#E1F5EE' : cloudSyncState === 'error' ? '#FAECE7' : 'transparent',
                    border: `1px solid ${cloudSyncState === 'saved' ? 'var(--teal)' : cloudSyncState === 'error' ? '#D85A30' : 'var(--border-2)'}`,
                    borderRadius: 'var(--r)',
                    padding: '3px 9px',
                    cursor: cloudSyncState === 'idle' ? 'pointer' : 'default',
                    transition: 'all .2s',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {syncLabel}
                </button>
              </div>
            )}

            {!profileEmail && (
              <button
                onClick={() => setShowSave(true)}
                title="Save your profile to load it from any device"
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  color: 'var(--teal-dark)',
                  background: 'transparent',
                  border: '1px solid var(--teal)40',
                  borderRadius: 'var(--r)',
                  padding: '3px 10px',
                  cursor: 'pointer',
                  transition: 'all .2s',
                  whiteSpace: 'nowrap',
                }}
              >
                Save profile
              </button>
            )}

            <button
              onClick={handleShare}
              title="Copy a link to your stool scores"
              style={{
                fontSize: 11,
                fontWeight: 500,
                color: copied ? 'var(--teal-dark)' : 'var(--ink-3)',
                background: copied ? '#E1F5EE' : 'transparent',
                border: `1px solid ${copied ? 'var(--teal)' : 'var(--border-2)'}`,
                borderRadius: 'var(--r)',
                padding: '3px 10px',
                cursor: 'pointer',
                transition: 'all .2s',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                gap: 5,
              }}
            >
              <svg width="11" height="11" viewBox="0 0 16 16" fill="currentColor">
                <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.554 3.509a2.5 2.5 0 0 1 0 .726l6.554 3.509a2.5 2.5 0 1 1-.764 1.3L3.735 9.773a2.5 2.5 0 1 1 0-3.546l6.554-3.508A2.52 2.52 0 0 1 11 2.5z" />
              </svg>
              {copied ? 'Link copied!' : 'Share my stool'}
            </button>
          </div>
        )}
      </div>
    </>
  )
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              