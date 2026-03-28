import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Returns null when env vars are not set so the app can fall back gracefully.
export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

export const supabaseStatus = supabase
  ? 'connected'
  : supabaseUrl || supabaseAnonKey
    ? 'misconfigured'
    : 'not-configured'

// Cached after first fetch. Only called once per session.
let cachedIp = null

async function getClientIp() {
  if (cachedIp) return cachedIp
  try {
    const res = await fetch('https://api.ipify.org?format=json', { cache: 'no-store' })
    const { ip } = await res.json()
    cachedIp = ip
    return ip
  } catch {
    return null
  }
}

async function checkGaming(ip, rec) {
  if (!supabase || !ip) return { flagged: false, reason: null }

  const { count } = await supabase
    .from('salary_submissions')
    .select('*', { count: 'exact', head: true })
    .eq('ip_address', ip)

  if (count >= 3) return { flagged: true, reason: `IP submitted ${count + 1} times` }

  const { data: dupes } = await supabase
    .from('salary_submissions')
    .select('usd')
    .ilike('school', rec.school)
    .ilike('country', rec.country)
    .eq('ip_address', ip)

  if (dupes && dupes.length > 0) {
    const similar = dupes.filter((d) => Math.abs(d.usd - rec.usd) / rec.usd < 0.1)
    if (similar.length > 0) {
      return { flagged: true, reason: 'Duplicate submission (same IP, school, salary)' }
    }
  }

  return { flagged: false, reason: null }
}

export async function fetchSalarySubmissions() {
  if (!supabase) return []
  const { data, error } = await supabase
    .from('salary_submissions')
    .select('*')
    .order('created_at', { ascending: false })
  if (error) {
    console.error('Supabase fetch error:', error)
    return []
  }
  return (data || []).map((r) => ({
    y: r.y ?? new Date(r.created_at).getFullYear(),
    country: r.country,
    city: r.city,
    school: r.school,
    curr: r.curr,
    role: r.role,
    usd: r.usd,
    housing: r.housing,
    flights: r.flights,
    tax: r.tax,
    _id: r.id,
    _remote: true,
  }))
}

export async function insertSalarySubmission(rec) {
  if (!supabase) return { error: 'not-configured' }

  const ip = await getClientIp()
  const { flagged, reason } = await checkGaming(ip, rec)

  const { data, error } = await supabase
    .from('salary_submissions')
    .insert([{
      y: rec.y,
      country: rec.country,
      city: rec.city,
      school: rec.school,
      curr: rec.curr,
      role: rec.role,
      usd: rec.usd,
      housing: rec.housing,
      flights: rec.flights,
      tax: rec.tax,
      ip_address: ip,
      flagged,
      flag_reason: reason,
      status: flagged ? 'flagged' : 'active',
    }])
    .select()
    .single()

  if (error) {
    console.error('Supabase insert error:', error)
    return { error: error.message }
  }
  return { data, flagged }
}

export async function insertSchoolReview({ school, country, answers, hours }) {
  if (!supabase) return null
  const ip = await getClientIp()
  const { data, error } = await supabase
    .from('school_reviews')
    .insert([{
      school,
      country,
      answers,
      hours_per_week: hours ? parseInt(hours, 10) : null,
      ip_address: ip,
    }])
    .select()
    .single()
  if (error) {
    console.error('Supabase insert error:', error)
    return null
  }
  return data
}

export async function fetchSchoolReviews(school) {
  if (!supabase) return []
  const { data, error } = await supabase
    .from('school_reviews')
    .select('*')
    .ilike('school', school)
  if (error) {
    console.error('Supabase fetch error:', error)
    return []
  }
  return data || []
}

export async function searchSchoolReviews(query) {
  if (!supabase || !query.trim()) return []
  try {
    const { data, error } = await supabase
      .from('school_reviews')
      .select('*')
      .ilike('school', `%${query.trim()}%`)
      .order('created_at', { ascending: false })
    if (error) {
      console.error('Supabase search error:', error)
      return []
    }
    return (data || []).filter(r => r.status !== 'removed')
  } catch (e) {
    console.error('Search failed:', e)
    return []
  }
}

export async function fetchRecentReviews(limit = 10) {
  if (!supabase) return []
  try {
    const { data, error } = await supabase
      .from('school_reviews')
      .select('school, country, created_at')
      .order('created_at', { ascending: false })
      .limit(limit)
    if (error) { console.error('Recent reviews fetch error:', error); return [] }
    return (data || []).filter(r => r.status !== 'removed')
  } catch { return [] }
}

export async function insertDiagnosticSubmission({ profile, answers, result, schoolLegScore }) {
  if (!supabase) return { error: 'not-configured' }

  const ip = await getClientIp()
  const snapshot = profile || {}
  const { data, error } = await supabase
    .from('diagnostic_submissions')
    .insert([{
      name: snapshot.name || null,
      school: snapshot.school || null,
      home: snapshot.home || null,
      curr: snapshot.curr || null,
      yrs: snapshot.yrs || null,
      current_country: snapshot.cc || null,
      current_city: snapshot.city || null,
      destination_country: snapshot.dc || null,
      destination_city: snapshot.dcity || null,
      package_score: snapshot.pkg ?? null,
      place_score: snapshot.plc ?? null,
      current_school_score: snapshot.sch ?? null,
      school_leg_score: schoolLegScore ?? null,
      diagnosis_kind: result?.kind || null,
      answered_count: Object.keys(answers || {}).length,
      profile_snapshot: snapshot,
      answers,
      result,
      ip_address: ip,
      status: 'active',
    }])
    .select()
    .single()

  if (error) {
    console.error('Diagnostic insert error:', error)
    return { error: error.message }
  }

  return { data }
}

export async function saveProfileToCloud(email, profileData) {
  if (!supabase || !email) return { error: 'not-configured' }
  const clean = email.trim().toLowerCase()
  const { error } = await supabase
    .from('profiles')
    .upsert(
      { email: clean, profile: profileData, updated_at: new Date().toISOString() },
      { onConflict: 'email' },
    )
  if (error) {
    console.error('Profile save error:', error)
    return { error: error.message }
  }
  return { ok: true }
}

export async function loadProfileFromCloud(email) {
  if (!supabase || !email) return null
  const clean = email.trim().toLowerCase()
  const { data, error } = await supabase
    .from('profiles')
    .select('profile, updated_at')
    .eq('email', clean)
    .single()
  if (error || !data) return null
  return { profile: data.profile, updatedAt: data.updated_at }
}

export async function adminFetchAll() {
  if (!supabase) return []
  const { data, error } = await supabase
    .from('salary_submissions')
    .select('*')
    .order('created_at', { ascending: false })
  if (error) {
    console.error(error)
    return []
  }
  return data || []
}

export async function adminUpdateStatus(id, status) {
  if (!supabase) return null
  const { error } = await supabase
    .from('salary_submissions')
    .update({ status })
    .eq('id', id)
  if (error) console.error(error)
  return !error
}
