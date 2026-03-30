-- Seed China Simulation 1: "The Workbook"
-- Source: Codex-produced content package (china-the-workbook.json)
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
  'a1b2c3d4-0001-0001-0001-000000000001',
  'china-001',
  'The Workbook',
  'A parent arrives at your classroom with a thick supplementary workbook and a request. What looks like overreach might be something else entirely.',
  'It''s October at Maple Leaf International School, Shanghai. You''ve been Haoyu''s homeroom teacher for six weeks. This morning, his mother is waiting outside your classroom before school with a paper bag.',
  '[
    {
      "name": "You",
      "role": "2nd-year homeroom teacher, Maple Leaf International School, Shanghai",
      "description": "You trained in the UK, US, or Australia. You teach Year 4. You care about your students and want good relationships with parents, but you are still figuring out the norms here."
    },
    {
      "name": "Mrs. Zhang",
      "role": "Mother of Haoyu",
      "description": "She was a middle-school math teacher in Nanjing for 12 years before her husband''s job moved the family to Shanghai. She left teaching to focus on Haoyu''s education. She communicates primarily through WeChat, is warm but formal, and sees herself as your educational partner, not your client."
    }
  ]',
  '{
    "setup": {
      "id": "setup",
      "type": "setup",
      "title": "Setup",
      "content": [
        "A classroom. Morning. Coats on hooks, math journals stacked on desks. Your WeChat notification count reads 14.",
        "It''s October at Maple Leaf International School. You''ve been Haoyu''s homeroom teacher for six weeks. He''s a quiet, diligent student. He always finishes his work early, keeps everything neat, and rarely raises his hand unless called on. His English is strong. He has a small, tight friend group.",
        "You''ve met Mrs. Zhang once, briefly, at the welcome night. She was polite, asked detailed questions about your math curriculum, and left you with the impression that education is the center of her world.",
        "This morning, she is waiting outside your classroom before school. She''s holding a large paper bag.",
        "\"Good morning, Teacher. I brought something for Haoyu''s learning. May I show you?\"",
        "She pulls out a thick, spiral-bound workbook, a Chinese math supplement organized by topic and filled with worked examples and practice problems. Some pages are already tabbed with colored sticky notes.",
        "\"These match what you are teaching now,\" she says. \"I marked the sections. Maybe you can give some of these as extra practice? Haoyu needs more repetition to be solid.\"",
        "Your school has a clear homework policy: teachers design all homework, no outside materials are assigned, and total homework time for Year 4 should not exceed 30 minutes per night."
      ],
      "next": "dilemma_1"
    },
    "dilemma_1": {
      "id": "dilemma_1",
      "type": "dilemma",
      "title": "Dilemma 1: The Workbook",
      "content": ["What do you do?"],
      "choices": [
        {
          "id": "choice_1a",
          "label": "Decline politely",
          "text": "\"Thank you so much for thinking of this, Mrs. Zhang. I really appreciate it. At our school, we have a policy that all homework materials come from the curriculum team, so I''m not able to assign outside workbooks. But I''ll make sure Haoyu gets the practice he needs through our regular homework.\"",
          "next": "consequence_1a"
        },
        {
          "id": "choice_1b",
          "label": "Accept and shelve",
          "text": "\"Thank you, Mrs. Zhang, this looks really thorough. Let me take it and have a look through. I''ll see if there''s anything I can incorporate.\" You plan to flip through it politely and then set it aside.",
          "next": "consequence_1b"
        },
        {
          "id": "choice_1c",
          "label": "Accept and use some of it",
          "text": "\"Thank you. This actually looks really well organized. I''ll go through it and pull out some problems that fit what we''re doing this unit.\"",
          "next": "consequence_1c"
        }
      ]
    },
    "consequence_1a": {
      "id": "consequence_1a",
      "type": "consequence",
      "title": "Consequence 1A",
      "content": [
        "Mrs. Zhang nods. \"I understand,\" she says. Her tone is even, but something shifts, a slight formality that wasn''t there a moment ago.",
        "Over the next two weeks, small things change. She stops adding the friendly emoji reactions to your WeChat class updates. When you send a message about Haoyu''s excellent work on a group project, she replies with a single \"Thank you.\" She does not ask any follow-up questions.",
        "At pickup, she greets you with a smile, but the conversations do not go past \"How was today?\" She stops volunteering to help with class events.",
        "You notice Haoyu''s homework has started including extra practice problems on the back, problems that are not from your assignments. When you ask him about it, he says, \"My mom says I should do more.\"",
        "Nothing is wrong, exactly. But the channel has narrowed."
      ],
      "next": "perspective_1"
    },
    "consequence_1b": {
      "id": "consequence_1b",
      "type": "consequence",
      "title": "Consequence 1B",
      "content": [
        "Mrs. Zhang beams. \"Thank you, Teacher. I highlighted the best sections. If you need more, I can bring the next volume.\"",
        "Two weeks pass. You flip through the workbook. It is actually quite good, but it does not align with your unit''s inquiry-based approach. You set it on your bookshelf and continue with your own materials.",
        "Then Haoyu says something in class: \"My mom asked if you''ve gotten to the fractions part yet. She said those problems are really important.\"",
        "You realize Mrs. Zhang has been tracking which sections you''ve used. She expected this to be a collaborative tool, not a courtesy gift. She interpreted your \"let me have a look\" as a commitment.",
        "That evening, she sends you a WeChat message: \"Teacher, I noticed the homework this week doesn''t include the workbook problems. Should Haoyu do those separately at home?\"",
        "You are now in a harder position than if you had simply declined."
      ],
      "next": "perspective_1"
    },
    "consequence_1c": {
      "id": "consequence_1c",
      "type": "consequence",
      "title": "Consequence 1C",
      "content": [
        "Mrs. Zhang is visibly pleased. \"I knew these would be useful. I can bring the next volume when you''re ready.\"",
        "You pull four problems from the workbook and include them in that week''s homework. They are solid, well-scaffolded, procedurally rigorous. Several students struggle with them, though, because they assume a level of prior drill that your class has not done.",
        "Your curriculum coordinator, Sam, stops by your desk. \"Hey, a parent in your class posted a photo of last night''s homework to the Year 4 WeChat group. A couple of those problems don''t look like they''re from our materials. Are you supplementing?\"",
        "Sam is not angry, but he is clear. \"We spent a long time calibrating the homework load. If parents see outside materials going home, it creates pressure for the other families. Can you keep it in-house?\"",
        "You now need to tell Mrs. Zhang you cannot continue using her workbook after you already started."
      ],
      "next": "perspective_1"
    },
    "perspective_1": {
      "id": "perspective_1",
      "type": "perspective",
      "title": "Perspective 1: Mrs. Zhang''s View",
      "content": [
        "Mrs. Zhang did not bring the workbook to challenge your authority. She brought it because that is what a good parent does.",
        "In her experience, the parent-teacher relationship is built on a shared mission. The teacher leads in the classroom; the parent reinforces at home. Providing supplementary materials is not overstepping. It is contributing. When her own students'' parents brought her worksheets they had found, she took it as a sign of engagement.",
        "From her perspective, the workbook was a professional offering from one educator to another. She tabbed specific sections because she had studied your curriculum handout and tried to align the problems with your scope and sequence. This took her an evening of work.",
        "She is also navigating her own anxiety. Haoyu is in an international school because she and her husband believe it offers a better path than the gaokao track, but she worries that inquiry-based learning does not always build the foundational fluency her son needs. The workbook is her way of ensuring rigor without rejecting your approach.",
        "When the workbook is declined or ignored, she may not read it as a policy issue first. She may read it as a signal that her expertise and investment are not especially welcome. She pulls back, not necessarily out of anger, but out of self-protection.",
        "The cultural dynamic here is not that one side values learning more than the other. It is that school and home may be trying to support the same child through different assumptions about what partnership should look like."
      ],
      "next": "reflection_1"
    },
    "reflection_1": {
      "id": "reflection_1",
      "type": "reflection",
      "title": "Reflection 1",
      "prompt": "Look back at your choice. What assumption about the parent-teacher relationship was driving it?",
      "options": [
        "Parents should support at home but not shape what happens in the classroom.",
        "Accepting the workbook would set a precedent that other parents would expect.",
        "I was trying to protect Mrs. Zhang''s feelings by not refusing directly.",
        "I thought the workbook was a gift, not a professional collaboration offer.",
        "Write your own."
      ],
      "next": "dilemma_2"
    },
    "dilemma_2": {
      "id": "dilemma_2",
      "type": "dilemma",
      "title": "Dilemma 2: The Conference",
      "content": [
        "Three weeks later, it is parent-teacher conference week. You have 15 minutes with Mrs. Zhang and her husband.",
        "Haoyu is performing well academically. His math scores are consistently strong, his writing is improving, and he is kind to his classmates. But there is one area you have been thinking about: he almost never participates in class discussions. When you ask open-ended questions, he waits. When you invite small-group sharing, he lets others go first. He will answer if called on, and his answers are usually good, but he never initiates.",
        "Your school values student voice, collaborative inquiry, and visible thinking. Participation is part of your assessment framework.",
        "How do you approach the conference?"
      ],
      "choices": [
        {
          "id": "choice_2a",
          "label": "Lead with the participation concern",
          "text": "\"Haoyu is doing really well academically. The one area I''d love to see growth is classroom participation. He has great ideas, but he rarely shares them with the group. I think if he spoke up more, he''d really thrive.\"",
          "next": "consequence_2a"
        },
        {
          "id": "choice_2b",
          "label": "Lead with strengths, then frame participation as one growth area",
          "text": "\"Let me start by saying how much I enjoy having Haoyu in my class. His work ethic is remarkable, his math reasoning is strong, and he''s a really thoughtful friend to his classmates. For next steps, I''m working with him on elaborating his written responses, and I''d also love to gently encourage more sharing in group discussions, which is one of our learning goals this term.\"",
          "next": "consequence_2b"
        },
        {
          "id": "choice_2c",
          "label": "Focus on academics and relationships; do not raise participation",
          "text": "\"Haoyu is doing great. His math is a real strength, his writing is improving every week, and he''s well-liked by his classmates. He''s exactly where I''d want him to be at this point in the year.\"",
          "next": "consequence_2c"
        }
      ]
    },
    "consequence_2a": {
      "id": "consequence_2a",
      "type": "consequence",
      "title": "Consequence 2A",
      "content": [
        "Mrs. Zhang listens carefully. Her husband takes notes. When you finish, there is a pause.",
        "\"He doesn''t participate?\" Mrs. Zhang says. \"He tells us he always listens carefully in class.\"",
        "\"He does listen,\" you say. \"Absolutely. I just think he has a lot to offer and I''d love to hear his voice more.\"",
        "Mr. Zhang speaks for the first time. \"We will talk to him. He should be more active if the teacher asks.\"",
        "You leave the conference feeling like the message landed. But over the next two weeks, something changes. Haoyu starts raising his hand a lot. His contributions are brief, sometimes tangential, sometimes just repeating what another student said. It feels forced.",
        "At home, his parents have clearly told him that the teacher says he must speak more in class. Haoyu is now performing participation. He is not more engaged. He is more anxious."
      ],
      "next": "perspective_2"
    },
    "consequence_2b": {
      "id": "consequence_2b",
      "type": "consequence",
      "title": "Consequence 2B",
      "content": [
        "Mrs. Zhang smiles throughout the strengths portion. She nods vigorously at work ethic and thoughtful friend. When you mention participation as a growth area alongside writing elaboration, she asks, \"What do you mean by participation? He says he always pays attention.\"",
        "You explain the school''s model: sharing thinking aloud, contributing to group discussions, explaining reasoning. \"It''s less about attention. He''s very attentive. It''s more about making his thinking visible to others.\"",
        "Mrs. Zhang considers this. \"In his old school, the teacher talks and the students listen. That is how you show respect. Maybe he needs time to learn this new way.\"",
        "This opens a genuine conversation. You learn that Haoyu practiced oral presentations at home before starting at Maple Leaf. She is not opposed to classroom participation; she just did not know it was valued as assessment, not just as personality.",
        "You and Mrs. Zhang agree on a small plan: you will give Haoyu a thinking partner for discussions, and she will practice sharing your idea at dinner."
      ],
      "next": "perspective_2"
    },
    "consequence_2c": {
      "id": "consequence_2c",
      "type": "consequence",
      "title": "Consequence 2C",
      "content": [
        "The conference goes smoothly. Mrs. Zhang and her husband leave happy. You feel good about it.",
        "Two months later, report cards go out. Haoyu''s approaches-to-learning section includes a note: \"Haoyu is encouraged to share his thinking more actively in class discussions and collaborative tasks.\"",
        "Mrs. Zhang messages you that evening. \"Teacher, we are confused. At the conference you said Haoyu was doing well. Now the report says he needs to participate more. We feel this was not communicated to us. If there was a concern, why didn''t you tell us when we met?\"",
        "She is right. You avoided the conversation and the report card raised it anyway. The trust cost of deferring was higher than the discomfort of raising it would have been."
      ],
      "next": "perspective_2"
    },
    "perspective_2": {
      "id": "perspective_2",
      "type": "perspective",
      "title": "Perspective 2: Mrs. Zhang''s View",
      "content": [
        "For Mrs. Zhang, a parent-teacher conference is a status report on a shared project. She comes prepared. She expects the teacher to be direct about problems and specific about next steps.",
        "The word participation does not map neatly to her experience. In the school culture she knows best, a good student is one who listens attentively, completes all assignments thoroughly, and performs well on assessments. Speaking up in class may be something confident students do, but it is not automatically treated as a measure of learning.",
        "She is not resistant to participation as a goal. But she needs to understand it as a skill to be taught, not as something her son is failing to do naturally. When the feedback comes mainly as a concern, it can feel like a character judgment. When it comes as a learning objective with a plan, it feels like partnership.",
        "The cultural dynamic here is about competing models of what learning looks like in public. In one model, articulation is part of learning itself. In another, deep understanding may come before expression. A child in an international school may be living between those models."
      ],
      "next": "reflection_2"
    },
    "reflection_2": {
      "id": "reflection_2",
      "type": "reflection",
      "title": "Reflection 2",
      "prompt": "Think about how you framed your feedback. What were you optimizing for?",
      "options": [
        "I wanted to be honest and make sure the parents heard my concern clearly.",
        "I was trying to balance honesty with relationship preservation.",
        "I was worried about how the feedback would be received, so I chose the safest option.",
        "I was trying to respect a different learning culture by not pathologizing quiet students.",
        "Write your own."
      ],
      "next": "dilemma_3"
    },
    "dilemma_3": {
      "id": "dilemma_3",
      "type": "dilemma",
      "title": "Dilemma 3: The WeChat Group",
      "content": [
        "December. Your relationship with Mrs. Zhang has settled into a rhythm, though the tone depends on your earlier choices.",
        "She sends you a WeChat message: \"Teacher, some parents and I were talking. We would like to make a small WeChat group, just you and the 5 Chinese parents in our class. We can share information, ask questions about homework, and help with translations when other parents need it. It would be easier than emailing the whole class. What do you think?\"",
        "Your school does not have a policy against teacher-parent WeChat groups, but you know they can become consuming. Some teachers are in many parent groups and answer questions until late at night. Others refuse all groups and communicate only through the school portal.",
        "How do you respond?"
      ],
      "choices": [
        {
          "id": "choice_3a",
          "label": "Decline the group",
          "text": "\"Thank you for thinking of this, Mrs. Zhang. I really appreciate the offer. I think the best way for me to communicate with all families is through our class newsletter and the school portal, that way everyone gets the same information. But please always feel free to message me directly if you have a question about Haoyu.\"",
          "next": "consequence_3a"
        },
        {
          "id": "choice_3b",
          "label": "Accept the group",
          "text": "\"That sounds like a great idea. I''d love to be more connected with Haoyu''s family and the other Chinese families. Let''s set it up. I''ll do my best to check in regularly.\"",
          "next": "consequence_3b"
        },
        {
          "id": "choice_3c",
          "label": "Counter-propose",
          "text": "\"I love the idea of a smoother channel, and I want to be accessible. What if we made it a group for all the class parents, not just the Chinese families? That way it becomes the class communication channel, and bilingual parents can help bridge when needed. I''d also suggest a check-in window so it doesn''t become overwhelming for anyone.\"",
          "next": "consequence_3c"
        }
      ]
    },
    "consequence_3a": {
      "id": "consequence_3a",
      "type": "consequence",
      "title": "Consequence 3A",
      "content": [
        "Mrs. Zhang replies with a polite thumbs-up emoji. That is it.",
        "The Chinese parents create a group without you. You hear about it secondhand. You have maintained your boundaries, but you have also missed an opportunity.",
        "The Chinese parents now coordinate their concerns among themselves and bring them to you collectively, which sometimes feels like a united front rather than individual questions.",
        "In January, you learn that Mrs. Zhang organized a group purchase of supplementary workbooks for the Chinese students. She did not bring you one this time."
      ],
      "next": "perspective_3"
    },
    "consequence_3b": {
      "id": "consequence_3b",
      "type": "consequence",
      "title": "Consequence 3B",
      "content": [
        "The group starts well. Parents share photos of student work, ask about field trip logistics, and help each other translate the weekly newsletter. Mrs. Zhang becomes the informal moderator, and she is good at it.",
        "By week three, the messages are constant. Questions come in at 9 p.m., 10 p.m., 11 p.m. You are spending 30 to 40 minutes per night on the group. You start dreading the notification sound.",
        "But the relationships are undeniably better. When you need parent volunteers, the Chinese families sign up first. When there is a curriculum change, you can explain it once in the group and Mrs. Zhang helps translate for the parents whose English is weaker.",
        "You are more connected and more exhausted."
      ],
      "next": "perspective_3"
    },
    "consequence_3c": {
      "id": "consequence_3c",
      "type": "consequence",
      "title": "Consequence 3C",
      "content": [
        "Mrs. Zhang pauses before replying. \"A whole-class group? I think that could work. But some of the Chinese parents are shy about their English.\"",
        "You suggest that the group can be bilingual, English and Chinese both welcome, and that bilingual parents could help bridge. She likes this idea. You set up the group with a clear description and a check-in window.",
        "The first week, most families join. The Chinese parents are the most active. A few Western parents post occasionally. It is not perfectly balanced, but it is functional.",
        "The key moment comes when a non-Chinese parent asks a question about the math homework, and Mrs. Zhang answers it before you do, accurately, and with a helpful example. You have created a space where her expertise has value.",
        "It is not perfect. You still need to manage boundaries around timing and scope. But the channel is working."
      ],
      "next": "perspective_3"
    },
    "perspective_3": {
      "id": "perspective_3",
      "type": "perspective",
      "title": "Perspective 3: Mrs. Zhang''s View",
      "content": [
        "In many urban Chinese school contexts, parent messaging groups on WeChat function as ordinary school-home coordination. Parents use them for reminders, homework clarifications, photos, and quick questions. A group channel can therefore feel less like special access and more like the normal structure of responsible involvement.",
        "When Mrs. Zhang proposes a smaller group, she is not necessarily trying to exclude other families. More likely, she is starting from the parents she already knows well, the ones who share a language and are most likely to participate actively. From her perspective, a smaller channel may feel practical rather than political.",
        "At the same time, a teacher in an international school has reasonable concerns: equity, workload, inconsistent messaging, and the possibility that one communication channel quietly becomes the real classroom infrastructure.",
        "The tension is not really about WeChat itself. It is about what school-home partnership is supposed to look like, how visible that partnership should be, and who bears the cost of keeping it running."
      ],
      "next": "reflection_3"
    },
    "reflection_3": {
      "id": "reflection_3",
      "type": "reflection",
      "title": "Reflection 3",
      "prompt": "What were you protecting when you made your choice?",
      "options": [
        "My personal time and boundaries.",
        "Equity. I did not want a subset of parents to have special access.",
        "The relationship with Mrs. Zhang and the Chinese families.",
        "My school''s communication norms and expectations.",
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
            "This simulation exercised three cultural dimensions that shape many parent-teacher interactions in a Chinese international-school context.",
            "Learning Philosophy: Mrs. Zhang is operating from a model of learning that treats effort, diligence, and secure mastery as central. Your school likely operates from a model that emphasizes inquiry, articulation, and visible thinking. These are not mutually exclusive values, but they can produce friction when they are not made explicit.",
            "Parent-Teacher Communication: Research on Chinese parents in British schools found a recurring pattern where parents offered partnership through detailed curriculum engagement and teachers sometimes interpreted the same moves as pressure or interference. The result was not necessarily open conflict, but parallel tracks.",
            "Homework and Praise: The workbook represents a specific belief that fluency comes from practice, and practice often means sustained repetition. In many Chinese educational contexts, repetition is not understood as the opposite of understanding. It is one route toward secure mastery. The emphasis on understanding over drilling can therefore read, to some parents, as insufficiently serious unless the school explains how understanding is built and checked."
          ]
        },
        {
          "title": "Research Anchors",
          "content": [
            "Ran, A. (2001). Travelling on parallel tracks: Chinese parents and English teachers.",
            "Li, J. (2005). Mind or virtue: Western and Chinese beliefs about learning.",
            "Jin, L., and Cortazzi, M. (1998). Dimensions of dialogue: Large classes in China."
          ]
        }
      ],
      "finalPrompt": "If you could go back to the first moment, Mrs. Zhang standing outside your classroom with a paper bag, what would you say now, and why?"
    }
  }',
  ARRAY[1, 2, 5],
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
WHERE id = 'a1b2c3d4-0001-0001-0001-000000000001';
