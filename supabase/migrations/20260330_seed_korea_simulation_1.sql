-- Seed Korea Simulation 1: "The Academy Planner"
-- Source: Codex-produced content package (korea-the-academy-planner.json)
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
  'c3d4e5f6-0003-0003-0003-000000000003',
  'korea-001',
  'The Academy Planner',
  'A parent shows you a neatly organized academy planner and asks for the weekly topic focus. The question is practical. The policy is clear. The relationship is not.',
  'It is October at Han River International School in Seoul. Your KakaoTalk icon shows 9 unread messages. Minseo is one of those students who never arrives unprepared. This morning, Mrs. Park is waiting outside your classroom.',
  '[
    {
      "name": "You",
      "role": "2nd-year homeroom teacher at Han River International School, Seoul",
      "description": "You trained in the UK, US, or Australia. You teach Year 5. You care about strong family relationships but still learning local expectations around teacher authority, parental involvement, and supplementary education."
    },
    {
      "name": "Mrs. Park",
      "role": "Mother of Minseo",
      "description": "She used to work in marketing before stepping back to manage the family''s schedule. Minseo attends after-school academies. Mrs. Park is efficient, warm, and highly organized. She sees school, home, and academy as parts of one larger learning system."
    }
  ]',
  '{
    "setup": {
      "id": "setup",
      "type": "setup",
      "title": "Setup",
      "content": [
        "A classroom in late autumn. Indoor shoes lined neatly by cubbies. Your KakaoTalk icon shows 9 unread messages.",
        "It is October at Han River International School in Seoul. You have known Minseo for seven weeks.",
        "She is one of those students who never arrives unprepared. Her pencil case is immaculate. Her homework is always early. Her reading responses are thoughtful, but polished to the point that they barely show the drafting process. In math, she is strong. In discussions, she often waits until she is certain before speaking.",
        "You met Mrs. Park briefly at orientation. She asked clear, specific questions about your literacy framework, independent reading expectations, and how writing is assessed. She was polite, well-informed, and clearly follows Minseo''s schooling closely.",
        "This morning she is waiting outside your classroom.",
        "\"Teacher, do you have one minute?\"",
        "She shows you a neatly organized academy planner. It lists the topics Minseo is studying after school and leaves space for notes.",
        "\"Minseo''s academy tries not to overlap too much with school,\" Mrs. Park says. \"If we know the broad topic you are on, they can support her more efficiently. You don''t need to do anything detailed. Even just the unit focus helps.\"",
        "Your school policy is clear: teachers do not coordinate directly with outside academies, do not share assessment details in advance, and try to avoid creating different access for families with supplementary tutoring."
      ],
      "next": "dilemma_1"
    },
    "dilemma_1": {
      "id": "dilemma_1",
      "type": "dilemma",
      "title": "Dilemma 1: The Academy Planner",
      "content": ["How do you respond?"],
      "choices": [
        {
          "id": "choice_1a",
          "label": "Decline politely",
          "text": "\"Thank you, Mrs. Park. I can see how carefully you''re supporting Minseo. At school, I''m not able to coordinate directly with outside academies. But I can keep sharing Minseo''s progress and our class learning goals through the usual school channels.\"",
          "next": "consequence_1a"
        },
        {
          "id": "choice_1b",
          "label": "Accept and shelve",
          "text": "\"Thank you, this is helpful context. Let me have a look and think about it.\" You plan to be gracious in the moment, then continue as usual.",
          "next": "consequence_1b"
        },
        {
          "id": "choice_1c",
          "label": "Give broad topic guidance",
          "text": "\"I can''t do anything detailed, but I can probably mention the broad unit from time to time so Minseo''s support stays aligned.\"",
          "next": "consequence_1c"
        }
      ]
    },
    "consequence_1a": {
      "id": "consequence_1a",
      "type": "consequence",
      "title": "Consequence 1A",
      "content": [
        "Mrs. Park nods right away. \"I understand,\" she says. Her tone stays polite.",
        "Over the next two weeks, though, the rhythm changes. Her messages become more transactional. At dismissal, she still greets you warmly, but the sense of educational collaboration narrows.",
        "Minseo begins arriving with methods you have not taught yet. During a fractions lesson, she says quietly, \"At academy, we do it another way.\" She is not being rude. She is simply living across two partially connected systems.",
        "When you later ask Mrs. Park whether the unit feels manageable, she replies, \"Yes, we will reinforce at home.\"",
        "Nothing has gone wrong exactly. But the partnership has split into parallel tracks: your classroom on one side, the family''s outside support system on the other."
      ],
      "next": "perspective_1"
    },
    "consequence_1b": {
      "id": "consequence_1b",
      "type": "consequence",
      "title": "Consequence 1B",
      "content": [
        "Mrs. Park looks relieved. \"Thank you. That will help Minseo.\"",
        "You continue teaching as usual and do not follow up.",
        "A week later, Minseo says, \"My mom thought you might tell us if the unit changed.\"",
        "That evening, a KakaoTalk message arrives: \"Teacher, just checking whether the class is still on fractions this week or moving to decimals soon. I thought we might align support a little.\"",
        "You realize Mrs. Park heard your response as agreement, not courtesy. The planner was not a gift or a neutral document. It was an invitation to coordination.",
        "Now you have to retract an expectation you did not mean to create."
      ],
      "next": "perspective_1"
    },
    "consequence_1c": {
      "id": "consequence_1c",
      "type": "consequence",
      "title": "Consequence 1C",
      "content": [
        "At first, it feels efficient.",
        "You mention fractions in a quick reply one Friday, and Mrs. Park thanks you immediately. A few days later she messages again: \"That helped a lot. Minseo felt prepared.\"",
        "Then your grade-level lead, Alex, checks in. \"A parent mentioned that one family may be getting extra topic guidance because of academy planning. Are we sharing unit pacing individually?\"",
        "You explain that it was broad and informal. Alex is calm but firm. \"The issue isn''t only privacy. If one family''s outside support system gets direct alignment, other families may feel pressure to build the same setup.\"",
        "You now need to tell Mrs. Park you cannot keep doing something that already seemed helpful."
      ],
      "next": "perspective_1"
    },
    "perspective_1": {
      "id": "perspective_1",
      "type": "perspective",
      "title": "Perspective 1: Mrs. Park''s View",
      "content": [
        "Mrs. Park is not trying to outsource your teaching to an academy. She is trying to reduce fragmentation.",
        "In South Korea, supplementary education is common enough that many families think in systems: school, home, and academy. If those systems are badly misaligned, the child absorbs the inefficiency through duplicated work, stress, or the sense of always catching up.",
        "From her point of view, asking about the broad unit focus is not automatically an unfair advantage. It is a practical coordination request. She may assume that a well-supported child is one whose adults are not working at cross-purposes.",
        "If you decline, she may not feel insulted. But she may conclude that school and outside study are being kept deliberately separate, and that she will need to manage the second system without your help."
      ],
      "next": "reflection_1"
    },
    "reflection_1": {
      "id": "reflection_1",
      "type": "reflection",
      "title": "Reflection 1",
      "prompt": "What assumption was driving your response?",
      "options": [
        "Outside tutoring should stay completely separate from school.",
        "I was trying to preserve fairness across families.",
        "I wanted to be kind in the moment and avoid direct refusal.",
        "I saw the planner as optional information, not an invitation to coordination.",
        "Write your own."
      ],
      "next": "dilemma_2"
    },
    "dilemma_2": {
      "id": "dilemma_2",
      "type": "dilemma",
      "title": "Dilemma 2: The Conference",
      "content": [
        "It is conference week.",
        "Minseo is doing very well academically. Her reading comprehension is excellent. Her math is strong. She is conscientious to a fault.",
        "But you have noticed something. She rarely shares an idea unless she is certain it is correct. In writer''s workshop, she erases so much that she sometimes finishes less than classmates with weaker ideas. In math talks, she often solves the problem but will not explain her thinking until she has rehearsed it silently.",
        "Your school values visible thinking, productive struggle, rough drafting, and learning in public.",
        "How do you approach the conference?"
      ],
      "choices": [
        {
          "id": "choice_2a",
          "label": "Lead with concern",
          "text": "\"Minseo is doing very well overall, but I''m a little concerned that she seems anxious about mistakes. She works so hard to be correct that she sometimes avoids participating until she''s sure, and I wonder if the amount of outside academic pressure may be part of that.\"",
          "next": "consequence_2a"
        },
        {
          "id": "choice_2b",
          "label": "Lead with strengths, then frame risk-taking as a learning goal",
          "text": "\"Minseo has so many strengths. She is diligent, prepared, and deeply thoughtful. One next step I''m working on with her is academic risk-taking: sharing an idea before it''s perfect, or submitting a strong draft without over-polishing. In our program, that''s an important learning skill, not just a personality trait.\"",
          "next": "consequence_2b"
        },
        {
          "id": "choice_2c",
          "label": "Focus on achievement and skip the issue",
          "text": "\"Minseo is doing extremely well. Her academics are strong, her work habits are excellent, and she is exactly where I''d hope she would be at this point in the year.\"",
          "next": "consequence_2c"
        }
      ]
    },
    "consequence_2a": {
      "id": "consequence_2a",
      "type": "consequence",
      "title": "Consequence 2A",
      "content": [
        "Mrs. Park''s face tightens slightly at the phrase outside academic pressure.",
        "\"I see,\" she says. \"At home she is just trying to do her best.\"",
        "You clarify that Minseo is wonderful and that you mean well. But the tone of the conversation has shifted from collaboration to diagnosis.",
        "The next week, Minseo changes. She raises her hand more often, but mostly for short, safe answers. She now checks your face after every response.",
        "At home, the family has clearly heard the issue as a problem to correct quickly. You surfaced the issue, but it landed as urgency rather than developmental support."
      ],
      "next": "perspective_2"
    },
    "consequence_2b": {
      "id": "consequence_2b",
      "type": "consequence",
      "title": "Consequence 2B",
      "content": [
        "Mrs. Park smiles at diligent and thoughtful. When you describe risk-taking as a learning goal rather than a deficiency, she leans forward.",
        "\"What do you mean exactly?\" she asks. \"She tells us she wants to be correct before she speaks.\"",
        "You explain that in your classroom, students are expected to try ideas aloud, share drafts before they are polished, and learn from partial answers.",
        "Mrs. Park nods slowly. \"In Korean schools, sometimes students speak when they are ready, or when the teacher calls. If she speaks before she is sure, maybe she feels exposed.\"",
        "The conversation opens. You learn that Minseo gets upset at home if she makes small errors in academy homework. Mrs. Park learns that your feedback model rewards process, not only correctness.",
        "Together you make a plan: you will give Minseo lower-stakes moments to share with a partner first, and Mrs. Park will begin praising trying before perfect, not only finished accuracy."
      ],
      "next": "perspective_2"
    },
    "consequence_2c": {
      "id": "consequence_2c",
      "type": "consequence",
      "title": "Consequence 2C",
      "content": [
        "The conference is pleasant. Mrs. Park leaves reassured.",
        "Six weeks later, report comments go home. In Minseo''s learning habits section, you write: \"Minseo is encouraged to share early thinking more readily and to embrace drafting as part of learning.\"",
        "That night, Mrs. Park messages you. \"Teacher, thank you for the report. We are confused by one part. At the conference you said Minseo was doing very well. If there was a concern about participation and perfectionism, why did we not discuss it then?\"",
        "She is right. By avoiding the conversation to protect the relationship, you created a credibility gap instead."
      ],
      "next": "perspective_2"
    },
    "perspective_2": {
      "id": "perspective_2",
      "type": "perspective",
      "title": "Perspective 2: Mrs. Park''s View",
      "content": [
        "Mrs. Park does not think Minseo''s caution is automatically a problem.",
        "From her perspective, speaking only when prepared can signal seriousness, self-control, and respect for the classroom. Accuracy matters. Public mistakes can feel exposing.",
        "That does not mean she rejects your goal. But she needs help understanding your model. If you say Minseo is anxious or imply that academy culture is harming her, she may hear criticism of the family''s judgment. If you say instead, here is a skill our school explicitly teaches and here is how we can support it, she can work with you.",
        "The cultural dynamic here is not that Korean students are naturally quiet. It is that students may be moving between educational settings that reward different forms of seriousness."
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
        "I worried that critiquing perfectionism would sound like critiquing the family.",
        "I chose short-term comfort over long-term clarity.",
        "Write your own."
      ],
      "next": "dilemma_3"
    },
    "dilemma_3": {
      "id": "dilemma_3",
      "type": "dilemma",
      "title": "Dilemma 3: The KakaoTalk Room",
      "content": [
        "It is December.",
        "Mrs. Park sends you a message: \"Teacher, some of the class mothers already have a Kakao room. We were wondering if you would join, maybe just for class questions and reminders. It can be easier than email. If language is ever an issue, I can help summarize in Korean or English.\"",
        "Your school does not forbid parent messaging groups. Some teachers find them efficient. Others avoid them because the questions never stop.",
        "How do you respond?"
      ],
      "choices": [
        {
          "id": "choice_3a",
          "label": "Decline the group",
          "text": "\"Thank you, Mrs. Park. I really appreciate the thought. I find it fairest to communicate with families through our school portal and scheduled messages so everyone receives the same information. But please do feel free to contact me directly if there is something specific about Minseo.\"",
          "next": "consequence_3a"
        },
        {
          "id": "choice_3b",
          "label": "Accept the group",
          "text": "\"That sounds helpful. I''d be happy to join a class Kakao room if it makes communication smoother for families.\"",
          "next": "consequence_3b"
        },
        {
          "id": "choice_3c",
          "label": "Counter-propose",
          "text": "\"I''d love a smoother channel, but I also need to keep communication manageable. What if we create one whole-class Kakao announcement and Q and A room with clear expectations and a set weekday window?\"",
          "next": "consequence_3c"
        }
      ]
    },
    "consequence_3a": {
      "id": "consequence_3a",
      "type": "consequence",
      "title": "Consequence 3A",
      "content": [
        "Mrs. Park responds warmly enough. The parents'' Kakao room continues without you.",
        "At first, this seems fine. Then you realize that a lot of interpretation is happening elsewhere. Questions about homework, field trip expectations, and classroom norms are being answered in a space you never see. Sometimes the answers are accurate. Sometimes they are not.",
        "By January, parents begin approaching you in clusters: \"Some of us were wondering...\"",
        "You have protected your boundaries. But you are now outside the real-time communication channel through which much of the class community makes sense of school."
      ],
      "next": "perspective_3"
    },
    "consequence_3b": {
      "id": "consequence_3b",
      "type": "consequence",
      "title": "Consequence 3B",
      "content": [
        "The first week is excellent. One reminder about library day reaches everyone quickly. Parents help each other with translations. Mrs. Park answers two logistical questions before you even open the app.",
        "Then the pace changes. Questions arrive late at night. No one is rude. But the room has altered the emotional contract. Your availability is now visible, and so is your silence.",
        "You are more connected to families than before. You are also carrying them with you into the evening."
      ],
      "next": "perspective_3"
    },
    "consequence_3c": {
      "id": "consequence_3c",
      "type": "consequence",
      "title": "Consequence 3C",
      "content": [
        "Mrs. Park replies after a few minutes. \"Yes, I think that can work. If expectations are clear, parents will understand.\"",
        "You create a whole-class Kakao room with a clear description and set check-in window. Mrs. Park helps explain the setup to other parents.",
        "A non-Korean parent asks about homework format, and Mrs. Park answers correctly before you do.",
        "Something important shifts. Her expertise now has a sanctioned place. She is no longer trying to create closeness by private coordination. She is helping build class understanding in a structure that works for everyone.",
        "It is not frictionless. But the channel has boundaries, and the boundaries are visible."
      ],
      "next": "perspective_3"
    },
    "perspective_3": {
      "id": "perspective_3",
      "type": "perspective",
      "title": "Perspective 3: Mrs. Park''s View",
      "content": [
        "In many Korean school communities, KakaoTalk is an ordinary coordination tool. Parent groups often circulate reminders, interpretations of assignments, and practical updates quickly. A group channel can therefore feel efficient and reassuring rather than unusually intimate.",
        "When Mrs. Park proposes a group, she is probably not imagining an endless social feed. She is imagining a lightweight communication layer that reduces uncertainty and helps parents support the class smoothly.",
        "A teacher, however, experiences the same channel differently. What feels efficient to families can quietly become after-hours labor, real-time interpretation, and a source of inequity if some parents are more active or more connected than others.",
        "The friction is not really about an app. It is about communication expectations."
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
        "A closer relationship with Korean parents.",
        "Clarity and consistency in school communication.",
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
            "This simulation exercised three recurring tensions in Korean international-school contexts.",
            "Teacher Authority and Homeroom Care: In Korean schooling, the homeroom teacher has historically carried more than instructional responsibility. Research on the homeroom institution shows strong expectations of relational guidance and affective care. That does not mean every parent expects the same thing, but it helps explain why families may see the homeroom teacher as a key coordinating adult.",
            "Parent-Teacher Communication: Fast, practical communication can carry a positive meaning in Korea: responsiveness, competence, and care. But the same channels can generate unclear expectations and after-hours overload unless the structure is visible and bounded.",
            "Shadow Education, Effort, and Risk-Taking: Supplementary education is common enough in South Korea that many families think across multiple learning sites. At the same time, classroom participation and public risk-taking may need explicit scaffolding for students who are used to showing seriousness through preparation, listening, and accuracy."
          ]
        },
        {
          "title": "Research Anchors",
          "content": [
            "Jung, H.-J. (2014). Family Metaphors and Familism in the Homeroom Institution of Korean Schools.",
            "Lee, J.-A., and Kim, C.-J. (2019). Teaching and Learning Science in Authoritative Classrooms.",
            "Howard, N.-J. (2021). A Theoretical Examination of Shadow Education in South Korea."
          ]
        }
      ],
      "finalPrompt": "If you could go back to the first moment, when Mrs. Park showed you the academy planner, what would you say now, and how would you preserve both clarity and relationship?"
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
WHERE id = 'c3d4e5f6-0003-0003-0003-000000000003';
