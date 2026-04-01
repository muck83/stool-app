/**
 * China Parent IB Module — English + Chinese (zh)
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
  languages: ['en', 'zh'],

  journeyStages: [
    {
      id: 'new',
      en: {
        label: 'New to IB',
        description: 'Typically your first year. Your child has moved from the Chinese national curriculum — PEP textbooks, structured end-of-term exams, and clear class rankings — into an IB school. The shift to open-ended inquiry, criterion-based grades, and no 百分制 (percentage marks) often arrives without enough explanation.',
        highlight: 'Start with Core Concepts — especially criterion-based grades and what they mean.',
      },
      zh: {
        label: '初入IB',
        description: '通常是第一年。您的孩子从中国国家课程——人教版教材、有序的期末考试、清晰的班级排名——转入了一所IB学校。开放式探究、基于维度的成绩评定，以及没有百分制，这些转变往往在缺乏足够解释的情况下就已发生。',
        highlight: '从核心概念开始——尤其是基于维度的成绩评定及其含义。',
      },
    },
    {
      id: 'settled',
      en: {
        label: 'Settling in',
        description: 'Year 2 or beyond. You have received multiple reports and are beginning to read the language — but the absence of class rank, the weighting of Internal Assessment, and the comparison to peers in Chinese schools may still create quiet anxiety.',
        highlight: 'Jump to Grade System — use the calculators to read reports accurately.',
      },
      zh: {
        label: '逐渐适应',
        description: '第二年或以后。您已经收到多份成绩单，开始读懂这套语言——但没有班级排名、内部评估的权重，以及与国内学校同龄人的比较，这些仍可能带来隐隐的焦虑。',
        highlight: '前往成绩体系——使用计算器准确解读成绩单。',
      },
    },
    {
      id: 'pyp-myp',
      en: {
        label: 'PYP → MYP',
        description: 'Your child is around 10–12 years old, moving from Primary Years to Middle Years — or has just transferred into MYP from a Chinese primary school. Formal criterion-based grades appear for the first time and the contrast with Chinese school reporting can feel most disorienting right now.',
        highlight: 'See PYP first, then Grade System to understand the new grading.',
      },
      zh: {
        label: 'PYP → MYP',
        description: '您的孩子大约10–12岁，正从小学阶段过渡到初中阶段——或者刚刚从中国小学转入MYP。正式的维度评估成绩首次出现，与国内学校报告方式的对比此时可能让人最感迷失。',
        highlight: '先阅读PYP部分，再查看成绩体系，了解新的评分方式。',
      },
    },
    {
      id: 'myp-dp',
      en: {
        label: 'MYP → DP',
        description: 'Your child is typically in Year 10 or 11. Subject selection, HL/SL choices, Internal Assessments, and predicted grades are the decisions that matter now. If Gaokao or Chinese domestic university entry is still relevant to your family, this is the stage where that conversation cannot be delayed.',
        highlight: 'Focus on Grade System — the DP calculator — and the university pathway question.',
      },
      zh: {
        label: 'MYP → DP',
        description: '您的孩子通常在10或11年级。科目选择、HL/SL决策、内部评估和预测成绩是现在最重要的决定。如果高考或国内高校录取对您的家庭仍然相关，这一阶段的对话不能再拖延了。',
        highlight: '重点关注成绩体系——DP计算器——以及大学录取路径问题。',
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
    zh: {
      title: '理解您孩子的IB学校',
      subtitle: '为在国际教育中探索的中国家庭准备的指南',
      intro: 'IB学校与遵循中国国家课程的学校看起来截然不同——不是因为它不够严格，而是因为它围绕不同的目标构建。如果您已经遇到让您困惑或不安的事情——没有班级排名的成绩单、没有教材的课堂、看似开放式的评估——本指南正是为那个时刻而写的。它涵盖五个核心概念、MYP和DP的互动成绩计算器、PYP专题，以及两个真实情境，展示同一情况在有无背景知识时的不同呈现。',
      reassurance: '有一件事不会改变：您的孩子仍在高标准地学习数学、科学和语言。IB数学和科学的内容深度相当严格——在许多情况下，IB高等数学（HL）超越了中国国家课程在该年级的覆盖范围。差异在于学习的组织方式、评估的运作方式以及进展的报告方式——而非严格性是否存在。关于中文：IB学校为母语为中文的学生提供中国语言与文学课程（Chinese A）。这是一门完整严格的文学语言课程——古典文本、作文写作、口头评析——不是传承语言课。您孩子的中文不会止步于校门口。',
      chineseUniversityNote: '对于在中国的家庭或考虑回国的家庭：国内高校是一个真实的路径挑战。大多数985和211院校要求中国公民提供高考成绩——IB文凭不是直接的替代品。但是，海外华侨学生可能有资格通过华侨生联考进入部分中国大学。一些院校——包括北京大学、复旦大学等的某些项目——已试点认可IB成绩。大多数中国IB学生的目标是英国、美国、澳大利亚、加拿大或新加坡的大学，这些国家对IB文凭的认可度很高。在10年级之前，请咨询学校的大学升学顾问，了解目前中国大陆高校的录取政策。',
      whatToAskNote: 'IB教师不仅欢迎直接提问——他们期待这样做。这与中国学校中"师道尊严"的规范不同，在那里家长通常是接受信息而非提问。在IB体系中，提出具体的、基于证据的问题不是失礼——这正是该系统的设计运作方式。"我的孩子在科学科目的维度C上得了3分——实践中5分是什么样的？"这才是正确的提问方式。参加任何家长会时，请携带孩子最近的成绩单。',
    },
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
    zh: {
      situation: [
        '您孩子的8年级成绩单到了。在MYP科学科目中，他们得了5分（满分7分）。老师写了四行关于实验设计和推理能力的反馈。没有班级排名，没有百分比。',
        '您打开学校的家长微信群。另一位家长分享了他们孩子在附近一所中国学校的期末考试成绩单：94分（满分100分）。老师在顶部盖了红色的"优秀"印章。您不确定这种比较是否有意义——不同的学校，不同的体系——但5分和94分还是在您脑海中并排而立。',
        '您试着换算：5除以7约等于71%。在您成长的中国教育体系里，科学71分会引发一次严肃的谈话。您意识到，您无法向孩子的祖父母解释这个成绩究竟意味着什么。',
      ],
      question: '在IB科学中得5分，是需要解决的问题——还是需要理解的问题？',
      directAnswer: 'IB科学5分不等于71%。它代表的是对照国际发布标准的"实质性成就"。百分比换算无效，每次这样做都会误导您。您孩子的实际表现可能远比这个数字呈现的要好。以下各节将解释如何准确解读IB成绩——以及为什么百分制思维框架，无论多么直觉化，在这里并不适用。',
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
      zh: {
        concept: '探究式学习',
        concern: '在中国学校里，一位优秀的教师会精准地讲授教学大纲，解释正确的方法，确保学生在进入下一步之前掌握了正确答案。人教版教材是共同的参考——您可以在家里打开它，检查孩子的理解是否到位。当一节IB课结束时没有得出结论，或者老师布置开放式探究而不是完成某一章节时，质疑学习是否真的发生了，是合理的。',
        bridge: 'IB教师不使用统一的教材，因为目标不同：该课程旨在培养在新情境中运用知识的能力，而不是在标准化考试中识别内容。学习科学研究一贯表明，必须自己形成和检验推理的学生，其理解的保留时间远超那些接受并重复教师讲解的学生。探究不是学习的替代品，而是认知要求更高的学习形式。中国自1990年代以来关于素质教育的改革讨论，恰恰是围绕这一点展开的：应试教育是否能培养出在研究和职业环境中能够胜任的毕业生，还是只能在考场上表现出色。',
        goal: '全球最具竞争力的大学正在寻找能够参与研究、处理模糊问题、超越已学内容进行思考的学生。一个多年来练习提问和检验想法的学生，在牛津面试、哈佛申请文书或研究研讨会中，往往能做到只刷真题的学生所无法企及的事。',
        ibConnection: 'IB学习者素养——尤其是"探究者"、"思考者"和"反思者"——不是边缘性的价值观。它们描述的是该课程经过多年实践工程化培养的心理倾向。',
        whatToAsk: [
          '"这个探究项目与评估标准有何联系？"——IB教师始终能将开放式任务与正式考核内容对应起来。',
          '"班级是否已涵盖最终外部考试所需的全部内容？"——IB教师既负责探究，也负责备考。如果进度正常，您将得到明确的答复。',
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
      zh: {
        concept: '基于维度的成绩 vs. 百分制',
        concern: '百分制是普遍理解的：90分以上是优秀，75–89分是良好，60–74分是及格，60分以下令人担忧。在这个框架下，IB成绩单上的5分（满分7分）——换算成约71%——将是一个有意义的警示信号。成绩排名的缺失更让人难以判断：没有年级名次，就无法知道孩子是否跟上了同龄人，还是落后了。',
        bridge: '71%的换算是无效的。IB数学或科学的5分意味着对照国际发布标准的"实质性成就"——它描述的是您孩子实际能做什么，而不是他们在同学中的位置。IB也不公布班级排名，这是有意为之，而非疏漏：把学生相互排名会产生超越同伴而非发展真正理解的激励。两个学生都可以得5分，却有着截然不同的维度表现——成绩告诉您孩子能展示什么，维度细分告诉您应该重点关注哪里。',
        goal: 'IB成绩在全世界每所学校都具有相同的含义。上海学生的数学6分与伦敦或多伦多学生的6分定义完全相同。这种全球一致性正是该证书对英国、美国、澳大利亚和新加坡大学具有公信力的原因——也是它能打开学校自定义百分制所无法打开的大门的原因。',
        ibConnection: 'IB等级描述符全球公开发布且固定不变。4级 = "适当成就"。5级 = "实质性成就"。6级 = "出色成就"。7级 = "卓越成就"。这些不是百分比，请不要换算。',
        whatToAsk: [
          '"我孩子在哪个具体维度上最困难？"——这比任何百分制成绩都能告诉您更多。',
          '"在这门科目中，6分的表现是什么样的？"——清楚地知道目标，能让孩子有具体的努力方向。',
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
      zh: {
        concept: '内部评估——不是平时成绩',
        concern: '在中国学校，平时成绩（课堂表现、小测验、作业分数）风险较低——它们很少对学生的最终结果产生重大影响。决定一切的是中考或高考。如果IB内部评估像平时成绩一样运作，合理的做法就是将精力集中在最终外部考试上，把IA当成可以应付的日常作业来处理。',
        bridge: 'IB内部评估不等同于平时成绩。它是一项实质性的独立研究——根据科目不同，可能是实验报告、数学探究、口头评析或书面作品集——由教师评分后经过IB外部审核。IB会抽取样本，并可以上调或下调整个班级的分数。IA占每门科目最终文凭成绩的20–30%。一个把IA当常规作业处理、最终得到较弱审核分数的学生，可能会损失足够多的分数，从而影响大学录取结果——即使考试成绩优秀也无法弥补。',
        goal: 'IA培养了大学课程、研究生研究和职业角色都需要的技能：设计研究方案、收集和分析证据，以及在没有模板的情况下为结论进行论证。英国、美国以及越来越多的亚洲大学，从申请的最早阶段就开始评估研究潜力。一个入学时已经知道如何独立工作的学生，从第一天起就拥有结构性优势——而这种优势在随后的每一个学位和职业阶段都会持续积累。',
        ibConnection: '所有IA均经过外部审核。教师的评分会由IB审查，IB根据审核样本对班级成绩进行调整。优秀的考试成绩无法弥补薄弱的IA——它们是最终成绩的独立组成部分。',
        whatToAsk: [
          '"IA的截止日期是什么时候，在这门科目中高分IA是什么样的？"——提前规划是IA质量最重要的预测因素。',
          '"我能看一份匿名的7分IA样本吗？"——大多数IB教师可以分享最高标准的样本。',
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
      zh: {
        concept: '学生自主——自选课题',
        concern: '在中国教育中，教师是提供框架和知识的专家。一个被要求自主选择课题论文（EE）题目和研究问题的学生，可能看起来像是被留下来独自处理重要事务，没有适当的指导——或者学校允许他们选择简单的而不是严格的课题。',
        bridge: '课题论文要求学生提出原创研究问题、规划自己的研究范围，并撰写一篇4000字的研究论文——由教师督导但不主导方向。这比教师指定的课题更难，而不是更容易。它需要智识勇气和独立决策能力。一个真正花了六个月深入研究自己问题的学生，在大学面试中能以深度和确信感来解释它——这是被辅导或被规定的答案所无法匹敌的。这种独立性正是重点所在。',
        goal: '英国大学——尤其是牛津剑桥和罗素集团院校——将课题论文作为独立智识参与的证据来阅读。美国大学将EE视为研究叙事的一部分。竞争激烈院校的中国研究生项目也越来越从申请的最早阶段评估研究潜力。EE是展示这种能力的第一份长篇文章。',
        ibConnection: '课题论文由IB外部评估，评级为A–E。与知识论一起，最多可为文凭总分贡献3个额外加分。这些是实实在在的分数，对大学录取有实际影响。',
        whatToAsk: [
          '问您的孩子："你为什么选择那个问题？"——如果他们能清楚地解释推理过程，说明这份主人翁意识是真实的。',
          '问EE指导老师："学生获得C或以下的最常见原因是什么？"——指导老师非常了解失败的规律，他们会告诉您。',
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
      zh: {
        concept: 'CAS——不是课外活动',
        concern: '在中国学业环境中，花在课外活动上的时间就是不用于刷题或备考的时间。当您看到孩子在志愿服务、体育运动或创意项目上投入大量时间——而国内学校的同龄人正在补习班——这是一个真实的权衡取舍，不是不合理的担忧。',
        bridge: 'CAS是毕业要求。没有完成并记录CAS，孩子就无法获得IB文凭——没有例外。IB将其设为强制要求，是因为它所针对的大学告诉IB他们想要什么：能展示课堂以外真正持续投入的学生。一个领导过社区项目、坚持体育锻炼或完成创意作品的学生，能为申请带来任何考试分数都无法复制的东西。',
        goal: '对于以国内高校为目标的家庭，请明确：CAS在高考或中国招生流程中没有直接权重。它的价值在于它所完成的文凭和它所培养的技能——而不是在中国的招生优势。对于国际大学申请，它提供真实价值并被积极考量。CAS所培养的韧性、领导能力和管理多项任务的能力，才是决定大学录取后成功的关键——也是此后数十年雇主所寻找的品质。',
        ibConnection: 'CAS是从12年级开始的强制性DP要求。它要求在创意、体育和服务三个方面共记录150小时，并附有反思档案集。不可豁免。',
        whatToAsk: [
          '问您的孩子："你从这项活动中真正得到了什么？"——真实的反思对IB而言比记录的小时数更重要。',
          '问CAS协调老师："哪些活动往往能产生最有力的大学申请故事？"——在实践中，并非所有CAS都具有同等分量。',
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
      zh: {
        title: '微信群里的比较',
        termsInPlay: ['基于维度的成绩', '班级排名'],
        situation: '您孩子的第一份完整MYP成绩单到了。当天晚上在学校家长微信群里，另一位家长分享了他们孩子在附近一所中国学校的成绩：班级前五，平均92分。您孩子的成绩单显示五门科目分别是4、5、5、4、6。您换算了大致的百分比：57%、71%、71%、57%、86%。平均下来68%。您在群里发了一条消息，问其他IB家长是否也觉得第一份成绩单令人困惑。',
        situationNote: '家长微信群（家长群）是进行这类比较的自然场所——但它也是百分制思维可以主导对话的地方，而IB成绩体系本就不是为这种比较而设计的。',
        withUnderstanding: '您认识到IB成绩不是百分比，4分意味着"适当成就"——而不是接近不及格。您向每位科目老师提了一个问题："哪些具体的证据能让我孩子在这个维度上从4分提升到5分？"三个月后，两个4分变成了5分。微信群里的讨论是噪音；与老师关于维度的对话才是信号。',
        withoutUnderstanding: '学校安排了一次会议来解释IB评分方式。家长-教师会议持续了一个小时，双方都产生了一些防御性情绪。老师对成绩单被换算成百分比感到沮丧。您对学校在入学介绍时没有解释清楚感到沮丧。两种沮丧都有道理。还有一个会议无法弥补的社交代价：您发到微信群里的那条消息已经在那里了，其他家长现在知道您觉得成绩单令人困惑。在中国家长圈子里，您对学校的选择和孩子的成绩并不是完全独立的话题。本指南存在的意义，正是那次会议之前的时刻——以及那条消息发送之前的时刻。',
      },
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
      zh: {
        title: '高考问题',
        termsInPlay: ['DP文凭', '大学录取路径'],
        situation: '您的孩子在10年级。一位从中国来访的亲戚问您孩子打算申请哪所大学，是否会参加高考。您解释说他们走IB路线。亲戚问："那他们还能进清华或复旦吗？"您说您不太确定。亲戚提到一个熟人的孩子专门在10年级从国际学校转回中国学校，为高考做准备。那天晚上，您开始思考，自己是否在不知不觉中已经做了一个您不知道自己在做的决定。',
        withUnderstanding: '您与学校的大学升学顾问交谈。您了解到，走IB路线的中国公民通常无法通过标准高考进入985大学——IB文凭在国内招生中不等同于高考成绩。然而，您的孩子具备进入英国、美国和澳大利亚大学的良好条件（这些大学直接认可IB成绩），如果您的家庭符合条件，也可以通过华侨生联考途径进入中国大学。您带着一份具体的大学名单和清晰的时间线离开了。这个问题是真实的；答案是可以找到的。',
        withoutUnderstanding: '不确定性悬而未决。到11年级，当HL科目选择确定时，您意识到高考路径已经真正关闭了。这个决定是被动做出的，而不是主动选择的。转回中国学校最迟需要在9年级发生，才能有足够的时间准备高考。',
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
      zh: {
        concept: 'PYP中没有百分制',
        concern: '中国小学提供百分制成绩、班级排名以及有明确数字信号的书面成绩总结。PYP成绩单使用叙述性描述、学习档案集观察记录和IB学习者素养评估——但没有数字。没有分数（成绩），真的很难判断孩子处于什么水平。',
        bridge: 'PYP使用叙述性报告，是因为对于3–11岁的孩子来说，一个单一的数字过度简化了孩子的实际能力。叙述性报告告诉您孩子理解了什么、如何应对挑战，以及下一步应该在哪里发展——它比百分制成绩更具诊断价值，而不是更少。您孩子的老师在持续评估他们；成绩单只是以不同方式呈现证据。没有数字是经过深思熟虑的设计选择。',
        goal: '当您的孩子进入MYP（约11岁时），基于维度的正式成绩首次出现。通过PYP建立的反思和自我认知习惯，意味着他们进入那个评分体系时，已经知道如何思考自己的学习——这比那些只接受过分数的学生具有结构性优势。',
        ibConnection: 'PYP报告建立在IB自身的课程框架基础上。教师依据IB PYP标准进行评估——而非根据中国国家课程的范围和顺序。',
        whatToAsk: [
          '"您本学期从我孩子身上看到了哪些具体的进步证据？"——叙述性报告使用标准化语言；要求具体证据能让评估更为清晰。',
          '"我孩子现在真正感到困难的是什么？"——PYP教师观察细致，他们会知道。',
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
      zh: {
        concept: '跨学科学习',
        concern: '我孩子的班级似乎没有分科教学。本学期他们在学习"我们如何组织自己"。我不确定他们是否在接受系统的数学或中文/英语教学——在中国小学，章节顺序是清晰的，我可以在家对照人教版教材跟踪进度。',
        bridge: 'PYP通过跨学科探究单元组织学习——围绕现实世界概念连接多门学科的主题。数学、语言、科学和社会研究都在教授；它们被融合在一起，而不是作为孤立的板块分别讲授。课程内容是存在的。结构看起来不同，是因为呈现方式不同。您孩子的老师有详细的范围和顺序，可以准确告诉您在任何给定单元中正在培养哪些技能。',
        goal: '在情境中学到的概念——与有意义的事物相联系——比孤立学习的概念更有效地迁移到新情境中。PYP建立的关联性理解，使后续更专业化的学习更能内化。这也是中国教育研究者自2000年代初课程改革以来一直在研究探究式模式的原因。',
        ibConnection: 'PYP使用六个跨学科主题：我们是谁、我们所处时空中的位置、我们如何表达自己、世界如何运作、我们如何组织自己，以及共享地球。全球每所IB学校都使用相同的框架。',
        whatToAsk: [
          '"这个单元在培养哪些数学和语言技能？"——教师可以将其准确对应到课程范围和顺序。',
          '问您的孩子："你们班现在在研究什么问题？"——如果他们能清楚回答，学习就在起效。',
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
      zh: {
        concept: '低幼年段的游戏式学习',
        concern: '我孩子回家谈论的都是活动和故事。在这个年龄，中国幼儿园的孩子已经在练习书写汉字、学习拼音和做算术了。我担心我孩子在接受系统学业教育的同龄人面前正在落后。',
        bridge: '在PYP低幼年段（3–6岁），有结构的游戏就是课程本身——不是课程的休息时间。孩子通过有目的性的、由教师设计的活动发展语言、数学思维、社会推理和探究技能。IB和数十年的发展研究都认同：6–7岁以前的正式学业教学不会产生更好的长期结果，往往还会产生更差的结果，因为它会破坏维持长期学习的内在动力。中国的"双减"政策讨论，正是在国家层面反映了这一矛盾。',
        goal: '在低幼年段通过有目的的游戏学习的孩子，比那些过早接受正式学业教育的孩子，能发展出更强的自我调节能力、创造力和内在动力。这些品质能够预测整个中学乃至更长远的学业成功——而且一旦在早期压力中失去，就很难再培养回来。',
        ibConnection: 'PYP低幼年段与国际幼儿教育研究相一致，包括OECD关于入学准备的证据和芬兰早期教育体系的发展框架。"双减"政策减少早期学业压力的目的，正是基于同样的证据基础。',
        whatToAsk: [
          '"这项活动在培养什么学习目标？"——在PYP中，游戏始终是围绕课程成果有目的地设计的。',
          '如果您有顾虑："与这个年龄段的发展预期相比，我孩子在语言发展和数学思维方面的进展如何？"',
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
      zh: {
        concept: 'PYP展览',
        concern: '我5或6年级的孩子被布置了一个大型独立项目，让他们选择一个现实世界的问题进行研究和展示。对于这个年龄来说，这似乎非常缺乏结构。中国学校的孩子正在通过正式考试进行评估。',
        bridge: 'PYP展览是整个小学阶段课程的终结性评估环节——它不是一个创意项目。学生选择一个现实世界的问题，独立研究，与同学合作，并向学校社区展示研究结果。它依据IB标准进行评估，并被认真对待为毕业要求。这种开放性是经过精心搭建的：教师指导过程并确保严格性，而内容和方向属于学生。',
        goal: '展览明确设计为让学生为MYP个人项目（10年级）和DP课题论文（12年级）做准备。这是PYP所有积累——探究技能、自我指导、合作、反思——第一次被公开展示并接受正式评估的时刻。',
        ibConnection: 'PYP展览是一项强制性的、经过评估的PYP环节。学生必须展示所有五个核心要素：知识、概念、技能、态度和行动。',
        whatToAsk: [
          '"展览将依据哪些标准进行评估？"——有清晰的评分标准；表面上的开放性是有结构的。',
          '问您的孩子："你在探究过程中采取了什么行动？"——展览要求有现实世界的行动环节，而不仅仅是一次展示。',
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
      zh: {
        concept: '为MYP做准备',
        concern: '我孩子要从PYP升入MYP了。我听说评分会变得更加正式。我不确定几年的探究式和游戏式学习是否真的让他们准备好了迎接现在将被正式评估的东西。',
        bridge: '向MYP的转变是真实的：各科目成为独立学科，维度评估成绩出现，作业增多，学业期望提高。但PYP正是被刻意设计来构建MYP所需要的基础——独立思考的能力、提出好问题的能力，以及不依赖模板解决问题的自信。真正深入参与过PYP的学生进入MYP时，比从内容密集型小学课程转学过来的学生，更能适应基于维度的思维方式。过渡期需要调整；但这不是要纠正什么。',
        goal: '有扎实PYP背景的学生通常比来自中国国家课程小学的学生更快适应维度评估，因为他们已经知道如何思考自己的学习——而不仅仅是如何复现内容。适应期是真实存在的，基础也是实实在在的。',
        ibConnection: 'IB将PYP和MYP设计为一个连续体。探究方法、学习者素养属性和学习方法技能在MYP中明确延续，再延伸到DP。',
        whatToAsk: [
          '问MYP协调老师："我孩子在MYP第一年将如何得到支持，以理解基于维度的评估？"——大多数IB学校有专门的过渡项目。',
          '在MYP第一学期问："我孩子是否理解各科目中每个维度实际上要求他们展示什么？"——如果不是，这就是需要与每位科目老师进行的对话。',
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
      zh: {
        title: 'MYP成绩如何运作',
        intro: 'MYP各科目不使用百分制或班级排名。每门科目使用四个维度，每个维度满分8分。四个分数加起来共32分，再转换为最终的1到7等级。5分不是71%。4分不是57%。请不要换算。',
        criteriaNote: '四个维度标记为A、B、C、D——它们在每门科目中衡量不同的内容。在MYP数学中，维度A是"知识与理解"，维度D是"在现实情境中应用数学"。一个学生可能在A上得分很高，在D上得分很低。成绩单分别显示每个维度，精确告诉您应该重点关注哪里——这是百分制成绩永远无法做到的。',
        boundaryNote: '从原始总分（满分32分）到最终等级（1–7）的转换，使用各学校设定的等级边界。科目层面也存在差异：数学和科学科目每个等级通常需要更高的原始分数，而人文和艺术科目的边界往往更低。MYP数学24/32与MYP戏剧24/32可能产生不同的最终等级。',
        descriptors: [
          { grade: 1, label: 'Minimal achievement',      zh: '极低成就' },
          { grade: 2, label: 'Very limited achievement', zh: '非常有限的成就' },
          { grade: 3, label: 'Limited achievement',      zh: '有限的成就' },
          { grade: 4, label: 'Adequate achievement',     zh: '适当成就' },
          { grade: 5, label: 'Substantial achievement',  zh: '实质性成就' },
          { grade: 6, label: 'Accomplished achievement', zh: '出色成就' },
          { grade: 7, label: 'Excellent achievement',    zh: '卓越成就' },
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
          'MYP的4分是"适当成就"——这是及格分数，不是接近不及格。不要把它换算成57%。百分制不适用于IB成绩。',
          '您的孩子在同一科目中每个维度的得分可能差异很大。维度A得7/8、维度D得3/8，能给您精确的诊断信息，告诉您应该关注哪里——而不仅仅是一个单一结果。',
          '等级边界因学校和科目而异。数学和科学科目每个等级的原始分门槛通常高于人文科目。请将计算器作为参考，而非精确换算工具。',
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
      zh: {
        title: 'DP成绩如何运作',
        intro: 'IB文凭总分45分。六门科目贡献最多42分（每门以1–7分评分），文凭核心——课题论文（EE）和知识论（ToK）——可增加最多3个额外加分。全球大多数竞争性大学要求36–40分以上。',
        subjectStructure: '学生学习六门科目：三门为高等级（HL），三门为标准级（SL）。HL科目涉及更多内容、更多教学时间和更深层次的评估。许多英国和美国大学对竞争性项目规定了最低HL成绩要求。',
        coreBonus: {
          title: 'EE + ToK加分矩阵',
          note: '课题论文（EE）和知识论（ToK）各自以A–E评级。两者结合，通过此矩阵产生0–3个加分。两个E等级意味着不授予文凭，无论科目总分是多少。',
          matrix: [
            { ee: 'A', tok: 'A', points: 3 }, { ee: 'A', tok: 'B', points: 3 }, { ee: 'A', tok: 'C', points: 2 }, { ee: 'A', tok: 'D', points: 2 }, { ee: 'A', tok: 'E', points: 0 },
            { ee: 'B', tok: 'A', points: 3 }, { ee: 'B', tok: 'B', points: 2 }, { ee: 'B', tok: 'C', points: 2 }, { ee: 'B', tok: 'D', points: 1 }, { ee: 'B', tok: 'E', points: 0 },
            { ee: 'C', tok: 'A', points: 2 }, { ee: 'C', tok: 'B', points: 2 }, { ee: 'C', tok: 'C', points: 1 }, { ee: 'C', tok: 'D', points: 1 }, { ee: 'C', tok: 'E', points: 0 },
            { ee: 'D', tok: 'A', points: 2 }, { ee: 'D', tok: 'B', points: 1 }, { ee: 'D', tok: 'C', points: 1 }, { ee: 'D', tok: 'D', points: 0 }, { ee: 'D', tok: 'E', points: 0 },
            { ee: 'E', tok: 'A', points: 0 }, { ee: 'E', tok: 'B', points: 0 }, { ee: 'E', tok: 'C', points: 0 }, { ee: 'E', tok: 'D', points: 0 }, { ee: 'E', tok: 'E', points: -1 },
          ],
        },
        passingRules: [
          '总分最少24分才能获得文凭。',
          '任何科目成绩不低于2分（SL）或3分（HL）——单科极低成绩会导致文凭失败，即使总分足够。',
          'CAS要求必须完成并签署确认。',
          'EE和ToK均不得评为E等级。',
          '所有科目中1分不超过三门。',
        ],
        watchOut: [
          '一个获得38分但未满足某一条件（如HL科目得2分）的学生不会获得文凭。单凭分数不够。',
          '大学通常在最终考试前，根据预测成绩给出条件录取offer。12年级与科目老师关于预测成绩的谈话非常重要——请像对待任何高风险考试备考一样认真对待。',
          '内部评估经过外部审核。教师的评分可能被IB调整。一个提交了薄弱IA但考试表现优秀的学生，最终成绩仍会低于仅凭考试成绩所能获得的分数。',
          '如果国内高校录取（高考路径）与您家庭的计划相关，这个决定最迟需要在10年级之前做出。IB DP路径和高考路径需要根本不同的准备，无法同时追求。',
        ],
        universityContext: '对于国际大学：36–40分以上对英国罗素集团和大多数美国大学具有竞争力；最顶尖院校要求40分以上。对于中国国内大学：大多数985/211院校要求中国公民提供高考成绩——IB文凭不是大多数项目的直接替代品。华侨生联考路径可能适用于海外华侨学生——请尽早确认资格。在10年级之前，请与学校升学顾问交谈，了解您家庭正在追求哪条路径。',
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
    zh: {
      default: [
        '问孩子的老师："这项任务是形成性评估还是终结性评估？"——就这一个问题，改变了您解读每一份反馈的方式。',
        '在学校的学习平台上找到孩子某门科目的评估标准。阅读维度A–D，注意每个维度衡量什么——这是未来所有成绩单都会使用的语言。',
        '不要把IB成绩换算成百分制。换一种问法："这门科目中6分的表现是什么样的？"——清楚地知道目标，能帮助孩子准确努力。',
      ],
      new: [
        '今晚问孩子："你们班这周在探究什么问题？"——不是"什么话题"。如果他们能清楚回答，探究式学习正在起效。',
        '向学校索取一门科目的评估标准。阅读每个维度A–D衡量什么。这是未来所有成绩单都会使用的语言，现在理解它，将改变您此后解读每一份成绩单的方式。',
        '用孩子最近成绩单上的分数试用成绩体系部分的MYP成绩计算器——并抵制把输出结果换算成百分比的冲动。',
      ],
      settled: [
        '找出孩子最近的MYP成绩单，把维度分数输入成绩计算器。找出最低的维度，然后问科目老师："哪些具体的证据能让我孩子在这个维度上从4分提升到5分？"',
        '如果您在使用课外辅导（补习），请告诉辅导老师孩子在哪些IB维度上有困难，并要求他们的教学方法与IB评估方式对齐。刷题对某些题型有帮助；但对于得分权重最高的分析性题目，刷题反而会适得其反。',
        '即使DP还有一两年，也要查看DP计算器。现在了解文凭结构，可以防止在风险更高时百分制焦虑的再度出现。',
      ],
      'pyp-myp': [
        '问孩子的MYP班主任："您将如何支持我孩子在今年理解基于维度的评估？"——大多数IB学校有专门的过渡项目。',
        '与孩子一起试用MYP成绩计算器——让他们移动滑块。目标是让他们理解自己的成绩，而不仅仅是让您来解读。',
        '阅读PYP部分，了解孩子已经积累了什么。真正参与过PYP的学生进入MYP时，在基于维度的思维方面的准备往往比家长预期的要充分得多。',
      ],
      'myp-dp': [
        '如果国内高校录取（高考路径或华侨生联考）与您家庭的计划相关，现在就与学校的大学升学顾问交谈——不要等到12年级。IB DP路径和高考路径需要根本不同的准备，转换路径的窗口期在9–10年级左右关闭。',
        '打开DP计算器，输入孩子的预测成绩。检查是否有科目面临未满足文凭条件的风险——这比总分数字更紧迫。',
        '问孩子："你选好课题论文题目了吗？"——这个对话开始得越早，研究质量就越好。题目更改过晚，往往会产生更薄弱的EE。',
      ],
    },
  },

  glossary: [
    {
      term: 'IB',
      en: { full: 'International Baccalaureate', definition: 'The global organisation that designs and awards the PYP, MYP, and DP programmes. Schools are authorised by the IB and held to the same standards worldwide. The IB is not affiliated with any national curriculum, including China\'s national curriculum.' },
      zh: { full: '国际文凭组织', definition: '设计和颁发PYP、MYP和DP课程的全球机构。学校经IB授权，遵守全球统一标准。IB不隶属于任何国家课程体系，包括中国国家课程。' },
    },
    {
      term: 'PYP',
      en: { full: 'Primary Years Programme', definition: 'The IB programme for students aged 3–11 (roughly 幼儿园 to Grade 5/6). Uses inquiry-based, transdisciplinary learning. Narrative reports, no percentage marks or class rankings.' },
      zh: { full: '小学阶段课程', definition: 'IB为3–11岁学生（大致相当于幼儿园至5/6年级）设置的课程。采用探究式、跨学科学习。使用叙述性报告，无百分制成绩或班级排名。' },
    },
    {
      term: 'MYP',
      en: { full: 'Middle Years Programme', definition: 'The IB programme for students aged 11–16 (roughly Grades 6–10). Introduces criterion-based grades (1–7) across eight subject groups. First point where formal grades appear — but no 百分制 and no class rank.' },
      zh: { full: '初中阶段课程', definition: 'IB为11–16岁学生（大致相当于6–10年级）设置的课程。在八个科目组中引入基于维度的成绩（1–7分）。正式成绩首次出现——但没有百分制，也没有班级排名。' },
    },
    {
      term: 'DP',
      en: { full: 'Diploma Programme', definition: 'The IB programme for students aged 16–19 (Grades 11–12). Leads to the IB Diploma, scored out of 45. Widely recognised by universities in the UK, US, Australia, Canada, and Singapore. Not a substitute for Gaokao at most Chinese domestic universities.' },
      zh: { full: '大学预科课程', definition: 'IB为16–19岁学生（11–12年级）设置的课程。颁发IB文凭，总分45分。被英国、美国、澳大利亚、加拿大和新加坡大学广泛认可。对大多数中国国内大学而言，不能替代高考。' },
    },
    {
      term: 'HL',
      en: { full: 'Higher Level', definition: 'One of two subject tiers in the DP. Students take three HL subjects — more content, more teaching hours, and deeper assessment than SL. Universities often specify minimum HL grade requirements for competitive programmes.' },
      zh: { full: '高等级', definition: 'DP中两个科目层级之一。学生选修三门HL科目——比SL涉及更多内容、更多教学时间和更深层次的评估。大学通常对竞争性项目规定最低HL成绩要求。' },
    },
    {
      term: 'SL',
      en: { full: 'Standard Level', definition: 'The second subject tier in the DP. Students take three SL subjects alongside three HL subjects. Minimum passing grade for SL is 2.' },
      zh: { full: '标准级', definition: 'DP中的第二个科目层级。学生在三门HL科目之外另选三门SL科目。SL的最低及格成绩为2分。' },
    },
    {
      term: 'IA',
      en: { full: 'Internal Assessment', definition: 'Coursework marked by the classroom teacher, then externally moderated by the IB. Contributes 20–30% of the final DP grade. Not equivalent to 平时成绩 — the IB moderates rigorously and adjusts marks up or down across cohorts.' },
      zh: { full: '内部评估', definition: '由课堂教师评分、再由IB外部审核的课程作业。占DP最终成绩的20–30%。不等同于平时成绩——IB进行严格审核，并对各年级成绩进行上调或下调。' },
    },
    {
      term: 'EE',
      en: { full: 'Extended Essay', definition: 'A 4,000-word independent research paper completed in Year 12–13, externally assessed by the IB. Graded A–E. Together with ToK, contributes up to 3 bonus diploma points. Read by UK and US universities during application review.' },
      zh: { full: '课题论文', definition: '在12–13年级完成的4000字独立研究论文，由IB外部评估。以A–E评级。与知识论合计，最多为文凭总分贡献3个额外加分。英国和美国大学在申请审核时会阅读此论文。' },
    },
    {
      term: 'ToK',
      en: { full: 'Theory of Knowledge', definition: 'A DP core course examining how we know what we know across different disciplines. Graded A–E. With the EE, contributes up to 3 bonus points to the diploma total.' },
      zh: { full: '知识论', definition: 'DP核心课程，研究我们如何在不同学科中了解我们所知道的内容。以A–E评级。与EE合计，最多为文凭总分贡献3个额外加分。' },
    },
    {
      term: 'CAS',
      en: { full: 'Creativity, Activity, Service', definition: 'A mandatory DP diploma requirement — not optional 课外活动. Requires 150 documented hours across creative, physical, and community service activities plus a reflection portfolio. Begins in Year 12. Cannot be waived.' },
      zh: { full: '创意·体育·服务', definition: 'DP文凭的强制性要求——不是可选的课外活动。要求在创意、体育和社区服务活动中累计记录150小时，并附有反思档案集。从12年级开始，不可豁免。' },
    },
  ],
}
