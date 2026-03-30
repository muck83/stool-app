-- Create pd_simulations table
CREATE TABLE public.pd_simulations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  module_id text REFERENCES public.pd_modules(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text,
  context text NOT NULL,
  characters jsonb NOT NULL,
  nodes jsonb NOT NULL,
  dimension_tags integer[],
  estimated_minutes integer DEFAULT 20,
  sort_order integer DEFAULT 0,
  status text DEFAULT 'draft' CHECK (status IN ('draft','live','archived')),
  created_at timestamptz DEFAULT now()
);

-- Create pd_simulation_responses table
CREATE TABLE public.pd_simulation_responses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text NOT NULL,
  simulation_id uuid REFERENCES public.pd_simulations(id) ON DELETE CASCADE,
  node_id text NOT NULL,
  choice_id text,
  reflection_text text,
  created_at timestamptz DEFAULT now()
);

-- Indexes
CREATE INDEX idx_sim_responses_session
  ON public.pd_simulation_responses(session_id, simulation_id, created_at);

-- RLS Policies
ALTER TABLE public.pd_simulations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pd_simulation_responses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read live simulations"
  ON public.pd_simulations FOR SELECT
  USING (status = 'live');

CREATE POLICY "Public insert responses"
  ON public.pd_simulation_responses FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Users read own responses"
  ON public.pd_simulation_responses FOR SELECT
  USING (true);
