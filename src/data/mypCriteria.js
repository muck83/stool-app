/**
 * MYP Subject Criterion Names and Level-Band Interpretations
 * Used by the per-criterion report interpreter in MypCalculator.
 *
 * Band scoring: 0–2 limited | 3–4 adequate | 5–6 substantial | 7–8 excellent
 * Criterion names are IB-standard for each subject group.
 * Band descriptions are parent-facing plain language, EN primary.
 */

const band = (min, max, en, ar) => ({ min, max, en, ar })

const bands = {
  // Reusable generic bands for criteria that appear across subjects
  knowing: [
    band(0, 2, 'Limited — recall of key content is inconsistent; foundational knowledge is still developing.',
         'محدود — استرجاع المحتوى الأساسي غير منتظم؛ المعرفة التأسيسية لا تزال تتطور.'),
    band(3, 4, 'Adequate — understands core concepts but struggles to apply them in unfamiliar situations.',
         'كافٍ — يفهم المفاهيم الأساسية لكن يجد صعوبة في تطبيقها في مواقف غير مألوفة.'),
    band(5, 6, 'Substantial — demonstrates solid understanding and applies knowledge reliably across contexts.',
         'ملموس — يُظهر فهماً راسخاً ويطبق المعرفة بشكل موثوق عبر السياقات المختلفة.'),
    band(7, 8, 'Excellent — sophisticated command of content knowledge with confident, nuanced application.',
         'ممتاز — إتقان متطور للمعرفة مع تطبيق واثق ودقيق.'),
  ],
  communicating: [
    band(0, 2, 'Limited — written and verbal communication of ideas is unclear or incomplete.',
         'محدود — التواصل الكتابي والشفهي للأفكار غير واضح أو غير مكتمل.'),
    band(3, 4, 'Adequate — communicates ideas clearly in straightforward situations; complex ideas need more precision.',
         'كافٍ — يتواصل بوضوح في المواقف المباشرة؛ الأفكار المعقدة تحتاج دقة أكبر.'),
    band(5, 6, 'Substantial — communicates ideas clearly and effectively with appropriate structure and language.',
         'ملموس — يتواصل بوضوح وفاعلية مع هيكل ولغة مناسبَين.'),
    band(7, 8, 'Excellent — precise, fluent communication of complex ideas; uses subject-specific language with accuracy.',
         'ممتاز — تواصل دقيق وطلِق للأفكار المعقدة؛ يستخدم لغة المادة بدقة.'),
  ],
  reflecting: [
    band(0, 2, 'Limited — reflections on learning are surface-level or missing a personal connection.',
         'محدود — التأملات في التعلم سطحية أو تفتقر إلى الصلة الشخصية.'),
    band(3, 4, 'Adequate — shows some awareness of learning development; connections to real-world implications are basic.',
         'كافٍ — يُظهر بعض الوعي بتطور التعلم؛ الروابط مع التطبيقات في العالم الحقيقي أساسية.'),
    band(5, 6, 'Substantial — reflections show genuine critical thinking about learning process and broader impact.',
         'ملموس — التأملات تُظهر تفكيراً نقدياً حقيقياً في عملية التعلم والأثر الأشمل.'),
    band(7, 8, 'Excellent — insightful, well-reasoned reflections that connect learning to real-world significance.',
         'ممتاز — تأملات ثاقبة ومعللة جيداً تربط التعلم بأهميته في العالم الحقيقي.'),
  ],
}

export const MYP_SUBJECTS = [
  {
    id: 'mathematics',
    label: 'Mathematics',
    labelAr: 'الرياضيات',
    labelZh: '数学',
    labelKo: '수학',
    labelVi: 'Toán học',
    criteria: {
      A: {
        name: 'Knowing and Understanding',
        nameAr: 'المعرفة والفهم',
        bands: bands.knowing,
      },
      B: {
        name: 'Investigating Patterns',
        nameAr: 'استقصاء الأنماط',
        bands: [
          band(0, 2, 'Limited — applies techniques to find patterns only when heavily guided.',
               'محدود — يطبق التقنيات للعثور على الأنماط فقط بتوجيه مكثّف.'),
          band(3, 4, 'Adequate — identifies and describes patterns but prediction and justification need development.',
               'كافٍ — يُحدد الأنماط ويصفها لكن التنبؤ والتعليل يحتاجان تطويراً.'),
          band(5, 6, 'Substantial — selects strategies effectively, describes patterns clearly, and provides reasoning.',
               'ملموس — يختار الاستراتيجيات بفاعلية ويصف الأنماط بوضوح ويُقدم تعليلاً.'),
          band(7, 8, 'Excellent — extends patterns to general rules, justifies with mathematical reasoning, and applies in new contexts.',
               'ممتاز — يُعمّم الأنماط إلى قواعد عامة ويبررها بالاستدلال الرياضي ويطبقها في سياقات جديدة.'),
        ],
      },
      C: {
        name: 'Communicating',
        nameAr: 'التواصل',
        bands: bands.communicating,
      },
      D: {
        name: 'Applying Mathematics in Real-Life Contexts',
        nameAr: 'تطبيق الرياضيات في سياقات الحياة الواقعية',
        bands: [
          band(0, 2, 'Limited — identifies a relevant real-life problem but strategies for solving it are unclear.',
               'محدود — يُحدد مشكلة واقعية ذات صلة لكن استراتيجيات حلها غير واضحة.'),
          band(3, 4, 'Adequate — applies mathematical knowledge to straightforward real-life situations with some success.',
               'كافٍ — يطبق المعرفة الرياضية على مواقف واقعية مباشرة بنجاح نسبي.'),
          band(5, 6, 'Substantial — selects appropriate mathematics, applies it accurately, and interprets results in context.',
               'ملموس — يختار الرياضيات المناسبة ويطبقها بدقة ويُفسّر النتائج في السياق.'),
          band(7, 8, 'Excellent — applies sophisticated mathematical reasoning to complex real-life problems with full contextual interpretation.',
               'ممتاز — يطبق استدلالاً رياضياً متطوراً على مسائل واقعية معقدة مع تفسير سياقي كامل.'),
        ],
      },
    },
  },
  {
    id: 'sciences',
    label: 'Sciences',
    labelAr: 'العلوم',
    labelZh: '科学',
    labelKo: '과학',
    labelVi: 'Khoa học',
    criteria: {
      A: {
        name: 'Knowing and Understanding',
        nameAr: 'المعرفة والفهم',
        bands: bands.knowing,
      },
      B: {
        name: 'Inquiring and Designing',
        nameAr: 'الاستفسار والتصميم',
        bands: [
          band(0, 2, 'Limited — research questions lack focus; experimental design has significant gaps.',
               'محدود — أسئلة البحث تفتقر إلى التركيز؛ التصميم التجريبي يحتوي على فجوات كبيرة.'),
          band(3, 4, 'Adequate — formulates a testable question and outlines a workable method; variables partially controlled.',
               'كافٍ — يُصيغ سؤالاً قابلاً للاختبار ويُحدد طريقةً قابلةً للتطبيق؛ المتغيرات مضبوطة جزئياً.'),
          band(5, 6, 'Substantial — formulates a clear, testable hypothesis with a well-structured method and controlled variables.',
               'ملموس — يُصيغ فرضية واضحة وقابلة للاختبار مع طريقة منظمة جيداً ومتغيرات مضبوطة.'),
          band(7, 8, 'Excellent — sophisticated inquiry design; hypothesis is precise, method is rigorous, and variables are fully controlled.',
               'ممتاز — تصميم استفساري متطور؛ الفرضية دقيقة والطريقة صارمة والمتغيرات مضبوطة بالكامل.'),
        ],
      },
      C: {
        name: 'Processing and Evaluating',
        nameAr: 'المعالجة والتقييم',
        bands: [
          band(0, 2, 'Limited — data is recorded but processing is incomplete; no meaningful conclusions drawn.',
               'محدود — البيانات مسجّلة لكن المعالجة غير مكتملة؛ لا استنتاجات ذات معنى.'),
          band(3, 4, 'Adequate — processes data with some accuracy; conclusions drawn but evaluation of reliability is limited.',
               'كافٍ — يعالج البيانات بدقة نسبية؛ الاستنتاجات مُستخلَصة لكن تقييم الموثوقية محدود.'),
          band(5, 6, 'Substantial — processes data correctly, draws valid conclusions, and evaluates limitations of the method.',
               'ملموس — يعالج البيانات بشكل صحيح ويستخلص استنتاجات صالحة ويقيّم قيود الطريقة.'),
          band(7, 8, 'Excellent — thorough data analysis, well-supported conclusions, and critical evaluation of improvements.',
               'ممتاز — تحليل شامل للبيانات واستنتاجات مدعومة جيداً وتقييم نقدي للتحسينات.'),
        ],
      },
      D: {
        name: 'Reflecting on the Impacts of Science',
        nameAr: 'التأمل في تأثيرات العلوم',
        bands: bands.reflecting,
      },
    },
  },
  {
    id: 'language-literature',
    label: 'Language & Literature',
    labelAr: 'اللغة والأدب',
    labelZh: '语言与文学',
    labelKo: '언어와 문학',
    labelVi: 'Ngôn ngữ và Văn học',
    criteria: {
      A: {
        name: 'Analyzing',
        nameAr: 'التحليل',
        bands: [
          band(0, 2, 'Limited — identifies basic elements of a text but analysis is superficial or inaccurate.',
               'محدود — يُحدد العناصر الأساسية للنص لكن التحليل سطحي أو غير دقيق.'),
          band(3, 4, 'Adequate — analyses some features of texts with partial understanding of author\'s choices and effects.',
               'كافٍ — يحلل بعض سمات النصوص مع فهم جزئي لاختيارات المؤلف وتأثيراتها.'),
          band(5, 6, 'Substantial — analyses texts with insight; explains how language and form create meaning effectively.',
               'ملموس — يحلل النصوص بثاقبية؛ يُفسّر كيف تُنتج اللغة والشكل المعنى بفاعلية.'),
          band(7, 8, 'Excellent — sophisticated, perceptive analysis of language, structure, and technique with strong textual support.',
               'ممتاز — تحليل متطور وثاقب للغة والبنية والأسلوب مع دعم نصي قوي.'),
        ],
      },
      B: {
        name: 'Organizing',
        nameAr: 'التنظيم',
        bands: [
          band(0, 2, 'Limited — ideas are present but structure is unclear; paragraphing and sequencing need significant work.',
               'محدود — الأفكار موجودة لكن البنية غير واضحة؛ التقسيم للفقرات والتسلسل يحتاج عملاً كبيراً.'),
          band(3, 4, 'Adequate — organises ideas with some logical structure; transitions and coherence need development.',
               'كافٍ — ينظّم الأفكار ببعض البنية المنطقية؛ الانتقالات والتماسك يحتاجان تطويراً.'),
          band(5, 6, 'Substantial — clearly structured with effective paragraphing, sequencing, and use of organisational features.',
               'ملموس — بنية واضحة مع تقسيم فعّال للفقرات والتسلسل واستخدام السمات التنظيمية.'),
          band(7, 8, 'Excellent — sophisticated organisation; structure serves the purpose precisely and enhances overall effect.',
               'ممتاز — تنظيم متطور؛ البنية تخدم الغرض بدقة وتُعزز الأثر الكلي.'),
        ],
      },
      C: {
        name: 'Producing Text',
        nameAr: 'إنتاج النص',
        bands: [
          band(0, 2, 'Limited — text type conventions are not followed; purpose and audience awareness are unclear.',
               'محدود — اتفاقيات نوع النص غير متبوعة؛ الوعي بالغرض والجمهور غير واضح.'),
          band(3, 4, 'Adequate — attempts appropriate text type; some awareness of purpose and audience but consistency varies.',
               'كافٍ — يحاول نوع النص المناسب؛ بعض الوعي بالغرض والجمهور لكن الاتساق يتفاوت.'),
          band(5, 6, 'Substantial — produces text appropriate to purpose, audience, and context with clear stylistic awareness.',
               'ملموس — يُنتج نصاً مناسباً للغرض والجمهور والسياق مع وعي أسلوبي واضح.'),
          band(7, 8, 'Excellent — purposeful, well-crafted text that demonstrates sophisticated control of conventions and style.',
               'ممتاز — نص هادف ومُصاغ جيداً يُظهر سيطرة متطورة على الاتفاقيات والأسلوب.'),
        ],
      },
      D: {
        name: 'Using Language',
        nameAr: 'استخدام اللغة',
        bands: [
          band(0, 2, 'Limited — frequent errors in grammar, vocabulary, and mechanics that impede understanding.',
               'محدود — أخطاء متكررة في القواعد والمفردات والميكانيكا تعيق الفهم.'),
          band(3, 4, 'Adequate — generally communicates meaning; some errors in grammar or vocabulary but overall comprehensible.',
               'كافٍ — يتواصل بشكل عام بالمعنى؛ بعض الأخطاء في القواعد أو المفردات لكنه مفهوم إجمالاً.'),
          band(5, 6, 'Substantial — uses varied vocabulary and accurate grammar; language choices are appropriate to context.',
               'ملموس — يستخدم مفردات متنوعة وقواعد دقيقة؛ اختيارات اللغة مناسبة للسياق.'),
          band(7, 8, 'Excellent — precise, varied, and sophisticated use of language; style and register are consistently controlled.',
               'ممتاز — استخدام دقيق ومتنوع ومتطور للغة؛ الأسلوب والمستوى مضبوطان باستمرار.'),
        ],
      },
    },
  },
  {
    id: 'language-acquisition',
    label: 'Language Acquisition',
    labelAr: 'اكتساب اللغة',
    labelZh: '语言习得',
    labelKo: '언어 습득',
    labelVi: 'Tiếp thu ngôn ngữ',
    criteria: {
      A: {
        name: 'Listening',
        nameAr: 'الاستماع',
        bands: [
          band(0, 2, 'Limited — understands simple, familiar language but struggles with new vocabulary or faster speech.',
               'محدود — يفهم اللغة البسيطة المألوفة لكن يجد صعوبة مع المفردات الجديدة أو الكلام السريع.'),
          band(3, 4, 'Adequate — understands main ideas in familiar contexts; detail and inference need development.',
               'كافٍ — يفهم الأفكار الرئيسية في السياقات المألوفة؛ التفاصيل والاستنتاج يحتاجان تطويراً.'),
          band(5, 6, 'Substantial — identifies main ideas and key details across a range of contexts with good comprehension.',
               'ملموس — يُحدد الأفكار الرئيسية والتفاصيل الأساسية عبر مجموعة من السياقات بفهم جيد.'),
          band(7, 8, 'Excellent — full and nuanced comprehension; identifies implicit meaning and evaluates speaker\'s purpose.',
               'ممتاز — فهم كامل ودقيق؛ يُحدد المعنى الضمني ويقيّم غرض المتحدث.'),
        ],
      },
      B: {
        name: 'Reading',
        nameAr: 'القراءة',
        bands: [
          band(0, 2, 'Limited — can decode familiar texts but comprehension of new or complex texts is limited.',
               'محدود — يستطيع فكّ تشفير النصوص المألوفة لكن الفهم القرائي للنصوص الجديدة أو المعقدة محدود.'),
          band(3, 4, 'Adequate — understands main ideas in written texts; interpretation of tone and implicit meaning needs work.',
               'كافٍ — يفهم الأفكار الرئيسية في النصوص المكتوبة؛ تفسير النبرة والمعنى الضمني يحتاج عملاً.'),
          band(5, 6, 'Substantial — reads with good comprehension across a range of text types; analyses language and tone.',
               'ملموس — يقرأ بفهم جيد عبر أنواع نصية متعددة؛ يحلل اللغة والنبرة.'),
          band(7, 8, 'Excellent — reads critically and perceptively; evaluates text purpose, stance, and implicit meaning with sophistication.',
               'ممتاز — يقرأ بنقدية وثاقبية؛ يقيّم غرض النص وموقفه ومعناه الضمني بتطور.'),
        ],
      },
      C: {
        name: 'Speaking',
        nameAr: 'التحدث',
        bands: [
          band(0, 2, 'Limited — communicates basic information but vocabulary and pronunciation significantly limit effectiveness.',
               'محدود — يتواصل بمعلومات أساسية لكن المفردات والنطق يُقيّدان الفاعلية بشكل كبير.'),
          band(3, 4, 'Adequate — communicates ideas in familiar situations; fluency and range of expression need development.',
               'كافٍ — يتواصل بالأفكار في المواقف المألوفة؛ الطلاقة ومجموعة التعبير تحتاجان تطويراً.'),
          band(5, 6, 'Substantial — communicates effectively across familiar and some unfamiliar topics with good fluency.',
               'ملموس — يتواصل بفاعلية عبر موضوعات مألوفة وبعض غير المألوفة مع طلاقة جيدة.'),
          band(7, 8, 'Excellent — fluent, varied, and confident spoken communication; engages effectively with complex topics.',
               'ممتاز — تواصل شفهي طلِق ومتنوع وواثق؛ ينخرط بفاعلية مع الموضوعات المعقدة.'),
        ],
      },
      D: {
        name: 'Writing',
        nameAr: 'الكتابة',
        bands: [
          band(0, 2, 'Limited — writes with frequent errors; vocabulary is very basic and limits expression.',
               'محدود — يكتب مع أخطاء متكررة؛ المفردات أساسية جداً وتُقيّد التعبير.'),
          band(3, 4, 'Adequate — communicates meaning in writing with some accuracy; range and precision need development.',
               'كافٍ — يتواصل بالمعنى كتابةً بدقة نسبية؛ المجال والدقة يحتاجان تطويراً.'),
          band(5, 6, 'Substantial — writes clearly and accurately with varied vocabulary and generally appropriate structures.',
               'ملموس — يكتب بوضوح ودقة مع مفردات متنوعة وتراكيب مناسبة في الغالب.'),
          band(7, 8, 'Excellent — accurate, fluent, and varied writing; uses appropriate conventions and style for the task.',
               'ممتاز — كتابة دقيقة وطلِقة ومتنوعة؛ يستخدم الاتفاقيات والأسلوب المناسبَين للمهمة.'),
        ],
      },
    },
  },
  {
    id: 'individuals-societies',
    label: 'Individuals & Societies',
    labelAr: 'الأفراد والمجتمعات',
    labelZh: '个人与社会',
    labelKo: '개인과 사회',
    labelVi: 'Cá nhân và Xã hội',
    criteria: {
      A: {
        name: 'Knowing and Understanding',
        nameAr: 'المعرفة والفهم',
        bands: bands.knowing,
      },
      B: {
        name: 'Investigating',
        nameAr: 'الاستقصاء',
        bands: [
          band(0, 2, 'Limited — research question is vague; source selection and note-taking are underdeveloped.',
               'محدود — سؤال البحث غير محدد؛ اختيار المصادر وتدوين الملاحظات غير متطوران.'),
          band(3, 4, 'Adequate — formulates a research question and collects some relevant evidence; evaluation of sources is basic.',
               'كافٍ — يُصيغ سؤال بحث ويجمع بعض الأدلة ذات الصلة؛ تقييم المصادر أساسي.'),
          band(5, 6, 'Substantial — conducts focused research, selects and evaluates sources thoughtfully, and synthesises findings.',
               'ملموس — يُجري بحثاً مركّزاً ويختار المصادر ويقيّمها بتفكّر ويُجمّع النتائج.'),
          band(7, 8, 'Excellent — sophisticated research design; sources critically evaluated; evidence is well-synthesised and documented.',
               'ممتاز — تصميم بحثي متطور؛ المصادر مُقيَّمة نقدياً؛ الأدلة مُجمَّعة جيداً وموثقة.'),
        ],
      },
      C: {
        name: 'Communicating',
        nameAr: 'التواصل',
        bands: bands.communicating,
      },
      D: {
        name: 'Thinking Critically',
        nameAr: 'التفكير النقدي',
        bands: [
          band(0, 2, 'Limited — describes events or information without analysing causes, effects, or multiple perspectives.',
               'محدود — يصف الأحداث أو المعلومات دون تحليل الأسباب والتأثيرات أو وجهات النظر المتعددة.'),
          band(3, 4, 'Adequate — identifies some perspectives and makes simple connections but argument lacks depth or evidence.',
               'كافٍ — يُحدد بعض وجهات النظر ويُقيم روابط بسيطة لكن الحجة تفتقر إلى العمق أو الأدلة.'),
          band(5, 6, 'Substantial — analyses multiple perspectives, evaluates evidence, and constructs reasoned arguments.',
               'ملموس — يحلل وجهات نظر متعددة ويقيّم الأدلة ويبني حججاً معللة.'),
          band(7, 8, 'Excellent — sophisticated critical analysis; evaluates competing arguments, recognises bias, and draws nuanced conclusions.',
               'ممتاز — تحليل نقدي متطور؛ يقيّم الحجج المتنافسة ويتعرف على التحيز ويستخلص استنتاجات دقيقة.'),
        ],
      },
    },
  },
  {
    id: 'arts',
    label: 'Arts',
    labelAr: 'الفنون',
    labelZh: '艺术',
    labelKo: '예술',
    labelVi: 'Nghệ thuật',
    criteria: {
      A: {
        name: 'Knowing and Understanding',
        nameAr: 'المعرفة والفهم',
        bands: bands.knowing,
      },
      B: {
        name: 'Developing Skills',
        nameAr: 'تطوير المهارات',
        bands: [
          band(0, 2, 'Limited — technical skills are at an early stage; execution of techniques is inconsistent.',
               'محدود — المهارات التقنية في مرحلة مبكرة؛ تطبيق التقنيات غير منتظم.'),
          band(3, 4, 'Adequate — applies some techniques with partial success; skill development is ongoing but uneven.',
               'كافٍ — يطبق بعض التقنيات بنجاح جزئي؛ تطوير المهارات مستمر لكن غير متسق.'),
          band(5, 6, 'Substantial — demonstrates developing technical skill; applies techniques appropriately and shows artistic control.',
               'ملموس — يُظهر مهارة تقنية متطورة؛ يطبق التقنيات بشكل مناسب ويُظهر سيطرة فنية.'),
          band(7, 8, 'Excellent — skilled, confident application of a range of techniques; strong artistic command and refinement.',
               'ممتاز — تطبيق ماهر وواثق لمجموعة من التقنيات؛ سيطرة فنية قوية وصقل.'),
        ],
      },
      C: {
        name: 'Thinking Creatively',
        nameAr: 'التفكير الإبداعي',
        bands: [
          band(0, 2, 'Limited — artwork is conventional or copied; personal creative choices are not yet evident.',
               'محدود — العمل الفني تقليدي أو منسوخ؛ الاختيارات الإبداعية الشخصية غير واضحة بعد.'),
          band(3, 4, 'Adequate — some personal creative decisions are made; exploration of ideas is present but limited in depth.',
               'كافٍ — بعض القرارات الإبداعية الشخصية متخذة؛ استكشاف الأفكار موجود لكن محدود العمق.'),
          band(5, 6, 'Substantial — explores and develops ideas with creative intention; work reflects personal artistic voice.',
               'ملموس — يستكشف الأفكار ويطورها بنية إبداعية؛ العمل يعكس الصوت الفني الشخصي.'),
          band(7, 8, 'Excellent — highly original and purposeful creative thinking; work is innovative and demonstrates artistic risk-taking.',
               'ممتاز — تفكير إبداعي أصيل وهادف للغاية؛ العمل مبتكر ويُظهر المجازفة الفنية.'),
        ],
      },
      D: {
        name: 'Responding',
        nameAr: 'الاستجابة',
        bands: bands.reflecting,
      },
    },
  },
  {
    id: 'design',
    label: 'Design',
    labelAr: 'التصميم',
    labelZh: '设计',
    labelKo: '디자인',
    labelVi: 'Thiết kế',
    criteria: {
      A: {
        name: 'Inquiring and Analyzing',
        nameAr: 'الاستفسار والتحليل',
        bands: [
          band(0, 2, 'Limited — identifies a problem but analysis of context, need, and existing solutions is surface-level.',
               'محدود — يُحدد مشكلةً لكن تحليل السياق والحاجة والحلول الموجودة سطحي.'),
          band(3, 4, 'Adequate — analyses the problem and context with some depth; research into similar products is present.',
               'كافٍ — يحلل المشكلة والسياق ببعض العمق؛ البحث في المنتجات المشابهة موجود.'),
          band(5, 6, 'Substantial — thorough analysis of problem, context, and target audience; well-supported design need identified.',
               'ملموس — تحليل شامل للمشكلة والسياق والجمهور المستهدف؛ حاجة التصميم مُحددة بدعم جيد.'),
          band(7, 8, 'Excellent — insightful, comprehensive analysis; precise design brief developed from rigorous contextual research.',
               'ممتاز — تحليل ثاقب وشامل؛ مواصفات تصميم دقيقة مطورة من بحث سياقي صارم.'),
        ],
      },
      B: {
        name: 'Developing Ideas',
        nameAr: 'تطوير الأفكار',
        bands: [
          band(0, 2, 'Limited — few design ideas presented; ideas do not clearly address the design brief.',
               'محدود — أفكار تصميمية قليلة مُقدَّمة؛ الأفكار لا تُعالج مواصفات التصميم بوضوح.'),
          band(3, 4, 'Adequate — develops a range of ideas with partial annotation; testing and feedback integration is basic.',
               'كافٍ — يطور مجموعة أفكار مع تعليقات جزئية؛ التجريب ودمج التغذية الراجعة أساسيان.'),
          band(5, 6, 'Substantial — develops and evaluates ideas systematically; design is justified against the brief and testing results.',
               'ملموس — يطور الأفكار ويقيّمها بشكل منهجي؛ التصميم مبرر وفق المواصفات ونتائج التجريب.'),
          band(7, 8, 'Excellent — sophisticated ideation process; design decisions are fully justified with testing data and critical evaluation.',
               'ممتاز — عملية توليد أفكار متطورة؛ قرارات التصميم مبررة بالكامل ببيانات التجريب والتقييم النقدي.'),
        ],
      },
      C: {
        name: 'Creating the Solution',
        nameAr: 'إنشاء الحل',
        bands: [
          band(0, 2, 'Limited — product is incomplete or differs significantly from the design plan.',
               'محدود — المنتج غير مكتمل أو يختلف بشكل كبير عن خطة التصميم.'),
          band(3, 4, 'Adequate — product is partially complete; some technical skills applied but plan is not fully followed.',
               'كافٍ — المنتج مكتمل جزئياً؛ بعض المهارات التقنية مطبقة لكن الخطة غير متبوعة بالكامل.'),
          band(5, 6, 'Substantial — creates a functional product that follows the design plan; technical skills are well demonstrated.',
               'ملموس — يُنشئ منتجاً وظيفياً يتبع خطة التصميم؛ المهارات التقنية موضّحة بشكل جيد.'),
          band(7, 8, 'Excellent — high-quality, fully realised product; technical excellence with evidence of adaptation and refinement.',
               'ممتاز — منتج عالي الجودة ومُحقَّق بالكامل؛ تميّز تقني مع أدلة على التكيف والتحسين.'),
        ],
      },
      D: {
        name: 'Evaluating',
        nameAr: 'التقييم',
        bands: [
          band(0, 2, 'Limited — evaluation is superficial; product is not tested against the design specification.',
               'محدود — التقييم سطحي؛ المنتج غير مختبَر وفق مواصفات التصميم.'),
          band(3, 4, 'Adequate — evaluates the product against some design criteria; impact on target audience is considered.',
               'كافٍ — يقيّم المنتج وفق بعض معايير التصميم؛ الأثر على الجمهور المستهدف مُراعى.'),
          band(5, 6, 'Substantial — evaluates product against all design criteria; suggests specific, actionable improvements.',
               'ملموس — يقيّم المنتج وفق جميع معايير التصميم؛ يقترح تحسينات محددة وقابلة للتنفيذ.'),
          band(7, 8, 'Excellent — critical, evidence-based evaluation; detailed improvements suggested based on testing and expert feedback.',
               'ممتاز — تقييم نقدي قائم على الأدلة؛ تحسينات مفصّلة مقترحة استناداً إلى التجريب وتغذية راجعة متخصصة.'),
        ],
      },
    },
  },
  {
    id: 'phe',
    label: 'Physical & Health Education',
    labelAr: 'التربية البدنية والصحية',
    labelZh: '体育与健康',
    labelKo: '체육 및 건강',
    labelVi: 'Giáo dục Thể chất & Sức khỏe',
    criteria: {
      A: {
        name: 'Knowing and Understanding',
        nameAr: 'المعرفة والفهم',
        bands: bands.knowing,
      },
      B: {
        name: 'Planning for Performance',
        nameAr: 'التخطيط للأداء',
        bands: [
          band(0, 2, 'Limited — training or performance plan is basic or does not clearly connect to a specific goal.',
               'محدود — خطة التدريب أو الأداء أساسية أو لا ترتبط بوضوح بهدف محدد.'),
          band(3, 4, 'Adequate — plans for performance with some goal awareness; strategy is present but limited in specificity.',
               'كافٍ — يخطط للأداء مع بعض الوعي بالهدف؛ الاستراتيجية موجودة لكن محدودة التحديد.'),
          band(5, 6, 'Substantial — develops a well-structured performance plan with clear goals, strategies, and measurable outcomes.',
               'ملموس — يطور خطة أداء منظمة جيداً بأهداف واستراتيجيات ونتائج قابلة للقياس.'),
          band(7, 8, 'Excellent — sophisticated, evidence-based planning; goals are specific, strategies are justified, and monitoring is built in.',
               'ممتاز — تخطيط متطور قائم على الأدلة؛ الأهداف محددة والاستراتيجيات مبررة والمراقبة مدمجة.'),
        ],
      },
      C: {
        name: 'Applying and Performing',
        nameAr: 'التطبيق والأداء',
        bands: [
          band(0, 2, 'Limited — physical performance is inconsistent; skills and strategies are applied with limited effectiveness.',
               'محدود — الأداء البدني غير منتظم؛ المهارات والاستراتيجيات مطبقة بفاعلية محدودة.'),
          band(3, 4, 'Adequate — applies skills and strategies in familiar situations; performance under pressure or in new contexts varies.',
               'كافٍ — يطبق المهارات والاستراتيجيات في المواقف المألوفة؛ الأداء تحت الضغط أو في السياقات الجديدة يتفاوت.'),
          band(5, 6, 'Substantial — demonstrates competent skill application; performs effectively and adapts strategies in varied contexts.',
               'ملموس — يُظهر تطبيقاً كفؤاً للمهارات؛ يؤدي بفاعلية ويُكيّف الاستراتيجيات في السياقات المتنوعة.'),
          band(7, 8, 'Excellent — highly skilled performance; adapts strategies fluidly under competitive or challenging conditions.',
               'ممتاز — أداء عالي المهارة؛ يُكيّف الاستراتيجيات بسلاسة في الظروف التنافسية أو الصعبة.'),
        ],
      },
      D: {
        name: 'Reflecting and Improving Performance',
        nameAr: 'التأمل وتحسين الأداء',
        bands: bands.reflecting,
      },
    },
  },
]

/**
 * Get band description for a given criterion score (0–8)
 * Returns { en, ar } text or null if no match
 */
export function getBand(criterionBands, score) {
  return criterionBands.find(b => score >= b.min && score <= b.max) || null
}

/**
 * Get subject label in the given language
 */
export function getSubjectLabel(subject, lang) {
  if (lang === 'ar') return subject.labelAr
  if (lang === 'zh') return subject.labelZh
  if (lang === 'ko') return subject.labelKo
  if (lang === 'vi') return subject.labelVi
  return subject.label
}
