export const uaeIbParent = {
  id: 'parent-uae-ib-001',
  slug: 'uae-ib',
  country: 'uae',
  program: 'IB',
  languages: ['en', 'ar'],

  journeyStages: [
    {
      id: 'new',
      en: {
        label: 'New to IB',
        description: 'Child has recently joined an IB school, possibly from MOE. Family navigating the dual identity question.',
        highlight: 'Adjusting to a new curriculum and language balance',
      },
      ar: {
        label: 'جديد على البكالوريا الدولية',
        description: 'التحق الطفل مؤخراً بمدرسة البكالوريا الدولية، ربما من مدرسة حكومية. العائلة تتعامل مع سؤال الهوية المزدوجة.',
        highlight: 'التكيف مع منهج جديد وتوازن اللغة',
      },
    },
    {
      id: 'settled',
      en: {
        label: 'Settled in the School',
        description: 'Year 2 and beyond. Reports arriving. Extended family asking about EmSAT. Anxiety about Arabic language proficiency growing.',
        highlight: 'Managing family expectations and language continuity',
      },
      ar: {
        label: 'استقرار في المدرسة',
        description: 'السنة الثانية وما بعدها. وصول التقارير. العائلة الممتدة تسأل عن اختبار الإمارات. القلق بشأن مستوى اللغة العربية يتزايد.',
        highlight: 'إدارة توقعات العائلة واستمرارية اللغة',
      },
    },
    {
      id: 'pyp-myp',
      en: {
        label: 'Growing Internationally-Minded (Age 10–12)',
        description: 'Child is developing IB learner profile. Parents are proud but also managing community comparison pressure and questions about "staying Emirati".',
        highlight: 'Balancing international mindedness with cultural roots',
      },
      ar: {
        label: 'التطور الفكري العالمي (عمر 10–12)',
        description: 'الطفل ينمي صفات المتعلم في البكالوريا الدولية. الآباء فخورون لكنهم يدارون ضغط المقارنة المجتمعية وأسئلة حول "البقاء إماراتياً".',
        highlight: 'الموازنة بين العقلية العالمية والجذور الثقافية',
      },
    },
    {
      id: 'myp-dp',
      en: {
        label: 'Pre-Diploma Decision (Year 10–11)',
        description: 'EmSAT decision point. University pathway clarity needed. Arabic in DP. Federal university vs. private/overseas. Real stakes.',
        highlight: 'Critical decision point: national vs. international university pathways',
      },
      ar: {
        label: 'قبل الدبلوم: نقطة القرار (السنة 10–11)',
        description: 'نقطة قرار اختبار الإمارات. تحتاج وضوح مسار الجامعة. اللغة العربية في الدبلوم. جامعة اتحادية أو خاصة/خارجية. أسباب حقيقية.',
        highlight: 'نقطة القرار الحرجة: مسارات الجامعات الوطنية مقابل الدولية',
      },
    },
  ],

  meta: {
    en: {
      title: 'IB for Emirati Families',
      subtitle: 'Understanding International Baccalaureate at UAE schools — and how it fits your child\'s future',
      intro: 'This guide is written for Emirati parents whose children attend International Baccalaureate schools in the UAE. Whether your child is in PYP, MYP, or preparing for DP, this module addresses the specific questions and concerns that matter to Emirati families: How do we keep our child grounded in Arabic and Emirati values while they pursue an international education? How does IB actually prepare them for UAE universities — especially if they want to study at UAEU, Zayed University, or HCT? And why should we trust a curriculum that looks so different from what we know?',
      reassurance: 'These are legitimate questions. This guide gives you clear, honest answers — not marketing language. We explain what IB really is, how the grading system works, what happens to Arabic language learning, and crucially, what you need to do to keep both pathways (IB and UAE federal university admission) open for your child. You will walk away knowing exactly what to expect and what to ask your child\'s school.',
      uaeUniversityNote: 'Critical fact: IB Diploma alone does NOT grant automatic entry to UAE federal universities. Students who want to study at UAEU, Zayed University, or HCT must also take and pass the EmSAT examination. This module shows you how to prepare for both.',
    },
    ar: {
      title: 'البكالوريا الدولية للعائلات الإماراتية',
      subtitle: 'فهم البكالوريا الدولية في المدارس الإماراتية — وكيف تناسب مستقبل طفلك',
      intro: 'تم تصميم هذا الدليل لأولياء الأمور الإماراتيين الذين يدرس أطفالهم في مدارس البكالوريا الدولية في الإمارات. سواء كان طفلك في برنامج السنوات الابتدائية أو المتوسطة أو يستعد للدبلوم، يعالج هذا الموديول الأسئلة والمخاوف المحددة التي تهم العائلات الإماراتية: كيف نحافظ على ارتباط طفلنا باللغة العربية والقيم الإماراتية بينما يتابع التعليم الدولي؟ كيف يحضره البرنامج فعلاً للجامعات الإماراتية — خاصة إذا أراد الدراسة في الجامعة الإماراتية أو جامعة زايد أو كليات التكنولوجيا العليا؟ لماذا يجب أن نثق في منهج يبدو مختلفاً جداً عما نعرفه؟',
      reassurance: 'هذه أسئلة مشروعة. يقدم لك هذا الدليل إجابات واضحة وصريحة — لا لغة تسويق. نشرح ما هي البكالوريا الدولية حقاً، وكيفية عمل نظام التقييم، وما يحدث لتعلم اللغة العربية، والأهم من ذلك، ما يجب عليك فعله للحفاظ على كلا المسارين (البكالوريا الدولية والقبول بالجامعات الاتحادية الإماراتية) مفتوحين لطفلك. ستغادر وأنت تعرف بالضبط ما يمكنك توقعه وما يجب أن تسأل عنه في المدرسة.',
      uaeUniversityNote: 'حقيقة حاسمة: دبلوم البكالوريا الدولية وحده لا يضمن القبول التلقائي بالجامعات الاتحادية الإماراتية. الطلاب الذين يريدون الدراسة في الجامعة الإماراتية أو جامعة زايد أو كليات التكنولوجيا العليا يجب أن يجتازوا اختبار الإمارات للمعايير التعليمية. يوضح لك هذا الموديول كيفية الاستعداد لكليهما.',
    },
  },

  openingHook: {
    en: {
      situation: [
        'An Emirati father — a manager at a government ministry in Abu Dhabi — enrolls his son at one of the emirates\' top private IB schools. The tuition is substantial. He and his wife have made the choice deliberately: they want their son to be educated globally, to think critically, to be ready for a competitive world. They also want him to remain grounded in his culture and language.',
        'Three months into Year 7, the boy\'s MYP report arrives. The father opens the school portal and reads it carefully. There are no percentages. There is no rank. The comments are detailed and written in English, with criteria he doesn\'t immediately understand: "Demonstrates partial understanding of geographical systems and processes." A grade of 4 out of 7. The father feels a small chill. Is this good? Is his son struggling?',
        'That evening, his brother visits — his children attend a MOE school, and both are consistently in the top 5% of their classes. The uncle asks how the boy is doing. The father, uncertain, shows him the report. The uncle reads it, looks puzzled, and says: "How do you know if he\'s doing well? Where is his percentage? Where is his rank? And what about EmSAT? If he wants to study at Zayed University or UAEU, isn\'t he falling behind?" The father has no answer. He goes to bed that night wondering if the expensive IB school is preparing his son for the UAE — or away from it.',
      ],
      question: 'Is this school preparing my son for his future in the UAE? Or am I paying for something that won\'t count here?',
      directAnswer: 'Yes, IB is preparing your son for the UAE — but only if you understand two crucial parallel pathways: the IB education itself (which develops thinking, resilience, and global competence) AND the separate EmSAT pathway required for federal university admission. This module shows you exactly what to do to keep both doors open, and why the apparent strangeness of IB grading is actually a sign of a more rigorous education.',
    },
    ar: {
      situation: [
        'والد إماراتي — مدير في إحدى الجهات الحكومية بأبو ظبي — يسجل ابنه في إحدى أفضل المدارس الخاصة بالبكالوريا الدولية في الإمارات. الرسوم كبيرة. اختار هو وزوجته هذا بتعمد: يريدان لابنهما تعليماً عالمياً، أن يفكر بنقد، أن يكون جاهزاً لعالم تنافسي. يريدان أيضاً أن يبقى متجذراً في ثقافته ولغته.',
        'بعد ثلاثة أشهر من بداية السنة السابعة، يصل تقرير برنامج السنوات المتوسطة. يفتح الوالد بوابة المدرسة ويقرأه بعناية. لا توجد نسب مئوية. لا توجد رتبة. التعليقات مفصلة وكتبت باللغة الإنجليزية، تحتوي على معايير لا يفهمها على الفور: "يُظهر فهماً جزئياً للأنظمة والعمليات الجغرافية." درجة 4 من أصل 7. يشعر الوالد بقشعريرة صغيرة. هل هذا جيد؟ هل يعاني ابنه؟',
        'في تلك الليلة، يزوره أخوه — أطفاله يدرسون في مدرسة حكومية، وكلاهما من أفضل 5% في فصولهما باستمرار. يسأل العم عن حال الولد. الوالد، غير متأكد، يريه التقرير. يقرأه العم، يبدو مرتبكاً، ويقول: "كيف تعرف إذا كان يتعلم بشكل جيد؟ أين النسبة المئوية؟ أين الرتبة؟ وماذا عن اختبار الإمارات؟ إذا أراد أن يدرس في جامعة زايد أو الجامعة الإماراتية، ألا يتأخر؟" الوالد ليس لديه إجابة. يذهب إلى السرير تلك الليلة يتساءل عما إذا كانت مدرسة البكالوريا الدولية المكلفة تحضر ابنه لمستقبله في الإمارات — أو يدفع ثمناً لشيء لن ينفع هنا.',
      ],
      question: 'هل تحضر هذه المدرسة ابني لمستقبله في الإمارات؟ أم أنني أدفع لشيء لن يعترف به هنا؟',
      directAnswer: 'نعم، البكالوريا الدولية تحضر ابنك للإمارات — لكن فقط إذا فهمت مسارين متوازيين حاسمين: التعليم بالبكالوريا الدولية نفسه (الذي ينمي التفكير والمرونة والكفاءة العالمية) وبالتوازي المسار المنفصل لاختبار الإمارات الذي تتطلبه الجامعات الاتحادية. يوضح لك هذا الموديول بالضبط ما يجب فعله للحفاظ على كلا الباب مفتوحين، ولماذا الغرابة الظاهرة في نظام التقييم هي في الواقع علامة على تعليم أكثر صرامة.',
    },
  },

  cards: [
    {
      id: 'card-emsat-federal-uni',
      relevantAt: ['myp-dp'],
      ibComponent: 'DP',
      en: {
        concept: 'EmSAT and UAE Federal University Admission',
        concern: 'My child is doing well in IB. Isn\'t that enough to get into UAEU, Zayed University, or HCT? Do they really require EmSAT on top of everything else?',
        bridge: 'Yes, they do. And here\'s why this is actually good news: IB prepares your child superbly for EmSAT. The two pathways are complementary, not competing.',
        goal: 'Understand the real requirement, plan early, and ensure your child sits EmSAT alongside DP study.',
        ibConnection: 'The IB DP curriculum — especially in mathematics, sciences, and languages — develops exactly the analytical and reasoning skills EmSAT measures. A student excelling in IB typically finds EmSAT preparation straightforward. The issue is NOT academic readiness; it is simply knowing to do both. Many Emirati families assume IB is a ticket to overseas universities only. It isn\'t. But you do need to take the extra step of registering your child for EmSAT in Year 12, usually in the first sitting (typically March or April). Your school can guide you. Start this conversation early — by Year 10 or 11 at the latest. If your child wants to attend UAEU, ZU, or HCT, treat EmSAT registration as a non-negotiable administrative task, just like DP subject registration.',
        whatToAsk: [
          'Has my child\'s school made clear when and how to register for EmSAT?',
          'What are the EmSAT testing dates for the coming year?',
          'Can the school recommend any EmSAT preparation resources or tutors?',
          'Do any DP subjects (especially Mathematics, English, Arabic) directly prepare for EmSAT content?',
          'If my child wants to study at a federal university, what is the typical EmSAT score requirement for the program they\'re interested in?',
        ],
      },
      ar: {
        concept: 'اختبار الإمارات والقبول بالجامعات الاتحادية',
        concern: 'طفلي يتفوق في البكالوريا الدولية. ألا يكفي هذا للدخول إلى الجامعة الإماراتية أو جامعة زايد أو كليات التكنولوجيا العليا؟ هل يطلبون فعلاً اختبار الإمارات بالإضافة إلى كل شيء آخر؟',
        bridge: 'نعم، يطلبونه. والخبر السار هنا هو أن البكالوريا الدولية تحضر طفلك بشكل ممتاز لاختبار الإمارات. المساران متكاملان وليسا متنافسين.',
        goal: 'افهم المتطلب الحقيقي، خطط مبكراً، وتأكد من أن طفلك يجلس لاختبار الإمارات بموازاة دراسة الدبلوم.',
        ibConnection: 'منهج دبلوم البكالوريا الدولية — خاصة في الرياضيات والعلوم واللغات — ينمي بالضبط مهارات التحليل والاستدلال التي يقيسها اختبار الإمارات. الطالب الذي يتفوق في البكالوريا الدولية عادة يجد الاستعداد لاختبار الإمارات مباشراً. المشكلة ليست الجاهزية الأكاديمية؛ إنها ببساطة معرفة القيام بكليهما. تفترض العديد من العائلات الإماراتية أن البكالوريا الدولية تذكرة إلى الجامعات الخارجية فقط. لا. لكن عليك أن تتخذ خطوة إضافية لتسجيل طفلك في اختبار الإمارات في السنة الثانية عشرة، عادة في الجلسة الأولى (عادة مارس أو أبريل). يمكن لمدرسة طفلك أن تساعدك. ابدأ هذه المحادثة مبكراً — بحلول السنة 10 أو 11 على الأقل. إذا أراد طفلك الدراسة في جامعة اتحادية، اعتبر تسجيل اختبار الإمارات كمهمة إدارية لا تقبل التفاوض، تماماً مثل تسجيل مواد الدبلوم.',
        whatToAsk: [
          'هل أوضحت مدرسة طفلي متى وكيف يتسجل لاختبار الإمارات؟',
          'ما مواعيد اختبار الإمارات للسنة القادمة؟',
          'هل يمكن للمدرسة أن توصي بموارد أو مدرسين خصوصيين للاستعداد لاختبار الإمارات؟',
          'هل تحضر أي مواد دبلوم مباشرة لمحتوى اختبار الإمارات (خاصة الرياضيات والإنجليزية والعربية)؟',
          'إذا أراد طفلي الدراسة في جامعة اتحادية، ما درجة اختبار الإمارات النموذجية المطلوبة للبرنامج الذي يهتم به؟',
        ],
      },
    },
    {
      id: 'card-arabic-language',
      relevantAt: ['new', 'settled', 'pyp-myp'],
      ibComponent: 'All programmes',
      en: {
        concept: 'Arabic Language Learning in IB Schools',
        concern: 'My greatest worry is that my child\'s Arabic will weaken in an international school. I want him to be fluent in classical Arabic, not just colloquial. Will IB schools neglect this?',
        bridge: 'No. IB schools in the UAE are required by KHDA (Knowledge and Human Development Authority) and ADEK (Abu Dhabi Department of Education and Knowledge) to offer Arabic language instruction and Islamic Education to Emirati students. And crucially, IB offers Arabic A Language and Literature — a course of identical rigor to English A.',
        goal: 'Ensure your child continues serious Arabic study throughout IB, and understand how IB language courses can maintain or even deepen Arabic competence.',
        ibConnection: 'Here\'s what matters: Arabic A (Language and Literature) in IB is NOT a lower-tier language option. It is the same level of challenge as English A for native speakers, and it is taught by certified IB examiners. The course covers classical and contemporary texts, rhetoric, and literary analysis — exactly the skills needed for formal Arabic proficiency and for the Arabic component of EmSAT. Additionally, all KHDA- and ADEK-registered IB schools in the UAE must provide Arabic and Islamic Education courses aligned to national standards. This is a regulatory requirement, not a voluntary add-on. Your child\'s Arabic does not stop at the school gate. If you are concerned about fluency, speak directly to the school about ensuring your child takes Arabic A in the DP (if offered), and encourage engagement with Arabic language and cultural activities outside school. Many Emirati families find that IB students actually develop stronger classical Arabic skills because the course is more rigorous and intentional than they might receive in a standard international school.',
        whatToAsk: [
          'Is Arabic A offered in the DP at my child\'s school? If not, are there other rigorous Arabic language courses?',
          'How does the Arabic curriculum align with KHDA/ADEK standards?',
          'Are there Arabic language extracurricular activities (debate, creative writing, literature clubs)?',
          'What does the school do to ensure Emirati students don\'t lose classical Arabic proficiency?',
          'How are Islamic Education and Arabic integrated into the PYP and MYP?',
        ],
      },
      ar: {
        concept: 'تعليم اللغة العربية في مدارس البكالوريا الدولية',
        concern: 'أكبر قلق لدي هو أن تضعف اللغة العربية لدى طفلي في مدرسة دولية. أريده أن يكون بليغاً في اللغة العربية الفصحى، وليس فقط اللغة الدارجة. هل تتجاهل مدارس البكالوريا الدولية هذا؟',
        bridge: 'لا. مدارس البكالوريا الدولية في الإمارات مطالبة بموجب قوانين هيئة المعرفة والتنمية البشرية وديوان التعليم والمعرفة بأبو ظبي بتقديم تعليم اللغة العربية والتربية الإسلامية للطلاب الإماراتيين. والأهم من ذلك، توفر البكالوريا الدولية اللغة العربية أ (اللغة والأدب) — دورة بنفس صرامة الإنجليزية أ.',
        goal: 'تأكد من أن طفلك يواصل الدراسة الجادة للعربية طوال فترة البكالوريا الدولية، وافهم كيف يمكن لدورات اللغة في البكالوريا الدولية أن تحافظ على أو حتى تعمق الكفاءة العربية.',
        ibConnection: 'إليك ما يهم: اللغة العربية أ (اللغة والأدب) في البكالوريا الدولية ليست خياراً لغوياً من طبقة أدنى. إنها بنفس مستوى الصعوبة مثل الإنجليزية أ للناطقين الأصليين، وتُدرّس من قبل ممتحنين معتمدين في البكالوريا الدولية. تغطي الدورة النصوص الكلاسيكية والمعاصرة والبلاغة والتحليل الأدبي — بالضبط المهارات اللازمة للإتقان الرسمي للعربية وللمكون العربي في اختبار الإمارات. بالإضافة إلى ذلك، يجب على جميع مدارس البكالوريا الدولية المسجلة لدى هيئة المعرفة والتنمية البشرية وديوان التعليم والمعرفة بأبو ظبي تقديم دورات اللغة العربية والتربية الإسلامية المتوافقة مع المعايير الوطنية. هذا متطلب تنظيمي، وليس إضافة اختيارية. لغة طفلك العربية لا تتوقف عند بوابة المدرسة. إذا كنت قلقاً بشأن الطلاقة، تحدث مباشرة مع المدرسة حول ضمان أخذ طفلك للغة العربية أ في الدبلوم (إن توفرت)، وشجع الانخراط في أنشطة اللغة العربية والثقافية خارج المدرسة. تجد العديد من العائلات الإماراتية أن طلاب البكالوريا الدولية يطورون في الواقع مهارات عربية فصحى أقوى لأن الدورة أكثر صرامة وتعمداً مما قد يتلقونه في مدرسة دولية معيارية.',
        whatToAsk: [
          'هل تُقدّم اللغة العربية أ في الدبلوم في مدرسة طفلي؟ إذا لم تكن كذلك، هل هناك دورات لغة عربية صارمة أخرى؟',
          'كيف يتوافق منهج اللغة العربية مع معايير هيئة المعرفة والتنمية البشرية وديوان التعليم والمعرفة؟',
          'هل توجد أنشطة لاصفية للغة العربية (نقاشات، كتابة إبداعية، نوادي أدبية)؟',
          'ما الذي تفعله المدرسة للتأكد من أن الطلاب الإماراتيين لا يفقدون كفاءة اللغة العربية الفصحى؟',
          'كيف يتم دمج التربية الإسلامية واللغة العربية في السنوات الابتدائية والمتوسطة؟',
        ],
      },
    },
    {
      id: 'card-criterion-grades',
      relevantAt: ['new', 'settled'],
      ibComponent: 'MYP',
      en: {
        concept: 'Understanding Criterion-Based Grades (1–7 Scale)',
        concern: 'My child\'s MOE-school friends get percentage marks and a class rank. My child gets a number from 1 to 7 with a comment about "criteria." It looks vague. How do I know if she\'s doing well?',
        bridge: 'The criterion scale is actually more precise than percentages. It tells you not just how much content she knows, but how well she understands it. A grade of 5 in a criterion-based system is genuinely a strong result.',
        goal: 'Read MYP reports with confidence, and interpret what the grades actually mean for your child\'s understanding and trajectory.',
        ibConnection: 'MOE schools use percentage-based marking: 90% is excellent, 75% is good, etc. IB uses criterion-referenced assessment, which is fundamentally different and, in educational research, considered more rigorous. Here\'s what it means: Instead of a percentage reflecting how much content was covered, a criterion-based grade reflects the depth and quality of understanding against a specific standard. An MYP grade of 7 means your child has demonstrated a comprehensive understanding and can apply knowledge in unfamiliar contexts. A 5 means solid understanding with minor gaps. A 3 means developing understanding with notable support needed. A 1 means little to no understanding. Crucially, external examiners in IB (not just the teacher) validate the grade, which is why you can trust it. If your child\'s report shows mixed grades (say, a 5 in English, a 6 in Science, a 4 in Maths), this is normal and useful: it tells you where she is strong and where she may benefit from support. The comments in the report explain the reasoning. Read those comments carefully — they are more informative than a percentage ever could be. If a grade seems low but the comments sound positive, ask the teacher to clarify. Often, the grade reflects a gap in one specific area (e.g., exam technique) rather than overall ability.',
        whatToAsk: [
          'Can the teacher explain what a grade of [X] means in this specific subject?',
          'Is the grade based on exams only, or does it include classwork and coursework?',
          'What does my child need to do to move from a 5 to a 6 in this subject?',
          'Are there specific criteria or skills my child should focus on before the next assessment?',
          'How is this criterion-based grade different from a percentage-based grade?',
        ],
      },
      ar: {
        concept: 'فهم الدرجات المعتمدة على المعايير (مقياس 1–7)',
        concern: 'أصدقاء طفلتي من مدارس وزارة التربية يحصلون على نسب مئوية ورتبة في الفصل. طفلتي تحصل على رقم من 1 إلى 7 مع تعليق عن "المعايير". يبدو غامضاً. كيف أعرف إذا كانت تتعلم بشكل جيد؟',
        bridge: 'مقياس المعايير هو في الواقع أكثر دقة من النسب المئوية. إنه يخبرك ليس فقط كم من المحتوى تعرفه، بل كم هو جودة فهمها له. درجة 5 في نظام معتمد على المعايير هي بالفعل نتيجة قوية.',
        goal: 'اقرأ تقارير السنوات المتوسطة بثقة، وفسّر ما تعنيه الدرجات فعلاً لفهم وتقدم طفلتك.',
        ibConnection: 'تستخدم مدارس وزارة التربية تقييماً مبنياً على النسبة المئوية: 90٪ ممتاز، 75٪ جيد، إلخ. تستخدم البكالوريا الدولية تقييماً مرجعياً معياري، وهو مختلف بشكل أساسي وتعتبره الأبحاث التعليمية أكثر صرامة. هنا ما معناه: بدلاً من نسبة مئوية تعكس كم من المحتوى تم تغطيته، تعكس درجة معتمدة على المعايير عمق وجودة الفهم مقابل معيار محدد. درجة 7 في السنوات المتوسطة تعني أن طفلتك أظهرت فهماً شاملاً ويمكنها تطبيق المعرفة في سياقات غير مألوفة. الـ 5 تعني فهماً متيناً مع فجوات طفيفة. الـ 3 تعني فهماً نامياً يحتاج دعماً ملحوظاً. الـ 1 تعني فهماً قليلاً أو بلا فهم. بشكل حاسم، ممتحنون خارجيون في البكالوريا الدولية (وليس المعلم فقط) يصدّقون الدرجة، وهذا لماذا يمكنك الثقة بها. إذا أظهر تقرير طفلتك درجات مختلطة (مثلاً، 5 في الإنجليزية، 6 في العلوم، 4 في الرياضيات)، هذا طبيعي ومفيد: إنه يخبرك أين هي قوية وأين قد تستفيد من الدعم. التعليقات في التقرير تشرح الأساس المنطقي. اقرأ تلك التعليقات بعناية — إنها أكثر إفادة من نسبة مئوية على الإطلاق. إذا بدت درجة منخفضة لكن التعليقات تبدو إيجابية، اطلب من المعلم توضيح الأمر. غالباً، تعكس الدرجة فجوة في منطقة محددة واحدة (مثلاً، تقنية الامتحان) وليس القدرة الإجمالية.',
        whatToAsk: [
          'هل يمكن للمعلم أن يشرح ما تعنيه درجة [X] في هذا الموضوع المحدد؟',
          'هل الدرجة مبنية على الامتحانات فقط، أم تشمل العمل في الفصل والعمل الكتابي؟',
          'ماذا يجب على طفلتي أن تفعل للانتقال من 5 إلى 6 في هذا الموضوع؟',
          'هل هناك معايير أو مهارات محددة يجب أن تركز عليها طفلتي قبل التقييم التالي؟',
          'كيف تختلف هذه الدرجة المعتمدة على المعايير عن درجة مبنية على النسبة المئوية؟',
        ],
      },
    },
    {
      id: 'card-ib-vision-2071',
      relevantAt: ['pyp-myp', 'myp-dp'],
      ibComponent: 'All programmes',
      en: {
        concept: 'IB and UAE Vision 2071: Alignment with National Goals',
        concern: 'IB feels international and international-focused. My child is Emirati. I want them to be rooted in their own culture and to contribute to the UAE. Will IB pull them away from this?',
        bridge: 'No. UAE Vision 2071 explicitly calls for innovation, critical thinking, and internationally-minded graduates. IB directly serves this national goal. Choosing IB for your child is not choosing against the UAE — it is investing in the kind of leader the UAE needs.',
        goal: 'See IB not as a departure from Emirati identity, but as an investment in the type of human capital UAE 2071 demands.',
        ibConnection: 'UAE Vision 2071 sets out the country\'s ambitions for the next 50 years. It identifies the profile of the graduate needed: someone who is innovative, resilient, open-minded, able to navigate complexity, grounded in values, and capable of critical thought. This is almost word-for-word the IB Learner Profile. The IB Learner Profile defines students who are inquirers, knowledgeable, thinkers, communicators, principled, open-minded, caring, risk-takers, balanced, and reflective. Compare this to Vision 2071\'s call for graduates who are "innovative problem-solvers," who "think critically," who are "connected to their identity and values," and who "contribute to inclusive growth." There is no tension. An Emirati child in an IB school is not choosing an international identity over an Emirati one. She is developing the skills the UAE has explicitly said it needs: research capability, creative problem-solving, cross-cultural collaboration, and resilience. These skills compound when rooted in Arabic language, Islamic values, and Emirati citizenship — which is precisely what the school is required to provide. Your child can (and should) be both: deeply rooted in her culture and heritage, AND equipped with the global perspective and critical thinking that Vision 2071 demands. IB is a tool for this dual identity, not a threat to it.',
        whatToAsk: [
          'How does the school explicitly connect IB learning to UAE Vision 2071 and national identity?',
          'Are there school assemblies or units that focus on Emirati heritage alongside global citizenship?',
          'How are Islamic values and Emirati citizenship integrated into the curriculum across all subjects?',
          'What opportunities does the school offer for students to contribute to the local community (not just the international one)?',
          'How does the school celebrate Emirati students and their role as future leaders of the UAE?',
        ],
      },
      ar: {
        concept: 'البكالوريا الدولية ورؤية الإمارات 2071: التوافق مع الأهداف الوطنية',
        concern: 'البكالوريا الدولية تبدو دولية وموجهة للدول. طفلي إماراتي. أريده أن يكون متجذراً في ثقافته وأن يساهم في الإمارات. هل ستبعده البكالوريا الدولية عن هذا؟',
        bridge: 'لا. رؤية الإمارات 2071 تدعو بوضوح إلى الابتكار والتفكير النقدي والخريجين ذوي العقلية العالمية. البكالوريا الدولية تخدم هذا الهدف الوطني مباشرة. اختيار البكالوريا الدولية لطفلك ليس اختياراً ضد الإمارات — إنه استثمار في نوع القيادة التي تحتاجها الإمارات.',
        goal: 'انظر إلى البكالوريا الدولية ليس كرحيل عن الهوية الإماراتية، بل كاستثمار في نوع رأس المال البشري الذي تطالب به الإمارات 2071.',
        ibConnection: 'رؤية الإمارات 2071 تحدد طموحات الدولة للسنوات الخمسين القادمة. تحدد ملف الخريج المطلوب: شخص مبتكر، متماسك، منفتح الذهن، قادر على التعامل مع التعقيد، متجذر في القيم، وقادر على التفكير النقدي. هذا يقارب حرفياً ملف المتعلم في البكالوريا الدولية. يحدّد ملف المتعلم في البكالوريا الدولية الطلاب كمستقصين، عالمين، مفكرين، متواصلين، مبدئيين، منفتحي الذهن، مهتمين، متخذي مخاطر، متوازنين، وتأمليين. قارن هذا مع دعوة الرؤية 2071 لخريجين "حلّالي مشاكل مبتكرين"، الذين "يفكرون بنقد"، الذين هم "متصلون بهويتهم وقيمهم"، والذين "يساهمون في النمو الشامل". لا توجد توتر. طفلة إماراتية في مدرسة البكالوريا الدولية لا تختار هوية دولية على حساب هوية إماراتية. إنها تنمي المهارات التي قالت الإمارات بوضوح إنها تحتاجها: القدرة على البحث، حل المشاكل الإبداعية، التعاون بين الثقافات، والمرونة. هذه المهارات تتسارع عندما تكون متجذرة في اللغة العربية والقيم الإسلامية والمواطنة الإماراتية — وهذا بالضبط ما المدرسة مطالبة بتوفيره. طفلك يمكن (ويجب) أن تكون كلا الشيء: متجذرة بعمق في ثقافتها وتراثها، ومجهزة بالمنظور العالمي والتفكير النقدي الذي تطالب به الرؤية 2071. البكالوريا الدولية أداة لهذه الهوية المزدوجة، وليست تهديداً لها.',
        whatToAsk: [
          'كيف تربط المدرسة بوضوح تعلم البكالوريا الدولية برؤية الإمارات 2071 والهوية الوطنية؟',
          'هل هناك تجمعات مدرسية أو وحدات تركز على التراث الإماراتي بالتوازي مع المواطنة العالمية؟',
          'كيف يتم دمج القيم الإسلامية والمواطنة الإماراتية في المنهج عبر جميع المواضيع؟',
          'ما الفرص التي توفرها المدرسة للطلاب للمساهمة في المجتمع المحلي (وليس فقط الدولي)؟',
          'كيف تحتفل المدرسة بالطلاب الإماراتيين ودورهم كقادة مستقبليين للإمارات؟',
        ],
      },
    },
    {
      id: 'card-no-ranking',
      relevantAt: ['settled', 'pyp-myp', 'myp-dp'],
      ibComponent: 'All programmes',
      en: {
        concept: 'No Class Ranking — A Feature, Not a Limitation',
        concern: 'My child\'s MOE school publishes class rankings. I can see exactly where she stands. IB schools don\'t rank students. How do I know how she\'s doing relative to her peers?',
        bridge: 'The absence of ranking is intentional and aligns with IB philosophy — and with UAE\'s own direction on education. It is not a gap; it is a choice that reflects how education should work.',
        goal: 'Understand why IB rejects ranking, and see this as a sign of a more developmentally appropriate and educationally sound approach.',
        ibConnection: 'MOE schools publish national rankings because the national system is competitive and norm-referenced: each student\'s value is measured against peers. IB deliberately rejects this approach. Here\'s why: Research in educational psychology shows that ranking creates anxiety, reduces intrinsic motivation (replacing it with comparison anxiety), and particularly harms high-performing students by making achievement about ego rather than learning. Instead, IB focuses on criterion-referenced assessment: Is this student meeting the criteria? Are they improving? Are they developing the Learner Profile? Notably, this approach aligns perfectly with UAE\'s strategic direction. UAE Vision 2071 explicitly calls for a shift from competitive, rank-based culture to a culture of collaboration and collective problem-solving. The Knowledge Economy demands people who can think together, not people who see peers as competitors. By not ranking, IB schools are teaching students the collaborative mindset the UAE economy increasingly requires. If you want to know how your child is doing, ask her teachers specific questions: What are her strengths? Where does she need support? How is she growing as an IB learner? Is she meeting the criterion for each subject? These conversations are more useful than a rank, because they are specific and actionable. Your child\'s education is not a race. The IB approach to assessment reflects this truth.',
        whatToAsk: [
          'Instead of ranking, what does the school tell you about your child\'s progress toward IB criteria?',
          'Are there conferences where you can discuss your child\'s learning in detail?',
          'How does the school measure growth and development over time, if not through ranking?',
          'What does "meeting the criterion" mean for your child\'s next steps?',
          'If you have concerns about your child\'s progress, how should you raise them with the school?',
        ],
      },
      ar: {
        concept: 'عدم وجود ترتيب الفصل — ميزة، ليست محدودية',
        concern: 'مدرسة طفلتي من وزارة التربية تنشر ترتيب الفصل. يمكنني أن أرى بالضبط أين تقف. مدارس البكالوريا الدولية لا تصنف الطلاب. كيف أعرف كيف تتعلم بالنسبة لأقرانها؟',
        bridge: 'غياب الترتيب مقصود ويتوافق مع فلسفة البكالوريا الدولية — ومع اتجاه الإمارات نفسه حول التعليم. إنها ليست فجوة؛ إنها اختيار يعكس كيف يجب أن يعمل التعليم.',
        goal: 'افهم لماذا ترفض البكالوريا الدولية الترتيب، وانظر إلى هذا كعلامة على نهج أكثر ملاءمة للنمو وسليم تعليمياً.',
        ibConnection: 'مدارس وزارة التربية تنشر ترتيباً وطنياً لأن النظام الوطني تنافسي ومرجعي بالنسبة: قيمة كل طالب تُقاس مقابل الأقران. البكالوريا الدولية ترفض هذا النهج بتعمد. هنا السبب: الأبحاث في علم النفس التعليمي تظهر أن الترتيب ينشئ قلقاً، يقلل الدافعية الجوهرية (ويستبدلها بقلق المقارنة)، وبشكل خاص يضر الطلاب ذوي الأداء العالي بجعل الإنجاز عن الأنانية بدلاً من التعلم. بدلاً من ذلك، تركز البكالوريا الدولية على التقييم المعياري المرجعي: هل يلبي هذا الطالب المعايير؟ هل يتحسن؟ هل ينمي ملف المتعلم؟ بشكل ملحوظ، هذا النهج يتوافق تماماً مع الاتجاه الاستراتيجي للإمارات. رؤية الإمارات 2071 تدعو بوضوح للتحول من ثقافة تنافسية قائمة على الترتيب إلى ثقافة التعاون وحل المشاكل الجماعي. الاقتصاد القائم على المعرفة يتطلب أشخاصاً يمكنهم التفكير معاً، وليس أشخاصاً يرون الأقران كمنافسين. بعدم الترتيب، تعلّم مدارس البكالوريا الدولية الطلاب العقلية التعاونية التي يتطلبها الاقتصاد الإماراتي بشكل متزايد. إذا أردت معرفة كيف تتعلم طفلتك، اطرح على معلميها أسئلة محددة: ما نقاط قوتها؟ أين تحتاج إلى دعم؟ كيف تنمو كمتعلمة في البكالوريا الدولية؟ هل تلبي معايير كل موضوع؟ هذه المحادثات أكثر فائدة من ترتيب، لأنها محددة وقابلة للتنفيذ. تعليم طفلك ليس سباقاً. نهج البكالوريا الدولية للتقييم يعكس هذه الحقيقة.',
        whatToAsk: [
          'بدلاً من الترتيب، ماذا تخبر المدرسة عن تقدم طفلتك نحو معايير البكالوريا الدولية؟',
          'هل هناك اجتماعات حيث يمكنك مناقشة تعلم طفلتك بالتفصيل؟',
          'كيف تقيس المدرسة النمو والتطور بمرور الوقت، إن لم تكن من خلال الترتيب؟',
          'ماذا تعني "تلبية المعيار" للخطوات التالية لطفلتك؟',
          'إذا كان لديك قلق بشأن تقدم طفلتك، كيف يجب أن ترفعيه مع المدرسة؟',
        ],
      },
    },
  ],

  pypCards: [
    {
      id: 'pyp-card-inquiry',
      en: {
        concept: 'Inquiry-Based Learning vs. MOE Curriculum',
        concern: 'In Year 1, my child\'s PYP report talks about "inquiry" and "units of inquiry." These words don\'t appear in MOE reports. What is she actually learning?',
        bridge: 'Inquiry is how children naturally learn. PYP structures this into themes that invite deep exploration across all subjects, not isolated subject study.',
        goal: 'Understand PYP structure and see that inquiry learning develops stronger conceptual understanding than traditional textbook instruction.',
        ibConnection: 'MOE schools organize learning by subject: Arabic, Mathematics, Science, Social Studies, etc., each with its own textbook and assessments. PYP organizes learning differently: around themes (called "Units of Inquiry") that connect across all subjects. For example, a Year 3 unit might be "How the World Works: Water Systems." In this unit, children study water in science (evaporation, precipitation), in geography (rivers, oceans), in mathematics (measurement, statistics on rainfall), in language (reading and writing about water conservation), and in art (representing water). This integrated approach is not less rigorous than MOE; it is differently rigorous. It teaches children to see connections and apply knowledge across domains — a skill that MOE\'s subject-by-subject approach does not develop as naturally. Research shows PYP students develop stronger conceptual understanding and better problem-solving skills by age 10–12 compared to students in purely subject-divided curricula. The reports will look different from what you expect, but they are tracking exactly what matters: Is your child curious? Is she making connections? Can she articulate what she\'s learning? Is she developing agency in her learning? If the PYP report is positive on these, your child is on a strong trajectory.',
        whatToAsk: [
          'What is the current Unit of Inquiry, and which subjects are involved?',
          'How can I support my child\'s learning at home within this unit?',
          'What skills is the unit developing (beyond content knowledge)?',
          'How will the school assess my child\'s understanding at the end of the unit?',
        ],
      },
      ar: {
        concept: 'التعلم القائم على الاستقصاء مقابل منهج وزارة التربية',
        concern: 'في السنة الأولى، يتحدث تقرير PYP لطفلتي عن "الاستقصاء" و"وحدات الاستقصاء". هذه الكلمات لا تظهر في تقارير وزارة التربية. ماذا تتعلم فعلاً؟',
        bridge: 'الاستقصاء هو كيف يتعلم الأطفال بشكل طبيعي. يهيكل البرنامج هذا في وحدات تدعو للاستكشاف العميق عبر جميع المواضيع، وليس دراسة الموضوعات المعزولة.',
        goal: 'افهم هيكل البرنامج ورى أن التعلم بالاستقصاء ينمي فهماً مفاهيمياً أقوى من التعليم المدرسي التقليدي.',
        ibConnection: 'مدارس وزارة التربية تنظم التعلم حسب الموضوع: العربية، الرياضيات، العلوم، الدراسات الاجتماعية، إلخ، كل واحد مع كتابه الدراسي الخاص والتقييمات. ينظم البرنامج التعلم بشكل مختلف: حول مواضيع (تسمى "وحدات الاستقصاء") تربط عبر جميع المواضيع. على سبيل المثال، قد تكون وحدة في السنة الثالثة "كيف يعمل العالم: الأنظمة المائية." في هذه الوحدة، يدرس الأطفال الماء في العلوم (التبخر، الهطول)، في الجغرافيا (الأنهار، المحيطات)، في الرياضيات (القياس، الإحصائيات حول هطول الأمطار)، في اللغة (القراءة والكتابة عن حفظ الماء)، وفي الفن (تمثيل الماء). هذا النهج المتكامل ليس أقل صرامة من وزارة التربية؛ إنه مختلف من حيث الصرامة. يعلم الأطفال أن يرى الروابط ويطبق المعرفة عبر المجالات — مهارة لا ينميها نهج وزارة التربية حسب الموضوع بنفس الطبيعة. الأبحاث تظهر أن طلاب البرنامج ينمون فهماً مفاهيمياً أقوى ومهارات حل مشاكل أفضل بحلول سن 10–12 مقارنة بالطلاب في المناهج الموزعة على الموضوعات بالكامل. ستبدو التقارير مختلفة عما تتوقعه، لكنها تتابع بالضبط ما يهم: هل طفلتك فضولية؟ هل تصنع روابط؟ هل يمكنها التعبير عما تتعلمه؟ هل تنمي قيادة في تعلمها؟ إذا كان تقرير البرنامج إيجابياً على هذه الأمور، فإن طفلتك على مسار قوي.',
        whatToAsk: [
          'ما وحدة الاستقصاء الحالية، وأي المواضيع متورطة؟',
          'كيف يمكنني دعم تعلم طفلتي في البيت ضمن هذه الوحدة؟',
          'ما المهارات التي تنميها الوحدة (بما يتجاوز معرفة المحتوى)؟',
          'كيف ستقيّم المدرسة فهم طفلتي في نهاية الوحدة؟',
        ],
      },
    },
    {
      id: 'pyp-card-arabic-islamic',
      en: {
        concept: 'Arabic and Islamic Education in PYP',
        concern: 'My child speaks Arabic at home but I\'m worried the PYP environment is English-heavy. Will she lose her Arabic if it\'s only taught a few hours a week?',
        bridge: 'Arabic and Islamic Education are core components of PYP in UAE schools, taught daily and integrated into other learning, not isolated add-ons.',
        goal: 'Ensure your child continues strong Arabic and Islamic learning in PYP, and see how the school weaves these into the wider curriculum.',
        ibConnection: 'KHDA and ADEK regulation requires all PYP schools in the UAE to provide dedicated Arabic language and Islamic Education instruction to Emirati students, integrated with the broader IB inquiry curriculum. Arabic is not a "foreign language" option taught twice a week; it is a core subject with daily instruction. Islamic Education likewise is a core subject, not an elective. The way the school structures this matters. In strong programs, Arabic and Islamic concepts are woven into Units of Inquiry naturally. For example, in a Unit on "Community," students study Islamic concepts of service and social responsibility (Islamic context), read Arabic literature about community (language context), and research community initiatives in the UAE (social studies context). This integration is more powerful than teaching Arabic and Islamic Education as isolated subjects. Your role is to ask the school specifically: How many hours per week is Arabic taught? Is Islamic Education integrated into units or taught separately? Are there Arabic-language books and resources in the classroom? Does the school celebrate Islamic and Emirati occasions? A strong program will have clear answers and evidence of daily Arabic and Islamic instruction.',
        whatToAsk: [
          'How many hours per week is Arabic language taught?',
          'Is Islamic Education integrated into Units of Inquiry, or taught separately?',
          'What Arabic texts and literature are children reading in class?',
          'How does the school ensure Arabic is not an "add-on" but a core part of the curriculum?',
          'Are there opportunities for children to develop confidence and pride in Arabic language use?',
        ],
      },
      ar: {
        concept: 'اللغة العربية والتربية الإسلامية في برنامج السنوات الابتدائية',
        concern: 'طفلتي تتحدث العربية في البيت لكنني قلقة من أن بيئة البرنامج ثقيلة باللغة الإنجليزية. هل ستفقد لغتها العربية إذا تُدرّس فقط بضع ساعات في الأسبوع؟',
        bridge: 'اللغة العربية والتربية الإسلامية هي مكونات أساسية في برنامج السنوات الابتدائية في المدارس الإماراتية، تُدرّس يومياً وتُدمج في التعلم الآخر، وليست إضافات معزولة.',
        goal: 'تأكد من أن طفلتك تواصل التعلم القوي للعربية والتربية الإسلامية في البرنامج، وانظر كيف تنسج المدرسة هذه في المنهج الأوسع.',
        ibConnection: 'تتطلب لوائح هيئة المعرفة والتنمية البشرية وديوان التعليم والمعرفة أن توفر جميع مدارس البرنامج في الإمارات تعليم اللغة العربية المخصص والتربية الإسلامية للطلاب الإماراتيين، مدمجة مع منهج البكالوريا الدولية الاستقصائي الأوسع. اللغة العربية ليست خياراً "للغة أجنبية" يُدرّس مرتين في الأسبوع؛ إنها موضوع أساسي بتعليم يومي. التربية الإسلامية كذلك موضوع أساسي، وليست اختيارية. كيفية تنظيم المدرسة لهذا مهمة. في البرامج القوية، تُنسج مفاهيم اللغة العربية والتربية الإسلامية في وحدات الاستقصاء بشكل طبيعي. على سبيل المثال، في وحدة عن "المجتمع"، يدرس الطلاب مفاهيم إسلامية عن الخدمة والمسؤولية الاجتماعية (السياق الإسلامي)، يقرأون الأدب العربي عن المجتمع (سياق اللغة)، ويبحثون المبادرات المجتمعية في الإمارات (سياق الدراسات الاجتماعية). هذا التكامل أقوى من تعليم اللغة العربية والتربية الإسلامية كموضوعات معزولة. دورك هو أن تسأل المدرسة بوضوح: كم ساعة في الأسبوع تُدرّس اللغة العربية؟ هل التربية الإسلامية مدمجة في وحدات الاستقصاء أم تُدرّس بشكل منفصل؟ هل هناك كتب وموارد باللغة العربية في الفصل؟ هل تحتفل المدرسة بالمناسبات الإسلامية والإماراتية؟ برنامج قوي سيكون لديه إجابات واضحة وأدلة على تعليم عربي وإسلامي يومي.',
        whatToAsk: [
          'كم ساعة في الأسبوع تُدرّس اللغة العربية؟',
          'هل التربية الإسلامية مدمجة في وحدات الاستقصاء، أم تُدرّس بشكل منفصل؟',
          'ما النصوص والأدب العربي التي يقرأها الأطفال في الفصل؟',
          'كيف تضمن المدرسة أن اللغة العربية ليست "إضافة" لكن جزء أساسي من المنهج؟',
          'هل هناك فرص لتطوير ثقة واعتزاز الأطفال باستخدام اللغة العربية؟',
        ],
      },
    },
  ],

  gradeSystem: {
    myp: {
      en: {
        title: 'MYP Grading: Understanding the 1–7 Scale',
        intro: 'IB MYP (Middle Years Programme) does not use percentages. Instead, each subject is graded on a scale of 1 to 7, based on criterion-referenced assessment. This means your child\'s grade reflects how well she demonstrates understanding against specific, published criteria — not how much content she covered compared to peers.',
        criteriaNote: 'Each subject has its own criteria (typically 4–5 criteria per subject, such as "Knowing and Understanding," "Developing Skills," "Using Knowledge in New Contexts," and "Communicating Ideas"). A student\'s achievement in each criterion is assessed, and her overall grade is the average of her criterion levels.',
        boundaryNote: 'The numerical boundaries shown below are guidelines. Schools use a combination of formative and summative assessment throughout the year to determine grades. Your child\'s grade might be determined by exams, projects, presentations, classwork, and homework — depending on the subject and the school.',
        descriptors: [
          { grade: 1, label: 'Minimal Understanding', ar: 'فهم أدنى' },
          { grade: 2, label: 'Little Understanding', ar: 'فهم قليل' },
          { grade: 3, label: 'Developing Understanding', ar: 'فهم نامٍ' },
          { grade: 4, label: 'Adequate Understanding', ar: 'فهم كافٍ' },
          { grade: 5, label: 'Substantial Understanding', ar: 'فهم كبير' },
          { grade: 6, label: 'Excellent Understanding', ar: 'فهم متميز' },
          { grade: 7, label: 'Outstanding Understanding', ar: 'فهم استثنائي' },
        ],
        boundaries: [
          { grade: 1, min: 0, max: 5 },
          { grade: 2, min: 6, max: 9 },
          { grade: 3, min: 10, max: 14 },
          { grade: 4, min: 15, max: 18 },
          { grade: 5, min: 19, max: 23 },
          { grade: 6, min: 24, max: 27 },
          { grade: 7, min: 28, max: 32 },
        ],
        watchOut: [
          'A grade of 4 is NOT a "failing" or "below average" grade. It means "adequate understanding" — a solid, respectable result. Many parents see a 4 and worry; in the 1–7 system, a 4 is normal for a Year 7–8 student.',
          'Your child\'s grades may vary across subjects. She might get a 5 in English and a 3 in Mathematics. This is normal and tells you where she is strong and where she needs support.',
          'MYP grades at the end of Year 5 do NOT automatically predict DP performance in Year 12. Middle years grades and DP grades use different subject groupings and assessment methods.',
          'Criterion grades are not "subjective." Externally-moderated assessments ensure consistency across schools.',
        ],
      },
      ar: {
        title: 'تقييم برنامج السنوات المتوسطة: فهم مقياس 1–7',
        intro: 'لا يستخدم برنامج السنوات المتوسطة في البكالوريا الدولية النسب المئوية. بدلاً من ذلك، يتم تقييم كل موضوع على مقياس من 1 إلى 7، على أساس التقييم المرجعي معياري. هذا يعني أن درجة طفلتك تعكس مدى جودة إظهارها للفهم مقابل معايير محددة ومنشورة — وليس كم من المحتوى غطت مقارنة بالأقران.',
        criteriaNote: 'لكل موضوع معاييره الخاصة (عادة 4–5 معايير لكل موضوع، مثل "المعرفة والفهم" و"تطوير المهارات" و"استخدام المعرفة في سياقات جديدة" و"التواصل بالأفكار"). يتم تقييم إنجاز الطالب في كل معيار، وتكون درجتها الكلية متوسط مستويات المعايير.',
        boundaryNote: 'الحدود الرقمية المبينة أدناه هي إرشادات. تستخدم المدارس مزيجاً من التقييم التكويني والتجميعي طوال السنة لتحديد الدرجات. قد يتم تحديد درجة طفلتك من خلال الامتحانات والمشاريع والعروض التقديمية والعمل في الفصل والواجبات المنزلية — حسب الموضوع والمدرسة.',
        descriptors: [
          { grade: 1, label: 'فهم أدنى', ar: 'فهم أدنى' },
          { grade: 2, label: 'فهم قليل', ar: 'فهم قليل' },
          { grade: 3, label: 'فهم نامٍ', ar: 'فهم نامٍ' },
          { grade: 4, label: 'فهم كافٍ', ar: 'فهم كافٍ' },
          { grade: 5, label: 'فهم كبير', ar: 'فهم كبير' },
          { grade: 6, label: 'فهم متميز', ar: 'فهم متميز' },
          { grade: 7, label: 'فهم استثنائي', ar: 'فهم استثنائي' },
        ],
        boundaries: [
          { grade: 1, min: 0, max: 5 },
          { grade: 2, min: 6, max: 9 },
          { grade: 3, min: 10, max: 14 },
          { grade: 4, min: 15, max: 18 },
          { grade: 5, min: 19, max: 23 },
          { grade: 6, min: 24, max: 27 },
          { grade: 7, min: 28, max: 32 },
        ],
        watchOut: [
          'درجة 4 ليست درجة "فاشلة" أو "أقل من المتوسط". إنها تعني "فهماً كافياً" — نتيجة صلبة وجديرة بالاحترام. يرى العديد من الآباء درجة 4 ويقلقون؛ في نظام 1–7، درجة 4 طبيعية لطالب في السنة 7–8.',
          'قد تختلف درجات طفلتك عبر المواضيع. قد تحصل على 5 في الإنجليزية و 3 في الرياضيات. هذا طبيعي ويخبرك أين هي قوية وأين تحتاج إلى دعم.',
          'درجات برنامج السنوات المتوسطة في نهاية السنة الخامسة لا تتوقع تلقائياً أداء الدبلوم في السنة الثانية عشرة. درجات السنوات المتوسطة ودرجات الدبلوم تستخدم تجميعات مواضيع مختلفة وطرق تقييم مختلفة.',
          'درجات المعايير ليست "ذاتية". التقييمات المعدلة خارجياً تضمن الاتساق عبر المدارس.',
        ],
      },
    },
    dp: {
      en: {
        title: 'DP Grading: Understanding the 1–7 Scale and Points System',
        intro: 'The DP uses the same 1–7 criterion scale as the MYP, but adds a second layer: points earned in subjects are converted to a total diploma score out of 45 points. The total score determines whether a student receives the IB Diploma. You need to understand both the subject grades (1–7) and the diploma points system.',
        subjectStructure: 'In the DP, students take 6 subjects over two years. Three subjects are taken at Higher Level (HL, 240 taught hours) and three at Standard Level (SL, 150 taught hours). Each subject is graded 1–7. In addition, the "Core" (comprising the Extended Essay, Theory of Knowledge, and Creativity/Activity/Service) contributes up to 3 additional points to the diploma score.',
        coreBonus: {
          title: 'Extended Essay × Theory of Knowledge Points Matrix',
          note: 'The combination of Extended Essay (EE) grade and Theory of Knowledge (ToK) grade awards 0–3 bonus points to the diploma score. The matrix below shows all combinations.',
          matrix: [
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
        },
        passingRules: [
          'Minimum diploma score: 24 points out of 45. A score of 24 or above earns the IB Diploma.',
          'Subject grades: You must achieve at least a 3 (or sometimes a 4 in certain subjects, depending on the school or university requirement) in each subject to receive the diploma.',
          'Extended Essay and ToK: If the EE or ToK grade is an E, students do not earn core points and may not receive the diploma, even if the total subject points are high.',
          'CAS (Creativity, Activity, Service): Not graded, but required. Failure to complete CAS may result in a Certificate instead of a Diploma.',
        ],
        watchOut: [
          'A grade of 5 or 6 in DP subjects is a strong result. Most university admissions look for students with 5+ in relevant subjects.',
          'The Extended Essay is a 4,000-word independent research project. It requires time and effort — start early.',
          'Arabic A in the DP is offered at Standard Level (SL) only in most UAE schools. Check with your school.',
          'Theory of Knowledge (ToK) is a philosophy-based core course that ALL DP students take. It is challenging but develops critical thinking essential for university.',
          'CAS requires 50 hours of engagement (combined). Start early in Year 12; do not leave it to the last term.',
        ],
        universityContext: 'UAE Federal University Entry: UAEU, Zayed University, and HCT all require students to take the EmSAT examination in addition to the IB Diploma. The Diploma alone does NOT grant admission. However, a strong DP score (typically 30+ points) combined with a passing EmSAT score (usually 1000+ on a scale to 1600) makes admission to most programs achievable. Private universities in the UAE (AUS, AUD, Khalifa, NYU Abu Dhabi) typically accept DP Diplomas with scores of 24+ without requiring EmSAT. Overseas universities vary; most require DP scores of 28–32+ and take the Diploma as direct evidence of university readiness. The US and UK have specific requirements for IB Diplomas.',
      },
      ar: {
        title: 'تقييم الدبلوم: فهم مقياس 1–7 ونظام النقاط',
        intro: 'يستخدم الدبلوم نفس مقياس 1–7 معياري كبرنامج السنوات المتوسطة، لكن يضيف طبقة ثانية: النقاط المكتسبة في المواضيع تُحول إلى درجة دبلوم إجمالية من 45 نقطة. الدرجة الإجمالية تحدد ما إذا حصل الطالب على دبلوم البكالوريا الدولية. تحتاج إلى فهم كلا: الدرجات في المواضيع (1–7) ونظام نقاط الدبلوم.',
        subjectStructure: 'في الدبلوم، يأخذ الطلاب 6 مواضيع على مدار سنتين. ثلاثة مواضيع تُؤخذ على مستوى أعلى (HL، 240 ساعة تعليم) وثلاثة على مستوى معياري (SL، 150 ساعة تعليم). يتم تقييم كل موضوع من 1–7. بالإضافة إلى ذلك، "النواة" (التي تشمل مقالة الاستقصاء الممتد، ونظرية المعرفة، والإبداع/النشاط/الخدمة) تساهم بما يصل إلى 3 نقاط إضافية في درجة الدبلوم.',
        coreBonus: {
          title: 'مصفوفة مقالة الاستقصاء الممتد × نظرية المعرفة للنقاط',
          note: 'يحدد الجمع بين درجة مقالة الاستقصاء الممتد (EE) ودرجة نظرية المعرفة (ToK) ما بين 0–3 نقاط إضافية لدرجة الدبلوم. توضح المصفوفة أدناه جميع الجمعات.',
          matrix: [
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
        },
        passingRules: [
          'أدنى درجة دبلوم: 24 نقطة من 45. تحصل درجة 24 أو أعلى على دبلوم البكالوريا الدولية.',
          'درجات المواضيع: يجب عليك تحقيق ما لا يقل عن 3 (أو أحياناً 4 في مواضيع معينة، حسب متطلبات المدرسة أو الجامعة) في كل موضوع لتلقي الدبلوم.',
          'مقالة الاستقصاء الممتد ونظرية المعرفة: إذا كانت درجة EE أو ToK هي E، فلا يكسب الطلاب نقاط نواة وقد لا يتلقون الدبلوم، حتى لو كانت نقاط المواضيع الإجمالية عالية.',
          'CAS (الإبداع والنشاط والخدمة): ليست مقيّمة، لكن مطلوبة. قد يؤدي الفشل في إكمال CAS إلى شهادة بدلاً من دبلوم.',
        ],
        watchOut: [
          'درجة 5 أو 6 في مواضيع الدبلوم هي نتيجة قوية. تبحث معظم القبولات الجامعية عن طلاب لديهم 5+ في المواضيع الذات صلة.',
          'مقالة الاستقصاء الممتد هي مشروع بحث مستقل بـ 4000 كلمة. يتطلب وقتاً وجهداً — ابدأ مبكراً.',
          'اللغة العربية أ في الدبلوم تُقدّم على مستوى معياري (SL) فقط في معظم مدارس الإمارات. اتحقق مع مدرستك.',
          'نظرية المعرفة (ToK) هي دورة نواة قائمة على الفلسفة يأخذها جميع طلاب الدبلوم. إنها صعبة لكنها تطور التفكير النقدي الضروري للجامعة.',
          'يتطلب CAS 50 ساعة من الانخراط (مجتمع). ابدأ مبكراً في السنة الثانية عشرة؛ لا تتركها للفصل الأخير.',
        ],
        universityContext: 'دخول الجامعات الاتحادية الإماراتية: تتطلب الجامعة الإماراتية وجامعة زايد وكليات التكنولوجيا العليا من الطلاب الجلوس لاختبار الإمارات بالإضافة إلى دبلوم البكالوريا الدولية. الدبلوم وحده لا يضمن القبول. ومع ذلك، درجة دبلوم قوية (عادة 30+ نقطة) مقرونة بدرجة عبور اختبار الإمارات (عادة 1000+ على مقياس إلى 1600) تجعل القبول في معظم البرامج ممكناً. الجامعات الخاصة في الإمارات (جامعة الإمارات الأمريكية وأبو ظبي والخليفة وجامعة نيويورك أبو ظبي) عادة تقبل دبلومات البكالوريا الدولية بدرجات 24+ دون الحاجة لاختبار الإمارات. تختلف الجامعات الخارجية؛ معظمها يتطلب درجات دبلوم بـ 28–32+ ويأخذ الدبلوم كدليل مباشر على الجاهزية للجامعة. للولايات المتحدة والمملكة المتحدة متطلبات محددة لدبلومات البكالوريا الدولية.',
      },
    },
  },

  scenarios: [
    {
      id: 'scenario-arabic-grandmother',
      en: {
        title: 'The Grandmother\'s Concern About Arabic',
        termsInPlay: ['Arabic A', 'KHDA requirements', 'formal vs. colloquial Arabic', 'language continuity'],
        situation: 'Your child is in Year 8. His grandmother visits from the countryside for a week. She hears him speak to his friend in English at breakfast. Later, she asks him to write a short thank-you note in Arabic — something he could do easily as a Year 6 student. He struggles. His handwriting is messy. His spelling is weak. He uses colloquial words. The grandmother is upset. That evening, she speaks to you: "He goes to an English school. His Arabic is getting weak. This is not our culture. I am worried he will not be able to speak Arabic properly — to read the Quran, to write official letters, to be a true Emirati. You should move him to a MOE school where he will learn Arabic properly."',
        situationNote: 'This is a real concern shared by many Emirati families. The grandmother is not being unreasonable; she sees a real gap and is expressing a legitimate cultural value.',
        withUnderstanding: 'You are prepared for this conversation because you know the facts: (1) The school is required by KHDA to provide serious Arabic instruction daily, not just a few hours a week. (2) Your child is in Year 8, a stage where formal Arabic proficiency is still developing — even MOE school students this age make spelling errors. (3) The school offers Arabic A (Language and Literature) in the DP, which is equivalent to English A in rigor. (4) You have a home plan: you enrolled him in an Arabic tutoring program that meets twice a week, specifically to develop formal writing and classical Arabic. (5) You speak Arabic at home and model formal register. You respond to the grandmother: "I understand your concern. His Arabic needs support, and we are giving it. The school teaches Arabic daily, and we reinforce it at home with a tutor. By Year 11 or 12, when he takes Arabic A in the DP, he will study classical texts and rhetoric — the same level as his English. Many IB students actually develop stronger formal Arabic because the course is more rigorous than in a standard international school. Moving to a MOE school would disrupt his entire education. Instead, let\'s make sure he has the support to be strong in both languages." You follow up by sharing the school\'s Arabic curriculum and arranging a meeting with the Arabic teacher to reassure the grandmother of the school\'s commitment.',
        withoutUnderstanding: 'You have not prepared for this conversation. You are uncertain about what the school actually requires in Arabic. You vaguely hope it is being covered but have not checked. When the grandmother raises the concern, you feel defensive and embarrassed. You don\'t have a good counterargument, so you either (a) dismiss her concern ("It\'s fine, don\'t worry"), which deepens her distrust, or (b) agree with her that it is a problem and consider moving him to a MOE school, even though you enrolled him in IB for good reasons. Either way, your family becomes divided on the decision, and your child senses the tension. The grandmother may continue to subtly criticize the choice, and your child may feel caught between his school identity and his family cultural identity.',
      },
      ar: {
        title: 'قلق الجدة بشأن اللغة العربية',
        termsInPlay: ['اللغة العربية أ', 'متطلبات هيئة المعرفة والتنمية البشرية', 'العربية الفصحى مقابل الدارجة', 'استمرارية اللغة'],
        situation: 'طفلك في السنة الثامنة. تزوره جدته من الريف لمدة أسبوع. تسمعه يتحدث مع صديقه باللغة الإنجليزية على الإفطار. لاحقاً، تطلب منه أن يكتب رسالة شكر قصيرة باللغة العربية — شيء كان يستطيع أن يفعله بسهولة كطالب في السنة السادسة. يواجه صعوبة. خطه رديء. تهجئته ضعيفة. يستخدم كلمات دارجة. الجدة حزينة. في تلك الليلة، تتحدث إليك: "إنه يذهب إلى مدرسة إنجليزية. لغته العربية تضعف. هذا ليس ثقافتنا. أنا قلقة من أنه لن يتمكن من التحدث بالعربية بشكل صحيح — لقراءة القرآن، لكتابة الرسائل الرسمية، ليكون إماراتياً حقيقياً. يجب أن تنقله إلى مدرسة حكومية حيث سيتعلم اللغة العربية بشكل صحيح."',
        situationNote: 'هذا قلق حقيقي يشاركه العديد من العائلات الإماراتية. الجدة ليست غير معقولة؛ فهي ترى فجوة حقيقية وتعبر عن قيمة ثقافية مشروعة.',
        withUnderstanding: 'أنت مستعد لهذه المحادثة لأنك تعرف الحقائق: (1) المدرسة مطالبة بموجب قانون هيئة المعرفة والتنمية البشرية بتوفير تعليم عربي جاد يومياً، وليس فقط بضع ساعات في الأسبوع. (2) طفلك في السنة الثامنة، وهي مرحلة تطور الكفاءة الرسمية في اللغة العربية فيها لا تزال نامية — حتى طلاب المدارس الحكومية في هذا العمر يرتكبون أخطاء إملائية. (3) المدرسة توفر اللغة العربية أ (اللغة والأدب) في الدبلوم، وهي معادلة من حيث الصرامة للغة الإنجليزية أ. (4) لديك خطة منزلية: قيدته في برنامج دروس خصوصية باللغة العربية يلتقي مرتين في الأسبوع، خصيصاً لتطوير الكتابة الرسمية والعربية الفصحى. (5) تتحدث اللغة العربية في البيت وتمثل السجل الرسمي. تجيبين الجدة: "أفهم قلقك. لغته العربية تحتاج إلى دعم، وننحن نوفره. المدرسة تعلم اللغة العربية يومياً، ونحن ندعمها في البيت مع مدرس. بحلول السنة 11 أو 12، عندما يأخذ اللغة العربية أ في الدبلوم، سيدرس النصوص الكلاسيكية والبلاغة — بنفس المستوى من لغته الإنجليزية. العديد من طلاب البكالوريا الدولية في الواقع يطورون لغة عربية رسمية أقوى لأن الدورة أكثر صرامة من المدرسة الدولية المعيارية. النقل إلى مدرسة حكومية سيعطل تعليمه بالكامل. بدلاً من ذلك، دعينا نتأكد من أنه يحصل على الدعم ليكون قوياً في كلتا اللغتين." تتابعين بمشاركة منهج اللغة العربية في المدرسة وترتيب اجتماع مع معلم اللغة العربية لطمأنة الجدة بالالتزام في المدرسة.',
        withoutUnderstanding: 'لم تتحضري لهذه المحادثة. أنت غير متأكدة عما تتطلبه المدرسة فعلاً في اللغة العربية. تأملين بصمت أنها يتم تغطيتها لكنك لم تتحققي. عندما ترفع الجدة المخاوف، تشعرين بالدفاع والحرج. ليس لديك حجة ضد جيدة، لذا إما (أ) تتجاهلين قلقها ("لا بأس، لا تقلقي")، وهذا يعمق عدم ثقتها، أو (ب) توافقين على أنها مشكلة وتفكرين في نقله إلى مدرسة حكومية، حتى رغم أنك التحقت به في البكالوريا الدولية لأسباب جيدة. على أي حال، تصبح عائلتك منقسمة على القرار، وطفلك يشعر بالتوتر. قد تستمر الجدة في انتقاد الاختيار بطريقة خفية، وقد يشعر طفلك بأنه عالق بين هويته المدرسية وهويته الثقافية العائلية.',
      },
    },
    {
      id: 'scenario-emsat-decision',
      en: {
        title: 'Year 11: The EmSAT Decision',
        termsInPlay: ['EmSAT', 'federal vs. private university', 'DP preparation timeline', 'university pathway'],
        situation: 'Your daughter is in Year 11, preparing for her DP subjects. She is doing well — mostly 5s and 6s. Your family has always assumed she would study at a federal university: Zayed University (ZU) or UAEU. It is cheaper, it is close, it is respectable. Your daughter wants to study Business. One afternoon, she comes home from school with a document from the university guidance counselor. It states that to apply to ZU or UAEU for Year 13, she will need to: (1) Complete the IB DP, and (2) Sit and pass the EmSAT examination with a score of at least 1050 (depending on the program). She was aware that EmSAT existed but assumed the DP was enough. She looks at you with stress: "I am studying for the DP. I didn\'t know I also had to do EmSAT. That\'s too much. What do I do?"',
        situationNote: 'This is a critical decision point. The emotional reaction is valid. This is information that should have been communicated earlier, ideally in Year 10.',
        withUnderstanding: 'You are not surprised by this requirement because you have been tracking it since Year 9. When she enrolls in her DP subjects in Year 11, you had already started researching EmSAT: What is it? When are the sittings? What score does ZU actually require? You know (a) EmSAT is a national test, 3 hours, with sections on Math, English, Arabic, and optional science subjects. (b) Most sittings are in March/April of Year 12 and September/October of Year 12, giving her flexibility. (c) A student who is excelling in DP (like your daughter with her 5s and 6s) typically finds EmSAT preparation manageable — not easy, but not overwhelming. (d) Private universities and overseas universities do not require EmSAT, so if she changes her mind, she has options. Your response: "I know this feels like a lot. But you\'ve been preparing for this. Your DP study in Math, English, and Arabic is directly teaching you what EmSAT tests. We can find an EmSAT prep tutor who can review the specific test format in 4–6 weeks of focused prep. Most of your preparation will be the DP study itself. Let\'s talk to the school about the exact timing. If you want to stay on track for ZU or UAEU, we register you for the March EmSAT sitting. If you prefer to explore private universities, that\'s also an option. But we decide now, so we can plan." You then contact the school\'s university counselor to understand the EmSAT registration timeline and book a one-hour EmSAT prep session to show her the format. Within two weeks, she realizes this is manageable and commits to the path.',
        withoutUnderstanding: 'You have not tracked the EmSAT requirement. You vaguely knew it existed but assumed it was optional or "something people do." When your daughter brings home the document in Year 11, you feel as panicked as she does. You do not have the answers: Can she do both? When would she sit EmSAT? How hard is it? What if she doesn\'t pass? You respond with sympathy but no plan: "I don\'t know. Let\'s ask the school." But you do not follow up proactively. Weeks pass. The school sends an EmSAT registration deadline email. You miss it. By March, when the first sitting would happen, registration is closed. Your daughter is now stressed and frustrated. She will have to wait until September for the next sitting, which is risky — what if she doesn\'t pass, and then has to retake in November while also completing the DP? You have put her in a rushed, stressful position that a conversation in Year 10 or 11 would have avoided.',
      },
      ar: {
        title: 'السنة 11: قرار اختبار الإمارات',
        termsInPlay: ['اختبار الإمارات', 'الجامعات الاتحادية مقابل الخاصة', 'جدول الدبلوم', 'مسار الجامعة'],
        situation: 'ابنتك في السنة الحادية عشرة، تستعد لمواضيع الدبلوم. تتعلم بشكل جيد — معظمها 5 و 6. افترضت عائلتك دائماً أنها ستدرس في جامعة اتحادية: جامعة زايد أو الجامعة الإماراتية. إنها أرخص، قريبة، محترمة. تريد ابنتك دراسة إدارة الأعمال. في فترة بعد الظهر، تعود إلى البيت من المدرسة بمستند من مستشار التوجيه الجامعي. ينص على أنها لتقديم طلب إلى جامعة زايد أو الجامعة الإماراتية في السنة الثالثة عشرة، ستحتاج إلى: (1) إكمال دبلوم البكالوريا الدولية، و (2) جلوس واجتياز اختبار الإمارات بدرجة لا تقل عن 1050 (حسب البرنامج). كانت تعرف أن اختبار الإمارات موجود لكن افترضت أن الدبلوم يكفي. تنظر إليك بإجهاد: "أنا أدرس من أجل الدبلوم. لم أكن أعرف أنني يجب أن أجري اختبار الإمارات أيضاً. هذا كثير جداً. ماذا أفعل؟"',
        situationNote: 'هذه نقطة قرار حاسمة. رد الفعل العاطفي صحيح. هذه معلومة كان يجب أن تُبلغ مبكراً، من الناحية المثالية في السنة 10.',
        withUnderstanding: 'أنت لست مندهشاً من هذا المتطلب لأنك كنت تتابعه منذ السنة 9. عندما التحقت في مواضيع الدبلوم في السنة 11، كنت قد بدأت بالفعل البحث عن اختبار الإمارات: ما هو؟ متى الجلسات؟ ما درجة جامعة زايد التي تتطلبها فعلاً؟ أنت تعرف (أ) اختبار الإمارات هو اختبار وطني، 3 ساعات، به أقسام في الرياضيات والإنجليزية والعربية والعلوم الاختيارية. (ب) معظم الجلسات في مارس/أبريل من السنة 12 وسبتمبر/أكتوبر من السنة 12، مما يعطيها المرونة. (ج) طالب يتفوق في الدبلوم (مثل ابنتك برقم 5 و 6) عادة يجد تحضير اختبار الإمارات قابلاً للإدارة — ليس سهلاً، لكن ليس مربكاً. (د) الجامعات الخاصة والخارجية لا تتطلب اختبار الإمارات، لذا إذا غيرت رأيها، لديها خيارات. ردك: "أعرف أن هذا يبدو كالكثير. لكنك كنت تستعدين لهذا. دراستك للدبلوم في الرياضيات والإنجليزية والعربية تعلمك مباشرة ما يختبره اختبار الإمارات. يمكننا إيجاد مدرس تحضير لاختبار الإمارات يمكنه مراجعة تنسيق الاختبار المحدد في 4–6 أسابيع من التحضير المركز. معظم تحضيرك سيكون الدبلوم نفسه. دعينا نتحدث مع المدرسة عن الوقت المحدد. إذا كنت تريدين البقاء على المسار الصحيح لجامعة زايد أو الجامعة الإماراتية، فسنسجلك لجلسة مارس لاختبار الإمارات. إذا فضلت استكشاف الجامعات الخاصة، فهذا خيار أيضاً. لكننا نقرر الآن، لذا يمكننا التخطيط." تتصلين بعد ذلك بمستشار الجامعات في المدرسة لفهم جدول تسجيل اختبار الإمارات وحجزي جلسة واحدة لمدة ساعة من تحضير اختبار الإمارات لتريها التنسيق. في غضون أسبوعين، تدركين أن هذا قابل للإدارة وتلتزمين بالمسار.',
        withoutUnderstanding: 'لم تتتبعي متطلب اختبار الإمارات. كنت تعلمين بشكل غامض أنه موجود لكن افترضت أنه اختياري أو "شيء يفعله الناس". عندما تحضر ابنتك المستند في السنة 11، تشعرين بنفس الهلع الذي تشعر به. ليس لديك الإجابات: هل يمكنها أن تفعل كليهما؟ متى ستجلس لاختبار الإمارات؟ كم هو صعب؟ ماذا إذا لم تجتز؟ تجيبين بتعاطف لكن بدون خطة: "لا أعرف. دعينا نسأل المدرسة." لكنك لا تتابعين بشكل استباقي. تمر الأسابيع. المدرسة ترسل بريد الكتروني بموعد نهائي لتسجيل اختبار الإمارات. تفتقدين الموعد. في مارس، عندما تكون الجلسة الأولى تحدث، يكون التسجيل مغلقاً. ابنتك الآن متوترة ومحبطة. سيتعين عليها الانتظار حتى سبتمبر للجلسة التالية، وهذا محفوف بالمخاطر — ماذا إذا لم تجتز، ثم اضطرت للإعادة في نوفمبر بينما تكمل الدبلوم؟ وضعتيها في وضع مستعجل وضاغط كان بإمكان محادثة في السنة 10 أو 11 أن تتجنبه.',
      },
    },
  ],

  glossary: [
    {
      term: 'IB (International Baccalaureate)',
      en: {
        full: 'International Baccalaureate Organization',
        definition: 'A Swiss-based international education organization that offers three curricula: PYP (for ages 3–12), MYP (for ages 11–16), and DP (for ages 16–19). IB emphasizes critical thinking, intercultural understanding, and holistic development. The DP Diploma is recognized by universities worldwide.',
      },
      ar: {
        full: 'منظمة البكالوريا الدولية',
        definition: 'منظمة تعليمية دولية مقرها سويسرا توفر ثلاثة مناهج: برنامج السنوات الابتدائية (للأعمار 3–12)، برنامج السنوات المتوسطة (للأعمار 11–16)، ودبلوم البكالوريا الدولية (للأعمار 16–19). تركز على التفكير النقدي والفهم بين الثقافات والتطور الشامل. معترف بدبلوم البكالوريا الدولية من الجامعات في جميع أنحاء العالم.',
      },
    },
    {
      term: 'PYP (Primary Years Programme)',
      en: {
        full: 'Primary Years Programme',
        definition: 'IB curriculum for students aged 3–12, emphasizing inquiry-based, play-based learning in the early years and concept-driven units in later years. Assessment is holistic and narrative-based rather than numerical grades.',
      },
      ar: {
        full: 'برنامج السنوات الابتدائية',
        definition: 'منهج البكالوريا الدولية للطلاب الذين تتراوح أعمارهم بين 3–12 سنة، يركز على التعلم القائم على الاستقصاء والقائم على اللعب في السنوات الأولى والوحدات الموجهة بالمفاهيم في السنوات اللاحقة. التقييم شامل وقائم على السرد بدلاً من الدرجات الرقمية.',
      },
    },
    {
      term: 'MYP (Middle Years Programme)',
      en: {
        full: 'Middle Years Programme',
        definition: 'IB curriculum for students aged 11–16. Emphasizes conceptual learning across 8 subject areas: Language & Literature, Language Acquisition, Individuals & Societies, Sciences, Mathematics, Arts, Physical & Health Education, and Design. Assessed on a 1–7 criterion scale.',
      },
      ar: {
        full: 'برنامج السنوات المتوسطة',
        definition: 'منهج البكالوريا الدولية للطلاب الذين تتراوح أعمارهم بين 11–16 سنة. يركز على التعلم المفاهيمي عبر 8 مجالات موضوعية: اللغة والأدب، اكتساب اللغة، الأفراد والمجتمعات، العلوم، الرياضيات، الفنون، التربية البدنية والصحية، والتصميم. يتم تقييمه على مقياس 1–7 معياري.',
      },
    },
    {
      term: 'DP (Diploma Programme)',
      en: {
        full: 'Diploma Programme',
        definition: 'IB curriculum for students aged 16–19, typically the final two years of secondary school (Years 12–13). Students take 6 subjects (3 at Higher Level, 3 at Standard Level) plus a core comprising Extended Essay, Theory of Knowledge, and Creativity/Activity/Service. The DP Diploma is awarded upon successful completion and recognized globally.',
      },
      ar: {
        full: 'برنامج دبلوم البكالوريا الدولية',
        definition: 'منهج البكالوريا الدولية للطلاب الذين تتراوح أعمارهم بين 16–19 سنة، عادة السنتان الأخيرتان من المدرسة الثانوية (السنتان 12–13). يأخذ الطلاب 6 مواضيع (3 على مستوى أعلى، 3 على مستوى معياري) بالإضافة إلى نواة تضم مقالة الاستقصاء الممتد، نظرية المعرفة، والإبداع/النشاط/الخدمة. يُمنح دبلوم البكالوريا الدولية عند النجاح الكامل ويعترف به عالمياً.',
      },
    },
    {
      term: 'EmSAT (Emirates Standardised Test)',
      en: {
        full: 'Emirates Standardised Test',
        definition: 'A national standardised test required for admission to UAE federal universities (UAEU, Zayed University, HCT). Tests Mathematics, English, Arabic, and optional science subjects. Mandatory for Emirati students regardless of prior school curriculum. Most students sit EmSAT in March/April or September/October of their final secondary year.',
      },
      ar: {
        full: 'اختبار الإمارات للمعايير التعليمية',
        definition: 'اختبار معايير وطني مطلوب للقبول في الجامعات الاتحادية بالإمارات (الجامعة الإماراتية، جامعة زايد، كليات التكنولوجيا العليا). يختبر الرياضيات والإنجليزية والعربية والعلوم الاختيارية. إلزامي للطلاب الإماراتيين بغض النظر عن المنهج المدرسي السابق. يجلس معظم الطلاب لاختبار الإمارات في مارس/أبريل أو سبتمبر/أكتوبر من السنة الثانوية النهائية.',
      },
    },
    {
      term: 'Arabic A (Language and Literature)',
      en: {
        full: 'Arabic Language and Literature',
        definition: 'A rigorous IB course offered at Standard Level (SL) in the DP, designed for native Arabic speakers. Equivalent in rigor and assessment to English A. Covers classical and contemporary Arabic texts, literary analysis, rhetoric, and written expression. Fully satisfies KHDA/ADEK Arabic language requirements for Emirati students in IB schools.',
      },
      ar: {
        full: 'اللغة العربية والأدب',
        definition: 'دورة شاملة في البكالوريا الدولية تُقدّم على مستوى معياري في الدبلوم، مصممة للناطقين الأصليين باللغة العربية. معادلة في الصرامة والتقييم للغة الإنجليزية أ. تغطي النصوص العربية الكلاسيكية والمعاصرة والتحليل الأدبي والبلاغة والتعبير المكتوب. تلبي بالكامل متطلبات هيئة المعرفة والتنمية البشرية وديوان التعليم والمعرفة لتعليم اللغة العربية للطلاب الإماراتيين في مدارس البكالوريا الدولية.',
      },
    },
    {
      term: 'KHDA (Knowledge and Human Development Authority)',
      en: {
        full: 'Knowledge and Human Development Authority',
        definition: 'Dubai\'s regulatory body for private education. Accredits and oversees international schools in Dubai. Sets requirements for curriculum, staffing, facilities, and student welfare. All private IB schools in Dubai must be KHDA-registered.',
      },
      ar: {
        full: 'هيئة المعرفة والتنمية البشرية',
        definition: 'الجهة التنظيمية لتعليم القطاع الخاص في دبي. تعتمد وتشرف على المدارس الدولية في دبي. تحدد متطلبات المنهج والموظفين والمرافق وسلامة الطلاب. جميع المدارس الخاصة بالبكالوريا الدولية في دبي يجب أن تكون مسجلة لدى هيئة المعرفة والتنمية البشرية.',
      },
    },
    {
      term: 'Criterion-Referenced Assessment',
      en: {
        full: 'Criterion-Referenced Assessment',
        definition: 'A grading approach that measures student performance against specific, published criteria (e.g., "Knowing and Understanding," "Communicating") rather than against peers. A student\'s grade reflects whether she has met the criteria, not her rank relative to classmates. IB uses criterion-referenced assessment; MOE schools typically use norm-referenced (rank-based) grading.',
      },
      ar: {
        full: 'التقييم المرجعي معياري',
        definition: 'نهج تقييم يقيس أداء الطالب مقابل معايير محددة ومنشورة (مثل "المعرفة والفهم"، "التواصل") بدلاً من القياس مقابل الأقران. تعكس درجة الطالب ما إذا كانت قد استوفت المعايير، وليس رتبتها بالنسبة لزملائها. تستخدم البكالوريا الدولية التقييم المرجعي معياري؛ مدارس وزارة التربية عادة تستخدم التقييم المرجعي بالنسبة (القائم على الترتيب).',
      },
    },
    {
      term: 'Extended Essay (EE)',
      en: {
        full: 'Extended Essay',
        definition: 'A 4,000-word independent research project completed by all DP students. Students choose a topic related to one of their DP subjects, conduct original research, and write a formally structured essay. Graded A–E. Core component of the DP; contributes up to 3 points to the total diploma score depending on combined score with Theory of Knowledge.',
      },
      ar: {
        full: 'مقالة الاستقصاء الممتد',
        definition: 'مشروع بحث مستقل بـ 4000 كلمة يكمله جميع طلاب الدبلوم. يختار الطلاب موضوعاً متعلقاً بأحد مواضيع الدبلوم، يجرون بحثاً أصلياً، ويكتبون مقالة منظمة بشكل رسمي. يحصل على درجة من أ إلى هـ. مكون أساسي للدبلوم؛ يساهم بما يصل إلى 3 نقاط للدرجة الكلية للدبلوم حسب الدرجة المجمعة مع نظرية المعرفة.',
      },
    },
    {
      term: 'UAE Vision 2071',
      en: {
        full: 'UAE Vision 2071',
        definition: 'The UAE\'s long-term national strategic plan outlining the country\'s aspirations for the next 50 years. Emphasizes innovation, critical thinking, sustainable development, and human capital development. Explicitly calls for graduates who are problem-solvers, innovative, and internationally-minded while rooted in Emirati values. IB educational goals align directly with Vision 2071 objectives.',
      },
      ar: {
        full: 'رؤية الإمارات 2071',
        definition: 'الخطة الاستراتيجية الوطنية طويلة الأجل للإمارات التي تحدد طموحات الدولة للسنوات الخمسين القادمة. تركز على الابتكار والتفكير النقدي والتنمية المستدامة وتطوير رأس المال البشري. تدعو بوضوح للخريجين الذين هم حلّالو مشاكل ومبتكرون وذوو عقلية عالمية مع البقاء متجذرين في القيم الإماراتية. أهداف التعليم في البكالوريا الدولية توافق مباشرة أهداف الرؤية 2071.',
      },
    },
  ],

  pypBridge: {
    ar: {
      title: 'انتقال PYP → MYP: ما يجب أن تعرفه الأسر الإماراتية',
      intro: 'بالنسبة للأسر الإماراتية، فإن انتقال PYP إلى MYP غالباً ما يكون النقطة التي تصبح فيها أسئلة اللغة العربية والتربية الإسلامية أكثر حدة — والفرق بين إعداد التقارير في مدارس IB وإعداد التقارير في مدارس وزارة التربية يصبح الأكثر وضوحاً. أفراد الأسرة الممتدة الذين لديهم أطفال في مدارس وزارة التربية لديهم علامات نسبة مئوية وترتيب صفي. طفلك لديه درجات معيارية وردود فعل سردية. يشرح هذا الدليل ما يتغير عند الانتقال وكيفية قراءة تنسيق التقرير الجديد بثقة.',
      changes: [
        { aspect: 'تنسيق التقرير والهيكل', pyp: 'تعليقات سردية وأدلة على المحفظة. بلا نسبة مئوية أو ترتيب صفي. يوصف التعلم من خلال الميول ومهارات الاستقصاء.', myp: 'درجات معيارية A–D (0–8 مما يلي). إجمالي الخرائط إلى درجة 1–7. منظمة، لكنها مختلفة أساساً عن تقارير مدارس وزارة التربية التي تحتوي على نسب مئوية وترتيب صفي التي يعاني منها الأقارب.' },
        { aspect: 'نهج التقييم', pyp: 'المراقبة المستمرة والمؤتمرات بقيادة الطالب والتقييم المتكامل. التقييم شامل وتنموي.', myp: 'التقييمات الشاملة الرسمية في ثماني مجموعات مواد، يتم تقييمها وفقاً لمعايير صريحة. اعتدال IB الخارجي في السنة 10. ردود فعل معيارية شفافة وليس ترتيباً تنافسياً.' },
        { aspect: 'استمرارية اللغة العربية والتربية الإسلامية', pyp: 'اللغة العربية متكاملة في وحدات الاستقصاء. تُنسج القيم الإسلامية في المنهج.', myp: 'لغة عربية مادة متميزة بمعايير A–D (مثل جميع مواد MYP). تستمر التربية الإسلامية. كلاهما مقدّر وصارم في إطار IB — لكن يتم تقييمه بشكل مختلف عن مدارس وزارة التربية الوطنية.' },
        { aspect: 'وضوح المسار والوعي بـ EmSAT', pyp: 'يظهر مسار IB وليس بحاجة إلى توضيح فوري بما يتجاوز السياق PYP.', myp: 'من السنة 7 فصاعداً، يجب على الأسر أن تفهم: MYP يؤدي إلى DP (وليس مسار Tawjihiyya أو EmSAT). يتم الاعتراف بـ DP عالمياً وبواسطة بعض جامعات الإمارات. MYP ليست "حجر عبور" إلى وزارة التربية ؛ إنها مسار متميز. يمنع هذا الوضوح الالتباس والقلق لاحقاً.' }
      ],
      firstYearNote: 'السنة 7 هي سنة انتقالية وستشعر بشكل كبير بأنها مختلفة عن PYP. لن يتضمن التقرير نسب مئوية أو ترتيب صفي — بدلاً من ذلك، سيعرض درجات معيارية. عندما تسأل الأسرة الممتدة، "ما النسبة المئوية التي حصل عليها؟" الإجابة هي: "طفلي يطور استدلالاً قوياً في المعيار C ويُظهر نمواً في المعيار D." هذا هو في الواقع ردود فعل أكثر تفصيلاً من نسبة مئوية واحدة. عدم وجود ترتيب صفي مقصود — مدارس IB لا تصنف الطلاب بشكل تنافسي. استمرار اللغة العربية والتربية الإسلامية تحتل مكان الشرف في المنهج الدراسي، ويتم تقييمها بنفس معايير الصرامة مثل المواد الأخرى.',
      whatToAsk: [
        'ما الذي يحتاج طفلي إلى فعله للانتقال من درجته الحالية إلى المستوى التالي في المعيار C في [المادة]؟',
        'كيف تستمر اللغة العربية والتربية الإسلامية في MYP؟ هل يتم تقييمها بنفس الطريقة كما في PYP؟',
        'ما هو مسار DP؟ كيف يختلف عن مسار مدارس وزارة التربية الذي يعرفه الأقارب؟'
      ],
    },
    en: {
      title: 'The PYP → MYP Transition: What Emirati Families Should Know',
      intro: 'For Emirati families, the PYP to MYP transition is often the point where Arabic language and Islamic Education questions become sharpest — and where the difference between IB school reporting and MOE school reporting becomes most visible. Extended family members with children in MOE schools have percentage marks and class ranks. Your child has criterion scores and narrative feedback. This guide explains what changes at the transition and how to read the new report format with confidence.',
      changes: [
        { aspect: 'Report format and structure', pyp: 'Narrative comments and portfolio evidence. No percentage or class rank. Learning described through dispositions and inquiry skills.', myp: 'Criterion scores A–D (0–8 each). Total maps to grade 1–7. Structured, but fundamentally different from MOE school reports with percentages and class ranks that relatives experience.' },
        { aspect: 'Assessment approach', pyp: 'Ongoing observation, student-led conferences, integrated assessment. Assessment is holistic and developmental.', myp: 'Formal summative assessments in eight subject groups, assessed against explicit criteria. External IB moderation at Year 10. Transparent criterion feedback, not competitive ranking.' },
        { aspect: 'Arabic and Islamic Education continuity', pyp: 'Arabic language integrated into units of inquiry. Islamic values woven through the curriculum.', myp: 'Arabic Language is assessed as a distinct subject with criteria A–D (like all MYP subjects). Islamic Education continues. Both are valued and rigorous in the IB framework — but assessed differently from MOE national schools.' },
        { aspect: 'Pathway clarity and EmSAT awareness', pyp: 'IB pathway emerging, not yet urgent to clarify beyond PYP context.', myp: 'From Year 7, families should understand: MYP leads to DP (not to Tawjihiyya or EmSAT pathway). DP is recognized globally and by some UAE universities. MYP is not a "stepping stone" to MOE; it is a distinct pathway. This clarity prevents confusion and anxiety later.' }
      ],
      firstYearNote: 'Year 7 is a transition year and will feel significantly different from PYP. The report will not include percentages or class rank — it will show criterion scores instead. When extended family asks, "What percentage did he/she get?" the answer is: "My child is developing strong reasoning in Criterion C and showing growth in Criterion D." This is actually more detailed feedback than a single percentage. The absence of class ranking is intentional — IB schools do not rank students competitively. Arabic Language and Islamic Education continue to be important parts of the curriculum, assessed to the same rigorous standards as other subjects.',
      whatToAsk: [
        'What does my child need to do to move from their current criterion score to the next level in [subject]?',
        'How are Arabic Language and Islamic Education continuing in MYP? Are they assessed the same way as in PYP?',
        'What is the DP pathway? How does it differ from the MOE school pathway that relatives are familiar with?'
      ],
    }
  },
}
