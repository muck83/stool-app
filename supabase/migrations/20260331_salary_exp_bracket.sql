-- Add experience bracket to salary submissions
-- Allows teachers to self-report their years of international teaching experience.
-- Used to contextualise salary comparisons (early-career vs. senior).

ALTER TABLE salary_submissions
  ADD COLUMN IF NOT EXISTS exp_bracket TEXT
    CHECK (exp_bracket IN ('0-2', '3-6', '7-14', '15+'));

COMMENT ON COLUMN salary_submissions.exp_bracket IS
  'Self-reported years of international teaching experience: 0-2, 3-6, 7-14, 15+. Optional — NULL means not reported.';
