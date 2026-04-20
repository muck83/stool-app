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
        "IGCSE grades are not vague — they are internationally standardised by Cambridge. An A* means the same thing in Mumbai, Manchester, and Mussoorie. The letter is not a compressed percentage: it describes a performance level against Cambridge's published grade descriptors. A C is 'satisfactory achievement' — it has historically met the minimum threshold for many UK university programmes, though the competitive bar has risen since 2017: most selective UK universities now expect the equivalent of grade 5 or 6 in English and Mathematics (broadly equivalent to a high B), and Russell Group institutions often expect grade 6+ in subjects related to the intended course. A and A* remain genuinely strong results and are competitive across UK, US, and international admissions. Your child's IGCSE certificate is awarded by Cambridge Assessment International Education — not by Woodstock — which is what makes it globally portable.",
      goal:
        "Cambridge IGCSE is very well understood by UK universities (where it sits alongside GCSE as a standard pre-sixth-form qualification), US universities (which recognise it as rigorous international coursework), and — following the AIU's 2015 equivalency framework — by an increasing number of Indian universities. For students targeting competitive UK universities, the admissions picture has tightened in the last decade: strong IGCSE performance — typically A/A* in subjects related to the intended degree, with B or above in English and Maths — is where offers become straightforward rather than marginal.",
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
        "AP scores run from 1 to 5, and the College Board's passing threshold is a 3 — designated as 'qualified,' meaning your child has demonstrated college-level understanding of the subject. A score of 3 is not a 60% performance: it means your child can handle university-level content in that discipline. A 4 means 'well qualified' and a 5 means 'extremely well qualified.' These are performance designations, not percentage conversions. Credit policy varies substantially by institution: state flagship universities and most large private universities award course credit at 3+, while many selective institutions (Ivy League, Stanford, MIT, Caltech and peer schools) typically award credit at 4 or 5 — and a handful (Brown, Dartmouth, CalTech in specific subjects) grant only course placement, not credit. For any specific target university, the College Board's 'AP Credit Policy Search' tool gives the current official position.",
      goal:
        "AP scores are read directly by US admissions officers as evidence of academic ambition and university-level capability. According to the NACAC State of College Admission reports, strength of curriculum and grades in college-prep courses are consistently the top-weighted admissions factors — and a record of AP enrolment with scores of 4–5 in subjects aligned to the intended major is one of the clearest ways an international student can demonstrate this. For Indian students targeting US universities — where most Woodstock AP-track graduates apply — AP remains one of the strongest academic signals available. AP exams are administered and graded by the College Board in the US, not by Woodstock, giving the scores full credibility with US admissions offices.",
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
        "The WSD is not a replacement for IGCSE or AP — it wraps around them. Your child still sits Cambridge examinations and earns AP scores. The WSD captures the whole-person development that exam scores alone cannot: the student who led an expedition in the Himalaya, organised a community service initiative, demonstrated resilience through a challenging residential term. This is the secondary layer US admissions readers consistently ask for. The NACAC State of College Admission report places overall strength of curriculum and grades as the primary drivers of admission decisions, with extracurricular engagement and character evidence forming an important secondary layer that becomes decisive in close calls. The Common App, every US university's application, and most UK personal statements ask: who is this person outside of exams? The WSD is how Woodstock documents and presents the answer.",
      goal:
        "US and UK admissions readers are not simply adding up exam scores — but they also do not weight 'holistic' evidence above academic performance. The most accurate mental model is: strong academic record opens the door; the WSD portfolio determines whether a close application gets across the line. A student with AP scores of 4–5 AND a substantive WSD portfolio is a genuinely stronger applicant than one with scores alone. A student with weak exam performance but a strong WSD portfolio is rarely rescued by it. Woodstock's Himalayan setting and residential community create formative experiences day schools cannot replicate — but those experiences must be paired with the academic record the WSD wraps around.",
      woodstockNote:
        "The Woodstock School Diploma is a forward-looking framework that reflects Woodstock's distinctive strengths: its Himalayan setting, residential community, and tradition of whole-person education since 1854. The specific requirements and documentation standards are being finalised as the first WSD cohorts progress. Your university counsellor has the most current detail on how the WSD will be presented in applications.",
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
        "The research on residential schooling is more mixed than boarding school marketing tends to present. Studies commissioned by the Boarding Schools' Association and the UK Independent Schools Inspectorate point to accelerated development in specific domains — self-direction, time management, independence, cross-cultural collaboration — when pastoral care is strong and the residential community is genuinely supportive. At the same time, clinical work on 'boarding school syndrome' (Schaverien, 2015) and earlier studies by Duffell have documented real harms when pastoral care is weak or emotionally distant. The variable that determines which outcome a child experiences is the quality of the adult relationships in the house — not the residential model itself. This is why the house-parent relationship is so central at Woodstock: your child's learning extends beyond classrooms into evening study periods, dormitory conversations, weekend community activities, and residential responsibilities — all of which depend on the pastoral system working well.",
      woodstockNote:
        "If you have not yet had an introductory conversation with your child's house parent, request one. House parents are your primary contact and have a fuller picture of your child's day-to-day experience than any single subject teacher.",
      whatToAsk: [
        '"Can I have a brief monthly check-in with my child\'s house parent?" — most houses accommodate this, and it substantially reduces the information gap.',
        '"How does the school communicate with parents when a student is struggling academically?" — knowing the process in advance helps you respond early rather than waiting for the end-of-term report.',
      ],
    },
  ],

  // ─── Cultural insight cards (drawn from Indian parent context) ───────────────
  culturalCards: [
    {
      id: 'cultural-001',
      relevantAt: ['igcse', 'ap'],
      component: 'Indian Parent Context',
      concept: 'The Tuition Reflex — Getting It Right at Woodstock',
      concern:
        "When your child struggles in a subject, the instinct is to hire a tutor — this works reliably in the CBSE system where the syllabus is fixed and the marking scheme rewards correct answers. The same reflex at Woodstock may not produce the same result. A tutor trained in CBSE Mathematics or A-level Sciences will teach to a different marking standard. Their drills may actually work against the Cambridge or AP approach your child is being assessed on.",
      bridge:
        "IGCSE and AP reward applied understanding, not recall alone. Cambridge examiners mark against published criteria that require analysis, evaluation, and extended writing — skills that past-paper drilling can build only partially. AP free-response questions require a student to construct arguments under time pressure using content they genuinely understand, not recall. A tutor who is not familiar with Cambridge or AP marking is likely optimising for the wrong thing. The investment is real; the return depends entirely on whether the tutor is working with the right framework.",
      goal:
        "If your child needs additional academic support, ask Woodstock first. Many schools at this level have peer tutoring, teacher office hours, and structured academic support that a well-meaning CBSE tutor cannot match for Cambridge content. If you do hire outside support, ask the tutor directly: 'Have you taught IGCSE Cambridge or AP before, and are you familiar with the marking criteria?' If they cannot answer clearly, find someone who can.",
      woodstockNote:
        "Woodstock's small class sizes (6:1 student-teacher ratio) mean subject teachers know your child's specific gaps. A ten-minute conversation with the subject teacher is often more targeted than several hours of tuition.",
      whatToAsk: [
        '"Does my child need additional support, and what does the school offer?" — ask the subject teacher before engaging outside help.',
        '"Are you familiar with Cambridge IGCSE / AP marking criteria?" — the right answer from any tutor you are considering.',
      ],
    },
    {
      id: 'cultural-002',
      relevantAt: ['igcse', 'new'],
      component: 'Indian Parent Context',
      concept: 'No Merit List — Why Woodstock Does Not Rank Students',
      concern:
        "In CBSE and ICSE, the merit list told you something concrete: your child was first, fifth, or fifteenth in the class. That ranking was motivating for students who were near the top and actionable for families who wanted to understand where to focus. Woodstock does not publish class ranks. There is no topper, no merit position, no class average shared with parents. The absence of this information can feel like the school is withholding something important.",
      bridge:
        "Woodstock does not rank students because ranking within a class of many nationalities tells you very little — and actively harms the learning culture. A student ranked fifth in a highly diverse international cohort is not the same as a student ranked fifth in a cohort of 40 students from the same coaching-centre pipeline. More importantly, educational research on motivation — Carol Dweck's work on fixed versus growth mindsets, alongside decades of work by Deci and Ryan on self-determination — shows that students pushed to focus on rank relative to peers tend to develop a 'performance' orientation that works well while they are near the top and breaks down the moment they are not. Criterion-referenced feedback supports a 'mastery' orientation: students focus on the specific skill they need to develop, which is more durable across harder challenges. Ranking also creates a fixed competition that undermines the collaborative residential community Woodstock is deliberately building. What Woodstock gives you instead is criterion-specific feedback: not where your child ranks, but exactly which skills they are demonstrating well and which need development.",
      goal:
        "The question that matters for university outcomes is not 'where does my child rank in the class?' but 'is my child building the skills and profile that competitive universities are looking for?' Criterion-based feedback from IGCSE and AP answers the second question with far more precision than a class rank ever could. US selective admissions explicitly evaluate applicants in the context of their own school's grading system — a class rank from a non-ranking school carries no disadvantage, because readers are trained to read the school profile alongside the transcript. A student ranked third in a weak cohort may have a weaker university application than a student ranked eighth in a strong one. Rank is not the signal you think it is.",
      woodstockNote:
        "If you want to understand how your child is performing relative to expectations, ask the subject teacher: 'Is my child performing at, above, or below the expected standard for this point in the course?' That is the right question — and teachers will answer it honestly.",
      whatToAsk: [
        '"Is my child performing at, above, or below the expected standard for this stage of the course?" — this is the honest rank equivalent at Woodstock.',
        '"What does a strong performance look like in this subject at IGCSE level, and how close is my child to that standard?" — gives you a benchmark without a ranking.',
      ],
    },
    {
      id: 'cultural-003',
      relevantAt: ['new', 'boarding'],
      component: 'Indian Parent Context',
      concept: 'Reading Qualitative Feedback — What International Teachers Mean',
      concern:
        "Your child's report from a Woodstock teacher does not give a percentage. Instead, it says things like 'demonstrates strong conceptual understanding but needs to develop precision in written communication' or 'engages enthusiastically in class but would benefit from more independent revision.' These phrases feel vague compared to a number. You are not sure whether this is a good report, a mediocre report, or a polite way of saying something is wrong.",
      bridge:
        "Qualitative feedback from international teachers is more diagnostic than a percentage — it tells you exactly where to focus, not just how far from the top your child is. 'Needs to develop precision in written communication' in an IGCSE Science context means your child understands the content but is losing marks in extended-answer questions because they are not using the precise scientific vocabulary Cambridge examiners expect. That is a very specific, fixable problem. A percentage mark of 72% tells you none of that. Learning to read narrative feedback as targeted instruction — not a vague compliment or criticism — is one of the most useful skills a Woodstock parent can develop.",
      goal:
        "When you receive a report with qualitative comments, the right response is not to look for the number hidden behind the words. It is to ask the teacher: 'What specifically would a stronger performance look like, and what should my child work on before the next assessment?' International teachers respond very well to this question. It is the kind of parental engagement they are designed to work with — specific, evidence-based, and forward-looking rather than mark-focused.",
      woodstockNote:
        "Woodstock teachers are accustomed to parents who are new to narrative feedback. Asking directly about what feedback means is not rude — it is exactly what the teacher-parent relationship at a school like this is designed for. The distance of boarding makes this even more important: a clear email with a specific question is always welcome.",
      whatToAsk: [
        '"What specific skill does this feedback comment point to, and how can my child develop it before the next assessment?"',
        '"If my child addressed this area, what would their performance look like on the next report?" — makes the feedback concrete and future-focused.',
      ],
    },
  ],

  // ─── Review scenarios (real situations Indian parents at Woodstock face) ─────
  reviewScenarios: [
    {
      id: 'review-001',
      title: 'The grade conversion',
      termsInPlay: ['IGCSE grades', 'No merit list'],
      situation:
        "Your child's end-of-year IGCSE report arrives. Three subjects show B, two show A, one shows C. You open a calculator: B is roughly 70–79%, C is roughly 60–69%. The average comes to about 72%. At their previous CBSE school, 72% in Science would have prompted urgent action — extra tuition, a call to the class teacher. You draft an email to the Woodstock principal expressing concern about your child's academic performance.",
      withUnderstanding:
        "You understand that a B in Cambridge IGCSE means 'good achievement' and meets the entry requirements for most UK, US, and international university programmes. A C means 'satisfactory' — a passing grade, not a near-fail. You ask the subject teacher of the C subject: 'What specific skills is my child missing, and what would a stronger grade look like?' You get a targeted answer about extended-answer technique. The email you send is specific and productive rather than general and alarmed.",
      withoutUnderstanding:
        "The school responds to your email with a long explanation of IGCSE grade descriptors. It takes two weeks, consumes a teacher's time, and produces some frustration on both sides. The teacher is mildly defensive; you feel the school was not transparent enough at enrolment. Both reactions are understandable. This guide exists so that email doesn't need to happen.",
    },
    {
      id: 'review-002',
      title: 'The Activity Week call',
      termsInPlay: ['WSD', 'Outdoor Education', 'Boarding School Learning'],
      situation:
        "It is October. Your child's IGCSE mock exams are six weeks away. You receive the termly schedule and notice that every student in Grades 9–12 will spend an entire week off-campus for Activity Week — trekking, cultural visits, service projects. Your child is going to Rajasthan. You are alarmed: this is the most important academic term, your child is already behind in Chemistry, and the school is sending them on what looks like a holiday.",
      withUnderstanding:
        "You understand that Activity Week is a core part of the Woodstock education — not an optional extra — and that the resilience, self-direction, and real-world learning it builds are things the WSD is designed to document and that universities in the US and UK actively look for. You speak with the Chemistry teacher before the week: 'What specific revision should my child prioritise the week before they leave, and what support is available when they return?' Your child goes on the trip, returns, and the preparation is focused and targeted.",
      withoutUnderstanding:
        "You email the school asking whether your child can remain on campus for self-study during Activity Week. The school explains that attendance is required. You feel the school is prioritising experiences over academic preparation at the wrong moment in the year. The tension is real — but it comes from applying a CBSE calendar logic to a school whose academic calendar is designed differently.",
    },
    {
      id: 'review-003',
      title: 'Navigating the parent network',
      termsInPlay: ['No merit list', 'Boarding School Learning'],
      situation:
        "Three months after enrolment, you have been added to an informal WhatsApp group of Woodstock parents from India. The group is active: parents share grade comparisons ('my child got A in English — what did yours get?'), worries about the curriculum change from IB, concerns about whether IGCSE is recognised in India, and occasional criticism of specific teachers. One parent mentions their child is already working with a CBSE tutor for 'backup preparation.' You are unsure how much weight to give to the information in the group.",
      withUnderstanding:
        "You treat the group as a social connection, not an academic intelligence source. When specific concerns come up — IGCSE recognition, the transition from IB — you verify them directly with the school's university counsellor rather than acting on secondhand anxiety. You find that several concerns circulating in the group are either outdated or inaccurate. You stay connected to the community but anchor your decisions in direct conversations with Woodstock staff.",
      withoutUnderstanding:
        "You begin making academic decisions — hiring a tutor, requesting a programme change, escalating concerns to the principal — based on information from the parent group that turns out to be partly incorrect. The school spends time correcting misunderstandings that spread faster than accurate information. The parent community is genuinely valuable for social connection and logistics. It is a poor source of academic guidance.",
    },
  ],


  // ─── Research insights: evidence-based reframes parents rarely encounter ─────
  researchInsights: [
    {
      id: 'insight-feedback-effect',
      title: 'The single biggest lever you have is feedback — not tutoring',
      headlineClaim: 'Feedback quality moves learning roughly 5× more than homework volume in secondary school.',
      evidence: "John Hattie's Visible Learning synthesis aggregates more than 2,100 meta-analyses covering roughly 400 million students. Feedback has an average effect size of about d = 0.70 — a year and a half of growth per school year. Homework averages d ≈ 0.15 at primary and closer to d ≈ 0.65 only when it is purposeful and feedback-rich at secondary level. The EEF Teaching and Learning Toolkit reports similar magnitudes for metacognition and feedback.",
      soWhat: 'The instinctive response to a weak grade — add more homework, add a tutor, add more drill — treats symptoms, not cause. What accelerates learning is specific, timely feedback from someone who knows the IB/IGCSE/AP criteria: the subject teacher. Parents help most by protecting the conditions in which feedback can land — rest, redraft time, conversations about meaning.',
      action: "Before booking an outside tutor, email the subject teacher: What specific feedback have you given recently, and what would you like to see in the next piece of work? Ask your child what their last piece of teacher feedback was. If they cannot name it, the feedback loop — not the content — is where the leverage is.",
      citations: [
        'Hattie, J. (2023). Visible Learning: The Sequel. Routledge.',
        'Hattie, J. & Timperley, H. (2007). The Power of Feedback. Review of Educational Research, 77(1).',
        'EEF Teaching and Learning Toolkit — Feedback strand (updated 2024).'
      ]
    },
    {
      id: 'insight-growth-mindset-nuance',
      title: 'Growth mindset works — but not the way posters claim',
      headlineClaim: 'The effective version pairs the idea that ability is developable with a supportive school climate.',
      evidence: "Carol Dweck's original work on fixed vs growth mindset is often watered down to slogans. David Yeager's team ran the largest direct replication to date in a 2019 national experiment (~12,500 US 9th-graders) and found real but modest effects, concentrated in lower-achieving students. A 2022 follow-up in Nature (Yeager et al.) showed the intervention works much better when combined with teacher practices that treat challenge as normal — what the authors call synergistic mindsets. Mindset alone is not enough; mindset plus a classroom where struggle is treated as learning is where the effect compounds.",
      soWhat: 'At a boarding school with Himalayan expeditions, IGCSE/AP cycles, and house life, growth-mindset language is everywhere. What matters is whether it is backed by how adults actually respond when a child underperforms: Is the first conversation about effort strategies, or about grades and consequences? Is it normalised to redraft, or is a first mark treated as final verdict?',
      action: "When your child describes pre-assessment anxiety, resist both you'll be fine and you need to work harder. Ask: What part of this feels hard, and what would you try differently this time? That is the synergistic-mindset script — it treats the struggle as information, not failure.",
      citations: [
        'Yeager, D. S. et al. (2019). A national experiment reveals where a growth mindset improves achievement. Nature, 573.',
        'Yeager, D. S. et al. (2022). Synergistic mindsets intervention protects adolescents from stress. Nature, 607.',
        'Dweck, C. (2006). Mindset: The New Psychology of Success.'
      ]
    },
    {
      id: 'insight-tiger-parenting',
      title: 'The evidence on "tiger parenting" is clearer than public conversation suggests',
      headlineClaim: 'High-pressure, achievement-focused parenting is associated with *worse* long-term academic and wellbeing outcomes than warm-but-structured parenting.',
      evidence: "Su Yeong Kim and colleagues' 2013 longitudinal study of 444 Chinese American families tracked four parenting profiles over eight years: supportive (high warmth, high structure), easygoing (high warmth, low structure), tiger (low warmth, high control), and harsh. Supportive parenting produced the highest GPA, the highest educational attainment, the strongest family bonds, and the lowest adolescent depression. Tiger parenting underperformed supportive parenting on every measure. The comparison is within-culture, which is why it is so informative. Hill & Tyson's 2009 meta-analysis of 50 studies points the same way: what predicts achievement is academic socialisation — conversations about meaning, goals, strategies — not homework monitoring or pressure.",
      soWhat: 'For Woodstock families arriving from India, the Gulf, Korea, or East Africa, this is the counter-intuitive part: you can lower the temperature without lowering the ceiling. In fact, lowering the temperature is how the ceiling rises. Warm and structured is an evidence-based stance, not a soft one.',
      action: "This week, try one concrete swap. Replace a question that evaluates (What did you get?) with a question that explores (What was the hardest part of that piece for you?). Notice whether your child says more or less. Repeat for a month.",
      citations: [
        'Kim, S. Y., Wang, Y., Orozco-Lapray, D., Shen, Y., & Murtuza, M. (2013). Does "tiger parenting" exist? Parenting profiles of Chinese Americans and adolescent developmental outcomes. Asian American Journal of Psychology, 4(1).',
        'Hill, N. E. & Tyson, D. F. (2009). Parental involvement in middle school: A meta-analytic assessment. Developmental Psychology, 45(3).'
      ]
    },
    {
      id: 'insight-boarding-attachment',
      title: 'Boarding works — when the adult relationships inside the house are genuine',
      headlineClaim: "The strongest predictor of a child's wellbeing at a boarding school is the quality of their relationship with house staff, not the facilities, the academic reputation, or the distance from home.",
      evidence: "Joy Schaverien's 2015 book Boarding School Syndrome drew clinical attention to the risks of early, emotionally unsupported boarding. The research response since has been nuanced rather than anti-boarding: studies from Cambridge and the Boarding Schools Association (2018–2023) show that boarding outcomes vary enormously by the quality of pastoral care. Bowlby and Ainsworth's classical attachment work applies directly: a child separated from primary caregivers needs a reliable, warm secondary attachment figure. In a boarding school, that is the house parent. Where that relationship is strong, boarding alumni report wellbeing comparable to or better than day-school peers. Where it is weak or transactional, risk rises.",
      soWhat: 'For Woodstock parents, the house parent is not staff — they are the most important adult in your child\'s week. The question is not whether your child likes them, but whether your child would tell them when something is wrong. That is the attachment test.',
      action: 'In your first email or call each term, ask the house parent one specific question about your child (How is she doing with homesickness on Sundays?), and one general question (What have you noticed in him lately that we might not see from here?). The quality of the answer tells you what you need to know.',
      citations: [
        'Schaverien, J. (2015). Boarding School Syndrome. Routledge.',
        'Bowlby, J. (1988). A Secure Base: Parent-Child Attachment and Healthy Human Development.',
        'Boarding Schools Association / Cambridge research reviews (2018–2023) on pastoral care and boarding wellbeing.'
      ]
    },
    {
      id: 'insight-self-driven-child',
      title: 'The goal is not a compliant child — it is a self-driven one',
      headlineClaim: 'Adolescents whose parents protect their sense of agency show better academic outcomes, lower anxiety, and more durable motivation than adolescents whose parents optimise their schedules.',
      evidence: "William Stixrud and Ned Johnson's The Self-Driven Child synthesises two decades of developmental neuroscience and clinical practice. The throughline is agency: when adolescents experience a stable sense of control over their own lives, the prefrontal cortex develops more robustly, stress-response systems regulate better, and intrinsic motivation consolidates. Jonathan Haidt's The Anxious Generation (2024) adds a population-level picture: rising anxiety among adolescents tracks with the combination of lost unsupervised autonomy and saturation of phone-based life. Both converge on the same recommendation — protect the child's experience of making real decisions.",
      soWhat: 'Boarding school is, structurally, an autonomy machine. Your child is making dozens of decisions a day that you cannot see. The parent\'s job shifts from manager to consultant. The ones who thrive in Grade 11–12 IGCSE/AP years are usually the ones whose parents began making this shift around Grade 7–8.',
      action: "Identify one decision you are currently making for your child that they could reasonably make themselves (subject choice input, weekend plans, sleep timing during break). Hand it over. Notice what happens — and resist the urge to take it back after the first sub-optimal choice.",
      citations: [
        'Stixrud, W. & Johnson, N. (2018). The Self-Driven Child.',
        'Haidt, J. (2024). The Anxious Generation.'
      ]
    },
    {
      id: 'insight-knowledge-vs-skills',
      title: 'Critical thinking cannot be taught in the abstract — it runs on knowledge',
      headlineClaim: 'Skills like analysis and problem-solving are deeply domain-specific. A child cannot think critically about history if they do not know history.',
      evidence: "Daniel Willingham's Why Don't Students Like School synthesises decades of cognitive-science work into a clear claim: working memory is limited, and deep thinking depends on rich long-term knowledge that makes working memory effectively bigger. Daisy Christodoulou's Seven Myths About Education applied this to curriculum design, pushing back on the assumption that facts are Googleable and therefore unimportant. Kirschner, Sweller, and Clark's 2006 paper in Educational Psychologist makes the point formally: pure discovery learning is ineffective for novices because they lack the schemas to make sense of what they are discovering.",
      soWhat: "The IB Learner Profile's ten attributes — Inquirers, Knowledgeable, Thinkers, Communicators, Principled, Open-minded, Caring, Risk-takers, Balanced, Reflective — put Knowledgeable right alongside Thinkers for exactly this reason. When Woodstock's IGCSE and AP teachers ask students to write essays, design experiments, and analyse sources, that work only rises when the underlying knowledge is secure. Content is not the opposite of inquiry — it is the substrate.",
      action: "When your child says a subject is boring, ask what the last thing they actually learned in it was. If they struggle to name a specific fact, concept, or procedure, the problem is usually a weak knowledge base, not a pedagogy problem. Rebuild the substrate before attacking the method.",
      citations: [
        "Willingham, D. (2009). Why Don't Students Like School?",
        'Christodoulou, D. (2014). Seven Myths About Education.',
        'Kirschner, P., Sweller, J., & Clark, R. (2006). Why minimal guidance during instruction does not work. Educational Psychologist, 41(2).'
      ]
    },
    {
      id: 'insight-grit-nuance',
      title: '"Grit" is real — and smaller than it was sold as',
      headlineClaim: 'Self-discipline and conscientiousness matter, but they are not a separate magic ingredient distinct from personality.',
      evidence: "Angela Duckworth's Grit became a global bestseller on the claim that sustained passion and perseverance predict long-term success. Marcus Credé's 2017 meta-analysis pooled 88 studies and found that grit, as measured, overlaps almost entirely with the long-established personality trait of conscientiousness — and that once conscientiousness is controlled for, grit's independent predictive power on academic performance is modest. This does not mean self-discipline is unimportant; it means the story is subtler. What helps adolescents build the working version of grit is the combination of agency, meaningful challenge, and supportive adult relationships — exactly the conditions the IB Learner Profile and good boarding pastoral care try to create.",
      soWhat: 'Pushing a child to have more grit as a personality correction is unlikely to work. Putting them in an environment where they are trusted to try hard things, supported when they struggle, and helped to reflect on what happened — that is the operational version of grit development.',
      action: 'When your child is on the edge of quitting something, ask what specifically is hard about it and what one change might make it bearable. That is the conversation that builds the trait. Threats, rewards, and lectures about perseverance generally do not.',
      citations: [
        'Duckworth, A. (2016). Grit: The Power of Passion and Perseverance.',
        'Credé, M., Tynan, M. C., & Harms, P. D. (2017). Much ado about grit: A meta-analytic synthesis of the grit literature. Journal of Personality and Social Psychology, 113(3).'
      ]
    }
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
