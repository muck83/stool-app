/**
 * Korean Parent IB Module — Bilingual (EN / KO)
 * Helps Korean parents at IB schools understand the pedagogy
 * their children are experiencing.
 */

export const koreaIbParent = {
  id: 'parent-korea-ib-001',
  slug: 'korea-ib',
  country: 'south-korea',
  program: 'IB',

  journeyStages: [
    {
      id: 'new',
      en: {
        label: 'New to IB',
        description: 'Typically your first year. Your child has just started at an IB school, or you\'re preparing for the move. The five concepts in Core Concepts are the most important things to understand in your first term.',
        highlight: 'Start with Part 1',
      },
      ko: {
        label: 'IB 처음 시작',
        description: '보통 첫 번째 해입니다. 자녀가 IB 학교에 막 입학했거나 전환을 준비 중입니다. 핵심 개념의 다섯 가지 개념이 첫 학기에 가장 중요하게 이해해야 할 것들입니다.',
        highlight: '1부부터 시작하세요',
      },
    },
    {
      id: 'settled',
      en: {
        label: 'Settling in',
        description: 'You\'ve been at the school a year or more and have seen a few reports. The grading system still feels unfamiliar. The Part 3 calculators are most useful for you right now.',
        highlight: 'Jump to Part 3 — the grade calculators',
      },
      ko: {
        label: '적응 중',
        description: '학교에 다닌 지 1년 이상 되어 성적표를 몇 번 받았습니다. 성적 체계가 아직 낯설게 느껴집니다. 지금은 3부의 성적 계산기가 가장 유용합니다.',
        highlight: '3부 — 성적 계산기로 바로 이동하세요',
      },
    },
    {
      id: 'pyp-myp',
      en: {
        label: 'PYP → MYP',
        description: 'Your child is around 10–12 years old, moving from Primary Years to Middle Years — or has just arrived in MYP from a non-IB primary school. Grades appear for the first time and the system can feel most confusing right now.',
        highlight: 'See Part 4 — PYP concepts — then Part 3 for grade calculators',
      },
      ko: {
        label: 'PYP → MYP 전환',
        description: '자녀가 10~12세 즈음으로 PYP(초등)에서 MYP(중등)로 이동 중이거나, 비IB 초등학교에서 MYP로 막 전학했습니다. 처음으로 성적이 등장하는 시기이며 지금이 가장 혼란스럽게 느껴질 수 있습니다.',
        highlight: '4부(PYP 개념)를 먼저 보신 후 3부(성적 계산기)를 확인하세요',
      },
    },
    {
      id: 'myp-dp',
      en: {
        label: 'MYP → DP',
        description: 'Your child is typically in Year 10 or 11. Subject selection, HL/SL choices, and predicted grades are the decisions that matter now. The DP calculator is the most important tool here.',
        highlight: 'Focus on Part 3 — the DP calculator — and card 3 (Student Agency) and card 5 (CAS)',
      },
      ko: {
        label: 'MYP → DP 전환',
        description: '자녀가 보통 10학년 또는 11학년입니다. 과목 선택, HL/SL 결정, 예상 점수가 지금 핵심 사안입니다. DP 계산기가 지금 가장 중요한 도구입니다.',
        highlight: '3부(DP 계산기)와 3번 카드(학습자 주도성), 5번 카드(CAS)에 집중하세요',
      },
    },
  ],

  meta: {
    en: {
      title: 'Understanding Your Child\'s IB School',
      subtitle: 'A guide for Korean families navigating international education',
      intro: 'IB schools look very different from Korean schools — not because they are less rigorous, but because they are built around different goals. If you have already had a moment that confused or frustrated you, this guide is for that moment. It covers five core concepts, interactive grade calculators for MYP and DP, a PYP section, and two scenarios that show how the same situation looks with and without this context.',
      koreanUniversityNote: 'For families considering returning to Korea: Korean universities — including SKY (Seoul National, Yonsei, Korea University) and most major institutions — recognise the IB Diploma. Students can apply through the 재외국민 (overseas Korean) special admission pathway. If this matters to your family, your school\'s university counsellor can advise on specific university requirements.',
      reassurance: 'One thing that does not change: your child is still learning Mathematics, Science, and Languages. They are still being rigorously assessed. They are still being prepared for university. The differences are in how progress is tracked and how learning is structured — not in whether rigour exists.',
    },
    ko: {
      title: '자녀의 IB 학교 이해하기',
      subtitle: '국제 교육을 경험하는 한국 가정을 위한 안내서',
      intro: 'IB 학교는 한국 학교와 매우 다르게 보입니다. 엄격하지 않아서가 아니라 다른 목표를 중심으로 설계되었기 때문입니다. 이미 혼란스럽거나 당혹스러운 순간이 있었다면, 이 안내서는 바로 그 순간을 위한 것입니다. 다섯 가지 핵심 개념, MYP와 DP를 위한 인터랙티브 성적 계산기, PYP 섹션, 그리고 같은 상황이 이 맥락의 유무에 따라 어떻게 보이는지를 보여주는 두 가지 시나리오를 다룹니다.',
      koreanUniversityNote: '한국 귀국을 고려하는 가정에 대해: SKY(서울대, 연세대, 고려대)를 포함한 대부분의 주요 한국 대학교는 IB 졸업장을 인정합니다. 학생들은 재외국민 특별전형으로 지원할 수 있습니다. 가족에게 중요한 사항이라면 학교 진학 상담사가 구체적인 대학교 요건을 안내해 드릴 수 있습니다.',
      reassurance: '변하지 않는 한 가지: 자녀는 여전히 수학, 과학, 언어를 배우고 있습니다. 여전히 엄격하게 평가받고 있습니다. 여전히 대학교를 위해 준비되고 있습니다. 차이는 진행 상황을 추적하는 방법과 학습이 구조화되는 방식에 있습니다. 엄격함이 존재하는지 여부가 아닙니다.',
    },
  },

  openingHook: {
    en: {
      situation: [
        'In October, you email your child\'s IB teacher to ask for their class ranking. The teacher responds warmly, says your child is "making good progress," and shares written feedback on a recent essay.',
        'There is no ranking.',
        'You follow up, explaining that you need a number to understand where your child stands. The teacher replies: "We don\'t rank students here — would it help to schedule a meeting to go through the assessment criteria together?"',
        'You have been an international school parent for two years. You still don\'t have a number.',
      ],
      question: 'Why won\'t the school tell you where your child stands?',
      directAnswer: 'The short answer: IB schools are built to develop independent thinkers, not to rank them. The school is tracking your child\'s progress carefully — through different tools than you may be used to. The five concepts in this guide explain what those tools are and why they work.',
    },
    ko: {
      situation: [
        '10월, 담임 선생님께 이메일을 보내 자녀의 반 석차를 물어봤습니다. 선생님은 친절하게 자녀가 "잘 성장하고 있다"고 답하며 최근 에세이에 대한 서면 피드백을 공유했습니다.',
        '석차는 없었습니다.',
        '자녀의 위치를 파악하려면 숫자가 필요하다고 다시 물었습니다. 선생님은 이렇게 답했습니다: "저희 학교는 학생의 등수를 매기지 않습니다. 평가 기준을 함께 살펴보는 면담을 잡으면 어떨까요?"',
        '국제학교 학부모가 된 지 2년이 됐습니다. 아직도 숫자를 받지 못했습니다.',
      ],
      question: '왜 학교는 자녀의 위치를 알려주지 않을까요?',
      directAnswer: '간단한 답변: IB 학교는 학생의 등수를 매기는 것이 아니라 독립적으로 생각하는 사람을 기르도록 설계되어 있습니다. 학교는 자녀의 진행 상황을 주의 깊게 추적하고 있습니다. 다만 익숙한 것과 다른 도구를 사용할 뿐입니다. 이 안내서의 다섯 가지 개념이 그 도구가 무엇인지, 왜 그것이 효과적인지를 설명합니다.',
    },
  },

  cards: [
    {
      id: 'card-001',
      relevantAt: ['new', 'pyp-myp'],
      ibComponent: 'All programmes',
      en: {
        concept: 'Inquiry-Based Learning',
        concern: 'In most school systems, a good teacher explains things clearly and ensures every student has the correct answer before moving on. When a lesson ends without a clear conclusion, or when your child comes home still asking questions, it is completely reasonable to feel that the teaching hasn\'t happened yet.',
        bridge: 'IB teachers are trained to ask questions rather than provide answers — because students who wrestle with a problem retain their understanding far longer than those who are simply told the answer. The lesson hasn\'t failed to conclude. It has deliberately left the question open so your child carries it with them and keeps thinking.',
        goal: 'The Extended Essay, Theory of Knowledge, and most university interviews directly test the ability to reason independently — not to recall a teacher\'s notes. Inquiry-based learning is daily practice for those high-stakes moments.',
        ibConnection: 'The IB Learner Profile describes students as "inquirers" — curiosity and independent thinking are not side skills here. They are the point.',
        whatToAsk: [
          'Ask the teacher: "What question is the class currently exploring?" rather than "What topic are they covering?" — the distinction reveals how the IB approach works.',
          'If you\'re concerned about exam readiness: "How does this unit connect to the assessment criteria?"',
        ],
      },
      ko: {
        concept: '탐구 기반 학습',
        concern: '대부분의 학교에서 좋은 선생님은 내용을 명확하게 설명하고 모든 학생이 올바른 답을 이해한 후 다음으로 넘어갑니다. 수업이 명확한 결론 없이 끝나거나 자녀가 여전히 질문을 가지고 집에 돌아오면 수업이 아직 제대로 이루어지지 않은 것처럼 느껴지는 것은 당연합니다.',
        bridge: 'IB 교사는 답을 주기보다 질문하도록 훈련받습니다. 문제와 씨름한 학생이 단순히 답을 들은 학생보다 훨씬 오래 그 이해를 유지하기 때문입니다. 수업이 결론에 도달하지 못한 것이 아닙니다. 자녀가 그 질문을 가지고 계속 생각하도록 의도적으로 열어둔 것입니다.',
        goal: '소논문(Extended Essay), 지식이론(Theory of Knowledge), 그리고 대부분의 대학교 면접은 독립적으로 생각하는 능력을 직접 평가합니다. 선생님의 필기를 암기하는 것이 아닙니다. 탐구 기반 학습은 그 중요한 순간들을 위한 일상적인 훈련입니다.',
        ibConnection: 'IB 학습자 프로파일은 학생을 "탐구하는 사람(inquirers)"으로 묘사합니다. 호기심과 독립적 사고는 부가적인 능력이 아니라 핵심입니다.',
        whatToAsk: [
          '선생님께 "지금 어떤 주제를 다루고 있나요?" 대신 "지금 수업에서 어떤 질문을 탐구하고 있나요?"라고 물어보세요. 이 차이가 IB 방식을 이해하는 데 도움이 됩니다.',
          '시험 준비가 걱정된다면: "이 단원이 평가 준거와 어떻게 연결되나요?"',
        ],
      },
    },
    {
      id: 'card-002',
      relevantAt: ['settled', 'pyp-myp', 'myp-dp'],
      ibComponent: 'MYP & DP assessment',
      en: {
        concept: 'Criterion-Based Assessment',
        concern: 'Class rank is genuinely useful in competitive exam systems — it tells you directly whether your child is on track for the university places you\'re aiming for. Receiving a grade out of 7 without any comparative context can feel like the school is withholding information you need.',
        bridge: 'Unlike the Suneung, which ranks every student nationally by how they perform relative to the entire cohort on a single day, IB grades measure what your child can actually do against a defined standard. Two students can both receive a 7. This isn\'t the school avoiding transparency; it\'s a system that gives you more precise information than a rank does. A criterion score tells you exactly which skills need work. A rank never can.',
        goal: 'When university applications open, IB grades are consistent across every school in the world — admissions teams know exactly what a 6 in Mathematics means regardless of which country it was earned in. That global credibility is built on this system, and it is what makes the credential valuable.',
        ibConnection: 'IB assessment descriptors are published and consistent worldwide. A 6 in Bangkok means the same as a 6 in London.',
        whatToAsk: [
          '"Which specific criteria is my child finding most difficult?" — this is more useful than asking for a rank.',
          '"What would a grade 6 performance look like in this subject?" — knowing the target precisely helps your child aim for it.',
        ],
      },
      ko: {
        concept: '준거 기준 평가',
        concern: '반 석차는 경쟁적인 입시 시스템에서 진정으로 유용한 정보입니다. 자녀가 목표로 하는 대학교에 합격할 궤도에 있는지 직접적으로 알려주기 때문입니다. 비교 맥락 없이 7점 만점 중 몇 점이라는 숫자만 받으면 학교가 필요한 정보를 숨기는 것처럼 느껴질 수 있습니다.',
        bridge: '수능이 시험 당일 전체 응시자 집단에서의 상대적 위치로 모든 학생의 등수를 매기는 것과 달리, IB 성적은 정해진 기준에 대해 자녀가 실제로 무엇을 할 수 있는지를 측정합니다. 두 학생이 모두 7점을 받을 수 있습니다. 학교가 투명성을 피하는 것이 아니라 석차보다 더 정확한 정보를 제공하는 시스템입니다. 준거 점수는 어떤 기술을 발전시켜야 하는지 정확히 알려주는데, 석차는 절대 그럴 수 없습니다.',
        goal: '대학교 지원이 시작될 때, IB 성적은 전 세계 모든 학교에서 일관됩니다. 입학처는 수학 6점이 어느 나라에서 받은 것이든 정확히 무엇을 의미하는지 알고 있습니다. 그 세계적 신뢰성이 바로 이 시스템 위에 구축되어 있으며, 이것이 이 자격증을 가치 있게 만드는 것입니다.',
        ibConnection: 'IB 평가 기술어는 전 세계 모든 IB 학교에서 발행되고 일관됩니다. 방콕에서의 6점은 런던에서의 6점과 동일합니다.',
        whatToAsk: [
          '"자녀가 어떤 특정 준거에서 가장 어려움을 겪고 있나요?" — 이것이 석차를 묻는 것보다 더 유용합니다.',
          '"이 과목에서 6등급 수행은 어떤 모습인가요?" — 목표를 정확히 알면 자녀가 그것을 향해 나아갈 수 있습니다.',
        ],
      },
    },
    {
      id: 'card-003',
      relevantAt: ['new', 'myp-dp'],
      ibComponent: 'MYP Personal Project / DP Extended Essay',
      en: {
        concept: 'Student Agency',
        concern: 'In most school systems, the teacher setting the topic is a mark of rigour — it ensures the work is appropriately scoped and relevant. When a student is told to choose their own essay topic, it can look like the school is lowering its expectations, or not providing enough structure to ensure quality.',
        bridge: 'The IB requires student ownership precisely because it is harder, not easier. A student who identifies their own question, scopes their own research, and produces original work over several months is demonstrating intellectual maturity that a teacher-directed assignment cannot produce. The Personal Project and Extended Essay exist to generate this evidence — which is exactly what selective universities are looking for.',
        goal: 'Students who have genuine ownership of their Extended Essay write better work, speak more confidently about it in university interviews, and develop the self-direction that demanding university programs actually require.',
        ibConnection: 'The Extended Essay is a 4,000-word independent research paper completed in Year 12–13, assessed externally by the IB, carrying real weight in the final diploma score.',
        whatToAsk: [
          'Ask your child: "Why did you choose that topic?" — if they can answer clearly, the ownership is real and working.',
          'Ask the teacher: "How will you support my child in developing and narrowing their question?" — good IB teachers scaffold the process even when the content belongs to the student.',
        ],
      },
      ko: {
        concept: '학습자 주도성',
        concern: '대부분의 학교에서 선생님이 주제를 정하는 것은 엄격함의 표시입니다. 과제가 적절한 범위와 관련성을 갖도록 보장하기 때문입니다. 학생에게 자신의 에세이 주제를 선택하라고 하면 학교가 기대 수준을 낮추거나 충분한 구조를 제공하지 않는 것처럼 보일 수 있습니다.',
        bridge: 'IB가 학습자 주도성을 요구하는 것은 그것이 더 쉽기 때문이 아니라 더 어렵기 때문입니다. 스스로 질문을 찾고, 연구 범위를 정하고, 몇 달에 걸쳐 독창적인 결과물을 만들어내는 학생은 선생님이 지시하는 과제로는 보여줄 수 없는 지적 성숙도를 증명합니다. 개인 프로젝트와 소논문은 바로 이 증거를 만들기 위해 존재합니다. 경쟁이 치열한 대학교가 찾는 것이 바로 이것입니다.',
        goal: '소논문 주제에 진정한 주인의식을 가진 학생은 더 좋은 결과물을 쓰고, 대학교 면접에서 자신의 연구에 대해 더 자신감 있게 이야기하며, 어려운 대학 과정이 실제로 요구하는 자기주도력을 키웁니다.',
        ibConnection: '소논문은 11~12학년에 작성하는 4,000자 분량의 독립적 연구 논문으로 IB에 의해 외부 평가되며 최종 졸업장 점수에 실질적인 비중을 차지합니다.',
        whatToAsk: [
          '자녀에게 "왜 그 주제를 선택했어?"라고 물어보세요. 명확하게 대답할 수 있다면 주도성이 실제로 작동하고 있는 것입니다.',
          '선생님께 "자녀가 질문을 구체화하고 발전시키는 것을 어떻게 지원하실 건가요?" — 좋은 IB 교사는 내용이 학생 것이더라도 과정을 지원합니다.',
        ],
      },
    },
    {
      id: 'card-004',
      relevantAt: ['new', 'settled', 'pyp-myp'],
      ibComponent: 'Formative assessment (all programmes)',
      en: {
        concept: 'Formative Feedback',
        concern: 'A grade is efficient — it tells you quickly whether your child is on track and where they stand against the standard. When a paper comes back full of comments but no grade, it can feel like the teacher has done the work of reading it but hasn\'t given you anything you can actually act on.',
        bridge: 'Formative work is practice — the grade doesn\'t count yet. Research consistently shows that written feedback without a grade produces better learning outcomes than a grade alone, because when a grade appears, students stop reading the comments. The comments are the teaching. The grade comes later, when it matters.',
        goal: 'The final grade — the one that appears on the university application — reflects mastery built through this feedback cycle. A student who has received, understood, and acted on detailed formative feedback will perform better on summative assessments than one who only ever received a number.',
        ibConnection: 'IB teachers distinguish between formative (practice) and summative (graded) work. Parents often only see the formative work and assume nothing is being measured — but measurement is coming.',
        whatToAsk: [
          '"Is this formative or summative work?" — knowing which you\'re looking at changes everything.',
          'Ask your child: "What will you do differently next time based on the feedback?" — if they can answer, the feedback has landed.',
        ],
      },
      ko: {
        concept: '형성평가와 피드백',
        concern: '점수는 효율적입니다. 자녀가 궤도에 있는지, 기준에 비해 어느 위치에 있는지 빠르게 알려줍니다. 과제물이 코멘트로 가득 차서 돌아왔지만 점수가 없으면, 선생님이 읽는 수고는 했지만 실제로 행동할 수 있는 것은 아무것도 주지 않은 것처럼 느껴질 수 있습니다.',
        bridge: '형성평가는 연습입니다. 아직 점수가 반영되지 않습니다. 연구에 따르면 점수 없는 서면 피드백이 점수만 있는 것보다 더 나은 학습 결과를 만들어냅니다. 점수가 있으면 학생들이 코멘트 읽기를 멈추기 때문입니다. 코멘트가 수업입니다. 점수는 나중에 중요해질 때 옵니다.',
        goal: '대학 입시에 반영되는 최종 점수는 이 피드백 주기를 통해 쌓인 숙달을 반영합니다. 상세한 형성평가 피드백을 받고, 이해하고, 실천한 학생은 숫자만 받은 학생보다 총괄평가에서 더 좋은 성과를 냅니다.',
        ibConnection: 'IB 교사는 형성평가(연습)와 총괄평가(채점) 과제를 구분합니다. 학부모들은 종종 형성평가 과제만 보고 아무것도 측정되지 않는다고 생각하지만, 측정은 다가오고 있습니다.',
        whatToAsk: [
          '"이것이 형성평가인가요, 총괄평가인가요?" — 어느 것을 보고 있는지 알면 모든 것이 달라집니다.',
          '자녀에게 "피드백을 바탕으로 다음에는 무엇을 다르게 할 거야?" — 대답할 수 있다면 피드백이 제대로 전달된 것입니다.',
        ],
      },
    },
    {
      id: 'card-005',
      relevantAt: ['new', 'myp-dp'],
      ibComponent: 'DP Core — CAS',
      en: {
        concept: 'CAS — Creativity, Activity, Service',
        concern: 'In highly competitive academic systems, time is finite and university entrance is determined by exam performance. Watching your child spend significant hours on art, sport, and community work while peers in other systems focus on exam preparation is a real trade-off — not an irrational concern.',
        bridge: 'CAS is a core diploma requirement — your child cannot receive the IB Diploma without it. But more importantly, it exists because the universities the IB targets have told the IB what they want: students who demonstrate genuine sustained commitment outside the classroom. A student who has led a project, sustained a creative practice, or completed a physical challenge brings something to an application that grades alone cannot. This is not enrichment. It is part of the qualification.',
        goal: 'CAS also develops what exam preparation cannot: the resilience, leadership, and ability to work with people unlike yourself that make a university student succeed after admission — and that employers look for long after graduation.',
        ibConnection: 'CAS is a requirement of the DP, which begins in Year 12. It requires 150 documented hours across Creativity, Activity, and Service, plus a reflection portfolio. It is reviewed as a diploma completion requirement — not as an afterthought.',
        whatToAsk: [
          'Ask your child: "What are you actually getting out of your CAS activity?" — genuine reflection matters more than hours logged.',
          'Ask the CAS coordinator: "Which activities tend to produce the strongest university application stories?" — not all CAS carries equal weight in practice.',
        ],
      },
      ko: {
        concept: 'CAS — 창의·활동·봉사',
        concern: '경쟁이 치열한 학문적 시스템에서 시간은 유한하고 대학 입학은 시험 성적에 의해 결정됩니다. 다른 시스템의 또래들이 시험 준비에 집중하는 동안 자녀가 예술, 스포츠, 봉사활동에 많은 시간을 쓰는 것은 실질적인 트레이드오프입니다. 비합리적인 걱정이 아닙니다.',
        bridge: 'CAS는 핵심 졸업장 요건입니다. CAS 없이는 IB 졸업장을 받을 수 없습니다. 더 중요한 것은, IB가 목표로 하는 대학교들이 원하는 것을 IB에 알려줬기 때문에 존재한다는 것입니다. 수업 밖에서 진정한 지속적 헌신을 보여준 학생 말입니다. 프로젝트를 이끌거나, 창의적인 활동을 꾸준히 해왔거나, 도전적인 신체 활동을 완료한 학생은 성적만으로는 제공할 수 없는 무언가를 지원서에 가져옵니다. 이것은 과외 활동이 아닙니다. 자격 요건의 일부입니다.',
        goal: 'CAS는 시험 준비가 할 수 없는 것을 발전시킵니다. 입학 후 대학 생활에서 성공하게 만드는 회복력, 리더십, 그리고 자신과 다른 사람들과 일하는 능력입니다. 졸업 후 오랫동안 고용주들이 찾는 것이기도 합니다.',
        ibConnection: 'CAS는 12학년부터 시작되는 DP의 요건입니다. 창의, 활동, 봉사 전반에 걸쳐 150시간의 기록된 활동과 성찰 포트폴리오를 요구합니다. 부가적인 요소가 아닌 졸업장 완료 요건으로 검토됩니다.',
        whatToAsk: [
          '자녀에게 "CAS 활동에서 실제로 무엇을 얻고 있어?"라고 물어보세요. 기록된 시간보다 진정한 성찰이 더 중요합니다.',
          'CAS 코디네이터에게 "어떤 활동이 대학교 지원서에서 가장 강력한 이야기를 만들어내는 경향이 있나요?" — 모든 CAS 활동이 실제로 동등한 비중을 갖지는 않습니다.',
        ],
      },
    },
  ],

  reviewScenarios: [
    {
      id: 'review-001',
      en: {
        title: 'The grade that isn\'t a grade',
        termsInPlay: ['Criterion-Based Assessment', 'Formative Feedback'],
        situation: 'Your child\'s MYP report shows "Working Towards" in three subjects and "Meeting" in two. They seem relaxed and say their teacher told them they\'re doing well. You\'re not sure whether to be worried or reassured.',
        situationNote: '"Working Towards" and "Meeting" are MYP descriptor language — they appear from Year 7 onwards. PYP (ages 3–11) uses different terms. If your child is still in PYP, the PYP section of this guide explains what their reports mean.',
        withUnderstanding: '"Working Towards" is formative language — it tells you where your child is on a progression toward a specific criterion, not where they rank in the class. You ask the teacher what specific evidence would move them to "Meeting" in each subject, and you work on those areas together. You are not behind. You are on a journey with a map.',
        withoutUnderstanding: 'You email the school asking why your child appears to be failing three subjects and what this means for their university application. The school schedules a meeting to explain the difference between formative and summative assessment — a conversation that could have been avoided.',
      },
      ko: {
        title: '점수가 아닌 점수',
        termsInPlay: ['준거 기준 평가', '형성평가와 피드백'],
        situation: '자녀의 MYP 성적표에 세 과목에서 "달성 중", 두 과목에서 "달성"이 표시되어 있습니다. 아이는 여유로워 보이고 선생님이 잘하고 있다고 했답니다. 걱정해야 할지 안심해야 할지 모르겠습니다.',
        situationNote: '"달성 중"과 "달성"은 MYP(7학년 이상) 고유의 기술어 언어입니다. PYP(3~11세)는 다른 용어를 사용합니다. 자녀가 아직 PYP에 있다면 이 안내서의 PYP 섹션에서 성적표의 의미를 확인하세요.',
        withUnderstanding: '"달성 중"은 형성평가 언어입니다. 반에서의 등수가 아니라 특정 준거를 향한 진행 과정을 알려줍니다. 각 과목에서 "달성"으로 이동하기 위한 구체적인 증거가 무엇인지 선생님께 물어보고 그 부분을 함께 집중합니다. 뒤처진 것이 아닙니다. 지도를 가지고 여정을 걷고 있는 것입니다.',
        withoutUnderstanding: '자녀가 세 과목에서 낙제하는 것처럼 보인다며, 대학 입시에 어떤 영향을 미치는지 학교에 이메일을 보냅니다. 학교는 형성평가와 총괄평가의 차이를 설명하기 위한 면담을 잡습니다. 피할 수 있었던 대화입니다.',
      },
    },
    {
      id: 'review-002',
      en: {
        title: 'The silent classroom',
        termsInPlay: ['Inquiry-Based Learning', 'Student Agency'],
        situation: 'On school observation day, the teacher asks a question. No one answers immediately. The teacher waits — almost thirty seconds. Finally, a student speaks. The teacher responds: "Interesting — what makes you think that?" The student looks uncertain. The class ends without a clear conclusion.',
        withUnderstanding: 'You recognise the teacher is using deliberate wait time — research shows it significantly improves the quality of student thinking. The follow-up question is Socratic method, not criticism. The lack of a neat conclusion is intentional — the students are meant to carry the question with them. You leave the observation feeling the school is doing something thoughtful.',
        withoutUnderstanding: 'You note that the classroom feels disorganised, the teacher doesn\'t seem to know the answers to their own questions, and lessons don\'t reach a conclusion. You write to the head of school to ask whether the teacher is adequately qualified.',
      },
      ko: {
        title: '조용한 교실',
        termsInPlay: ['탐구 기반 학습', '학습자 주도성'],
        situation: '수업 참관일에 선생님이 질문을 했습니다. 아무도 즉시 대답하지 않았습니다. 선생님이 기다렸습니다. 거의 30초가 지났습니다. 마침내 한 학생이 말했습니다. 선생님은 이렇게 답했습니다: "흥미롭네요. 왜 그렇게 생각하나요?" 학생이 불안해 보였습니다. 수업은 명확한 결론 없이 끝났습니다.',
        withUnderstanding: '선생님이 의도적인 "대기 시간"을 사용하고 있음을 알아봅니다. 연구에 따르면 이는 학생의 사고 질을 크게 향상시킵니다. 후속 질문은 비판이 아닌 소크라테스식 방법입니다. 깔끔한 결론이 없는 것도 의도적입니다. 학생들이 그 질문을 가지고 돌아가길 바라는 것입니다. 학교가 사려 깊은 교육을 하고 있다는 느낌으로 참관을 마칩니다.',
        withoutUnderstanding: '교실이 무질서하고, 선생님이 자신의 질문에 답을 모르는 것 같고, 수업이 결론에 이르지 못한다고 생각합니다. 선생님이 충분한 자격이 있는지 교장 선생님께 이메일을 씁니다.',
      },
    },
  ],

  pypCards: [
    {
      id: 'pyp-001',
      ibComponent: 'PYP — Reporting',
      en: {
        concept: 'No Grades in PYP',
        concern: 'Other schools give percentage scores or letter grades. PYP reports are full of descriptions, learning profiles, and teacher observations — but no numbers. Without a number, it\'s hard to know whether your child is ahead, behind, or on track.',
        bridge: 'PYP uses narrative reporting because at ages 3–11, a single number oversimplifies what a child can actually do. A narrative report tells you what your child understands, how they approach challenges, and where to focus — it is more diagnostic than a grade, not less. The absence of numbers is a design choice, not an oversight.',
        goal: 'When your child enters MYP (around age 11), criterion-based grades appear for the first time. The self-awareness built through PYP narrative reporting means they arrive in that graded system knowing how to reflect on their own learning — a huge advantage over students who only ever received a number.',
        ibConnection: 'PYP uses the IB\'s own reporting framework. Teachers observe and document learning against the PYP curriculum, not against a national grade standard.',
        whatToAsk: [
          '"What specific evidence of progress have you seen from my child this term?" — reports use standard language; asking for evidence makes it concrete.',
          '"What is my child finding genuinely difficult right now?" — PYP teachers observe closely and will know.',
        ],
      },
      ko: {
        concept: 'PYP에는 성적이 없습니다',
        concern: '다른 학교들은 백분율 점수나 등급을 줍니다. PYP 성적표는 서술, 학습 프로파일, 교사 관찰로 가득 차 있지만 숫자가 없습니다. 숫자 없이는 자녀가 앞서 있는지, 뒤처져 있는지, 아니면 정상 궤도에 있는지 알기 어렵습니다.',
        bridge: 'PYP가 서술적 보고를 사용하는 것은 3~11세에 단일 숫자가 아이가 실제로 할 수 있는 것을 지나치게 단순화하기 때문입니다. 서술적 성적표는 자녀가 무엇을 이해하는지, 어려움에 어떻게 접근하는지, 어디에 집중해야 하는지를 알려줍니다. 이는 점수보다 더 진단적인 것이지 덜한 것이 아닙니다. 숫자의 부재는 설계상의 선택이지 실수가 아닙니다.',
        goal: '자녀가 MYP(약 11세)에 진입하면 처음으로 준거 기반 성적이 등장합니다. PYP 서술적 보고를 통해 쌓인 자기 인식은 자녀가 그 채점 시스템에 자신의 학습을 성찰하는 방법을 알고 들어간다는 것을 의미합니다. 숫자만 받아온 학생들에 비해 큰 강점입니다.',
        ibConnection: 'PYP는 IB 자체 보고 프레임워크를 사용합니다. 교사는 국가 성적 기준이 아닌 PYP 교육과정에 따라 학습을 관찰하고 기록합니다.',
        whatToAsk: [
          '"이번 학기 자녀의 발전에 대한 구체적인 증거를 어떤 것을 보셨나요?" — 성적표는 표준 언어를 사용하므로 증거를 묻는 것이 구체적으로 이해하는 데 도움이 됩니다.',
          '"자녀가 지금 진정으로 어려움을 겪고 있는 것이 무엇인가요?" — PYP 교사는 면밀히 관찰하므로 알고 있을 것입니다.',
        ],
      },
    },
    {
      id: 'pyp-002',
      ibComponent: 'PYP — Units of Inquiry',
      en: {
        concept: 'Units of Inquiry',
        concern: 'My child\'s school doesn\'t seem to teach separate subjects. They\'re studying "How We Organize Ourselves" this term. I\'m not sure if they\'re getting enough Maths or English.',
        bridge: 'PYP organizes learning through transdisciplinary Units of Inquiry — themes that connect multiple subject areas around a real-world concept. Maths, language, science, and social studies are all being taught; they\'re woven together rather than delivered as isolated blocks. The skills are present. The packaging is different.',
        goal: 'Research on transfer of learning shows that knowledge acquired in context — connected to something real and meaningful — transfers to new situations far more effectively than knowledge learned in isolation. PYP builds the connective understanding that makes later, more specialized learning stick.',
        ibConnection: 'PYP has six transdisciplinary themes that all schools use: Who We Are, Where We Are in Place and Time, How We Express Ourselves, How the World Works, How We Organize Ourselves, and Sharing the Planet.',
        whatToAsk: [
          '"Which Maths and language skills is this unit developing?" — teachers can map it precisely against curriculum scope and sequence.',
          'Ask your child: "What is your class inquiry question right now?" — if they can tell you clearly, the learning is working.',
        ],
      },
      ko: {
        concept: '탐구 단원',
        concern: '자녀의 학교는 별도의 과목을 가르치지 않는 것 같습니다. 이번 학기에는 "우리는 어떻게 조직화하는가"를 공부하고 있습니다. 수학이나 영어를 충분히 배우는지 모르겠습니다.',
        bridge: 'PYP는 실제 개념을 중심으로 여러 교과 영역을 연결하는 탐구 단원을 통해 학습을 조직합니다. 수학, 언어, 과학, 사회는 모두 가르치고 있습니다. 다만 고립된 블록이 아닌 함께 엮여서 전달됩니다. 기술은 있습니다. 포장이 다를 뿐입니다.',
        goal: '학습 전이에 관한 연구에 따르면 실제적이고 의미 있는 것에 연결되어 맥락 속에서 습득한 지식이 고립된 환경에서 배운 지식보다 새로운 상황에 훨씬 효과적으로 전이됩니다. PYP는 이후의 더 전문화된 학습을 공고히 하는 연결적 이해를 구축합니다.',
        ibConnection: 'PYP에는 모든 학교가 사용하는 여섯 가지 탐구 주제가 있습니다: 우리는 누구인가, 우리는 시간과 공간에서 어디에 있는가, 우리는 어떻게 표현하는가, 세계는 어떻게 작동하는가, 우리는 어떻게 조직화하는가, 지구 공유하기.',
        whatToAsk: [
          '"이 단원은 어떤 수학과 언어 기술을 발전시키나요?" — 교사는 교육과정 범위와 순서에 따라 정확하게 설명할 수 있습니다.',
          '자녀에게 "지금 수업의 탐구 질문이 뭐야?"라고 물어보세요. 명확하게 대답할 수 있다면 학습이 작동하고 있는 것입니다.',
        ],
      },
    },
    {
      id: 'pyp-003',
      ibComponent: 'PYP Early Years',
      en: {
        concept: 'Play-Based Learning',
        concern: 'My child comes home talking about games and stories. In other schools at this age, children are already reading and writing formally. I\'m worried they are falling behind.',
        bridge: 'In PYP Early Years (ages 3–6), structured play is the curriculum — not a break from it. Children develop language, mathematical thinking, social reasoning, and inquiry skills through purposeful, teacher-designed play. Both the IB and decades of developmental research agree: formal academic instruction before age 6–7 does not produce better long-term outcomes and often produces worse ones by undermining intrinsic motivation.',
        goal: 'Children who learn through play in early years develop stronger self-regulation, creativity, and internal motivation than those pushed into formal academics early. These qualities predict success in the more structured MYP and DP years ahead — and are much harder to develop once lost.',
        ibConnection: 'PYP Early Years is aligned with international research on early childhood development, including work from Finland, New Zealand\'s Te Whāriki, and the Reggio Emilia approach.',
        whatToAsk: [
          '"What learning objectives is this play activity building toward?" — in PYP, play always has intentional design behind it.',
          'If you\'re concerned about readiness: "How is my child progressing in reading and number sense compared to expectations for this age?" — the teacher will have a clear picture.',
        ],
      },
      ko: {
        concept: '놀이 기반 학습',
        concern: '자녀가 게임과 이야기에 대해 이야기하며 집에 옵니다. 다른 학교에서는 이 나이에 이미 공식적으로 읽고 쓰고 있습니다. 뒤처질까 봐 걱정됩니다.',
        bridge: 'PYP 초기 과정(3~6세)에서 구조화된 놀이는 교육과정의 휴식이 아니라 교육과정 그 자체입니다. 아이들은 교사가 설계한 목적 있는 놀이를 통해 언어, 수학적 사고, 사회적 추론, 탐구 기술을 발전시킵니다. IB와 수십 년간의 발달 연구 모두 동의합니다. 6~7세 이전의 공식적 학문 교육은 더 나은 장기적 결과를 만들어내지 않으며, 종종 내재적 동기를 훼손하여 더 나쁜 결과를 낳습니다.',
        goal: '초기에 놀이를 통해 배운 아이들은 일찍 공식 학습에 투입된 아이들보다 더 강한 자기조절력, 창의성, 내적 동기를 발전시킵니다. 이러한 자질은 앞으로의 더 구조화된 MYP와 DP 과정에서의 성공을 예측하며, 한번 잃으면 회복하기가 훨씬 어렵습니다.',
        ibConnection: 'PYP 초기 과정은 핀란드, 뉴질랜드의 테 화리키, 레지오 에밀리아 접근법을 포함한 국제 아동 발달 연구와 일치합니다.',
        whatToAsk: [
          '"이 놀이 활동은 어떤 학습 목표를 향하고 있나요?" — PYP에서 놀이는 항상 의도적인 설계가 뒤에 있습니다.',
          '준비도가 걱정된다면: "이 나이 기대치와 비교하여 자녀의 읽기와 수 감각 발전은 어떤가요?" — 교사는 명확한 상황을 파악하고 있을 것입니다.',
        ],
      },
    },
    {
      id: 'pyp-004',
      ibComponent: 'PYP Exhibition (Year 5/6)',
      en: {
        concept: 'The PYP Exhibition',
        concern: 'My child in Year 5 or 6 has been given a large independent project where they choose a global issue to investigate. It seems vague and unstructured. Other children at this age are preparing for exams.',
        bridge: 'The PYP Exhibition is the culminating assessment of the entire Primary Years Programme — the equivalent of a final exam, but in project form. Students choose a real-world issue, research it independently, collaborate with peers, connect with a mentor, and present findings to the school community. It is assessed against PYP criteria and taken very seriously by the school. The apparent openness is scaffolded structure in disguise.',
        goal: 'The Exhibition is specifically designed to prepare students for the MYP Personal Project (Year 10) and the DP Extended Essay (Year 12). It is the first moment where everything PYP has built — inquiry skills, self-direction, collaboration, reflection — gets demonstrated publicly.',
        ibConnection: 'The Exhibition is a mandatory, assessed component of PYP completion. Students must demonstrate all five essential elements of the PYP: knowledge, concepts, skills, attitudes, and action.',
        whatToAsk: [
          '"What criteria will the Exhibition be assessed against?" — there is a clear framework; it is not as open as it looks.',
          'Ask your child: "What action are you planning to take as part of your inquiry?" — PYP Exhibition requires a real-world action component, not just a presentation.',
        ],
      },
      ko: {
        concept: 'PYP 전시회',
        concern: '5학년 또는 6학년인 자녀가 탐구할 세계적 이슈를 선택하는 대규모 독립 프로젝트를 받았습니다. 막연하고 구조가 없어 보입니다. 이 나이의 다른 아이들은 시험을 준비하고 있습니다.',
        bridge: 'PYP 전시회는 전체 초등 과정(PYP)의 최종 평가입니다. 프로젝트 형태의 최종 시험이라고 할 수 있습니다. 학생들은 실제 세계 이슈를 선택하고, 독립적으로 연구하고, 동료와 협력하고, 멘토와 연결하고, 학교 커뮤니티에 결과를 발표합니다. PYP 준거에 따라 평가되며 학교는 매우 진지하게 다룹니다. 겉으로 보이는 개방성은 위장된 구조화된 비계입니다.',
        goal: '전시회는 MYP 개인 프로젝트(10학년)와 DP 소논문(12학년)을 준비하기 위해 특별히 설계되었습니다. 탐구 기술, 자기주도, 협력, 성찰 등 PYP가 구축한 모든 것이 처음으로 공개적으로 증명되는 순간입니다.',
        ibConnection: '전시회는 PYP 완료의 필수 평가 요소입니다. 학생들은 PYP의 다섯 가지 핵심 요소인 지식, 개념, 기술, 태도, 행동을 모두 증명해야 합니다.',
        whatToAsk: [
          '"전시회는 어떤 준거로 평가되나요?" — 명확한 프레임워크가 있습니다. 겉보기만큼 열려있지 않습니다.',
          '자녀에게 "탐구의 일부로 어떤 행동을 계획하고 있어?"라고 물어보세요. PYP 전시회는 발표만이 아닌 실제 세계 행동 요소가 필요합니다.',
        ],
      },
    },
    {
      id: 'pyp-005',
      ibComponent: 'PYP → MYP transition',
      en: {
        concept: 'The Move to MYP',
        concern: 'My child is moving from PYP to MYP next year. I\'ve heard things change significantly and I\'m not sure whether my child is prepared for what\'s ahead.',
        bridge: 'The shift to MYP is real: subjects become separate disciplines, criterion-based grades appear for the first time, homework increases, and the academic pace picks up. The good news is that PYP was designed to build exactly the foundations MYP requires — independent thinking, self-direction, and genuine inquiry skills. Students who have engaged deeply with PYP have those foundations. Students who only passed through it may find the transition harder.',
        goal: 'Students who arrive in MYP from strong PYP experience tend to adapt to the graded structure faster than those coming from traditional primary schools, because they already know how to learn — not just how to follow instructions. The adjustment period is real, but the foundation is there.',
        ibConnection: 'The IB designs PYP and MYP as a continuum, not two separate programs. The inquiry approaches, Learner Profile attributes, and approaches to learning skills are explicitly carried forward.',
        whatToAsk: [
          'Ask the MYP coordinator: "How will my child be supported in understanding criterion-based assessment in their first MYP year?" — most IB schools have a deliberate transition program.',
          'In the first MYP term, ask your child: "Do you understand what each criterion in your subjects is asking for?" — if not, that\'s the conversation to have with the subject teacher directly.',
        ],
      },
      ko: {
        concept: 'MYP로의 전환',
        concern: '자녀가 내년에 PYP에서 MYP로 이동합니다. 상당히 변화가 있다고 들었는데 자녀가 앞으로의 것을 준비되었는지 모르겠습니다.',
        bridge: 'MYP로의 전환은 실질적입니다. 과목이 별도 학문으로 나뉘고, 처음으로 준거 기반 성적이 등장하고, 숙제가 늘어나고, 학업 속도가 빨라집니다. 다행스러운 것은 PYP가 MYP에 필요한 바로 그 기초를 쌓도록 설계되었다는 점입니다. 독립적 사고, 자기주도, 진정한 탐구 기술 말입니다. PYP에 깊이 참여한 학생들은 그 기초를 갖추고 있습니다. 단순히 통과만 한 학생들은 전환이 더 어려울 수 있습니다.',
        goal: 'PYP를 통해 탄탄한 경험을 가진 학생들은 전통적인 초등학교에서 온 학생들보다 MYP의 채점 구조에 더 빠르게 적응하는 경향이 있습니다. 지시를 따르는 방법이 아닌 배우는 방법을 이미 알고 있기 때문입니다. 적응 기간은 실제로 있지만 기초는 갖춰져 있습니다.',
        ibConnection: 'IB는 PYP와 MYP를 두 개의 별도 프로그램이 아닌 연속체로 설계합니다. 탐구 접근법, 학습자 프로파일 속성, 학습 접근 기술이 명시적으로 이어집니다.',
        whatToAsk: [
          'MYP 코디네이터에게 "첫 MYP 학년에서 자녀가 준거 기반 평가를 이해하는 데 어떻게 지원될 건가요?"라고 물어보세요. 대부분의 IB 학교에는 의도적인 전환 프로그램이 있습니다.',
          '첫 MYP 학기에 자녀에게 "각 과목의 준거가 무엇을 요구하는지 이해하고 있어?"라고 물어보세요. 그렇지 않다면 해당 과목 교사와 직접 대화해야 할 것입니다.',
        ],
      },
    },
  ],

  gradingSystem: {
    myp: {
      en: {
        title: 'How MYP Grades Work',
        intro: 'MYP subjects do not use percentages or class ranks. Every subject uses four criteria, each marked out of 8. Those four scores are added together to give a total out of 32, which is then converted into a final grade from 1 to 7.',
        criteriaNote: 'The four criteria are labelled A, B, C, and D — and they measure different things depending on the subject. In MYP Mathematics, for example, Criterion A is "Knowing and Understanding" and Criterion D is "Applying Mathematics in Real-Life Contexts." A student can score well on A and struggle on D, and the report will show both.',
        boundaryNote: 'The conversion from a raw total (out of 32) to a final grade (1–7) is done using grade boundaries. These boundaries are set by each school and can vary slightly, but the standard IB approximation is shown in the calculator below. There is also variation at the subject level: Maths and Sciences tend to have higher raw scores needed for each grade, while Humanities and Arts boundaries are often set lower. A score of 24/32 in MYP Maths may yield a different final grade than 24/32 in MYP Drama.',
        descriptors: [
          { grade: 1, label: 'Minimal achievement',      ko: '최소한의 성취' },
          { grade: 2, label: 'Very limited achievement', ko: '매우 제한적인 성취' },
          { grade: 3, label: 'Limited achievement',      ko: '제한적인 성취' },
          { grade: 4, label: 'Adequate achievement',     ko: '적절한 성취' },
          { grade: 5, label: 'Substantial achievement',  ko: '상당한 성취' },
          { grade: 6, label: 'Accomplished achievement', ko: '숙련된 성취' },
          { grade: 7, label: 'Excellent achievement',    ko: '우수한 성취' },
        ],
        // Standard IB MYP grade boundaries for a 4-criteria subject (each out of 8, total out of 32)
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
          'A "4" in MYP is "Adequate achievement" — it is a passing grade, not a near-fail. Korean parents sometimes interpret a 4 as a D grade. It is not.',
          'Your child can score differently on each criterion in the same subject. A 7/8 on Criterion A and 3/8 on Criterion C in the same subject tells you exactly where to focus — this is diagnostic information, not just a result.',
          'Grade boundaries vary slightly by school and subject. The calculator uses standard IB approximations. Your school\'s specific boundaries may differ by 1–2 points.',
        ],
      },
      ko: {
        title: 'MYP 성적 체계 이해하기',
        intro: 'MYP 과목은 백분율이나 석차를 사용하지 않습니다. 모든 과목은 각 8점 만점의 네 가지 준거로 평가됩니다. 이 네 점수를 합산하면 32점 만점의 총점이 되고, 이것이 최종 1~7점 등급으로 변환됩니다.',
        criteriaNote: '네 가지 준거는 A, B, C, D로 표시되며 과목에 따라 다른 것을 측정합니다. 예를 들어 MYP 수학에서 준거 A는 "지식과 이해", 준거 D는 "실생활 맥락에서의 수학 적용"입니다. 학생이 A에서는 높은 점수를 받고 D에서는 어려움을 겪을 수 있으며, 성적표에는 두 점수가 모두 표시됩니다.',
        boundaryNote: '32점 만점의 원점수를 1~7등급으로 변환하는 것은 등급 경계를 사용합니다. 이 경계는 각 학교에서 설정하며 약간씩 다를 수 있지만, 아래 계산기에 표준 IB 근사값이 제시되어 있습니다. 과목 수준에서도 차이가 있습니다. 수학과 과학은 각 등급에 필요한 원점수가 더 높은 경향이 있고, 인문학과 예술은 경계가 낮게 설정되는 경우가 많습니다. MYP 수학에서 24/32점이 MYP 연극에서의 24/32점과 다른 최종 등급을 만들어낼 수 있습니다.',
        watchOut: [
          'MYP에서 "4"는 "적절한 성취"입니다. 통과 등급이며 낙제에 가까운 것이 아닙니다. 한국 학부모들은 4를 D 등급으로 해석하는 경우가 있습니다. 그렇지 않습니다.',
          '자녀는 같은 과목에서 준거별로 다른 점수를 받을 수 있습니다. 준거 A에서 7/8, 준거 C에서 3/8을 받았다면 어디에 집중해야 하는지 정확히 알 수 있습니다. 이는 단순한 결과가 아닌 진단 정보입니다.',
          '등급 경계는 학교와 과목에 따라 약간 다릅니다. 계산기는 표준 IB 근사값을 사용합니다. 학교의 구체적인 경계는 1~2점 차이가 있을 수 있습니다.',
        ],
      },
    },

    dp: {
      en: {
        title: 'How DP Grades Work',
        intro: 'The IB Diploma is scored out of 45 points. Six subjects contribute up to 42 points (each graded 1–7), and the diploma core — the Extended Essay and Theory of Knowledge — can add up to 3 bonus points. Most competitive universities require 36–40+ points.',
        subjectStructure: 'Students study six subjects: three at Higher Level (HL) and three at Standard Level (SL). HL subjects involve more content and deeper assessment. Universities often specify minimum grades at HL (e.g., "HL6 in Mathematics").',
        coreBonus: {
          title: 'The EE + ToK Bonus Matrix',
          note: 'The Extended Essay (EE) and Theory of Knowledge (ToK) are each graded A–E. Together they produce 0–3 bonus points using this matrix. A grade of E on either — without a compensating A on the other — means no bonus points. Two E grades means the diploma is not awarded.',
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
          'No subject grade below 2 (SL) or 3 (HL) — a single very low grade can fail the diploma even if the total points are sufficient.',
          'CAS requirements must be completed and signed off.',
          'No grade E in both the Extended Essay and Theory of Knowledge.',
          'No more than three grade 1s across all subjects.',
        ],
        watchOut: [
          'A student with 38 points who fails a condition (e.g., grades a 2 in an HL subject) does not receive the diploma. Points alone are not enough.',
          'Universities make conditional offers based on predicted grades, typically before final exams. The predicted grade conversation with teachers in Year 12 is critical.',
          'Internal Assessment (IA) — coursework marked by the teacher — is then moderated by the IB externally. A teacher\'s mark can be adjusted up or down. This is not an error; it is the system.',
          'The diploma is awarded in May. There is a November session for some students. Universities in different countries accept different session results differently.',
        ],
      },
      ko: {
        title: 'DP 성적 체계 이해하기',
        intro: 'IB 졸업장은 45점 만점으로 채점됩니다. 여섯 과목이 최대 42점(각 1~7점)을 기여하고, 졸업장 핵심 요소인 소논문과 지식이론이 최대 3점의 보너스 점수를 추가할 수 있습니다. 대부분의 경쟁력 있는 대학교는 36~40점 이상을 요구합니다.',
        subjectStructure: '학생들은 세 과목을 상위 수준(HL), 세 과목을 표준 수준(SL)으로 공부합니다. HL 과목은 더 많은 내용과 깊이 있는 평가를 포함합니다. 대학교에서는 종종 HL 최소 등급을 명시합니다(예: "수학 HL6 이상").',
        coreBonus: {
          title: '소논문 + 지식이론 보너스 매트릭스',
          note: '소논문(EE)과 지식이론(ToK)은 각각 A~E로 평가됩니다. 두 점수를 합쳐 이 매트릭스를 통해 0~3점의 보너스 점수가 부여됩니다. 한 과목에서 E 등급을 받으면 보너스 점수가 없습니다. 두 과목 모두 E 등급이면 졸업장이 수여되지 않습니다.',
        },
        passingRules: [
          '졸업장을 받으려면 최소 24점 이상이어야 합니다.',
          '어떤 과목도 2점(SL) 또는 3점(HL) 미만을 받아서는 안 됩니다. 총점이 충분해도 단 하나의 매우 낮은 점수로 졸업장을 받지 못할 수 있습니다.',
          'CAS 요건을 완료하고 서명을 받아야 합니다.',
          '소논문과 지식이론 모두 E 등급을 받아서는 안 됩니다.',
          '전체 과목에서 1등급이 세 개를 초과해서는 안 됩니다.',
        ],
        watchOut: [
          '38점을 받은 학생이라도 조건을 충족하지 못하면(예: HL 과목에서 2점) 졸업장을 받지 못합니다. 점수만으로는 충분하지 않습니다.',
          '대학교는 보통 최종 시험 전에 예상 점수를 바탕으로 조건부 입학 허가를 합니다. 11학년에서 교사와 나누는 예상 점수 대화가 매우 중요합니다.',
          '교사가 채점하는 내부 평가(IA)는 이후 IB에 의해 외부에서 조정됩니다. 교사의 점수가 올라가거나 내려갈 수 있습니다. 이는 오류가 아니라 시스템입니다.',
          '졸업장은 5월에 수여됩니다. 일부 학생을 위한 11월 시험도 있습니다. 국가별로 시험 세션 결과를 다르게 인정하는 경우가 있습니다.',
        ],
      },
    },
  },

  glossary: [
    {
      term: 'IB',
      en: { full: 'International Baccalaureate', definition: 'The global organisation that designs and awards the PYP, MYP, and DP programmes. Schools are authorised by the IB to offer these programmes.' },
      ko: { full: '국제 바칼로레아', definition: 'PYP, MYP, DP 프로그램을 설계하고 수여하는 글로벌 기관입니다. 학교는 IB로부터 인증을 받아 이 프로그램을 제공합니다.' },
    },
    {
      term: 'PYP',
      en: { full: 'Primary Years Programme', definition: 'The IB programme for students aged 3–11 (roughly nursery to Year 6). Uses inquiry-based, transdisciplinary learning. Narrative reports, no percentage grades.' },
      ko: { full: '초등 과정', definition: '3~11세 학생(보육~6학년 수준)을 위한 IB 프로그램입니다. 탐구 기반의 탈학문적 학습을 사용합니다. 서술형 성적표로 백분율 성적이 없습니다.' },
    },
    {
      term: 'MYP',
      en: { full: 'Middle Years Programme', definition: 'The IB programme for students aged 11–16 (roughly Years 7–11). Introduces criterion-based grades (1–7) across eight subject groups.' },
      ko: { full: '중등 과정', definition: '11~16세 학생(7~11학년 수준)을 위한 IB 프로그램입니다. 8개 과목 그룹에 걸쳐 준거 기반 성적(1~7점)을 도입합니다.' },
    },
    {
      term: 'DP',
      en: { full: 'Diploma Programme', definition: 'The IB programme for students aged 16–19 (Years 12–13). Leads to the IB Diploma, scored out of 45. Widely recognised by universities worldwide.' },
      ko: { full: '디플로마 과정', definition: '16~19세 학생(12~13학년)을 위한 IB 프로그램입니다. 45점 만점으로 채점되는 IB 졸업장을 수여합니다. 전 세계 대학교에서 광범위하게 인정받습니다.' },
    },
    {
      term: 'HL',
      en: { full: 'Higher Level', definition: 'One of two subject tiers in the DP. Students take three HL subjects, which involve more content, hours, and deeper assessment than SL. Universities often set minimum HL grade requirements.' },
      ko: { full: '상위 수준', definition: 'DP의 두 과목 수준 중 하나입니다. 학생들은 SL보다 더 많은 내용, 수업 시간, 깊이 있는 평가를 포함하는 세 과목을 HL로 수강합니다. 대학교에서는 종종 HL 최소 등급 요건을 설정합니다.' },
    },
    {
      term: 'SL',
      en: { full: 'Standard Level', definition: 'The second subject tier in the DP. Students take three SL subjects alongside their three HL subjects. Minimum passing grade for SL is 2.' },
      ko: { full: '표준 수준', definition: 'DP의 두 번째 과목 수준입니다. 학생들은 세 HL 과목과 함께 세 SL 과목을 수강합니다. SL의 최소 통과 등급은 2점입니다.' },
    },
    {
      term: 'IA',
      en: { full: 'Internal Assessment', definition: 'Coursework that is marked by the classroom teacher, then moderated externally by the IB. Contributes 20–30% of the final DP grade depending on subject. The IB can adjust a teacher\'s mark up or down.' },
      ko: { full: '내부 평가', definition: '담임 교사가 채점한 후 IB가 외부에서 조정하는 과제물입니다. 과목에 따라 최종 DP 성적의 20~30%를 차지합니다. IB는 교사의 점수를 올리거나 내릴 수 있습니다.' },
    },
    {
      term: 'EE',
      en: { full: 'Extended Essay', definition: 'A 4,000-word independent research essay completed in Year 12–13, externally assessed by the IB. Graded A–E. Together with ToK, contributes up to 3 bonus points to the diploma total.' },
      ko: { full: '소논문', definition: '11~12학년에 작성하는 4,000자 분량의 독립적 연구 논문으로 IB에 의해 외부 평가됩니다. A~E로 평가됩니다. ToK와 함께 졸업장 총점에 최대 3점의 보너스 점수를 기여합니다.' },
    },
    {
      term: 'ToK',
      en: { full: 'Theory of Knowledge', definition: 'A DP core course that asks students to reflect on how we know what we know across different disciplines. Graded A–E. With the EE, contributes up to 3 bonus points.' },
      ko: { full: '지식이론', definition: '학생들이 다양한 학문 분야에서 우리가 알고 있는 것을 어떻게 아는지 성찰하게 하는 DP 핵심 과목입니다. A~E로 평가됩니다. EE와 함께 최대 3점의 보너스 점수를 기여합니다.' },
    },
    {
      term: 'CAS',
      en: { full: 'Creativity, Activity, Service', definition: 'A mandatory DP diploma requirement involving 150 documented hours of real-world engagement across creative, physical, and service activities, plus a reflection portfolio.' },
      ko: { full: '창의·활동·봉사', definition: '창의적, 신체적, 봉사 활동에 걸쳐 150시간의 기록된 실세계 참여와 성찰 포트폴리오를 포함하는 필수 DP 졸업장 요건입니다.' },
    },
  ],
}
