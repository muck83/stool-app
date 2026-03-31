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

  meta: {
    en: {
      title: 'Understanding Your Child\'s IB School',
      subtitle: 'A guide for Korean families navigating international education',
      intro: 'IB schools look very different from Korean schools — not because they are less rigorous, but because they are built around different goals. This guide explains five concepts that often confuse Korean parents, and why the approach is designed the way it is.',
    },
    ko: {
      title: '자녀의 IB 학교 이해하기',
      subtitle: '국제 교육을 경험하는 한국 가정을 위한 안내서',
      intro: 'IB 학교는 한국 학교와 매우 다르게 보입니다. 엄격하지 않아서가 아니라 다른 목표를 중심으로 설계되었기 때문입니다. 이 안내서는 한국 학부모들이 자주 혼란스러워하는 다섯 가지 개념과 왜 이 방식이 그렇게 설계되었는지를 설명합니다.',
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
    },
    ko: {
      situation: [
        '10월, 담임 선생님께 이메일을 보내 자녀의 반 석차를 물어봤습니다. 선생님은 친절하게 자녀가 "잘 성장하고 있다"고 답하며 최근 에세이에 대한 서면 피드백을 공유했습니다.',
        '석차는 없었습니다.',
        '자녀의 위치를 파악하려면 숫자가 필요하다고 다시 물었습니다. 선생님은 이렇게 답했습니다: "저희 학교는 학생의 등수를 매기지 않습니다. 평가 기준을 함께 살펴보는 면담을 잡으면 어떨까요?"',
        '국제학교 학부모가 된 지 2년이 됐습니다. 아직도 숫자를 받지 못했습니다.',
      ],
      question: '왜 학교는 자녀의 위치를 알려주지 않을까요?',
    },
  },

  cards: [
    {
      id: 'card-001',
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
      ibComponent: 'MYP & DP assessment',
      en: {
        concept: 'Criterion-Based Assessment',
        concern: 'Class rank is genuinely useful in competitive exam systems — it tells you directly whether your child is on track for the university places you\'re aiming for. Receiving a grade out of 7 without any comparative context can feel like the school is withholding information you need.',
        bridge: 'IB grades measure mastery against a fixed standard — not against other students. Two students can both receive a 7. This isn\'t the school avoiding transparency; it\'s a system that gives you more precise information than a rank does. A criterion score tells you exactly which skills need work. A rank never can.',
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
        bridge: 'IB 성적은 다른 학생이 아닌 고정된 기준에 대한 숙달을 측정합니다. 두 학생이 모두 7점을 받을 수 있습니다. 학교가 투명성을 피하는 것이 아니라 석차보다 더 정확한 정보를 제공하는 시스템입니다. 준거 점수는 어떤 기술을 발전시켜야 하는지 정확히 알려주는데, 석차는 절대 그럴 수 없습니다.',
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
      ibComponent: 'DP Core — CAS',
      en: {
        concept: 'CAS — Creativity, Activity, Service',
        concern: 'In highly competitive academic systems, time is finite and university entrance is determined by exam performance. Watching your child spend significant hours on art, sport, and community work while peers in other systems focus on exam preparation is a real trade-off — not an irrational concern.',
        bridge: 'CAS is a core diploma requirement — your child cannot receive the IB Diploma without it. But more importantly, it exists because the universities the IB targets have told the IB what they want: students who demonstrate genuine sustained commitment outside the classroom. A student who has led a project, sustained a creative practice, or completed a physical challenge brings something to an application that grades alone cannot. This is not enrichment. It is part of the qualification.',
        goal: 'CAS also develops what exam preparation cannot: the resilience, leadership, and ability to work with people unlike yourself that make a university student succeed after admission — and that employers look for long after graduation.',
        ibConnection: 'CAS requires 150 documented hours across Creativity, Activity, and Service, plus a reflection portfolio. It is reviewed as a diploma completion requirement — not as an afterthought.',
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
        ibConnection: 'CAS는 창의, 활동, 봉사 전반에 걸쳐 150시간의 기록된 활동과 성찰 포트폴리오를 요구합니다. 부가적인 요소가 아닌 졸업장 완료 요건으로 검토됩니다.',
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
        withUnderstanding: '"Working Towards" is formative language — it tells you where your child is on a progression toward a specific criterion, not where they rank in the class. You ask the teacher what specific evidence would move them to "Meeting" in each subject, and you work on those areas together. You are not behind. You are on a journey with a map.',
        withoutUnderstanding: 'You email the school asking why your child appears to be failing three subjects and what this means for their university application. The school schedules a meeting to explain the difference between formative and summative assessment — a conversation that could have been avoided.',
      },
      ko: {
        title: '점수가 아닌 점수',
        termsInPlay: ['준거 기준 평가', '형성평가와 피드백'],
        situation: '자녀의 MYP 성적표에 세 과목에서 "달성 중", 두 과목에서 "달성"이 표시되어 있습니다. 아이는 여유로워 보이고 선생님이 잘하고 있다고 했답니다. 걱정해야 할지 안심해야 할지 모르겠습니다.',
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

  gradingSystem: {
    myp: {
      en: {
        title: 'How MYP Grades Work',
        intro: 'MYP subjects do not use percentages or class ranks. Every subject uses four criteria, each marked out of 8. Those four scores are added together to give a total out of 32, which is then converted into a final grade from 1 to 7.',
        criteriaNote: 'The four criteria are labelled A, B, C, and D — and they measure different things depending on the subject. In MYP Mathematics, for example, Criterion A is "Knowing and Understanding" and Criterion D is "Applying Mathematics in Real-Life Contexts." A student can score well on A and struggle on D, and the report will show both.',
        boundaryNote: 'The conversion from a raw total (out of 32) to a final grade (1–7) is done using grade boundaries. These boundaries are set by each school and can vary slightly, but the standard IB approximation is shown in the calculator below.',
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
        boundaryNote: '32점 만점의 원점수를 1~7등급으로 변환하는 것은 등급 경계를 사용합니다. 이 경계는 각 학교에서 설정하며 약간씩 다를 수 있지만, 아래 계산기에 표준 IB 근사값이 제시되어 있습니다.',
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
}
