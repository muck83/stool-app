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
        whatYouMightThink: '"The teacher isn\'t teaching. My child comes home with more questions than answers. How will they be ready for the exam?"',
        whatItActuallyMeans: 'IB teachers are trained to ask questions rather than provide answers. This is deliberate — it develops your child\'s ability to reason independently. A student who has wrestled with a question retains the answer far longer than one who was simply told it.',
        whyItMatters: 'The Extended Essay, Theory of Knowledge, and university interviews all require your child to think on their feet — not recall a teacher\'s notes. Inquiry-based learning is the training ground for exactly that.',
        ibConnection: 'The IB Learner Profile describes students as "inquirers" — curiosity and independent thinking are not side skills, they are the point.',
      },
      ko: {
        concept: '탐구 기반 학습',
        whatYouMightThink: '"선생님이 가르치지 않는 것 같습니다. 아이가 답 대신 질문을 더 많이 가지고 집에 옵니다. 어떻게 시험을 준비하나요?"',
        whatItActuallyMeans: 'IB 교사는 답을 주기보다 질문하도록 훈련받습니다. 이는 의도적입니다. 자녀가 스스로 생각하는 능력을 키우기 위해서입니다. 질문과 씨름한 학생은 단순히 답을 들은 학생보다 훨씬 오래 그 내용을 기억합니다.',
        whyItMatters: '소논문(Extended Essay), 지식이론(Theory of Knowledge), 대학교 면접 모두 자녀가 즉흥적으로 생각하는 능력을 요구합니다. 선생님의 필기를 암기하는 것이 아닙니다. 탐구 기반 학습은 바로 이를 위한 훈련입니다.',
        ibConnection: 'IB 학습자 프로파일은 학생을 "탐구하는 사람(inquirers)"으로 묘사합니다. 호기심과 독립적 사고는 부가적인 능력이 아니라 핵심입니다.',
      },
    },
    {
      id: 'card-002',
      ibComponent: 'MYP & DP assessment',
      en: {
        concept: 'Criterion-Based Assessment',
        whatYouMightThink: '"My child got 5 out of 7. Is that good? What rank is that? I need to know where they stand compared to other students."',
        whatItActuallyMeans: 'IB grades are not based on rank. A 5 means your child has demonstrated specific skills at a specific level — regardless of what other students scored. Two students can both receive a 7. The grade measures mastery against a fixed standard, not competition against peers.',
        whyItMatters: 'This system means your child\'s grade can only improve through their own growth. No one else\'s improvement can lower their score. It also means the grade is a precise diagnostic — a 5 tells you exactly which criteria to focus on.',
        ibConnection: 'IB assessment descriptors are published and consistent across all IB schools worldwide. A 6 in Bangkok means the same as a 6 in London.',
      },
      ko: {
        concept: '준거 기준 평가',
        whatYouMightThink: '"아이가 7점 만점에 5점을 받았습니다. 잘한 건가요? 몇 등인가요? 다른 학생들과 비교해서 어느 위치인지 알고 싶습니다."',
        whatItActuallyMeans: 'IB 점수는 등수가 아닙니다. 5점은 자녀가 다른 학생의 점수와 무관하게 특정 기술을 특정 수준에서 발휘했다는 의미입니다. 두 학생이 모두 7점을 받을 수 있습니다. 점수는 또래와의 경쟁이 아닌 고정된 기준에 대한 숙달을 측정합니다.',
        whyItMatters: '이 시스템에서 자녀의 점수는 오직 자녀 자신의 성장을 통해서만 향상됩니다. 다른 학생의 성장이 자녀의 점수를 낮추지 않습니다. 또한 점수가 정확한 진단이 됩니다. 5점은 어떤 준거에 집중해야 하는지 정확히 알려줍니다.',
        ibConnection: 'IB 평가 기술어는 전 세계 모든 IB 학교에서 발행되고 일관되게 적용됩니다. 방콕에서의 6점은 런던에서의 6점과 동일한 의미입니다.',
      },
    },
    {
      id: 'card-003',
      ibComponent: 'MYP Personal Project / DP Extended Essay',
      en: {
        concept: 'Student Agency',
        whatYouMightThink: '"The teacher told my child they can choose their own essay topic. Isn\'t that the teacher\'s job? My child chose something completely unrelated to their future career."',
        whatItActuallyMeans: 'The IB requires students to demonstrate ownership of their learning. The Personal Project and Extended Essay are not just assignments — they are evidence that your child can identify a meaningful question, research it independently, and produce original work over time. This is exactly what selective universities are looking for.',
        whyItMatters: 'Students who choose their own topics are significantly more motivated and produce stronger work. The ability to self-direct is also a core competency tested in university interviews and demanded in professional careers.',
        ibConnection: 'The Extended Essay is a 4,000-word independent research paper completed in Year 12–13. It is assessed externally by the IB and carries real weight in the final diploma score.',
      },
      ko: {
        concept: '학습자 주도성',
        whatYouMightThink: '"선생님이 에세이 주제를 스스로 정하라고 했답니다. 그게 선생님 역할 아닌가요? 아이가 미래 직업과 전혀 관계없는 주제를 골랐습니다."',
        whatItActuallyMeans: 'IB는 학생이 자신의 학습에 주도적으로 참여할 것을 요구합니다. 개인 프로젝트와 소논문은 단순한 과제가 아닙니다. 자녀가 의미 있는 질문을 스스로 찾고, 독립적으로 연구하고, 시간을 들여 독창적인 결과물을 만들어낼 수 있다는 증거입니다. 경쟁이 치열한 대학교가 바로 이것을 찾습니다.',
        whyItMatters: '스스로 주제를 선택한 학생은 훨씬 더 동기부여되고 더 좋은 결과물을 만들어냅니다. 자기주도 능력은 대학교 면접에서 평가되고 직업 세계에서도 핵심 역량으로 요구됩니다.',
        ibConnection: '소논문(Extended Essay)은 11~12학년에 작성하는 4,000자 분량의 독립적 연구 논문입니다. IB에 의해 외부적으로 평가되며 최종 졸업장 점수에 실질적인 비중을 차지합니다.',
      },
    },
    {
      id: 'card-004',
      ibComponent: 'Formative assessment (all programmes)',
      en: {
        concept: 'Formative Feedback',
        whatYouMightThink: '"My child\'s work came back covered in comments but with no grade. How do I know if they passed? Why isn\'t the teacher grading?"',
        whatItActuallyMeans: 'Formative feedback is practice — it helps your child improve before the grade actually counts. Research consistently shows that detailed written feedback without a grade produces better learning outcomes than a grade alone. The comments are not instead of teaching. They are the teaching.',
        whyItMatters: 'The summative grade — the one that appears on the university application — reflects genuine mastery developed through this feedback cycle. A child who has received and acted on detailed feedback will perform better on the final assessment than one who only ever received a number.',
        ibConnection: 'IB teachers are trained to distinguish between formative (practice) and summative (graded) work. Parents often see only the formative work and assume nothing is being measured.',
      },
      ko: {
        concept: '형성평가와 피드백',
        whatYouMightThink: '"아이의 과제물에 코멘트만 잔뜩 적혀서 돌아왔고 점수가 없습니다. 통과한 건지 어떻게 알 수 있나요? 왜 선생님이 점수를 주지 않는 건가요?"',
        whatItActuallyMeans: '형성평가 피드백은 연습입니다. 점수가 실제로 중요해지기 전에 자녀가 발전할 수 있도록 돕습니다. 연구에 따르면 점수 없는 상세한 서면 피드백이 점수만 제공하는 것보다 더 나은 학습 결과를 만들어냅니다. 코멘트는 수업 대신이 아닙니다. 코멘트 자체가 수업입니다.',
        whyItMatters: '대학 입시에 반영되는 총괄평가 점수는 이 피드백 주기를 통해 발전한 진정한 실력을 반영합니다. 상세한 피드백을 받고 실천한 학생은 숫자만 받은 학생보다 최종 평가에서 더 좋은 성과를 냅니다.',
        ibConnection: 'IB 교사는 형성평가(연습)와 총괄평가(채점) 과제를 구분하도록 훈련받습니다. 학부모들은 종종 형성평가 과제만 보고 아무것도 측정되지 않는다고 생각합니다.',
      },
    },
    {
      id: 'card-005',
      ibComponent: 'DP Core — CAS',
      en: {
        concept: 'CAS — Creativity, Activity, Service',
        whatYouMightThink: '"My child is spending time on art projects and volunteering instead of studying. How does service work help their university application?"',
        whatItActuallyMeans: 'CAS is a core diploma requirement — not optional enrichment. The IB Diploma cannot be awarded without it. Top universities, particularly in the US, UK, and increasingly in Korea, evaluate students holistically. A student who demonstrates genuine sustained commitment outside the classroom is a stronger candidate than one with strong grades alone.',
        whyItMatters: 'CAS also develops resilience, leadership, and the ability to work with people unlike yourself — qualities that predict success in demanding university programs and professional environments more reliably than exam scores alone.',
        ibConnection: 'CAS requires 150 hours of documented activity across Creativity, Activity, and Service. Students submit a portfolio with reflections. It is reviewed as part of diploma completion, not as an afterthought.',
      },
      ko: {
        concept: 'CAS — 창의·활동·봉사',
        whatYouMightThink: '"아이가 공부 대신 예술 활동과 봉사활동에 시간을 쓰고 있습니다. 봉사활동이 대학 입시에 어떻게 도움이 되나요?"',
        whatItActuallyMeans: 'CAS는 졸업장의 핵심 필수 요건이지 선택 사항이 아닙니다. CAS 없이는 IB 졸업장을 받을 수 없습니다. 특히 미국, 영국, 그리고 점점 더 많은 한국 대학교들이 학생을 종합적으로 평가합니다. 수업 밖에서 진정한 지속적 헌신을 보여주는 학생이 우수한 성적만 가진 학생보다 더 강력한 지원자입니다.',
        whyItMatters: 'CAS는 또한 회복력, 리더십, 그리고 자신과 다른 사람들과 함께 일하는 능력을 키웁니다. 이러한 자질은 시험 점수만으로는 예측하기 어려운, 어려운 대학 과정과 직업 환경에서의 성공을 가장 잘 예측합니다.',
        ibConnection: 'CAS는 창의, 활동, 봉사 전반에 걸쳐 150시간의 기록된 활동을 요구합니다. 학생들은 성찰이 포함된 포트폴리오를 제출합니다. 이는 졸업 완료의 일부로 검토되며 부가적인 요소가 아닙니다.',
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
}
