-- Seed KSA Simulation 1: "The English-Only Wall"
-- Source: Codex-produced content package (ksa-english-only-wall.json)
-- Run AFTER 20260330_create_simulations.sql

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
  'b2c3d4e5-0002-0002-0002-000000000002',
  'ksa-001',
  'The English-Only Wall',
  'A parent shows you a planner note in your own handwriting. Her daughter told her grandmother she should speak English because Arabic is not for school.',
  'It is November at Al Noor International School. A sign above your whiteboard reads: Take risks. Share ideas. Use English. This morning, Mrs. Alharbi is waiting outside your classroom with a photo on her phone.',
  '[
    {
      "name": "You",
      "role": "2nd-year homeroom teacher at Al Noor International School",
      "description": "Trained UK/US/Australia. Year 5. Believes in inquiry, student voice, and strong relationships, and knows working inside a local context where international does not mean culturally neutral."
    },
    {
      "name": "Mrs. Alharbi",
      "role": "Mother of Layan",
      "description": "Chose international school for strong English, broader opportunities, and confident future for daughter. Also wants Layan to remain grounded in Arabic, Islam, and Saudi identity. Organized, polite, attentive."
    }
  ]',
  '{
    "setup": {
      "id": "setup",
      "type": "setup",
      "title": "Setup",
      "content": [
        "A bright classroom. Student work on the wall. A sign above the whiteboard reads: Take risks. Share ideas. Use English.",
        "It is November at Al Noor International School.",
        "Your class includes Saudi students, Arab expatriate students, and a smaller number of international families. English is the language of instruction in most subjects. Arabic and Islamic Studies are taught separately.",
        "One of the routines your grade team uses is an English-first approach. Students are encouraged to use English in class discussions, group work, and transitions. Your room has an English points chart on the wall. It is meant to be light-touch and motivational, not punitive.",
        "Layan is one of your strongest students. She reads well above grade level, writes carefully, and tracks every detail of the lesson. She is especially eager in English. She also watches adults closely and wants to understand what counts in this school.",
        "This morning, Mrs. Alharbi is waiting outside your classroom. She holds up a photo on her phone. It is a page from Layan''s planner. At the top, in your handwriting, it says: Reminder: English in class discussions.",
        "\"Layan came home upset,\" Mrs. Alharbi says calmly. \"She told her grandmother she should answer in English because Arabic is not for school. She also said she lost a point for speaking Arabic with a classmate while planning a group task. I chose this school for English, yes. But not for her to feel Arabic is a problem. Can we talk about that?\"",
        "Your school has no formal written English-only policy, but the English-first culture is strong."
      ],
      "next": "dilemma_1"
    },
    "dilemma_1": {
      "id": "dilemma_1",
      "type": "dilemma",
      "title": "Dilemma 1: The English-Only Wall",
      "content": ["How do you respond?"],
      "choices": [
        {
          "id": "choice_1a",
          "label": "Defend the English-first approach",
          "text": "\"I completely understand the concern, Mrs. Alharbi. The reason we encourage English in class is to build confidence and fluency. It is never meant as a judgment on Arabic. In an international school, students need as much English practice as possible.\"",
          "next": "consequence_1a"
        },
        {
          "id": "choice_1b",
          "label": "Reassure her, but change nothing",
          "text": "\"Thank you for telling me. I definitely don''t want Layan to feel that way. I''ll keep an eye on it.\"",
          "next": "consequence_1b"
        },
        {
          "id": "choice_1c",
          "label": "Adapt the routine",
          "text": "\"Thank you for raising this. I want English practice, but I also don''t want students to internalize that Arabic is somehow lesser. I can adjust the routine so we still use English for final sharing, but allow Arabic during planning or peer clarification when needed.\"",
          "next": "consequence_1c"
        }
      ]
    },
    "consequence_1a": {
      "id": "consequence_1a",
      "type": "consequence",
      "title": "Consequence 1A",
      "content": [
        "Mrs. Alharbi nods. \"I understand,\" she says. \"English is important.\"",
        "But the conversation closes instead of opens. Over the next two weeks, she becomes more formal in her messages. She still thanks you, but the warmth is gone.",
        "Layan, meanwhile, becomes even more vigilant. She corrects classmates: \"English, please.\" One afternoon, when a student asks for help in Arabic, Layan says quietly, \"We are not supposed to.\"",
        "What felt like an immersion routine to you has become a value hierarchy to her.",
        "At home, Mrs. Alharbi starts compensating. Layan now does extra Arabic reading each evening. The family is reinforcing identity at home because school no longer feels trustworthy on that point."
      ],
      "next": "perspective_1"
    },
    "consequence_1b": {
      "id": "consequence_1b",
      "type": "consequence",
      "title": "Consequence 1B",
      "content": [
        "Mrs. Alharbi looks relieved. \"Thank you, Teacher. I appreciate it.\"",
        "But in class, the wall chart stays up. The reminders continue. The structure is unchanged.",
        "A week later, Layan tells you, \"My mom said you were going to make it more balanced.\"",
        "That evening, a message appears: \"Teacher, thank you again for understanding. Layan said they still lose points if they use Arabic while working. I just want to understand what was adjusted.\"",
        "You were trying to avoid conflict. Instead, you created a trust gap."
      ],
      "next": "perspective_1"
    },
    "consequence_1c": {
      "id": "consequence_1c",
      "type": "consequence",
      "title": "Consequence 1C",
      "content": [
        "At first, the change feels workable.",
        "You revise the chart language from English Only to English for sharing and presenting. You tell students that bilingual thinking is allowed during planning, but final academic communication should move toward English. You also say explicitly: Arabic is not bad. English is the school''s working language in this class, but both languages matter.",
        "Layan visibly relaxes.",
        "Then your grade-level colleague Megan stops by after school. \"I heard you changed the language expectation,\" she says. \"If some classes are strict and others are flexible, families will compare. And if Arabic becomes okay during work time, some students may stay there and never stretch.\"",
        "A few days later, another parent asks whether her child can now use Hindi or Urdu in the same way.",
        "Your adaptation has opened a real pedagogical conversation. It may be the right move, but it is no longer a private fix."
      ],
      "next": "perspective_1"
    },
    "perspective_1": {
      "id": "perspective_1",
      "type": "perspective",
      "title": "Perspective 1: Mrs. Alharbi''s View",
      "content": [
        "Mrs. Alharbi did not choose an international school because she wants her daughter to become less Saudi.",
        "She chose it because she wants more doors to remain open later: university options, professional confidence, ease in English, comfort in diverse spaces. But she also assumes those gains should sit on top of a stable base, not replace it.",
        "For her, Arabic is not just a home language. It is identity, family continuity, religion, and dignity. A child answering her grandmother in English is not simply practicing language. It signals that school has begun assigning prestige unevenly.",
        "She is not anti-English. She chose the school partly because of English. But the choice was for expansion, not substitution.",
        "The tension begins when the school treats English growth and cultural continuity as if they are naturally opposed, while the family is trying to hold both."
      ],
      "next": "reflection_1"
    },
    "reflection_1": {
      "id": "reflection_1",
      "type": "reflection",
      "title": "Reflection 1",
      "prompt": "What assumption was driving your response?",
      "options": [
        "English immersion only works if the expectation is clear and consistent.",
        "I was trying to avoid a bigger ideological conversation.",
        "I assumed the parent was resisting English, not protecting balance.",
        "I saw the issue as classroom management, not identity.",
        "Write your own."
      ],
      "next": "dilemma_2"
    },
    "dilemma_2": {
      "id": "dilemma_2",
      "type": "dilemma",
      "title": "Dilemma 2: The Conference",
      "content": [
        "Three weeks later, it is conference week.",
        "Layan is excelling academically. Her English writing is among the strongest in the class. Her science notebook is meticulous. She is polite, punctual, and deeply responsive to structure.",
        "But there is a pattern you cannot ignore. She has started treating English as the language of status. During group work, she rolls her eyes when other students need help formulating an answer. In Arabic class transitions, she once said to a classmate, \"This part is easy anyway.\" Last week she told another student, \"Real school is in English.\"",
        "You believe this matters. But you also know how loaded the topic is.",
        "How do you frame the conference?"
      ],
      "choices": [
        {
          "id": "choice_2a",
          "label": "Lead with concern",
          "text": "\"Layan is doing extremely well academically, but I do want to raise one concern directly. I think she may be internalizing the idea that English is the smart language and that Arabic is less important. I''ve heard comments that suggest she is starting to rank languages and even people that way.\"",
          "next": "consequence_2a"
        },
        {
          "id": "choice_2b",
          "label": "Lead with strengths, then frame the issue as a next-step goal",
          "text": "\"Layan has many strengths: diligence, precision, strong English, and real academic confidence. One next step I want to support is bilingual belonging, helping her see that being strong in English does not require distancing herself from Arabic or from classmates who move more slowly between languages.\"",
          "next": "consequence_2b"
        },
        {
          "id": "choice_2c",
          "label": "Focus on achievement and leave the issue alone",
          "text": "\"Layan is thriving. Her academics are excellent, her work habits are strong, and she continues to be one of the most reliable students in the class.\"",
          "next": "consequence_2c"
        }
      ]
    },
    "consequence_2a": {
      "id": "consequence_2a",
      "type": "consequence",
      "title": "Consequence 2A",
      "content": [
        "Mrs. Alharbi listens carefully, then goes still.",
        "\"I see,\" she says. \"At home, we do not teach her to disrespect Arabic.\"",
        "You soften your wording. You explain that Layan is wonderful and that this is about environment, not blame. But the frame is already defensive.",
        "At home, the message becomes corrective. Layan returns the following week noticeably cautious. She now adds, \"But Arabic is important too,\" in a rehearsed way that sounds less like conviction than insurance.",
        "You raised the issue. You did not deepen trust."
      ],
      "next": "perspective_2"
    },
    "consequence_2b": {
      "id": "consequence_2b",
      "type": "consequence",
      "title": "Consequence 2B",
      "content": [
        "Mrs. Alharbi smiles at the strengths list. When you say bilingual belonging, she pauses.",
        "\"What do you mean exactly?\" she asks.",
        "You explain that Layan is thriving in English, which is wonderful, but she may be absorbing a hidden lesson that English equals status. \"I want her to feel expansive, not split. Strong in English, respectful in Arabic, and generous with peers.\"",
        "Mrs. Alharbi exhales. \"Yes,\" she says quietly. \"At home we have seen something similar. She answers her younger cousin in English now to show she knows more.\"",
        "Now the issue belongs to both of you. Together you make a small plan: you will publicly validate Arabic as a legitimate thinking tool and a valued subject, and she will reinforce at home that bilingualism is strength, not superiority."
      ],
      "next": "perspective_2"
    },
    "consequence_2c": {
      "id": "consequence_2c",
      "type": "consequence",
      "title": "Consequence 2C",
      "content": [
        "The conference is warm and easy. Mrs. Alharbi leaves feeling reassured.",
        "Six weeks later, semester comments go out. In Layan''s learning habits section, you write: \"Layan is encouraged to grow as a collaborative bilingual learner who values all classroom voices and languages.\"",
        "That evening, Mrs. Alharbi messages you. \"Teacher, thank you for the report. I was surprised by this comment. At the conference, we discussed only strengths. If there was a concern about how Layan sees Arabic and her classmates, I wish I had known earlier.\"",
        "She is right. By trying to protect the relationship from discomfort, you made the later feedback feel less trustworthy."
      ],
      "next": "perspective_2"
    },
    "perspective_2": {
      "id": "perspective_2",
      "type": "perspective",
      "title": "Perspective 2: Mrs. Alharbi''s View",
      "content": [
        "Mrs. Alharbi does not hear this issue as a small language preference. She hears it as a question about what kind of person the school is helping her daughter become.",
        "In her mind, a successful child in an international school should become more capable, more open, and more confident, but not detached from family, religion, or language.",
        "If the teacher presents the issue as if the family created the problem by choosing international schooling, she may become defensive. But if the teacher presents it as a predictable side effect of an English-dominant environment, and as a developmental issue the school can help mediate, then the conversation feels fair.",
        "Many Saudi families choosing international schooling are trying to hold local continuity and global opportunity together."
      ],
      "next": "reflection_2"
    },
    "reflection_2": {
      "id": "reflection_2",
      "type": "reflection",
      "title": "Reflection 2",
      "prompt": "What were you optimizing for?",
      "options": [
        "Clarity. I wanted the family to hear the issue directly.",
        "Relationship. I wanted to raise it without sounding accusatory.",
        "Self-protection. I did not want to enter a sensitive cultural conversation.",
        "Harmony. I hoped the issue would resolve without naming it.",
        "Write your own."
      ],
      "next": "dilemma_3"
    },
    "dilemma_3": {
      "id": "dilemma_3",
      "type": "dilemma",
      "title": "Dilemma 3: The WhatsApp Group",
      "content": [
        "It is January.",
        "The school is preparing for a week of student presentations and displays about future pathways, family backgrounds, and community connections. The official materials are polished and upbeat, but they are written almost entirely in English and use familiar international-school language: voice, leadership, reflection, and global awareness.",
        "That evening, Mrs. Alharbi messages you: \"Teacher, some of the mothers were saying the school updates are clear in English, but sometimes we still want to check what they mean in practice. Would you join a small WhatsApp group with us? It can be easier to ask quick questions than through the app.\"",
        "Your school does not ban class WhatsApp groups, but it does not actively manage them either.",
        "How do you respond?"
      ],
      "choices": [
        {
          "id": "choice_3a",
          "label": "Decline the group",
          "text": "\"Thank you, Mrs. Alharbi. I appreciate the idea. I find it fairest to keep communication through the school app and email, so all families receive the same information the same way. But please always feel free to message me directly about Layan.\"",
          "next": "consequence_3a"
        },
        {
          "id": "choice_3b",
          "label": "Accept the group",
          "text": "\"Yes, that sounds helpful. I''d be happy to join a small WhatsApp group if it makes communication easier for families.\"",
          "next": "consequence_3b"
        },
        {
          "id": "choice_3c",
          "label": "Counter-propose",
          "text": "\"I want families to feel clear and included, but I also need to keep communication manageable and equitable. What if we create one whole-class bilingual FAQ or Q and A channel, and I check it during a set time window?\"",
          "next": "consequence_3c"
        }
      ]
    },
    "consequence_3a": {
      "id": "consequence_3a",
      "type": "consequence",
      "title": "Consequence 3A",
      "content": [
        "Mrs. Alharbi replies politely. The mothers keep their WhatsApp group without you.",
        "At first, this seems fine. Then you notice that interpretation is happening elsewhere. Questions about the meaning of activities, whether something is optional, and how public a student performance will be are being worked out in a parent space you cannot see.",
        "Eventually, some concerns arrive to you already socially consolidated.",
        "You have protected your evenings. But you are now outside the loop where a meaningful portion of school sense-making is happening."
      ],
      "next": "perspective_3"
    },
    "consequence_3b": {
      "id": "consequence_3b",
      "type": "consequence",
      "title": "Consequence 3B",
      "content": [
        "The first week feels efficient. One message clarifies a schedule change in minutes. A parent helps translate a reminder. Mrs. Alharbi thanks you often.",
        "Then the questions deepen, not because anyone is rude, but because access has changed expectations.",
        "\"For the presentation, can students include Arabic words on slides, or should everything stay in English?\"",
        "\"When the task says family background, how personal should the children be?\"",
        "\"Can students use local examples in the pathways display, or should they keep to the examples from class?\"",
        "These are reasonable questions. That is the challenge.",
        "You are no longer only sharing information. You are now interpreting the school''s language and expectations after hours.",
        "You are more trusted. You are also carrying more of the school''s cultural translation work yourself."
      ],
      "next": "perspective_3"
    },
    "consequence_3c": {
      "id": "consequence_3c",
      "type": "consequence",
      "title": "Consequence 3C",
      "content": [
        "Mrs. Alharbi takes a few minutes, then responds: \"Yes, I think that is reasonable. The main thing is clarity.\"",
        "You create a visible structure: one whole-class bilingual FAQ post each week, plus a short Q and A window on weekday evenings. Families can ask questions in Arabic or English.",
        "The impact is immediate. A parent asks whether students may include Arabic phrases in their display. Another parent answers, \"I think yes, as long as the main explanation is clear.\" You then confirm the school expectation.",
        "The school has not changed its ethos. But the ethos is no longer mysterious. You have created a structure where clarification is shared rather than privatized."
      ],
      "next": "perspective_3"
    },
    "perspective_3": {
      "id": "perspective_3",
      "type": "perspective",
      "title": "Perspective 3: Mrs. Alharbi''s View",
      "content": [
        "Mrs. Alharbi is not necessarily asking for special access. She is asking for interpretive reassurance.",
        "In an international school, many messages are understandable at the level of vocabulary but still unclear in practice. A family may understand the words on the page and still wonder what a task will actually look like, what counts as appropriate participation, or whether local cultural examples are welcome.",
        "A WhatsApp group lowers the threshold for asking those questions. It feels fast, human, and practical. From the parent''s side, it can feel like the shortest path to confidence.",
        "From the teacher''s side, the same channel can become unscripted labor. Quick clarification turns into ongoing interpretation."
      ],
      "next": "reflection_3"
    },
    "reflection_3": {
      "id": "reflection_3",
      "type": "reflection",
      "title": "Reflection 3",
      "prompt": "What were you protecting when you made your choice?",
      "options": [
        "My time and personal boundaries.",
        "Equity across all families.",
        "Interpretive clarity for local families.",
        "A professional communication structure I could sustain.",
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
            "This simulation exercised three recurring tensions in international schooling in the Kingdom of Saudi Arabia.",
            "International Ethos versus Cultural or Religious Identity: Families choosing international or private schooling in Saudi Arabia often do so for English, pedagogy, and future opportunity. At the same time, many also care deeply about Arabic, Islamic education, cultural continuity, and moral fit. The tension is not that those families are inconsistent. The tension is that the school may treat those priorities as if they compete more sharply than parents do.",
            "Parent-Teacher Communication: In contexts of cultural dissonance, communication does more than update families. It helps interpret the school. Leaders and teachers in Saudi international schools often work inside a real gap between an international-school ethos and conservative local expectations.",
            "English, Arabic, and Belonging: English-medium schooling can be highly valued by Saudi families, but the social meaning of English still matters. The issue is not usually whether children should become strong in English. It is whether English is presented as an added capacity or as a quiet hierarchy of value."
          ]
        },
        {
          "title": "Research Anchors",
          "content": [
            "Hammad, W., and Shah, S. (2018). Dissonance Between the International and the Conservative National.",
            "Alothman et al. (2024). How Saudi parents rationalize the choice of school for their children.",
            "Alsaawi and Almulhim (2024). Impact of the English-Only Policy on Learners at International Schools in the Saudi Context."
          ]
        }
      ],
      "finalPrompt": "If you could go back to the first moment, when Mrs. Alharbi showed you the planner note and asked about Arabic, what would you say now? How would you preserve English growth without teaching a hierarchy of belonging?"
    }
  }',
  ARRAY[1, 2, 3],
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

-- Make the simulation live immediately
UPDATE public.pd_simulations
SET status = 'live'
WHERE id = 'b2c3d4e5-0002-0002-0002-000000000002';
