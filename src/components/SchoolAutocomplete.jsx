import { useState, useRef, useEffect, useMemo } from 'react'
import { normaliseForSearch } from '../data/schoolAliases.js'

/**
 * School name autocomplete combobox.
 *
 * Props:
 *  value          – controlled value
 *  onChange       – called with the chosen/typed string (fires on every keystroke AND selection)
 *  onSelect       – called with the full record { school, city, country } when user picks from dropdown
 *  schools        – array of { school, country, city } canonical records from the DB
 *  country        – currently selected country (used to rank results)
 *  placeholder
 */
export default function SchoolAutocomplete({ value, onChange, onSelect, schools, country, placeholder }) {
  const [open, setOpen] = useState(false)
  const [highlighted, setHighlighted] = useState(0)
  const inputRef = useRef(null)
  const listRef = useRef(null)

  // Deduplicated school list sorted: same-country first, then alphabetically
  const candidates = useMemo(() => {
    const seen = new Set()
    return schools
      .filter(s => s.school && s.school.trim())
      .filter(s => { if (seen.has(s.school)) return false; seen.add(s.school); return true })
      .sort((a, b) => {
        const aLocal = a.country === country ? 0 : 1
        const bLocal = b.country === country ? 0 : 1
        if (aLocal !== bLocal) return aLocal - bLocal
        return a.school.localeCompare(b.school)
      })
  }, [schools, country])

  // Filter to query
  const suggestions = useMemo(() => {
    if (!value || value.length < 2) return []
    const q = normaliseForSearch(value)
    const results = candidates.filter(s =>
      normaliseForSearch(s.school).includes(q)
    )
    return results.slice(0, 8)
  }, [value, candidates])

  // Reset highlight when suggestions change
  useEffect(() => { setHighlighted(0) }, [suggestions.length])

  const select = (record) => {
    onChange(record.school)
    if (onSelect) onSelect(record)
    setOpen(false)
    inputRef.current?.blur()
  }

  const handleKey = (e) => {
    if (!open || !suggestions.length) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setHighlighted(h => Math.min(h + 1, suggestions.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHighlighted(h => Math.max(h - 1, 0))
    } else if (e.key === 'Enter' && suggestions[highlighted]) {
      e.preventDefault()
      select(suggestions[highlighted])
    } else if (e.key === 'Escape') {
      setOpen(false)
    }
  }

  // Scroll highlighted item into view
  useEffect(() => {
    if (listRef.current) {
      const item = listRef.current.children[highlighted]
      item?.scrollIntoView({ block: 'nearest' })
    }
  }, [highlighted])

  const showDropdown = open && suggestions.length > 0

  return (
    <div style={{ position: 'relative' }}>
      <input
        ref={inputRef}
        value={value}
        onChange={e => { onChange(e.target.value); setOpen(true) }}
        onFocus={() => setOpen(true)}
        onBlur={() => {
          setTimeout(() => setOpen(false), 150)
          // When user finishes typing, check if value matches a known school and auto-fill
          if (onSelect && value && value.length >= 3) {
            const exact = candidates.find(s => s.school.toLowerCase() === value.toLowerCase())
            if (exact) onSelect(exact)
          }
        }}
        onKeyDown={handleKey}
        placeholder={placeholder}
        autoComplete="off"
        style={{ width: '100%' }}
      />

      {showDropdown && (
        <div
          ref={listRef}
          style={{
            position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 100,
            background: 'white',
            border: '1px solid var(--border-2)',
            borderTop: 'none',
            borderRadius: '0 0 var(--r) var(--r)',
            boxShadow: '0 6px 18px rgba(0,0,0,.1)',
            maxHeight: 260,
            overflowY: 'auto',
          }}
        >
          {suggestions.map((s, i) => (
            <div
              key={s.school + i}
              onMouseDown={() => select(s)}
              onMouseEnter={() => setHighlighted(i)}
              style={{
                padding: '8px 12px',
                cursor: 'pointer',
                background: i === highlighted ? 'var(--surface-2)' : 'white',
                borderBottom: i < suggestions.length - 1 ? '1px solid var(--border)' : 'none',
              }}
            >
              <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink)', lineHeight: 1.3 }}>
                {s.school}
              </div>
              <div style={{ fontSize: 11, color: 'var(--ink-4)', marginTop: 1 }}>
                {[s.city, s.country].filter(Boolean).join(', ')}
                {s.country === country && (
                  <span style={{ marginLeft: 6, fontSize: 10, background: '#E1F5EE', color: 'var(--teal-dark)', padding: '1px 5px', borderRadius: 8, fontWeight: 500 }}>
                    same country
                  </span>
                )}
              </div>
            </div>
          ))}
          {value.length >= 2 && (
            <div style={{
              padding: '7px 12px',
              fontSize: 11, color: 'var(--ink-4)',
              borderTop: suggestions.length ? '1px solid var(--border)' : 'none',
              fontStyle: 'italic',
            }}>
              Not listed? Just type the full name — it'll be added as a new school.
            </div>
          )}
        </div>
      )}
    </div>
  )
}
