import { createContext, useContext, useState, useCallback, useEffect } from 'react'
import { decodeShareParam, clearShareParam } from '../utils/shareUrl.js'
import { normaliseHousing, normaliseFlights, normaliseTax, normaliseCurriculum } from '../data/options.js'
import { saveProfileToCloud, loadProfileFromCloud } from '../lib/supabase.js'

const STORAGE_KEY    = 'stool_profile_v1'
const TAB_KEY        = 'stool_active_tab_v1'
const EMAIL_KEY      = 'stool_profile_email_v1'

const DEFAULT_PROFILE = {
  name: '', home: '', yrs: '', curr: '',
  cc: '', city: '', school: '', sal: 0, hous: '', flt: '', tax: '',
  dc: '', dcity: '',
  sch: 5, plc: 5, pkg: 5,
}

function migrateProfile(p) {
  return {
    ...p,
    hous: normaliseHousing(p.hous),
    flt:  normaliseFlights(p.flt),
    tax:  normaliseTax(p.tax),
    curr: normaliseCurriculum(p.curr),
  }
}

function loadSaved() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    return migrateProfile({ ...DEFAULT_PROFILE, ...parsed })
  } catch { return null }
}

function loadSavedTab() {
  try { return localStorage.getItem(TAB_KEY) || 'overview' } catch { return 'overview' }
}

function loadSavedEmail() {
  try { return localStorage.getItem(EMAIL_KEY) || null } catch { return null }
}

const ProfileContext = createContext(null)

export function ProfileProvider({ children }) {
  const saved = loadSaved()
  const sharedProfile = decodeShareParam(window.location.search)

  const [profile,        setProfile]        = useState(sharedProfile ? { ...DEFAULT_PROFILE, ...sharedProfile } : (saved || DEFAULT_PROFILE))
  const [activeTab,      setActiveTabState] = useState(saved && !sharedProfile ? loadSavedTab() : 'overview')
  const [showOnboarding, setShowOnboarding] = useState(!saved && !sharedProfile)
  const [isSharedView,   setIsSharedView]   = useState(!!sharedProfile)
  const [profileEmail,   setProfileEmail]   = useState(loadSavedEmail)   // cloud account email
  const [cloudSyncState, setCloudSyncState] = useState('idle')           // 'idle' | 'saving' | 'saved' | 'error'

  // Persist profile to localStorage whenever it changes
  useEffect(() => {
    if (!showOnboarding) {
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(profile)) } catch {}
    }
  }, [profile, showOnboarding])

  const setActiveTab = useCallback((tab) => {
    setActiveTabState(tab)
    try { localStorage.setItem(TAB_KEY, tab) } catch {}
  }, [])

  const updateProfile = useCallback((updates) => {
    setProfile(prev => ({ ...prev, ...updates }))
  }, [])

  // Launch dashboard immediately — profile may or may not be filled in
  const launchDashboard = useCallback((profileData) => {
    setProfile(profileData)
    setShowOnboarding(false)
    setActiveTabState('overview')
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profileData))
      localStorage.setItem(TAB_KEY, 'overview')
    } catch {}
  }, [])

  // Skip onboarding entirely — browse with empty defaults
  const skipOnboarding = useCallback(() => {
    setShowOnboarding(false)
    setActiveTabState('overview')
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_PROFILE)) } catch {}
  }, [])

  // ── Cloud account functions ───────────────────────────────────────────────

  // Save current profile to Supabase keyed by email
  const saveToCloud = useCallback(async (email, profileOverride = null) => {
    setCloudSyncState('saving')
    const result = await saveProfileToCloud(email, profileOverride || profile)
    if (result.ok) {
      setProfileEmail(email)
      try { localStorage.setItem(EMAIL_KEY, email) } catch {}
      setCloudSyncState('saved')
      setTimeout(() => setCloudSyncState('idle'), 3000)
    } else {
      setCloudSyncState('error')
      setTimeout(() => setCloudSyncState('idle'), 4000)
    }
    return result
  }, [profile])

  // Load profile from Supabase by email — used for returning users
  const loadFromCloud = useCallback(async (email) => {
    const result = await loadProfileFromCloud(email)
    if (!result) return { error: 'not-found' }
    const migrated = migrateProfile({ ...DEFAULT_PROFILE, ...result.profile })
    setProfile(migrated)
    setProfileEmail(email)
    setShowOnboarding(false)
    setActiveTabState('overview')
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated))
      localStorage.setItem(EMAIL_KEY, email)
      localStorage.setItem(TAB_KEY, 'overview')
    } catch {}
    return { ok: true, updatedAt: result.updatedAt }
  }, [])

  // Sync latest profile up to cloud (called from ProfileBar sync button)
  const syncToCloud = useCallback(async () => {
    if (!profileEmail) return
    return saveToCloud(profileEmail)
  }, [profileEmail, saveToCloud])

  // ── Standard profile management ───────────────────────────────────────────

  const editProfile = useCallback(() => { setShowOnboarding(true) }, [])

  const resetProfile = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY)
      localStorage.removeItem(TAB_KEY)
      localStorage.removeItem(EMAIL_KEY)
    } catch {}
    clearShareParam()
    setProfile(DEFAULT_PROFILE)
    setProfileEmail(null)
    setActiveTabState('overview')
    setShowOnboarding(true)
    setIsSharedView(false)
  }, [])

  const dismissSharedView = useCallback(() => {
    clearShareParam()
    setIsSharedView(false)
    const own = loadSaved()
    if (own) { setProfile(own); setShowOnboarding(false) }
    else { setProfile(DEFAULT_PROFILE); setShowOnboarding(true) }
  }, [])

  return (
    <ProfileContext.Provider value={{
      profile, updateProfile, launchDashboard, skipOnboarding, editProfile, resetProfile,
      activeTab, setActiveTab,
      showOnboarding,
      isSharedView, dismissSharedView,
      profileEmail, saveToCloud, loadFromCloud, syncToCloud, cloudSyncState,
    }}>
      {children}
    </ProfileContext.Provider>
  )
}

export function useProfile() {
  const ctx = useContext(ProfileContext)
  if (!ctx) throw new Error('useProfile must be us