/**
 * India Parent IB Module — English only
 * Helps Indian parents at IB schools understand the pedagogy
 * their children are experiencing.
 */

export const indiaIbParent = {
  id: 'parent-india-ib-001',
  slug: 'india-ib',
  country: 'india',
  program: 'IB',
  languages: ['en'],

  journeyStages: [
    {
      id: 'new',
      en: {
        label: 'New to IB',
        description: 'Typically your first year. Your child has moved from CBSE, ICSE, or another curriculum into an IB school. The shift from percentage marks and prescribed textbooks to criterion-based grades and inquiry-based learning can feel disorienting at first.',
        highlight: 'Start with Core Concepts — especially criterion-based grades.',
      },
    },
    {
      id: 'settled',
      en: {
        label: 'Settling in',
        description: 'Year 2 or beyond. You have received several reports and are beginning to understand the language — but terms like formative, criterion, and MYP grade may still feel unfamiliar or inconsistent.',
        highlight: 'Jump to Grade System — the calculators will help.',
      },
    },
    {
      id: 'pyp-myp',
      en: {
        label: 'PYP → MYP',
        description: 'Your child is around 10–12 years old, moving from Primary Years to Middle Years — or has just joined MYP from a CBSE or ICSE primary school. Criterion-based grades appear for the first time and the system can feel most confusing right now.',
        highlight: 'See PYP first, then Grade System for the calculators.',
      },
    },
    {
      id: 'myp-dp',
      en: {
        label: 'MYP → DP',
        description: 'Your child is typically in Year 10 or 11. Subject selection, HL/SL choices, Internal Assessments, and predicted grades are the decisions that matter now. The DP calculator is the most important tool here.',
        highlight: 'Focus on Grade System — the DP calculator — and the Core Concepts cards on IA and CAS.',
      },
    },
  ],

  meta: {
    en: {
      title: 'Understanding Your Child\'s IB School',
      subtitle: 'A guide for Indian families navigating international education',
      intro: 'IB schools look very different from CBSE or ICSE schools — not because they are less rigorous, but because they are built around different goals. If you have already had a moment that confused or frustrated you, this guide is for that moment. It covers five core concepts, interactive grade calculators for MYP and DP, a PYP section, and two scenarios that show how the same situation looks with and without this context.',
      reassurance: 'One thing that does not change: your child is still learning Mathematics, Science, and Languages to a high standard. The IB is not a lighter curriculum; it is a differently demanding one. IB HL Mathematics and Sciences cover comparable content ground to CBSE Class 11–12, with more emphasis on investigation, modelling, and extended writing — and correspondingly less practice at the rapid, formulaic problem patterns that dominate JEE/NEET preparation. Your child is still being rigorously assessed on every major piece of work they submit. The differences are in how learning is structured and how progress is reported — not in whether rigour exists. A piece of evidence worth sitting with: Kim et al. (2013, Asian American Journal of Psychology) tracked 444 Chinese American families over eight years and compared high-pressure "tiger" parenting with warm-but-structured "supportive" parenting within the same cultural group. Supportive parenting predicted higher GPA, higher educational attainment, stronger family bonds, and lower depression. The evidence is counter-intuitive to many Indian parents, because it contradicts the standard narrative that pressure drives performance. It does not — not in the long run, not on the measures we actually care about.',
      indianUniversityNote: 'For families in India or considering return: Indian university policies on international qualifications have broadened considerably since 2020, partly driven by the National Education Policy (NEP 2020). The University of Delhi, BITS Pilani, Ashoka University, O.P. Jindal Global University, FLAME, Krea, Plaksha, and many other private institutions accept IB scores directly. Engineering (JEE) and medicine (NEET) remain genuine content trade-offs rather than eligibility barriers: IB Diploma holders are formally eligible to sit JEE Main when they hold an Association of Indian Universities (AIU) equivalency certificate and have studied Physics, Chemistry, and Mathematics at Higher Level, and CUET (the Common University Entrance Test for central universities) also accepts IB Diploma holders with AIU equivalency. The challenge is content alignment, not eligibility: JEE and NEET test specific problem-solving patterns and syllabus sequences that IB HL courses approach differently. Families keeping both pathways open need to address this by Year 9 — supplementary coaching in JEE/NEET content patterns is the most common strategy. If JEE, NEET, or CUET is a possibility, that conversation with your school counsellor needs to happen now, not in Year 11. Most Indian IB students target UK, US, Australian, or Canadian universities where the IB Diploma is well recognised. Your school\'s university counsellor can advise on current Indian acceptance policies.',
      whatToAskNote: 'IB teachers respond better to specific evidence questions — "What would a stronger Criterion B response look like?" — than to general outcome questions. Come to any meeting with your child\'s actual report in hand.',
    },
  },

  openingHook: {
    en: {
      situation: [
        'Your child\'s Year 8 Mathematics report arrives. They received a 5 out of 7. Below the grade, the teacher has written four lines of feedback: your child shows strong conceptual understanding but makes errors under timed conditions, struggles to communicate mathematical reasoning in writing, and would benefit from more practice with multi-step problem-solving.',
        'You try to make sense of the number. 5 out of 7 is roughly 71%. At their previous CBSE school, 71% in Maths would have prompted a call to the tuition teacher. But you\'re not sure the conversion works that way. You don\'t know whether other students got 6s and 7s.',
        'You call a friend whose child is still in the CBSE school nearby. They mention their child just scored 89% in the half-yearly. You hang up feeling vaguely unsettled — and unsure whether you should be worried.',
      ],
      question: 'Is your child behind — or are you just missing the translation?',
      directAnswer: 'The short answer: a 5 in IB Mathematics is not the same as 71% in CBSE. IB grades measure different things using a different scale, and the percentage conversion will mislead you every time. Your child is likely doing better than you think. The sections below explain how to read IB outcomes accurately. If your child is in PYP (primary school, ages 3–11), there won\'t be numerical grades at all — that is intentional, not an oversight. Jump directly to the PYP section to understand what\'s happening.',
    },
  },

  cards: [
    {
      id: 'card-001',
      relevantAt: ['new', 'pyp-myp'],
      ibComponent: 'All programmes',
      en: {
        concept: 'Inquiry-Based Learning',
        concern: 'In CBSE and ICSE, a good teacher covers the syllabus precisely and ensures every student has the correct answer before moving on. The NCERT textbook was the reference point — you could check your child\'s understanding against it at home. When an IB lesson ends without a clear conclusion, or when the teacher assigns an open-ended investigation instead of completing a chapter, it is reasonable to feel that the preparation has not happened yet.',
        bridge: 'IB teachers do not use a single prescribed textbook because the goal is different: understanding how to use knowledge, not recognising content on an exam. The research on inquiry-based learning is more nuanced than either critics or enthusiasts typically present. Work on "productive failure" (Kapur, 2008) and "desirable difficulties" (Bjork) shows that students who wrestle with a problem before receiving an explanation retain understanding longer than students who memorise. At the same time, work by Kirschner, Sweller and Clark (2006) shows that unscaffolded pure-discovery learning is ineffective for novices — guidance still matters. Well-taught IB classrooms combine both: structured introduction of concepts, followed by investigations that force students to apply those concepts in unfamiliar situations. The investigation is not a substitute for learning — it is a more demanding form of it, when the scaffolding is right.',
        goal: 'Top UK, US, and competitive Indian undergraduate programmes — from Ashoka University to NLU law schools to engineering programmes that evaluate beyond rote performance — directly test the ability to think through problems that haven\'t been seen before. This is what Oxford interviews, US college application essays, and Ashoka admissions conversations all have in common. A student who has spent years forming questions and testing ideas can handle a university interview, a case study, or a first-year research project in ways that a student who memorised the syllabus often cannot.',
        ibConnection: 'The IB Learner Profile defines ten attributes the programme is designed to develop — the first is Inquirers, alongside Knowledgeable, Thinkers, Communicators, Principled, Open-minded, Caring, Risk-takers, Balanced, and Reflective. Curiosity and independent thinking are not peripheral skills. They are the explicit core of what the programme is designed to build.',
        whatToAsk: [
          'Ask the teacher: "How does this investigation connect to the assessment criteria?" — IB teachers can always map inquiry activities to what is actually being examined.',
          'If you\'re worried about syllabus coverage: "Has the class covered all required content for the final external examination?" — IB teachers are responsible for both inquiry and exam readiness.',
        ],
      },
    },
    {
      id: 'card-002',
      relevantAt: ['settled', 'pyp-myp', 'myp-dp'],
      ibComponent: 'MYP & DP assessment',
      en: {
        concept: 'Criterion-Based Grades vs. Percentage Marks',
        concern: 'Percentage marks are genuinely useful — a 92% in CBSE Mathematics told you something clear about where your child stood and whether they were on track. Receiving a 5 out of 7 with no class average and no percentage equivalent creates real uncertainty. The temptation to convert — 5/7 = 71% — is understandable, because at least that number fits a familiar frame. And while the CBSE report told you your child was first, fifth, or fifteenth in the class, an IB report shows no rank at all. There is no merit list, no topper designation. That absence can feel like information is being withheld.',
        bridge: 'Unlike CBSE board exams, which award percentage marks based on correct answers against a national marking scheme, IB grades measure whether your child can demonstrate understanding and apply it in new situations. The 71% conversion is not valid — a 5 in IB Mathematics means something specific: "substantial achievement" against defined criteria. Two students can both score a 5; the grade tells you what your child can do, not where they rank against peers. A criterion score also tells you exactly which skill needs work. A percentage never can. IB also does not publish class ranks — this is deliberate. Ranking students against each other incentivises outperforming peers rather than developing genuine understanding. A student who scores a 5 may be the highest in the class or the fourth; the IB doesn\'t say, and that is a design decision, not an omission.',
        goal: 'IB grades carry consistent meaning across every school in the world. A 6 in Mathematics from Chennai means the same as a 6 from Singapore or London. This global consistency is what makes the credential credible to universities across the UK, US, Australia, and Canada — and why it opens doors that a school-specific percentage mark cannot. For Indian private universities — Ashoka, O.P. Jindal Global, Krea, FLAME, and Plaksha among them — the IB is increasingly recognised under the AIU equivalency framework, though admissions processes vary and most do not publish cutoff scores.',
        ibConnection: 'IB assessment descriptors are published globally. Grade 4 is "adequate achievement"; grade 5 is "substantial achievement"; grade 6 is "accomplished achievement"; grade 7 is "excellent achievement." These are not percentages. Do not convert them.',
        whatToAsk: [
          '"Which specific criterion is my child finding most difficult?" — this tells you more than any mark.',
          '"What would a grade 6 performance look like in this subject?" — knowing the target precisely gives your child something concrete to aim for.',
        ],
      },
    },
    {
      id: 'card-003',
      relevantAt: ['settled', 'myp-dp'],
      ibComponent: 'DP Internal Assessment',
      en: {
        concept: 'Internal Assessment — Not Free Marks',
        concern: 'In CBSE, internal marks — practicals, projects, and school-based assessments — were generally straightforward to obtain and rarely changed a student\'s overall outcome significantly. If IB Internal Assessment works the same way, it makes sense to focus energy on the external examinations, which are what actually determine university entry.',
        bridge: 'IB Internal Assessment is not equivalent to CBSE practicals. It is a substantial independent investigation — a lab report, mathematical exploration, oral, or portfolio depending on the subject — that is marked by the teacher but then externally moderated by the IB. The IB can adjust a teacher\'s mark significantly, up or down. IA weight varies by subject: Mathematics AA/AI and the Sciences typically weight IA at 20% of the final subject grade; Business Management, Psychology, and some Language A components weight IA at 25%; Language B oral components can be 25% or more. A student who treats the IA as a routine school task and receives a weak moderated mark can lose enough points to change their university outcome — even with strong exam performance.',
        goal: 'More importantly, the IA develops the skills that the DP Extended Essay, university coursework, and professional research all require: designing an investigation, gathering evidence, analysing it without a template, and defending a conclusion. Students who take it seriously arrive at university already knowing how to work independently. This matters far more than the percentage it contributes.',
        ibConnection: 'All IAs are externally moderated by the IB. Subject teachers mark first; the IB reviews a sample and may adjust the entire cohort\'s marks. A student who submits a weak IA and performs strongly in exams will still receive a lower final grade than their exam performance alone would suggest.',
        whatToAsk: [
          '"When is the IA due, and what does a high-scoring IA look like in this subject?" — early planning prevents last-minute submissions that underperform.',
          '"Can I see an anonymised exemplar IA so I understand the standard?" — most IB teachers can share examples of what a 7, 5, and 3 look like.',
        ],
      },
    },
    {
      id: 'card-004',
      relevantAt: ['new', 'myp-dp'],
      ibComponent: 'DP Extended Essay / MYP Personal Project',
      en: {
        concept: 'Student Agency — Choosing the Topic',
        concern: 'In Indian schooling, the best preparation comes from a structured syllabus with a clear expert guiding the content. When a student is asked to choose their own Extended Essay topic and research question, it can seem like the school is leaving the most important work to chance — or allowing a student to choose something easy rather than rigorous.',
        bridge: 'The Extended Essay requires a student to generate an original research question, scope their own investigation, and produce a 4,000-word research paper — supervised but not directed by a teacher. The IB requires this because it is harder than a teacher-assigned topic, not easier. A student who has spent six months genuinely wrestling with their own question can explain it in a university interview with the depth and conviction that a coached response cannot match. The question must be theirs because the understanding has to be theirs.',
        goal: 'UK universities — particularly Oxbridge and Russell Group institutions — read Extended Essays during application review and treat them as evidence of genuine intellectual engagement. US universities value the EE as part of a research or intellectual curiosity narrative; it strengthens the application in ways exam scores alone cannot. For Indian private universities like Ashoka or Jindal, the EE carries less direct weight in admissions but demonstrates exactly the independent thinking these institutions look for in their own interviews and essays. For families targeting Indian domestic universities, the EE\'s primary value is the skill it builds — not the admissions advantage it provides.',
        ibConnection: 'The Extended Essay is externally assessed by the IB and graded A–E. Together with Theory of Knowledge, it contributes up to 3 bonus points to the diploma total. These are real points with real university consequences.',
        whatToAsk: [
          'Ask your child: "Why did you choose that question?" — if they can answer clearly, the ownership is real.',
          'Ask the EE supervisor: "What are the most common reasons students receive a C or lower on their EE?" — supervisors know the failure patterns and can share them.',
        ],
      },
    },
    {
      id: 'card-005',
      relevantAt: ['new', 'myp-dp'],
      ibComponent: 'DP Core — CAS',
      en: {
        concept: 'CAS — Not Optional Enrichment',
        concern: 'In the Indian competitive system, time during the DP years translates directly into marks and entrance exam rank. Watching your child spend significant hours on volunteering, sport, or a creative project — time that could be spent on subject preparation — is a genuine trade-off, not an irrational concern. It is especially confusing if peers still in the CBSE system are spending those hours in coaching centres.',
        bridge: 'CAS is a graduation requirement. Your child cannot receive the IB Diploma without completing and documenting it — no exceptions. The IB makes it mandatory because the universities it targets have told the IB what they want: students who demonstrate genuine sustained commitment outside the classroom. A student who has led a community project, maintained an athletic practice, or completed a creative endeavour over two years brings something to an application that no exam score can replicate. This is not enrichment. It is part of the qualification.',
        goal: 'For families targeting international universities, CAS provides genuine admissions value — it demonstrates sustained commitment in a context where exam scores say nothing about a student\'s character or resilience. For families targeting Indian domestic universities, be clear-eyed: CAS does not directly count in marks-driven Indian admissions. Its value is the skill it builds and the diploma it completes — not leverage for Indian college entry. That is a conscious trade-off worth making, but worth making with open eyes. The resilience, collaborative capacity, and self-management CAS develops are things no coaching centre can produce — and they determine far more about post-university success than any board exam rank.',
        ibConnection: 'CAS is a requirement of the DP, which begins in Year 12. It requires 150 documented hours across Creativity, Activity, and Service, plus a reflection portfolio. It is reviewed as a diploma completion requirement — not as an optional add-on.',
        whatToAsk: [
          'Ask your child: "What are you genuinely getting out of your CAS activity?" — authentic reflection matters more than hours logged.',
          'Ask the CAS coordinator: "Which activities tend to produce the strongest university application stories?" — not all CAS carries equal weight in practice.',
        ],
      },
    },
  ],

  reviewScenarios: [
    {
      id: 'review-001',
      en: {
        title: 'The coaching centre problem',
        termsInPlay: ['Inquiry-Based Learning', 'Criterion-Based Grades'],
        situation: 'Your child\'s school Maths teacher says the IB programme is self-contained — additional coaching is not necessary. You enrol them in a local IB tuition centre anyway. After three months, the tuition teacher is drilling past-paper technique while the school teacher keeps assigning open-ended investigation tasks. Your child is now receiving two different approaches to the same subject, and neither teacher is aware of what the other is doing.',
        situationNote: 'IB tutoring can be genuinely useful — but only when the tutor understands the IB approach. A tutor trained in CBSE or A-level drilling may inadvertently undermine the inquiry skills that IB examiners are actually marking for.',
        withUnderstanding: 'You ask the school teacher directly: "What preparation approach produces the strongest examination and IA results?" You find a tutor who has worked with IB students before and understands criterion-based marking. You brief both teachers on what the other is doing. Your child builds both conceptual depth and exam technique — not as separate tracks, but as complementary skills.',
        withoutUnderstanding: 'Your child continues on two parallel tracks. Their past-paper technique improves, but their investigation work lacks the conceptual depth examiners are looking for. The coaching helps with recall-based questions; it actively works against the analytical questions that carry the most marks in IB.',
      },
    },
    {
      id: 'review-002',
      en: {
        title: 'The percentage that wasn\'t',
        termsInPlay: ['Criterion-Based Grades', 'Formative Feedback'],
        situation: 'Your child\'s first full MYP report arrives. Three subjects show a 4, two show a 5, and one shows a 6. You open a spreadsheet and calculate: 4 = 57%, 5 = 71%, 6 = 86%. The average comes to roughly 68%. At their previous school, 68% would have prompted urgent action. You email the class teacher to express concern and copy the school principal.',
        withUnderstanding: 'You understand that a 4 in IB means "adequate achievement" — it is a passing grade on a 1–7 scale, not a near-fail. You ask each teacher: "What specific evidence would move my child from a 4 to a 5 in this criterion?" You focus on those specific skills. Three months later the report shows improvement in the targeted criteria. The percentage conversion was misleading you about a child who was doing adequately and making progress.',
        withoutUnderstanding: 'The school schedules a meeting to explain IB grade descriptors — a conversation that consumes a morning and generates some defensiveness on both sides. The teacher is mildly frustrated that the parent converted the grades to percentages. You are frustrated that the school didn\'t explain this at the start of the year. Both frustrations are valid. This guide is for the moment before that meeting.',
      },
    },
  ],

  pypCards: [
    {
      id: 'pyp-001',
      ibComponent: 'PYP — Reporting',
      en: {
        concept: 'No Percentage Marks in PYP',
        concern: 'CBSE and ICSE primary schools give percentage scores, grades, or ranks — clear signals that tell you where your child stands. PYP reports are full of narrative descriptions, teacher observations, and learning profile assessments, but no numbers. Without a number, it is difficult to know whether your child is performing at the expected standard.',
        bridge: 'PYP uses narrative reporting because at ages 3–11, a single number oversimplifies what a child can actually do. A narrative report tells you what your child understands, how they approach challenges, and where to focus next — it is more diagnostic than a percentage, not less. The absence of marks is a deliberate design choice, not an oversight. Your child\'s teacher is assessing them continuously; you are just receiving a different kind of evidence.',
        goal: 'When your child enters MYP (around age 11), criterion-based grades appear for the first time. The self-awareness and reflective habits built through PYP mean they arrive in that graded system already knowing how to think about their own learning — a significant advantage over students who only ever received a number.',
        ibConnection: 'PYP reporting is built around the IB\'s own framework. Teachers observe and document learning against PYP curriculum standards — not against a CBSE or ICSE grading scheme.',
        whatToAsk: [
          '"What specific evidence of progress have you seen from my child this term?" — reports use standard language; asking for evidence makes the assessment concrete.',
          '"What is my child finding genuinely difficult right now?" — PYP teachers observe closely and will know.',
        ],
      },
    },
    {
      id: 'pyp-002',
      ibComponent: 'PYP — Units of Inquiry',
      en: {
        concept: 'Transdisciplinary Learning',
        concern: 'My child\'s school doesn\'t seem to be teaching separate subjects. They are studying "How We Organise Ourselves" this term. I am not sure they are receiving enough structured Maths or English — in CBSE, the chapter sequence was clear and I could track what had been covered.',
        bridge: 'PYP organises learning through transdisciplinary Units of Inquiry — themes that connect multiple subjects around a real-world concept. Maths, English, Science, and Social Studies are all being taught; they are woven together rather than delivered as isolated blocks. The curriculum coverage is there. The structure looks different because the packaging is different. Your child\'s teacher has a detailed scope and sequence and can show you exactly which skills are being developed in any given unit.',
        goal: 'Research on how knowledge transfers shows that concepts learned in context — connected to something real and meaningful — transfer to new situations far more effectively than concepts learned in isolation. PYP builds the connected understanding that makes later, more specialised learning stick more deeply.',
        ibConnection: 'PYP has six transdisciplinary themes: Who We Are, Where We Are in Place and Time, How We Express Ourselves, How the World Works, How We Organise Ourselves, and Sharing the Planet. All IB schools use the same framework.',
        whatToAsk: [
          '"Which Maths and English skills is this unit developing?" — teachers can map it precisely against the curriculum scope and sequence.',
          'Ask your child: "What is your class inquiry question right now?" — if they can tell you clearly, the learning is working.',
        ],
      },
    },
    {
      id: 'pyp-003',
      ibComponent: 'PYP Early Years',
      en: {
        concept: 'Play-Based Learning in Early Years',
        concern: 'My child comes home talking about games and stories. In other schools at this age, children are already doing formal reading, writing, and arithmetic. I am worried they are falling behind children who are receiving structured academic instruction.',
        bridge: 'In PYP Early Years (ages 3–6), structured play is the curriculum — not a break from it. Children develop language, mathematical thinking, social reasoning, and inquiry skills through purposeful, teacher-designed activities. Both the IB and decades of developmental research agree: formal academic instruction before age 6–7 does not produce better long-term outcomes and often produces worse ones by undermining the intrinsic motivation that sustains long-term learning.',
        goal: 'Children who learn through play in early years develop stronger self-regulation, creativity, and internal motivation than those pushed into formal academics early. These qualities predict academic success through secondary school and beyond — and are much harder to develop once lost to early pressure.',
        ibConnection: 'PYP Early Years is aligned with international research on early childhood development, including evidence from Finland\'s education system and the Reggio Emilia approach. Indian progressive schools — Rishi Valley, The Valley School Bangalore, and Montessori-based institutions across metros — operate on the same developmental evidence. If you have encountered this approach before in India, the philosophy is the same.',
        whatToAsk: [
          '"What learning objectives is this play activity building toward?" — in PYP, play always has intentional curriculum design behind it.',
          'If you\'re concerned: "How is my child progressing in reading and number sense compared to developmental expectations for this age?" — the teacher has a clear picture.',
        ],
      },
    },
    {
      id: 'pyp-004',
      ibComponent: 'PYP Exhibition (Year 5/6)',
      en: {
        concept: 'The PYP Exhibition',
        concern: 'My child in Year 5 or 6 has been given a large independent project where they choose a global issue to investigate and present. This seems very unstructured for this age. Children at other schools are being assessed in more traditional formats.',
        bridge: 'The PYP Exhibition is the culminating assessed component of the entire Primary Years Programme — it is not a creative activity. Students choose a real-world issue, research it independently, collaborate with peers, connect with a mentor, and present findings to the school community. It is assessed against PYP criteria and taken seriously as a graduation requirement. The apparent openness is carefully scaffolded structure: the teacher is guiding process and ensuring rigour, while the content belongs to the student.',
        goal: 'The Exhibition is explicitly designed to prepare students for the MYP Personal Project (Year 10) and the DP Extended Essay (Year 12). It is the first moment where everything PYP has built — inquiry skills, self-direction, collaboration, reflection — gets demonstrated publicly and assessed formally.',
        ibConnection: 'The Exhibition is a mandatory, assessed component of PYP. Students must demonstrate all five essential elements: knowledge, concepts, skills, attitudes, and action.',
        whatToAsk: [
          '"What criteria will the Exhibition be assessed against?" — there is a clear rubric; it is not as open as it appears.',
          'Ask your child: "What action are you planning to take as part of your inquiry?" — the Exhibition requires a real-world action component, not just a presentation.',
        ],
      },
    },
    {
      id: 'pyp-005',
      ibComponent: 'PYP → MYP transition',
      en: {
        concept: 'Preparing for MYP',
        concern: 'My child is moving from PYP to MYP. I have heard the grading changes significantly and becomes more formal. I am not sure whether four years of play-based and inquiry learning has prepared them for something that is now going to be properly assessed.',
        bridge: 'The shift to MYP is real: subjects become separate disciplines, criterion-based grades appear for the first time, homework increases, and academic expectations rise. However, PYP was deliberately designed to build exactly the foundations MYP requires — independent thinking, ability to ask good questions, and comfort with working through problems without a template. Students who have genuinely engaged with PYP arrive in MYP better prepared for criterion-based thinking than students transferring from content-heavy primary curricula. The transition is an adjustment; it is not a correction.',
        goal: 'Students who arrive in MYP from strong PYP experience typically adapt to criterion-based assessment faster than students coming from CBSE or ICSE primary schools, because they already know how to think about their learning — not just how to reproduce content. The adjustment period is real. The foundation is there.',
        ibConnection: 'The IB designs PYP and MYP as a continuum. The inquiry approaches, Learner Profile attributes, and approaches-to-learning skills are explicitly carried forward into MYP and then into DP.',
        whatToAsk: [
          'Ask the MYP coordinator: "How will my child be supported in understanding criterion-based assessment in their first MYP year?" — most IB schools have a deliberate transition programme.',
          'In the first MYP term: "Does my child understand what each criterion in their subjects is asking them to demonstrate?" — if not, that is the conversation to have with the subject teacher directly.',
        ],
      },
    },
  ],

  gradingSystem: {
    myp: {
      en: {
        title: 'How MYP Grades Work',
        intro: 'MYP subjects do not use percentage marks or class ranks. Every subject uses four criteria, each marked out of 8. Those four scores add up to a total out of 32, which is then converted to a final grade from 1 to 7. A 5 is not 71%. A 4 is not 57%. Do not convert.',
        criteriaNote: 'The four criteria are labelled A, B, C, and D — and they measure different things in each subject. In MYP Mathematics, Criterion A is "Knowing and Understanding" and Criterion D is "Applying Mathematics in Real-Life Contexts." A student can score strongly on A and struggle on D. The report shows both separately, which tells you exactly where to focus — something a percentage mark never could.',
        boundaryNote: 'The conversion from a raw total (out of 32) to a final grade (1–7) uses grade boundaries set by each school. The standard IB approximation is shown below. There is also variation at the subject level: Maths and Sciences tend to require higher raw scores for each grade, while Humanities and Arts boundaries are often lower. A 24/32 in MYP Maths may yield a different final grade than 24/32 in MYP Drama.',
        descriptors: [
          { grade: 1, label: 'Minimal achievement'      },
          { grade: 2, label: 'Very limited achievement' },
          { grade: 3, label: 'Limited achievement'      },
          { grade: 4, label: 'Adequate achievement'     },
          { grade: 5, label: 'Substantial achievement'  },
          { grade: 6, label: 'Accomplished achievement' },
          { grade: 7, label: 'Excellent achievement'    },
        ],
        boundaries: [
          { grade: 1, min: 0,  max: 5  },
          { grade: 2, min: 6,  max: 9  },
          { grade: 3, min: 10, max: 14 },
          { grade: 4, min: 15, max: 18 },
          { grade: 5, min: 19, max: 22 },
          { grade: 6, min: 23, max: 27 },
          { grade: 7, min: 28, max: 32 },
        ],
        watchOut: [
          'A 4 in MYP is "adequate achievement" — it is a passing grade, not near-failure. Do not convert it to 57%. The percentage scale does not apply to IB grades.',
          'Your child can score very differently on each criterion within the same subject. A 7/8 on Criterion A and 3/8 on Criterion D tells you exactly where to focus — this is diagnostic information, not just a result.',
          'Grade boundaries vary by school and subject. Maths and Sciences typically have higher raw score thresholds per grade than Humanities. Use the calculator as a guide, not as an exact conversion.',
        ],
      },
    },

    dp: {
      en: {
        title: 'How DP Grades Work',
        intro: 'The IB Diploma is scored out of 45 points. Six subjects contribute up to 42 points (each graded 1–7), and the diploma core — Extended Essay and Theory of Knowledge — can add up to 3 bonus points. Most competitive universities globally require 36–40+ points.',
        subjectStructure: 'Students study six subjects: three at Higher Level (HL) and three at Standard Level (SL). HL subjects involve more content, more teaching hours, and deeper assessment. Many UK and US universities specify minimum HL grade requirements (e.g., "HL6 in Mathematics for engineering programmes").',
        coreBonus: {
          title: 'The EE + ToK Bonus Matrix',
          note: 'The Extended Essay (EE) and Theory of Knowledge (ToK) are each graded A–E. Together they produce 0–3 bonus points using this matrix. Two E grades means the diploma is not awarded, regardless of subject totals.',
          matrix: [
            { ee: 'A', tok: 'A', points: 3 }, { ee: 'A', tok: 'B', points: 3 }, { ee: 'A', tok: 'C', points: 2 }, { ee: 'A', tok: 'D', points: 2 }, { ee: 'A', tok: 'E', points: 0 },
            { ee: 'B', tok: 'A', points: 3 }, { ee: 'B', tok: 'B', points: 2 }, { ee: 'B', tok: 'C', points: 2 }, { ee: 'B', tok: 'D', points: 1 }, { ee: 'B', tok: 'E', points: 0 },
            { ee: 'C', tok: 'A', points: 2 }, { ee: 'C', tok: 'B', points: 2 }, { ee: 'C', tok: 'C', points: 1 }, { ee: 'C', tok: 'D', points: 1 }, { ee: 'C', tok: 'E', points: 0 },
            { ee: 'D', tok: 'A', points: 2 }, { ee: 'D', tok: 'B', points: 1 }, { ee: 'D', tok: 'C', points: 1 }, { ee: 'D', tok: 'D', points: 0 }, { ee: 'D', tok: 'E', points: 0 },
            { ee: 'E', tok: 'A', points: 0 }, { ee: 'E', tok: 'B', points: 0 }, { ee: 'E', tok: 'C', points: 0 }, { ee: 'E', tok: 'D', points: 0 }, { ee: 'E', tok: 'E', points: -1 },
          ],
        },
        passingRules: [
          'Minimum 24 points total to be awarded the diploma.',
          'No subject grade below 2 (SL) or 3 (HL) — a single very low grade fails the diploma even if the total points are sufficient.',
          'CAS requirements must be completed and signed off.',
          'No grade E in both the Extended Essay and Theory of Knowledge.',
          'No more than three grade 1s across all subjects.',
        ],
        watchOut: [
          'A student with 38 points who fails a condition (e.g., receives a 2 in an HL subject) does not receive the diploma. Points alone are not sufficient.',
          'Universities make conditional offers based on predicted grades, typically before final examinations. The conversation with teachers in Year 12 about predicted grades is critical — treat it as seriously as you would a board exam preparation conversation.',
          'Internal Assessment is externally moderated. A teacher\'s mark can be adjusted up or down by the IB. This is not an error; it is the quality assurance mechanism. A student who submits a weak IA cannot recover those marks in the examination.',
          'If your family is considering a JEE or NEET pathway, be aware that IB DP preparation does not directly align with those examination formats. This is a genuine trade-off that requires early planning — speak with your school counsellor well in advance of Year 11.',
        ],
        universityContext: 'For international universities: 36–40+ points is competitive for UK Russell Group and US universities; 40+ for the most selective programmes. For Indian private universities (Ashoka, Jindal, O.P. Jindal): admissions are holistic with no published IB cutoffs — contact them directly. JEE and NEET are entirely separate pathways that IB DP preparation does not cover. If those examinations are relevant, speak with your school counsellor as early as Year 9.',
      },
    },
  },

  nextSteps: {
    en: {
      default: [
        'Ask your child\'s teacher: "Is this formative or summative work?" — that one question changes how you read every piece of feedback.',
        'Find the assessment criteria for one of your child\'s subjects on the school\'s learning platform. Read criteria A–D and notice what each one measures — this is the vocabulary all their future feedback will use.',
        'Do not convert IB grades to percentages. Ask instead: "What would a grade 6 look like in this subject?" — knowing the target precisely helps your child aim for it.',
      ],
      new: [
        'Ask your child tonight: "What question is your class exploring this week?" — not "what topic." If they can answer clearly, inquiry is working.',
        'Request the assessment criteria for one subject from the school. Read what each criterion A–D measures. This is the language all future reports will use, and understanding it now will change how you read every report from here on.',
        'Try the MYP Grade Calculator in the Grade System section with your child\'s most recent report scores — and resist converting the output to a percentage.',
      ],
      settled: [
        'Find your child\'s most recent MYP report and enter the criterion scores into the Grade Calculator. Identify the lowest criterion and ask the subject teacher: "What specific evidence would move my child from a 4 to a 5 on this criterion?"',
        'If you are using outside tutoring, tell the tutor which MYP criteria your child struggles with — and ask them to align their approach with IB methods rather than exam drilling. Drilling past papers helps with some question types; it actively works against others.',
        'Review the DP Calculator even if DP is a year or two away. Understanding the diploma structure now prevents the percentage-conversion anxiety from resurfacing.',
      ],
      'pyp-myp': [
        'Ask your child\'s MYP form tutor: "How will my child be supported in understanding criterion-based assessment this year?" — most IB schools have a deliberate transition programme.',
        'Try the MYP Grade Calculator with your child present — let them move the sliders. The goal is for them to understand their own scores, not just for you to interpret them.',
        'Read the PYP section to understand what your child has already built. Students who have genuinely engaged with PYP arrive in MYP better prepared for criterion-based thinking than you may expect.',
      ],
      'myp-dp': [
        'If JEE, NEET, or any Indian entrance examination is relevant to your family\'s plans, speak with the school\'s university counsellor now — not in Year 12. The IB DP curriculum does not align with those exam formats, and understanding the trade-off early enough to act on it is the single most time-sensitive decision in this stage.',
        'Open the DP Calculator and set your child\'s predicted grades. Check whether any subject is at risk of failing a diploma condition — this is more urgent than the total points number.',
        'Ask your child: "Have you chosen your Extended Essay topic?" — the earlier this conversation starts, the better the research quality. Late topic changes produce weaker EEs.',
      ],
    },
  },

  glossary: [
    {
      term: 'IB',
      en: { full: 'International Baccalaureate', definition: 'The global organisation that designs and awards the PYP, MYP, and DP programmes. Schools are authorised by the IB to offer these programmes and are held to the same standards worldwide.' },
    },
    {
      term: 'PYP',
      en: { full: 'Primary Years Programme', definition: 'The IB programme for students aged 3–11 (roughly Nursery to Class 5/6). Uses inquiry-based, transdisciplinary learning. Narrative reports, no percentage marks.' },
    },
    {
      term: 'MYP',
      en: { full: 'Middle Years Programme', definition: 'The IB programme for students aged 11–16 (roughly Classes 6–10). Introduces criterion-based grades (1–7) across eight subject groups. First point where formal grades appear.' },
    },
    {
      term: 'DP',
      en: { full: 'Diploma Programme', definition: 'The IB programme for students aged 16–19 (Classes 11–12). Leads to the IB Diploma, scored out of 45. Widely recognised by universities in the UK, US, Australia, Canada, and increasingly in India.' },
    },
    {
      term: 'HL',
      en: { full: 'Higher Level', definition: 'One of two subject tiers in the DP. Students take three HL subjects — more content, more hours, and deeper assessment than SL. Universities often specify minimum HL grade requirements for competitive programmes.' },
    },
    {
      term: 'SL',
      en: { full: 'Standard Level', definition: 'The second subject tier in the DP. Students take three SL subjects alongside three HL subjects. Minimum passing grade for SL is 2.' },
    },
    {
      term: 'IA',
      en: { full: 'Internal Assessment', definition: 'Coursework marked by the classroom teacher, then externally moderated by the IB. Contributes 20–30% of the final DP subject grade. Not equivalent to CBSE practicals — the IB moderates rigorously and can adjust marks up or down.' },
    },
    {
      term: 'EE',
      en: { full: 'Extended Essay', definition: 'A 4,000-word independent research paper completed in Year 12–13, externally assessed by the IB. Graded A–E. Contributes up to 3 bonus diploma points together with ToK. Read by UK universities during applications.' },
    },
    {
      term: 'ToK',
      en: { full: 'Theory of Knowledge', definition: 'A DP core course examining how we know what we know across different disciplines. Graded A–E. With the EE, contributes up to 3 bonus points to the diploma total.' },
    },
    {
      term: 'CAS',
      en: { full: 'Creativity, Activity, Service', definition: 'A mandatory DP diploma requirement — not optional enrichment. Requires 150 documented hours across creative, physical, and service activities plus a reflection portfolio. Begins in Year 12. Cannot be waived.' },
    },
  ],

  pypBridge: {
    en: {
      title: 'The PYP → MYP Transition: What Families Should Know',
      intro: 'For families in India, the PYP to MYP transition often coincides with the age at which CBSE or ICSE students begin formal board exam preparation. The contrast can be stark: MYP reports look less structured than CBSE percentage reports, and the absence of a single overall percentage is jarring when extended family asks how the child is doing. This guide explains what actually changes at the transition point and what the first MYP year looks like.',
      changes: [
        { aspect: 'Report format', pyp: 'Narrative comments and portfolio evidence. No percentage or class rank. Progress described in learning dispositions and inquiry skills.', myp: 'Criterion scores A–D (0–8 each). Total score maps to grade 1–7. Structured, but fundamentally different from the percentage-based CBSE/ICSE reports relatives expect.' },
        { aspect: 'Assessment style', pyp: 'Ongoing observation and portfolios integrated throughout learning. Assessment is holistic and developmental.', myp: 'Formal summative assessments at defined points in each subject, assessed against specific criteria. External IB moderation at Year 10 (MYP 5). Students understand the criteria from Day 1.' },
        { aspect: 'Exam pressure and subject focus', pyp: 'No high-stakes exams. Learning is integrated across subjects. No pressure to narrow focus to "board subjects" versus others.', myp: 'No board exam preparation at this stage. Subjects remain broad. By contrast, CBSE Grade 7 students are already hearing about "science streams" versus "humanities streams." MYP Year 7 is still integrated across eight subject groups.' },
        { aspect: 'Long-term pathway clarity', pyp: 'IB pathway is not yet fully distinct from national curriculum in family conversation.', myp: 'From Year 7, families must understand that their child is on an IB track (MYP → DP), not a CBSE/ICSE board track. DP (Grades 11–12) is recognized by universities worldwide but is NOT the Indian 12th board exam. This clarity reduces anxiety later.' }
      ],
      firstYearNote: 'Year 7 is a transition year, and the report will not look like a CBSE/ICSE percentage report — it will be shorter, more criterion-focused, and will not include a single overall percentage. Do not interpret this as lower standards or lower clarity. MYP criterion assessment is actually more transparent about what your child can do and where they need to grow. In Year 7, focus on understanding what each criterion (A through D) means, and help your child see the connection between effort and growth in specific skills, not just percentages.',
      whatToAsk: [
        'What does my child need to do to move from their current criterion score to the next level in [subject]?',
        'How does the IB pathway differ from the CBSE/ICSE board pathway? What are the long-term university recognition implications?',
        'What is the transition plan between MYP Year 5 and DP Year 1? When do we make subject choices for the DP?'
      ],
    }
  },
}

