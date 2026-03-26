import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Returns null when env vars are not set — app falls back to seed data gracefully
export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

export const supabaseStatus = supabase
  ? 'connected'
  : supabaseUrl || supabaseAnonKey
    ? 'misconfigured'   // one key present but not the other
    : 'not-configured'  // no keys at all

// ─── Salary submissions ───────────────────────────────────────────────────────

export async function fetchSalarySubmissions() {
  if (!supabase) return []
  const { data, error } = await supabase
    .from('salary_submissions')
    .select('*')
    .order('created_at', { ascending: false })
  if (error) { console.error('Supabase fetch error:', error); return [] }
  // Normalise Supabase rows to the same shape as SALARY_DB_SEED
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
    _id:     r.id,       // use Supabase uuid as local key
    _remote: true,       // flag so UI can distinguish community vs seed records
  }))
}

export async function insertSalarySubmission(rec) {
  if (!supabase) return { error: 'not-configured' }
  const { data, error } = await supabase
    .from('salary_submissions')
    .insert([{
      y:       rec.y,
      country: rec.country,
      city:    rec.city,
      school:  rec.school,
      curr:    rec.curr,
      role:    rec.role,
      usd:     rec.usd,
      housing: rec.housing,
      flights: rec.flights,
      tax:     rec.tax,
    }])
    .select()
    .single()
  if (error) {
    console.error('Supabase insert error:', error)
    return { error: error.message }
  }
  return { data }
}

// ─── School reviews ───────────────────────────────────────────────────────────

export async function insertSchoolReview({ school, country, answers, hours }) {
  if (!supabase) return null
  const { data, error } = await supabase
    .from('school_reviews')
    .insert([{
      school,
      country,
      answers,   // stored as jsonb
      hours_per_week: hours ? parseInt(hours) : null,
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
