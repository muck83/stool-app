-- Seed India Simulation 1: "The Scorecard"
-- Source: Codex-produced content package (india-the-scorecard-handoff.json)
-- Run AFTER 20260330_create_simulations.sql and 20260330_seed_india_module.sql

INSERT INTO public.pd_simulations (
  id,
  module_id,
  title,
  description,
  context,
  characters,
  nodes,
  dimension_tags,
  estimated_minutes,
  sort_order,
  status
) VALUES (
  'a1b2c3d4-0004-0001-0001-000000000001',
  'india-001',
  'The Scorecard',
  'A PTM after a student exhibition. Mrs. Rao wants proof that Ananya''s school is academically serious. Three decisions test how you handle legibility, parent-teacher communication, and the parent grapevine.',
  'A bright corridor at Banyan International School. Student work hangs beside banners that read: Rooted in India. Ready for the World. It is late August in Bengaluru. Your Year 6 students have just finished a student-led exhibition on sustainable cities. Parents have been walking through classrooms looking at design boards, reflection journals, and group presentations. Ananya is one of your strongest students. Her English is excellent, her notebooks are immaculate, and she always turns work in on time. She asks thoughtful questions, but she also wants to know exactly what counts. On project days, she often asks, "Will this be graded?" before she starts. Your school uses narrative feedback, rubrics, and portfolio reviews more than frequent unit tests. There are no class ranks. Teachers are encouraged to talk about growth, habits of inquiry, and evidence of learning rather than percentage scores whenever possible. As parents leave the exhibition, Mrs. Rao waits near your classroom door with Ananya''s portfolio in her hand. "Teacher, the exhibition was lovely," she says. "The children were confident, and I can see the effort. But I need something more concrete. We chose this school because it promised global exposure without compromising academics. If there are no marks or rank, how do I know where Ananya actually stands?" Your assessment coordinator has been very clear: no unofficial ranking, no private comparison sheets, and no ad hoc extra tests just to reassure individual families.',
  '[
  {
    "name": "You",
    "role": "2nd-year homeroom teacher at Banyan International School, Bengaluru",
    "description": "You trained in the UK, US, or Australia. You teach Year 6. Your school markets itself as global, inquiry-driven, and rooted in Indian values. You believe in project-based learning and narrative feedback, but you are still learning what parents here read as visible rigor."
  },
  {
    "name": "Mrs. Rao",
    "role": "Mother of Ananya",
    "description": "She works in human resources in Bengaluru''s tech sector. She and her husband are investing heavily in Ananya''s schooling and chose Banyan because it promised strong English, future opportunities, and a values-based environment. She is polite, highly attentive, and wants evidence that the school is academically serious."
  }
]'::jsonb,
  '{
  "setup": {
    "id": "setup",
    "type": "setup",
    "title": "Setup",
    "content": [
      "A bright corridor at Banyan International School. Student work hangs beside banners that read: Rooted in India. Ready for the World.",
      "It is late August in Bengaluru. Your Year 6 students have just finished a student-led exhibition on sustainable cities. Parents have been walking through classrooms looking at design boards, reflection journals, and group presentations.",
      "Ananya is one of your strongest students. Her English is excellent, her notebooks are immaculate, and she always turns work in on time. She asks thoughtful questions, but she also wants to know exactly what counts. On project days, she often asks, \"Will this be graded?\" before she starts.",
      "Your school uses narrative feedback, rubrics, and portfolio reviews more than frequent unit tests. There are no class ranks. Teachers are encouraged to talk about growth, habits of inquiry, and evidence of learning rather than percentage scores whenever possible.",
      "As parents leave the exhibition, Mrs. Rao waits near your classroom door with Ananya''s portfolio in her hand.",
      "\"Teacher, the exhibition was lovely,\" she says. \"The children were confident, and I can see the effort. But I need something more concrete. We chose this school because it promised global exposure without compromising academics. If there are no marks or rank, how do I know where Ananya actually stands?\"",
      "Your assessment coordinator has been very clear: no unofficial ranking, no private comparison sheets, and no ad hoc extra tests just to reassure individual families."
    ],
    "next": "dilemma_1"
  },
  "dilemma_1": {
    "id": "dilemma_1",
    "type": "dilemma",
    "title": "Dilemma 1: The Scorecard",
    "content": [
      "How do you respond?"
    ],
    "choices": [
      {
        "id": "choice_1a",
        "label": "Defend the school''s assessment model",
        "text": "\"I understand the question, Mrs. Rao. At Banyan, we do not reduce learning to rank or constant numerical comparison. We look at evidence across projects, writing, discussion, and reflection. That gives us a fuller picture of where Ananya is growing.\"",
        "next": "consequence_1a"
      },
      {
        "id": "choice_1b",
        "label": "Reassure her, then avoid committing",
        "text": "\"Of course. I completely understand. Let me put something together that gives you a clearer picture.\" You want to calm the moment down, but you are not sure what, if anything, you can actually send.",
        "next": "consequence_1b"
      },
      {
        "id": "choice_1c",
        "label": "Create a private benchmark summary",
        "text": "\"I cannot share a rank, but I can probably give you a more concrete sense of where she is, maybe a private academic snapshot across subjects.\"",
        "next": "consequence_1c"
      }
    ]
  },
  "consequence_1a": {
    "id": "consequence_1a",
    "type": "consequence",
    "title": "Consequence 1A",
    "content": [
      "Mrs. Rao nods politely. \"I understand,\" she says. But her expression tightens almost imperceptibly.",
      "Over the next two weeks, her messages become more formal. She still thanks you for updates, but the tone shifts from partnership to monitoring.",
      "Ananya begins mentioning outside practice materials. \"My mom got a workbook so I can be ready for proper tests,\" she says one afternoon. During project work, she becomes less interested in exploratory drafts and more focused on asking what the final deliverable is worth.",
      "Nothing openly confrontational happens. But the trust channel narrows. Mrs. Rao has not stopped caring about the school''s approach. She has simply decided she cannot rely on it alone for proof of rigor."
    ],
    "next": "perspective_1"
  },
  "consequence_1b": {
    "id": "consequence_1b",
    "type": "consequence",
    "title": "Consequence 1B",
    "content": [
      "Mrs. Rao looks relieved. \"Thank you, Teacher. That would help a lot.\"",
      "You leave the conversation hoping it will fade. It does not.",
      "Three days later, a WhatsApp message arrives: \"Just following up on the academic breakdown you mentioned. Even broad subject-wise feedback with standing would be useful.\"",
      "You realize she did not hear your response as empathy. She heard it as a promise.",
      "Now you are in a harder position than if you had been clear from the start."
    ],
    "next": "perspective_1"
  },
  "consequence_1c": {
    "id": "consequence_1c",
    "type": "consequence",
    "title": "Consequence 1C",
    "content": [
      "At first, it feels practical.",
      "You send a brief note summarizing Ananya as strong in English and science, secure in math, and still developing in open-ended reflection. Mrs. Rao replies immediately: \"This is exactly the clarity I needed. Thank you.\"",
      "A few days later, your assessment coordinator, Meera, stops by.",
      "\"A parent mentioned receiving a more concrete academic snapshot from you,\" she says. \"I understand the intention, but if one family gets unofficial benchmarking, others will ask for the same. We will end up rebuilding ranking culture one private message at a time.\"",
      "You now need to tell Mrs. Rao you cannot keep providing the kind of clarity that just made her trust the system more."
    ],
    "next": "perspective_1"
  },
  "perspective_1": {
    "id": "perspective_1",
    "type": "perspective",
    "title": "Perspective 1: Mrs. Rao''s View",
    "content": [
      "Mrs. Rao is not rejecting project-based learning. She is looking for trust signals.",
      "For families like hers, school choice in India is tied to sacrifice, status, and future security. Fees are not just fees. They are an investment in mobility. Parents often use visible markers such as English-medium instruction, school brand, board results, and concrete academic evidence to judge whether that investment is sound.",
      "From her perspective, asking for a clearer academic picture is not narrow-minded or anti-child. It is responsible. She chose this school because it promised both global fluency and serious education. If the school does not produce familiar signals of rigor, she may worry that the polish is outrunning the substance.",
      "The cultural dynamic here is not simply marks versus no marks. It is about what counts as legible proof that a school is academically trustworthy."
    ],
    "next": "reflection_1"
  },
  "reflection_1": {
    "id": "reflection_1",
    "type": "reflection",
    "title": "Reflection 1",
    "prompt": "What assumption was driving your response?",
    "options": [
      "If I explain the philosophy well enough, the parent will trust it.",
      "I was trying to avoid feeding a ranking culture.",
      "I wanted to keep the relationship smooth in the moment.",
      "I underestimated how much visible rigor matters to parents like Mrs. Rao.",
      "Write your own."
    ],
    "next": "dilemma_2"
  },
  "dilemma_2": {
    "id": "dilemma_2",
    "type": "dilemma",
    "title": "Dilemma 2: The Conference",
    "content": [
      "A month later, it is conference week.",
      "Ananya is performing well across subjects. Her writing is polished, her reading is strong, and she is one of the most dependable students in your class.",
      "But you have noticed a pattern. She treats every learning moment as if it should produce a measurable result. She hesitates to share rough ideas. She dislikes open-ended tasks unless you explain exactly how they will be assessed. During inquiry circles, she often waits until someone else has tested the safe answer first.",
      "You do not think she is disengaged. You think she is optimizing for correctness so strongly that it is narrowing her learning.",
      "How do you frame the conference?"
    ],
    "choices": [
      {
        "id": "choice_2a",
        "label": "Lead with concern about pressure",
        "text": "\"Ananya is doing very well, but I am concerned that she may be under too much pressure to perform. She seems so focused on marks and correctness that she is becoming hesitant in the very inquiry tasks that should help her grow.\"",
        "next": "consequence_2a"
      },
      {
        "id": "choice_2b",
        "label": "Lead with strengths, then frame it as a learning goal",
        "text": "\"Ananya has many strengths: discipline, precision, excellent language skills, and real academic commitment. One next step I want to support is intellectual risk-taking, helping her share an idea before it is perfect and treat drafts as part of learning rather than evidence of weakness.\"",
        "next": "consequence_2b"
      },
      {
        "id": "choice_2c",
        "label": "Focus on achievement and leave it alone",
        "text": "\"Ananya is doing very well. Her work is strong, her habits are excellent, and she continues to be one of the most dependable students in the class.\"",
        "next": "consequence_2c"
      }
    ]
  },
  "consequence_2a": {
    "id": "consequence_2a",
    "type": "consequence",
    "title": "Consequence 2A",
    "content": [
      "Mrs. Rao goes still for a moment.",
      "\"We are not pressuring her,\" she says carefully. \"We are only teaching her to take her work seriously.\"",
      "You try to explain that this is not about blame. But the frame is already defensive. The conversation becomes about whether the family is creating the problem rather than how the child is experiencing school.",
      "The next week, Ananya changes. She volunteers more often, but her participation sounds rehearsed. She now checks with you repeatedly: \"Is this the kind of answer you want?\"",
      "The issue has been named, but it has landed as a correction to implement quickly, not as a developmental pattern to understand."
    ],
    "next": "perspective_2"
  },
  "consequence_2b": {
    "id": "consequence_2b",
    "type": "consequence",
    "title": "Consequence 2B",
    "content": [
      "Mrs. Rao smiles at discipline and commitment. When you describe risk-taking as a learning goal rather than a personality defect, she leans in.",
      "\"What do you mean exactly?\" she asks. \"At home she says she wants to be fully prepared before she speaks.\"",
      "You explain that in your classroom, visible thinking matters. Students are expected to try ideas aloud, test possibilities, and learn through partial answers, not only final ones.",
      "Mrs. Rao nods slowly. \"I understand. We do talk a lot at home about doing things properly. Maybe she is hearing that as don''t speak until it is perfect.\"",
      "The conversation opens. You and Mrs. Rao agree on a small plan: you will create lower-stakes spaces for Ananya to share tentative thinking, and Mrs. Rao will begin praising process and initiative, not only polished outcomes."
    ],
    "next": "perspective_2"
  },
  "consequence_2c": {
    "id": "consequence_2c",
    "type": "consequence",
    "title": "Consequence 2C",
    "content": [
      "The conference is smooth. Mrs. Rao leaves satisfied.",
      "Six weeks later, report comments go out. In Ananya''s learner profile section, you write: \"Ananya is encouraged to take more intellectual risks and participate more freely in exploratory tasks without waiting for certainty.\"",
      "That evening, Mrs. Rao messages you. \"Teacher, I was surprised by this comment. At the conference you said she was doing very well. If there was a concern about how she approaches learning, I wish I had known earlier.\"",
      "She is right. By avoiding the conversation to preserve short-term harmony, you made the later feedback feel less transparent."
    ],
    "next": "perspective_2"
  },
  "perspective_2": {
    "id": "perspective_2",
    "type": "perspective",
    "title": "Perspective 2: Mrs. Rao''s View",
    "content": [
      "For Mrs. Rao, seriousness about academics is not evidence of damage. It is evidence of care.",
      "Many Indian families treat education as the most reliable route to security and upward mobility. In that context, discipline, correctness, and visible achievement can feel morally responsible, especially when parents are making financial sacrifices to access a better school.",
      "That does not mean parents like Mrs. Rao reject inquiry or creativity. But they often need the school to translate those goals into terms that still look rigorous. If the teacher frames the issue as pressure created by the family, the parent may feel accused. If the teacher frames it as a learning pattern that can be broadened without lowering standards, the conversation becomes possible.",
      "The cultural dynamic here is about the difference between academic care as the family understands it and academic growth as the school wants to cultivate it."
    ],
    "next": "reflection_2"
  },
  "reflection_2": {
    "id": "reflection_2",
    "type": "reflection",
    "title": "Reflection 2",
    "prompt": "What were you optimizing for when you framed the conversation?",
    "options": [
      "I wanted to be direct and honest.",
      "I wanted to protect the relationship while still naming the issue.",
      "I worried that critiquing marks-orientation would sound like critiquing the family''s values.",
      "I chose short-term comfort over long-term clarity.",
      "Write your own."
    ],
    "next": "dilemma_3"
  },
  "dilemma_3": {
    "id": "dilemma_3",
    "type": "dilemma",
    "title": "Dilemma 3: The Parent Group",
    "content": [
      "It is February.",
      "Your class is juggling assessments, a service-learning event, an inter-school spelling competition, and costume details for a heritage performance. The school app posts information, but not always in the sequence parents want.",
      "Mrs. Rao messages you: \"Teacher, a few of us parents were thinking it would help to make a small WhatsApp group with you. Just six or seven of us from the class. Not for complaints, only for quick clarifications about deadlines, competitions, costume details, and school terms. Sometimes the portal updates are not enough, and parents are anyway checking with each other.\"",
      "You know this is partly about convenience, and partly about something else: parents comparing notes, reducing uncertainty, and validating their reading of the school.",
      "How do you respond?"
    ],
    "choices": [
      {
        "id": "choice_3a",
        "label": "Decline the group",
        "text": "\"Thank you, Mrs. Rao. I really appreciate the thought, but I find it fairest to keep communication through the school app and official class updates so everyone gets the same information. Please do message me directly if there is something specific about Ananya.\"",
        "next": "consequence_3a"
      },
      {
        "id": "choice_3b",
        "label": "Accept the group",
        "text": "\"That sounds useful. I would be happy to join a small group if it helps parents stay clear on class logistics.\"",
        "next": "consequence_3b"
      },
      {
        "id": "choice_3c",
        "label": "Counter-propose a whole-class structure",
        "text": "\"I understand the need for quick clarity, but I also need to keep communication manageable and equitable. What if we do one whole-class Q and A channel or weekly FAQ update with a set time window for clarifications?\"",
        "next": "consequence_3c"
      }
    ]
  },
  "consequence_3a": {
    "id": "consequence_3a",
    "type": "consequence",
    "title": "Consequence 3A",
    "content": [
      "Mrs. Rao responds politely. The parent group forms without you.",
      "At first, nothing seems different. Then you begin to notice that many questions reach you already processed through the grapevine: \"Some parents were wondering...\" \"We heard that...\"",
      "The group becomes the place where parents compare interpretations, validate concerns, and decide which issues are worth escalating.",
      "You have protected your boundaries. But you are now outside an important layer of how families are navigating your class."
    ],
    "next": "perspective_3"
  },
  "consequence_3b": {
    "id": "consequence_3b",
    "type": "consequence",
    "title": "Consequence 3B",
    "content": [
      "The first week is efficient. One message clears up costume confusion in minutes. Another helps parents understand a competition deadline.",
      "Then the stream thickens. Questions start coming in late at night: What exactly does formative mean on this rubric? Is the spelling competition optional or just framed as optional? Should children prepare extra for the service event or only the listed materials?",
      "No one is rude. That is not the problem. The problem is that the channel quietly becomes the real place where school gets interpreted.",
      "You are more accessible and more informed. You are also carrying more invisible labor than before."
    ],
    "next": "perspective_3"
  },
  "consequence_3c": {
    "id": "consequence_3c",
    "type": "consequence",
    "title": "Consequence 3C",
    "content": [
      "Mrs. Rao pauses, then replies: \"Yes, that seems fair. The main thing is that parents need clarity.\"",
      "You create a visible structure: one whole-class weekly FAQ post and a short Q and A window on weekday evenings. Parents can ask about deadlines, terminology, and event logistics in one place.",
      "The result is not perfectly calm, but it is much more transparent. One parent asks what formative assessment means. Another parent answers partially. You then step in and clarify. The conversation becomes shared rather than private.",
      "You have not removed the parent grapevine, but you have given it a healthier official alternative."
    ],
    "next": "perspective_3"
  },
  "perspective_3": {
    "id": "perspective_3",
    "type": "perspective",
    "title": "Perspective 3: Mrs. Rao''s View",
    "content": [
      "For Mrs. Rao, the parent network is not just gossip. It is infrastructure.",
      "Research on school choice in India shows that parents often rely on informal networks, what many would casually call the grapevine, to compare schools, validate decisions, and reduce uncertainty. In competitive school markets, group judgment can feel safer than individual interpretation.",
      "A WhatsApp group therefore feels practical. It lets parents make sense of school language, check expectations quickly, and reassure themselves that they are not missing something important.",
      "From the teacher''s side, the same channel can become after-hours interpretation work and an engine for escalation. The issue is not whether parents care too much. The issue is whether the school has built a sustainable way to answer the kinds of questions families will ask anyway."
    ],
    "next": "reflection_3"
  },
  "reflection_3": {
    "id": "reflection_3",
    "type": "reflection",
    "title": "Reflection 3",
    "prompt": "What were you protecting when you made your choice?",
    "options": [
      "My time and after-hours boundaries.",
      "Equity across all families.",
      "A smoother relationship with involved parents.",
      "A communication structure I could actually sustain.",
      "Write your own."
    ],
    "next": "debrief"
  },
  "debrief": {
    "id": "debrief",
    "type": "debrief",
    "title": "Debrief",
    "pathSummaryIntro": "Display the learner''s three choices in sequence.",
    "sections": [
      {
        "title": "What Was Really Happening",
        "content": [
          "This simulation exercised three recurring tensions in Indian private and international-school contexts.",
          "School Choice, Brand Value, and Academic Rigor: Research on school choice in India shows that many parents use English-medium instruction, school reputation, board results, visible discipline, teacher attention, and concrete academic evidence as signals of quality. For families paying private or international-school fees, legible academic seriousness is often part of what makes the school feel trustworthy.",
          "Parent-Teacher Communication: Recent qualitative work on parent-teacher meetings in Indian schools shows that relationships improve when teachers are receptive, specific, and respectful. Parents often become frustrated not only by problems themselves, but by feeling dismissed, vaguely reassured, or insufficiently informed about next steps.",
          "Informal Networks and School Navigation: In Indian school markets, families do not make sense of schools alone. They use relatives, neighbors, other parents, and WhatsApp-style networks to compare interpretations and validate decisions. For parents, this can feel like responsible navigation. For teachers, it can feel like an unofficial parallel system."
        ]
      },
      {
        "title": "Where the International-School Layer Matters",
        "content": [
          "International schools in India often market themselves as both global and appropriately Indian. That combination can attract families who want English, confidence, and future mobility without giving up cultural rootedness or visible academic seriousness.",
          "The tension is not that parents want contradictory things. The tension is that the school may communicate its philosophy in ways that sound holistic and future-facing, while parents are still looking for familiar proof that the school is rigorous enough to justify the investment."
        ]
      },
      {
        "title": "Research Anchors",
        "content": [
          "Boruah, B., Phogat, P., and Singh, A. (2024). A qualitative exploration of parent-teacher meetings in Indian schools.",
          "Ullah, A., Mukherjee, A., and Middendorf, G. (2025). School preferences of middle-class Indians.",
          "Babu, S. S., and Mahajan, A. (2021). Branding an ''Inter''national school: Fusing ''Indian values'' with a global diploma.",
          "Gurney, E. (2017). Choosing schools, choosing selves.",
          "Parikh, R. et al. (2019). It is like a mind attack: stress and coping among urban school-going adolescents in India."
        ]
      }
    ],
    "finalPrompt": "If you could go back to the first moment, when Mrs. Rao asked how she should know where Ananya actually stands, what would you say now? How would you preserve both clarity and trust without rebuilding rank culture one parent at a time?"
  }
}'::jsonb,
  '["School Choice, Brand Value, and Academic Rigor","Parent-Teacher Communication","Informal Networks and School Navigation"]'::jsonb,
  20,
  1,
  'live'
)
ON CONFLICT (id) DO UPDATE SET
  title        = EXCLUDED.title,
  description  = EXCLUDED.description,
  context      = EXCLUDED.context,
  characters   = EXCLUDED.characters,
  nodes        = EXCLUDED.nodes,
  status       = EXCLUDED.status;
