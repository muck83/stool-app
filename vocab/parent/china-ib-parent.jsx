/**
 * China Parent IB Module — English only
 * Helps Chinese parents at IB schools understand the pedagogy
 * their children are experiencing.
 *
 * Cultural anchors: Gaokao, 百分制 (100-point scale), 成绩排名 (class rank),
 * 补习班 (tutoring), 985/211 universities, 综合素质 (comprehensive quality),
 * 平时成绩 (routine school marks), WeChat parent groups.
 */

export const chinaIbParent = {
  id: 'parent-china-ib-001',
  slug: 'china-ib',
  country: 'china',
  program: 'IB',
  languages: ['en'],

  journeyStages: [
    {
      id: 'new',
      en: {
        label: 'New to IB',
        description: 'Typically your first year. Your child has moved from the Chinese national curriculum — PEP textbooks, structured end-of-term exams, and clear class rankings — into an IB school. The shift to open-ended inquiry, criterion-based grades, and no 百分制 (percentage marks) often arrives without enough explanation.',
        highlight: 'Start with Core Concepts — especially criterion-based grades and what they mean.',
      },
    },
    {
      id: 'settled',
      en: {
        label: 'Settling in',
        description: 'Year 2 or beyond. You have received multiple reports and are beginning to read the language — but the absence of class rank, the weighting of Internal Assessment, and the comparison to peers in Chinese schools may still create quiet anxiety.',
        highlight: 'Jump to Grade System — use the calculators to read reports accurately.',
      },
    },
    {
      id: 'pyp-myp',
      en: {
        label: 'PYP → MYP',
        description: 'Your child is around 10–12 years old, moving from Primary Years to Middle Years — or has just transferred into MYP from a Chinese primary school. Formal criterion-based grades appear for the first time and the contrast with Chinese school reporting can feel most disorienting right now.',
        highlight: 'See PYP first, then Grade System to understand the new grading.',
      },
    },
    {
      id: 'myp-dp',
      en: {
        label: 'MYP → DP',
        description: 'Your child is typically in Year 10 or 11. Subject selection, HL/SL choices, Internal Assessments, and predicted grades are the decisions that matter now. If Gaokao or Chinese domestic university entry is still relevant to your family, this is the stage where that conversation cannot be delayed.',
        highlight: 'Focus on Grade System — the DP calculator — and the university pathway question.',
      },
    },
  ],

  meta: {
    en: {
      title: 'Understanding Your Child\'s IB School',
      subtitle: 'A guide for Chinese families navigating international education',
      intro: 'IB schools look very different from schools following the Chinese national curriculum — not because they are less rigorous, but because they are built around different goals. If you have already encountered something that confused or unsettled you — a report with no class rank, a lesson without a textbook, an assessment that seemed open-ended — this guide is for that moment. It covers five core concepts, interactive grade calculators for MYP and DP, a PYP section, and two scenarios that show exactly how the same situation looks with and without this context.',
      reassurance: 'One thing that does not change: your child is still learning Mathematics, Science, and Languages to a high standard. The content depth in IB Mathematics and Sciences is rigorous — in many cases, IB HL Mathematics goes beyond what the Chinese national curriculum covers at that level. The differences are in how learning is structured, how assessment works, and how progress is reported — not in whether rigour exists. On Chinese language: IB schools offer Chinese Language and Literature (Chinese A) for native Chinese speakers. This is a full rigorous literature and language course — classical texts, essay writing, oral commentary — not a heritage language class. Your child\'s Chinese does not stop at the school gate.',
      chineseUniversityNote: 'For families in China or considering return: Chinese domestic universities present a genuine pathway challenge. Most 985 and 211 institutions require Gaokao scores for Chinese citizens — the IB Diploma is not a direct substitute. However, overseas Chinese students (华侨生) may be eligible for the 华侨生联考 pathway to select Chinese universities. Some institutions — including certain programmes at Peking University, Fudan, and others — have piloted IB recognition. Most Chinese IB students target universities in the UK, US, Australia, Canada, or Singapore, where the IB Diploma is well recognised. Speak with your school\'s university counsellor about current mainland Chinese acceptance policies before Year 10.',
      whatToAskNote: 'IB teachers not only welcome direct questions — they expect them. This is different from the 师道尊严 (teacher authority) norm in Chinese schools, where parents typically receive information rather than asking questions. In IB, asking a specific, evidence-based question is not disrespectful — it is how the system is designed to work. "My child scored 3 on Criterion C in Sciences — what does a 5 look like in practice?" is the right kind of question. Bring your child\'s most recent report to any meeting.',
    },
  },

  openingHook: {
    en: {
      situation: [
        'Your child\'s Year 8 report arrives. In MYP Sciences they received a 5 out of 7. The teacher has written four lines of feedback about investigation design and reasoning skills. There is no class rank. There is no percentage.',
        'You open the school\'s parent WeChat group. Another parent has shared a photo of their child\'s end-of-term exam result (期末考试) from a Chinese school nearby: 94 out of 100. The teacher has stamped 优秀 in red ink at the top. You are not sure the comparison is valid — different schools, different systems — but the 5 and the 94 sit side by side in your mind anyway.',
        'You try to calculate: 5 out of 7 is roughly 71%. In the Chinese system you grew up in, a 71 in Sciences would prompt a serious conversation. You realise you cannot explain to your child\'s grandparents what the grade actually means.',
      ],
      question: 'Is a 5 in IB Sciences something to address — or something to understand?',
      directAnswer: 'A 5 in IB Sciences is not 71%. It is "substantial achievement" against internationally published criteria. The percentage conversion is not valid and will mislead you every time. Your child may be performing considerably better than the number suggests. The sections below explain how to read IB grades accurately — and why the 百分制 frame, however intuitive, does not apply here.',
    },
  },

  cards: [
    {
      id: 'card-001',
      relevantAt: ['new', 'pyp-myp'],
      ibComponent: 'All programmes',
      en: {
        concept: 'Inquiry-Based Learning',
        concern: 'In Chinese schools, a skilled teacher covers the syllabus precisely, explains the correct method, and ensures students have the right answer before moving on. The PEP textbook is the shared reference — you could open it at home and check your child\'s understanding against it. When an IB class ends without a conclusion, or the teacher assigns an open-ended investigation rather than completing a chapter, it is reasonable to wonder whether learning has actually happened.',
        bridge: 'IB teachers don\'t use a single prescribed textbook because the objective is different: the programme is designed to develop the ability to use knowledge in new situations, not to recognise content on a standardised exam. Research in learning science consistently shows that students who must form and test their own reasoning retain understanding far longer than students who receive and repeat a teacher\'s explanation. The investigation is not a substitute for learning. It is a more cognitively demanding form of it. The 素质教育 (quality education) reform debate in China since the 1990s has been precisely about this: whether 应试教育 (exam-oriented education) produces graduates who can function in research and professional environments, or only in exam halls.',
        goal: 'The most competitive universities globally are looking for students who can contribute to research, handle ambiguous problems, and think beyond what they have been taught. A student who has spent years forming questions and testing ideas can handle an Oxford interview, a Harvard application essay, or a research seminar in ways that a student who only drilled past papers often cannot.',
        ibConnection: 'The IB Learner Profile attributes — particularly "inquirers," "thinkers," and "reflective" — are not peripheral values. They describe the dispositions the programme is engineered to build over years of practice.',
        whatToAsk: [
          '"How does this investigation connect to the assessment criteria?" — IB teachers can always map open-ended tasks to what is formally being examined.',
          '"Has the class covered all the required content for the final external examination?" — IB teachers are responsible for both inquiry and exam readiness. If coverage is on track, you will hear that clearly.',
        ],
      },
    },
    {
      id: 'card-002',
      relevantAt: ['settled', 'pyp-myp', 'myp-dp'],
      ibComponent: 'MYP & DP assessment',
      en: {
        concept: 'Criterion-Based Grades vs. 百分制',
        concern: 'The 百分制 is universally understood: 90分以上 is excellent, 75–89 is solid, 60–74 is average, below 60 is a concern. An IB report showing a 5 out of 7 — which converts to roughly 71% — would be a meaningful warning sign in that frame. The absence of a class rank (成绩排名) makes it harder still: with no 年级名次, there is no way to know whether your child is keeping up with peers or falling behind.',
        bridge: 'The 71% conversion is not valid. A 5 in IB Mathematics or Sciences means "substantial achievement" against internationally published criteria — it describes what your child can actually do, not where they sit relative to classmates. IB also does not publish class rankings. This is deliberate, not an omission: ranking students against each other creates incentives to outperform peers rather than develop genuine understanding. Two students can both score a 5 with very different criterion profiles — the grade tells you what your child can demonstrate, and the criterion breakdown tells you exactly where to focus.',
        goal: 'IB grades carry the same meaning at every school in the world. A 6 in Mathematics from Shanghai carries the same definition as a 6 from London or Toronto. This global consistency is what makes the credential credible to universities in the UK, US, Australia, and Singapore — and why it opens doors that a school-specific 百分制 cannot.',
        ibConnection: 'IB grade descriptors are published globally and fixed. Grade 4 = "adequate achievement." Grade 5 = "substantial achievement." Grade 6 = "accomplished achievement." Grade 7 = "excellent achievement." These are not percentages. Do not convert.',
        whatToAsk: [
          '"Which specific criterion is my child finding most difficult?" — this tells you far more than a percentage mark ever could.',
          '"What would a grade 6 performance look like in this subject?" — knowing the target precisely gives your child something concrete to aim for.',
        ],
      },
    },
    {
      id: 'card-003',
      relevantAt: ['settled', 'myp-dp'],
      ibComponent: 'DP Internal Assessment',
      en: {
        concept: 'Internal Assessment — Not 平时成绩',
        concern: 'In Chinese schools, 平时成绩 (in-class performance, mini-quizzes, homework marks) are low-stakes — they rarely change a student\'s overall outcome significantly. The 中考 or 高考 is what determines everything. If IB Internal Assessment works like 平时成绩, the logical approach is to focus energy on the final external examinations and treat the IA as manageable routine work.',
        bridge: 'IB Internal Assessment is not equivalent to 平时成绩. It is a substantial independent investigation — a lab report, mathematical exploration, oral commentary, or written portfolio depending on the subject — marked by the teacher and then externally moderated by the IB. The IB reviews a sample and can adjust the entire class\'s marks up or down. IA contributes 20–30% of the final diploma grade in each subject. A student who treats it as routine work and receives a weak moderated mark can lose enough points to change their university outcome — even with strong examination performance.',
        goal: 'The IA develops skills that university coursework, graduate research, and professional roles all require: designing an investigation, gathering and analysing evidence, and defending a conclusion without a template. Universities in the UK, US, and increasingly in Asia evaluate research potential from the earliest stages of an application. A student who arrives at university already knowing how to work independently has a structural advantage from Day 1 — and that advantage compounds through every degree and career stage that follows.',
        ibConnection: 'All IAs are externally moderated. A teacher\'s mark is reviewed by the IB, which adjusts cohort marks based on the moderated sample. A strong examination performance cannot compensate for a weak IA — they are separate components of the final grade.',
        whatToAsk: [
          '"When is the IA due, and what does a high-scoring IA look like in this subject?" — early planning is the single biggest predictor of IA quality.',
          '"Can I see an anonymised example of a 7-grade IA?" — most IB teachers can share what the top standard looks like.',
        ],
      },
    },
    {
      id: 'card-004',
      relevantAt: ['new', 'myp-dp'],
      ibComponent: 'DP Extended Essay / MYP Personal Project',
      en: {
        concept: 'Student Agency — Choosing the Topic',
        concern: 'In Chinese education, the teacher is the expert who provides the framework and the knowledge. A student who is asked to choose their own Extended Essay topic and research question can seem like they are being left to manage something important without proper guidance — or that the school is allowing them to choose something easy rather than something rigorous.',
        bridge: 'The Extended Essay requires a student to generate an original research question, scope their own investigation, and produce a 4,000-word research paper — supervised but not directed by a teacher. This is harder than a teacher-assigned topic, not easier. It requires intellectual courage and independent decision-making. A student who has genuinely wrestled with their own question for six months can explain it in a university interview with depth and conviction that a coached or prescribed answer cannot match. The independence is the point.',
        goal: 'UK universities — particularly Oxbridge and Russell Group institutions — read Extended Essays as evidence of independent intellectual engagement. US universities value the EE as part of a research narrative. Chinese graduate programmes at competitive institutions increasingly evaluate research potential from the earliest stages. The EE is the first long-form demonstration of that capacity.',
        ibConnection: 'The Extended Essay is externally assessed by the IB and graded A–E. Together with Theory of Knowledge, it contributes up to 3 bonus points to the diploma total. These are real points with real university consequences.',
        whatToAsk: [
          'Ask your child: "Why did you choose that question?" — if they can explain the reasoning clearly, the ownership is genuine.',
          'Ask the EE supervisor: "What are the most common reasons students receive a C or lower?" — supervisors know the failure patterns well and will share them.',
        ],
      },
    },
    {
      id: 'card-005',
      relevantAt: ['new', 'myp-dp'],
      ibComponent: 'DP Core — CAS',
      en: {
        concept: 'CAS — Not 课外活动',
        concern: 'In the Chinese academic environment, time spent on extracurricular activities is time not spent on 刷题 (drilling problems) or 备考 (exam preparation). Watching your child commit significant hours to volunteering, sport, or a creative project — when peers in Chinese schools are in 补习班 — is a genuine trade-off, not an irrational concern.',
        bridge: 'CAS is a graduation requirement. Your child cannot receive the IB Diploma without completing and documenting it — no exceptions. The IB makes it mandatory because the universities it targets have told the IB what they want: students who demonstrate genuine sustained commitment beyond the classroom. A student who has led a community project, maintained an athletic practice, or completed a creative endeavour over two years brings something to an application that no exam score can replicate.',
        goal: 'For families targeting Chinese domestic universities, be clear: CAS does not carry direct weight in 高考-based or Chinese admissions processes. Its value is the diploma it completes and the skills it builds — not admissions leverage within China. For international university applications, it provides genuine value and is actively considered. The resilience, leadership capacity, and ability to manage competing commitments that CAS develops are what determine success after university admission — and what employers look for for decades after graduation.',
        ibConnection: 'CAS is a mandatory DP requirement beginning in Year 12. It requires 150 documented hours across Creativity, Activity, and Service, plus a reflection portfolio. It cannot be waived.',
        whatToAsk: [
          'Ask your child: "What are you genuinely getting from this activity?" — authentic reflection matters more to the IB than hours logged.',
          'Ask the CAS coordinator: "Which activities tend to produce the strongest university application stories?" — not all CAS carries equal weight in practice.',
        ],
      },
    },
  ],

  reviewScenarios: [
    {
      id: 'review-001',
      en: {
        title: 'The WeChat group comparison',
        termsInPlay: ['Criterion-Based Grades', 'Class Rank'],
        situation: 'Your child\'s first full MYP report arrives. In the school parent WeChat group that evening, another parent shares their child\'s result from a nearby Chinese school: 班级前五 (top five in class), average 92分. Your child\'s report shows grades of 4, 5, 5, 4, 6 across five subjects. You calculate rough percentages: 57%, 71%, 71%, 57%, 86%. The average works out to 68%. You send a message to the group asking if other IB parents found the first report confusing.',
        situationNote: 'The WeChat parent group (家长群) is the natural forum for these comparisons — but it is also where the 百分制 frame can take over a conversation that the IB grade system was not designed for.',
        withUnderstanding: 'You recognise that IB grades are not percentages and that 4 means "adequate achievement" — not near-failure. You ask each subject teacher one question: "What specific evidence would move my child from a 4 to a 5 in this criterion?" Three months later, two of the 4s have moved to 5. The WeChat conversation was noise; the criterion conversation was signal.',
        withoutUnderstanding: 'The school schedules a meeting to explain IB grading. The parent-teacher meeting takes an hour and generates some defensiveness on both sides. The teacher is frustrated that the report was converted to percentages. You are frustrated that the school did not explain this at orientation. Both frustrations are valid. There is also a social cost that the meeting cannot fix: the question you sent to the WeChat group is already out there, and other parents now know you found the report confusing. In Chinese parent communities, your school choice and your child\'s performance are not entirely separate conversations. This guide exists for the moment before that meeting — and before that message.',
      },
    },
    {
      id: 'review-002',
      en: {
        title: 'The Gaokao question',
        termsInPlay: ['DP Diploma', 'University Pathways'],
        situation: 'Your child is in Year 10. A relative visiting from China asks which university your child is aiming for and whether they will take the Gaokao. You explain they are on the IB track. The relative asks: "But can they still get into Tsinghua or Fudan?" You say you are not sure. The relative mentions a family acquaintance whose child switched from an international school back to a Chinese school in Year 10 specifically to prepare for Gaokao. That evening you find yourself wondering whether you have already made a decision you didn\'t know you were making.',
        withUnderstanding: 'You speak with the school\'s university counsellor. You learn that Chinese citizens on an IB track generally cannot enter 985 universities via standard Gaokao — the IB Diploma is not equivalent to Gaokao for domestic admissions. However, your child is well-positioned for UK, US, and Australian universities where the IB is directly recognised, and for Chinese universities through the 华侨生联考 pathway if your family qualifies. You leave with a specific university list and a clear timeline. The question was real; the answer was available.',
        withoutUnderstanding: 'The uncertainty sits unresolved. In Year 11, when HL subject selection is finalised, you realise the Gaokao pathway is genuinely closed. The decision was made by default rather than by choice. The switch to a Chinese school would have needed to happen in Year 9 at the latest to allow adequate Gaokao preparation.',
      },
    },
  ],

  pypCards: [
    {
      id: 'pyp-001',
      ibComponent: 'PYP — Reporting',
      en: {
        concept: 'No 百分制 in PYP',
        concern: 'Chinese primary schools provide percentage marks, class ranks, and written grade summaries with clear numerical signals. PYP reports use narrative descriptions, learning portfolio observations, and IB Learner Profile assessments — but no numbers. Without a 分数 (score), it is genuinely difficult to know where your child stands.',
        bridge: 'PYP uses narrative reporting because at ages 3–11, a single number oversimplifies what a child can actually do. A narrative report tells you what your child understands, how they approach challenges, and where to build next — it is more diagnostic than a percentage mark, not less. Your child\'s teacher is assessing them continuously; the report simply presents the evidence differently. The absence of a number is a deliberate design choice.',
        goal: 'When your child enters MYP (around age 11), criterion-based grades appear for the first time. The habits of reflection and self-awareness built through PYP mean they arrive in that graded system already knowing how to think about their own learning — a structural advantage over students who have only ever received a score.',
        ibConnection: 'PYP reporting is built against the IB\'s own curriculum framework. Teachers assess against IB PYP standards — not against the Chinese national curriculum scope and sequence.',
        whatToAsk: [
          '"What specific evidence of progress have you seen from my child this term?" — narrative reports use standard language; asking for evidence makes the assessment concrete.',
          '"What is my child finding genuinely difficult right now?" — PYP teachers observe closely and will know.',
        ],
      },
    },
    {
      id: 'pyp-002',
      ibComponent: 'PYP — Units of Inquiry',
      en: {
        concept: 'Transdisciplinary Learning',
        concern: 'My child\'s class does not seem to be teaching separate subjects. This term they are studying "How We Organise Ourselves." I am not sure whether they are receiving structured Mathematics or Chinese/English — in Chinese primary school, the chapter sequence was clear and I could track progress against the PEP textbook at home.',
        bridge: 'PYP organises learning through transdisciplinary Units of Inquiry — themes that connect multiple subjects around a real-world concept. Mathematics, languages, science, and social studies are all being taught; they are woven together rather than delivered as isolated blocks. The curriculum coverage exists. The structure looks different because the packaging is different. Your child\'s teacher has a detailed scope and sequence and can show you exactly which skills are being developed in any given unit.',
        goal: 'Concepts learned in context — connected to something meaningful — transfer to new situations far more effectively than concepts learned in isolation. PYP builds the connected understanding that makes later, more specialised learning stick more deeply. This is also why Chinese education researchers have been studying inquiry-based models since the 课程改革 (curriculum reform) of the early 2000s.',
        ibConnection: 'PYP uses six transdisciplinary themes: Who We Are, Where We Are in Place and Time, How We Express Ourselves, How the World Works, How We Organise Ourselves, and Sharing the Planet. Every IB school uses the same framework globally.',
        whatToAsk: [
          '"Which Mathematics and language skills is this unit developing?" — teachers can map it precisely against the curriculum scope and sequence.',
          'Ask your child: "What question is your class investigating right now?" — if they can answer clearly, the learning is working.',
        ],
      },
    },
    {
      id: 'pyp-003',
      ibComponent: 'PYP Early Years',
      en: {
        concept: 'Play-Based Learning in Early Years',
        concern: 'My child comes home talking about activities and stories. At a Chinese kindergarten at this age, children are already practising writing 汉字 (Chinese characters), learning 拼音, and doing arithmetic. I am worried my child is falling behind children who are receiving structured academic instruction.',
        bridge: 'In PYP Early Years (ages 3–6), structured play is the curriculum — not a break from it. Children develop language, mathematical thinking, social reasoning, and inquiry skills through purposeful, teacher-designed activities. Both the IB and decades of developmental research agree: formal academic instruction before age 6–7 does not produce better long-term outcomes and often produces worse ones by undermining the intrinsic motivation that sustains learning over time. The 双减 (double reduction) policy debate in China reflects exactly this tension at the national level.',
        goal: 'Children who learn through purposeful play in early years develop stronger self-regulation, creativity, and internal motivation than those pushed into formal academics early. These qualities predict academic success through secondary school and beyond — and are much harder to develop once lost to early pressure.',
        ibConnection: 'PYP Early Years is aligned with international early childhood research, including OECD evidence on school readiness and the developmental frameworks underpinning Finland\'s early education system. The 双减 policy\'s intent to reduce early academic pressure was motivated by the same evidence base.',
        whatToAsk: [
          '"What learning objectives is this activity building toward?" — in PYP, play is always purposefully designed around curriculum outcomes.',
          'If you are concerned: "How is my child progressing in language development and mathematical thinking compared to developmental expectations for this age?"',
        ],
      },
    },
    {
      id: 'pyp-004',
      ibComponent: 'PYP Exhibition (Year 5/6)',
      en: {
        concept: 'The PYP Exhibition',
        concern: 'My child in Year 5 or 6 has been given a large independent project where they choose a real-world issue to investigate and present. This seems very unstructured for this age. Children at Chinese schools are being assessed through formal examinations.',
        bridge: 'The PYP Exhibition is the culminating assessed component of the entire Primary Years Programme — it is not a creative project. Students choose a real-world issue, research it independently, collaborate with peers, and present findings to the school community. It is assessed against IB criteria and is taken seriously as a graduation requirement. The openness is carefully scaffolded: the teacher guides process and ensures rigour, while the content and direction belong to the student.',
        goal: 'The Exhibition is explicitly designed to prepare students for the MYP Personal Project (Year 10) and the DP Extended Essay (Year 12). It is the first moment where everything PYP has built — inquiry skills, self-direction, collaboration, reflection — is demonstrated publicly and assessed formally.',
        ibConnection: 'The Exhibition is a mandatory, assessed component of PYP. Students must demonstrate all five essential elements: knowledge, concepts, skills, attitudes, and action.',
        whatToAsk: [
          '"What criteria will the Exhibition be assessed against?" — there is a clear rubric; the apparent openness is structured.',
          'Ask your child: "What action are you taking as part of your inquiry?" — the Exhibition requires a real-world action component, not just a presentation.',
        ],
      },
    },
    {
      id: 'pyp-005',
      ibComponent: 'PYP → MYP transition',
      en: {
        concept: 'Preparing for MYP',
        concern: 'My child is moving from PYP to MYP. I have heard the grading becomes more formal. I am not sure whether several years of inquiry and play-based learning has actually prepared them for something that will now be properly assessed.',
        bridge: 'The shift to MYP is real: subjects become separate disciplines, criterion-based grades appear, homework increases, and academic expectations rise. But PYP was deliberately designed to build exactly the foundations MYP requires — independent thinking, the ability to ask good questions, and comfort working through problems without a template. Students who have genuinely engaged with PYP arrive in MYP better prepared for criterion-based thinking than students transferring from content-heavy primary curricula. The transition is an adjustment; it is not a correction.',
        goal: 'Students from strong PYP backgrounds typically adapt to criterion-based assessment faster than students coming from Chinese national curriculum primary schools, because they already know how to think about their learning — not just how to reproduce content. The adjustment period is real. The foundation is there.',
        ibConnection: 'The IB designs PYP and MYP as a continuum. The inquiry approaches, Learner Profile attributes, and approaches-to-learning skills are explicitly carried forward into MYP and then into DP.',
        whatToAsk: [
          'Ask the MYP coordinator: "How will my child be supported in understanding criterion-based assessment in their first MYP year?" — most IB schools have a deliberate transition programme.',
          'In the first MYP term: "Does my child understand what each criterion in their subjects is actually asking them to demonstrate?" — if not, that is the conversation to have with each subject teacher.',
        ],
      },
    },
  ],

  gradingSystem: {
    myp: {
      en: {
        title: 'How MYP Grades Work',
        intro: 'MYP subjects do not use 百分制 or class ranks. Every subject uses four criteria, each marked out of 8. Those four scores add up to a total out of 32, which converts to a final grade from 1 to 7. A 5 is not 71%. A 4 is not 57%. Do not convert.',
        criteriaNote: 'The four criteria are labelled A, B, C, and D — and they measure different things in each subject. In MYP Mathematics, Criterion A is "Knowing and Understanding" and Criterion D is "Applying Mathematics in Real-Life Contexts." A student can score strongly on A and poorly on D. The report shows both separately, which tells you exactly where to focus — something a 百分制 mark never could.',
        boundaryNote: 'The conversion from a raw total (out of 32) to a final grade (1–7) uses grade boundaries set by each school. There is also variation at the subject level: Mathematics and Sciences tend to require higher raw scores for each grade, while Humanities and Arts boundaries are often lower. A 24/32 in MYP Mathematics may yield a different final grade than 24/32 in MYP Drama.',
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
          'A 4 in MYP is "adequate achievement" — it is a passing grade, not near-failure. Do not convert it to 57%. The 百分制 scale does not apply to IB grades.',
          'Your child can score very differently on each criterion within the same subject. A 7/8 on Criterion A and 3/8 on Criterion D gives you precise diagnostic information about where to focus — not just a single result.',
          'Grade boundaries vary by school and subject. Mathematics and Sciences typically have higher raw score thresholds per grade than Humanities. Use the calculator as a guide, not as an exact conversion.',
        ],
      },
    },

    dp: {
      en: {
        title: 'How DP Grades Work',
        intro: 'The IB Diploma is scored out of 45 points. Six subjects contribute up to 42 points (each graded 1–7), and the diploma core — Extended Essay and Theory of Knowledge — can add up to 3 bonus points. Most competitive universities globally require 36–40+ points.',
        subjectStructure: 'Students study six subjects: three at Higher Level (HL) and three at Standard Level (SL). HL subjects involve more content, more teaching hours, and deeper assessment. Many UK and US universities specify minimum HL grade requirements for competitive programmes.',
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
          'No subject grade below 2 (SL) or 3 (HL) — a single very low grade fails the diploma even if total points are sufficient.',
          'CAS requirements must be completed and signed off.',
          'No grade E in both the Extended Essay and Theory of Knowledge.',
          'No more than three grade 1s across all subjects.',
        ],
        watchOut: [
          'A student with 38 points who fails a condition (e.g., receives a 2 in an HL subject) does not receive the diploma. Points alone are not sufficient.',
          'Universities make conditional offers based on predicted grades, typically before final examinations. The conversation with subject teachers in Year 12 about predicted grades matters — treat it as seriously as any high-stakes exam preparation.',
          'Internal Assessment is externally moderated. A teacher\'s mark can be adjusted by the IB. A student who submits a weak IA and performs well in exams will still receive a lower final grade than their exam performance alone would suggest.',
          'If Chinese domestic university entry (Gaokao pathway) is relevant to your family, this decision needs to be made before Year 10 at the latest. The IB DP pathway and the Gaokao pathway require fundamentally different preparation and cannot both be pursued simultaneously.',
        ],
        universityContext: 'For international universities: 36–40+ points is competitive for UK Russell Group and most US universities; 40+ for the most selective. For Chinese domestic universities: most 985/211 institutions require Gaokao for Chinese citizens — the IB Diploma is not a direct substitute for most programmes. The 华侨生联考 pathway may be available for overseas Chinese students — check eligibility early. Speak with your school counsellor before Year 10 about which pathway your family is pursuing.',
      },
    },
  },

  nextSteps: {
    en: {
      default: [
        'Ask your child\'s teacher: "Is this formative or summative work?" — that one question changes how you read every piece of feedback.',
        'Find the assessment criteria for one of your child\'s subjects on the school\'s learning platform. Read criteria A–D and notice what each one measures — this is the vocabulary all future reports will use.',
        'Do not convert IB grades to 百分制. Ask instead: "What would a grade 6 look like in this subject?" — knowing the target precisely helps your child aim for it.',
      ],
      new: [
        'Ask your child tonight: "What question is your class exploring this week?" — not "what topic." If they can answer clearly, inquiry is working.',
        'Request the assessment criteria for one subject from the school. Read what each criterion A–D measures. This is the vocabulary all future reports will use, and understanding it now changes how you read every report from here on.',
        'Try the MYP Grade Calculator in the Grade System section with your child\'s most recent report scores — and resist the instinct to convert the output to a percentage.',
      ],
      settled: [
        'Find your child\'s most recent MYP report and enter the criterion scores into the Grade Calculator. Identify the lowest criterion and ask the subject teacher: "What specific evidence would move my child from a 4 to a 5 on this criterion?"',
        'If you are using outside tutoring (补习), tell the tutor which IB criteria your child struggles with and ask them to align their approach with IB assessment methods. Drilling past papers helps with some question types; it works against the analytical questions that carry the most marks.',
        'Review the DP Calculator even if DP is a year or two away. Understanding the diploma structure now prevents 百分制 anxiety from resurfacing when the stakes are higher.',
      ],
      'pyp-myp': [
        'Ask your child\'s MYP form tutor: "How will my child be supported in understanding criterion-based assessment this year?" — most IB schools have a deliberate transition programme.',
        'Try the MYP Grade Calculator with your child present — let them move the sliders. The goal is for them to understand their own scores, not just for you to interpret them.',
        'Read the PYP section to understand what your child has already built. Students who have genuinely engaged with PYP arrive in MYP better prepared for criterion-based thinking than parents often expect.',
      ],
      'myp-dp': [
        'If Chinese domestic university entry (Gaokao pathway or 华侨生联考) is relevant to your family\'s plans, speak with the school\'s university counsellor now — not in Year 12. The IB DP track and the Gaokao track require fundamentally different preparation, and the window to change course closes around Year 9–10.',
        'Open the DP Calculator and set your child\'s predicted grades. Check whether any subject is at risk of failing a diploma condition — this is more urgent than the total points number.',
        'Ask your child: "Have you chosen your Extended Essay topic?" — the earlier this conversation starts, the better the research quality. Late topic changes consistently produce weaker EEs.',
      ],
    },
  },

  glossary: [
    {
      term: 'IB',
      en: { full: 'International Baccalaureate', definition: 'The global organisation that designs and awards the PYP, MYP, and DP programmes. Schools are authorised by the IB and held to the same standards worldwide. The IB is not affiliated with any national curriculum, including China\'s national curriculum.' },
    },
    {
      term: 'PYP',
      en: { full: 'Primary Years Programme', definition: 'The IB programme for students aged 3–11 (roughly 幼儿园 to Grade 5/6). Uses inquiry-based, transdisciplinary learning. Narrative reports, no percentage marks or class rankings.' },
    },
    {
      term: 'MYP',
      en: { full: 'Middle Years Programme', definition: 'The IB programme for students aged 11–16 (roughly Grades 6–10). Introduces criterion-based grades (1–7) across eight subject groups. First point where formal grades appear — but no 百分制 and no class rank.' },
    },
    {
      term: 'DP',
      en: { full: 'Diploma Programme', definition: 'The IB programme for students aged 16–19 (Grades 11–12). Leads to the IB Diploma, scored out of 45. Widely recognised by universities in the UK, US, Australia, Canada, and Singapore. Not a substitute for Gaokao at most Chinese domestic universities.' },
    },
    {
      term: 'HL',
      en: { full: 'Higher Level', definition: 'One of two subject tiers in the DP. Students take three HL subjects — more content, more teaching hours, and deeper assessment than SL. Universities often specify minimum HL grade requirements for competitive programmes.' },
    },
    {
      term: 'SL',
      en: { full: 'Standard Level', definition: 'The second subject tier in the DP. Students take three SL subjects alongside three HL subjects. Minimum passing grade for SL is 2.' },
    },
    {
      term: 'IA',
      en: { full: 'Internal Assessment', definition: 'Coursework marked by the classroom teacher, then externally moderated by the IB. Contributes 20–30% of the final DP grade. Not equivalent to 平时成绩 — the IB moderates rigorously and adjusts marks up or down across cohorts.' },
    },
    {
      term: 'EE',
      en: { full: 'Extended Essay', definition: 'A 4,000-word independent research paper completed in Year 12–13, externally assessed by the IB. Graded A–E. Together with ToK, contributes up to 3 bonus diploma points. Read by UK and US universities during application review.' },
    },
    {
      term: 'ToK',
      en: { full: 'Theory of Knowledge', definition: 'A DP core course examining how we know what we know across different disciplines. Graded A–E. With the EE, contributes up to 3 bonus points to the diploma total.' },
    },
    {
      term: 'CAS',
      en: { full: 'Creativity, Activity, Service', definition: 'A mandatory DP diploma requirement — not optional 课外活动. Requires 150 documented hours across creative, physical, and community service activities plus a reflection portfolio. Begins in Year 12. Cannot be waived.' },
    },
  ],
}
