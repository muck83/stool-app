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
  'active'
);
