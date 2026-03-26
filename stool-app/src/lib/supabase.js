import { createClient } from '@supabase/supabase-js'

const supabaseUrl     = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Returns null when env vars are not set — app falls back to seed data gracefully
export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

export const supabaseStatus = supabase
  ? 'connected'
  : supabaseUrl || supabaseAnonKey
    ? 'misconfigured'
    : 'not-configured'

// ─── IP capture ──────────────────────────────────────────────────────────────
// Cached after first fetch — only called once per session
let _cachedIp = null

async function getClientIp() {
  if (_cachedIp) return _cachedIp
  try {
    const res = await fetch('https://api.ipify.org?format=json', { cache: 'no-store' })
    const { ip } = await res.json()
    _cachedIp = ip
    return ip
  } catch {
    return null
  }
}

// ─── Gaming detection ────────────────────────────────────────────────────────
async function checkGaming(ip, rec) {
  if (!supabase || !ip) return { flagged: false, reason: null }

  // Count existing submissions from this IP
  const { count } = await supabase
    .from('salary_submissions')
    .select('*', { count: 'exact', head: true })
    .eq('ip_address', ip)

  if (count >= 3) return { flagged: true, reason: `IP submitted ${count + 1} times` }

  // Check for near-duplicate: same school + country + salary within 10%
  const { data: dupes } = await supabase
    .from('salary_submissions')
    .select('usd')
    .ilike('school', rec.school)
    .ilike('country', rec.country)
    .eq('ip_address', ip)

  if (dupes && dupes.length > 0) {
    const similar = dupes.filter(d => Math.abs(d.usd - rec.usd) / rec.usd < 0.1)
    if (similar.length > 0) return { flagged: true, reason: 'Duplicate submission (same IP, school, salary)' }
  }

  return { flagged: false, reason: null }
}

// ─── Salary submissions ───────────────────────────────────────────────────────

export async function fetchSalarySubmissions() {
  if (!supabase) return []
  const { data, error } = await supabase
    .from('salary_submissions')
    .select('*')
    .order('created_at', { ascending: false })
  if (error) { console.error('Supabase fetch error:', error); return [] }
  return (data || []).map(r => ({
    y:       r.y ?? new Date(r.created_at).getFullYear(),
    country: r.country,
    city:    r.city,
    school:  r.school,
    curr:    r.curr,
    role:    r.role,
    usd:     r.usd,
    housing: r.housing,
    flights: r.flights,
    tax:     r.tax,
    _id:     r.id,
    _remote: true,
  }))
}

export async function insertSalarySubmission(rec) {
  if (!supabase) return { error: 'not-configured' }

  // Get IP and check for gaming in parallel
  const ip = await getClientIp()
  const { flagged, reason } = await checkGaming(ip, rec)

  const { data, error } = await supabase
    .from('salary_submissions')
    .insert([{
      y:           rec.y,
      country:     rec.country,
      city:        rec.city,
      school:      rec.school,
      curr:        rec.curr,
      role:        rec.role,
      usd:         rec.usd,
      housing:     rec.housing,
      flights:     rec.flights,
      tax:         rec.tax,
      ip_address:  ip,
      flagged,
      flag_reason: reason,
      status:      flagged ? 'flagged' : 'active',
    }])
    .select()
    .single()

  if (error) {
    console.error('Supabase insert error:', error)
    return { error: error.message }
  }
  return { data, flagged }
}

// ─── School reviews ───────────────────────────────────────────────────────────

export async function insertSchoolReview({ school, country, answers, hours }) {
  if (!supabase) return null
  const ip = await getClientIp()
  const { data, error } = await supabase
    .from('school_reviews')
    .insert([{
      school,
      country,
      answers,
      hours_per_week: hours ? parseInt(hours) : null,
      ip_address: ip,
    }])
    .select()
    .single()
  if (error) { console.error('Supabase insert error:', error); return null }
  return data
}

export async function fetchSchoolReviews(school) {
  if (!supabase) return []
  const { data, error } = await supabase
    .from('school_reviews')
    .select('*')
    .ilike('school', school)
  if (error) { console.error('Supabase fetch error:', error); return [] }
  return data || []
}

// ─── Admin functions (use service role key only — never in frontend) ──────────

export async function adminFetchAll() {
  if (!supabase) return []
  const { data, error } = await supabase
    .from('salary_submissions')
    .select('*')
    .order('created_at', { ascending: false })
  if (error) { console.error(error); return [] }
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
