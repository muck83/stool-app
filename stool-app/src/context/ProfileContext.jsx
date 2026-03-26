import { createContext, useContext, useState, useCallback, useEffect } from 'react'
import { decodeShareParam, clearShareParam } from '../utils/shareUrl.js'

const STORAGE_KEY = 'stool_profile_v1'
const TAB_KEY = 'stool_active_tab_v1'

const DEFAULT_PROFILE = {
  name: '', home: '', yrs: '', curr: '', subj: '',
  cc: '', city: '', sal: 0, hous: '', flt: '', tax: '',
  dc: '', dcity: '',
  sch: 5, plc: 5, pkg: 5,
}

function loadSaved() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    // Merge with defaults so new fields added later don't break existing saves
    return { ...DEFAULT_PROFILE, ...parsed }
  } catch {
    return null
  }
}

function loadSavedTab() {
  try {
    return localStorage.getItem(TAB_KEY) || 'overview'
  } catch {
    return 'overview'
  }
}

const ProfileContext = createContext(null)

export function ProfileProvider({ children }) {
  const saved = loadSaved()

  // Detect incoming share link — takes precedence over local save
  const sharedProfile = decodeShareParam(window.location.search)

  const [profile, setProfile] = useState(
    sharedProfile ? { ...DEFAULT_PROFILE, ...sharedProfile } : (saved || DEFAULT_PROFILE)
  )
  const [activeTab, setActiveTabState] = useState(saved && !sharedProfile ? loadSavedTab() : 'overview')
  const [showOnboarding, setShowOnboarding] = useState(!saved && !sharedProfile)
  // isSharedView: true when loading someone else's shared link
  const [isSharedView, setIsSharedView] = useState(!!sharedProfile)

  // Persist profile whenever it changes (only after onboarding is complete)
  useEffect(() => {
    if (!showOnboarding) {
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(profile)) } catch {}
    }
  }, [profile, showOnboarding])

  // Persist active tab
  const setActiveTab = useCallback((tab) => {
    setActiveTabState(tab)
    try { localStorage.setItem(TAB_KEY, tab) } catch {}
  }, [])

  const updateProfile = useCallback((updates) => {
    setProfile(prev => ({ ...prev, ...updates }))
  }, [])

  const launchDashboard = useCallback((profileData) => {
    setProfile(profileData)
    setShowOnboarding(false)
    setActiveTabState('overview')
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profileData))
      localStorage.setItem(TAB_KEY, 'overview')
    } catch {}
  }, [])

  const editProfile = useCallback(() => {
    setShowOnboarding(true)
  }, [])

  const resetProfile = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY)
      localStorage.removeItem(TAB_KEY)
    } catch {}
    clearShareParam()
    setProfile(DEFAULT_PROFILE)
    setActiveTabState('overview')
    setShowOnboarding(true)
    setIsSharedView(false)
  }, [])

  const dismissSharedView = useCallback(() => {
    clearShareParam()
    setIsSharedView(false)
    // If they have their own saved profile, load it; otherwise go to onboarding
    const own = loadSaved()
    if (own) {
      setProfile(own)
      setShowOnboarding(false)
    } else {
      setProfile(DEFAULT_PROFILE)
      setShowOnboarding(true)
    }
  }, [])

  return (
    <ProfileContext.Provider value={{
      profile, updateProfile, launchDashboard, editProfile, resetProfile,
      activeTab, setActiveTab,
      showOnboarding,
      isSharedView, dismissSharedView,
    }}>
      {children}
    </ProfileContext.Provider>
  )
}

export function useProfile() {
  const ctx = useContext(ProfileContext)
  if (!ctx) throw new Error('useProfile must be used within ProfileProvider')
  return ctx
}
