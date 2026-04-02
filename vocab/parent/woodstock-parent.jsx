/**
 * Woodstock School Parent Onboarding Module
 * Custom guide for Indian parents at Woodstock School, Mussoorie
 * Covers the transition from IB → Cambridge IGCSE + AP + Woodstock School Diploma (WSD)
 */

export const woodstockParent = {
  id: 'parent-woodstock-001',
  slug: 'woodstock',
  country: 'india',
  program: 'IGCSE / AP / WSD',
  languages: ['en'],

  schoolMeta: {
    name: 'Woodstock School',
    location: 'Mussoorie, Uttarakhand, India',
    founded: 1854,
    type: 'Residential (boarding) international school',
    color: '#8B1A1A',
    colorSecondary: '#5C7A3C',
  },

  meta: {
    en: {
      title: 'Understanding Woodstock School',
      subtitle: 'A guide for Indian families navigating IGCSE, AP, and the Woodstock School Diploma',
    },
  },

  journeyStages: [
    {
      id: 'new',
      label: 'New to Woodstock',
      icon: '🌱',
      description:
        'Your child has recently enrolled. You are navigating a new school, a boarding environment, and an unfamiliar academic system — possibly all at once. The shift from CBSE or ICSE to Woodstock can feel disorienting.',
      highlight: 'Start with Core Concepts — especially the Transition overview.',
    },
    {
      id: 'igcse',
      label: 'IGCSE Years (Gr. 9–10)',
      icon: '📚',
      description:
        'Your child is in Cambridge IGCSE. A*–G grades have replaced percentages. Subject reports look unfamiliar compared to CBSE or ICSE, and you are not sure how to interpret the letters.',
      highlight: 'Jump to Grades Decoded — the IGCSE explainer will help immediately.',
    },
    {
      id: 'ap',
      label: 'AP Years (Gr. 11–12)',
      icon: '🎓',
      description:
        'Your child is taking Advanced Placement (AP) courses. Scores of 1–5 feel cryptic. University applications are approaching and the stakes feel high.',
      highlight: 'See Grades Decoded for AP and University Pathways for next steps.',
    },
    {
      id: 'boarding',
      label: 'Boarding Family',
      icon: '🏔️',
      description:
        'Your child lives on campus in Mussoorie. You want to stay connected to their learning from a distance and understand what the non-academic parts of Woodstock actually mean for their development.',
      highlight: 'See Core Concepts — especially Boarding & Learning.',
    },
  ],

  openingHook: {
    situation: [
      "Your child's Grade 9 end-of-term report arrives from Woodstock. Instead of the 78% or 91% you grew up reading, there is a single letter next to each subject: A, B, C. Your child got a B in Mathematics. You try to convert it — B is roughly 70%? 75%? You remember that at their previous CBSE school, 75% in Maths would have meant a call to the tuition teacher.",
      'You also notice a section on the report you have never seen before: "Outdoor Education," "Residential Life," and "Community Service" — each with a short paragraph of feedback but no grade. You are not sure whether to be reassured or concerned that these are taking time away from academics.',
      'You call a relative in Delhi whose child is in Class 10 CBSE. They mention their child just scored 88% in the half-yearly. You hang up feeling uncertain — and wondering whether the Woodstock system is rigorous enough.',
    ],
    question: 'Is your child falling behind — or are you just missing the translation?',
    directAnswer:
      "A B in Cambridge IGCSE Mathematics is not 75% in CBSE. IGCSE grades describe internationally standardised performance levels — a B means 'good achievement' against Cambridge's published criteria, and it is a solid result that meets the entry requirements for most UK, US, and international university programmes. The outdoor education and community sections are not replacing academics; they are the evidence that university admissions officers in the US and UK specifically look for. The sections below explain how to read the Woodstock system accurately.",
  },

  cards: [
    {
      id: 'card-transition',
      relevantAt: ['new'],
      component: 'The Transition',
      concept: 'Why Woodstock is Moving Away from IB',
      concern:
        "You enrolled your child at Woodstock partly because of the IB — a credential you had researched and trusted. Now the school is moving away from it over the next four years. You are wondering whether this is a downgrade, whether the new credentials will be recognised by universities, and whether the transition affects your child's academic future.",
      bridge:
        'Woodstock is not removing rigour — it is redesigning how that rigour is packaged and recognised. Cambridge IGCSE is one of the most widely recognised qualifications in the world, awarded by Cambridge Assessment International Education and accepted by universities in over 160 countries. Advanced Placement is the US standard for university-level academic performance, and AP scores of 4–5 frequently earn direct college credit. The Woodstock School Diploma (WSD) sits on top of both frameworks — it captures the whole-person development that exam scores cannot: the Himalayan expedition, the service leadership, the residential community contribution. No high school student is required to switch systems mid-study. Students already on the IB pathway will complete it.',
      goal:
        'For Indian families targeting UK, US, Canadian, or Australian universities — where most Woodstock graduates end up — both Cambridge IGCSE and AP are very well recognised, often more so than IB at specific programmes your child may be targeting. US universities are deeply familiar with AP in particular. The transition is unlikely to weaken your child\'s university prospects. For students considering the US, it may strengthen them.',
      woodstockNote:
        'The IB programmes will conclude naturally as the final IB cohorts graduate. Your child\'s counsellor can tell you exactly which pathway applies to their cohort based on their current grade.',
      whatToAsk: [
        '"Which credential will my child graduate with, given their current grade and cohort?" — your university counsellor can give you the exact answer.',
        '"How are current university partner institutions responding to the transition?" — the admissions team has direct intelligence on how universities are reading the change.',
      ],
    },
    {
      id: 'card-igcse',
      relevantAt: ['igcse', 'new'],
      component: 'Grades 9–10 · Cambridge IGCSE',
      concept: 'Decoding A*–G — What the Letters Actually Mean',
      concern:
        "Your child's IGCSE report arrives. Instead of a percentage, there is a letter. You cannot tell if B is close to a distinction or close to a fail. You do not know whether the class got mostly As or mostly Cs. The letter feels like less information, not more. You search online and find different answers depending on which website you land on.",
      bridge:
        "IGCSE grades are not vague — they are internationally standardised by Cambridge. An A* means the same thing in Mumbai, Manchester, and Mussoorie. The letter is not a compressed percentage: it describes a performance level against Cambridge's published grade criteria. A C is not a near-fail; it is 'satisfactory achievement' and meets the minimum entry requirement for most UK university programmes. A and A* are genuinely strong results. Your child's IGCSE certificate is awarded by Cambridge Assessment International Education — not by Woodstock — which is what makes it globally portable.",
      goal:
        "Cambridge IGCSE is very well understood by UK universities (where it is a standard pre-A-level qualification), US universities (who recognise it as rigorous international coursework), and increasingly by Indian universities. For students targeting UK universities specifically, strong IGCSE grades — particularly at A and A* — directly support Sixth Form and university admissions conversations.",
      woodstockNote:
        'Woodstock students sit official Cambridge external examinations. The grades your child receives are not internal school assessments — they are Cambridge-awarded grades with international validity.',
      whatToAsk: [
        '"What is the minimum IGCSE grade required for the university programmes my child is considering?" — the answer varies significantly by country and programme.',
        '"Which IGCSE subjects is my child taking, and are those subjects aligned with their likely university requirements?" — worth checking subject choices against intended pathways early.',
      ],
    },
    {
      id: 'card-ap',
      relevantAt: ['ap'],
      component: 'Grades 11–12 · Advanced Placement',
      concept: 'AP Scores — What 1–5 Means for University',
      concern:
        "Your child's AP score arrives: a 3. You have no reference point. Is 3 out of 5 a pass? A fail? The equivalent of 60%? You search online and find conflicting answers about whether a 3 is good enough for a US university. You are not sure whether the score will help or hurt applications.",
      bridge:
        "AP scores run from 1 to 5, and the College Board's passing threshold is a 3 — designated as 'qualified,' meaning your child has demonstrated college-level understanding of the subject. A score of 3 is not 60% performance: it means your child can handle university-level content in that discipline. A 4 means 'well qualified' and a 5 means 'extremely well qualified.' These are performance designations, not percentage conversions. Most US universities award course credit for scores of 3 or higher, with more selective institutions typically requiring 4 or 5 for credit toward a specific major.",
      goal:
        "AP scores are read directly by US admissions officers as evidence of academic ambition and university-level capability. A student with multiple AP scores of 4–5 in relevant subjects has demonstrated something tangible that a school grade cannot. For Indian students targeting US universities — which is where most Woodstock AP-track graduates apply — AP is one of the strongest academic signals available. AP exams are administered and graded by the College Board in the US, not by Woodstock, giving the scores full credibility with US admissions offices.",
      woodstockNote:
        "AP subject selection matters. Taking AP in subjects directly related to your child's intended university major adds the most credibility to their application.",
      whatToAsk: [
        '"Which US universities does my child\'s target list accept AP credits, and at what score threshold?" — this varies significantly between institutions.',
        '"Which AP subjects should my child prioritise based on their intended field of study?" — ask the university counsellor for subject-specific guidance.',
      ],
    },
    {
      id: 'card-wsd',
      relevantAt: ['new', 'boarding'],
      component: 'Woodstock School Diploma',
      concept: 'Why Outdoor Education and Service Count Academically',
      concern:
        "The Woodstock School Diploma includes outdoor expeditions, service projects, leadership activities, and residential community participation. You are worried that time spent on these activities is time not spent on academics — and that a 'school-designed diploma' will carry less weight with universities than Cambridge or AP alone.",
      bridge:
        "The WSD is not a replacement for IGCSE or AP — it wraps around them. Your child still sits Cambridge examinations and earns AP scores. The WSD captures the whole-person development that exam scores alone cannot: the student who led an expedition in the Himalaya, organised a community service initiative, demonstrated resilience through a challenging residential term. Universities — particularly US universities — are explicitly looking for exactly this kind of evidence. The Common App, every US university's application, and most UK personal statements ask: who is this person outside of exams? The WSD is how Woodstock documents and presents the answer.",
      goal:
        "US and UK admissions readers are not simply adding up exam scores. They are trying to understand whether a student will contribute to campus life, handle challenges independently, and make something of the opportunities available to them. Woodstock's Himalayan setting and residential community create formative experiences that day schools cannot replicate. A student with AP scores of 4–5 and a compelling WSD portfolio is a significantly stronger university applicant than a student with exam scores alone.",
      woodstockNote:
        'The WSD is still being developed and refined. Woodstock will share more detail over the coming months. Ask the school for the most current information on WSD requirements and how the diploma will be presented in university applications.',
      whatToAsk: [
        '"How will the Woodstock School Diploma be documented in university applications?" — the university counsellor will have the current approach.',
        '"What specific experiences will my child need to document for the WSD, and how should they start thinking about this now?" — early awareness helps your child approach activities with intention.',
      ],
    },
    {
      id: 'card-boarding',
      relevantAt: ['boarding', 'new'],
      component: 'Boarding & Learning',
      concept: 'Staying Connected to Your Child\'s Learning From a Distance',
      concern:
        "Your child lives on campus in Mussoorie. You cannot check their homework, sit with them during study time, or notice when something is wrong. In a day school, these things happen naturally. At a boarding school far from home, the information flow is much thinner — and it is difficult to know whether your child is thriving or struggling academically until a report arrives weeks later.",
      bridge:
        "Woodstock has a structured pastoral system specifically designed for this. Every student has a house parent who monitors their wellbeing and academic engagement on a daily basis. Academic reports come at regular intervals, and parents can request conversations with subject teachers or the house parent at any time. The boarding environment is not a reduction in adult support — it is a different kind of support. Professional adults are present throughout the day and evening in ways a day school cannot match. Your child also has access to academic support, counselling, and peer mentoring within the school community.",
      goal:
        "Research on residential school outcomes consistently shows that the skills most valued by universities and employers — self-direction, time management, independence, resilience, the ability to collaborate with people from very different backgrounds — develop more rapidly in residential settings. Your child's learning at Woodstock extends beyond classrooms: evening study periods, dormitory conversations, weekend community activities, and the responsibilities of residential life are all part of what the WSD and university applications will ultimately reflect.",
      woodstockNote:
        "If you have not yet had an introductory conversation with your child's house parent, request one. House parents are your primary contact and have a fuller picture of your child's day-to-day experience than any single subject teacher.",
      whatToAsk: [
        '"Can I have a brief monthly check-in with my child\'s house parent?" — most houses accommodate this, and it substantially reduces the information gap.',
        '"How does the school communicate with parents when a student is struggling academically?" — knowing the process in advance helps you respond early rather than waiting for the end-of-term report.',
      ],
    },
  ],

  igcseGrades: [
    { grade: 'A*', label: 'Outstanding',  color: '#1D9E75', note: 'Highest grade. Meets requirements for all competitive UK, US, and global programmes.' },
    { grade: 'A',  label: 'Excellent',    color: '#1D9E75', note: 'Strong result. Recognised by competitive universities worldwide.' },
    { grade: 'B',  label: 'Good',         color: '#185FA5', note: 'Good performance. Meets requirements for most university programmes.' },
    { grade: 'C',  label: 'Satisfactory', color: '#185FA5', note: 'Minimum grade recognised for most UK university entry requirements.' },
    { grade: 'D',  label: 'Moderate',     color: '#BA7517', note: 'Below typical university entry requirements. Discuss with your counsellor.' },
    { grade: 'E',  label: 'Limited',      color: '#BA7517', note: 'Below typical university entry requirements.' },
    { grade: 'F',  label: 'Very limited', color: '#C0392B', note: 'Not meeting standard requirements.' },
    { grade: 'G',  label: 'Very limited', color: '#C0392B', note: 'Not meeting standard requirements.' },
  ],

  apScores: [
    { score: 5, label: 'Extremely well qualified', color: '#1D9E75', note: 'Top ~15% globally. Most universities award credit. Strongest signal for selective US admissions.' },
    { score: 4, label: 'Well qualified',           color: '#1D9E75', note: 'Strong result. Most US universities award credit. Competitive for selective programmes.' },
    { score: 3, label: 'Qualified',                color: '#185FA5', note: 'Passing score. Demonstrates college-level capability. Many universities award credit.' },
    { score: 2, label: 'Possibly qualified',       color: '#BA7517', note: 'Below the passing threshold. Does not typically earn college credit.' },
    { score: 1, label: 'No recommendation',        color: '#C0392B', note: 'Does not demonstrate college-level performance.' },
  ],

  universityDestinations: [
    {
      country: 'United States',
      flag: '🇺🇸',
      relevance: 'Primary destination for most Woodstock graduates. AP scores are directly understood by admissions offices. Strong Woodstock alumni network at many US institutions.',
      credentials: 'AP scores (3–5 for credit), WSD portfolio, IGCSE transcript, school counsellor letter',
    },
    {
      country: 'United Kingdom',
      flag: '🇬🇧',
      relevance: 'Cambridge IGCSE is a familiar and respected credential. UK universities read Woodstock transcripts comfortably. Personal statements and school references carry significant weight.',
      credentials: 'IGCSE grades (A*–C), predicted grades, personal statement, school reference',
    },
    {
      country: 'Canada',
      flag: '🇨🇦',
      relevance: 'Strong recognition of both IGCSE and AP. Some provinces accept AP credits directly. Often less competitive than comparable US institutions for similar programmes.',
      credentials: 'IGCSE grades, AP scores, predicted grades, extracurricular record',
    },
    {
      country: 'India',
      flag: '🇮🇳',
      relevance: "Growing number of Indian universities accept IGCSE and AP credentials. Ashoka, Jindal, O.P. Jindal, Krea, and Flame University are familiar with international transcripts. JEE and NEET remain entirely separate pathways not covered by Woodstock's curriculum — if those routes are relevant to your family, that conversation with the school counsellor needs to happen early.",
      credentials: 'IGCSE/AP transcript, school reference, counsellor letter',
    },
  ],

  nextSteps: {
    new: [
      "Request an introductory call with your child's house parent within the first four weeks of enrolment — this is your most important single action.",
      'Ask the university counsellor: "Which credential will my child graduate with, and what does that mean for university applications?" — the answer depends on your child\'s current grade and the transition timeline.',
      "Ask your child tonight: \"What was the most challenging part of this week?\" — at a boarding school, early adjustment is the thing to watch, not early academic performance.",
    ],
    igcse: [
      'Find your child\'s most recent IGCSE report and identify the lowest-graded subject. Ask the subject teacher: "What would a stronger grade in this subject look like, and what is my child currently missing?"',
      'Ask the university counsellor: "Which IGCSE subjects should my child be taking given their likely university direction, and are there any changes to consider now?"',
      'Do not convert IGCSE letters to percentages. Ask instead: "What does a B in this subject mean for the university programmes we are targeting?" — the counsellor has school-specific data on this.',
    ],
    ap: [
      "If your child's AP score was a 3 or below in a subject they plan to study at university, ask: \"Should my child retake this exam, or is the application context sufficient?\" — the counsellor will have the right answer for your specific target universities.",
      "Ask the university counsellor: \"Which AP subjects should my child prioritise, and what scores are realistically needed for the programmes on our list?\" — this conversation should happen in Grade 11, not after scores arrive.",
      'Start reviewing the WSD requirements alongside AP preparation — universities want to see both academic performance and whole-person development.',
    ],
    boarding: [
      'Establish a regular brief call with your child\'s house parent — monthly is typical. Ask specifically: "Is my child engaging with study periods, and are there any early academic concerns I should know about?"',
      "If your child has been at Woodstock more than one term without a parent-teacher conference, request one. Early visibility is far less stressful than catching up after a weak report.",
      "Ask your child: \"Which teacher do you feel most comfortable going to when you\'re confused about something?\" — if they cannot name one, that\'s the conversation to have next.",
    ],
    default: [
      'Ask your child\'s teacher: "Is this formative or summative work?" — that single question changes how you read every piece of feedback you receive.',
      'Do not convert IGCSE grades or AP scores to percentages. Ask the school counsellor what each grade or score means for the specific university pathways your family is considering.',
      'Connect with the Woodstock parent community — families one or two years ahead of you have navigated exactly what you are navigating now.',
    ],
  },

  glossary: [
    { term: 'IGCSE',  full: 'International General Certificate of Secondary Education', definition: 'Cambridge qualification for Grades 9–10 (ages 14–16). Graded A*–G. Awarded by Cambridge Assessment International Education — not by Woodstock. Recognised globally for university entry.' },
    { term: 'AP',     full: 'Advanced Placement', definition: 'US College Board programme for Grades 11–12 offering university-level courses. Scored 1–5 by external examiners. Widely used in US university admissions and frequently earns college credit at score 3–5.' },
    { term: 'WSD',    full: 'Woodstock School Diploma', definition: "Woodstock's own diploma framework that wraps around IGCSE and AP. Combines academic achievement with outdoor education, service, leadership, creativity, and residential community participation. Still being developed — contact the school for current requirements." },
    { term: 'House Parent', full: 'House Parent / Dorm Parent', definition: "The adult responsible for pastoral care in your child's boarding house. Your primary ongoing contact at Woodstock. Has daily visibility of your child's wellbeing and academic engagement." },
    { term: 'Formative', full: 'Formative Assessment', definition: 'In-progress work used to guide learning — not the final mark. Quizzes, class work, drafts. Important for feedback but does not determine the final grade.' },
    { term: 'Summative', full: 'Summative Assessment', definition: 'Final assessed work — the piece that counts toward the grade. IGCSE external exams are the ultimate summative assessments.' },
    { term: 'Cambridge', full: 'Cambridge Assessment International Education', definition: 'The organisation that designs and awards the IGCSE qualification. Part of the University of Cambridge. Awards the certificates your child earns independently of Woodstock.' },
  ],
}
