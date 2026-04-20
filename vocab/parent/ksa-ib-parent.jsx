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
  languages: ['en', 'ar'],

  journeyStages: [
    {
      id: 'new',
      en: {
        label: 'New to IB',
        description: 'Typically your first year. Your child has moved from the Saudi national curriculum — percentage marks, class ranks, formal semester exams — into an IB school. The shift to open-ended inquiry, criterion-based grades, and no percentage score often arrives without enough explanation at orientation. This guide starts with the five things that confuse Saudi families most.',
        highlight: 'Start with Core Concepts — especially how criterion-based grades work and what they actually mean.',
      },
      ar: {
        label: 'جديد على IB',
        description: 'عادةً تكون هذه السنة الأولى. انتقل طفلك من المنهج الوطني السعودي — بدرجاته المئوية وترتيباته الصفية وامتحاناته الفصلية الرسمية — إلى مدرسة IB. يصل هذا التحول نحو التقصير المفتوح والدرجات القائمة على المعايير وغياب النسبة المئوية في الغالب دون شرح كافٍ في جلسة الاستقبال. يبدأ هذا الدليل بالأشياء الخمسة التي تُحيّر العائلات السعودية أكثر من سواها.',
        highlight: 'ابدأ بالمفاهيم الأساسية — وبخاصة كيف تعمل الدرجات القائمة على المعايير وماذا تعني فعلاً.',
      },
    },
    {
      id: 'settled',
      en: {
        label: 'Settling in',
        description: 'Year 2 or beyond. You have received several reports and are beginning to read the language. But questions from extended family, comparisons with peers at government schools, and the university pathway question may still be creating pressure. The Grade System calculators are the most useful tools at this stage.',
        highlight: 'Jump to Grade System — use the calculators to read your child\'s reports accurately.',
      },
      ar: {
        label: 'في طور الاستقرار',
        description: 'السنة الثانية أو ما بعدها. تلقيت عدة تقارير وبدأت تفهم اللغة. لكن أسئلة العائلة الممتدة والمقارنات مع أقران في مدارس حكومية وسؤال المسار الجامعي قد لا تزال تُشكّل ضغطاً. حاسبات نظام الدرجات هي أكثر الأدوات فائدةً في هذه المرحلة.',
        highlight: 'انتقل مباشرةً إلى نظام الدرجات — استخدم الحاسبات لقراءة تقارير طفلك بدقة.',
      },
    },
    {
      id: 'pyp-myp',
      en: {
        label: 'PYP → MYP',
        description: 'Your child is around 10–12 years old, moving from Primary Years to Middle Years — or has just transferred into MYP from a Saudi national school. Formal criterion-based grades appear for the first time and the contrast with Saudi school reporting can feel most disorienting right now. PYP is also where Arabic language and Islamic education questions are often sharpest.',
        highlight: 'See PYP section first, then Grade System to understand the new grading pattern.',
      },
      ar: {
        label: 'PYP → MYP',
        description: 'طفلك في حدود العاشرة إلى الثانية عشرة من عمره، ينتقل من مرحلة السنوات الأولى إلى السنوات المتوسطة — أو انتقل للتو إلى MYP من مدرسة وطنية سعودية. تظهر درجات معيارية رسمية لأول مرة والتناقض مع تقارير المدارس السعودية قد يبدو مربكاً أكثر من أي وقت مضى. هذه أيضاً المرحلة التي تكون فيها أسئلة اللغة العربية والتعليم الإسلامي في أحدّها.',
        highlight: 'اطّلع على قسم PYP أولاً، ثم نظام الدرجات لفهم نمط التقييم الجديد.',
      },
    },
    {
      id: 'myp-dp',
      en: {
        label: 'MYP → DP',
        description: 'Your child is typically in Year 10 or 11. Subject selection, HL/SL choices, and the university pathway decision are urgent now. The question of whether your child can access Saudi government universities — and what the Vision 2030 landscape means for IB graduates — needs a direct conversation with the school counsellor before Year 12.',
        highlight: 'Focus on Grade System (DP calculator) and Card 5 on university pathways. Do not defer the Saudi university conversation.',
      },
      ar: {
        label: 'MYP → DP',
        description: 'طفلك في السنة العاشرة أو الحادية عشرة في الغالب. اختيار المواد ومستويات HL/SL وقرار المسار الجامعي أمور عاجلة الآن. مسألة ما إذا كان بإمكان طفلك الالتحاق بالجامعات الحكومية السعودية — وما تعنيه رؤية 2030 لخريجي IB — تستدعي محادثة مباشرة مع مستشار المدرسة قبل الصف الثاني عشر.',
        highlight: 'ركّز على نظام الدرجات (حاسبة DP) والبطاقة الخامسة حول المسارات الجامعية. لا تؤجّل محادثة الجامعات السعودية.',
      },
    },
  ],

  meta: {
    en: {
      title: 'Understanding Your Child\'s IB School',
      subtitle: 'A guide for Saudi and expat families navigating international education in the Kingdom',
      intro: 'IB schools look very different from Saudi national curriculum schools — not because they are less rigorous, but because they are built around different goals. If you have already encountered something that confused or unsettled you — a report with no percentage, a lesson without a textbook, an assessment that seemed open-ended, a subject called "Theory of Knowledge" — this guide is for that moment. It covers five core concepts, interactive grade calculators for MYP and DP, a PYP section, and two scenarios that show exactly what happens with and without this context.',
      reassurance: 'One thing that does not change: your child is still learning Mathematics, Sciences, and Languages to a high standard. IB HL Mathematics and Sciences are among the most rigorous curricula available at secondary level anywhere in the world. The differences are in how learning is structured, how assessment works, and how progress is reported — not in whether rigour exists. On Arabic language: IB schools offer Arabic Language and Literature (Arabic A) for native Arabic speakers. This is the same demanding literature course as English A — classical and modern texts, critical essay writing, oral commentary. Your child\'s Arabic does not have to stop at the school gate.',
      visionNote: 'Saudi Arabia\'s Vision 2030 explicitly identifies the development of a knowledge-based economy as a national priority — and the IB Diploma is specifically designed to produce exactly the independent thinkers, researchers, and internationally-oriented graduates that Vision 2030 calls for. Saudi Aramco, SABIC, NEOM, and the major Saudi professional services firms increasingly recruit graduates with IB backgrounds. The Ministry of Education has been expanding pathways for IB recognition. You are not choosing between tradition and progress — IB is what Vision 2030 looks like in a school. Data point worth holding: Saudi women now make up the majority of university enrolment in the Kingdom, and STEM participation among Saudi women has risen sharply since Vision 2030 launched in 2016. Whatever your child\'s gender, the Saudi university and graduate-employment landscape they are preparing for looks structurally different from the one their parents entered. The IB\'s emphasis on extended writing, independent investigation, and oral commentary maps onto the competencies Vision 2030 employers test for — and the IB is a formal partner of the OECD Future of Education 2030 framework, which Saudi policy directly references.',
      researchAnchor: 'One research reframe that often produces a "now I get it" moment for Saudi parents: John Hattie\'s Visible Learning synthesis (2,100+ meta-analyses, 100,000+ studies) identifies high-quality feedback as one of the highest-leverage interventions in all of education — effect size d ≈ 0.70, where d = 0.40 represents a year of typical progress. Homework volume in primary school barely registers (d ≈ 0.15). What matters is not how many hours your child studies but the quality of the feedback loop between your child and their teacher. IB\'s criterion-based assessment — rubrics shared from Day 1, structured formative feedback, teacher moderation by the IB — is built precisely around the dynamic the evidence says matters most.',
      whatToAskNote: 'IB teachers expect direct, evidence-based questions from parents. This may feel different from Saudi government school culture, where parent involvement typically means receiving information rather than asking specific questions. In IB, the question "My child scored 4 on Criterion C in Sciences — what does a 6 look like in practice?" is exactly the right kind of question. Bring your child\'s most recent report to any meeting. Teachers will have the criteria rubric in front of them and can answer specifically.',
    },
    ar: {
      title: 'فهم مدرسة IB لطفلك',
      subtitle: 'دليل للعائلات السعودية والمقيمين للتعامل مع التعليم الدولي في المملكة',
      intro: 'تبدو مدارس IB مختلفةً جداً عن مدارس المنهج الوطني السعودي — ليس لأنها أقل صرامةً، بل لأنها بُنيت حول أهداف مختلفة. إذا صادفت بالفعل شيئاً أربكك أو أقلقك — تقرير بلا نسبة مئوية، درس بلا كتاب مدرسي، تقييم مفتوح النهاية، مادة تُدعى «نظرية المعرفة» — فهذا الدليل لتلك اللحظة بالذات. يغطي خمسة مفاهيم أساسية وحاسبات درجات تفاعلية لـ MYP وDP وقسماً عن PYP وسيناريوهَين يُظهران بدقة ما يحدث بوجود هذا السياق وبدونه.',
      reassurance: 'شيء واحد لا يتغيّر: طفلك لا يزال يتعلم الرياضيات والعلوم واللغات بمستوى رفيع. رياضيات HL وعلوم HL في IB من أكثر المناهج صرامةً في المرحلة الثانوية على مستوى العالم. الفوارق في كيفية هيكلة التعلم وكيفية عمل التقييم وكيفية الإبلاغ عن التقدم — لا في وجود الصرامة من عدمه. بشأن اللغة العربية: تقدّم مدارس IB مادة اللغة العربية وآدابها (العربية A) للناطقين بالعربية أصالةً. هو نفس منهج الأدب المتطلِّب كمنهج اللغة الإنجليزية A — نصوص كلاسيكية وحديثة وكتابة مقالات نقدية وتعليق شفهي. لن تتوقف عربية طفلك عند باب المدرسة.',
      visionNote: 'تُحدّد رؤية المملكة العربية السعودية 2030 صراحةً تطوير اقتصاد قائم على المعرفة بوصفه أولويةً وطنية — وشهادة IB مصمَّمة تحديداً لإنتاج المفكرين المستقلين والباحثين والخريجين ذوي التوجه الدولي الذين تنادي بهم رؤية 2030. أرامكو السعودية وسابك ونيوم وكبرى شركات الخدمات المهنية السعودية تُعيّن بصورة متزايدة خريجين من خلفيات IB. وزارة التعليم توسّع المسارات المعترِفة بـ IB. أنت لا تختار بين التراث والتقدم — IB هو ما تبدو عليه رؤية 2030 في المدرسة.',
      whatToAskNote: 'يتوقع معلمو IB أسئلةً مباشرة قائمة على الأدلة من أولياء الأمور. قد يبدو هذا مختلفاً عن ثقافة مدارس الحكومة السعودية حيث تعني مشاركة الوالدين عادةً تلقّي المعلومات لا طرح أسئلة محددة. في IB، السؤال «حصل طفلي على 4 في المعيار C في العلوم — كيف تبدو الدرجة 6 في الواقع العملي؟» هو تحديداً النوع الصحيح من الأسئلة. أحضر أحدث تقرير لطفلك إلى أي اجتماع. سيكون أمام المعلمين جدول معايير التقييم ويستطيعون الإجابة بتحديد.',
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
    ar: {
      situation: [
        'يصل تقرير طفلك للصف الثامن MYP. بدلاً من درجة مئوية وترتيب صفي، هناك أربع درجات لكل مادة — كل منها من 8. التعليقات مفصّلة. لا يوجد رقم كـ 87% أو 92%. لا يوجد ترتيب في الصف.',
        'تُصوّره وترسله إلى مجموعة واتساب العائلة، متسائلاً إن كان أحد يعرف كيف يقرأ درجات IB. يسأل والدك أين يقع حفيده في ترتيب الصف. أخوك — الذي لديه ابن في مدرسة حكومية بمتوسط 95% — يقول إن الدرجات تبدو منخفضة. عمّ زوجتك، المسؤول الكبير في وزارة التعليم، يسأل هل المدرسة «معترف بها» من قِبل الحكومة السعودية.',
        'تلك الليلة تحاول تحويل درجة MYP. حصل طفلك على 5 من 7 في العلوم. تفكّر: 5 ÷ 7 = 71%. في المدارس الحكومية السعودية، 71% في العلوم يُعدّ مثاراً للقلق الجدي. تبدأ بالتساؤل إن كنت قد أخطأت في اختيار المدرسة.',
      ],
      question: 'هل كان اختيار مدرسة IB خطأً؟',
      directAnswer: 'الخمسة في علوم IB ليست 71%. إنها «إنجاز ملموس» — نتيجة قوية وفق معايير منشورة دولياً ومُتحقَّق منها خارجياً. التحويل الذي أجريته غير صالح وسيُضلّلك في كل مرة. قد يكون أداء طفلك أفضل بكثير مما يوحي به الرقم. تشرح الأقسام أدناه كيفية قراءة درجات IB بدقة — ولماذا لا ينطبق إطار النسب المئوية، مهما بدا مألوفاً، هنا.',
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
      ar: {
        concept: 'لا توجد نسبة مئوية — وهذا مقصود',
        concern: 'توفّر المدارس الحكومية السعودية درجات مئوية واضحة وترتيبات صفية. بدون نسبة مئوية، كيف أعرف إن كان طفلي يؤدي أداءً جيداً؟ «5 من 7» لا يخبرني شيئاً عما إذا كان في مقدمة الصف أو في المنتصف أو يعاني.',
        bridge: 'درجات IB ليست نسباً مئوية ولم تُصمَّم لتحويلها إلى نسب مئوية. الخمسة في أي مادة تعني «إنجاز ملموس» وفق معايير منشورة دولياً — وتعني أن طفلك أظهر فهماً وتطبيقاً قوياً في تلك المادة. الدرجات الأربع للمعايير تخبرك بشيء لا تستطيع النسبة المئوية قوله أبداً: تحديداً أي بُعد من أبعاد المادة يتفوق فيه طفلك وأين تحديداً يجب أن يركّز التحسين. الطالب الذي يحصل على 7/8 في المعيار A (المعرفة) و3/8 في المعيار D (التطبيق في السياق) لديه هدف تنموي محدد وقابل للتنفيذ. الدرجة المئوية 71% لا تخبرك بشيء بهذا المستوى من الفائدة.',
        goal: 'فهم التقييم القائم على المعايير يُتيح لك محادثات أكثر إنتاجيةً بكثير مع المعلمين. «كيف تبدو الدرجة 6 في المعيار D؟» سؤال أفضل من «لماذا لم يحصل على 90%؟» — ومعلمو IB مدرَّبون تحديداً على الإجابة عنه. النظام تشخيصي بطبيعة تصميمه.',
        ibConnection: 'يستخدم MYP أربعة معايير لكل مادة يُقيَّم كل منها من 8. المجموع من 32 يتحول إلى درجة من 1–7 باستخدام حدود تضعها المدرسة. يستخدم DP درجة من 1–7 لكل مادة، وست مواد بحد أقصى 42 نقطة، إضافةً إلى 3 نقاط إضافية من المقالة الموسّعة ونظرية المعرفة.',
        whatToAsk: [
          '«كيف تبدو الدرجة 6 في المعيار C في هذه المادة؟» — إذا حصل طفلك على 4، يستطيع المعلم أن يخبرك بالضبط كيف يبدو الأداء الأقوى.',
          '«ما أدنى معيار لدى طفلي هذا الفصل، وما الذي سيرفعه؟» — محادثة معيار واحد مستهدفة أكثر قيمةً من نقاش التقدم العام.',
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
      ar: {
        concept: 'التعلم التقصيري صارم — لكن هيكله أقل ظهوراً',
        concern: 'يبدو أن الدروس ليس لها كتاب مقرر ثابت والمعلم يطرح أسئلةً بدلاً من شرح المحتوى. ينبغي أن يتلقى طفلي تعليماً منظماً. بدون تسلسل فصلي واضح ومحتوى مُختبَر، كيف أعرف أنه يتعلم المادة فعلاً؟',
        bridge: 'يتبع معلمو IB نطاقاً وتسلسلاً مفصّلاً يغطي جميع المحتوى المطلوب — المنهج موجود، غير أنه مُعبَّأ بشكل مختلف. في التعلم التقصيري، يواجه الطلاب المفاهيم من خلال البحث والتجريب والتساؤل بدلاً من الاستقبال السلبي. المعلم ليس غائباً عن العملية — بل يُصمّم التحقيق ويوجّه التفكير ويُقيّم بصرامة. يُطوّر هذا النهج نوعاً مختلفاً من الفهم: فهم يمكن تطبيقه على مواقف جديدة لا مجرد استرجاعه في امتحان مألوف. التقليد العلمي الإسلامي — من منهجية ابن رشد المنطقية إلى تحقيق الغزالي في أسس المعرفة — أقرّ دائماً أن الفهم الحقيقي يأتي بالتقصير والاستقراء لا بالحفظ وحده. IB يتخذ الموقف ذاته في التعلم.',
        goal: 'يُطوّر الطلاب الذين يتعلمون بالتقصير انتقال معرفة أقوى — يستطيعون تطبيق ما يعرفونه على مسائل جديدة. هذا بالضبط ما تبحث عنه مؤسسات رؤية 2030 والجامعات الدولية الكبرى. مهندسو أرامكو السعودية ونيوم ومحلّلوها يحتاجون إلى حل مشكلات جديدة لا إلى استرجاع إجابات الكتاب المدرسي. عادة التقصير التي تتشكّل على مدى سنوات IB مهارة مهنية حقيقية.',
        ibConnection: 'يُعرّف إطار مناهج التعلم ATL الخاص بـ IB خمس فئات من المهارات: التفكير والتواصل والمهارات الاجتماعية وإدارة الذات والبحث. تُنمَّى هذه المهارات بتعمّد عبر جميع المواد وتُقيَّم صراحةً في DP. هي الكفاءات التي تُحدّدها الجامعات وأصحاب العمل بوصفها الأكثر أهميةً للنجاح.',
        whatToAsk: [
          '«هل يمكنك أن تُريني النطاق والتسلسل لهذه المادة؟» — لكل معلم IB واحد؛ فهو يُحدّد كل مفهوم ومهارة يُنمّيها على مدار العام.',
          '«ما المحتوى الذي سيحتاج طفلي معرفته لتقييم الوحدة التجميعي؟» — هناك دائماً معرفة محتوى محددة يتم تقييمها حتى في وحدات التقصير.',
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
      ar: {
        concept: 'نظرية المعرفة لا تُعلّم الشك في الإيمان',
        concern: 'يُخبرني طفلي أن لديه مادةً تُدعى «نظرية المعرفة» يُسأل فيها عن كيفية معرفتنا للأشياء. أخشى أن هذه المادة تُعلّم طفلي الشك في القيم الإسلامية والمعرفة الدينية. إيماننا ليس شيئاً نتساءل عنه — بل هو أساس أسرتنا.',
        bridge: 'نظرية المعرفة مادة في الإبستيمولوجيا — دراسة كيفية عمل أنواع المعرفة المختلفة. تُميّز بين المعرفة الرياضية والعلمية والتاريخية والمعرفة الأصيلة والمعرفة الشخصية وغيرها. لا تطلب من الطلاب التشكيك في وجود الله أو صحة القيم الإسلامية. ما تطرحه هو: كيف ينتج التقصير العلمي معرفةً؟ كيف تعمل الأدلة التاريخية؟ ما العلاقة بين العقل والإيمان؟ هذه الأسئلة لها تقليد عريق ومُبجَّل في الفكر الإسلامي. كتب الغزالي «تهافت الفلاسفة» بوصفه تحديداً هذا النوع من التقصير الإبستيمولوجي المنهجي. وبنى ابن سينا أحد أكثر أطر المعرفة تطوراً في التاريخ البشري. نظرية المعرفة في جوهرها تطرح الأسئلة ذاتها التي طرحها المفكرون المسلمون منذ أكثر من ألف عام. الطلاب الذين يفهمون هذا يجدون أن نظرية المعرفة تُثري إيمانهم لا تُهدّده.',
        goal: 'يكتب كثير من الطلاب السعوديين مقالاتهم في نظرية المعرفة مستكشفين الإبستيمولوجيا الإسلامية — كيف ينتج تقليد الاجتهاد معرفةً دينية، وكيف طوّرت علوم الحديث معايير الأدلة، وكيف ميّز العلماء المسلمون بين المعرفة القطعية والظنية. تقبل IB هذه الرؤى وتُقدّرها. المادة ليست معادية للإيمان؛ بل تهتم بكيفية عمل جميع أشكال المعرفة — بما فيها المعرفة الدينية — فعلياً.',
        ibConnection: 'نظرية المعرفة مادة إلزامية تمتد عامَين في DP تُفضي إلى عرض شفهي ومقال من 1600 كلمة يُقيّمه IB. إلى جانب المقالة الموسّعة، تُسهم بما يصل إلى 3 نقاط إضافية نحو درجة الشهادة البالغة 45 نقطة. هي المكوّن الذي يُميّز IB أكثر من غيره عن A-levels وأغلب الامتحانات الدولية في السياق السعودي.',
        whatToAsk: [
          '«هل يمكنك إعطائي مثالاً على سؤال في نظرية المعرفة يستكشف المعرفة الدينية أو الإسلامية؟» — معظم معلمي نظرية المعرفة ذوي الخبرة يستطيعون فوراً إعطاء أمثلة على مقالات قوية متجذّرة في التقاليد الإيمانية.',
          '«ما الذي يغطيه سجل طفلي في نظرية المعرفة هذا الفصل؟» — السجل مستمر؛ الاطلاع على المحتوى الفعلي يُزيل مخاوف الوالدين عادةً أسرع من أي تفسير عام.',
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
      ar: {
        concept: 'العربية A: عربية طفلك لن تتوقف عند باب المدرسة',
        concern: 'إذا كان طفلي يدرس بالإنجليزية أساساً، هل ستتراجع عربيته؟ هل سيفقد الطلاقة والدقة والصلة بالعربية الفصحى؟ وماذا عن عربية القرآن — هل لها مكان في تعليم IB؟',
        bridge: 'تقدّم IB اللغة العربية وآدابها (العربية A) بوصفها مادة لغة أولى كاملة للناطقين بالعربية أصالةً. هو نفس المنهج الأدبي المتطلِّب كمنهج اللغة الإنجليزية A — يدرس الطلاب الشعر العربي الكلاسيكي والنثر العربي الحديث والتحليل النقدي والتعليق الشفهي والكتابة الموسّعة. ليست مادة تراثية؛ بل دورة أكاديمية صارمة تُعمّق الأمية العربية. كثير من الطلاب السعوديين في IB يجدون أن كتابتهم العربية الرسمية تتحسن تحسناً ملحوظاً من خلال العربية A لأن المادة تتطلب دقةً تحليلية لا تشترطها العربية المحكية. بشأن عربية القرآن: الطلاب الذين يدرسون الشعر الجاهلي والنثر الكلاسيكي والتقليد الأدبي العربي الرسمي يعملون مع اللغة الأقرب إلى العربية القرآنية. العربية A تبني بالضبط الأساس الكلاسيكي الذي تتطلبه الأمية القرآنية.',
        goal: 'يتخرّج طلاب IB السعوديون الذين يأخذون العربية A بأمية عربية رسمية تحليلية صارمة تُكمّل إتقانهم للإنجليزية. هذا الأساس الأكاديمي الثنائي اللغة مُقدَّر جداً من الجامعات السعودية وأرامكو السعودية ومؤسسات رؤية 2030. القدرة على العمل باللغتين العربية والإنجليزية على المستوى الأكاديمي ميزة مهنية حقيقية — وعربية IB A تبنيها بتعمّد.',
        ibConnection: 'اللغة A في أي لغة تُقيَّم على أعلى مستوى في إطار اللغات الخاص بـ IB. يؤدي طلاب العربية A نفس الامتحانات الخارجية التي يؤديها طلاب الإنجليزية A، وتُقيَّم من قِبل IB وفق معايير عالمية. العربية من أكثر خيارات اللغة A شيوعاً على مستوى العالم. تقدّم مدارس في المملكة العربية السعودية والإمارات ومصر تعليم العربية A كاملاً.',
        whatToAsk: [
          '«هل تقدّم المدرسة العربية A، وما النصوص في قائمة القراءة هذا العام؟» — قائمة النصوص تُخبرك بجودة البرنامج الأدبي فوراً.',
          '«كيف تُقيَّم عربية طفلك المكتوبة بمعزل عن مهاراته الإنجليزية؟» — للعربية A معايير تقييم مستقلة غير مرتبطة بالأداء في الإنجليزية.',
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
      ar: {
        concept: 'CAS متطلّب تخرج، لا تقويم نشاط',
        concern: 'يقضي طفلي وقتاً كبيراً في الأنشطة والرياضة والخدمة المجتمعية ضمن ما يُسمى CAS. هذا يبدو وقتاً مأخوذاً من الدراسة. قبول الجامعات السعودية تنافسي — كل ساعة لا تُنفَق في المواد الأساسية تكلفة.',
        bridge: 'CAS — الإبداع والنشاط والخدمة — متطلّب إلزامي في DP. بدون إتمام CAS وتوثيقه بإشراف مشرف، لا يستطيع الطالب الحصول على شهادة IB بصرف النظر عن درجات موادّه. جعل IB هذا إلزامياً لأن الجامعات الكبرى التي يخدمها IB أخبرت IB بما تريده تحديداً: طلاب يُثبتون التزاماً حقيقياً خارج الفصل الدراسي. الطالب السعودي الذي يقود مشروعاً مجتمعياً في حيّه ويطوّر ناتجاً إبداعياً ويحافظ على انضباط بدني يُحضر إلى طلب الجامعة شيئاً لا تستطيع أي نتيجة امتحان وحدها أن تُنتجه. هذا متوافق أيضاً مع القيم الإسلامية حول خدمة المجتمع وتنمية الإنسان كلّه.',
        goal: 'للطلاب السعوديين الذين يستهدفون مؤسسات رؤية 2030 أو برامج قيادة أرامكو السعودية أو الجامعات الدولية: CAS ليس صرفاً للانتباه عن المؤهلات — بل هو جزء من المؤهل. المنحدرون في منح أرامكو السعودية متوقَّع منهم إثبات القيادة والخدمة لا مجرد سجلات أكاديمية. عادات المبادرة والمساهمة التي يبنيها CAS هي بالضبط ما تختار له هذه المؤسسات.',
        ibConnection: 'CAS متطلّب إلزامي في DP من الصف الثاني عشر. يتطلب عملاً موثّقاً عبر الإبداع والنشاط البدني والخدمة بمجموع نحو 150 ساعة مع ملف تأمّلات. لا يمكن الإعفاء منه.',
        whatToAsk: [
          '«ما تجارب CAS التي يخطط لها طفلي، ومن مشرفه في CAS؟» — علاقة المشرف مهمة؛ المشرف الجيد يوجّه جودة التأمل بفاعلية.',
          '«كيف توثّق المدرسة إتمام CAS لطلبات الجامعة؟» — البرامج القوية تُنتج ملف CAS يدعم سرد الطلب بفاعلية.',
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
      ar: {
        title: 'مجموعة واتساب العائلة',
        termsInPlay: ['الدرجات القائمة على المعايير', 'الترتيب الصفي'],
        situation: 'يصل أول تقرير MYP كامل لطفلك في نهاية الصف الثامن. تلتقط صورة له وترسلها إلى مجموعة واتساب العائلة الممتدة، متسائلاً إن كان أحد يعرف كيف يقرأ درجات IB. يسأل والدك أين يقع حفيده في ترتيب الصف. أخوك — الذي لديه ابن في مدرسة حكومية بمتوسط 95% — يقول إن الدرجات تبدو منخفضة له. عمّ زوجتك، المسؤول الكبير في وزارة التعليم، يسأل هل المدرسة معتمدة بشكل صحيح من قِبل الحكومة السعودية.',
        situationNote: 'مجموعات واتساب العائلة هي المكان الذي تجري فيه هذه المحادثات في الثقافة السعودية — وهي المكان المناسب لها. السؤال هو هل تملك المجموعة السياق الكافي لتفسير ما تراه.',
        withUnderstanding: 'تشرح للمجموعة أن درجات IB تتراوح من 1–7 لا نسباً مئوية، وأن الخمسة تعني «إنجاز ملموس» — نتيجة قوية. تشارك تفاصيل المعايير مع والدك وتوضّح أن حفيده حصل على 7/8 في المعرفة و4/8 في التطبيق في السياق — مما يعني أن محادثةً واحدة محددة مع المعلم ستُفيد. يسأل عمّك عن الاعتماد: يمكنك تأكيد أن المدرسة مُفوَّضة من IB، وهو معيار دولي معترف به. مقارنة أخيك بالـ 95% لا تنطبق — أنظمة مختلفة ومقاييس مختلفة. تنتهي محادثة المجموعة بوضوح لا بشك.',
        withoutUnderstanding: 'لا تستطيع شرح الدرجات بثقة للمجموعة. يظل سؤال والدك عن الترتيب الصفي بلا إجابة. مقارنة أخيك بالـ 95% تجلس دون معالجة وتبدأ تبدو ذات معنى. سؤال عمّك عن اعتماد الحكومة يجعلك غير متأكد — لست مدركاً ما يعنيه «مُفوَّض من IB» مقارنةً باعتماد وزارة التعليم السعودية. تمضي مجموعة واتساب قدماً، لكن الشك يبقى. تحجز اجتماعاً مع المدرسة للحصول على إجابات — وهو الخطوة الصحيحة، لكنها تأتي من القلق لا الفضول.',
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
      ar: {
        title: 'سؤال الثانوية العامة',
        termsInPlay: ['شهادة DP', 'المسارات الجامعية', 'المنهج الوطني السعودي'],
        situation: 'طفلك في الصف العاشر. في تجمّع عائلي، يسأل حمو والدك طفلك أي جامعة يخطط لها وهل سيؤدي امتحان الثانوية العامة. يقول طفلك إنه يدرس IB لا الثانوية العامة. يلتفت الحمو إليك: «إذن لا يستطيع التقديم إلى الجامعات السعودية؟» تقول إنك تظن بعض الجامعات تقبل IB، لكنك لست متأكداً. في اليوم التالي تدرك أنك لم تجرِ أبداً محادثةً محددة مع المدرسة حول هذا.',
        situationNote: 'عادةً يطرح هذا السؤال في تجمّع عائلي لا في غرفة اجتماعات المدرسة. الإجابة مهمة — والوقت المناسب للحصول عليها قبل الصف الحادي عشر لا بعد اختيار مواد HL.',
        withUnderstanding: 'تلتقي بمستشار الجامعة في المدرسة. تتعلم: الطلاب في مسار IB في المدارس الدولية عادةً لا يؤدون الثانوية العامة، مما يعني أن الدخول المباشر إلى الجامعات الحكومية السعودية (جامعة الملك سعود، جامعة الملك عبدالعزيز، جامعة الملك فهد للبترول والمعادن) وفق المسار المعتاد غير متاح. لكن: جامعة الملك عبدالله للعلوم والتقنية (كاوست) تقبل IB وتُقدّره تحديداً. بعض الجامعات السعودية الخاصة تقبل IB. برامج المنح والتوظيف في أرامكو السعودية تستقطب خريجي IB تحديداً. معظم عائلات IB السعودية تستهدف جامعات في المملكة المتحدة والولايات المتحدة وأستراليا والإمارات — حيث تحظى شهادة IB بتقدير كبير. إذا كانت عائلتك تستهدف جامعةً حكومية سعودية بعينها، فهذه المحادثة يجب أن تجري الآن، في الصف العاشر، بينما الخيارات لا تزال مفتوحة. تغادر المقابلة بخريطة واضحة.',
        withoutUnderstanding: 'يبقى الغموض. في الصف الثاني عشر، حين يكون اختيار مواد DP محدداً والامتحانات تقترب، يطرح حمو والدك السؤال ذاته في تجمّع عائلي آخر. لا تزال غير قادر على الإجابة بثقة. المسار الذي يسير عليه طفلك قُرِّر بالوضع الافتراضي. إذا كان ثمة مسار نحو جامعة حكومية سعودية تحتاجه عائلتك، فقد أغلق النافذة.',
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
      ar: {
        concept: 'لا درجات مئوية في PYP',
        concern: 'تمنح المدارس الابتدائية السعودية درجات مئوية واضحة يمكنني من خلالها رؤية أين يقف طفلي بالنسبة لتوقعات الصف. يستخدم تقرير PYP لغةً وصفية وملاحظات ملف تعلّم، لكن بلا أرقام. بدون درجة، لا أستطيع تحديد هل طفلي في مقدمة الصف أم يعاني.',
        bridge: 'يستخدم PYP التقارير السردية لأنه في أعمار 3–11 يُبسّط الرقم الواحد ما يتعلمه الطفل فعلاً. يخبرك التقرير السردي بما يفهمه طفلك وكيف يتعامل مع التحديات وأين يتطور لاحقاً — وهو أكثر تشخيصاً من النسبة المئوية لا أقل. المعلم يُقيَّم باستمرار؛ التقرير يُقدّم الأدلة بطريقة مختلفة. حين يدخل طفلك MYP (نحو عمر 11)، تظهر الدرجات المعيارية. عادات التأمل والتقييم الذاتي التي بُنيت في PYP تعني أنهم يدخلون ذلك النظام المدرَّج مدركين كيف يفكرون في تعلّمهم.',
        goal: 'يتأقلم الطلاب القادمون إلى MYP من خلفيات PYP مع التقييم القائم على المعايير بشكل أسرع من الطلاب المنتقلين من مدارس ابتدائية تركّز على المحتوى، لأنهم يفهمون التعلم بالفعل بوصفه عملية — لا مجرد نتيجة. الغياب الظاهر للبيانات في PYP ليس إشارةً إلى أنه لا يُقاس شيء.',
        ibConnection: 'تقارير PYP مبنية وفق معايير منهج IB PYP الخاص، لا نطاق المنهج الوطني السعودي وتسلسله. يُقيّم المعلمون وفق نتائج التعلم في IB PYP ويمكنهم إظهار الكفاءات التي تُقيَّم بالضبط.',
        whatToAsk: [
          '«ما الأدلة المحددة على التقدم التي رأيتها من طفلي هذا الفصل؟» — طلب الأدلة يُحوّل السرد إلى شيء ملموس.',
          '«في أي مجالات ملف المتعلم IB يتطور طفلي أكثر الآن، وأيها لا يزال في طور التطور؟» — ملف المتعلم هو الإطار الأساسي لتقييم PYP.',
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
      ar: {
        concept: 'هل لا يزال طفلي يتعلم العربية في مدرسة PYP؟',
        concern: 'تعمل المدرسة أساساً بالإنجليزية. يعود طفلي يتكلم الإنجليزية أكثر من العربية. أخشى أن عربيته الرسمية تضعف — وأن صلته بالقرآن والعربية الفصحى ستتأثر بسنوات في بيئة إنجليزية الوسيط.',
        bridge: 'يعتمد تعليم اللغة العربية في مدرسة PYP اعتماداً كبيراً على كيفية هيكلة المدرسة لبرنامجها اللغوي. معظم مدارس IB في المملكة العربية السعودية والخليج الأوسع تقدّم العربية لغةً تعليميةً أو برنامجاً لغوياً موازياً صارماً. في مدرسة PYP جيدة الإدارة، تُطوَّر الأمية العربية باستمرار جنباً إلى جنب مع الإنجليزية — لا على حسابها. اسأل المدرسة تحديداً: ما الوقت الأسبوعي لتعليم اللغة العربية، وبموجب أي معايير يُقيَّم؟ حين يدخل طفلك MYP وصولاً إلى DP، تتاح العربية A مادةً كاملة للغة الأولى — وهنا تتعمّق الأمية الأكاديمية العربية بشكل ملحوظ.',
        goal: 'الطفل الذي يتقدم عبر PYP وMYP وDP مع العربية A يتخرج بأمية عربية رسمية تحليلية صارمة — نصوص كلاسيكية ودقة مقالية وتعليق شفهي — قد لا تطوّره كثير من مدارس المناهج العربية الحكومية بنفس العمق. الخطر ليس في IB نفسها؛ بل في كيفية إدارة أي مدرسة بعينها للبرنامج العربي. هذا هو السؤال الذي يجب استيضاحه تحديداً في مدرستك.',
        ibConnection: 'يجب على مدارس IB تقديم لغتين على الأقل عبر PYP وMYP وDP. في السياقات الناطقة بالعربية، يجب أن يكون خيار العربية A أو العربية B متاحاً. اطّلع على وثيقة السياسة اللغوية للمدرسة — كل مدرسة IB مُلزَمة بامتلاكها.',
        whatToAsk: [
          '«كم ساعة أسبوعياً يتلقى طفلي تعليماً بالعربية، وبموجب أي معايير مناهج يُقيَّم؟» — هذا هو السؤال المحوري.',
          '«هل تقدّم المدرسة العربية A في DP، وما النصوص الأدبية في قائمة القراءة؟» — قائمة النصوص تخبرك فوراً هل البرنامج العربي صارم أم لا.',
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
      ar: {
        concept: 'القيم الإسلامية والهوية في مدرسة IB',
        concern: 'تتضمن المدارس الوطنية السعودية مادة التربية الإسلامية مادةً أساسية. مدارس IB ليس فيها منهج إسلامي دراسي إلزامي. أخشى أن ينشأ طفلي بدون تأسيس ديني سليم — وأن الزملاء الدوليين والقيم الغربية ستُضعف هويته.',
        bridge: 'تقدّم مدارس IB في المملكة العربية السعودية عادةً التربية الإسلامية كجزء من متطلبات المنهج المحلي — تُلزم وزارة التعليم السعودية بها للطلاب السعوديين في المدارس المرخّصة. تحقّق من مدرستك مباشرةً عما يُقدَّم وعدد ساعات التدريس. بشأن القيم: ملف المتعلم IB — الإطار الأساسي لجميع برامج IB — يُؤكّد على كون الطالب مبدأياً ومهتماً بالآخرين ومتأمّلاً ومنفتح الذهن. هذه ليست قيماً غربية؛ بل قيم إنسانية متوافقة تماماً مع الأخلاق الإسلامية. لا تطلب IB من الطلاب التخلي عن تقاليدهم الإيمانية — بل تدعوهم للتعامل بتفكّر مع عالم معقّد. كثير من أكثر المسلمين ثقةً وبلاغةً الذين ستلتقي بهم في الجامعات العالمية من خريجي IB.',
        goal: 'الهوية في الطفل المثقّف دولياً لا تضعف بالتعرض — بل تتقوى بالتعبير الصريح عنها في سياق يهمّ. الطلاب السعوديون في IB الذين يستطيعون شرح قيمهم والدفاع عن وجهة نظرهم في ندوة والتفاعل باحترام مع رؤى مختلفة يعودون من الجامعة بهوية متعززة لا مضعَّفة. بيئة IB — حين تُدار بشكل جيد — تُنتج هذا بالضبط.',
        ibConnection: 'مدارس IB في المملكة العربية السعودية تعمل بموجب كل من ترخيص IB وترخيص وزارة التعليم. وهذا يعني أن متطلبات التربية الإسلامية للمواطنين السعوديين شرط في رخصة تشغيل المدرسة. يستطيع المدرسة إظهار كيفية تغطية هذا تحديداً.',
        whatToAsk: [
          '«كم ساعة أسبوعياً يتلقى طفلي التربية الإسلامية، ومن يُدرّسها؟» — هذا سؤال مباشر يمكن الإجابة عنه.',
          '«كيف تدعم المدرسة الطلاب المسلمين خلال رمضان وأوقات الصلاة؟» — طريقة تعامل المدرسة مع هذا تخبرك كثيراً عن مدى جدّيتها تجاه طلابها المسلمين.',
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
      ar: {
        concept: 'اختيار الطالب والتقصير في السنوات الأولى',
        concern: 'يبدو أن طفلي يتخذ قدراً كبيراً من الاختيارات في تعلمه — اختيار الموضوعات وتصميم تحقيقاته الخاصة وإدارة مشاريعه. في المدارس السعودية، المعلم هو السلطة والمنهج واضح. هذا المستوى من اختيار الطالب يبدو غير منضبط، وأخشى أن طفلي لا يطوّر الاحترام للسلطة والتعلم المنظّم الذي سيحتاجه لاحقاً.',
        bridge: 'وكالة الطالب في PYP لا تعني حرية لا محدودة — كل وحدة لها نتائج تعلّم واضحة والمعلم يوجّه التقصير دائماً. الاختيار في كيفية مقاربة التحقيق، لا في ما إذا كان المنهج يُغطَّى. بشأن احترام السلطة: يتعلم طلاب IB التعامل مع خبرة المعلم من خلال التبادل الفكري الحقيقي — وهو شكل أعمق من الاحترام من الاستقبال السلبي. تقليد سؤال المعلم سؤالاً جيداً — كما حثّ عليه النبي ﷺ من خلال ثقافة طلب العلم — هو بالضبط ما يبنيه PYP. الهدف طلاب فضوليون مركّزون قادرون على استيعاب التوجيه — لا طلاب سلبيون.',
        goal: 'الطلاب الذين يطوّرون الوكالة في PYP — القدرة على البدء والتخطيط والمثابرة في السؤال — يصلون إلى المرحلة الثانوية بدافعية أكاديمية أقوى وعادات دراسة مستقلة أفضل. هؤلاء الطلاب هم من ينجحون في DP والجامعة حيث لا أحد يقف فوق رؤوسهم. الحرية المهيكلة المبكرة هي الاستثمار.',
        ibConnection: 'المفهوم المركزي لـ PYP هو ملف المتعلم — مجموعة السمات التي تهدف IB لتنميتها: متقصّي ومفكّر ومتواصل ومبدئي ومنفتح الذهن ومهتم بالآخرين ومجازف ومتوازن ومتأمّل وعارف. تنمّي وكالة الطالب كل هذه السمات في آنٍ واحد.',
        whatToAsk: [
          '«نحو أي نتيجة تعلّم يبني تحقيق طفلي الحالي؟» — المعلم دائماً لديه إجابة؛ هذا يُظهر البنية الكامنة تحت الاختيار.',
          '«كيف يجتمع الصف لمشاركة النتائج؟» — العرض التعاوني للتقصير هو حيث تصبح الوكالة الفردية تعلّماً جماعياً.',
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
      ar: {
        concept: 'الاستعداد لـ MYP',
        concern: 'طفلي ينتقل من PYP إلى MYP. أخشى أن سنوات من التقصير والتقارير السردية لم تُعدّه لشيء سيُدرَّج الآن بشكل صحيح. حين أقارنه بالطلاب القادمين من المدارس الوطنية السعودية بالعمر ذاته، أخشى أن أبناء PYP متأخرون.',
        bridge: 'التحول إلى MYP حقيقي: تصبح المواد تخصصات منفصلة وتظهر الدرجات المعيارية ويزيد حجم الواجبات وترتفع التوقعات الأكاديمية بشكل ملحوظ. لكن PYP مصمَّم تحديداً لبناء الأسس التي يتطلبها MYP — مهارات التقصير والتوجيه الذاتي والقدرة على التفكير في المسائل بدون نموذج جاهز. الطلاب الذين تعاملوا تعاملاً حقيقياً مع PYP يصلون إلى MYP أفضل استعداداً للتفكير التحليلي القائم على المعايير من الطلاب القادمين من مناهج ابتدائية تركّز على المحتوى. ما قد يكونون أقل استعداداً له هو الحجم الهائل من المحتوى — لكن هذه الفجوة تُسدّ بسرعة. الأدوات المفاهيمية هي الأصعب في التنمية وPYP يبنيها.',
        goal: 'الطلاب السعوديون المنتقلون من المدارس الوطنية إلى MYP عادةً لديهم معرفة محتوى قوية لكنهم يحتاجون وقتاً للتكيف مع التقييم بناءً على التفكير التحليلي لا استرجاع المحتوى. طلاب PYP كثيراً ما يكونون العكس — التفكير التحليلي موجود وثقة المحتوى تأتي بسرعة. لا خلفية أفضل من الأخرى؛ بل مزايا مختلفة في بداية رحلة مشتركة.',
        ibConnection: 'تصمّم IB بشكل صريح PYP وMYP بوصفهما سلسلة متصلة. تُحمَل مقاربات التقصير وسمات ملف المتعلم ومهارات مناهج التعلم من PYP إلى MYP ثم إلى DP. الانتقال تصعيد لا إعادة ضبط.',
        whatToAsk: [
          '«كيف ستدعم المدرسة انتقال طفلي إلى التقييم القائم على المعايير في السنة الأولى من MYP؟» — معظم مدارس IB لديها برنامج انتقال محدد؛ اطلب الاطلاع عليه.',
          '«أي المواد تُقيَّم بشكل مختلف أكثر عمّا عايشه طفلي في PYP؟» — يستطيع المعلم تحديد أين سيكون التكيف الأكبر والتخطيط وفقاً لذلك.',
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
          { grade: 1, label: 'Minimal achievement',      ar: 'إنجاز ضئيل'        },
          { grade: 2, label: 'Very limited achievement', ar: 'إنجاز محدود جداً'  },
          { grade: 3, label: 'Limited achievement',      ar: 'إنجاز محدود'       },
          { grade: 4, label: 'Adequate achievement',     ar: 'إنجاز كافٍ'        },
          { grade: 5, label: 'Substantial achievement',  ar: 'إنجاز ملموس'       },
          { grade: 6, label: 'Accomplished achievement', ar: 'إنجاز متميز'       },
          { grade: 7, label: 'Excellent achievement',    ar: 'إنجاز ممتاز'       },
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
      ar: {
        title: 'كيف تعمل درجات MYP',
        intro: 'لا تستخدم مواد MYP نسباً مئوية أو ترتيبات صفية. تستخدم كل مادة أربعة معايير يُقيَّم كل منها من 8. تُجمع تلك الدرجات الأربع إلى مجموع من 32 يتحول إلى درجة نهائية من 1 إلى 7. الخمسة ليست 71%. الأربعة ليست 57%. لا تحوّل.',
        criteriaNote: 'المعايير الأربعة مُسمّاة A وB وC وD — وتقيس أشياء مختلفة في كل مادة. في رياضيات MYP، المعيار A هو «المعرفة والفهم» والمعيار D هو «تطبيق الرياضيات في سياقات الحياة الواقعية». يستطيع الطالب أن يسجّل بقوة في A وبضعف في D. يُظهر التقرير كليهما منفصلَين مما يخبرك بالضبط أين تركّز — شيء لا تستطيع النسبة المئوية قوله أبداً.',
        boundaryNote: 'يستخدم التحويل من المجموع الخام (من 32) إلى الدرجة النهائية (1–7) حدود درجات تحددها كل مدرسة. ثمة تفاوت أيضاً على مستوى المادة: الرياضيات والعلوم تتطلب عادةً درجات خام أعلى لكل مستوى مقارنةً بالعلوم الإنسانية والفنون. قد تُعطي 24/32 في رياضيات MYP درجةً نهائية مختلفة عن 24/32 في مسرح MYP.',
        watchOut: [
          'الأربعة في MYP تعني «إنجاز كافٍ» — وهي درجة ناجحة لا تكاد تكون قريبة من الرسوب. لا تحوّلها إلى 57%. مقاييس النسب المئوية لا تنطبق على درجات IB.',
          'يمكن أن يسجّل طفلك بشكل مختلف جداً على كل معيار داخل المادة ذاتها. 7/8 في المعيار A و3/8 في المعيار D يُعطي معلومات تشخيصية دقيقة حول ما تركّز عليه — ليس مجرد نتيجة واحدة.',
          'تتفاوت حدود الدرجات حسب المدرسة والمادة. الرياضيات والعلوم عادةً تتطلب درجات خام أعلى لكل مستوى مقارنةً بالعلوم الإنسانية. استخدم الحاسبة دليلاً لا تحويلاً دقيقاً.',
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
      ar: {
        title: 'كيف تعمل درجات DP',
        intro: 'تُسجَّل شهادة IB من أصل 45 نقطة. تُسهم ست مواد بما يصل إلى 42 نقطة (تُقيَّم كل منها من 1–7)، ويمكن لنواة الشهادة — المقالة الموسّعة ونظرية المعرفة — إضافة ما يصل إلى 3 نقاط إضافية. تطلب معظم الجامعات التنافسية عالمياً 36–40 نقطة أو أكثر.',
        subjectStructure: 'يدرس الطلاب ست مواد: ثلاث على مستوى أعلى (HL) وثلاث على المستوى العادي (SL). تتضمن مواد HL محتوى أكثر وساعات تدريس أكثر وتقييماً أعمق. كثير من الجامعات البريطانية والأمريكية والدولية تحدد متطلبات درجات HL دنيا للبرامج التنافسية. تتوقع برامج منح أرامكو السعودية عادةً درجات HL قوية في التخصصات التقنية ذات الصلة.',
        coreBonus: {
          title: 'جدول نقاط المقالة الموسّعة + نظرية المعرفة الإضافية',
          note: 'تُقيَّم كل من المقالة الموسّعة (EE) ونظرية المعرفة (ToK) من A إلى E. يُنتجان معاً 0–3 نقاط إضافية وفق هذا الجدول. درجتا E معاً تعنيان عدم منح الشهادة بصرف النظر عن مجاميع المواد.',
        },
        passingRules: [
          'الحصول على 24 نقطة إجمالية كحد أدنى لمنح الشهادة.',
          'عدم الحصول على درجة أقل من 2 (SL) أو 3 (HL) في أي مادة — درجة منخفضة جداً واحدة تُرسب الشهادة حتى لو كان مجموع النقاط كافياً.',
          'يجب استيفاء متطلبات CAS والتوقيع على إتمامها.',
          'عدم الحصول على درجة E في كل من المقالة الموسّعة ونظرية المعرفة معاً.',
          'ألا يزيد عدد الدرجات 1 في جميع المواد على ثلاث.',
        ],
        watchOut: [
          'الطالب الذي لديه 38 نقطة ولكنه يُخفق في شرط (كأن يحصل على 2 في مادة HL) لا يحصل على الشهادة. النقاط وحدها غير كافية.',
          'تُقدّم الجامعات عروضاً مشروطة بناءً على الدرجات التقديرية قبل الامتحانات النهائية. المحادثة مع معلمي المواد في الصف الثاني عشر حول الدرجات التقديرية عالية المخاطر — تعامل معها بجدية لا تقل عن أي تحضير للامتحان النهائي.',
          'التقييم الداخلي يخضع للاعتدال الخارجي. يمكن أن تُعدَّل درجة المعلم من قِبل IB. الطالب الذي يُقدّم تقييماً داخلياً ضعيفاً ويؤدي أداءً جيداً في الامتحانات سيحصل على درجة نهائية أدنى مما يُقترح أداؤه في الامتحان وحده.',
          'إذا كان دخول الجامعة الوطنية السعودية وثيق الصلة بخطط عائلتك، فهذا القرار يجب اتخاذه قبل الصف العاشر. مسار IB DP ومسار الثانوية العامة يتطلبان تحضيراً مختلفاً جوهرياً ولا يمكن السير فيهما معاً.',
        ],
        universityContext: 'للجامعات الدولية: 36–40 نقطة أو أكثر تنافسي لمجموعة راسل البريطانية ومعظم الجامعات الأمريكية والمؤسسات الأسترالية والإماراتية الكبرى؛ 40 فأكثر للأكثر انتقائية. للمؤسسات السعودية: جامعة الملك عبدالله للعلوم والتقنية (كاوست) تعترف بشهادة IB وتُقدّرها صراحةً. بعض الجامعات السعودية الخاصة تقبل IB. معظم الجامعات الوطنية السعودية تطلب الثانوية العامة للقبول المعتاد — تحدّث مع مستشار الجامعة في مدرستك قبل الصف العاشر حول المسار الذي يتناسب مع أهداف عائلتك. برامج منح أرامكو السعودية واستقطاب الخريجين تُقدّر تحديداً حاملي شهادة IB.',
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
    ar: {
      default: [
        'اسأل معلم طفلك: «هل هذا التقييم تكويني أم تجميعي؟» — سؤال واحد يغيّر طريقة قراءتك لكل تغذية راجعة.',
        'ابحث عن معايير التقييم لطفلك في مادة واحدة على منصة التعلم في المدرسة. اقرأ المعايير A–D ولاحظ ما يقيسه كل منها — هذه هي اللغة التي ستستخدمها كل تقارير المستقبل.',
        'لا تحوّل درجات IB إلى نسب مئوية. اسأل بدلاً من ذلك: «كيف تبدو الدرجة 6 في هذه المادة؟» — معرفة الهدف بوضوح تساعد طفلك على الاستهداف بدقة.',
      ],
      new: [
        'الليلة، اسأل طفلك: «ما السؤال الذي يستقصيه صفك هذا الأسبوع؟» — لا «ما الموضوع». إذا استطاع الإجابة بوضوح، فالتعلم التقصيري يعمل.',
        'اطلب من المدرسة معايير التقييم لمادة واحدة. اقرأ ما تقيسه المعايير A–D. هذه هي اللغة التي ستستخدمها كل تقارير المستقبل — فهمها الآن يغيّر طريقة قراءتك لكل تقرير يلي.',
        'استخدم حاسبة درجات MYP في قسم نظام الدرجات مع أحدث درجات تقرير طفلك — وقاوم الدافع لتحويل الناتج إلى نسبة مئوية.',
      ],
      settled: [
        'ابحث عن أحدث تقرير MYP لطفلك وأدخل درجات المعايير في الحاسبة. حدّد أدنى معيار، ثم اسأل معلم المادة: «ما الأدلة المحددة التي ستنقل طفلي من 4 إلى 5 في هذا المعيار؟»',
        'إذا كنت تستخدم تعليماً خصوصياً (مدرس خصوصي)، أخبر المدرس الخاص بمعايير IB التي يعاني معها طفلك واطلب منه محاذاة أسلوب تدريسه مع كيفية تقييم IB لتلك المهارات. الحفظ والتكرار يُفيد في بعض أنواع الأسئلة؛ في الأسئلة التحليلية التي تحمل أكثر الدرجات، قد يعمل ضد الطالب.',
        'حتى لو كان DP لا يزال سنةً أو سنتَين بعيداً، اطّلع على حاسبة DP الآن. فهم هيكل الشهادة يمنع تفكير النسب المئوية من العودة تحت الضغط في الصف الثاني عشر.',
      ],
      "pyp-myp": [
        'اسأل معلم الفصل الرئيسي في MYP: «كيف ستدعم طفلي في فهم التقييم القائم على المعايير في السنة الأولى من MYP؟» — معظم مدارس IB لديها برنامج انتقال محدد.',
        'استخدم حاسبة درجات MYP مع طفلك — دعه يحرّك الأشرطة. الهدف أن يفهم درجاته هو، لا أن تُفسّرها أنت فحسب.',
        'اقرأ قسم PYP لتفهم ما بناه طفلك بالفعل. الطلاب الذين تعاملوا تعاملاً حقيقياً مع PYP يصلون إلى MYP أكثر استعداداً للتفكير التحليلي مما يتوقعه معظم الآباء.',
      ],
      "myp-dp": [
        'إذا كان دخول الجامعة الوطنية السعودية (مسار الثانوية العامة) وثيق الصلة بخطط عائلتك، تحدّث مع مستشار الجامعة في المدرسة الآن — لا في الصف الثاني عشر. مسار IB DP ومسار الثانوية العامة يتطلبان تحضيراً مختلفاً جوهرياً، والنافذة للتغيير تُغلق حول الصف التاسع–العاشر.',
        'افتح حاسبة DP وأدخل الدرجات التقديرية لطفلك. تحقق هل أي مادة في خطر من الإخفاق في شرط الشهادة — هذا أكثر إلحاحاً من رقم مجموع النقاط.',
        'اسأل طفلك: «هل اخترت موضوع مقالتك الموسّعة؟» — كلما بدأت هذه المحادثة مبكراً، كانت جودة البحث أفضل. تغيير الموضوع متأخراً يُنتج باستمرار مقالات أضعف.',
      ],
    },
  },

  glossary: [
    {
      id: 'gloss-001',
      term: 'IB',
      en: { full: 'International Baccalaureate', definition: 'The global organisation that designs and awards the PYP, MYP, and DP programmes. Schools are authorised by the IB and held to the same standards worldwide. The IB is not affiliated with any national curriculum, including Saudi Arabia\'s national curriculum (المنهج الوطني).' },
      ar: { full: 'البكالوريا الدولية', definition: 'المنظمة العالمية التي تصمّم برامج PYP وMYP وDP وتمنحها. تحصل المدارس على تفويض IB وتُلتزم بنفس المعايير عالمياً. IB غير مرتبطة بأي منهج وطني، بما فيها المنهج الوطني السعودي (المنهج الوطني).' },
    },
    {
      id: 'gloss-002',
      term: 'PYP',
      en: { full: 'Primary Years Programme', definition: 'The IB programme for students aged 3–11 (roughly KG to Grade 5/6). Uses inquiry-based, transdisciplinary learning. Narrative reports, no percentage marks or class rankings. Arabic language instruction is typically available as part of the school\'s language programme.' },
      ar: { full: 'برنامج السنوات الأولى', definition: 'برنامج IB للطلاب من 3–11 عاماً (تقريباً من الروضة إلى الصف 5/6). يستخدم التعلم التقصيري متعدد التخصصات. تقارير سردية بلا درجات مئوية أو ترتيبات صفية. تعليم اللغة العربية متاح عادةً كجزء من برنامج المدرسة اللغوي.' },
    },
    {
      id: 'gloss-003',
      term: 'MYP',
      en: { full: 'Middle Years Programme', definition: 'The IB programme for students aged 11–16 (roughly Grades 6–10). Introduces criterion-based grades (1–7) across eight subject groups. First point where formal grades appear — but no percentage marks and no class rank.' },
      ar: { full: 'برنامج السنوات المتوسطة', definition: 'برنامج IB للطلاب من 11–16 عاماً (تقريباً الصفوف 6–10). يُدخل درجات معيارية (1–7) عبر ثماني مجموعات مواد. أول نقطة تظهر فيها درجات رسمية — لكن بلا نسب مئوية وبلا ترتيب صفي.' },
    },
    {
      id: 'gloss-004',
      term: 'DP',
      en: { full: 'Diploma Programme', definition: 'The IB programme for students aged 16–19 (Grades 11–12). Leads to the IB Diploma, scored out of 45. Widely recognised by universities in the UK, US, Australia, UAE, and internationally. Not a direct substitute for the Tawjihiyya (الثانوية العامة) at most Saudi government universities — check with your school counsellor about the specific universities your family is targeting.' },
      ar: { full: 'برنامج الدبلوما', definition: 'برنامج IB للطلاب من 16–19 عاماً (الصفوف 11–12). يُفضي إلى شهادة IB من أصل 45 نقطة. معترف به على نطاق واسع من جامعات المملكة المتحدة والولايات المتحدة وأستراليا والإمارات ودولياً. ليس بديلاً مباشراً للثانوية العامة في معظم الجامعات الحكومية السعودية — تحقق مع مستشار الجامعة في مدرستك حول الجامعات المحددة التي تستهدفها عائلتك.' },
    },
    {
      id: 'gloss-005',
      term: 'HL',
      en: { full: 'Higher Level', definition: 'One of two subject tiers in the DP. Students take three HL subjects — more content, more teaching hours, and deeper assessment than SL. Universities often specify minimum HL grade requirements for competitive programmes. Saudi Aramco scholarship programmes typically expect strong HL results.' },
      ar: { full: 'المستوى الأعلى', definition: 'أحد مستويَي المواد في DP. يأخذ الطلاب ثلاث مواد HL — محتوى أكثر وساعات تدريس أكثر وتقييم أعمق من SL. كثيراً ما تحدد الجامعات متطلبات درجات HL دنيا للبرامج التنافسية. تتوقع برامج منح أرامكو السعودية عادةً نتائج HL قوية.' },
    },
    {
      id: 'gloss-006',
      term: 'SL',
      en: { full: 'Standard Level', definition: 'The second subject tier in the DP. Students take three SL subjects alongside three HL subjects. Minimum passing grade for SL is 2.' },
      ar: { full: 'المستوى العادي', definition: 'المستوى الثاني للمواد في DP. يأخذ الطلاب ثلاث مواد SL جنباً إلى جنب مع ثلاث مواد HL. الدرجة الدنيا للنجاح في SL هي 2.' },
    },
    {
      id: 'gloss-007',
      term: 'IA',
      en: { full: 'Internal Assessment', definition: 'Coursework marked by the classroom teacher, then externally moderated by the IB. Contributes 20–30% of the final DP grade. Not equivalent to homework or classwork participation marks — the IB moderation process adjusts marks across all schools globally.' },
      ar: { full: 'التقييم الداخلي', definition: 'أعمال دراسية تُقيَّم من قِبل معلم الفصل ثم تخضع للاعتدال الخارجي من قِبل IB. يُسهم بـ 20–30% من درجة DP النهائية. لا يعادل درجات الواجبات أو مشاركة الصف — عملية اعتدال IB تُعدّل الدرجات عبر جميع المدارس عالمياً.' },
    },
    {
      id: 'gloss-008',
      term: 'EE',
      en: { full: 'Extended Essay', definition: 'A 4,000-word independent research paper completed in Year 12–13, externally assessed by the IB. Graded A–E. Together with ToK, contributes up to 3 bonus diploma points. UK and US universities read the EE during applications. Saudi students may choose to anchor their EE in Islamic studies, Arabic literature, or Saudi history and social science topics.' },
      ar: { full: 'المقالة الموسّعة', definition: 'ورقة بحثية مستقلة من 4000 كلمة تُكتمل في الصفين 12–13، تُقيَّم خارجياً من قِبل IB. تُقيَّم من A إلى E. جنباً إلى جنب مع نظرية المعرفة، تُسهم بما يصل إلى 3 نقاط إضافية للشهادة. تقرأ جامعات المملكة المتحدة والولايات المتحدة المقالة الموسّعة أثناء الطلبات. يمكن للطلاب السعوديين اختيار تأسيس مقالتهم في الدراسات الإسلامية أو الأدب العربي أو مواضيع التاريخ السعودي والعلوم الاجتماعية.' },
    },
    {
      id: 'gloss-009',
      term: 'ToK',
      en: { full: 'Theory of Knowledge', definition: 'A mandatory two-year DP course exploring how different kinds of knowledge work — mathematical, scientific, historical, indigenous, and personal. Does not ask students to question religious faith; explores how knowledge is produced, evaluated, and communicated across disciplines. Islamic epistemology (the \'ilm tradition, ijtihad, Hadith sciences) is a valid and valued area of inquiry within ToK. Together with EE, contributes up to 3 bonus diploma points.' },
      ar: { full: 'نظرية المعرفة', definition: 'مادة DP إلزامية لمدة عامَين تستكشف كيفية عمل أنواع المعرفة المختلفة — الرياضية والعلمية والتاريخية والأصيلة والشخصية. لا تطلب من الطلاب التشكيك في الإيمان الديني؛ بل تستكشف كيف تُنتَج المعرفة وتُقيَّم وتُنقَل عبر التخصصات. الإبستيمولوجيا الإسلامية (تقليد العلم والاجتهاد وعلوم الحديث) مجال بحث صالح ومُقدَّر داخل نظرية المعرفة. جنباً إلى جنب مع المقالة الموسّعة، تُسهم بما يصل إلى 3 نقاط إضافية للشهادة.' },
    },
    {
      id: 'gloss-010',
      term: 'CAS',
      en: { full: 'Creativity, Activity, Service', definition: 'A mandatory DP requirement. Students document approximately 150 hours across creativity (artistic or entrepreneurial pursuits), activity (physical challenges), and service (community contribution). Cannot be waived — without signed CAS completion, the diploma is not awarded. Islamic values of service to community (خدمة المجتمع) and developing the whole person align closely with CAS\'s intent.' },
      ar: { full: 'الإبداع والنشاط والخدمة', definition: 'متطلّب DP إلزامي. يوثّق الطلاب نحو 150 ساعة عبر الإبداع (المساعي الفنية أو الريادية) والنشاط (التحديات البدنية) والخدمة (المساهمة المجتمعية). لا يمكن الإعفاء منه — بدون إتمام CAS موقّعاً، لا تُمنح الشهادة. القيم الإسلامية لخدمة المجتمع وتنمية الإنسان كلّه تتوافق توافقاً وثيقاً مع مقصود CAS.' },
    },
  ],

  pypBridge: {
    ar: {
      title: 'انتقال PYP → MYP: ما الذي يتغير للعائلات السعودية',
      intro: 'الانتقال من برنامج السنوات الابتدائية إلى برنامج السنوات المتوسطة هو اللحظة التي تجد فيها معظم العائلات السعودية الأمور الأكثر إرباكاً. تبدو تقارير PYP مثل تعليقات المعلمين السردية — دافئة وتنموية بدون أرقام. تصل تقارير MYP مع درجات معيارية وحدود درجات وحاوية مفردات لا تشبه تماماً تقرير المنهج الوطني السعودي الذي تفهمه عائلتك الممتدة. يُعدّك هذا الدليل لما يتغير بالتحديد.',
      changes: [
        { aspect: 'تنسيق التقرير', pyp: 'تعليقات سردية وأدلة على المحفظة. بلا أرقام درجات. يوصف التقدم من حيث مراجع التعلم ومهارات الاستقصاء.', myp: 'درجات معيارية A–D (كل واحدة من 0–8). درجة إجمالية تُطابِق درجة من 1–7. بلا نسبة مئوية. ردود فعل موسعة مرتبطة بمعايير محددة.' },
        { aspect: 'أسلوب التقييم', pyp: 'المراقبة المستمرة والمحافظ الطلابية وحفل PYP في نهاية السنة (السنة 5). التقييم متكامل في التعلم — قد لا يعرف الطلاب أنهم يتم تقييمهم.', myp: 'تقييمات تجميعية رسمية. تقييم المواد بشكل مستقل. اعتدال IB الخارجي في MYP 5 (السنة 10). يعرف الطلاب متى يتم تقييمهم.' },
        { aspect: 'هيكل المادة', pyp: 'وحدات استقصاء متكاملة عبر المواد. قد تجمع وحدة واحدة بين العلوم واللغة الإنجليزية والدراسات الاجتماعية تحت فكرة مركزية واحدة.', myp: 'مجموعات مواد متميزة. الرياضيات مادة خاصة بها معاييرها الخاصة. العلوم منفصلة عن الدراسات الإنسانية. يبدأ الطلاب في التخصص.' },
        { aspect: 'اتصال الوالدين', pyp: 'مؤتمرات يقودها الطالب ومشاركة المحفظة. يعرض الطفل تعلمه الخاص أمامك.', myp: 'اجتماعات الوالدين والمعلمين التقليدية. يعرض المعلمون الأدلة المعيارية. دورك هو طرح أسئلة معيارية محددة.' }
      ],
      firstYearNote: 'السنة 7 سنة تعديل كبيرة. سيبدو بطاقة التقرير أكثر رسمية. لا تقلق من الدرجات من 3 أو 4 في الفصل الدراسي الأول — السنة 1 من MYP هي سنة تعلم النظام. الطالب الذي يترك السنة 7 وهو يفهم ما تعنيه معايير A من خلال D في كل مادة قد أحرز تقدماً هائلاً بغض النظر عن الدرجات المحددة.',
      whatToAsk: [
        'ما الذي يحتاج طفلي إلى فعله للانتقال من درجته الحالية إلى الدرجة التالية في المعيار C في [المادة]؟',
        'كيف يقترب طفلي من الانتقال من الاستقصاء المتكامل في PYP إلى التعلم الخاص بمادة معينة في MYP؟',
        'كيف يبدو أول تقييم تجميعي كبير في السنة 7 — ماذا يجب أن نستعد له؟'
      ],
    },
    en: {
      title: 'The PYP → MYP Transition: What Changes for Saudi Families',
      intro: 'The move from Primary Years to Middle Years Programme is the moment most Saudi families find most disorienting. PYP reports look like narrative teacher comments — warm, developmental, without numbers. MYP reports arrive with criterion scores, grade boundaries, and a vocabulary that looks nothing like the Saudi national curriculum report your extended family understands. This guide prepares you for what specifically changes.',
      changes: [
        { aspect: 'Report format', pyp: 'Narrative comments and portfolio evidence. No grade numbers. Progress is described in terms of learning dispositions and inquiry skills.', myp: 'Criterion scores A–D (each 0–8). A total score that maps to a grade 1–7. No percentage. Extended feedback tied to specific criteria.' },
        { aspect: 'Assessment style', pyp: 'Ongoing observation, student portfolios, the PYP Exhibition (Year 5). Assessment is integrated into learning — students may not know they are being assessed.', myp: 'Formal summative assessments. Subjects assessed independently. External IB moderation at MYP 5 (Year 10). Students know when they are being assessed.' },
        { aspect: 'Subject structure', pyp: 'Integrated units of inquiry cross subjects. A unit might combine Science, English, and Social Studies under one central idea.', myp: 'Distinct subject groups. Mathematics is its own subject with its own criteria. Sciences separate from Humanities. Students begin to specialise.' },
        { aspect: 'Parent communication', pyp: 'Student-led conferences, portfolio sharing. The child presents their own learning to you.', myp: 'Traditional parent–teacher meetings. Teachers present criterion evidence. Your role is to ask specific questions about criteria.' }
      ],
      firstYearNote: 'Year 7 is a significant adjustment year. The report card will look more formal. Do not be alarmed by scores of 3 or 4 in the first semester — MYP Year 1 is the year of learning the system. A student who leaves Year 7 understanding what criteria A through D mean in each subject has made enormous progress, regardless of the specific scores.',
      whatToAsk: [
        'What does my child need to do to move from their current score to the next grade in Criterion C in [subject]?',
        'How is my child approaching the transition from integrated PYP inquiry to subject-specific MYP learning?',
        'What does the first major summative assessment look like in Year 7 — what should we prepare for?'
      ],
    }
  },
};
