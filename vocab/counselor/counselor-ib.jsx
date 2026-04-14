/**
 * IB Counselor Module — English only
 * Equips international school counselors with cultural translation frameworks,
 * reframe scripts, and shareable parent-facing language for navigating the
 * high-friction collision points between IB and national education systems
 * (primary contexts: Saudi Arabia, China, South Korea).
 *
 * Cultural anchors: Tawjihiyya (KSA), Gaokao (CN), Suneung (KR), guanxi (CN),
 * wasta (KSA), PTM prep anxiety, predicted grade negotiation, EE/ToK opacity.
 */

export const counselorIb = {
  id: 'counselor-ib-001',
  slug: 'counselor-ib',
  audience: 'counselor',
  program: 'IB',
  languages: ['en'],

  // ─── Workflow Moments (replaces parent journey stages) ───────────────────────
  journeyStages: [
    {
      id: 'intake',
      label: 'New family intake',
      description: 'A family has just enrolled or transferred. They are comparing IB to their home system for the first time and may arrive with significant misconceptions.',
      highlight: 'Start with the Friction Map to identify which patterns are most likely.',
    },
    {
      id: 'mid-year',
      label: 'Mid-year friction',
      description: 'A report card, PTM, or grade event has triggered anxiety. A parent doesn\'t understand what they\'re reading or has already escalated.',
      highlight: 'Use the Grade Translation and Feedback Legibility cards first.',
    },
    {
      id: 'dp-entry',
      label: 'DP subject selection',
      description: 'Year 10–11 students choosing DP subjects. Families want to optimise for home-country university entry — which may conflict with student interests.',
      highlight: 'See the University Mapping card and the DP Subject Panic scenario.',
    },
    {
      id: 'predicted',
      label: 'Predicted grade season',
      description: 'Teachers have submitted predicted grades. Families are reacting, negotiating, or attempting to work around the system.',
      highlight: 'Use the Predicted Grade Negotiation card and the WeChat Parent scenario.',
    },
  ],

  // ─── Meta ────────────────────────────────────────────────────────────────────
  meta: {
    title: 'The IB Counselor\'s Cultural Translation Guide',
    subtitle: 'For counselors at IB World Schools working with families from Saudi Arabia, China, and South Korea',
    intro: 'You already know IB. What this guide is about is the gap — the space between how the families in your office were educated and how IB actually works. That gap generates specific, recurring friction patterns. Every counselor who has worked with Saudi, Chinese, or Korean families has had versions of the same six conversations. This guide names those patterns, gives you language to reframe them in the room, and provides shareable resources you can send to parents before or after meetings so you are not the only explainer in their world.',
    counselorNote: 'The friction isn\'t a communication problem — it is a system-translation problem. The families arriving in your office are not unreasonable. They are applying the mental models of highly competitive national systems to an assessment philosophy built on entirely different premises. Your job is to be the interpreter. These cards give you the vocabulary.',
  },

  // ─── Opening Hook ────────────────────────────────────────────────────────────
  openingHook: {
    situation: [
      'It\'s a Tuesday in October. You\'ve blocked your afternoon for university application prep sessions. At 2:15, a parent from Riyadh walks in without an appointment. Her daughter received a 5 in Chemistry. In the Saudi system, a 5 out of 7 is a solid score — roughly a B. But the parent has done the maths. Five divided by seven is 71%. In Saudi government schools, 71% in Sciences would be a serious concern. She wants to know what the teacher is doing wrong.',
      'You\'ve had this conversation before. In fact, you had it last week — but with a family from Seoul, and it was about MYP criteria, not percentages. And the week before, with a family from Shanghai, who couldn\'t understand why their daughter hadn\'t been ranked against her classmates.',
      'The conversation you\'re about to have isn\'t really about Chemistry. It\'s about the collision between two entirely different philosophies of what school is for — and you\'re the only person in the room who knows that.',
    ],
    question: 'Why does this conversation keep happening?',
    directAnswer: 'Because the families in your office graduated from systems built on fundamentally different premises — percentage marks, class rankings, high-stakes national exams — and no one has given them a framework for the translation. That\'s what this guide is. Six friction patterns, named and equipped with language.',
  },

  // ─── Friction Map data (feeds the FrictionMap widget) ───────────────────────
  frictionMap: [
    { dimension: 'Grade scale',          ksa: 'high',   cn: 'high',   kr: 'high'   },
    { dimension: 'Class ranking',        ksa: 'medium', cn: 'high',   kr: 'high'   },
    { dimension: 'Narrative feedback',   ksa: 'high',   cn: 'high',   kr: 'medium' },
    { dimension: 'University mapping',   ksa: 'high',   cn: 'high',   kr: 'high'   },
    { dimension: 'Predicted grades',     ksa: 'medium', cn: 'high',   kr: 'high'   },
    { dimension: 'EE / ToK',             ksa: 'high',   cn: 'high',   kr: 'medium' },
  ],

  // ─── Cards ───────────────────────────────────────────────────────────────────
  cards: [
    {
      id: 'card-001',
      relevantAt: ['intake', 'mid-year'],
      frictionLevel: { ksa: 'high', cn: 'high', kr: 'high' },
      concept: 'The Grade Translation Problem',
      frictionPattern: 'Parents from high-stakes national systems are trained to convert everything to a percentage. IB\'s 1–7 scale doesn\'t convert cleanly, and attempts to do so produce alarming numbers — a 5 becomes "71%" which reads as borderline failure in most national systems.',
      whyItRecurs: {
        ksa: 'The Tawjihiyya (ثانوية عامة) is scored 0–100%. Families benchmark everything against it. A score below 80% signals academic failure in many Saudi families\' experience.',
        cn: 'Gaokao preparation dominates secondary schooling. Parents are accustomed to granular percentage scores and national rank data. A 1–7 scale with no percentile feels opaque and untrustworthy.',
        kr: 'The Suneung\'s entire output is a percentile rank (수능 등급). Parents understand education as a sorting mechanism. Absolute scores without a peer reference feel meaningless.',
      },
      counselorReframe: 'IB grades describe what a student can do, not where they rank. A 5 in Chemistry means this student has a solid command of most of the course content — in IB terms, that is a successful student. The useful question is: which criteria is she strongest in, and where is the growth edge?',
      parentBridge: {
        copyableText: 'IB grades work on a 1–7 scale that describes what your child can do, not how they compare to classmates. A 5 is a strong result — it means your child meets most of the learning objectives for this subject. The grade does not translate to a percentage. If you\'d like to explore what each grade level means in practice, the Grade Calculator in our parent guide lets you see exactly what each score represents.',
        moduleLink: 'ksa-ib#grades',
        moduleLinkLabel: 'Grade Calculator (parent guide)',
      },
    },
    {
      id: 'card-002',
      relevantAt: ['mid-year'],
      frictionLevel: { ksa: 'high', cn: 'high', kr: 'medium' },
      concept: 'The Feedback Legibility Problem',
      frictionPattern: 'IB teachers write narrative, criterion-referenced feedback. Parents from national systems expect numerical scores and rank-relative commentary. When feedback says "approaching the standard in Criterion C," parents read it as evasiveness — or as evidence the teacher doesn\'t know how the student is doing.',
      whyItRecurs: {
        ksa: 'Direct, hierarchical communication norms in Saudi culture mean vague or narrative feedback reads as disrespect or incompetence. Parents expect a teacher to know the number.',
        cn: 'Chinese school reporting provides detailed subject-by-subject score decomposition. Narrative feedback without numbers feels unaccountable and difficult to act on.',
        kr: 'Korean parents are accustomed to receiving specific scores with clear university implications attached. Feedback without those markers feels irrelevant.',
      },
      counselorReframe: 'The feedback isn\'t vague — it\'s differently encoded. Criterion C in Sciences describes a specific set of skills. "Approaching the standard" means your child meets most expectations in that area but has identifiable gaps in [X]. Here\'s what a stronger score on that criterion looks like in practice.',
      parentBridge: {
        copyableText: 'IB report feedback is written in criterion language, not percentage language. Each subject is assessed on four criteria (A, B, C, D), each measuring a different skill. When a report says "approaching the standard" in a criterion, it means your child is meeting most expectations but has room to grow in one specific area. If you\'d like help reading your child\'s most recent report, I can walk through it with you — bring it to our next meeting.',
        moduleLink: null,
        moduleLinkLabel: null,
      },
    },
    {
      id: 'card-003',
      relevantAt: ['intake', 'mid-year'],
      frictionLevel: { ksa: 'medium', cn: 'high', kr: 'high' },
      concept: 'The Rank Invisibility Problem',
      frictionPattern: 'IB does not publish class rankings. In systems built on rank — Gaokao rank, Suneung percentile, Korean university entrance band — the absence of ranking data is disorienting. Parents may assume the school is hiding something unflattering, or that their child is secretly at the bottom.',
      whyItRecurs: {
        ksa: 'Less emphasis on ranking per se, but strong interest in comparative performance within the cohort — especially when extended family or community comparisons are ongoing. Parents want to know if their child is "keeping up."',
        cn: 'Chinese university admission historically depends on national ranking. Parents are accustomed to knowing exactly where their child sits. The absence of rank data registers as information withheld.',
        kr: 'The Suneung is literally a percentile rank output. Korean education culture equates knowledge of one\'s rank with knowledge of one\'s future. Not having a rank feels like flying blind.',
      },
      counselorReframe: 'IB\'s decision not to rank is intentional — research shows that ranking creates zero-sum dynamics that harm learning, including for students at the top. What I can tell you is exactly how your child is performing against the learning objectives for each subject. That\'s actually more actionable than a rank.',
      parentBridge: {
        copyableText: 'IB schools do not publish class rankings. This is a deliberate design choice — IB\'s research shows that ranking students against each other creates competitive anxiety that often harms learning, even for high-achieving students. What we do instead is measure each student\'s progress against the learning objectives for their subjects. This gives you a specific picture of where your child is strong and where the growth areas are — which is more useful for your child\'s actual development than a rank number.',
        moduleLink: null,
        moduleLinkLabel: null,
      },
    },
    {
      id: 'card-004',
      relevantAt: ['dp-entry', 'intake'],
      frictionLevel: { ksa: 'high', cn: 'high', kr: 'high' },
      concept: 'The University Mapping Problem',
      frictionPattern: 'Parents want to know if IB will help or hurt their child\'s chances at universities in their home country. This is the real question underneath many other questions. It\'s also where counselors are most likely to give vague answers — because the data is genuinely patchy and changes annually.',
      whyItRecurs: {
        ksa: 'Families often plan to return to Saudi Arabia. KSA government university admission formulas have changed multiple times. IB recognition varies significantly between KAUST, KFUPM, and non-STEM Saudi institutions.',
        cn: 'Chinese universities have added IB pathways but conversion formulas are institution-specific and opaque. The Ministry of Education has not standardized IB-to-Gaokao equivalence nationally.',
        kr: 'Korean universities increasingly accept IB credentials but recognition is still uneven. Specific HL requirements for competitive programs have changed in recent admissions cycles.',
      },
      counselorReframe: 'IB is recognized by universities in 159 countries, but the conversion rules at specific home-country institutions are not uniform. I\'d rather give you the accurate, current picture than a reassuring generalization. Here\'s what we know about [country]\'s situation this admissions cycle — and what I recommend tracking.',
      parentBridge: {
        copyableText: 'IB credentials are accepted by universities in 159 countries. For home-country university admission, the most important thing is to research the specific institutions your child is targeting — not just whether IB is recognized in general, but what the specific entry requirements are for their intended program. I recommend we have a dedicated meeting about university pathways before Year 11. Bring a list of the three to five universities you\'re most interested in, and I can research the current entry requirements.',
        moduleLink: null,
        moduleLinkLabel: null,
        maintenanceNote: 'High decay rate. University recognition rules for KSA, CN, and KR change annually. Verify this section each admissions cycle before referring parents to it.',
      },
    },
    {
      id: 'card-005',
      relevantAt: ['predicted'],
      frictionLevel: { ksa: 'medium', cn: 'high', kr: 'high' },
      concept: 'The Predicted Grade Negotiation Problem',
      frictionPattern: 'When teachers submit predicted grades for university applications, some families treat them as opening offers in a negotiation. They may bypass the counselor to pressure teachers directly, invoke cultural relationship norms, or request repeated meetings to "discuss" the prediction.',
      whyItRecurs: {
        ksa: 'Hierarchical communication norms mean parents may escalate directly to a principal or director rather than engaging through the counselor\'s explanation. The wasta model — using relationships to access better outcomes — exists as a background cultural frame.',
        cn: 'Guanxi (关系) is a legitimate social technology in China: relationships with teachers are understood as a pathway to better outcomes for students. Parents may not perceive direct teacher contact as inappropriate — they\'re activating what has always worked.',
        kr: 'The intensity of university preparation culture means predicted grades feel existential. Korean parents sometimes bring documented evidence of a student\'s performance specifically to request a review.',
      },
      counselorReframe: 'Predicted grades are teacher professional judgements based on evidence gathered over time. They are not a negotiating position — they\'re a calibration. The only thing that reliably influences a predicted grade between now and submission is the student\'s actual work. I\'m glad to talk about what that looks like.',
      parentBridge: {
        copyableText: 'Predicted grades for university applications are submitted by subject teachers based on a student\'s demonstrated performance across the whole course — not just recent assessments, and not based on meetings or requests. The grade your child\'s teacher submits is their honest professional judgment. The most effective thing your child can do between now and the submission deadline is to focus on producing strong work in their assessments. I am always available to discuss how your child can strengthen their performance — but I am not able to influence the grade itself.',
        moduleLink: null,
        moduleLinkLabel: null,
      },
    },
    {
      id: 'card-006',
      relevantAt: ['intake', 'dp-entry'],
      frictionLevel: { ksa: 'high', cn: 'high', kr: 'medium' },
      concept: 'The Extended Essay Anxiety Problem',
      frictionPattern: 'The Extended Essay is unfamiliar to parents from national systems without independent research at secondary level. It looks optional or supplementary (it isn\'t), it\'s self-directed (alarming to parents used to structured syllabi), and its contribution to the diploma is opaque until the EE/ToK bonus matrix is explained.',
      whyItRecurs: {
        ksa: 'Independent research is not a standard feature of the Saudi national curriculum. The concept of a 4,000-word self-directed academic essay by a 16-year-old has no equivalent reference point for most Saudi families.',
        cn: 'Gaokao preparation dominates Year 10–12 in China. For families with that background, any activity that doesn\'t directly feed the exam is potentially a distraction. Parents may actively discourage time spent on the EE.',
        kr: 'Korean parents understand the Suneung as the only metric that matters. The EE feels like a school project rather than a diploma component — until the bonus matrix is shown.',
      },
      counselorReframe: 'The EE and ToK bonus can be the difference between 38 and 41 points on the diploma. For a student targeting competitive universities, those three points matter more than an additional HL grade increase. Here\'s the matrix — let me show you what grade combinations produce what bonus.',
      parentBridge: {
        copyableText: 'The Extended Essay is not optional — it is a required component of the IB Diploma and can contribute up to 3 bonus points to the final diploma score (out of 45 possible points). For students targeting competitive universities, those bonus points are often the difference between an offer and a waitlist. A student who earns an A on their Extended Essay and an A on Theory of Knowledge receives the full 3-point bonus. A strong Extended Essay topic, chosen early, significantly reduces stress in Year 13. Please encourage your child to take this seriously from the beginning of Year 12.',
        moduleLink: null,
        moduleLinkLabel: null,
      },
    },
  ],

  // ─── Scenarios (branching: choose → consequence → explanation) ───────────────
  scenarios: [
    {
      id: 'scenario-001',
      relevantAt: ['mid-year'],
      country: 'ksa',
      title: 'The 71% Meeting',
      contextNote: 'KSA family · Grade misreading · Chemistry 5/7',
      setup: 'A parent from Riyadh walks into your office without an appointment. Her daughter received a 5 in Chemistry. The parent has calculated 5÷7 = 71% and is upset. She says: "My daughter\'s chemistry score is 71%. She cannot get into a Saudi university with these grades. I need to understand what the teacher is doing wrong."',
      branches: [
        {
          id: 'A',
          label: 'Pull up the grade report and walk through the criteria',
          description: 'You open the report and say: "Let me show you what each criterion means."',
          consequence: 'The parent engages with the criteria explanation but then asks: "But how does she rank compared to the other students?" You have addressed the grade translation problem and immediately encounter the rank invisibility problem. You will need Card 3 next.',
          cardLink: 'card-003',
          outcome: 'partial',
        },
        {
          id: 'B',
          label: 'Validate first, then reframe the scale',
          description: 'You say: "I understand why that number is alarming — in many school systems, 71% is a serious concern. Can I show you how IB grades actually work?"',
          consequence: 'The parent relaxes slightly because she feels heard. The reframe lands more effectively because you didn\'t start by correcting her. She asks good follow-up questions. This is the most productive path for this profile.',
          cardLink: 'card-001',
          outcome: 'best',
        },
        {
          id: 'C',
          label: 'Correct directly: "A 5 is actually a strong result"',
          description: 'You say: "A 5 in IB Chemistry is a strong result. Your daughter is performing well."',
          consequence: 'The parent escalates. She interprets the direct correction as dismissiveness: "You\'re just defending the teacher." You are now managing a trust breakdown and will need to walk back to validate before you can explain anything. This path adds at least 15 minutes to the meeting.',
          cardLink: 'card-001',
          outcome: 'difficult',
        },
      ],
      teachingPoint: 'With families from high-context communication cultures, the sequence matters: validate the concern before introducing the reframe. Starting with correction activates defensiveness before the explanation can land.',
    },
    {
      id: 'scenario-002',
      relevantAt: ['predicted'],
      country: 'cn',
      title: 'The WeChat Parent',
      contextNote: 'China family · Predicted grades · Informal channel pressure',
      setup: 'A parent from Shanghai messages you via WeChat at 9pm. She has her son\'s predicted grade from his Chemistry teacher (a 5) and has been told by another parent that "you can get predictions raised if you ask directly." She asks you via WeChat: "Can we meet this week to discuss Liu Wei\'s Chemistry predicted grade? I think 5 is too low. I have his last three assessment scores to show you."',
      branches: [
        {
          id: 'A',
          label: 'Respond via school email (not WeChat) with the policy',
          description: 'You reply the next morning by email, not WeChat, referencing the school\'s predicted grade communication policy.',
          consequence: 'The parent feels the channel switch is a rebuff. She perceives the policy citation as a refusal to engage. She escalates to the DP coordinator. You have maintained the boundary but created a new relationship problem that requires follow-up.',
          cardLink: 'card-005',
          outcome: 'partial',
        },
        {
          id: 'B',
          label: 'Reply briefly on WeChat, schedule a formal meeting',
          description: 'You reply on WeChat: "I\'ll be glad to discuss Liu Wei\'s progress. Let me send you a meeting invitation via email for a proper conversation." Then you email a 20-minute slot.',
          consequence: 'The parent feels acknowledged through the channel she used. The move to email signals the conversation is formal without feeling like a rebuff. In the meeting, you can address the predicted grade process properly. This is the most effective path.',
          cardLink: 'card-005',
          outcome: 'best',
        },
        {
          id: 'C',
          label: 'Ask the DP coordinator to respond instead',
          description: 'You forward the message and ask the DP coordinator to handle it.',
          consequence: 'The parent now has two different people she needs to track. The DP coordinator may not know the relationship context. The parent reads the handoff as avoidance. Your relationship with this family weakens for the rest of the year.',
          cardLink: 'card-005',
          outcome: 'difficult',
        },
      ],
      teachingPoint: 'Channel matters. Switching communication channels without acknowledgment reads as avoidance in high-context cultures. Meet the parent where they are, then redirect to the appropriate format — don\'t just ignore the channel they chose.',
    },
    {
      id: 'scenario-003',
      relevantAt: ['dp-entry'],
      country: 'kr',
      title: 'The DP Subject Conflict',
      contextNote: 'Korean family · HL subject selection · Student agency vs. family expectations',
      setup: 'A Korean family\'s daughter (Year 10) wants to take HL Literature (English) and HL Visual Arts. Her parents want her to take HL Mathematics and HL Chemistry instead, citing Korean university entrance requirements. The daughter has already spoken to you privately and clearly wants your support. The PTM is tomorrow and both parents will be there.',
      branches: [
        {
          id: 'A',
          label: 'Present both options neutrally and let the family decide',
          description: 'You lay out both subject combinations and their implications without advocating for either.',
          consequence: 'The parents hear the neutral presentation as implicit approval of their position. The daughter feels abandoned. The conversation ends with the parents\' choice being made for her, and you have a resentful student in your school for the next two years.',
          cardLink: 'card-004',
          outcome: 'difficult',
        },
        {
          id: 'B',
          label: 'Advocate for the daughter\'s choice, citing IB\'s learner agency principles',
          description: 'You explicitly support the daughter\'s preferences and explain IB\'s emphasis on student choice.',
          consequence: 'The parents feel the school is working against them. In Korean family culture, the counselor appearing to side with the student against the parents is a serious breach. The PTM becomes adversarial and the relationship with the family breaks down. The daughter gets her subjects but at significant cost to everyone\'s trust.',
          cardLink: 'card-004',
          outcome: 'difficult',
        },
        {
          id: 'C',
          label: 'Ask the family to name their target universities, then present the actual entry data',
          description: 'You say: "Before we talk about subject choice, can you tell me which two or three universities you\'re most hoping Soo-Jin might consider? I want to make sure we\'re looking at the actual requirements for her specific goals."',
          consequence: 'The conversation shifts from values conflict (IB philosophy vs. Korean expectations) to a shared goal: what does this specific university actually require? In most cases, the data shows that HL Mathematics and HL Chemistry are not required for the programs they name. The parents make a better decision because they have better information. The daughter\'s preferences have a chance to be heard in the context of evidence rather than preference.',
          cardLink: 'card-004',
          outcome: 'best',
        },
      ],
      teachingPoint: 'When a conversation is stuck on values, move it to data. "What do you want?" is a values question that creates conflict. "What does your target university require?" is a data question that creates alignment. You almost always know the answer before you ask — but asking it together changes the dynamic.',
    },
  ],

  // ─── Grade System (reused from parent modules, counselor framing) ────────────
  gradeSystem: {
    counselorNote: 'These calculators are the tools to share before a PTM when grades are on the agenda. Send the parent module link ahead of the meeting so the grade scale isn\'t new information when you\'re sitting across from each other.',
    myp: {
      title: 'MYP Grade Calculator',
      intro: 'MYP grades run 1–7, calculated from four criterion scores (A–D), each scored 0–8. The total (0–32) maps to a grade using subject-group boundaries. Show this to parents before they convert to percentages.',
      boundaries: [
        { grade: 1, min: 0,  max: 5  },
        { grade: 2, min: 6,  max: 9  },
        { grade: 3, min: 10, max: 14 },
        { grade: 4, min: 15, max: 18 },
        { grade: 5, min: 19, max: 23 },
        { grade: 6, min: 24, max: 27 },
        { grade: 7, min: 28, max: 32 },
      ],
      descriptors: [
        { grade: 1, label: 'Minimal achievement' },
        { grade: 2, label: 'Very limited achievement' },
        { grade: 3, label: 'Limited achievement' },
        { grade: 4, label: 'Adequate achievement' },
        { grade: 5, label: 'Substantial achievement' },
        { grade: 6, label: 'Very high achievement' },
        { grade: 7, label: 'Excellent achievement' },
      ],
      watchOut: [
        'A 4 in MYP is "adequate achievement" — not a warning sign. In IB terms, a student consistently achieving 4s is meeting expectations.',
        'Subject boundaries vary slightly by subject group. The calculator above uses typical boundaries — the school\'s MYP coordinator has the exact boundaries for each subject.',
        'Parents should not try to convert MYP scores to percentages. A 5/7 is not 71%. It is "substantial achievement" — a strong result.',
      ],
    },
    dp: {
      title: 'DP Grade Calculator',
      intro: 'DP runs 1–7 per subject, with 3 HL and 3 SL subjects (max 42 subject points) plus up to 3 bonus points from EE+ToK (max 45 total). A diploma requires a minimum of 24 points plus passing conditions for each subject.',
      eeTokMatrix: [
        { ee: 'A', tok: 'A', points: 3 },
        { ee: 'A', tok: 'B', points: 3 },
        { ee: 'A', tok: 'C', points: 2 },
        { ee: 'A', tok: 'D', points: 2 },
        { ee: 'B', tok: 'A', points: 3 },
        { ee: 'B', tok: 'B', points: 2 },
        { ee: 'B', tok: 'C', points: 1 },
        { ee: 'B', tok: 'D', points: 1 },
        { ee: 'C', tok: 'A', points: 2 },
        { ee: 'C', tok: 'B', points: 1 },
        { ee: 'C', tok: 'C', points: 0 },
        { ee: 'C', tok: 'D', points: 0 },
        { ee: 'D', tok: 'A', points: 2 },
        { ee: 'D', tok: 'B', points: 1 },
        { ee: 'D', tok: 'C', points: 0 },
        { ee: 'D', tok: 'D', points: -1 },
        { ee: 'E', tok: 'A', points: -1 },
        { ee: 'E', tok: 'B', points: -1 },
        { ee: 'E', tok: 'C', points: -1 },
        { ee: 'E', tok: 'D', points: -1 },
      ],
      passingConditions: [
        'Minimum 24 total points',
        'No grade 1 in any subject',
        'CAS requirements met',
        'At least grade 3 in each HL subject',
        'At least grade 2 in each SL subject',
        'Not awarded grade E on both EE and ToK',
      ],
      watchOut: [
        'The EE+ToK bonus is the highest-leverage intervention for students targeting top universities. An A/A combination adds 3 points — equivalent to raising one HL grade by nearly a full point.',
        'A student with 38 subject points but E grades on both EE and ToK does not receive a diploma. Make sure students and parents understand this before they de-prioritize the core.',
        'For students from Korean, Chinese, or Saudi families: the EE is not optional, and it is not a distraction from the "real" work. It is part of the diploma qualification itself.',
      ],
    },
  },

  // ─── Next Steps (workflow-moment-aware) ──────────────────────────────────────
  nextSteps: {
    default: [
      'Send the relevant parent module link to a family before your next PTM — it reduces the time you spend explaining and increases the time available for actual conversation.',
      'Use the Friction Map to brief yourself on which patterns are most likely before meeting with a new family.',
      'Keep a copy of the EE+ToK bonus matrix available in every predicted grade meeting.',
    ],
    intake: [
      'In the intake meeting, introduce the Friction Map concept to the family: "The main adjustment most families from [country] tell me about is [specific pattern]. Here\'s what it means in practice."',
      'Share the relevant parent module link (korea-ib, china-ib, or ksa-ib) at the end of the intake meeting — give parents something to read before their first report arrives.',
      'Note which friction patterns are highest-risk for this family (use the Friction Map) and set a calendar reminder to check in at the six-week mark.',
    ],
    'mid-year': [
      'Before the meeting: pull up the grade report. Identify which criterion is lowest and prepare a one-sentence explanation of what it measures and what a stronger score looks like.',
      'Start by asking: "Before I explain the grades, can you tell me what you were expecting to see?" — this surfaces the mental model so you can address it directly, not generically.',
      'After the meeting: send the grade calculator link from the parent module. "This tool lets you explore what each score means at any time — not just after a meeting with me."',
    ],
    'dp-entry': [
      'Before the subject selection meeting: research the actual entry requirements at the top two or three universities the family is interested in. Come with data, not generalities.',
      'Ask the student separately (not in front of parents): "If you could choose without any constraints, what would your HL subjects be?" Use that as a baseline for the conversation.',
      'After subject selections are finalized, send the EE+ToK bonus matrix to the family with a note: "The Extended Essay topic your child chooses in Year 12 can be worth more points than one HL grade increase."',
    ],
    predicted: [
      'Before predicted grade season: send a brief school-wide communication explaining the process — when grades are submitted, why they cannot be negotiated, and what parents can do to support their child. Preempt the conversations rather than reacting to them.',
      'For families who request a meeting after seeing predicted grades: frame the meeting as "how can your child strengthen their performance before submission" — not "let\'s discuss this grade."',
      'Document all predicted grade conversations with date, who attended, and what was discussed. This record is important if a family escalates.',
    ],
  },
}
