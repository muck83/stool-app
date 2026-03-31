-- Seed China Simulation 4: "The Public WeChat Question"
-- Source: CHINA_SIM3_THE_PUBLIC_WECHAT_QUESTION.md
-- Dimensions: D2 (Parent-Teacher Communication), D3 (Visible Rigor and Academic Trust), D5 (Public Accountability Through Parent Networks)
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
  'a1b2c3d4-0001-0004-0001-000000000001',
  'china-001',
  'The Public WeChat Question',
  'A parent posts a homework comparison in the class WeChat group at 7pm. What looks like a simple question is actually a public trust test.',
  'It is October at Riverstone International School in Shanghai. Your class has just finished a literacy week focused on reading response journals and discussion-based homework. This term, your grade level agreed to keep homework purposeful and limited: one reading response, one short math practice task, and one optional extension across the week.',
  '[
    {
      "name": "You",
      "role": "Year 4 homeroom teacher",
      "description": "You are in your third year at this school. You trained in the UK, US, or Australia. You believe in purposeful homework, conceptual understanding, and keeping parent communication calm and clear. You care about trust, but you are still learning how quickly ordinary questions can become public signals in a Chinese parent group."
    },
    {
      "name": "Mrs. Chen",
      "role": "Mother of Junhao",
      "description": "Mrs. Chen works in finance and is active in the parent WeChat group. She is efficient, articulate, and highly attentive to signs of rigor. She does not see herself as confrontational. She sees herself as making sure the class stays academically serious."
    },
    {
      "name": "Junhao",
      "role": "Student, Year 4, age 9",
      "description": "Junhao is diligent, warm with classmates, and attentive to adult expectations. He does well academically and is especially sensitive to whether home and school seem aligned."
    }
  ]',
  '{
    "setup": {
      "id": "setup",
      "type": "setup",
      "title": "Setup",
      "content": [
        "7:12 p.m. The Year 4 parent WeChat group has 26 members. Several recent class photos sit above an unread message bubble.",
        "It is October at Riverstone International School in Shanghai. Your class has just finished a literacy week focused on reading response journals and discussion-based homework. This term, your grade level agreed to keep homework purposeful and limited: one reading response, one short math practice task, and one optional extension across the week.",
        "You know some families appreciate this. Others are less sure.",
        "At 7:12 p.m., Mrs. Chen posts in the class WeChat group: ''Hello Teacher. Thank you for your hard work. I have one question. My friend''s child in another Year 4 class has daily spelling dictation and more math sheets. Our class homework seems lighter. Can you clarify whether the expectations are the same? Some parents are worried the children may not be getting enough practice.''",
        "Within minutes, three parents react with thumbs-up emojis. One writes, ''Yes, I was also wondering.'' Another adds, ''My son finished tonight''s homework in 12 minutes.''",
        "No one is rude. But the question is now public, visible, and hanging in the group.",
        "Your school does not forbid WeChat communication, but leadership has repeatedly reminded teachers not to let parent groups become ranking forums or parallel accountability systems.",
        "You can already feel the tension in the message. Mrs. Chen is not only asking about homework. She is asking whether your class is academically serious enough."
      ],
      "next": "dilemma_1"
    },
    "dilemma_1": {
      "id": "dilemma_1",
      "type": "dilemma",
      "title": "The Group Message",
      "prompt": "How do you respond to Mrs. Chen''s public WeChat question?",
      "choices": [
        {
          "id": "1a",
          "label": "Answer publicly and firmly",
          "text": "Thank you for the question, Mrs. Chen. Every class is different, and I design homework intentionally based on our students'' needs. More worksheets do not always mean more learning. Please trust that the class is being challenged appropriately.",
          "next": "consequence_1a"
        },
        {
          "id": "1b",
          "label": "Move it private immediately",
          "text": "Thanks, Mrs. Chen. I''ll message you directly.",
          "next": "consequence_1b"
        },
        {
          "id": "1c",
          "label": "Acknowledge publicly, answer structurally",
          "text": "Thank you for raising this, Mrs. Chen. I know homework load is something families watch closely. Our class uses shorter homework by design, but the rigor comes through reading response quality, in-class writing, and weekly retrieval checks. I''ll send a short overview tomorrow so all families can see how homework fits into our broader learning plan.",
          "next": "consequence_1c"
        }
      ]
    },
    "consequence_1a": {
      "id": "consequence_1a",
      "type": "consequence",
      "title": "Answered Publicly and Firmly",
      "content": [
        "The group goes quiet.",
        "No one argues. No one thanks you either.",
        "The next morning, two parents message you privately asking what you meant by ''appropriately challenged.'' One asks whether there are hidden assessments they are not seeing. Another says, ''We understand your philosophy, but parents still need some way to know the standard is high.''",
        "Mrs. Chen says nothing more in the group. But that silence does not feel like resolution. It feels like withdrawal.",
        "At pick-up, Junhao''s grandmother mentions casually, ''At home they are now giving him some extra dictation, just in case.''",
        "You defended your professionalism, but the public reassurance did not actually satisfy the need beneath the question. Families wanted legible proof. You offered authority."
      ],
      "next": "perspective_1"
    },
    "consequence_1b": {
      "id": "consequence_1b",
      "type": "consequence",
      "title": "Moved It Private",
      "content": [
        "Mrs. Chen replies in the group with a polite ''Thank you, Teacher.''",
        "Then the side-messaging begins.",
        "Three parents contact you privately within the hour asking versions of the same question. One says, ''We saw the message and were also curious.'' Another says, ''If there is a class difference, we just want to understand.''",
        "Because the issue was never addressed in the public space where it appeared, the uncertainty multiplies rather than shrinks.",
        "When you message Mrs. Chen privately, she is polite but specific: ''Thank you. I did not mean criticism. But if several parents are concerned, it may help if the class can see the expectation clearly.''",
        "You avoided a public confrontation, but you also left the public uncertainty untouched."
      ],
      "next": "perspective_1"
    },
    "consequence_1c": {
      "id": "consequence_1c",
      "type": "consequence",
      "title": "Acknowledged Publicly, Answered Structurally",
      "content": [
        "The tone in the group shifts almost immediately.",
        "One parent replies, ''Thank you, that would be helpful.'' Another says, ''Yes, understanding the weekly plan would reduce confusion.''",
        "The next day, you post a simple homework overview: weekly reading response expectations, spelling retrieval in class on Fridays, math fluency checks, and where deeper rigor sits in the curriculum beyond raw worksheet volume.",
        "Mrs. Chen responds with a thumbs-up and a short note: ''This explanation is clear. Thank you.''",
        "The concern has not disappeared completely. But it has moved from comparison to interpretation. Instead of debating whether your class is soft, parents are now talking about how rigor is being shown."
      ],
      "next": "perspective_1"
    },
    "perspective_1": {
      "id": "perspective_1",
      "type": "perspective",
      "title": "Mrs. Chen''s View",
      "content": [
        "Mrs. Chen did not ask the question in the group because she wanted to embarrass you.",
        "She asked it there because WeChat has become a practical accountability channel. In her experience, if a concern is only raised privately, other parents remain uncertain, rumors spread, and each family ends up solving the same problem alone.",
        "She is also operating in a context where homework volume is often used as a visible trust signal. If one class appears lighter than another, that difference does not read as neutral. It raises a question: is the class being challenged enough?",
        "From her perspective, the group question is not automatically disrespectful. It is efficient. It turns a private doubt into a shared clarification.",
        "Research note: Guo, Wu, and Liu (2019) describe contemporary Chinese parent-teacher relationships as more negotiated and interactive than older authority models suggest. Digital platforms like WeChat make parental concerns faster, more collective, and more public. What a teacher may hear as pressure can feel, to parents, like responsible monitoring in a competitive educational environment."
      ],
      "next": "reflection_1"
    },
    "reflection_1": {
      "id": "reflection_1",
      "type": "reflection",
      "title": "Reflection",
      "prompt": "What did you assume the public WeChat question meant?",
      "options": [
        "A challenge to my authority",
        "A request for visible academic proof",
        "An attempt to speak for several parents at once",
        "A communication style mismatch more than a personal attack"
      ],
      "next": "dilemma_2"
    },
    "dilemma_2": {
      "id": "dilemma_2",
      "type": "dilemma",
      "title": "The Follow-Up",
      "prompt": "Mrs. Chen messages you privately the next afternoon. ''Thank you for replying yesterday. I appreciate the overview. I am still trying to understand how I should evaluate Junhao''s progress at home. If homework is short and there is no class rank, how can parents know whether children are really on track? We do not want to wait until problems are serious.'' How do you reply?",
      "choices": [
        {
          "id": "2a",
          "label": "Defend your homework philosophy",
          "text": "I understand the concern. At our school, we avoid overloading students with homework because we value balanced, high-quality learning. Trust that if Junhao were off track, I would let you know.",
          "next": "consequence_2a"
        },
        {
          "id": "2b",
          "label": "Offer private reassurance only",
          "text": "Junhao is doing well. He participates thoughtfully, reads carefully, and his recent work has been strong. I would not worry.",
          "next": "consequence_2b"
        },
        {
          "id": "2c",
          "label": "Make rigor more legible for all families",
          "text": "That is a fair question. Rather than increasing homework volume, I think the better solution is clearer evidence. I can start sending a short weekly note showing what we checked for in reading, math, and writing so families can see how progress is being monitored without turning everything into extra worksheets.",
          "next": "consequence_2c"
        }
      ]
    },
    "consequence_2a": {
      "id": "consequence_2a",
      "type": "consequence",
      "title": "Defended Philosophy",
      "content": [
        "Mrs. Chen thanks you. Then she adds: ''I understand. Parents just need some concrete way to follow.''",
        "The exchange remains courteous, but you can feel the mismatch.",
        "In the following weeks, Mrs. Chen stops asking about classroom learning directly. Instead, Junhao begins bringing extra practice books home and mentioning that his mother wants him to ''stay sharp.'' Another parent asks if you recommend outside dictation apps. A third asks whether the class should be doing more at home ''to be safe.''",
        "You have not lost the relationship. But you have lost interpretive ground. Parents are now building their own parallel reassurance systems outside school."
      ],
      "next": "perspective_2"
    },
    "consequence_2b": {
      "id": "consequence_2b",
      "type": "consequence",
      "title": "Offered Private Reassurance Only",
      "content": [
        "Mrs. Chen seems relieved at first. ''Thank you, Teacher. That is good to hear.''",
        "But the next week, another parent asks in the group whether Year 4 will have any end-of-unit benchmark before the next break. Soon after, a father asks privately whether your class uses the same spelling standards as the others.",
        "You realize the underlying issue was never just Junhao. It was the class''s legibility as an academic environment. By answering only at the individual level, you calmed one parent briefly but left the shared uncertainty intact.",
        "You are now repeating the same reassurance one family at a time."
      ],
      "next": "perspective_2"
    },
    "consequence_2c": {
      "id": "consequence_2c",
      "type": "consequence",
      "title": "Made Rigor More Legible",
      "content": [
        "You begin sending a concise Friday post: what students practiced, what you checked in class, one sample of what strong work looked like, and one sentence on what parents might listen for at home.",
        "The posts are short, but they change the temperature.",
        "Parents start responding less with ''Should we add more?'' and more with ''Thank you, now I understand what to look for.'' Mrs. Chen remains active, but her questions become narrower and more constructive.",
        "You have not made everyone agree with your philosophy. You have made it easier for them to see the academic structure inside it."
      ],
      "next": "perspective_2"
    },
    "perspective_2": {
      "id": "perspective_2",
      "type": "perspective",
      "title": "Junhao''s View",
      "content": [
        "Junhao is paying close attention to whether home and school sound like the same story.",
        "When his mother asks public questions about homework, he notices. When you respond with warmth and clarity, he feels that school is understandable. When adults speak past one another, he feels the gap even if no one mentions him directly.",
        "At home, ''serious school'' often looks like visible practice: dictation, math sheets, things you can point to on a table. At school, you ask him to think, discuss, revise, and read deeply. He can do both, but he does not automatically know how they fit together.",
        "If the adults around him treat those two worlds as if they are competing, Junhao may start to think one of them must be the real school and the other is just extra.",
        "Research note: Public communication about standards affects children too. In a system where parents are watching carefully for trust signals, students can start to absorb the same hierarchy of visible over invisible rigor unless teachers make the deeper logic of learning legible."
      ],
      "next": "reflection_2"
    },
    "reflection_2": {
      "id": "reflection_2",
      "type": "reflection",
      "title": "Reflection",
      "prompt": "What was the parent really asking for in the follow-up message?",
      "options": [
        "More homework",
        "A clearer way to monitor progress",
        "Proof that this class is not less rigorous than others",
        "A translation of school philosophy into something families can use"
      ],
      "next": "dilemma_3"
    },
    "dilemma_3": {
      "id": "dilemma_3",
      "type": "dilemma",
      "title": "The Comparison Moment",
      "prompt": "Two weeks later, a grade coordinator mentions that several Year 4 parents have been comparing homework practices across classes. That evening, Mrs. Chen messages: ''Thank you for the weekly notes. They help. Some parents still feel the other class has stronger visible practice. Could you perhaps add one weekly dictation or one more math review page so there is less difference? I think this would reassure families.'' How do you respond?",
      "choices": [
        {
          "id": "3a",
          "label": "Reject the comparison",
          "text": "I understand the concern, but I do not think it is helpful for parents to compare classes this way. My responsibility is to teach the students in front of me, not to match another teacher''s homework style.",
          "next": "consequence_3a"
        },
        {
          "id": "3b",
          "label": "Accommodate the pressure",
          "text": "I can add a weekly dictation check and one extra review page so families feel the practice is more concrete.",
          "next": "consequence_3b"
        },
        {
          "id": "3c",
          "label": "Reframe around shared standards",
          "text": "I appreciate the honesty. I do not want to add work simply so it looks heavier, but I do think the year group should make standards more visible. Let me speak with the team about sharing common outcomes and common checks so families can see alignment without every class having to look identical.",
          "next": "consequence_3c"
        }
      ]
    },
    "consequence_3a": {
      "id": "consequence_3a",
      "type": "consequence",
      "title": "Rejected the Comparison",
      "content": [
        "Mrs. Chen replies politely, but the note is cool: ''Understood. Thank you for explaining.''",
        "The comparison does not stop. It simply moves further away from you.",
        "At the next coffee morning, another parent mentions that ''some Year 4 families are doing extra work at home because they are not fully confident in the homework expectations.'' Nothing is openly hostile, but you can feel that your class has become a point of informal comparison.",
        "You protected your autonomy. You did not rebuild trust."
      ],
      "next": "perspective_3"
    },
    "consequence_3b": {
      "id": "consequence_3b",
      "type": "consequence",
      "title": "Accommodated the Pressure",
      "content": [
        "The extra dictation and review sheet calm things quickly.",
        "Parents thank you. Mrs. Chen posts, ''This is helpful.'' The messages quiet down.",
        "But inside the classroom, you feel the shift. Homework gets longer. A few students now rush the reading response to finish the new review sheet. You have not just adjusted communication. You have altered the shape of the learning week.",
        "And because the change came through parent pressure, you also know it can happen again.",
        "The relationship is smoother. The precedent is stronger too."
      ],
      "next": "perspective_3"
    },
    "consequence_3c": {
      "id": "consequence_3c",
      "type": "consequence",
      "title": "Reframed Around Shared Standards",
      "content": [
        "You speak with the grade-level team and leadership. Within a week, Year 4 begins sending a common fortnightly standards snapshot: shared learning outcomes, examples of how each class checks them, and where approaches may differ without reducing expectations.",
        "The result is not perfect harmony, but the comparison becomes more manageable. Parents still notice differences, yet those differences are now framed inside a common standard rather than as evidence that one teacher is softer than another.",
        "Mrs. Chen responds: ''This helps. Parents mainly want to see that the classes are equally serious even if the style is different.''",
        "The issue has become institutional instead of personal."
      ],
      "next": "perspective_3"
    },
    "perspective_3": {
      "id": "perspective_3",
      "type": "perspective",
      "title": "Mrs. Chen Revisited",
      "content": [
        "Mrs. Chen''s core concern was never really about one extra worksheet.",
        "It was about trust in a fee-paying, choice-based educational environment where parents watch for signals all the time. If one class appears lighter, families do not experience that as a neutral stylistic variation. They wonder whether their child is receiving the same academic seriousness as everyone else.",
        "In that environment, parent networks do not just spread anxiety. They also create collective interpretations. Once a few parents begin asking the same question, the question gains weight.",
        "Research note: The challenge is not to eliminate parental comparison. The challenge is to keep comparison from becoming the only way families can read rigor. In contemporary urban Chinese schooling, especially in high-pressure and choice-based contexts, teachers often need to make standards publicly legible before they can expect families to stop using volume and comparison as proxies."
      ],
      "next": "reflection_3"
    },
    "reflection_3": {
      "id": "reflection_3",
      "type": "reflection",
      "title": "Reflection",
      "prompt": "What was the deepest issue in the final dilemma?",
      "options": [
        "Parents were trying to control the classroom",
        "Families needed visible signals that standards were shared across classes",
        "The school had not made rigor legible enough at the year-group level",
        "A public communication problem was being mistaken for an individual parent problem"
      ],
      "next": "debrief"
    },
    "debrief": {
      "id": "debrief",
      "type": "debrief",
      "title": "Debrief",
      "content": [
        "This simulation explored three recurring tensions in contemporary parent-teacher relationships in urban China.",
        "Parent-Teacher Communication (D2): In digitally connected school communities, parent questions do not always arrive in private, one-to-one forms. Platforms like WeChat change the social meaning of communication. A public question may be less about disrespect than about collective clarification, visible accountability, and making sure everyone hears the same answer.",
        "Visible Rigor and Academic Trust (D3): Homework volume, dictation, and repeatable practice often function as legible trust signals. When a teacher uses lighter but more purposeful homework, families may not read that as sophistication automatically. They may read it as a possible reduction in seriousness unless the structure of rigor is made explicit.",
        "Public Accountability Through Parent Networks (D5): In a choice-based, middle-class educational environment, parents often compare classes, ask questions publicly, and triangulate through one another. That does not necessarily mean they reject the teacher''s expertise. It often means they are using the tools available to them to reduce uncertainty about quality and fairness.",
        "Research: Guo, Y., Wu, X., and Liu, X. (2019). Challenges and Opportunities in Parent-Teacher Relationships in Contemporary China. DOI: 10.5206/cie-eci.v47i2.9331"
      ],
      "researchCitations": [
        {
          "author": "Guo, Wu, and Liu",
          "year": "2019",
          "title": "Challenges and Opportunities in Parent-Teacher Relationships in Contemporary China",
          "doi": "10.5206/cie-eci.v47i2.9331"
        }
      ],
      "closingPrompt": "If you could go back to the original WeChat message, how would you answer in a way that protects your professionalism, reduces group uncertainty, and makes rigor visible without turning the class into a comparison contest?"
    }
  }',
  ARRAY[2,3,5],
  20,
  4,
  'live'
);
-- Seed India Simulation 2: "The PTM Follow-Up"
-- Source: INDIA_SIM2_THE_PTM_FOLLOW_UP.md
-- Dimensions: D2 (Parent-Teacher Follow-Through), D4 (Relational Trust and School Responsiveness), D5 (Escalation, Specificity, and System Efficacy)
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
  'a1b2c3d4-0004-0002-0001-000000000001',
  'india-001',
  'The PTM Follow-Up',
  'A parent raises a concern at a PTM about group work dynamics. Two weeks later, he emails to ask what happened. Your response will determine whether the meeting meant anything.',
  'It is July at Greenwood Academy in Pune. Midterm PTMs are underway. You are moving quickly from one family to the next, trying to be present without running too late. Aarav''s father, Mr. Sharma, sits down with a notebook in his hand.',
  '[
    {
      "name": "You",
      "role": "Year 5 class teacher at Greenwood Academy, Pune",
      "description": "You trained in the UK, US, or Australia. You care deeply about student belonging and good communication with families. You are warm in meetings, but your workload is heavy and your follow-through can become more general than specific when several issues are moving at once."
    },
    {
      "name": "Mr. Sharma",
      "role": "Father of Aarav",
      "description": "Mr. Sharma works in operations for a manufacturing company and takes PTMs seriously. He is courteous, practical, and not especially argumentative. He expects that if a concern is discussed in a meeting, the school will either act on it or explain clearly what happens next."
    },
    {
      "name": "Aarav",
      "role": "Student, Year 5, age 10",
      "description": "Aarav is thoughtful, slightly reserved in large groups, and academically capable. He likes school but does not always insert himself socially. When group work turns messy, he often lets louder children decide roles."
    }
  ]',
  '{
    "setup": {
      "id": "setup",
      "type": "setup",
      "title": "Setup",
      "content": [
        "Parent-Teacher Meeting Day. A plastic chair, a paper sign-in sheet, half-finished tea, and six more families still waiting.",
        "It is July at Greenwood Academy in Pune. Midterm PTMs are underway. You are moving quickly from one family to the next, trying to be present without running too late.",
        "Aarav''s father, Mr. Sharma, sits down with a notebook in his hand.",
        "''Aarav is doing well academically,'' he says, ''but he has mentioned something a few times. In group work, the same louder children keep deciding roles, and he gets pushed to smaller tasks. He says this happened again during the science chart activity. I do not want to overreact, but I also do not want this to become a pattern.''",
        "You know the class dynamic he means. Nothing looks like outright bullying. But there are definitely students who dominate shared tasks unless guided carefully.",
        "You have eight minutes left in the slot, one child waiting outside to show a portfolio, and three parents already glancing at the clock."
      ],
      "next": "dilemma_1"
    },
    "dilemma_1": {
      "id": "dilemma_1",
      "type": "dilemma",
      "title": "The PTM Response",
      "prompt": "How do you respond in the meeting?",
      "choices": [
        {
          "id": "1a",
          "label": "Offer warm reassurance only",
          "text": "Thank you for telling me, Mr. Sharma. I am glad you raised it. Aarav is such a lovely child, and I will definitely keep an eye on it.",
          "next": "consequence_1a"
        },
        {
          "id": "1b",
          "label": "Promise quick action",
          "text": "Thank you. I will speak to the group tomorrow and make sure Aarav gets more equitable roles right away.",
          "next": "consequence_1b"
        },
        {
          "id": "1c",
          "label": "Name a specific follow-through plan",
          "text": "Thank you for raising it. I have noticed that some students dominate group roles unless I structure them. Over the next two weeks, I will observe Aarav during collaborative tasks, rotate roles more explicitly, and check back with you by next Friday about what I am seeing.",
          "next": "consequence_1c"
        }
      ]
    },
    "consequence_1a": {
      "id": "consequence_1a",
      "type": "consequence",
      "title": "Warm Reassurance Only",
      "content": [
        "Mr. Sharma nods politely. ''Thank you, Teacher.''",
        "The PTM ends smoothly.",
        "But the next two weeks are crowded. A reading assessment cycle begins, one student is absent for a family wedding, and you do not specifically revisit Aarav''s group experiences. You assume that because you are now more aware, you are effectively monitoring the issue.",
        "Then an email arrives: ''At the PTM we discussed Aarav''s difficulty getting meaningful roles in group work. I asked him this week, and he says it is still happening. Could you let me know what has been done since the meeting?''",
        "You realize that from his side, the meeting produced sympathy but not evidence."
      ],
      "next": "perspective_1"
    },
    "consequence_1b": {
      "id": "consequence_1b",
      "type": "consequence",
      "title": "Promised Quick Action",
      "content": [
        "The next day, you speak to the class in general terms about sharing responsibility in groups.",
        "It feels like you have done something. But in practice, the reminder is broad, and the next science activity still falls into familiar patterns. Aarav ends up lettering the title while two stronger personalities drive the task.",
        "Mr. Sharma writes again: ''Thank you for taking it up. Aarav says there was still no real change in his role this week. Could you explain what steps are being taken?''",
        "Your promise created a higher bar than your classroom follow-through actually met."
      ],
      "next": "perspective_1"
    },
    "consequence_1c": {
      "id": "consequence_1c",
      "type": "consequence",
      "title": "Named a Specific Follow-Through Plan",
      "content": [
        "You set a note in your planner. During the next two collaborative tasks, you deliberately watch Aarav''s groups, assign rotating roles, and record who leads, who writes, and who presents.",
        "At the end of the week, you message Mr. Sharma: ''I observed Aarav in two tasks. He contributes ideas but yields quickly when peers move faster. I have started rotating roles more explicitly and will keep doing so. Next step: I want to support him in claiming the recorder or presenter role at least once next week.''",
        "Mr. Sharma replies, ''Thank you. This is very helpful.''",
        "The problem is not solved yet. But the parent can now see that the meeting produced movement, not just empathy."
      ],
      "next": "perspective_1"
    },
    "perspective_1": {
      "id": "perspective_1",
      "type": "perspective",
      "title": "Mr. Sharma''s View",
      "content": [
        "Mr. Sharma did not come to the PTM because he wanted a long emotional conversation.",
        "He came because the meeting is supposed to matter.",
        "From his perspective, parent-teacher engagement is not successful when the teacher sounds kind. It is successful when the concern enters the school''s working memory. If a teacher listens warmly but the problem returns unchanged, the parent may feel not only disappointed but dismissed, even if no one intended that.",
        "Research note: In Indian PTM contexts, parents often judge the meeting by whether it produces visible responsiveness. The frustration is not always with disagreement itself. It is with the feeling that the system absorbed the concern politely and then carried on as before. (Munthe and Westergård, 2023)"
      ],
      "next": "reflection_1"
    },
    "reflection_1": {
      "id": "reflection_1",
      "type": "reflection",
      "title": "Reflection",
      "prompt": "What was the biggest risk in your first response?",
      "options": [
        "Sounding uncaring",
        "Promising more than you could track",
        "Treating empathy as if it were evidence of action",
        "Underestimating how concretely the parent would interpret your response"
      ],
      "next": "dilemma_2"
    },
    "dilemma_2": {
      "id": "dilemma_2",
      "type": "dilemma",
      "title": "The Parent Email",
      "prompt": "Mr. Sharma''s follow-up email is direct but respectful: ''At the PTM we discussed Aarav''s difficulty in getting proper roles in group work. I checked with him this week, and he feels the pattern is continuing. I wanted to understand what has been observed and what the school is doing next.'' You feel a flash of defensiveness. You are doing your best. But you also know the email is fair. How do you reply?",
      "choices": [
        {
          "id": "2a",
          "label": "Be defensive",
          "text": "Group work is complex, and these situations are not always as clear as children describe them. Aarav is doing well overall, and I think it would be best not to magnify a small issue.",
          "next": "consequence_2a"
        },
        {
          "id": "2b",
          "label": "Explain generally",
          "text": "Thank you for following up. I have been mindful of the issue and am continuing to observe classroom interactions. We are always working on collaboration as a class, and I will keep encouraging fair participation.",
          "next": "consequence_2b"
        },
        {
          "id": "2c",
          "label": "Account concretely for what happened",
          "text": "Thank you for following up. You are right to ask. Since the PTM, I gave a general reminder about shared roles, but I did not yet create a strong enough structure to change the pattern consistently. I have now planned three specific next steps: rotating roles, observing Aarav''s next two group tasks directly, and checking back with you on Friday with what I saw.",
          "next": "consequence_2c"
        }
      ]
    },
    "consequence_2a": {
      "id": "consequence_2a",
      "type": "consequence",
      "title": "Defensive Response",
      "content": [
        "Mr. Sharma''s next reply is still polite, but firmer: ''I understand group work is complex. My concern is not that the issue is huge, but that it may become a pattern if not addressed. I was hoping for a clearer response.''",
        "The problem is now larger than it was at the PTM. It is no longer only about Aarav''s group role. It is about whether the school takes parent concerns seriously once the polite meeting is over.",
        "You protected yourself in the moment. You weakened the relationship."
      ],
      "next": "perspective_2"
    },
    "consequence_2b": {
      "id": "consequence_2b",
      "type": "consequence",
      "title": "General Explanation",
      "content": [
        "Mr. Sharma thanks you for the message. Then nothing changes.",
        "A week later, he writes again, now cc''ing the grade coordinator: ''I appreciate the reply. I am still not clear on what has been specifically observed or changed. I would be grateful for a more concrete update.''",
        "Your answer was calm, professional, and almost useless from the parent''s point of view. It described attention, not action."
      ],
      "next": "perspective_2"
    },
    "consequence_2c": {
      "id": "consequence_2c",
      "type": "consequence",
      "title": "Concrete Account",
      "content": [
        "Mr. Sharma responds: ''Thank you. I appreciate the clarity.''",
        "You follow through. In the next task, Aarav is assigned discussion leader. He hesitates, but with a bit of prompting, he does it. In the second task, he volunteers to present one section.",
        "When you update Mr. Sharma on Friday, you can describe what you saw rather than what you meant to do.",
        "The original issue is still real. But the parent now experiences the school as responsive rather than slippery."
      ],
      "next": "perspective_2"
    },
    "perspective_2": {
      "id": "perspective_2",
      "type": "perspective",
      "title": "Aarav''s View",
      "content": [
        "Aarav notices more than adults think.",
        "He knows his father raised the issue because his father asked him again after the PTM. He also knows whether anything actually changed. Children like Aarav can sense quickly whether school conversations stay in the adult layer or alter classroom reality.",
        "If the adults speak warmly but nothing changes, Aarav learns a quiet lesson: meetings are for talking, not for shifting the pattern. If he sees a real change, even a small one, he learns that speaking up through a parent can matter.",
        "Research note: Responsiveness is not only for parents. It shapes children''s sense of whether school structures are real and whether quieter students can count on adults to rebalance participation."
      ],
      "next": "reflection_2"
    },
    "reflection_2": {
      "id": "reflection_2",
      "type": "reflection",
      "title": "Reflection",
      "prompt": "What made the strongest response in the second dilemma more effective?",
      "options": [
        "It sounded more apologetic",
        "It admitted the gap between intention and action",
        "It gave observable next steps and a timeline",
        "It treated the parent''s follow-up as legitimate rather than irritating"
      ],
      "next": "dilemma_3"
    },
    "dilemma_3": {
      "id": "dilemma_3",
      "type": "dilemma",
      "title": "The System Question",
      "prompt": "The grade coordinator asks if this situation points to a broader issue. She says, ''We are getting more parent follow-ups after PTMs this term. Not hostile ones, but specific ones. I think some families are leaving meetings unclear about what happens next.'' You now have a chance to recommend a change beyond Aarav''s case. What do you suggest?",
      "choices": [
        {
          "id": "3a",
          "label": "Treat this as an individual parent issue",
          "text": "Some parents simply expect too much immediate action. I do not think the school needs a new system because of a few persistent follow-up emails.",
          "next": "consequence_3a"
        },
        {
          "id": "3b",
          "label": "Overcorrect immediately",
          "text": "We should require teachers to send written action plans after every PTM, even for small concerns, so no parent can say the school did nothing.",
          "next": "consequence_3b"
        },
        {
          "id": "3c",
          "label": "Tighten the follow-up system thoughtfully",
          "text": "We do not need formal action plans for every conversation, but for concerns that involve recurring patterns, teachers should record one clear next step, one time frame, and one follow-up point. That would make PTMs feel more consequential without becoming bureaucratic.",
          "next": "consequence_3c"
        }
      ]
    },
    "consequence_3a": {
      "id": "consequence_3a",
      "type": "consequence",
      "title": "Treated as Individual Issue",
      "content": [
        "Nothing systemic changes.",
        "Some teachers keep doing excellent follow-through. Others keep offering warm but vague reassurance. The pattern continues unevenly across classes.",
        "Parents who are persistent get clarity eventually. Parents who are less confident may simply stop asking.",
        "The school avoids extra process. It also misses a chance to make responsiveness more equitable."
      ],
      "next": "perspective_3"
    },
    "consequence_3b": {
      "id": "consequence_3b",
      "type": "consequence",
      "title": "Overcorrected Immediately",
      "content": [
        "The new PTM paperwork is heavy. Teachers resent it. Many start filling it with generic language just to comply.",
        "Parents receive more documentation, but not always more meaning. Aarav''s case is now technically covered by a stronger system, yet the school as a whole becomes more performative than responsive.",
        "You solved the visibility problem by creating a bureaucracy problem."
      ],
      "next": "perspective_3"
    },
    "consequence_3c": {
      "id": "consequence_3c",
      "type": "consequence",
      "title": "Tightened the System Thoughtfully",
      "content": [
        "The grade coordinator adopts a simple shared practice for substantive concerns: note the issue, note one next step, note a time frame, note who closes the loop.",
        "It is small enough to use and concrete enough to matter.",
        "At the next PTM cycle, teachers begin sending shorter but clearer follow-up messages. Parents still ask questions, but fewer of them feel they must reopen the whole conversation just to know whether anything happened.",
        "You have turned one parent email into a healthier school habit."
      ],
      "next": "perspective_3"
    },
    "perspective_3": {
      "id": "perspective_3",
      "type": "perspective",
      "title": "Mr. Sharma Revisited",
      "content": [
        "Mr. Sharma''s persistence was not really about group work alone.",
        "It was about whether the PTM is a meaningful institutional space or a courtesy ritual. If the school listens, nods, and forgets, the meeting functions as performance. If the school listens, records, acts, and reports back, the meeting becomes part of the learning system.",
        "Research note: In many Indian school contexts, trust is built less through polished messaging than through visible follow-through. Parents do not always need perfect outcomes. They need to know the concern entered a real process."
      ],
      "next": "reflection_3"
    },
    "reflection_3": {
      "id": "reflection_3",
      "type": "reflection",
      "title": "Reflection",
      "prompt": "What was the central lesson of the final dilemma?",
      "options": [
        "Schools need fewer parent meetings",
        "Teachers should never promise too much",
        "Responsiveness needs light structure, not just goodwill",
        "The real issue was parent impatience"
      ],
      "next": "debrief"
    },
    "debrief": {
      "id": "debrief",
      "type": "debrief",
      "title": "Debrief",
      "content": [
        "This simulation explored three recurring tensions in parent-teacher engagement in Indian school settings.",
        "Parent-Teacher Follow-Through (D2): Families often judge a meeting not only by the teacher''s warmth, but by whether the concern produces visible action, observation, or closure afterward.",
        "Relational Trust and School Responsiveness (D4): Trust is not built only through kindness. It is built when the school''s response is legible, specific, and proportionate. Parents may tolerate disagreement more easily than vagueness.",
        "Escalation, Specificity, and System Efficacy (D5): When follow-through is weak, parents often re-ask, escalate, or widen the circle — not necessarily because they are adversarial, but because they are trying to confirm that the issue entered an actual school process. Light institutional structure can prevent small concerns from becoming credibility problems.",
        "Research: Munthe, E., and Westergård, E. (2023). Parents'', teachers'', and students'' roles in parent-teacher conferences: A systematic review and meta-synthesis. Teaching and Teacher Education, 136, 104355. DOI: 10.1016/j.tate.2023.104355"
      ],
      "researchCitations": [
        {
          "author": "Munthe and Westergård",
          "year": "2023",
          "title": "Parents'', teachers'', and students'' roles in parent-teacher conferences: A systematic review and meta-synthesis",
          "journal": "Teaching and Teacher Education",
          "doi": "10.1016/j.tate.2023.104355"
        }
      ],
      "closingPrompt": "If you could return to the original PTM, what would you say so that Mr. Sharma leaves feeling heard and you leave with a follow-through plan you can actually sustain?"
    }
  }',
  ARRAY[2,4,5],
  20,
  2,
  'live'
);
-- Seed Korea Simulation 2: "The Reform Petition"
-- Source: KOREA_SIM2_THE_REFORM_PETITION.md
-- Dimensions: D1 (Meritocracy and Legible Achievement), D2 (Parent Activism and School Communication), D4 (Reform, Fairness, and Competitive Signals)
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
  'c3d4e5f6-0003-0003-0003-000000000004',
  'korea-001',
  'The Reform Petition',
  'A parent network organises around a school reform that removes a test week. What looks like resistance to change is really a demand for legibility.',
  'It is April at Haneul Global School in Seoul. Leadership has announced a new initiative: next month, one traditional test week will be replaced by an interdisciplinary project week. Students will still produce assessed work, but instead of sitting three subject tests, they will build a collaborative inquiry project and present their findings.',
  '[
    {
      "name": "You",
      "role": "Middle school humanities teacher and grade-level advisor",
      "description": "You trained in the UK, US, or Australia. You believe good assessment should show growth, collaboration, and thinking, not only ranking. You are comfortable explaining pedagogy in theory, but less experienced at navigating organised parent pressure."
    },
    {
      "name": "Mrs. Kim",
      "role": "Mother of Seojun",
      "description": "Mrs. Kim is a former lawyer who now works part-time and spends significant time managing her son''s schooling. She is well connected, articulate, and respected among other parents. She does not see herself as oppositional. She sees herself as responsibly protecting clear academic pathways."
    },
    {
      "name": "Seojun",
      "role": "Student, middle school, age 13",
      "description": "Seojun is diligent, high-performing, and careful. He responds well to structure and benchmarks. He likes project work once he understands how it will count."
    }
  ]',
  '{
    "setup": {
      "id": "setup",
      "type": "setup",
      "title": "Setup",
      "content": [
        "A grade-level planning slide titled Future Learning Week. The line that keeps coming up in meetings: ''Replace one test week with interdisciplinary evidence of learning.''",
        "It is April at Haneul Global School in Seoul. Leadership has announced that next month, one traditional test week will be replaced by an interdisciplinary project week. Students will still produce assessed work, but instead of sitting three subject tests, they will build a collaborative inquiry project and present their findings.",
        "Your leadership team believes this is more authentic and more future-facing. They keep using words like transfer, creativity, and real-world application.",
        "Some families are less convinced.",
        "Seojun is one of your strongest students. He does well on tests, prepares carefully, and likes to know exactly how performance will be evaluated. He is not rigid, but he is accustomed to clear academic signals.",
        "At 8:03 p.m., Mrs. Kim messages you privately: ''Teacher, I wanted to ask before tomorrow''s parent coffee morning. Some parents are worried that replacing test week with a project may reduce academic seriousness. We understand innovation, but children still need clear standards. A few of us have drafted a note asking the school to provide formal benchmarking alongside the project. I wanted to hear your view.''",
        "Attached is a polished statement signed by several parents. It is respectful, but unmistakably organised.",
        "You know this is bigger than one mother''s concern. A parent network is mobilising around the reform."
      ],
      "next": "dilemma_1"
    },
    "dilemma_1": {
      "id": "dilemma_1",
      "type": "dilemma",
      "title": "The Private Message",
      "prompt": "How do you respond to Mrs. Kim''s first message?",
      "choices": [
        {
          "id": "1a",
          "label": "Defend the reform directly",
          "text": "I understand the concern, but the project week is academically rigorous. It is not replacing learning with something softer. We are assessing important skills that traditional tests do not always capture.",
          "next": "consequence_1a"
        },
        {
          "id": "1b",
          "label": "Distance yourself privately",
          "text": "I see why parents are asking questions. These decisions come from leadership rather than individual teachers, so I cannot really comment. I am sure the school will explain more soon.",
          "next": "consequence_1b"
        },
        {
          "id": "1c",
          "label": "Translate the reform into clear academic signals",
          "text": "It is a fair question. The project is not meant to remove standards, only to show them differently. If it helps, I can explain what evidence of learning, rubrics, and subject knowledge checks will still be part of the week so the change feels less vague.",
          "next": "consequence_1c"
        }
      ]
    },
    "consequence_1a": {
      "id": "consequence_1a",
      "type": "consequence",
      "title": "Defended the Reform",
      "content": [
        "Mrs. Kim thanks you politely. But the next line changes the tone: ''I understand the philosophy. Parents are worried about accountability, not creativity.''",
        "You realise the issue is not whether the project has value. The issue is whether it preserves legible competitive signals.",
        "At the coffee morning, two parents ask whether project grades will appear on transcripts the same way test scores do. Another asks whether students who are strong in exams are being disadvantaged.",
        "You gave a principled defence. The parents are still asking for a scoreboard."
      ],
      "next": "perspective_1"
    },
    "consequence_1b": {
      "id": "consequence_1b",
      "type": "consequence",
      "title": "Distanced Yourself",
      "content": [
        "Mrs. Kim replies: ''Thank you. I thought it would be useful to hear from the teachers directly since you see the students'' needs most clearly.''",
        "The next day, the petition grows.",
        "Because teachers stayed neutral and leadership spoke in generalities, parents fill the interpretive vacuum themselves. Rumours spread that project week is being used because students are ''too stressed'' and that formal assessment may be reduced more broadly.",
        "You avoided being drawn in. But your silence helped make the reform feel even less anchored."
      ],
      "next": "perspective_1"
    },
    "consequence_1c": {
      "id": "consequence_1c",
      "type": "consequence",
      "title": "Translated the Reform",
      "content": [
        "You send Mrs. Kim a short, concrete explanation: content knowledge will still be assessed, students will receive subject-specific rubric scores, reflection and collaboration will add evidence not replace mastery, and departments will moderate work across classes.",
        "Mrs. Kim responds: ''This is helpful. I still think parents will want stronger benchmarking, but at least I can see the structure.''",
        "The petition does not disappear. But its emotional charge softens. The conversation begins moving from ''the school is removing rigour'' to ''the school needs to show rigour more clearly.''"
      ],
      "next": "perspective_1"
    },
    "perspective_1": {
      "id": "perspective_1",
      "type": "perspective",
      "title": "Mrs. Kim''s View",
      "content": [
        "Mrs. Kim is not automatically anti-reform.",
        "She is operating inside a system where parents have learned to watch closely for anything that affects legibility, fairness, and positioning. When a familiar academic signal disappears, it does not feel like a neutral pedagogical experiment. It feels like a possible loss of clarity in a highly competitive environment.",
        "From her perspective, organised parent action is not evidence of irrational anxiety. It is evidence of responsible vigilance. Good parents do not wait passively to see whether a reform harms their children. They intervene early, gather information, and use networks to influence outcomes.",
        "Research note: Jang (2024) shows that parental activism in South Korea is often driven by meritocratic logic and access to capital. Parents mobilise not only because they resist change, but because they believe responsible care requires active management of the educational environment when competitive signals become less clear."
      ],
      "next": "reflection_1"
    },
    "reflection_1": {
      "id": "reflection_1",
      "type": "reflection",
      "title": "Reflection",
      "prompt": "What did you initially assume the parent message was about?",
      "options": [
        "Resistance to innovation",
        "A request for clearer academic legibility",
        "A parent network testing how much influence it has",
        "A fairness concern disguised as a pedagogy debate"
      ],
      "next": "dilemma_2"
    },
    "dilemma_2": {
      "id": "dilemma_2",
      "type": "dilemma",
      "title": "The Petition Spreads",
      "prompt": "Two days later, leadership asks you and the other advisors to attend an open parent session about Future Learning Week. Before the session, Mrs. Kim sends you the updated note — it now has twelve parent names on it. At the meeting, parents ask: How will students know where they stand? Will high-performing students lose an advantage? How can one project be as objective as multiple tests? You are not the principal. But you are the teacher in the room who actually knows the students. How do you handle the meeting?",
      "choices": [
        {
          "id": "2a",
          "label": "Treat the petition as inappropriate pressure",
          "text": "I want to say respectfully that educational decisions cannot be made through parent campaigns. The school must act in students'' best interests, not just in response to anxiety about competition.",
          "next": "consequence_2a"
        },
        {
          "id": "2b",
          "label": "Listen carefully, but stay mostly neutral",
          "text": "I can hear that families want clarity and fairness. I may not have all the policy answers, but I understand why these questions matter. I will make sure leadership hears the specific concerns being raised.",
          "next": "consequence_2b"
        },
        {
          "id": "2c",
          "label": "Create a public explanation channel",
          "text": "I think the strongest next step is to make the assessment architecture visible. Rather than debating whether projects are good or bad, let us show exactly what will be assessed, how moderation works, and what evidence students will receive so this does not feel like a leap of faith.",
          "next": "consequence_2c"
        }
      ]
    },
    "consequence_2a": {
      "id": "consequence_2a",
      "type": "consequence",
      "title": "Treated It as Pressure",
      "content": [
        "The room quiets. Then a father says, ''Parents are not trying to run the school. We are trying to understand how standards are being protected.''",
        "Mrs. Kim remains calm, but the tone hardens.",
        "After the meeting, one parent emails leadership saying teachers seem dismissive of legitimate family concerns. Another writes that the school talks about partnership only when parents agree.",
        "You were not wrong that the petition was a form of pressure. But by naming only that, you made it harder for parents to hear anything else you said."
      ],
      "next": "perspective_2"
    },
    "consequence_2b": {
      "id": "consequence_2b",
      "type": "consequence",
      "title": "Listened, Stayed Neutral",
      "content": [
        "Parents appreciate your calm tone. No one leaves angry.",
        "But very little changes.",
        "Because no one translated the reform into concrete academic terms during the meeting, families continue interpreting it through comparison and suspicion. Some assume the school will later backtrack. Others begin arranging extra tutoring ''just in case.''",
        "You preserved the room. You did not reduce uncertainty."
      ],
      "next": "perspective_2"
    },
    "consequence_2c": {
      "id": "consequence_2c",
      "type": "consequence",
      "title": "Created a Public Explanation Channel",
      "content": [
        "Leadership agrees to your suggestion. Within 48 hours, the school shares a sample project rubric, subject-specific criteria, an explanation of moderation, examples of feedback students will receive, and a statement on how the project complements rather than abolishes formal assessment.",
        "Parents still debate the reform, but the debate changes shape. The loudest questions become operational rather than existential.",
        "Mrs. Kim says at the end of the session: ''I may still prefer stronger benchmarking, but this is the first time the reform feels educationally concrete.''"
      ],
      "next": "perspective_2"
    },
    "perspective_2": {
      "id": "perspective_2",
      "type": "perspective",
      "title": "Seojun''s View",
      "content": [
        "Seojun has heard enough at home to know the adults are worried.",
        "He likes project work once he understands the criteria, but he trusts tests because they are legible. When parents say the project may not be fair, he starts to wonder whether he should trust the new format either.",
        "If the school explains the reform vaguely, Seojun hears this as a possible downgrade in seriousness. If the school explains it concretely, he can map the new task onto something familiar: effort, evidence, evaluation, outcome.",
        "Research note: Competitive systems do not only shape parents. They shape students'' sense of security too. Reform becomes easier to accept when children can still see how performance will be read and rewarded."
      ],
      "next": "reflection_2"
    },
    "reflection_2": {
      "id": "reflection_2",
      "type": "reflection",
      "title": "Reflection",
      "prompt": "What did the parents need most in the meeting?",
      "options": [
        "To be told to trust the professionals",
        "To be heard without being indulged",
        "To see the reform translated into concrete evidence structures",
        "To know the school understood how high the stakes feel to them"
      ],
      "next": "dilemma_3"
    },
    "dilemma_3": {
      "id": "dilemma_3",
      "type": "dilemma",
      "title": "The Decision Point",
      "prompt": "A week later, leadership asks grade-level staff for feedback. The principal is considering three options: keep the project week exactly as planned, restore one common test inside the week, or keep the reform but provide stronger common evidence reporting afterward. Mrs. Kim sends one final message: ''Thank you for helping explain things. Parents still feel one formal benchmark would protect fairness. If the school wants innovation, perhaps it should add, not replace.'' You have influence, even if you do not have final authority. What do you advocate internally?",
      "choices": [
        {
          "id": "3a",
          "label": "Reject parent influence and keep the reform unchanged",
          "text": "If we adjust now, we teach parents that coordinated pressure can rewrite academic decisions. The school should keep the week unchanged.",
          "next": "consequence_3a"
        },
        {
          "id": "3b",
          "label": "Restore one benchmark quietly",
          "text": "Adding one common test would calm the parent body and preserve trust. It may not be ideal pedagogically, but it would give families a signal they recognise.",
          "next": "consequence_3b"
        },
        {
          "id": "3c",
          "label": "Keep the reform, add clearer common evidence",
          "text": "We should keep the project week, but publish stronger shared evidence afterward: common criteria, moderated samples, short subject comments, and explicit links between project performance and core knowledge. Parents are asking for fairness and legibility more than old formats themselves.",
          "next": "consequence_3c"
        }
      ]
    },
    "consequence_3a": {
      "id": "consequence_3a",
      "type": "consequence",
      "title": "Rejected Parent Influence",
      "content": [
        "Leadership keeps the reform unchanged.",
        "Pedagogically, the week goes well. Student work is strong. Some presentations are excellent.",
        "But the parent conversation remains tense. Several families leave the term feeling the school heard them but did not really understand why they were worried. Mrs. Kim becomes cooler in future interactions. Not hostile, just less trusting.",
        "The reform survived. The relationship cost was real."
      ],
      "next": "perspective_3"
    },
    "consequence_3b": {
      "id": "consequence_3b",
      "type": "consequence",
      "title": "Restored a Benchmark",
      "content": [
        "Leadership adds a short common test at the end of project week.",
        "Parents are relieved immediately. Mrs. Kim writes, ''This feels balanced.''",
        "The school also learns something uncomfortable: once the familiar signal reappears, many families ignore the richer evidence the project produced. The test becomes the headline. The reform remains, but its meaning shrinks.",
        "You preserved confidence. You also narrowed the pedagogical ambition."
      ],
      "next": "perspective_3"
    },
    "consequence_3c": {
      "id": "consequence_3c",
      "type": "consequence",
      "title": "Kept the Reform, Added Clearer Evidence",
      "content": [
        "Leadership adopts a hybrid reporting model without restoring the test: common rubric strands, short subject competency notes, moderated exemplars, and a summary explaining how students demonstrated knowledge, process, and application.",
        "The parent body remains mixed, but the level of alarm drops sharply. Mrs. Kim still says she prefers stronger benchmarking, yet she also acknowledges that the school is not asking families to trust blindly.",
        "You have not removed the meritocratic logic in the room. You have built a structure that can survive inside it."
      ],
      "next": "perspective_3"
    },
    "perspective_3": {
      "id": "perspective_3",
      "type": "perspective",
      "title": "Mrs. Kim Revisited",
      "content": [
        "Mrs. Kim''s position was never simply ''tests good, projects bad.''",
        "Her central concern was whether the school understood what parents lose when a familiar signal disappears. In a context where families invest enormous time, emotion, and capital into educational positioning, reforms that reduce legibility can feel like hidden risk.",
        "When teachers treat this as mere conservatism, parents feel patronised. When schools translate new approaches into recognisable evidence, even sceptical families become more willing to engage.",
        "Research note: In South Korea, activism around schooling often reflects not only pressure for performance, but a broader habit of active educational stewardship. The challenge for schools is not to eliminate that activism, but to keep reforms intelligible enough that activism does not harden into distrust. (Jang, 2024)"
      ],
      "next": "reflection_3"
    },
    "reflection_3": {
      "id": "reflection_3",
      "type": "reflection",
      "title": "Reflection",
      "prompt": "What was the deepest issue in the final decision?",
      "options": [
        "Whether parent activism should ever shape school decisions",
        "Whether the reform could survive without recognisable evidence of fairness",
        "Whether the school had confused innovation with opacity",
        "Whether families were protecting competitive security rather than tradition itself"
      ],
      "next": "debrief"
    },
    "debrief": {
      "id": "debrief",
      "type": "debrief",
      "title": "Debrief",
      "content": [
        "This simulation explored three recurring tensions in South Korean school contexts shaped by meritocracy and active parental involvement.",
        "Meritocracy and Legible Achievement (D1): In a highly competitive environment, families often depend on visible signals of performance to assess whether a child is secure, advancing, and fairly positioned. When those signals become less clear, concern rises quickly.",
        "Parent Activism and School Communication (D2): Organised parental action is not always a sign of anti-school hostility. It can reflect a deeply normalised belief that responsible parents intervene, ask questions early, and mobilise networks when schooling becomes less legible.",
        "Reform, Fairness, and Competitive Signals (D4): Innovative reforms often fail not because parents reject new learning in principle, but because the school underestimates how much familiar benchmarks function as fairness devices. The key challenge is translation: how to preserve pedagogical ambition while making evidence visible enough to retain trust.",
        "Research: Jang, S. (2024). Capital mechanisms driving parental activism in South Korea: Perspectives from parentocracy, meritocracy, and a Bourdieusian analysis of capital. DOI: 10.1016/j.ijedudev.2024.103104"
      ],
      "researchCitations": [
        {
          "author": "Jang",
          "year": "2024",
          "title": "Capital mechanisms driving parental activism in South Korea: Perspectives from parentocracy, meritocracy, and a Bourdieusian analysis of capital",
          "doi": "10.1016/j.ijedudev.2024.103104"
        }
      ],
      "closingPrompt": "If you could go back to Mrs. Kim''s first message, how would you respond in a way that respects the stakes parents feel without reducing every reform to a demand for old-style benchmarking?"
    }
  }',
  ARRAY[1,2,4],
  20,
  2,
  'live'
);
-- Seed KSA Simulation 2: "The Student Voice Week"
-- Source: KSA_SIM2_THE_STUDENT_VOICE_WEEK.md
-- Dimensions: D1 (International Ethos and Cultural Fit), D2 (Parent Interpretation and Trust), D4 (Voice, Leadership, and Moral Meaning)
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
  'b2c3d4e5-0002-0002-0002-000000000003',
  'ksa-001',
  'The Student Voice Week',
  'A school launches Student Voice Week. A parent asks what the school means by ''voice'' and ''leadership.'' What looks like a simple question is really a test of whether the school can translate its values into culturally grounded practice.',
  'It is January at Al Manar International School in Riyadh. The school has launched Student Voice Week, a cross-campus initiative where students will identify a problem in school life and propose improvements. Leadership describes it as a way to build agency, communication, and collaborative citizenship.',
  '[
    {
      "name": "You",
      "role": "Year 5 classroom teacher at Al Manar International School, Riyadh",
      "description": "You trained in the UK, US, or Australia. You believe students should speak up, solve problems, and contribute ideas. You care about making students feel capable, but you are still learning how international-school language can sound different in Saudi family contexts."
    },
    {
      "name": "Mrs. Alsubaie",
      "role": "Mother of Noura",
      "description": "Mrs. Alsubaie chose the school for English, confidence, and future opportunities, but also expects clear cultural and moral fit. She is thoughtful, polite, and precise. She is not suspicious by default. She wants to understand what the school really means by the values-heavy language it uses."
    },
    {
      "name": "Noura",
      "role": "Student, Year 5, age 10",
      "description": "Noura is strong in English, observant, eager to do school ''the right way,'' and increasingly attentive to which kinds of speech seem admired by adults."
    }
  ]',
  '{
    "setup": {
      "id": "setup",
      "type": "setup",
      "title": "Setup",
      "content": [
        "A bright classroom slide titled Student Voice Week. Under it: ''Speak up. Lead change. Make school better.''",
        "It is January at Al Manar International School in Riyadh. The school has launched Student Voice Week, a cross-campus initiative where students will identify a problem in school life and propose improvements. Leadership describes it as a way to build agency, communication, and collaborative citizenship.",
        "Your class is excited. So are many teachers.",
        "But you know the phrase student voice can carry different meanings depending on who hears it.",
        "Noura is one of your most capable students. She is strong in English, confident in presentations, and highly attuned to what the school rewards. When the announcement slides went up, she whispered to a friend, ''We get to tell the school what should change.''",
        "That afternoon, Mrs. Alsubaie messages you: ''Teacher, may I ask about Student Voice Week? Noura explained it as children making proposals to improve school. That sounds positive. I only want to understand the boundaries. Is this about problem-solving inside school life, or is it encouraging children to question adults more generally? I ask because the language can mean different things.''",
        "The question is calm, not hostile. But it is asking you to do interpretive work, not just provide logistics."
      ],
      "next": "dilemma_1"
    },
    "dilemma_1": {
      "id": "dilemma_1",
      "type": "dilemma",
      "title": "The First Explanation",
      "prompt": "How do you respond to Mrs. Alsubaie''s message?",
      "choices": [
        {
          "id": "1a",
          "label": "Defend the student voice language",
          "text": "Student voice is an important part of modern learning. We want students to think critically, express opinions, and take ownership. It is about helping them become confident leaders.",
          "next": "consequence_1a"
        },
        {
          "id": "1b",
          "label": "Reassure vaguely",
          "text": "Please do not worry. It is just a school activity and nothing controversial.",
          "next": "consequence_1b"
        },
        {
          "id": "1c",
          "label": "Translate the activity concretely",
          "text": "That is a fair question. In our Year 5 context, this means identifying practical school-life issues — like playground flow, library access, or classroom routines — then making respectful proposals with evidence. It is not about telling children to challenge family authority or moral boundaries. It is about guided problem-solving inside school.",
          "next": "consequence_1c"
        }
      ]
    },
    "consequence_1a": {
      "id": "consequence_1a",
      "type": "consequence",
      "title": "Defended the Language",
      "content": [
        "Mrs. Alsubaie thanks you, but her reply is careful: ''I understand. My question was more about how the idea is being interpreted by children.''",
        "The next day, you hear Noura telling another student, ''We are supposed to speak up even if we disagree.''",
        "Nothing in your message was wrong. But because it stayed at the level of international-school ideals, it left the concrete boundaries of the activity unclear. The school slogan travelled faster than the practical meaning.",
        "You now have a family that is not against the activity, but less sure that the school notices how its language lands."
      ],
      "next": "perspective_1"
    },
    "consequence_1b": {
      "id": "consequence_1b",
      "type": "consequence",
      "title": "Reassured Vaguely",
      "content": [
        "Mrs. Alsubaie responds politely: ''Thank you, Teacher.''",
        "Two days later, she writes again: ''I appreciate that. Could you still clarify what kinds of proposals children are being asked to make? Noura says they can suggest rules that adults should change.''",
        "Your first answer solved nothing because it addressed the emotion, not the meaning.",
        "By trying to avoid the values layer, you made it harder for the parent to trust that you had actually understood the question."
      ],
      "next": "perspective_1"
    },
    "consequence_1c": {
      "id": "consequence_1c",
      "type": "consequence",
      "title": "Translated the Activity Concretely",
      "content": [
        "Mrs. Alsubaie replies almost immediately: ''Thank you. That makes much more sense.''",
        "The next day, Noura comes to class with a different tone. ''Can my group propose a quieter lunch line system?'' she asks. The activity is still energising, but now it is framed as collaborative improvement rather than vague permission to challenge everything.",
        "You have not removed the possibility of misunderstanding altogether. But you have narrowed the interpretive gap before it widened."
      ],
      "next": "perspective_1"
    },
    "perspective_1": {
      "id": "perspective_1",
      "type": "perspective",
      "title": "Mrs. Alsubaie''s View",
      "content": [
        "Mrs. Alsubaie is not objecting to participation.",
        "She is trying to determine what kind of person the school is helping form. In an international-school context, the same words that sound obviously positive to teachers can carry broader meanings for families. Voice, leadership, and critical thinking may be heard not only as classroom skills, but as signals about authority, boundaries, and moral orientation.",
        "From her perspective, asking for clarification is not resistance. It is due diligence.",
        "Research note: Hammad and Shah (2018) show that international schools in Saudi Arabia often operate inside a zone of dissonance between international discourse and national expectations. Families do not always reject the school''s aims. They often need the school to translate those aims into concrete practice so they can judge their cultural fit."
      ],
      "next": "reflection_1"
    },
    "reflection_1": {
      "id": "reflection_1",
      "type": "reflection",
      "title": "Reflection",
      "prompt": "What was the parent really asking in the first message?",
      "options": [
        "Whether the school was becoming too political",
        "Whether school language and classroom practice meant the same thing",
        "Whether student agency had clear cultural and relational boundaries",
        "Whether she could trust the school''s interpretation of its own slogans"
      ],
      "next": "dilemma_2"
    },
    "dilemma_2": {
      "id": "dilemma_2",
      "type": "dilemma",
      "title": "The Child''s Interpretation",
      "prompt": "Later that week, Noura presents a draft poster with her group. At the top it says: ''Students should have more say because adults do not always know what is best for us.'' That afternoon, a second parent asks if students are being taught to ''challenge decisions.'' Leadership notices the concern and asks teachers to be careful in how they describe the week. How do you respond now?",
      "choices": [
        {
          "id": "2a",
          "label": "Frame the concern as a misunderstanding",
          "text": "The parents are overreading the activity. The children are simply getting a little carried away with the language. We should not overreact.",
          "next": "consequence_2a"
        },
        {
          "id": "2b",
          "label": "Treat it as a child-development issue",
          "text": "The issue is not that families are unreasonable. The children need stronger scaffolding so they understand that voice means respectful, evidence-based problem-solving within agreed boundaries.",
          "next": "consequence_2b"
        },
        {
          "id": "2c",
          "label": "Clarify institutional intent publicly",
          "text": "We need a school-wide explanation now. If we leave each family to infer what voice means, the activity will keep accumulating meanings we did not intend. We should send a concrete note about purpose, examples, and limits.",
          "next": "consequence_2c"
        }
      ]
    },
    "consequence_2a": {
      "id": "consequence_2a",
      "type": "consequence",
      "title": "Called It a Misunderstanding",
      "content": [
        "The school does very little.",
        "Teachers quietly rephrase a few slides. Parents continue comparing interpretations in WhatsApp groups. The activity still happens, but it now carries an undercurrent of unease because the school seems to believe the problem is simply parental sensitivity.",
        "Mrs. Alsubaie does not complain further. She just becomes more careful in future conversations, especially when school language sounds too abstract.",
        "The immediate issue passes. The trust issue lingers."
      ],
      "next": "perspective_2"
    },
    "consequence_2b": {
      "id": "consequence_2b",
      "type": "consequence",
      "title": "Treated It as a Child-Development Issue",
      "content": [
        "You revise your class instructions: focus on shared school problems, propose realistic solutions, explain respectfully, and do not frame adults as opponents.",
        "The change helps in your room. Noura''s group rewrites its poster: ''Students notice things adults may miss, and we can help improve them respectfully.''",
        "But outside your class, the wording remains inconsistent. Some families still hear very different versions of what the week means.",
        "You improved pedagogy locally. The institutional ambiguity remains."
      ],
      "next": "perspective_2"
    },
    "consequence_2c": {
      "id": "consequence_2c",
      "type": "consequence",
      "title": "Clarified Institutional Intent Publicly",
      "content": [
        "Leadership accepts the suggestion and sends a brief bilingual note: Student Voice Week is about school improvement not opposition to adults, proposals must be respectful and evidence-based, examples include routines and facilities, and teachers guide all discussions and outputs.",
        "The note does not please every parent equally, but it changes the tone. The school''s intent is now visible enough to discuss rather than merely infer.",
        "Mrs. Alsubaie replies, ''This clarification is helpful. Thank you for making the practical boundaries clearer.''"
      ],
      "next": "perspective_2"
    },
    "perspective_2": {
      "id": "perspective_2",
      "type": "perspective",
      "title": "Noura''s View",
      "content": [
        "Noura is doing exactly what schools often ask children like her to do: she is listening carefully for what counts.",
        "When the school says lead, speak up, and make change, she assumes those phrases are aspirational and expansive. She wants to perform the ideal student identity the school celebrates.",
        "If teachers do not define the boundaries, students will supply their own.",
        "Research note: Much of the tension in international schools is not caused by bad intent. It emerges when broad, values-loaded language travels farther and faster than the practical classroom structures meant to contain it."
      ],
      "next": "reflection_2"
    },
    "reflection_2": {
      "id": "reflection_2",
      "type": "reflection",
      "title": "Reflection",
      "prompt": "What needed to happen once students started overextending the message?",
      "options": [
        "Parents needed to relax",
        "Teachers needed better scaffolding",
        "The school needed a clearer shared explanation",
        "The activity needed to be translated from slogan to practice"
      ],
      "next": "dilemma_3"
    },
    "dilemma_3": {
      "id": "dilemma_3",
      "type": "dilemma",
      "title": "The School''s Next Move",
      "prompt": "At the end of the week, leadership asks for feedback. Future Learning and Student Voice initiatives are likely to continue, but wording and framing may change. You are asked what the school should do next time. What do you recommend?",
      "choices": [
        {
          "id": "3a",
          "label": "Keep the language unchanged",
          "text": "The school should not dilute its values language simply because some parents read it narrowly. We should keep the messaging bold and trust families to adapt.",
          "next": "consequence_3a"
        },
        {
          "id": "3b",
          "label": "Quietly soften the activity",
          "text": "To avoid future tension, we should reduce the emphasis on voice and make it more of a teacher-led suggestion exercise.",
          "next": "consequence_3b"
        },
        {
          "id": "3c",
          "label": "Keep the activity, revise the framing",
          "text": "The school should keep the activity, but pair aspirational language with explicit examples, limits, and culturally grounded explanation so families do not have to guess what terms like voice and leadership mean in practice.",
          "next": "consequence_3c"
        }
      ]
    },
    "consequence_3a": {
      "id": "consequence_3a",
      "type": "consequence",
      "title": "Kept the Language Unchanged",
      "content": [
        "The school''s values branding remains strong. So does the interpretive friction.",
        "Some teachers are comfortable with this. Others begin informally translating school language on their own to prevent avoidable parent concern. The result is inconsistency. Students hear one message in posters, another in classrooms, and a third at home.",
        "You protected the ideal. You did not strengthen the bridge between school and family."
      ],
      "next": "perspective_3"
    },
    "consequence_3b": {
      "id": "consequence_3b",
      "type": "consequence",
      "title": "Quietly Softened the Activity",
      "content": [
        "Next term, similar activities become much narrower. Students still participate, but the energy is lower. Teachers feel safer. Families ask fewer questions.",
        "But something is lost. The school has not solved the translation problem. It has simply reduced the ambition of the experience so the tension goes away.",
        "The activity is smoother. The institutional confidence is weaker."
      ],
      "next": "perspective_3"
    },
    "consequence_3c": {
      "id": "consequence_3c",
      "type": "consequence",
      "title": "Kept the Activity, Revised the Framing",
      "content": [
        "The school adopts a new pattern: aspirational language stays, every initiative includes concrete examples, teacher scripts clarify purpose and boundaries, and parent communications explain what the activity is and is not.",
        "The next time a similar unit launches, fewer parents need private interpretation because much of that work has already been done publicly.",
        "Mrs. Alsubaie remains thoughtful and engaged, but no longer wary. She sees that the school is capable of translation, not only branding."
      ],
      "next": "perspective_3"
    },
    "perspective_3": {
      "id": "perspective_3",
      "type": "perspective",
      "title": "Mrs. Alsubaie Revisited",
      "content": [
        "Mrs. Alsubaie''s concern was never that children should remain passive.",
        "Her concern was whether the school understood that its language has moral and cultural meanings beyond the classroom. Families choosing international schools in Saudi Arabia are often balancing aspiration and rootedness at the same time. They do not necessarily want less confidence for their children. They want confidence formed inside recognisable boundaries.",
        "Research note: The real work is not choosing between ''international'' and ''national.'' It is building enough interpretive clarity that families do not experience that choice as a zero-sum one in ordinary classroom life. (Hammad and Shah, 2018)"
      ],
      "next": "reflection_3"
    },
    "reflection_3": {
      "id": "reflection_3",
      "type": "reflection",
      "title": "Reflection",
      "prompt": "What was the core lesson of the final dilemma?",
      "options": [
        "Schools should not change for parent concern",
        "Schools should avoid values language altogether",
        "Schools need translation, not just conviction",
        "The issue was never the activity alone, but the meanings attached to it"
      ],
      "next": "debrief"
    },
    "debrief": {
      "id": "debrief",
      "type": "debrief",
      "title": "Debrief",
      "content": [
        "This simulation explored three recurring tensions in international schools in the Kingdom of Saudi Arabia.",
        "International Ethos and Cultural Fit (D1): Families may actively want English, confidence, and future-facing education while still expecting clear cultural fit. These aims are not contradictory from the family''s perspective. Tension begins when the school acts as if they are.",
        "Parent Interpretation and Trust (D2): Parents often need more than reassurance. They need translation. When school language is highly aspirational but practically underdefined, families are left to interpret meanings for themselves, often through a broader cultural and moral lens.",
        "Voice, Leadership, and Moral Meaning (D4): Concepts like student voice and leadership are not culturally self-explanatory. In values-laden contexts, they require concrete framing so that agency is understood as guided participation rather than boundaryless challenge.",
        "Research: Hammad, W., and Shah, S. (2018). Dissonance Between the ''International'' and the Conservative ''National'': Challenges Facing School Leaders in International Schools in Saudi Arabia. DOI: 10.1177/0013161X18785864"
      ],
      "researchCitations": [
        {
          "author": "Hammad and Shah",
          "year": "2018",
          "title": "Dissonance Between the International and the Conservative National: Challenges Facing School Leaders in International Schools in Saudi Arabia",
          "doi": "10.1177/0013161X18785864"
        }
      ],
      "closingPrompt": "If you could go back to Mrs. Alsubaie''s first message, how would you explain Student Voice Week so that its educational purpose remains strong but its practical meaning is unmistakably clear?"
    }
  }',
  ARRAY[1,2,4],
  20,
  2,
  'live'
);
