-- Cultural vocabulary module feedback
-- Collects teacher responses after completing a cultural vocab activity.
-- Used to identify inaccuracies, gaps, and what landed well.

CREATE TABLE IF NOT EXISTS pd_cultural_feedback (
  id               UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  activity_id      TEXT        NOT NULL,   -- e.g. 'ksa-cultural-001'
  module_id        TEXT        NOT NULL,   -- e.g. 'ksa-001'
  country          TEXT        NOT NULL,   -- e.g. 'Kingdom of Saudi Arabia'
  context_selected TEXT,                  -- e.g. 'middle-east' (from user selector)
  rating           INTEGER     CHECK (rating BETWEEN 1 AND 5),
  inaccuracies     TEXT,                  -- "Did anything feel inaccurate or off?"
  what_was_missing TEXT,                  -- "What did we miss?"
  most_useful      TEXT,                  -- "What was most useful or surprising?"
  submitted_at     TIMESTAMPTZ DEFAULT NOW()
);

-- Allow anyone to insert feedback (no auth required for pilot)
ALTER TABLE pd_cultural_feedback ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anyone can submit feedback"
  ON pd_cultural_feedback
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Mark only: no public read
CREATE POLICY "no public read"
  ON pd_cultural_feedback
  FOR SELECT
  TO anon
  USING (false);
