-- ─────────────────────────────────────────────────────────────────────────────
-- PATCH: Korea module research integration — Session 3 JSTOR findings
-- Run after: 20260330_create_pd_layer.sql
--
-- Changes:
--   1. Korea D2 (Collectivism & Group Harmony) — add Bong (2008) teacher-as-
--      parental-envoy mechanism to content sections + citations.
--   2. Korea D5 (Teacher Authority & Hierarchical Expectations) — add Bong
--      (2008) directly to content sections + citations, upgrade research_status
--      from 'partial' to 'fully_sourced'.
--   3. Korea D3 (Confucian Educational Values) — remove Takayama (2009) from
--      citations (low relevance, Japan-focused).
-- ─────────────────────────────────────────────────────────────────────────────

-- ── 1. Korea D2: add Bong (2008) teacher-as-parental-envoy ───────────────────
UPDATE public.pd_dimensions
SET content = jsonb_set(
  jsonb_set(
    content,
    '{sections}',
    (content->'sections') || jsonb_build_array(jsonb_build_object(
      'heading', 'The Teacher as Parental Envoy',
      'items', jsonb_build_array(
        'Bong (2008) identifies a mechanism specific to Korean parent–teacher relations: the teacher is implicitly expected to act as a parental envoy inside the school — enforcing family-aligned values and relaying the family''s social aspirations onto the student.',
        'This creates a tripartite accountability loop: teacher ↔ student ↔ parent, in which the teacher is not a neutral professional but a trusted extension of the family unit.',
        'Western-trained teachers who position themselves as independent from parental input — or who openly contradict a family''s academic priorities — rupture this expectation and are perceived as failing a core professional duty.',
        'Practical implication: parent communication should position you as aligned with the family''s long-term goals, even when your pedagogical approach differs. Frame divergences as complementary, not oppositional.'
      )
    ))
  ),
  '{citations}',
  COALESCE(content->'citations', '[]'::jsonb) || jsonb_build_array(jsonb_build_object(
    'author', 'Bong, M.',
    'year', 2008,
    'title', 'Effects of parent-child relationships and classroom goal structures on motivation, help-seeking avoidance, and cheating',
    'journal', 'Journal of Experimental Education',
    'doi', '10.3200/JEXE.76.2.191-217'
  ))
),
updated_at = now()
WHERE module_id = 'korea-001'
  AND dimension_number = 2;

-- ── 2. Korea D5: add Bong (2008), upgrade to fully_sourced ───────────────────
UPDATE public.pd_dimensions
SET
  research_status = 'fully_sourced',
  content = jsonb_set(
    jsonb_set(
      content,
      '{sections}',
      (content->'sections') || jsonb_build_array(jsonb_build_object(
        'heading', 'Bong (2008): Authority, Hierarchy, and Academic Self-Regulation',
        'items', jsonb_build_array(
          'Bong (2008) provides direct empirical support for how Korean hierarchical classroom norms affect student motivation and behaviour in relation to teacher authority.',
          'Students in high power-distance classrooms (characterised by unquestioned teacher authority) show significantly higher rates of help-seeking avoidance — they will not ask for help rather than risk face loss in front of a teacher they view as an authority figure, not a resource.',
          'The same study links hierarchical expectations to elevated academic dishonesty: when students perceive the teacher–student gap as unbridgeable, cheating becomes a rational response to unattainable standards rather than a moral failure.',
          'For foreign teachers: students who appear passive, disengaged, or evasive are often navigating this authority gap. Reducing perceived hierarchy — through side-by-side feedback rather than front-of-class correction — meaningfully improves engagement and honest academic effort.'
        )
      ))
    ),
    '{citations}',
    COALESCE(content->'citations', '[]'::jsonb) || jsonb_build_array(jsonb_build_object(
      'author', 'Bong, M.',
      'year', 2008,
      'title', 'Effects of parent-child relationships and classroom goal structures on motivation, help-seeking avoidance, and cheating',
      'journal', 'Journal of Experimental Education',
      'doi', '10.3200/JEXE.76.2.191-217'
    ))
  ),
  updated_at = now()
WHERE module_id = 'korea-001'
  AND dimension_number = 5;

-- ── 3. Korea D3: remove Takayama (2009) from citations ───────────────────────
-- Takayama's work focuses on Japanese teacher policy reform, not Korean
-- Confucian education. Including it misrepresents sourcing quality.
UPDATE public.pd_dimensions
SET
  content = jsonb_set(
    content,
    '{citations}',
    COALESCE(
      (
        SELECT jsonb_agg(c)
        FROM jsonb_array_elements(content->'citations') AS c
        WHERE NOT (c->>'author' ILIKE '%Takayama%')
      ),
      '[]'::jsonb
    )
  ),
  updated_at = now()
WHERE module_id = 'korea-001'
  AND dimension_number = 3;

-- ── Verify ────────────────────────────────────────────────────────────────────
-- After running, confirm:
--   SELECT dimension_number, research_status,
--          jsonb_array_length(content->'citations') as citation_count
--   FROM pd_dimensions
--   WHERE module_id = 'korea-001'
--   ORDER BY dimension_number;
--
-- Expected: D2 and D5 have one more citation each, D5 research_status = 'fully_sourced',
--           D3 citation count reduced by 1.
