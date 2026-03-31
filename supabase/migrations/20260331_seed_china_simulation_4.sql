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
