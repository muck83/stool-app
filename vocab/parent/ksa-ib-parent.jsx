/**
 * Saudi Arabia Parent IB Module — English only (Arabic support planned)
 * Helps Saudi and expat families in the Kingdom navigate IB schools.
 *
 * Cultural anchors: الثانوية العامة (Tawjihiyya/national exam), التقدير بالنسبة
 * المئوية (percentage grading), الترتيب في الفصل (class rank), رؤية 2030
 * (Vision 2030), التعليم الديني (religious education), اللغة العربية (Arabic
 * language), الوساطة (wasta), مجموعة الواتساب العائلي (family WhatsApp group),
 * KAUST, KFUPM, Saudi Aramco.
 */

export const ksaIbParent = {
  id: 'parent-ksa-ib-001',
  slug: 'ksa-ib',
  country: 'saudi-arabia',
  program: 'IB',
  languages: ['en'],

  journeyStages: [
    {
      id: 'new',
      en: {
        label: 'New to IB',
        description: 'Typically your first year. Your child has moved from the Saudi national curriculum — percentage marks, class ranks, formal semester exams — into an IB school. The shift to open-ended inquiry, criterion-based grades, and no percentage score often arrives without enough explanation at orientation. This guide starts with the five things that confuse Saudi families most.',
        highlight: 'Start with Core Concepts — especially how criterion-based grades work and what they actually mean.',
      },
    },
    {
      id: 'settled',
      en: {
        label: 'Settling in',
        description: 'Year 2 or beyond. You have received several reports and are beginning to read the language. But questions from extended family, comparisons with peers at government schools, and the university pathway question may still be creating pressure. The Grade System calculators are the most useful tools at this stage.',
        highlight: 'Jump to Grade System — use the calculators to read your child\'s reports accurately.',
      },
    },
    {
      id: 'pyp-myp',
      en: {
        label: 'PYP → MYP',
        description: 'Your child is around 10–12 years old, moving from Primary Years to Middle Years — or has just transferred into MYP from a Saudi national school. Formal criterion-based grades appear for the first time and the contrast with Saudi school reporting can feel most disorienting right now. PYP is also where Arabic language and Islamic education questions are often sharpest.',
        highlight: 'See PYP section first, then Grade System to understand the new grading pattern.',
      },
    },
    {
      id: 'myp-dp',
      en: {
        label: 'MYP → DP',
        description: 'Your child is typically in Year 10 or 11. Subject selection, HL/SL choices, and the university pathway decision are urgent now. The question of whether your child can access Saudi government universities — and what the Vision 2030 landscape means for IB graduates — needs a direct conversation with the school counsellor before Year 12.',
        highlight: 'Focus on Grade System (DP calculator) and Card 5 on university pathways. Do not defer the Saudi university conversation.',
      },
    },
  ],

  meta: {
    en: {
      title: 'Understanding Your Child\'s IB School',
      subtitle: 'A guide for Saudi and expat families navigating international education in the Kingdom',
      intro: 'IB schools look very different from Saudi national curriculum schools — not because they are less rigorous, but because they are built around different goals. If you have already encountered something that confused or unsettled you — a report with no percentage, a lesson without a textbook, an assessment that seemed open-ended, a subject called "Theory of Knowledge" — this guide is for that moment. It covers five core concepts, interactive grade calculators for MYP and DP, a PYP section, and two scenarios that show exactly what happens with and without this context.',
      reassurance: 'One thing that does not change: your child is still learning Mathematics, Sciences, and Languages to a high standard. IB HL Mathematics and Sciences are among the most rigorous curricula available at secondary level anywhere in the world. The differences are in how learning is structured, how assessment works, and how progress is reported — not in whether rigour exists. On Arabic language: IB schools offer Arabic Language and Literature (Arabic A) for native Arabic speakers. This is the same demanding literature course as English A — classical and modern texts, critical essay writing, oral commentary. Your child\'s Arabic does not have to stop at the school gate.',
      visionNote: 'Saudi Arabia\'s Vision 2030 explicitly identifies the development of a knowledge-based economy as a national priority — and the IB Diploma is specifically designed to produce exactly the independent thinkers, researchers, and internationally-oriented graduates that Vision 2030 calls for. Saudi Aramco, SABIC, NEOM, and the major Saudi professional services firms increasingly recruit graduates with IB backgrounds. The Ministry of Education has been expanding pathways for IB recognition. You are not choosing between tradition and progress — IB is what Vision 2030 looks like in a school.',
      whatToAskNote: 'IB teachers expect direct, evidence-based questions from parents. This may feel different from Saudi government school culture, where parent involvement typically means receiving information rather than asking specific questions. In IB, the question "My child scored 4 on Criterion C in Sciences — what does a 6 look like in practice?" is exactly the right kind of question. Bring your child\'s most recent report to any meeting. Teachers will have the criteria rubric in front of them and can answer specifically.',
    },
  },

  openingHook: {
    en: {
      situation: [
        'Your child\'s Year 8 MYP report arrives. Instead of a percentage mark and a class rank, there are four scores for each subject — each out of 8. The comments are detailed. There is no number like 87% or 92%. There is no position in class.',
        'You photograph it and send it to the family WhatsApp group. Your father asks where his grandchild ranks. Your brother-in-law who works at a government ministry asks if this school is "معترف بها" — properly recognised. Your sister says her son at the local government school just scored 94%. You type back that you\'re not sure how to compare the scores. Your father says he thinks you should look at this again.',
        'That night you try to convert the MYP score. Your child got a 5 out of 7 in Sciences. You think: 5 ÷ 7 = 71%. In Saudi government schools, 71% in Sciences would be a serious concern. You start wondering if you made the wrong school choice.',
      ],
      question: 'Was choosing an IB school a mistake?',
      directAnswer: 'A 5 in IB Sciences is not 71%. It is "substantial achievement" — a strong result against internationally published, externally verified criteria. The conversion you just did is not valid and will mislead you every time. Your child may be performing considerably better than the number suggests. The sections below explain how to read IB grades accurately — and why the percentage frame, however familiar, does not apply here.',
    },
  },

  cards: [
    {
      id: 'card-001',
      ibComponent: 'MYP/DP — Criterion-Based Assessment',
      en: {
        concept: 'There is no percentage — that is deliberate',
        concern: 'Saudi government schools provide clear percentage marks and class rankings. Without a percentage, how do I know if my child is doing well? A 5 out of 7 tells me nothing about whether they are at the top, in the middle, or struggling.',
        bridge: 'IB grades are not percentages and are not designed to be converted to percentages. A 5 in any subject means "substantial achievement" against internationally published criteria — it means your child has demonstrated strong understanding and application in that subject. The four criterion scores tell you something a percentage never could: exactly which dimension of the subject your child excels in and exactly where to focus improvement. A student who scores 7/8 on Criterion A (knowledge) and 3/8 on Criterion D (applying in context) has a specific, actionable development target. A percentage mark of 71% tells you nothing that useful.',
        goal: 'Understanding criterion-based assessment lets you have much more productive conversations with teachers. "What does a 6 look like on Criterion D?" is a better question than "why didn\'t they get 90%?" — and IB teachers are specifically trained to answer it. The system is diagnostic by design.',
        ibConnection: 'MYP uses four criteria per subject, each marked out of 8. Total out of 32 converts to a 1–7 grade using school-set boundaries. DP uses 1–7 per subject, six subjects maximum 42 points, plus up to 3 bonus points from Extended Essay and Theory of Knowledge.',
        whatToAsk: [
          '"What does a 6 look like on Criterion C in this subject?" — if your child scored a 4, the teacher can tell you exactly what stronger performance looks like.',
          '"Which criterion is my child\'s lowest this term, and what would move it?" — one targeted criterion conversation is more valuable than a general progress discussion.',
        ],
      },
    },
    {
      id: 'card-002',
      ibComponent: 'MYP/DP — Inquiry-Based Learning',
      en: {
        concept: 'Inquiry learning is rigorous — the structure is just less visible',
        concern: 'The lessons seem to have no fixed textbook and the teacher asks questions instead of explaining content. My child should be receiving structured instruction. Without a clear chapter sequence and tested content, how do I know they are actually learning the material?',
        bridge: 'IB teachers follow a detailed scope and sequence that covers all required content — the curriculum exists; it is just packaged differently. In inquiry learning, students encounter concepts through investigation, experimentation, and questioning rather than passive reception. The teacher is not absent from the process — they design the investigation, guide the thinking, and assess rigorously. This approach develops a different kind of understanding: one where knowledge can be applied to unfamiliar situations, not just reproduced on a familiar exam. The Islamic scholarly tradition — from Ibn Rushd\'s systematic reasoning to Al-Ghazali\'s investigation of the foundations of knowledge — has always held that genuine understanding comes through inquiry, not memorisation alone. IB takes the same position about learning.',
        goal: 'Students who learn through inquiry develop stronger transfer of knowledge — they can apply what they know to new problems. This is exactly what Saudi Vision 2030 employers and leading international universities are looking for. Saudi Aramco and NEOM engineers and analysts need to solve novel problems, not reproduce textbook answers. The inquiry habit, built across the IB years, is a professional skill.',
        ibConnection: 'IB\'s Approaches to Learning (ATL) framework defines five skill categories: thinking, communication, social, self-management, and research. These are developed deliberately across all subjects and explicitly assessed in the DP. They are the competencies that universities and employers identify as most critical for success.',
        whatToAsk: [
          '"Can you show me the scope and sequence for this subject?" — every IB teacher has one; it maps every concept and skill being developed across the year.',
          '"What content will my child need to know for this unit\'s summative assessment?" — there is always specific content knowledge being assessed, even in inquiry-led units.',
        ],
      },
    },
    {
      id: 'card-003',
      ibComponent: 'DP — Theory of Knowledge (TOK)',
      en: {
        concept: 'Theory of Knowledge does not teach doubt about faith',
        concern: 'My child tells me they have a class called "Theory of Knowledge" where they are asked to question how we know things. I am concerned that this class is teaching my child to doubt Islamic values and religious knowledge. Our faith is not something we question — it is the foundation of our family.',
        bridge: 'Theory of Knowledge is a course in epistemology — the study of how different kinds of knowledge work. It distinguishes between mathematical knowledge, scientific knowledge, historical knowledge, indigenous knowledge, and personal knowledge, among others. It does not ask students to question whether God exists or whether Islamic values are correct. What it does ask is: how does scientific inquiry produce knowledge? How does historical evidence work? What is the relationship between reason and faith? These questions have a long and deeply honoured tradition in Islamic scholarship. Al-Ghazali wrote "The Incoherence of the Philosophers" as exactly this kind of systematic epistemological inquiry. Ibn Sina built one of the most sophisticated knowledge frameworks in human history. TOK is, in many ways, asking the questions Islamic thinkers have asked for over a thousand years. Students who understand this find TOK enriches rather than threatens their faith.',
        goal: 'Many Saudi students write their TOK essay exploring Islamic epistemology — how the tradition of ijtihad (independent reasoning) produces religious knowledge, how the Hadith sciences developed standards of evidence, or how Islamic scholars distinguished between certain and probable knowledge. The IB accepts and values these perspectives. The course is not hostile to faith; it is interested in how all knowledge — including religious knowledge — actually works.',
        ibConnection: 'TOK is a mandatory two-year DP course that produces an oral presentation and a 1,600-word essay assessed by the IB. Together with the Extended Essay, it contributes up to 3 bonus points toward the 45-point diploma. It is the component that most distinguishes IB from A-levels and most Saudi-context international examinations.',
        whatToAsk: [
          '"Can you give me an example of a TOK question that explores religious or Islamic knowledge?" — most experienced TOK teachers can immediately give examples of strong essays grounded in faith traditions.',
          '"What does my child\'s TOK journal cover this term?" — the journal is ongoing; seeing the actual content usually resolves parent concerns more quickly than any general explanation.',
        ],
      },
    },
    {
      id: 'card-004',
      ibComponent: 'DP/MYP — Language A',
      en: {
        concept: 'Arabic A: your child\'s Arabic does not stop at the school gate',
        concern: 'If my child studies primarily in English, will their Arabic suffer? Will they lose fluency, accuracy, and connection to classical Arabic? And what about Quranic Arabic — is there any space for that in an IB education?',
        bridge: 'IB offers Arabic Language and Literature (Arabic A) as a full Language A course for native Arabic speakers. This is the same demanding literary curriculum as English A — students study classical Arabic poetry, modern Arabic prose, critical analysis, oral commentary, and extended writing. It is not a heritage language class; it is a rigorous academic course that deepens Arabic literacy. Many Saudi IB students find their formal Arabic writing improves significantly through Arabic A because the course demands analytical precision that conversational Arabic does not. On Quranic Arabic: students studying pre-Islamic poetry, classical prose, and the formal Arabic literary tradition are working with the language closest to Quranic Arabic. Arabic A builds exactly the classical foundation that Quranic literacy requires.',
        goal: 'Saudi IB students who take Arabic A graduate with a formal, analytically rigorous Arabic literacy that complements their English proficiency. This bilingual academic foundation is highly valued by Saudi universities, Saudi Aramco, and Vision 2030 institutions. The ability to operate in both Arabic and English at an academic level is a genuine professional advantage — and IB Arabic A builds that intentionally.',
        ibConnection: 'Language A in any language is assessed at the highest level of IB\'s language framework. Arabic A students take the same external examinations as English A students, assessed by the IB against global standards. Arabic is one of the most commonly chosen Language A options globally. Schools in Saudi Arabia, the UAE, and Egypt offer full Arabic A instruction.',
        whatToAsk: [
          '"Does the school offer Arabic A, and what texts are on the reading list this year?" — the reading list tells you the quality of the literary programme immediately.',
          '"How is my child\'s written Arabic assessed separately from their English skills?" — Arabic A has independent assessment criteria, not dependent on English performance.',
        ],
      },
    },
    {
      id: 'card-005',
      ibComponent: 'DP — CAS (Creativity, Activity, Service)',
      en: {
        concept: 'CAS is a graduation requirement, not an activity calendar',
        concern: 'My child spends significant time on activities, sports, and community service as part of something called CAS. This feels like time taken from studying. Saudi university admissions are competitive — every hour not spent on core academics is a cost.',
        bridge: 'CAS — Creativity, Activity, Service — is a mandatory DP requirement. Without completing and documenting CAS with a supervisor, a student cannot receive the IB Diploma, regardless of their subject scores. The IB made this mandatory because the leading universities it serves told the IB exactly what they wanted: students who demonstrate genuine commitment outside the classroom. A Saudi student who leads a community project in their neighbourhood, develops a creative output, and maintains a physical discipline brings something to a university application that no exam result alone can replicate. This is also consistent with Islamic values around service (خدمة المجتمع) and developing the whole person.',
        goal: 'For Saudi students targeting Vision 2030 institutions, Saudi Aramco\'s leadership programmes, or international universities: CAS is not a distraction from qualifications — it is part of the qualification. Saudi Aramco\'s scholarship recipients are expected to demonstrate leadership and service, not just academic records. The habits of initiative and contribution that CAS builds are exactly what these institutions select for.',
        ibConnection: 'CAS is a mandatory DP requirement from Year 12. It requires documented work across creativity, physical activity, and service, totalling approximately 150 hours, with a portfolio of reflections. It cannot be waived.',
        whatToAsk: [
          '"What CAS experiences is my child planning, and who is their CAS supervisor?" — the supervisor relationship is important; a good supervisor actively guides the reflection quality.',
          '"How does the school document CAS completion for university applications?" — strong programmes produce a CAS portfolio that actively supports the application narrative.',
        ],
      },
    },
  ],

  reviewScenarios: [
    {
      id: 'review-001',
      en: {
        title: 'The Family WhatsApp Group',
        termsInPlay: ['Criterion-based grades', 'Class rank'],
        situation: 'Your child\'s first complete MYP report arrives at the end of Year 8. You take a photo and share it to the extended family WhatsApp group, asking if anyone knows how to read IB scores. Your father asks where his grandchild ranks in the class. Your brother — who has a son at a government school with 95% average — says the scores look low to him. Your wife\'s uncle, a senior official at the Ministry of Education, asks whether the school is properly accredited by the Saudi government.',
        situationNote: 'Family WhatsApp groups are where these conversations happen in Saudi culture — and they are the right place for them. The question is whether the group has the context to interpret what they are seeing.',
        withUnderstanding: 'You explain to the group that IB grades run from 1–7, not percentages, and that a 5 means "substantial achievement" — a strong result. You share the criterion breakdown with your father and explain that his grandchild scored 7/8 on knowledge but 4/8 on application in context — which means one specific conversation with the teacher will help. Your uncle asks about accreditation: you can confirm the school is IB-authorised, which is an internationally recognised standard. Your brother\'s 95% comparison doesn\'t apply — different systems, different scales. The group conversation ends with clarity rather than doubt.',
        withoutUnderstanding: 'You cannot explain the scores confidently to the group. Your father\'s question about class rank goes unanswered. Your brother\'s 95% comparison sits unaddressed and starts to feel meaningful. Your uncle\'s question about government accreditation makes you uncertain — you\'re not sure what "IB authorised" means versus Saudi Ministry of Education approval. The WhatsApp group moves on, but the doubt remains. You book a meeting with the school to get answers — which is the right move, but it comes from anxiety rather than curiosity.',
      },
    },
    {
      id: 'review-002',
      en: {
        title: 'The Tawjihiyya Question',
        termsInPlay: ['DP Diploma', 'University pathways', 'Saudi national curriculum'],
        situation: 'Your child is in Year 10. At an extended family gathering (عشاء العيلة), your father-in-law asks your child which university they are planning to attend and whether they will sit for the الثانوية العامة. Your child says they are doing IB, not the Tawjihiyya. The father-in-law turns to you: "So they cannot apply to Saudi universities?" You say you think some universities accept IB, but you are not certain. The next day you realise you have never had a specific conversation with the school about this.',
        situationNote: 'This question usually arrives at a family gathering, not in a school meeting room. The answer matters — and the time to get it is before Year 11, not after HL subject selection.',
        withUnderstanding: 'You meet with the school\'s university counsellor. You learn: students on the IB track at international schools typically do not sit the Tawjihiyya, which means direct entry to Saudi government universities (King Saud, King Abdulaziz, KFUPM) following the standard track is not available. However: KAUST accepts IB and specifically values it. Some private Saudi universities accept IB. Saudi Aramco\'s scholarship and employment programmes specifically recruit IB graduates. Most Saudi IB families are targeting UK, US, Australian, and UAE universities — where the IB Diploma is very well recognised. If your family has a specific Saudi government university in mind, this conversation needs to happen now, in Year 10, while options remain open. You leave with a clear map.',
        withoutUnderstanding: 'The uncertainty sits. In Year 12, when DP subject selection is locked and examinations are approaching, your father-in-law asks the question again at another family gathering. You still cannot answer it confidently. The path your child is on has been decided by default. If there was a Saudi government university pathway your family needed, the window to act has closed.',
      },
    },
  ],

  pypCards: [
    {
      id: 'pyp-001',
      ibComponent: 'PYP — Assessment',
      en: {
        concept: 'No percentage marks in PYP',
        concern: 'Saudi primary schools give clear percentage marks, and I can see exactly where my child stands relative to grade-level expectations. The PYP report uses descriptive language and learning portfolio observations, but there are no numbers. Without a score, I cannot tell whether my child is at the top of the class or struggling.',
        bridge: 'PYP uses narrative reporting because at ages 3–11, a single number oversimplifies what a child is actually learning. A narrative report tells you what your child understands, how they approach challenges, and where to develop next — it is more diagnostic than a percentage, not less. The teacher is assessing continuously; the report presents the evidence differently. When your child enters MYP (around age 11), criterion-based grades appear. The habits of reflection and self-assessment built in PYP mean they enter that graded system knowing how to think about their own learning.',
        goal: 'Students who arrive in MYP from PYP backgrounds adapt to criterion-based assessment more quickly than students transferring from content-heavy primary schools, because they already understand learning as a process — not just a result. The apparent absence of data in PYP is not a signal that nothing is being measured.',
        ibConnection: 'PYP reporting is built against IB\'s own PYP curriculum standards, not the Saudi national curriculum scope and sequence. Teachers assess against IB PYP learning outcomes and can show you exactly which competencies are being evaluated.',
        whatToAsk: [
          '"What specific evidence of progress have you seen from my child this term?" — asking for evidence makes the narrative concrete.',
          '"Which areas of the IB Learner Profile is my child developing most strongly right now, and which are still developing?" — the Learner Profile is the framework underlying PYP assessment.',
        ],
      },
    },
    {
      id: 'pyp-002',
      ibComponent: 'PYP — Arabic Language',
      en: {
        concept: 'Is my child still learning Arabic in a PYP school?',
        concern: 'The school operates primarily in English. My child comes home speaking more English than Arabic. I am worried that their formal Arabic is weakening — and that their connection to the Quran and classical Arabic will be affected by years in an English-medium environment.',
        bridge: 'Arabic language instruction in a PYP school depends significantly on how the school structures its language programme. Most IB schools in Saudi Arabia and the wider Gulf offer Arabic as a language of instruction or as a rigorous parallel language programme. In a well-run PYP school, Arabic literacy is developed continuously alongside English — not sacrificed to it. Ask the school specifically: what is the weekly Arabic language instruction time, and against which standards is it assessed? When your child enters MYP and eventually DP, Arabic A is available as a full Language A course — and that is where Arabic academic literacy deepens significantly.',
        goal: 'A child who progresses through PYP, MYP, and DP with Arabic A comes out with a formal, analytically rigorous Arabic literacy — classical texts, essay precision, oral commentary — that many students from Arabic-medium government schools do not develop at the same depth. The risk is not IB itself; it is how any individual school manages the Arabic programme. This is the question to investigate specifically at your school.',
        ibConnection: 'IB schools must offer at least two languages across PYP, MYP, and DP. In Arabic-speaking contexts, Arabic as a Language A or Language B option must be available. Check the school\'s language policy document — every IB school is required to have one.',
        whatToAsk: [
          '"How many hours per week does my child receive Arabic instruction, and against which curriculum standards?" — this is the critical question.',
          '"Does the school offer Arabic A in DP, and what literary texts are on the reading list?" — the text list tells you immediately whether the Arabic programme is rigorous.',
        ],
      },
    },
    {
      id: 'pyp-003',
      ibComponent: 'PYP — Values and Identity',
      en: {
        concept: 'Islamic values and identity in an IB school',
        concern: 'Saudi national schools include Islamic Studies as a core subject. IB schools do not have a required Islamic Studies curriculum. I worry that my child will grow up without proper religious grounding — and that international classmates and Western values will dilute their identity.',
        bridge: 'IB schools in Saudi Arabia typically offer Islamic Studies as part of their local curriculum requirement — the Saudi Ministry of Education mandates it for Saudi students at licensed schools. Check with your school directly about what is offered and how many hours are taught. On values: the IB Learner Profile — the framework underlying all IB programmes — emphasises being principled, caring, reflective, and open-minded. These are not Western values; they are human values, and they are deeply compatible with Islamic ethics. The IB does not ask students to abandon their faith tradition — it asks them to engage thoughtfully with a complex world. Many of the most confident, articulate Muslims you will meet at global universities are IB graduates.',
        goal: 'Identity in an internationally educated child is not weakened by exposure — it is strengthened by being explicitly articulated in a context where it matters. Saudi IB students who can explain their values, defend their perspective in a seminar, and engage respectfully with different worldviews come home from university with their identity reinforced, not diluted. The IB environment — when well-run — produces exactly this.',
        ibConnection: 'IB schools in Saudi Arabia operate under both IB authorisation and Ministry of Education licensing. This means Islamic Studies requirements for Saudi nationals are a condition of the school\'s operating licence. The school can show you specifically how this is covered.',
        whatToAsk: [
          '"How many hours per week does my child receive Islamic Studies, and who teaches it?" — this is a direct, answerable question.',
          '"How does the school support Muslim students during Ramadan and around prayer times?" — how a school handles this tells you a great deal about how seriously it takes its Muslim students.',
        ],
      },
    },
    {
      id: 'pyp-004',
      ibComponent: 'PYP — Student Agency',
      en: {
        concept: 'Student choice and inquiry in early years',
        concern: 'My child seems to be making a lot of choices in their learning — choosing topics, designing their own investigations, directing their own projects. In Saudi schools, the teacher is the authority and the curriculum is clear. This level of student choice feels undisciplined, and I worry my child is not developing the respect for authority and structured learning that they will need later.',
        bridge: 'Student agency in PYP does not mean unlimited freedom — every unit has clear learning outcomes, and the teacher is always guiding the inquiry. The choice is in how students approach the investigation, not whether the curriculum is covered. On respect for authority: IB students learn to engage with teacher expertise through genuine intellectual exchange — which is a deeper form of respect than passive reception. The tradition of asking the teacher a good question (as the Prophet ﷺ encouraged through the culture of seeking knowledge, العلم) is exactly what PYP builds. The goal is students who are curious, focused, and able to take direction — not students who are passive.',
        goal: 'Students who develop agency in PYP — the ability to initiate, plan, and pursue a question — arrive in secondary school with stronger academic motivation and better independent study habits. These are the students who succeed in DP and at university, where no one is standing over them. Early structured freedom is the investment.',
        ibConnection: 'PYP\'s central concept is the Learner Profile — the set of attributes the IB aims to develop: inquirer, thinker, communicator, principled, open-minded, caring, risk-taker, balanced, reflective, and knowledgeable. Student agency develops all of these simultaneously.',
        whatToAsk: [
          '"What learning outcome is my child\'s current investigation building toward?" — the teacher always has an answer to this; it demonstrates the structure underneath the choice.',
          '"How does the class come together to share findings?" — the collaborative presentation of inquiry is where individual agency becomes collective learning.',
        ],
      },
    },
    {
      id: 'pyp-005',
      ibComponent: 'PYP → MYP transition',
      en: {
        concept: 'Preparing for MYP',
        concern: 'My child is moving from PYP to MYP. I am concerned that years of inquiry and narrative reporting have not prepared them for something that will now be properly graded. When I compare them to students from Saudi national schools entering at the same age, I worry the PYP children are behind.',
        bridge: 'The shift to MYP is real: subjects become separate disciplines, criterion-based grades appear, homework volume increases, and academic expectations rise significantly. But PYP is specifically designed to build the foundations MYP requires — inquiry skills, self-direction, and the ability to think through problems without a template. Students who have genuinely engaged with PYP arrive in MYP better prepared for criterion-based analytical thinking than students from content-heavy primary curricula. What they may be less prepared for is the sheer volume of content — but that gap closes quickly. The conceptual tools are the harder thing to develop, and PYP builds them.',
        goal: 'Saudi students transferring from national schools into MYP typically have strong content knowledge but need time to adjust to being assessed on analytical thinking rather than content recall. PYP students are often the reverse — the analytical thinking is there, the content confidence comes quickly. Neither background is better; they are different advantages at the start of a shared journey.',
        ibConnection: 'The IB explicitly designs PYP and MYP as a connected continuum. The inquiry approaches, Learner Profile attributes, and Approaches to Learning skills are carried forward from PYP into MYP and then into DP. The transition is an escalation, not a reset.',
        whatToAsk: [
          '"How will the school support my child\'s transition to criterion-based assessment in Year 1 of MYP?" — most IB schools have a deliberate transition programme; ask to see it.',
          '"Which subjects are assessed most differently from how my child experienced them in PYP?" — the teacher can identify where the adjustment will be largest and plan accordingly.',
        ],
      },
    },
  ],

  gradingSystem: {
    myp: {
      en: {
        title: 'How MYP Grades Work',
        intro: 'MYP subjects do not use percentage marks or class ranks. Every subject uses four criteria, each marked out of 8. Those four scores add up to a total out of 32, which converts to a final grade from 1 to 7. A 5 is not 71%. A 4 is not 57%. Do not convert.',
        criteriaNote: 'The four criteria are labelled A, B, C, and D — and they measure different things in each subject. In MYP Mathematics, Criterion A is "Knowing and Understanding" and Criterion D is "Applying Mathematics in Real-Life Contexts." A student can score strongly on A and poorly on D. The report shows both separately, which tells you exactly where to focus — something a percentage mark never could.',
        boundaryNote: 'The conversion from a raw total (out of 32) to a final grade (1–7) uses grade boundaries set by each school. There is also variation at the subject level: Mathematics and Sciences tend to require higher raw scores for each grade than Humanities and Arts. A 24/32 in MYP Mathematics may yield a different final grade than 24/32 in MYP Drama.',
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
          'A 4 in MYP is "adequate achievement" — it is a passing grade, not near-failure. Do not convert it to 57%. Percentage scales do not apply to IB grades.',
          'Your child can score very differently on each criterion within the same subject. A 7/8 on Criterion A and 3/8 on Criterion D gives precise diagnostic information about where to focus — not just a single result.',
          'Grade boundaries vary by school and subject. Mathematics and Sciences typically require higher raw scores per grade than Humanities. Use the calculator as a guide, not an exact conversion.',
        ],
      },
    },

    dp: {
      en: {
        title: 'How DP Grades Work',
        intro: 'The IB Diploma is scored out of 45 points. Six subjects contribute up to 42 points (each graded 1–7), and the diploma core — Extended Essay and Theory of Knowledge — can add up to 3 bonus points. Most competitive universities globally require 36–40+ points.',
        subjectStructure: 'Students study six subjects: three at Higher Level (HL) and three at Standard Level (SL). HL subjects involve more content, more teaching hours, and deeper assessment. Many UK, US, and international universities specify minimum HL grade requirements for competitive programmes. Saudi Aramco scholarship programmes typically expect strong HL scores in the relevant technical disciplines.',
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
          'Universities make conditional offers based on predicted grades before final examinations. The conversation with subject teachers in Year 12 about predicted grades is high-stakes — treat it as seriously as any final exam preparation.',
          'Internal Assessment is externally moderated. A teacher\'s mark can be adjusted by the IB. A student who submits a weak IA and performs well in exams will still receive a lower final grade than their exam performance alone would suggest.',
          'If Saudi national university entry is relevant to your family, this decision needs to be made before Year 10. The IB DP pathway and the Tawjihiyya (الثانوية العامة) pathway require fundamentally different preparation and cannot both be pursued simultaneously.',
        ],
        universityContext: 'For international universities: 36–40+ points is competitive for UK Russell Group, most US universities, and leading Australian and UAE institutions; 40+ for the most selective. For Saudi institutions: KAUST explicitly recognises and values the IB Diploma. Some private Saudi universities accept IB. Most Saudi national universities require the Tawjihiyya for standard admission — speak with your school counsellor before Year 10 about which pathway fits your family\'s goals. Saudi Aramco scholarship and graduate recruitment programmes specifically value IB Diploma holders.',
      },
    },
  },

  nextSteps: {
    en: {
      default: [
        'Ask your child\'s teacher: "Is this assessment formative or summative?" — one question changes how you read every piece of feedback.',
        'Find your child\'s assessment criteria for one subject on the school\'s learning platform. Read criteria A–D and note what each one measures — this is the language every future report will use.',
        'Do not convert IB grades to percentages. Ask instead: "What does a 6 look like in this subject?" — knowing the target clearly helps your child aim accurately.',
      ],
      new: [
        'Tonight, ask your child: "What question is your class investigating this week?" — not "what topic." If they can answer clearly, inquiry learning is working.',
        'Ask the school for one subject\'s assessment criteria. Read what criteria A–D measure. This is the language every future report will use — understanding it now changes how you read every report that follows.',
        'Use the MYP grade calculator in the Grade System section with your child\'s most recent report scores — and resist the impulse to convert the output to a percentage.',
      ],
      settled: [
        'Find your child\'s most recent MYP report and enter the criterion scores into the calculator. Identify the lowest criterion, then ask the subject teacher: "What specific evidence would move my child from a 4 to a 5 on this criterion?"',
        'If you are using outside tutoring (مدرس خصوصي), tell the tutor which IB criteria your child is struggling with and ask them to align their teaching approach with how IB assesses those skills. Drilling content helps on some question types; on the analytical questions that carry the most marks, it can work against the student.',
        'Even if DP is still one or two years away, look at the DP calculator now. Understanding the diploma structure prevents percentage-thinking from returning under pressure in Year 12.',
      ],
      'pyp-myp': [
        'Ask your child\'s MYP homeroom teacher: "How will you support my child in understanding criterion-based assessment in their first MYP year?" — most IB schools have a specific transition programme.',
        'Use the MYP grade calculator with your child — let them move the sliders. The goal is for them to understand their own grades, not just for you to interpret them.',
        'Read the PYP section to understand what your child has already built. Students who genuinely engaged with PYP arrive in MYP more prepared for analytical thinking than most parents expect.',
      ],
      'myp-dp': [
        'If Saudi national university entry (Tawjihiyya pathway) is relevant to your family\'s plans, speak with the school\'s university counsellor now — not in Year 12. The IB DP track and the Tawjihiyya track require fundamentally different preparation, and the window to change course closes around Year 9–10.',
        'Open the DP Calculator and enter your child\'s predicted grades. Check whether any subject is at risk of failing a diploma condition — this is more urgent than the total points number.',
        'Ask your child: "Have you chosen your Extended Essay topic?" — the earlier this conversation starts, the better the research quality. Late topic changes consistently produce weaker EEs.',
      ],
    },
  },

  glossary: [
    {
      id: 'gloss-001',
      term: 'IB',
      en: { full: 'International Baccalaureate', definition: 'The global organisation that designs and awards the PYP, MYP, and DP programmes. Schools are authorised by the IB and held to the same standards worldwide. The IB is not affiliated with any national curriculum, including Saudi Arabia\'s national curriculum (المنهج الوطني).' },
    },
    {
      id: 'gloss-002',
      term: 'PYP',
      en: { full: 'Primary Years Programme', definition: 'The IB programme for students aged 3–11 (roughly KG to Grade 5/6). Uses inquiry-based, transdisciplinary learning. Narrative reports, no percentage marks or class rankings. Arabic language instruction is typically available as part of the school\'s language programme.' },
    },
    {
      id: 'gloss-003',
      term: 'MYP',
      en: { full: 'Middle Years Programme', definition: 'The IB programme for students aged 11–16 (roughly Grades 6–10). Introduces criterion-based grades (1–7) across eight subject groups. First point where formal grades appear — but no percentage marks and no class rank.' },
    },
    {
      id: 'gloss-004',
      term: 'DP',
      en: { full: 'Diploma Programme', definition: 'The IB programme for students aged 16–19 (Grades 11–12). Leads to the IB Diploma, scored out of 45. Widely recognised by universities in the UK, US, Australia, UAE, and internationally. Not a direct substitute for the Tawjihiyya (الثانوية العامة) at most Saudi government universities — check with your school counsellor about the specific universities your family is targeting.' },
    },
    {
      id: 'gloss-005',
      term: 'HL',
      en: { full: 'Higher Level', definition: 'One of two subject tiers in the DP. Students take three HL subjects — more content, more teaching hours, and deeper assessment than SL. Universities often specify minimum HL grade requirements for competitive programmes. Saudi Aramco scholarship programmes typically expect strong HL results.' },
    },
    {
      id: 'gloss-006',
      term: 'SL',
      en: { full: 'Standard Level', definition: 'The second subject tier in the DP. Students take three SL subjects alongside three HL subjects. Minimum passing grade for SL is 2.' },
    },
    {
      id: 'gloss-007',
      term: 'IA',
      en: { full: 'Internal Assessment', definition: 'Coursework marked by the classroom teacher, then externally moderated by the IB. Contributes 20–30% of the final DP grade. Not equivalent to homework or classwork participation marks — the IB moderation process adjusts marks across all schools globally.' },
    },
    {
      id: 'gloss-008',
      term: 'EE',
      en: { full: 'Extended Essay', definition: 'A 4,000-word independent research paper completed in Year 12–13, externally assessed by the IB. Graded A–E. Together with ToK, contributes up to 3 bonus diploma points. UK and US universities read the EE during applications. Saudi students may choose to anchor their EE in Islamic studies, Arabic literature, or Saudi history and social science topics.' },
    },
    {
      id: 'gloss-009',
      term: 'ToK',
      en: { full: 'Theory of Knowledge', definition: 'A mandatory two-year DP course exploring how different kinds of knowledge work — mathematical, scientific, historical, indigenous, and personal. Does not ask students to question religious faith; explores how knowledge is produced, evaluated, and communicated across disciplines. Islamic epistemology (the \'ilm tradition, ijtihad, Hadith sciences) is a valid and valued area of inquiry within ToK. Together with EE, contributes up to 3 bonus diploma points.' },
    },
    {
      id: 'gloss-010',
      term: 'CAS',
      en: { full: 'Creativity, Activity, Service', definition: 'A mandatory DP requirement. Students document approximately 150 hours across creativity (artistic or entrepreneurial pursuits), activity (physical challenges), and service (community contribution). Cannot be waived — without signed CAS completion, the diploma is not awarded. Islamic values of service to community (خدمة المجتمع) and developing the whole person align closely with CAS\'s intent.' },
    },
  ],
};
