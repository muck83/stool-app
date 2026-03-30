-- India module seed
-- Source: india-module-live-seed.json (Codex content package)
-- Run AFTER 20260330_create_pd_layer.sql

-- ── Module ────────────────────────────────────────────────────────────────────

INSERT INTO public.pd_modules (
  id, country_code, title, tagline,
  research_backbone, hofstede_data,
  completion_threshold, unlock_reward, status
) VALUES (
  'india-001', 'IN', 'India',
  'How aspiration, visible rigor, English, and parent networks shape everyday school-home friction.',
  '[
    {"author": "Ullah, Mukherjee, and Middendorf", "year": 2025, "title": "School preferences of middle-class Indians", "doi": "10.1007/s44217-025-00617-0"},
    {"author": "Boruah, Phogat, and Singh", "year": 2024, "title": "A qualitative exploration of parent-teacher meetings in Indian schools", "doi": "10.1080/03004279.2024.2424260"},
    {"author": "Babu and Mahajan", "year": 2021, "title": "Branding an Inter-national school: Fusing Indian values with a global diploma", "doi": "10.1080/09620214.2020.1853589"},
    {"author": "Gilla, Narwana, and Gupta", "year": 2025, "title": "Investigating the determinants of private school choice", "doi": "10.1080/03057925.2024.2393129"},
    {"author": "Gurney", "year": 2017, "title": "Choosing schools, choosing selves", "doi": "10.1080/09620214.2017.1279560"},
    {"author": "Kumar, Pandita, and Singh", "year": 2024, "title": "To be on the seventh sky: shadow education in India", "doi": "10.1080/03004279.2024.2412993"},
    {"author": "Pienyu, Margaret, and D''Souza", "year": 2024, "title": "Academic stress and parental pressure among adolescents in Karnataka", "doi": "10.4103/jehp.jehp_2094_23"},
    {"author": "Parikh et al.", "year": 2019, "title": "It is like a mind attack: stress and coping among urban school-going adolescents in India", "doi": "10.1186/s40359-019-0306-z"}
  ]',
  '{"PDI": 77, "IDV": 48, "MAS": 56, "UAI": 40, "LTO": 51, "IND": 26}',
  80, 'Salary data unlocked', 'live'
)
ON CONFLICT (id) DO UPDATE SET
  title              = EXCLUDED.title,
  tagline            = EXCLUDED.tagline,
  research_backbone  = EXCLUDED.research_backbone,
  hofstede_data      = EXCLUDED.hofstede_data,
  status             = EXCLUDED.status;

-- ── Dimensions ────────────────────────────────────────────────────────────────

INSERT INTO public.pd_dimensions (module_id, dimension_number, title, research_status, content)
VALUES

('india-001', 1, 'School Choice, English, and Trust Signals', 'fully_sourced', '{
  "summary": "In many Indian private and international-school contexts, school choice is not only about pedagogy. Families often read English-medium instruction, school reputation, discipline, teacher attention, and peer recommendations as trust signals for mobility, status, and future security.",
  "sections": [
    {
      "heading": "What parents may be optimizing for",
      "items": [
        "Parents are often making a high-stakes decision under conditions of uncertainty. Fees, school brand, board affiliation, English-medium instruction, and visible seriousness can all stand in for trust.",
        "Choice is social as well as academic. Parents may be choosing not only a curriculum, but also a peer group, a class identity, and a future biography for the child."
      ]
    },
    {
      "heading": "Why English matters so much",
      "items": [
        "English often carries more than linguistic value. It is linked to service-sector mobility, prestige, and the ability to move comfortably through elite or global spaces.",
        "A request for stronger English, clearer benchmarks, or a more formal academic signal is often about opportunity and legibility, not just preference."
      ]
    },
    {
      "heading": "What teachers can miss",
      "items": [
        "A parent who asks where the child stands may not be rejecting holistic learning. They may be testing whether the school''s claims can be translated into recognizable proof.",
        "If the school explains philosophy but never translates it into concrete evidence, parents may build a parallel system of tutoring, comparisons, or informal benchmarking."
      ]
    }
  ],
  "citations": [
    {"author": "Ullah, Mukherjee, and Middendorf", "year": 2025, "doi": "10.1007/s44217-025-00617-0"},
    {"author": "Gilla, Narwana, and Gupta", "year": 2025, "doi": "10.1080/03057925.2024.2393129"},
    {"author": "Gurney", "year": 2017, "doi": "10.1080/09620214.2017.1279560"}
  ]
}'),

('india-001', 2, 'Visible Rigor, Marks, and Assessment Legibility', 'fully_sourced', '{
  "summary": "Many families in India do not separate good teaching from visible proof of rigor. Marks, tests, corrected notebooks, homework volume, and comparative clarity can function as signals that the school is serious enough to justify the investment.",
  "sections": [
    {
      "heading": "Why marks stay powerful",
      "items": [
        "Marks are easy to read, easy to compare, and widely recognized across school systems. Even families who like inquiry-based learning may still want familiar evidence that standards are high.",
        "In fee-paying contexts, narrative feedback without anchors can feel elegant but vague."
      ]
    },
    {
      "heading": "What holistic can sound like to parents",
      "items": [
        "If teachers talk only about growth, voice, reflection, or confidence, some parents may worry the school is softening accountability rather than broadening learning.",
        "Requests for rank, tests, or a more concrete academic snapshot often reflect a search for legibility, not a complete rejection of broader goals."
      ]
    },
    {
      "heading": "What usually helps",
      "items": [
        "Translate the school''s model into observable evidence: what the child can now do, what comes next, and how the school knows.",
        "It is possible to refuse private ranking while still offering concrete, consistent academic clarity."
      ]
    }
  ],
  "citations": [
    {"author": "Ullah, Mukherjee, and Middendorf", "year": 2025, "doi": "10.1007/s44217-025-00617-0"},
    {"author": "Boruah, Phogat, and Singh", "year": 2024, "doi": "10.1080/03004279.2024.2424260"},
    {"author": "Babu and Mahajan", "year": 2021, "doi": "10.1080/09620214.2020.1853589"}
  ]
}'),

('india-001', 3, 'Parent-Teacher Communication and Follow-Through', 'fully_sourced', '{
  "summary": "Recent research on parent-teacher meetings in India suggests that relationship quality depends less on friendliness alone and more on receptivity, clarity, and visible follow-through. Parents often react strongly when reassurance in the moment is not matched by later action or consistent feedback.",
  "sections": [
    {
      "heading": "What parents often expect",
      "items": [
        "Parents often come to meetings expecting usable information: what the concern is, how serious it is, and what the school plans to do next.",
        "Vague comfort can feel respectful in the moment but evasive afterward, especially when report comments later introduce a concern that was never discussed directly."
      ]
    },
    {
      "heading": "Where breakdowns happen",
      "items": [
        "Teachers may soften the message to preserve the relationship. Parents may hear the same softening as a promise or as evidence that no issue exists.",
        "When teachers explain a philosophy without translating it into next steps, parents often fill the gap with private tutoring, repeated follow-up, or informal comparison."
      ]
    },
    {
      "heading": "A useful working principle",
      "items": [
        "Relationship preservation is not the same as clarity. The most durable conversations often combine warmth with specific evidence and a concrete plan.",
        "If you cannot do something, say so clearly. If you will do something, name exactly what and when."
      ]
    }
  ],
  "citations": [
    {"author": "Boruah, Phogat, and Singh", "year": 2024, "doi": "10.1080/03004279.2024.2424260"},
    {"author": "Ullah, Mukherjee, and Middendorf", "year": 2025, "doi": "10.1007/s44217-025-00617-0"},
    {"author": "Gurney", "year": 2017, "doi": "10.1080/09620214.2017.1279560"}
  ]
}'),

('india-001', 4, 'Global Exposure and Appropriately Indian Schooling', 'fully_sourced', '{
  "summary": "International schools in India often market themselves as both globally oriented and rooted in Indian values. Research suggests that this fusion is powerful for families, but also unstable: what counts as Indian inside the school may be narrower, more classed, or more culturally selective than the marketing language implies.",
  "sections": [
    {
      "heading": "Why the fusion works",
      "items": [
        "Many families are not choosing between global and Indian. They want both: strong English, confidence, and global mobility, alongside cultural rootedness and moral fit.",
        "This is especially true in schools that sell prestige through international credentials while also promising recognizably Indian values."
      ]
    },
    {
      "heading": "Why this can become friction",
      "items": [
        "A school''s version of Indian values is never neutral. It may privilege some languages, traditions, classed behaviors, or religious-coded norms more than others while presenting them as universal.",
        "Parents who ask for clarity about heritage events, values language, or belonging may be asking how plural the school''s idea of India really is."
      ]
    },
    {
      "heading": "What helps",
      "items": [
        "Replace vague civilizational language with specific, plural invitations. Tell families what an event means in practice and what kinds of participation count.",
        "Treat cultural fit as something to clarify, not something families should simply infer."
      ]
    }
  ],
  "citations": [
    {"author": "Babu and Mahajan", "year": 2021, "doi": "10.1080/09620214.2020.1853589"},
    {"author": "Gurney", "year": 2017, "doi": "10.1080/09620214.2017.1279560"},
    {"author": "Ullah, Mukherjee, and Middendorf", "year": 2025, "doi": "10.1007/s44217-025-00617-0"}
  ]
}'),

('india-001', 5, 'Pressure, Perfection, and Academic Risk-Taking', 'fully_sourced', '{
  "summary": "In many Indian school contexts, seriousness about academics is experienced as care. At the same time, newer research continues to show high levels of academic stress and parental pressure among students. Teachers in inquiry-oriented schools often meet this tension when students become highly polished but reluctant to think aloud, draft publicly, or risk being wrong.",
  "sections": [
    {
      "heading": "Why caution can be misread",
      "items": [
        "A student who waits to speak until an answer is polished may not be disengaged. They may be protecting competence in a context where mistakes carry social weight.",
        "Families may understand polish, discipline, and correctness as evidence of responsibility, not evidence of damage."
      ]
    },
    {
      "heading": "What the stress research adds",
      "items": [
        "Recent Indian studies continue to show that parental pressure, examination anxiety, and academic competition shape student well-being.",
        "This means teachers should not romanticize perfectionism, but they also should not frame every performance-oriented habit as parental failure."
      ]
    },
    {
      "heading": "What teachers can do",
      "items": [
        "Frame risk-taking as an additional academic skill, not as a lowering of standards.",
        "Use low-stakes rehearsal, thinking partners, and concrete prompts that make exploratory work feel structured rather than exposed."
      ]
    }
  ],
  "citations": [
    {"author": "Pienyu, Margaret, and D''Souza", "year": 2024, "doi": "10.4103/jehp.jehp_2094_23"},
    {"author": "Parikh et al.", "year": 2019, "doi": "10.1186/s40359-019-0306-z"},
    {"author": "Kumar, Pandita, and Singh", "year": 2024, "doi": "10.1080/03004279.2024.2412993"}
  ]
}'),

('india-001', 6, 'Parent Networks, WhatsApp, and School Navigation', 'fully_sourced', '{
  "summary": "In Indian school markets, families rarely navigate school life alone. Parent networks, relatives, neighborhood referrals, and WhatsApp groups often function as infrastructure for comparison, reassurance, and interpretation.",
  "sections": [
    {
      "heading": "What the network is doing",
      "items": [
        "Informal networks help parents compare schools, validate interpretations, and decide which concerns are worth escalating.",
        "This is especially powerful in fee-paying school markets where parents feel pressure to make a good choice and avoid hidden mistakes."
      ]
    },
    {
      "heading": "What teachers tend to feel",
      "items": [
        "From the teacher side, these same networks can feel like a parallel system that amplifies anxiety, speeds escalation, and creates after-hours interpretation work.",
        "A request for a small WhatsApp group may therefore be about clarity and reassurance, not only access."
      ]
    },
    {
      "heading": "What schools can do",
      "items": [
        "If families will compare notes anyway, give them a healthier official structure: predictable FAQ rhythms, visible clarifications, and clear boundaries.",
        "The goal is not to eliminate the grapevine. It is to keep the official channel more reliable than the rumor chain."
      ]
    }
  ],
  "citations": [
    {"author": "Ullah, Mukherjee, and Middendorf", "year": 2025, "doi": "10.1007/s44217-025-00617-0"},
    {"author": "Gurney", "year": 2017, "doi": "10.1080/09620214.2017.1279560"},
    {"author": "Boruah, Phogat, and Singh", "year": 2024, "doi": "10.1080/03004279.2024.2424260"}
  ]
}')

ON CONFLICT (module_id, dimension_number) DO UPDATE SET
  title             = EXCLUDED.title,
  research_status   = EXCLUDED.research_status,
  content           = EXCLUDED.content;

-- ── Scenarios ─────────────────────────────────────────────────────────────────

INSERT INTO public.pd_scenarios (module_id, title, setup, common_misread, actual_dynamic, response_framework, source_type, dimension_tags, status)
VALUES

('india-001',
 'The Scorecard',
 'After a polished student exhibition, a parent asks how she is supposed to know where her daughter actually stands if the school avoids frequent marks, rank, and comparison sheets. The child is doing well, but the parent''s real concern is whether the school''s version of rigor is legible enough to trust.',
 'This parent only cares about marks and is rejecting holistic learning.',
 'The parent may be asking for trust signals, not only marks. In many Indian private and international-school contexts, families read visible rigor as proof that the fee-paying investment is academically serious. If the school refuses ranking but also refuses concrete translation, parents often build their own parallel benchmark system.',
 '["Name the evidence the school does use: samples, rubrics, writing, discussion, transfer, and next-step patterns.", "Translate philosophy into concrete language: what the child can now do, what remains insecure, and how you know.", "Be explicit about the boundary: no private rank or unofficial comparison, but yes to clear academic information.", "Offer a predictable follow-up so the parent does not need to chase clarity through private messages."]',
 'academic', ARRAY[1,2], 'live'),

('india-001',
 'The Rough Draft',
 'At conference time, you want to raise a concern about a high-performing student who refuses to share rough thinking, waits until an answer feels safe, and treats every task as something to perfect before showing. The family is deeply invested in the child''s education and praises discipline and correctness at home.',
 'The family is overpressuring the child, and the main job is to tell them to relax.',
 'Seriousness, polish, and caution often function as signs of care in Indian schooling contexts. That does not mean the pattern is harmless, but if the teacher frames the issue only as family pressure, the parent may hear accusation rather than partnership. The more productive move is to frame risk-taking as another academic skill the school explicitly teaches.',
 '["Lead with strengths the family already values: discipline, commitment, and academic seriousness.", "Describe the concern behaviorally, not morally: reluctance to test ideas aloud, not lack of creativity.", "Explain why your classroom treats drafting, trial, and partial answers as part of learning rather than signs of weakness.", "Agree on one low-stakes support at school and one at home so the child is not simply told to be more confident."]',
 'academic', ARRAY[3,5], 'live'),

('india-001',
 'The WhatsApp Chain',
 'A few parents ask whether you will join a small WhatsApp group for quick clarifications about assessment terms, costume details, competition deadlines, and school jargon. The school app exists, but families are already comparing notes elsewhere.',
 'These parents want special access and are building a pressure group.',
 'Informal parent networks in India often function as school-navigation infrastructure. The request may be less about influence than about uncertainty reduction, validation, and speed. The real challenge is not whether parents will talk. It is whether the official school channel is clear and reliable enough to keep rumor from becoming the main interpreter.',
 '["Decide first what you can realistically sustain: no channel, a time-boxed whole-class channel, or a visible FAQ rhythm.", "If you decline a small group, offer a clear alternative rather than only saying no.", "Keep key clarifications public whenever possible so one family''s answer does not become everyone else''s rumor.", "Separate urgent student-specific issues from general class logistics to protect both equity and your time."]',
 'academic', ARRAY[3,6], 'live'),

('india-001',
 'The Heritage Day Note',
 'Your school sends a cheerful message about Indian Values Week and asks students to bring an item or reflection that represents Indian culture. A parent replies politely: what exactly counts as Indian here, and will the school make room for regional, linguistic, and family differences rather than one polished version of tradition?',
 'The parent is overcomplicating a simple cultural event.',
 'In Indian international-school contexts, language like Indian values can sound inclusive while still centering a selective version of Indianness. A parent asking for clarity may not be resisting culture. They may be testing whether the school''s version of belonging is genuinely plural or simply assumed.',
 '["Replace vague values language with concrete prompts and examples that allow multiple regional, linguistic, and family traditions.", "Check whether the school is presenting one social group''s norms as if they are universally Indian.", "Explain the educational purpose of the activity in plain language rather than relying on branding language.", "Invite questions early so families do not have to infer what kind of Indianness the school rewards."]',
 'academic', ARRAY[4,6], 'live')

ON CONFLICT (module_id, title) DO UPDATE SET
  setup             = EXCLUDED.setup,
  common_misread    = EXCLUDED.common_misread,
  actual_dynamic    = EXCLUDED.actual_dynamic,
  response_framework = EXCLUDED.response_framework,
  status            = EXCLUDED.status;
