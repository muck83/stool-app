export const japanIbParent = {
  id: 'parent-japan-ib-001',
  slug: 'japan-ib',
  country: 'japan',
  program: 'IB',
  languages: ['en', 'ja'],

  journeyStages: [
    {
      id: 'stage-new',
      en: {
        label: 'First Year in IB',
        description: 'Your child has just transitioned from the Japanese system to IB. The curriculum, reporting, and pace feel unfamiliar.',
        highlight: 'Juku comparison anxiety begins as family members ask why there\'s "no exam prep."'
      },
      ja: {
        label: 'IB初年度',
        description: 'お子さんは日本の学校からIBへ転校したばかり。カリキュラム、成績表、学習のペースがすべて異なります。',
        highlight: '親戚や友人から「なぜ塾に通わないのか」と聞かれ、受験対策との比較不安が始まります。'
      }
    },
    {
      id: 'stage-settled',
      en: {
        label: 'Settled in IB (Year 2+)',
        description: 'Your child has completed at least one full year. Reports have arrived. You are managing the pressure of comparisons with peers still in the Japanese system.',
        highlight: 'Grandparents and relatives wonder why your child isn\'t studying as intensively as cousins in Japanese schools.'
      },
      ja: {
        label: 'IB適応期（2年目以降）',
        description: 'お子さんはIBで通年を過ごしました。成績表が届きました。日本の学校に通う同年代の子どもとの比較圧力に対処しています。',
        highlight: '祖父母や親戚は、なぜお子さんが日本の学校の従兄弟姉妹ほど集中的に勉強していないのかと疑問に思います。'
      }
    },
    {
      id: 'stage-pyp-myp',
      en: {
        label: 'PYP to MYP Transition (Age 10–12)',
        description: 'Your child is transitioning into the Middle Years Programme. The shift from exhibition-based to criterion-graded learning is marked.',
        highlight: 'The contrast between IB\'s criterion approach and the naishinsho (内申点) system used in traditional Japanese schools is sharpest at this stage.'
      },
      ja: {
        label: 'PYPからMYPへの移行（10～12歳）',
        description: 'お子さんはMiddle Years Programmeに進学しています。展示会ベースの学習から評価規準ベースの学習へのシフトが顕著です。',
        highlight: 'IBの評価規準アプローチと従来の日本の学校の内申点システムの対比が、この段階で最も際立ちます。'
      }
    },
    {
      id: 'stage-myp-dp',
      en: {
        label: 'MYP to DP Transition (Year 10–11)',
        description: 'Your child is now facing the transition to Diploma Programme. University pathway questions become urgent. Subject selection and HL/SL choices weigh heavily.',
        highlight: 'The question of whether IB provides access to Japanese universities—and whether it is the right path for your family—can no longer be deferred.'
      },
      ja: {
        label: 'MYPからDPへの移行（10～11年目）',
        description: 'お子さんはDiploma Programmeへの移行に直面しています。大学進学経路の問題が緊急課題となります。科目選択とHL/SLの決定が重くのしかかります。',
        highlight: 'IBが日本の大学へのアクセスを提供するかどうか、そしてそれがご家族にとって正しい道であるかどうかという質問を、もはや後回しにすることはできません。'
      }
    }
  ],

  meta: {
    en: {
      title: 'IB for Japanese Families',
      subtitle: 'Navigating IB in the Context of Japan\'s Exam Culture',
      intro: 'Japan\'s education system is built on juken (受験)—the entrance exam culture. Cram schools (juku) are ubiquitous. Class ranking is published. Students know their standing. IB offers something radically different: inquiry-based learning, criterion-graded assessment, and no rankings. For Japanese families, this shift can feel disorienting. This guide helps you understand what IB offers, how it differs from the traditional Japanese path, and how to support your child through the transition.',
      reassurance: 'Your child is not falling behind. The two systems measure different things and develop different competencies. IB develops critical thinking, independence, and communication skills that Japanese universities and international employers value highly. One piece of context that is often missed: Japan\'s own classroom tradition is more pedagogically sophisticated than the juku caricature suggests. Stigler and Hiebert\'s TIMSS Video Study — which examined mathematics lessons across Japan, Germany, and the US — documented that Japanese classroom instruction is built around *structured problem-solving* (the pattern known as jugyō kenkyū, or lesson study), where students grapple with a single rich problem before the teacher consolidates the thinking. This is conceptually closer to IB inquiry than to juku drill. IB is not asking Japanese parents to abandon what Japanese classrooms already do well — it is scaling that approach across the curriculum. However, honest clarity about university pathways in Japan is essential: IB is powerful, but it is not a replacement for the mainstream Japanese university entry system (JEAT). Families choosing IB need realistic expectations.',
      japaneseUniversityNote: 'For Japanese university entry: Top institutions like Tokyo University, Kyoto University, Waseda University, and Keio University have established international programmes (e.g., PEAK at Tokyo, SILS at Waseda, Keio Global programs) that accept IB graduates and often give them an advantage. However, mainstream entry to most Japanese universities still requires the Daigaku Nyūgaku Kyōtsū Test (JEAT, 大学入学共通テスト) plus university-specific exams. IB does not replace this pathway. Families aiming for mainstream Japanese university entry need a dual strategy or should choose schools that explicitly prepare for JEAT. IB is optimal for international universities or international programmes at top Japanese institutions.'
    },
    ja: {
      title: '日本の家族のためのIB',
      subtitle: '日本の受験文化の中でIBをナビゲートする',
      intro: '日本の教育制度は受験（じゅけん）に基づいています。塾は至るところにあります。クラス順位は公表されます。学生は自分の成績を知っています。IBは根本的に異なるものを提供します。探究型学習、評価規準ベースの評定、順位なし。日本の家族にとって、このシフトは戸惑うかもしれません。このガイドは、IBが何を提供しているか、従来の日本の進学経路とどのように異なるか、そしてお子さんが移行期をサポートする方法を理解するのに役立ちます。',
      reassurance: 'お子さんは遅れていません。2つのシステムは異なるもの測定し、異なる能力を開発します。IBは、日本の大学と国際的な雇用者が非常に価値のある、批判的思考、独立性、コミュニケーションスキルを開発しています。しかし、日本の大学進学経路についての誠実で明確な情報が不可欠です。IBは強力ですが、主流の日本の大学入学システム（JEAT）の代替にはなりません。IBを選択する家族は、現実的な期待を持つ必要があります。',
      japaneseUniversityNote: '日本の大学入学について：東京大学、京都大学、早稲田大学、慶應義塾大学などのトップ機関には、IBの卒業生を受け入れ、しばしば彼らに利点を与える確立された国際プログラム（例：東大のPEAK、早大のSILS、慶應グローバルプログラム）があります。しかし、ほとんどの日本の大学への主流の入学には、依然として大学入学共通テスト（JEAT）と大学固有の試験が必要です。IBはこの経路を代替しません。主流の日本の大学入学を目指す家族は、二重戦略が必要か、JEATの準備を明確に行う学校を選択する必要があります。IBは国際大学または日本の主要機関の国際プログラムに最適です。'
    }
  },

  openingHook: {
    en: {
      situation: [
        'Your child is in Year 8 MYP at an international school in Japan. The first formal report has just arrived. You open the envelope and find criterion-based grades: "Approaching," "Developing," "Proficient," "Excellent" for each subject. No percentage. No overall grade point average. No rank.',
        'That evening, you photograph the report and send it to your family LINE group. Within minutes, your mother replies: "Where does she rank in the class?" Your father—a graduate of Tokyo University himself—responds by doing the maths: "4 out of 7... that\'s 57%. She\'d be in juku in my day." Your sister-in-law, whose child attends a prestigious cram school alongside a top Japanese private school, sends an emoji and a message: "Poor thing. Missing out on exam coaching."',
        'You spend the night scrolling through juku websites. You find one near your home that claims to "maintain IB student performance." You check the tuition. It is expensive. You open another browser tab and search: "IB grades vs. Japanese school grades." The results are confusing. Some blogs say IB is "easier." Others say it is "not recognised in Japan." You put the phone down, but you cannot sleep. Is your child falling behind?'
      ],
      question: 'Is my child actually falling behind, and should I enrol them in juku?',
      directAnswer: 'The short answer: No. Your child is not falling behind. The longer answer: The two systems measure entirely different things. A criterion-based grade of "Developing" (4/7) does not mean your child is struggling—it means they are on a learning trajectory aligned with the MYP standards. The juku-and-exam system excels at volume memorisation and timed test performance. IB excels at developing critical thinking, communication, and independent inquiry. The comparison itself is flawed. Before you commit to juku, understand what IB is teaching and why the assessment looks different.'
    },
    ja: {
      situation: [
        'お子さんは、日本の国際学校でYear 8 MYP にいます。最初の正式な報告書が届きました。封筒を開けて、評価規準ベースの成績を見つけます：各科目で「アプローチ中」「発展中」「習得」「優秀」。パーセンテージなし。全体の成績平均なし。順位なし。',
        'その夜、レポートを写真に撮り、ファミリーLINEグループに送ります。数分以内に、お母さんから返信があります。「クラスで何位ですか？」お父さん—自分は東京大学卒業です—計算して返信します。「7点中4点...57%です。私の時代なら塾に行っていました。」お義姉さん—お子さんは有名な塾に通いながら、日本の一流私立学校に通っています—絵文字とメッセージを送ります。「かわいそう。受験指導を逃しています。」',
        'その夜中、塾のウェブサイトをスクロール検索します。あなたの家の近くに、「IBの学生のパフォーマンスを維持する」と主張するものを見つけます。授業料を確認します。高いです。別のブラウザタブを開いて、「IBの成績対日本の学校の成績」を検索します。結果は混乱しています。ブログには、IBは「簡単」であると言うものもあります。「日本で認識されていない」と言うものもあります。携帯を置きますが、眠れません。お子さんは遅れていますか？'
      ],
      question: '実際にお子さんは遅れていますか？それとも塾に入学させるべきですか？',
      directAnswer: '短い答え：いいえ。お子さんは遅れていません。長い答え：2つのシステムは、まったく異なるものを測定しています。「発展中」（4/7）の評価規準ベースの成績は、お子さんが苦労しているという意味ではなく、MYPの標準に沿った学習軌跡にいることを意味しています。塾と試験システムは、大量の暗記と時間制限のあるテストパフォーマンスに優れています。IBは、批判的思考、コミュニケーション、独立した探究の開発に優れています。比較そのものが欠陥しています。塾に通う前に、IBが何を教えているのか、そしてなぜ評定が異なるのかを理解してください。'
    }
  },

  cards: [
    {
      id: 'card-inquiry-vs-drill',
      relevantAt: ['stage-new', 'stage-settled'],
      ibComponent: 'All programmes',
      en: {
        concept: 'Inquiry-Based Learning vs. Exam Drill',
        concern: 'My child is not memorising facts the way juku students are. They spend time asking questions and reading, but there is no test prep. Won\'t they fall behind on knowledge?',
        bridge: 'Inquiry-based learning does not skip facts. Instead, it anchors facts within questions. A juku student drilling Japanese history may memorise the date of the Meiji Restoration (1868) and the key figures. An IB student may ask: "Why did Japan choose to modernise so rapidly, and what were the costs?" They learn the same facts, but they also learn why those facts matter, how to find new information, and how to form evidence-based arguments. Inquiry produces deeper retention, transfer of knowledge to new contexts, and critical thinking—skills that employers and universities, including Japanese universities, now value above rote memorisation.',
        goal: 'Understand that facts and inquiry are not opposites; inquiry is a more sophisticated way to organise and retain knowledge.',
        ibConnection: 'IB\'s inquiry-based approach is documented in the IB Learner Profile, which emphasises "inquirers" and "thinkers." Research shows that inquiry-based learning produces stronger long-term recall and transfer than memorisation-first approaches.',
        whatToAsk: [
          'Can you give me an example of how your child\'s current unit connects separate facts into one big question?',
          'How does your child study for IB assessments—is it pure memorisation, or are they applying knowledge to new scenarios?',
          'What do IB teachers say matters most: knowing facts, or knowing how to find and evaluate information?'
        ]
      },
      ja: {
        concept: '探究型学習対試験対策',
        concern: '塾の学生のように、お子さんは事実を暗記していません。質問をしたり、読んだりするのに時間を費やしていますが、試験対策がありません。知識で遅れ取らないでしょうか？',
        bridge: '探究型学習は事実をスキップしません。代わりに、質問の中に事実を固定します。塾の日本史の学生は、明治維新（1868年）の日付と主要人物を暗記するかもしれません。IBの学生は、「日本はなぜそんなに急速に近代化することを選んだのか、そしてその代価は何だったのか？」と尋ねるかもしれません。彼らは同じ事実を学びますが、なぜそれらの事実が重要なのか、新しい情報を見つける方法、証拠に基づいた議論を形成する方法も学びます。探究は、より深い保持、新しい文脈への知識の転移、および雇用主と大学（日本の大学を含む）が現在、単純な暗記以上に価値を置くスキルを生み出します。',
        goal: '事実と探究は対立しないこと、探究は知識をより洗練された方法で組織し、保持することを理解してください。',
        ibConnection: 'IBの探究型アプローチは、IB学習者像に文書化されており、「探究者」と「思考者」を強調しています。研究は、探究型学習が暗記優先のアプローチよりも強い長期保持と転移を生み出すことを示しています。',
        whatToAsk: [
          'お子さんの現在のユニットが別々の事実をどのように1つの大きな質問に結びつけているかの例を教えていただけますか？',
          'お子さんはIB評定のためにどのように勉強していますか—純粋な暗記か、新しいシナリオに知識を適用していますか？',
          'IBの教師は何が最も重要だと言っていますか：事実を知ることか、情報を見つけて評価する方法を知ることか？'
        ]
      }
    },
    {
      id: 'card-criterion-grades-vs-percentages',
      relevantAt: ['stage-new', 'stage-settled', 'stage-pyp-myp'],
      ibComponent: 'MYP',
      en: {
        concept: 'Criterion-Based Grades (1–7) vs. Percentage Scores',
        concern: 'The report card says my child is "Developing" (a 4). In Japanese schools, 71% would be C or below. How do I know if a 4 is good or bad?',
        bridge: 'The MYP 1–7 scale is not a percentage scale. A "4 - Developing" means your child is progressing well toward mastery of the criterion. The descriptor "Developing" does not mean "barely passing"—it means "making expected progress." In the MYP, a grade of 5 or above is considered solid performance. Grades 6–7 are advanced. A global average of 5–6 across subjects indicates strong learning. Criterion-based feedback also tells you specifically what your child can do and what they need to work on next—far more useful than a percentage. The shift from percentage to criterion is not a downgrade; it is a more precise diagnostic tool.',
        goal: 'Learn to read the criterion descriptors, not the number, and trust the narrative feedback alongside the grade.',
        ibConnection: 'IB\'s criterion-based approach aligns with modern assessment science. Research supports that criterion-referenced grading produces more actionable feedback and better motivates growth than norm-referenced or percentage-based systems.',
        whatToAsk: [
          'Can the teacher show me what a 5 and a 6 look like in my child\'s subject? What is the specific difference?',
          'What does my child need to do next to move from a 4 to a 5?',
          'Is the grade based on one test, or on multiple pieces of evidence over time?'
        ]
      },
      ja: {
        concept: '評価規準ベースの成績（1～7）対パーセンテージスコア',
        concern: '報告書に「発展中」（4）と書かれています。日本の学校では、71%はCまたはそれ以下です。4が良い悪いか悪いかをどのように知ることができますか？',
        bridge: 'MYP 1～7スケールはパーセンテージスケールではありません。「4-発展中」は、お子さんが評価規準の習得に向けて順調に進んでいることを意味しています。「発展中」という説明は「かろうじて合格」を意味しません—それは「予想される進捗を作る」という意味です。MYPでは、5以上の成績は堅実なパフォーマンスと見なされます。6～7は高度です。科目全体の全体的な平均5～6は、強い学習を示しています。評価規準ベースのフィードバックは、お子さんができることと次に何に取り組む必要があるかについても、パーセンテージよりもはるかに有用です。パーセンテージから評価規準への移行は低下ではなく、より正確な診断ツールです。',
        goal: '数字ではなく評価規準の説明を読むことを学び、成績と一緒に物語的なフィードバックを信頼してください。',
        ibConnection: 'IBの評価規準ベースのアプローチは、現代の評定科学と一致しています。研究は、評価規準参照型の成績付けが、規範参照または率ベースのシステムより実行可能なフィードバックをもたらし、成長の動機づけが良好であることをサポートしています。',
        whatToAsk: [
          '先生はお子さんの科目で5と6がどのように見えるかを見せていただけますか？具体的な違いは何ですか？',
          'お子さんが4から5に移動するために何をする必要がありますか？',
          '成績は1つのテストに基づいているか、時間の経過とともに複数の証拠に基づいているか？'
        ]
      }
    },
    {
      id: 'card-no-class-ranking',
      relevantAt: ['stage-new', 'stage-settled', 'stage-pyp-myp'],
      ibComponent: 'All programmes',
      en: {
        concept: 'No Class Ranking (順位 Does Not Exist in IB)',
        concern: 'In Japanese school, my child knew their rank. I knew their rank. Relatives knew their rank. Now there is no rank. How do I know if my child is doing well?',
        bridge: 'IB schools deliberately do not publish class rankings. This is not a bug; it is a feature. Research from educational psychology shows that ranking systems—especially publishing individual rankings—increase anxiety, reduce intrinsic motivation, and are most harmful to students who fall into lower ranks. Japan\'s publishing of rankings is culturally rooted, but IB\'s decision to eliminate ranking is supported by decades of research. How do you know if your child is doing well? Look at criterion grades across subjects (are they mostly 5 or above?), read the written feedback (can your child explain their own learning?), and speak to teachers (is your child engaged and asking questions?). These measures are far more reliable predictors of success than a rank.',
        goal: 'Shift your assessment from "Where does my child rank?" to "Is my child engaged, growing, and meeting standards?"',
        ibConnection: 'IB\'s philosophy of removing rankings is grounded in the IB Learner Profile and supported by research on learner wellbeing and motivation. The move away from ranking is aligned with best practices in schools worldwide.',
        whatToAsk: [
          'How is my child performing relative to the criteria, not relative to other students?',
          'Is my child more or less engaged in learning than last year?',
          'What would the teacher say is my child\'s strongest area, and where do they need support?'
        ]
      },
      ja: {
        concept: 'クラス順位なし（順位はIBに存在しません）',
        concern: '日本の学校では、お子さんは順位を知っていました。私は順位を知っていました。親戚は順位を知っていました。今、順位がありません。お子さんが上手くいっているかどうかをどのように知ることができますか？',
        bridge: 'IBの学校は意図的にクラスのランキングを公開しません。これはバグではなく、機能です。教育心理学の研究は、ランキングシステム（特に個別順位の公開）が不安を増加させ、内発的動機付けを低下させ、より低いランクに該当する学生に最も害を及ぼすことを示しています。日本のランキングの公開は文化的に根ざしていますが、IBのランキング排除の決定は数十年の研究によってサポートされています。お子さんが上手くいっているかをどのように知りますか？科目全体の評価規準の成績を見て（ほとんど5以上ですか？）、書かれたフィードバックを読み（お子さんは自分の学習を説明できますか？）、教師に話しかけます（お子さんは従事していて質問をしていますか？）。これらの措置は、順位よりもはるかに信頼性の高い成功の予測因子です。',
        goal: '「お子さんは何位ですか？」という評価から「お子さんは従事していて、成長していて、基準を満たしていますか？」に変更してください。',
        ibConnection: 'ランキング排除のIBの哲学は、IB学習者像に基づいており、学習者幸福度と動機付けに関する研究によってサポートされています。ランキングからの移動は、世界中の学校のベストプラクティスと一致しています。',
        whatToAsk: [
          'お子さんは他の学生に相対的ではなく、基準に相対的にどのようなパフォーマンスをしていますか？',
          'お子さんは昨年より学習に従事していますか、それとも従事していますか？',
          '先生は、お子さんの最も強い領域は何であり、どこでサポートが必要なのかを言うでしょうか？'
        ]
      }
    },
    {
      id: 'card-university-pathway',
      relevantAt: ['stage-settled', 'stage-myp-dp'],
      ibComponent: 'DP',
      en: {
        concept: 'University Pathways: IB and Japanese Universities',
        concern: 'Can my child get into Tokyo University with IB? Or a top Japanese university? Is IB recognised in Japan?',
        bridge: 'Here is the honest answer: IB is recognised and valued by top Japanese universities that have international programmes. Tokyo University\'s PEAK (Progressive Education on Asia\'s Knowledge), Waseda University\'s SILS (School of International Liberal Studies), Keio University\'s Global Courses, and similar programmes at other top institutions explicitly recruit IB graduates and give them an advantage. For these pathways, IB is excellent. However—and this is critical—mainstream entry to most Japanese universities still requires the Daigaku Nyūgaku Kyōtsū Test (JEAT, 大学入学共通テスト) plus university-specific entrance exams. The IB Diploma does not exempt a student from JEAT. If your goal is for your child to enter a mainstream Japanese university through the standard JEAT pathway, IB is not the optimal preparation. Your child would need to study for JEAT separately, usually through juku—which defeats the purpose of choosing IB. If your goal is an international programme at a top Japanese university, an overseas university, or a career path that values English-language qualifications and global competencies, then IB is ideal. Be clear on which pathway is right for your family.',
        goal: 'Make an informed, deliberate choice about your child\'s university destination before committing to IB. Do not assume IB is a replacement for JEAT.',
        ibConnection: 'IB\'s Global Recognition profile documents university acceptance worldwide. Japan is one of the markets where IB is increasingly valued, but only for international programmes and overseas universities. For mainstream Japanese universities, JEAT remains the standard.',
        whatToAsk: [
          'What university destination is realistic for my child? (International programme in Japan, overseas university, or mainstream Japanese university?)',
          'If mainstream Japanese university entry is the goal, is our school certified to prepare students for JEAT alongside IB?',
          'Can the school provide examples of recent graduates and their university outcomes?'
        ]
      },
      ja: {
        concept: '大学進学経路：IBと日本の大学',
        concern: 'お子さんはIBで東京大学に進学できますか？または一流の日本の大学に？IBは日本で認識されていますか？',
        bridge: 'ここに正直な答えがあります。IBは、国際プログラムを持つ一流の日本の大学によって認識され、評価されます。東京大学のPEAK（アジアの知識に関する進歩的教育）、早稲田大学のSILS（国際教養学部）、慶應義塾大学のグローバルコース、および他のトップ機関の類似プログラムは、IBの卒業生を明確に募集し、彼らに利点を与えます。これらの経路では、IBは優れています。しかし—そしてこれは重要です—ほとんどの日本の大学への主流の入学は、依然として大学入学共通テスト（JEAT、大学入学共通テスト）と大学固有の入試試験を必要とします。IBディプロマは、学生をJEATから免除しません。お子さんが標準的なJEAT経路を通じて主流の日本の大学に入学することが目標である場合、IBは最適な準備ではありません。お子さんはJEATを個別に勉強する必要があります。通常は塾を通じて—IBを選択する目的を打ち負かします。お子さんの目標が一流の日本の大学の国際プログラム、海外大学、または英語資格とグローバルな能力を価値とするキャリア経路である場合、IBは理想的です。ご家族にとってどの経路が適切かについて明確にしてください。',
        goal: 'IBへのコミットメント前に、お子さんの大学の目的地について、情報に基づいた意図的な選択をしてください。IBはJEATの代替であると仮定しないでください。',
        ibConnection: 'IBのグローバル認識プロファイルは、世界中の大学入学を文書化しています。日本はIBがますます価値を置かれている市場の1つですが、国際プログラムと海外大学の場合のみです。主流の日本の大学については、JEATが引き続き標準です。',
        whatToAsk: [
          'お子さんにとって現実的な大学の目的地は何ですか？（日本の国際プログラム、海外大学、または主流の日本の大学？）',
          '主流の日本の大学入学が目標である場合、私たちの学校はIBと並行してJEATのための学生の準備が認定されていますか？',
          '学校は最近の卒業生と彼らの大学の結果の例を提供できますか？'
        ]
      }
    },
    {
      id: 'card-extended-essay',
      relevantAt: ['stage-myp-dp'],
      ibComponent: 'DP',
      en: {
        concept: 'Extended Essay and Independent Research',
        concern: 'The Extended Essay (EE) is a requirement, but it is not on an exam. It is 4,000 words on a topic of my child\'s choice. Why is this useful? Will employers care?',
        bridge: 'There is no equivalent to the Extended Essay in the Japanese secondary system. In Japan, students do not typically conduct a 4,000-word independent inquiry project. This is one of the most valuable—and most distinctive—parts of IB. The EE teaches your child how to: (1) formulate a research question, (2) find and evaluate sources, (3) synthesise complex information, (4) write at length with evidence, and (5) manage a long-term independent project. These skills are increasingly valued by international universities and by employers in the knowledge economy. Japanese universities, particularly those with international programmes, are also now recognising research and writing skills as markers of excellence. The EE is not an "extra"—it is a core intellectual experience. It is also usually the point where students discover something about themselves and their intellectual interests.',
        goal: 'Understand that the EE is a tool for developing research and communication skills, not a box-ticking exercise. Support your child in finding a question they genuinely want to investigate.',
        ibConnection: 'The Extended Essay is explicitly listed in the IB DP Core as a requirement. It is graded on a scale of 0–34 points and is critical to the overall DP score.',
        whatToAsk: [
          'What topic is my child thinking about for their EE? What question do they want to answer?',
          'How is the EE taught? Is there ongoing feedback and revision?',
          'Can the school share examples of past EEs so my child understands the standard?'
        ]
      },
      ja: {
        concept: '課題論文（Extended Essay）と独立した研究',
        concern: '課題論文（EE）は必須ですが、試験にはありません。お子さんが選んだトピックで4,000語です。これはなぜ有用ですか？雇用主は気にかけますか？',
        bridge: '日本の中等教育システムには、課題論文に相当するものはありません。日本では、学生は通常、4,000語の独立した探究プロジェクトを実施しません。これはIBの最も価値のある—そして最も独特な—部分の1つです。EEはお子さんに次の方法を教えます。（1）研究質問を定式化し、（2）情報源を見つけて評価し、（3）複雑な情報を総合し、（4）証拠を持つ長さで書き、（5）長期の独立したプロジェクトを管理します。これらのスキルは、国際大学と知識経済の雇用主によってますます価値を置かれています。日本の大学、特に国際プログラムを持つものは、研究とライティングスキルを卓越のマーカーとして認識し始めています。EEは「追加」ではなく、中核的な知的経験です。また、学生が自分自身と彼らの知的関心について何かを発見する点であることが多いです。',
        goal: 'EEは研究とコミュニケーションスキルを開発するためのツールであり、チェックボックスエクササイズではないことを理解してください。お子さんが本当に調査したい質問を見つけるのを支援してください。',
        ibConnection: '課題論文はIB DP Coreの必須項目として明示的にリストされています。0～34ポイントのスケールで評価され、DP全体のスコアに重要です。',
        whatToAsk: [
          'お子さんはEEについてどのようなトピックを考えていますか？彼らはどのような質問に答えたいですか？',
          'EEはどのように教えられていますか？継続的なフィードバックと修正がありますか？',
          '学校は過去のEEの例を共有して、お子さんが基準を理解できるようにできますか？'
        ]
      }
    }
  ],

  pypCards: [
    {
      id: 'card-pyp-reporting',
      relevantAt: ['stage-new', 'stage-pyp-myp'],
      ibComponent: 'PYP',
      en: {
        concept: 'PYP Reporting: No Grades, Exhibitions Instead',
        concern: 'My child is in PYP. There are no grades. Instead, the school shows "exhibitions" and "portfolios." How do I know if my child is learning?',
        bridge: 'In PYP, the primary assessment tool is not a grade but a body of work: portfolios, exhibitions, and unit of inquiry outcomes. An "exhibition" is a culminating demonstration of learning, where children present their understanding to an audience. A portfolio is a collection of work samples over time. These are far more informative than a percentage score. You see your child\'s actual thinking, creativity, and problem-solving. Japanese parents often expect a single number; instead, you receive rich narrative evidence. This shift requires a mindset change, but the data shows that portfolio-based assessment builds stronger metacognition and intrinsic motivation than grades alone. Read the narrative feedback carefully. Ask your child about their exhibitions. You will know far more about your child\'s learning than a grade ever told you.',
        goal: 'Learn to read portfolio evidence and exhibitions as a more reliable measure of learning than traditional grades.',
        ibConnection: 'PYP\'s exhibition-based approach is grounded in the IB Learner Profile and constructivist learning theory. Research supports that exhibiting work to audiences increases engagement and ownership of learning.'
      },
      ja: {
        concept: 'PYPのレポート：成績なし、代わりに展示会',
        concern: 'お子さんはPYPにいます。成績がありません。代わりに、学校は「展示会」と「ポートフォリオ」を表示しています。お子さんが学んでいるかをどのように知ることができますか？',
        bridge: 'PYPでは、主な評定ツールは成績ではなく、作品の本体：ポートフォリオ、展示会、および探究ユニットの結果です。「展示会」は、子どもが聴衆に彼らの理解を提示する、学習の最終的な実証です。ポートフォリオは、時間の経過に伴う仕事のサンプルの集まりです。これらはパーセンテージスコアよりもはるかに有用です。お子さんの実際の思考、創造性、問題解決を見ます。日本の親は単一の数字を期待することが多いです。代わりに、豊かな物語的証拠を受け取ります。このシフトには考え方の変化が必要ですが、ポートフォリオベースの評定が単独のグレードよりも強い自己認識と内発的動機付けを構築することが、データが示しています。物語的なフィードバックを注意深く読んでください。お子さんの展示会について尋ねてください。グレードがこれまで教えたことよりも、お子さんの学習についてはるかに多くを知るでしょう。',
        ibConnection: 'PYPの展示会ベースのアプローチは、IB学習者像と構成主義の学習理論に根ざしています。研究は、聴衆に仕事を展示することがエンゲージメントと学習の所有権を増加させることをサポートしています。'
      }
    },
    {
      id: 'card-pyp-languages',
      relevantAt: ['stage-new', 'stage-pyp-myp'],
      ibComponent: 'PYP',
      en: {
        concept: 'Language Development in PYP: Japanese and Beyond',
        concern: 'My child is in an English-medium PYP school but speaks Japanese at home. Is my child losing Japanese? Will they be behind in Japanese for high school exams?',
        bridge: 'Language development in PYP is designed to be additive, not subtractive. Your child is not "losing" Japanese; they are acquiring English alongside Japanese. Research on bilingual development shows that children exposed to two languages develop strong competency in both—provided the home language is maintained. It is your responsibility to maintain Japanese at home. Read Japanese books together, watch Japanese media, speak Japanese when possible. PYP teachers also weave language development throughout units of inquiry. Your child\'s English will become strong, and with home support, their Japanese will remain strong. For entrance exams into Japanese high schools, yes, your child will need strong Japanese. But many families find that after 2-3 years in an English-medium programme, Japanese-speaking children regain their Japanese reading and writing through high school entrance exam preparation (often through juku) quite quickly.',
        goal: 'Maintain Japanese at home while supporting your child\'s English development through school. Do not rely on the school to maintain Japanese.'
      },
      ja: {
        concept: 'PYPの言語開発：日本語とその他',
        concern: 'お子さんは英語媒体のPYP学校にいますが、家庭で日本語を話します。お子さんは日本語を失っていますか？高校入試で日本語で遅れ取るでしょうか？',
        bridge: 'PYPの言語開発は、減法的ではなく加法的になるように設計されています。お子さんは日本語を「失わない」ことはなく、日本語と並行して英語を習得しています。バイリンガルの発展に関する研究は、2つの言語にさらされた子どもが両方に強い能力を発達させることを示しています—家庭言語が維持される限り。それはあなたの責任です。日本語の本を一緒に読んだり、日本語のメディアを見たり、可能な限り日本語を話してください。PYPの教師は、探究ユニット全体にわたって言語開発も織り交ぜています。お子さんの英語は強くなり、家庭のサポートで、彼らの日本語は強いままです。日本の高校への入学試験のために、はい、お子さんは強い日本語が必要になります。しかし、多くの家族は、英語媒体プログラムで2～3年後、日本語を話す子どもが高校入学試験準備（しばしば塾を通じて）を通じて日本語の読み書きをかなり速く取り戻すことを発見しています。',
        ibConnection: 'PYPの多言語サポートはIBの言語ポリシーに基づいており、すべての言語の同等の価値を認識しています。'
      }
    }
  ],

  gradeSystem: {
    myp: {
      en: {
        title: 'MYP Grade System (1–7)',
        intro: 'The Middle Years Programme uses a criterion-referenced scale of 1–7 in each subject. There are no percentage scores, no class rankings. Each criterion is assessed against a set of descriptors. Your child receives a grade for each criterion in each subject, and an overall grade for the subject based on an average of the criteria.',
        criteriaNote: 'Criteria vary by subject. For example, in Mathematics, criteria include "Knowing and Understanding," "Applying and Analysing," "Formulating and Communicating," and "Modelling." In Languages, criteria include "Comprehending Spoken and Visual Text," "Comprehending Written Text," "Producing Text," and "Using Language."',
        boundaryNote: 'Grade boundaries are determined by the school based on the MYP mark scheme. Typically, a school calculates a total mark out of 32 points (across criteria), which maps to the 1–7 scale. Consult your school\'s specific boundaries.',
        descriptors: [
          { grade: 1, label: 'Novice / Emerging' },
          { grade: 2, label: 'Developing' },
          { grade: 3, label: 'Developing (Strong)' },
          { grade: 4, label: 'Proficient' },
          { grade: 5, label: 'Proficient (Strong)' },
          { grade: 6, label: 'Advanced' },
          { grade: 7, label: 'Advanced (Excellent)' }
        ],
        boundaries: [
          { grade: 1, min: 0, max: 5 },
          { grade: 2, min: 6, max: 9 },
          { grade: 3, min: 10, max: 14 },
          { grade: 4, min: 15, max: 18 },
          { grade: 5, min: 19, max: 23 },
          { grade: 6, min: 24, max: 27 },
          { grade: 7, min: 28, max: 32 }
        ],
        watchOut: [
          'A grade of 4–5 is considered solid, on-track performance. Do not assume a 4 is poor.',
          'Grades 6–7 are advanced, but not required for strong university entry at many institutions.',
          'A grade of 1–2 indicates the student needs support and intervention. Speak to the teacher immediately.',
          'IB schools typically do not use "+/−" modifiers (e.g., 4+). The number stands alone.'
        ]
      },
      ja: {
        title: 'MYP成績システム（1～7）',
        intro: 'Middle Years Programmeは、各科目で1～7の評価規準参照スケールを使用しています。パーセンテージスコアはなく、クラスランキングもありません。各評価規準は、説明文のセットに対して評価されます。お子さんは各科目の各評価規準のグレードを受け取り、評価規準の平均に基づいて科目の全体的なグレードを受け取ります。',
        criteriaNote: '基準は科目によって異なります。たとえば、数学では、評価規準には「知識と理解」「応用と分析」「定式化とコミュニケーション」「モデリング」が含まれます。言語では、評価規準には「音声視覚テキストの理解」「書かれたテキストの理解」「テキストの生成」「言語の使用」が含まれます。',
        boundaryNote: '成績の境界は、MYPマークスキームに基づいて学校によって決定されます。通常、学校は32ポイント（評価規準全体）のうち総マークを計算します。これは1～7スケールにマップされます。学校の特定の境界線を参照してください。',
        descriptors: [
          { grade: 1, label: '初期段階（Novice / Emerging）' },
          { grade: 2, label: '発展中（Developing）' },
          { grade: 3, label: '発展中（強い）（Developing Strong）' },
          { grade: 4, label: '習得（Proficient）' },
          { grade: 5, label: '習得（強い）（Proficient Strong）' },
          { grade: 6, label: '高度（Advanced）' },
          { grade: 7, label: '高度（優秀）（Advanced Excellent）' }
        ],
        boundaries: [
          { grade: 1, min: 0, max: 5 },
          { grade: 2, min: 6, max: 9 },
          { grade: 3, min: 10, max: 14 },
          { grade: 4, min: 15, max: 18 },
          { grade: 5, min: 19, max: 23 },
          { grade: 6, min: 24, max: 27 },
          { grade: 7, min: 28, max: 32 }
        ],
        watchOut: [
          '4～5の成績は堅実な、順調なパフォーマンスと見なされます。4が貧弱であると仮定しないでください。',
          '6～7は高度ですが、多くの機関での強い大学入学には必須ではありません。',
          '1～2の成績は、学生がサポートと介入が必要であることを示しています。すぐに教師に話しかけてください。',
          'IB学校は通常、「+/−」修飾子（例：4+）を使用しません。数字は単独で表示されます。'
        ]
      }
    },
    dp: {
      en: {
        title: 'DP Grade System (1–7 per Subject) and IB Diploma Conditions',
        intro: 'Diploma Programme students are assessed in six subject groups and the DP Core (Extended Essay, Theory of Knowledge, Creativity, Activity, Service). Each subject is graded 1–7. The overall IB Diploma score is out of 45 points: six subjects (max 42 points) plus Core (max 3 points). The standard passing score is 24 points, but university entry requirements vary.',
        subjectStructure: 'Students take six subjects: typically three Higher Level (HL, 240 teaching hours each) and three Standard Level (SL, 150 hours each). HL subjects are more demanding and in-depth. University entry, especially for scientific and technical disciplines, often requires HL in relevant subjects. Each subject is assessed through internal assessments and external examinations.',
        coreBonus: {
          title: 'DP Core and Diploma Points',
          note: 'The Extended Essay and Theory of Knowledge are assessed and can contribute up to 3 points toward the 45-point Diploma total. This is a significant bonus. A strong EE and ToK can push a student from a 24 (passing) to a 27 or higher.',
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
            { ee: 'E', tok: 'D', points: -1 }
          ]
        },
        passingRules: [
          'Minimum Diploma score: 24 points out of 45.',
          'No subject grade below 3 (with some exceptions for institutions).',
          'Extended Essay and Theory of Knowledge must both be completed and graded.',
          'Creativity, Activity, Service (CAS) must be completed; students must reflect on CAS experience but it does not count toward the Diploma score.',
          'A candidate who fails any of these requirements does not receive the IB Diploma, though they may receive an IB Course Certificate in the subjects they passed.'
        ],
        watchOut: [
          'HL subjects are significantly harder. A 5 in HL is equivalent to a 6+ in SL in terms of effort and depth. Do not mistake HL grades for inflated difficulty.',
          'Subject choices matter. Some universities, especially in Japan, have specific HL requirements (e.g., HL Mathematics for engineering programs).',
          'A Diploma score of 38+ is considered excellent and opens doors to top universities worldwide. A score of 30+ is strong.',
          'In Japan, IB Diploma holders applying to international programmes at top Japanese universities will not need JEAT, but they should have strong English and academic records.'
        ],
        universityContext: 'In the Japanese context: The IB Diploma is recognised and valued by Tokyo University\'s PEAK, Waseda\'s SILS, Keio\'s Global programmes, and other international tracks. These institutions accept the IB Diploma as an equivalent qualification and do not require JEAT. However, students often need to demonstrate strong English proficiency and may sit subject-specific entrance interviews. For overseas university entry, an IB Diploma of 30+ is typically competitive for most universities; 36+ opens doors to selective institutions. For mainstream Japanese university entry (most students), JEAT remains the standard pathway. Families must decide: Is the goal an international programme in Japan, overseas universities, or mainstream Japanese university entry? IB is optimal for the first two; it is not optimal for the third.'
      },
      ja: {
        title: 'DP成績システム（科目ごとの1～7）とIBディプロマの条件',
        intro: 'Diploma Programmeの学生は6つの科目グループとDP Core（課題論文、知識の理論、創造性、活動、社会への奉仕）で評価されます。各科目は1～7で評価されます。IB Diplomaの全体的なスコアは45ポイント中：6科目（最大42ポイント）+ Core（最大3ポイント）。標準的な合格スコアは24ポイントですが、大学入学要件は異なります。',
        subjectStructure: '学生は6科目を履修します。通常、3つのHigher Level（HL、各240時間）と3つのStandard Level（SL、各150時間）。HL科目はより要求が厳しく、深いです。特に科学技術分野の大学入学には、関連する科目のHLが必要とされることが多いです。各科目は、内部評定と外部試験を通じて評価されます。',
        coreBonus: {
          title: 'DP CoreとDiploma ポイント',
          note: '課題論文と知識の理論は評価され、45ポイントのDiploma合計に最大3ポイント貢献する可能性があります。これは重大なボーナスです。強いEEとToKは、学生を24（合格）から27以上に押し上げることができます。',
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
            { ee: 'E', tok: 'D', points: -1 }
          ]
        },
        passingRules: [
          'Diplomaの最小スコア：45ポイント中24ポイント。',
          '一部の例外を除き、科目のグレードは3より低くない。',
          '課題論文と知識の理論の両方を完成させ、評価する必要があります。',
          '創造性、活動、社会への奉仕（CAS）を完成させる必要があります。学生はCAS経験について反映する必要がありますが、Diplomaスコアにはカウントされません。',
          'これらの要件のいずれかに失敗する候補者はIB Diplomaを受け取りません。ただし、成功した科目でIB Course Certificateを受け取る場合があります。'
        ],
        watchOut: [
          'HL科目は大幅に難しいです。HLの5は、努力と深さの点でSLの6+に相当します。HLグレードを膨らんだ難易度と間違えないでください。',
          '科目の選択は重要です。特に日本では、いくつかの大学に特定のHL要件があります（例えば、エンジニアリングプログラムのためのHL数学）。',
          'Diplomaスコア38+は優れていると見なされ、世界中の主要大学への扉を開きます。30+のスコアは強いです。',
          '日本では、IB Diploma保有者が日本の主要大学の国際プログラムに申請する場合、JEATは必要ありませんが、強い英語力と学業記録が必要です。'
        ],
        universityContext: '日本の文脈では：IBディプロマは、東大のPEAK、早大のSILS、慶應のグローバルプログラム、および他の国際トラックによって認識され、評価されます。これらの機関は、IBディプロマを同等の資格として受け入れ、JEATを必要としません。ただし、学生は強い英語能力を実証する必要があり、科目固有の入試面接に参加する場合があります。海外の大学の入学の場合、IBディプロマ30+は通常、ほとんどの大学に競争力があります。36+は選別機関への扉を開きます。主流の日本の大学入学（ほとんどの学生）については、JEATは依然として標準的な経路です。家族は決定する必要があります。ゴール是、日本の国際プログラム、海外大学、または主流の日本の大学入学ですか？IBは最初の2つに最適です。それは3番目には最適ではありません。'
      }
    }
  },

  scenarios: [
    {
      id: 'scenario-juku-question',
      en: {
        title: 'The Juku Question',
        termsInPlay: ['juku (塾)', 'inquiry learning', 'drilling', 'time management', 'naishinsho'],
        situation: 'Your child has been at the international school for one year. Last month, at a PTM (parent-teacher meeting), another parent asked the IB coordinator: "Should my child also attend juku while at this school?" The coordinator answered thoughtfully: "It depends on your family\'s goals." You have been thinking about it ever since. Your child is in Year 9 MYP, grades are solid (mostly 4s and 5s), but they are also tired. Friends at their former school attend juku 4–5 times a week. Your mother, on a recent call, said gently: "Just a little juku might help them feel more confident."',
        situationNote: 'This is the most common concern Japanese families raise. Juku is part of the cultural fabric. It feels wrong not to use it. There is genuine anxiety that not attending juku means missing an edge.',
        withUnderstanding: 'A parent with clarity on this decision might say: "Our goal is to develop our child\'s critical thinking and independence, not just exam performance. If our child attends juku now, it will be at the cost of time and energy for projects, reading, and the kind of exploration IB asks of them. Juku drilling works against the inquiry habits we want them to build. If our child feels weak in a subject, we will work with the teacher to identify the specific gap and provide targeted tutoring—not blanket drilling. We will maintain juku as a backup option if our child really struggles, but our default is to trust the school and protect our child\'s time for breadth and depth."',
        withoutUnderstanding: 'A parent without clarity might enrol their child in juku "just to be safe," not fully understanding the philosophical conflict. Their child now studies at school 8 hours a day, then juku 2–3 hours in the evening, leaving little time for the personal projects, reading, and sleep IB students need. The child becomes exhausted. Inquiry engagement drops. The child is doing more work but learning less deeply. By Year 11, when IB demands peak, the child is burnt out.'
      },
      ja: {
        title: '塾の質問',
        termsInPlay: ['juku (塾)', '探究学習', '問題演習', '時間管理', '内申点'],
        situation: 'お子さんは国際学校に1年間いました。先月、PTM（保護者面談）で、別の親がIBコーディネーターに尋ねました。「私の子どもはこの学校にいながら、塾にも通うべきですか？」コーディネーターは思慮深く答えました。「あなたの家族のゴール次第です。」あなたはそれ以来、それについて考えています。お子さんはYear 9 MYPで、成績は堅実です（ほとんど4と5）。しかし、彼らも疲れています。以前の学校の友人は週に4～5回塾に通います。あなたのお母さんは、最近の電話で、やさしく言いました。「少しの塾は彼らがより自信を感じるのを助けるかもしれません。」',
        situationNote: 'これは、日本の家族が最も一般的に提起する懸念です。塾は文化的な布地の一部です。それを使用しないのは間違っているように感じます。塾に通わないことは、利点を逃すことを意味する本当の不安があります。',
        withUnderstanding: '明確にこの決定を下した親は言うかもしれません。「我々の目標は、単に試験パフォーマンスではなく、お子さんの批判的思考と独立性を開発することです。今、お子さんが塾に通う場合、それはプロジェクト、読書、IBが彼らに求めるような探究の時間とエネルギーの代価になるでしょう。塾の問題演習は、私たちが彼らに構築したい探究習慣に対抗します。お子さんが科目で弱く感じている場合、私たちは教師と協力して、特定のギャップを特定し、標的化されたチューターを提供します—一般的なドリルではなく。お子さんが本当に苦労している場合、塾をバックアップオプションとして維持しますが、当初は学校を信頼し、幅と深さのためにお子さんの時間を保護しています。」',
        withoutUnderstanding: '明確性のない親は、「安全のため」にお子さんを塾に入学させるかもしれません。哲学的な葛藤を完全に理解していません。彼らのお子さんは現在、学校で1日8時間、その後、夜間に2～3時間塾を勉強し、IB学生が必要とする個人的なプロジェクト、読書、睡眠の時間がほぼありません。子どもは疲れます。探究エンゲージメントは低下します。子どもはより多くの仕事をしていますが、より深く学んでいません。年11までに、IBの需要がピークになると、子どもは燃え尽きています。'
      }
    },
    {
      id: 'scenario-university-panic',
      en: {
        title: 'The University Panic',
        termsInPlay: ['JEAT (大学入学共通テスト)', 'mainstream Japanese universities', 'international programmes', 'university selection', 'DP pathway'],
        situation: 'Your child is in Year 11 (Grade 10 in some systems). A PTM letter comes home. Teachers mention "thinking about university pathways." At dinner, you ask your child: "What universities are you thinking about?" Your child says: "I like Tokyo University." You smile and say: "That\'s great\! How is IB preparing you for the entrance exam?" Your child looks confused. "I don\'t know. The teachers haven\'t talked about the entrance exam at all." That evening, you go online and realise: Most Japanese universities require JEAT. Tokyo University requires JEAT plus university-specific exams. IB does not exempt you from JEAT. You panic. You call the school. The IB coordinator says: "Don\'t worry, we have students getting into good universities." But they do not give you specifics. You spend the night on Japanese university websites, increasingly stressed.',
        situationNote: 'This panic is real and common. Japanese families assume their child\'s school is preparing them for the standard Japanese university pathway, but often do not understand that IB and JEAT are separate pathways. The school may not have been explicit about this during admissions. By Year 11, it is very late to change course, but not too late to clarify and plan.',
        withUnderstanding: 'A parent with clarity would have asked this question in Year 8 or 9: "If my child wants to enter a mainstream Japanese university, does this school prepare them for JEAT? Or should my goal be international programmes or overseas universities?" The school would clarify. If the goal is mainstream Japanese universities (like Tokyo Univ or Kyoto Univ through JEAT), the parent might choose a different school or accept that their child will need supplementary JEAT preparation through juku starting in Year 11 or 12. If the goal is Tokyo Univ\'s PEAK programme or overseas universities, IB is the optimal path and JEAT is irrelevant. In Year 11, the parent and child would calmly identify the destination, understand the requirements, and make an intentional choice.',
        withoutUnderstanding: 'A parent in panic mode reacts by immediately enrolling their child in juku to "catch up" on JEAT, creating enormous stress. The child is now splitting focus: IB at school, JEAT prep at juku. Both suffer. If the goal is truly mainstream Japanese university entry, the child would have been better served by a Japanese school from the start. If the goal is overseas universities or PEAK, juku is unnecessary and actually harmful. The family did not make a deliberate choice; they made a reactive one.'
      },
      ja: {
        title: '大学パニック',
        termsInPlay: ['JEAT (大学入学共通テスト)', '主流の日本の大学', '国際プログラム', '大学選択', 'DP経路'],
        situation: 'お子さんはYear 11（一部のシステムではGrade 10）です。PTMの手紙が家に来ます。教師は「大学進学経路について考える」ことを言及します。夕食時に、お子さんに尋ねます。「どの大学を考えていますか？」お子さんは言います。「東京大学が好きです。」あなたは笑顔になり、「それは素晴らしいです！IBはあなたをどのように入学試験のために準備していますか？」お子さんは困惑した顔をします。「わかりません。先生たちは入学試験について全く話していません。」その夜、オンラインに行き、気づきます。ほとんどの日本の大学はJEATを必要とします。東京大学はJEATと大学固有の試験を必要とします。IBはJEATから免除されません。パニックになります。学校に電話します。IBコーディネーターは言います。「心配しないでください。私たちは良い大学に入学している学生がいます。」しかし、具体的には教えてくれません。日本の大学のウェブサイトで夜を過ごし、ますますストレスを感じています。',
        situationNote: 'このパニックは本当で、一般的です。日本の家族は、子どもの学校が標準的な日本の大学進学経路のために準備していると仮定していますが、IBとJEATが別々の経路であることを理解していないことが多いです。学校は入学中にこれについて明示的でなかったかもしれません。年11までに、コースを変更するのは非常に遅いですが、明確にして計画するには遅すぎません。',
        withUnderstanding: '明確にした親は、Year 8または9でこの質問をしていたでしょう。「お子さんが主流の日本の大学に入学したい場合、この学校はJEATのための準備をしていますか？それとも、お子さんのゴールが国際プログラムまたは海外大学であるべきですか？」学校は明確にするでしょう。ゴールが主流の日本の大学（JEATを通じた東京大学または京都大学など）である場合、親は異なる学校を選択するか、お子さんが11年目または12年目から塾を通じた追加のJEAT準備が必要になることを受け入れるかもしれません。ゴールが東大のPEAKプログラムまたは海外大学である場合、IBは最適な経路であり、JEATは関連性がありません。年11では、親と子は落ち着いて目的地を特定し、要件を理解し、意図的な選択をします。',
        withoutUnderstanding: 'パニック状態の親は、「追いつく」ために即座にお子さんを塾に入学させることで対応し、大きなストレスを生み出します。子どもは現在、フォーカスを分割しています。学校でのIB、塾でのJEAT準備。両方苦しんでいます。ゴールが本当に主流の日本の大学入学である場合、子どもは最初から日本の学校によってより良くサービスを受けていたでしょう。ゴールが海外大学またはPEAKである場合、塾は不要であり、実は有害です。家族は意図的な選択をしませんでした。彼らは反応的な選択をしました。'
      }
    }
  ],

  glossary: [
    {
      term: 'IB',
      en: {
        full: 'International Baccalaureate',
        definition: 'A global educational framework offering three programmes: Primary Years Programme (PYP, ages 3–12), Middle Years Programme (MYP, ages 11–16), and Diploma Programme (DP, ages 16–19). IB is recognised worldwide and emphasises inquiry, critical thinking, and global citizenship.'
      },
      ja: {
        full: 'インターナショナル・バカロレア',
        definition: '世界的な教育フレームワークで、3つのプログラムを提供しています。Primary Years Programme（PYP、3～12歳）、Middle Years Programme（MYP、11～16歳）、Diploma Programme（DP、16～19歳）。IBは世界中で認識されており、探究、批判的思考、グローバルシチズンシップを強調しています。'
      }
    },
    {
      term: 'MYP',
      en: {
        full: 'Middle Years Programme',
        definition: 'The IB programme for students ages 11–16 (typically Grades 6–10). It uses criterion-referenced grading (1–7), interdisciplinary units of inquiry, and continuous assessment. No external exams in MYP; all grades are based on school-based assessment.'
      },
      ja: {
        full: 'Middle Years Programme',
        definition: '11～16歳の学生向けのIBプログラム（通常はGrades 6～10）。評価規準参照型の評価（1～7）、学際的な探究ユニット、継続的な評定を使用しています。MYPには外部試験がありません。すべての成績は学校ベースの評定に基づいています。'
      }
    },
    {
      term: 'DP',
      en: {
        full: 'Diploma Programme',
        definition: 'The final two-year IB programme for students ages 16–19 (typically Grades 11–12). It culminates in the IB Diploma, awarded upon completion of six subject exams, the Extended Essay, Theory of Knowledge, and CAS requirements. The Diploma is recognised by universities worldwide.'
      },
      ja: {
        full: 'Diploma Programme',
        definition: '16～19歳の学生向けの最終的な2年間のIBプログラム（通常はGrades 11～12）。6科目試験、課題論文、知識の理論、CAS要件の完成時に授与されるIBディプロマで最高潮に達します。ディプロマは世界中の大学で認識されています。'
      }
    },
    {
      term: 'PYP',
      en: {
        full: 'Primary Years Programme',
        definition: 'The IB programme for students ages 3–12. It emphasises play-based learning in early years and inquiry-based units in later years. Assessment is through portfolios and exhibitions, not traditional grades. PYP aims to develop confident, curious, and independent learners.'
      },
      ja: {
        full: 'Primary Years Programme',
        definition: '3～12歳の学生向けのIBプログラム。初期年には遊びベースの学習を強調し、後年には探究型ユニットを強調しています。評定は、従来の成績ではなく、ポートフォリオと展示会を通じて行われます。PYPは、自信を持った、好奇心旺盛で、独立した学習者を育成することを目指しています。'
      }
    },
    {
      term: 'juken (受験)',
      en: {
        full: 'Entrance exam culture',
        definition: 'Japan\'s educational system is defined by competitive entrance exams at every level—middle school, high school, and university. Success in these exams determines academic and often career trajectory. This culture drives intensive exam preparation, often beginning years in advance.'
      },
      ja: {
        full: '受験',
        definition: '日本の教育制度は、あらゆるレベルでの競争的な入学試験によって定義されます。中学校、高校、大学。これらの試験での成功は、学術および多くの場合のキャリア経路を決定します。この文化は、多くの場合、年前から始まる集中的な試験準備を駆動します。'
      }
    },
    {
      term: 'juku (塾)',
      en: {
        full: 'Cram school',
        definition: 'Private after-school instruction centres where students go for exam drilling, test preparation, and supplementary tutoring. Juku are ubiquitous in Japan and are attended by the majority of secondary students. They focus on memorisation, practice exams, and time-management for timed tests.'
      },
      ja: {
        full: '塾',
        definition: '学生が試験ドリル、テスト準備、補足指導のために行く民間の放課後指導センター。塾は日本ではユビキタスであり、ほとんどの中等学生に出席しています。彼らは暗記、模擬試験、時限テストの時間管理に焦点を当てています。'
      }
    },
    {
      term: 'naishinsho (内申点)',
      en: {
        full: 'Internal school record / continuous assessment grade',
        definition: 'A grade based on a student\'s continuous performance throughout the year in a Japanese school. It is used alongside entrance exam scores for high school admission. Naishinsho is the closest Japanese equivalent to IB\'s continuous assessment philosophy, though it ultimately feeds into exam-based entry, not learning for its own sake.'
      },
      ja: {
        full: '内申点',
        definition: '日本の学校の通年でのスチューデント継続的なパフォーマンスに基づく成績。これは、高等学校入学のための入学試験スコアと並行して使用されます。内申点は、IBの継続的な評定哲学に最も近い日本の同等であり、最終的に学習自体ではなく、試験ベースの入学に供給されます。'
      }
    },
    {
      term: 'JEAT (大学入学共通テスト)',
      en: {
        full: 'Daigaku Nyūgaku Kyōtsū Test / Common University Entrance Exam',
        definition: 'Japan\'s standardised entrance exam for university entry, administered nationally. It tests comprehension and problem-solving across a wide range of subjects. Most Japanese university entrants must take JEAT (or its predecessor, the Center Test) alongside university-specific entrance exams. JEAT is not required for international programme entry at top Japanese universities.'
      },
      ja: {
        full: '大学入学共通テスト',
        definition: '大学入学のための日本の標準化された入学試験であり、全国的に実施されます。これは、幅広い科目にわたって理解と問題解決をテストします。ほとんどの日本の大学入学希望者は、大学固有の入学試験と並行してJEAT（またはその前身のセンター試験）を受ける必要があります。JEATは、トップの日本の大学での国際プログラム入学には必要ありません。'
      }
    },
    {
      term: 'criterion (評価規準)',
      en: {
        full: 'Criterion / standard for assessment',
        definition: 'In IB, criteria are specific standards against which student work is evaluated. Each criterion has a set of descriptors (e.g., 1–7 in MYP) that describe levels of achievement. Criterion-referenced grading is more precise than percentage-based grading because it describes what a student can do, not just a numerical score.'
      },
      ja: {
        full: '評価規準',
        definition: 'IBでは、基準は学生の作品が評価される特定の基準です。各基準には、成就のレベルを説明する説明文のセット（例えば、MYPでは1～7）があります。評価規準参照型の評価は、単に数値スコアではなく、学生ができることを説明するため、パーセンテージベースの評価より正確です。'
      }
    },
    {
      term: 'Extended Essay (課題論文)',
      en: {
        full: 'Extended Essay / DP independent research project',
        definition: 'A 4,000-word independent research paper completed by all IB Diploma students. Students choose their own research question, conduct original investigation, and write a formal essay. The EE is graded on a scale of A–E and contributes up to 3 points to the Diploma score. It is a core component of the DP and develops critical research and writing skills.'
      },
      ja: {
        full: '課題論文',
        definition: 'すべてのIBディプロマ学生が完成させる4,000語の独立した研究論文。学生は独自の研究質問を選択し、元の調査を実施し、正式なエッセイを書きます。EEはA～Eのスケールで評価され、Diploma Scoreに最大3ポイント貢献します。これはDPのコアコンポーネントであり、批判的な研究とライティングスキルを開発します。'
      }
    }
  ],

  universityWalkthrough: {
    en: {
      intro: 'IB graduates from Japan face a genuinely branching university landscape. The path you take depends on your target — and the honest answer is that different targets require different preparation strategies, some of which must begin in Year 10 or earlier.',
      paths: [
        {
          id: 'japan-mainstream',
          label: 'Japanese national university — mainstream entry',
          flag: '🇯🇵',
          warning: 'IB diploma alone does NOT qualify for JEAT. You must register and sit separately.',
          steps: [
            { n: 1, title: 'Year 10–11: Decide early', detail: 'If mainstream Japanese national university entry is the goal, you need to decide this in Year 10. JEAT (大学入学共通テスト) requires separate preparation alongside IB DP. Students typically sit JEAT in January of Year 13.' },
            { n: 2, title: 'Year 11–12: Dual preparation', detail: 'DP and JEAT preparation must run in parallel. This is demanding. Most students who do this successfully have strong time management and begin JEAT prep in Year 11 alongside DP subject selection.' },
            { n: 3, title: 'Year 12: Register for JEAT', detail: 'Registration opens in September of Year 12 (Japanese academic year). IB students register as independent candidates (独立受験生). Confirm registration deadlines with your counsellor.' },
            { n: 4, title: 'Year 13 January: Sit JEAT', detail: 'JEAT is held in January. This coincides with the final stretch of DP. Plan your study schedule carefully — JEAT preparation should be substantially complete before the December IB submission deadlines.' },
            { n: 5, title: 'Year 13 February–March: University-specific exams', detail: 'Most national universities (旧帝大 and others) require a second exam after JEAT. These are university-specific and subject-specific. Begin preparing for these in Year 12.' },
          ],
          honest: 'This path is achievable but requires starting JEAT preparation in Year 11 at the latest, running it alongside DP. It is significantly more demanding than choosing a purely IB pathway. Discuss with your counsellor whether this is realistic given your child\'s subject choices and current performance.',
        },
        {
          id: 'japan-international-program',
          label: 'Japanese university — international / English-medium program',
          flag: '🇯🇵',
          warning: null,
          steps: [
            { n: 1, title: 'Year 10–11: Research programs', detail: 'Key programs that accept IB directly: University of Tokyo PEAK (English-medium undergraduate), Waseda SILS (School of International Liberal Studies), Keio SFC, Sophia University Global Studies, ICU (International Christian University), Ritsumeikan APU. Each has different IB score requirements.' },
            { n: 2, title: 'Year 11: Understand score requirements', detail: 'Most English-medium programs at top Japanese universities require IB total scores of 32–38+. Specific HL requirements vary. PEAK (Tokyo) is highly competitive — typically 38+ with strong HL scores. SILS (Waseda) typically 32–36. Research your specific target.' },
            { n: 3, title: 'Year 12: Prepare application materials', detail: 'Applications typically open in September–November of Year 12 for entry the following April. Requirements usually include: IB predicted grades, personal statement, letters of recommendation, and sometimes an interview. English language requirements are typically met by IB English A or B.' },
            { n: 4, title: 'Year 12–13: Submit applications', detail: 'Application deadlines are typically October–December for spring entry. Submit predicted grades (provided by your IB coordinator). Final IB results are used to confirm admission after July results day.' },
            { n: 5, title: 'July Year 13: IB results confirmation', detail: 'Final offers are confirmed once IB results are published in July. Most programs require minimum grade conditions to be met. Ensure your predicted grades and final grades align.' },
          ],
          honest: 'This is the most natural IB pathway for Japanese university entry. Competition for PEAK (Tokyo) is high. SILS, ICU, APU, and Sophia offer strong programs with more achievable score requirements.',
        },
        {
          id: 'overseas',
          label: 'Overseas university — UK, US, Australia, Canada',
          flag: '🌏',
          warning: null,
          steps: [
            { n: 1, title: 'Year 10: Research destinations', detail: 'UK universities (Russell Group) typically require 36–40 IB points with specific HL requirements. US universities (liberal arts) use IB as one component of a holistic application — start SAT/ACT research now if considering the US. Australian Go8 universities typically require 33–38 points. Canadian universities typically 32–36.' },
            { n: 2, title: 'Year 11: EE topic and CAS planning', detail: 'UK and international programs value the IB core heavily. Extended Essay topic, Theory of Knowledge engagement, and CAS portfolio all contribute to applications. Begin EE topic research in Year 11.' },
            { n: 3, title: 'Year 12 October–January: UK UCAS applications', detail: 'UCAS opens in September. Early deadline for Oxford/Cambridge and medicine is October 15. Main deadline is January 15. Personal statement is central — start drafting in September. Predicted grades submitted by your school.' },
            { n: 4, title: 'Year 12: US Common App / Coalition', detail: 'US applications open August 1. Early Decision/Early Action deadlines are November 1–15. Regular Decision deadlines are January 1–15. Requires personal essays, letters of recommendation, and activity lists alongside predicted grades.' },
            { n: 5, title: 'Year 13 July: Results and confirmation', detail: 'IB results published in July. UK conditional offers confirmed. US deferred gap year possible. Australian applications can be submitted with final IB results directly.' },
          ],
          honest: 'IB is the native credential for UK, Australian, and Canadian universities — it is exactly what these admissions systems are designed to receive. US universities use IB as one strong input in a holistic process. For Japanese families, this is typically the least friction-heavy university pathway for IB graduates.',
        },
      ],
    },
    ja: {
      intro: 'IBの卒業生が日本の大学進学を考える場合、進路は実際に分岐しています。目標によって必要な準備戦略が異なり、正直に言えば、10年生（高校1年生相当）以前から準備を始めなければならない場合もあります。',
      paths: [
        {
          id: 'japan-mainstream',
          label: '日本の国立大学・一般入試ルート',
          flag: '🇯🇵',
          warning: 'IB卒業資格だけでは大学入学共通テストへの出願資格はありません。別途登録・受験が必要です。',
          steps: [
            { n: 1, title: '10年生：早期決断', detail: '国立大学への一般入試を目指す場合は、10年生のうちに決断する必要があります。大学入学共通テスト（JEAT）はIB・DPと並行して別途準備が必要です。通常、13年生（高校3年生相当）の1月に受験します。' },
            { n: 2, title: '11〜12年生：二刀流の準備', detail: 'DPと共通テストの準備を並行して行う必要があります。負担は大きいですが、11年生からJEAT対策を始め、DPの科目選択と並行して進める学生が多いです。' },
            { n: 3, title: '12年生：共通テスト出願登録', detail: '出願登録は12年生の9月に始まります。IB生は独立受験生として登録します。登録締め切りをカウンセラーに確認してください。' },
            { n: 4, title: '13年生1月：共通テスト受験', detail: '共通テストは1月に実施されます。DPの最終提出期限（12月）と重なるため、学習スケジュールの慎重な計画が必要です。' },
            { n: 5, title: '13年生2〜3月：大学別個別試験', detail: 'ほとんどの国立大学（旧帝大など）は共通テスト後に個別試験を課します。12年生からの準備が必要です。' },
          ],
          honest: 'このルートは実現可能ですが、11年生までに共通テスト対策を開始し、DPと並行して進める必要があります。科目選択と現在の成績を踏まえ、カウンセラーと現実的かどうか相談してください。',
        },
        {
          id: 'japan-international-program',
          label: '日本の大学・英語プログラム（PEAK・SILSなど）',
          flag: '🇯🇵',
          warning: null,
          steps: [
            { n: 1, title: '10〜11年生：プログラム調査', detail: 'IBを直接受け入れる主なプログラム：東京大学PEAK、早稲田大学SILS、慶應SFC、上智大学グローバル学部、国際基督教大学（ICU）、立命館アジア太平洋大学（APU）。各校でIBスコア要件が異なります。' },
            { n: 2, title: '11年生：スコア要件の確認', detail: '上位大学の英語プログラムは通常IB合計32〜38点以上を要求します。PEAK（東大）は競争が激しく、通常38点以上・HLスコアが高い必要があります。SILS（早稲田）は32〜36点が目安です。' },
            { n: 3, title: '12年生：出願書類の準備', detail: '多くのプログラムの出願は12年生の9〜11月に開始し、翌年4月入学が対象です。通常の要件：IB予測成績、パーソナルステートメント、推薦状、場合によっては面接。' },
            { n: 4, title: '12〜13年生：出願', detail: '出願締め切りは通常10〜12月（春入学）。出願には予測成績が必要です（IBコーディネーターが提出）。最終合否は7月のIB成績発表後に確定します。' },
            { n: 5, title: '13年生7月：IB成績・最終確認', detail: '7月にIB成績が発表されます。最低条件を満たしていれば入学が確定します。予測成績と最終成績が一致するよう準備を。' },
          ],
          honest: '日本国内でのIB進学において、最も自然なルートです。PEAK（東大）の競争は激しいですが、SILS・ICU・APU・上智などは幅広い学生が目指せる優れたプログラムです。',
        },
        {
          id: 'overseas',
          label: '海外大学（英国・米国・豪州・カナダ）',
          flag: '🌏',
          warning: null,
          steps: [
            { n: 1, title: '10年生：志望先の研究', detail: 'UK大学（ラッセルグループ）は通常IB36〜40点とHL要件を求めます。米国大学はIBを包括的な選考の一部として評価します。豪州G8大学は33〜38点、カナダは32〜36点が目安です。' },
            { n: 2, title: '11年生：課題論文とCAS計画', detail: 'UK・海外の大学はIBコア（課題論文・ToK・CAS）を重視します。課題論文（EE）のテーマは11年生から研究を始めましょう。' },
            { n: 3, title: '12年生10〜1月：UCAS出願（英国）', detail: 'UCASOは9月に開きます。牛津・ケンブリッジ・医学部の早期締め切りは10月15日。通常締め切りは1月15日。個人陳述書（PS）が中心です。' },
            { n: 4, title: '12年生：米国Common App出願', detail: '米国出願は8月1日開始。早期出願（ED/EA）は11月1〜15日締め切り。通常出願は1月1〜15日締め切り。エッセイ・推薦状・活動リストが必要です。' },
            { n: 5, title: '13年生7月：成績発表・入学確定', detail: '7月のIB成績発表後、UK条件付き合格が確定します。豪州大学は最終成績での直接出願も可能です。' },
          ],
          honest: 'IBはUK・豪州・カナダの大学入試に最適な資格です。日本人IB生にとって、海外大学進学は最も摩擦の少ないルートの一つです。',
        },
      ],
    },

  universityWalkthrough: {
    en: {
      intro: 'IB graduates from Japan face a genuinely branching university landscape. The path you take depends on your target — and the honest answer is that different targets require different preparation strategies, some of which must begin in Year 10 or earlier.',
      paths: [
        {
          id: 'japan-mainstream',
          label: 'Japanese national university — mainstream entry',
          flag: '🇯🇵',
          warning: 'IB diploma alone does NOT qualify for JEAT. You must register and sit separately.',
          steps: [
            { n: 1, title: 'Year 10–11: Decide early', detail: 'If mainstream Japanese national university entry is the goal, you need to decide this in Year 10. JEAT (大学入学共通テスト) requires separate preparation alongside IB DP. Students typically sit JEAT in January of Year 13.' },
            { n: 2, title: 'Year 11–12: Dual preparation', detail: 'DP and JEAT preparation must run in parallel. This is demanding. Most students who do this successfully have strong time management and begin JEAT prep in Year 11 alongside DP subject selection.' },
            { n: 3, title: 'Year 12: Register for JEAT', detail: 'Registration opens in September of Year 12 (Japanese academic year). IB students register as independent candidates (独立受験生). Confirm registration deadlines with your counsellor.' },
            { n: 4, title: 'Year 13 January: Sit JEAT', detail: 'JEAT is held in January. This coincides with the final stretch of DP. Plan your study schedule carefully — JEAT preparation should be substantially complete before the December IB submission deadlines.' },
            { n: 5, title: 'Year 13 February–March: University-specific exams', detail: 'Most national universities (旧帝大 and others) require a second exam after JEAT. These are university-specific and subject-specific. Begin preparing for these in Year 12.' },
          ],
          honest: 'This path is achievable but requires starting JEAT preparation in Year 11 at the latest, running it alongside DP. It is significantly more demanding than choosing a purely IB pathway. Discuss with your counsellor whether this is realistic given your child\'s subject choices and current performance.',
        },
        {
          id: 'japan-international-program',
          label: 'Japanese university — international / English-medium program',
          flag: '🇯🇵',
          warning: null,
          steps: [
            { n: 1, title: 'Year 10–11: Research programs', detail: 'Key programs that accept IB directly: University of Tokyo PEAK (English-medium undergraduate), Waseda SILS (School of International Liberal Studies), Keio SFC, Sophia University Global Studies, ICU (International Christian University), Ritsumeikan APU. Each has different IB score requirements.' },
            { n: 2, title: 'Year 11: Understand score requirements', detail: 'Most English-medium programs at top Japanese universities require IB total scores of 32–38+. Specific HL requirements vary. PEAK (Tokyo) is highly competitive — typically 38+ with strong HL scores. SILS (Waseda) typically 32–36. Research your specific target.' },
            { n: 3, title: 'Year 12: Prepare application materials', detail: 'Applications typically open in September–November of Year 12 for entry the following April. Requirements usually include: IB predicted grades, personal statement, letters of recommendation, and sometimes an interview. English language requirements are typically met by IB English A or B.' },
            { n: 4, title: 'Year 12–13: Submit applications', detail: 'Application deadlines are typically October–December for spring entry. Submit predicted grades (provided by your IB coordinator). Final IB results are used to confirm admission after July results day.' },
            { n: 5, title: 'July Year 13: IB results confirmation', detail: 'Final offers are confirmed once IB results are published in July. Most programs require minimum grade conditions to be met. Ensure your predicted grades and final grades align.' },
          ],
          honest: 'This is the most natural IB pathway for Japanese university entry. Competition for PEAK (Tokyo) is high. SILS, ICU, APU, and Sophia offer strong programs with more achievable score requirements.',
        },
        {
          id: 'overseas',
          label: 'Overseas university — UK, US, Australia, Canada',
          flag: '🌏',
          warning: null,
          steps: [
            { n: 1, title: 'Year 10: Research destinations', detail: 'UK universities (Russell Group) typically require 36–40 IB points with specific HL requirements. US universities (liberal arts) use IB as one component of a holistic application — start SAT/ACT research now if considering the US. Australian Go8 universities typically require 33–38 points. Canadian universities typically 32–36.' },
            { n: 2, title: 'Year 11: EE topic and CAS planning', detail: 'UK and international programs value the IB core heavily. Extended Essay topic, Theory of Knowledge engagement, and CAS portfolio all contribute to applications. Begin EE topic research in Year 11.' },
            { n: 3, title: 'Year 12 October–January: UK UCAS applications', detail: 'UCAS opens in September. Early deadline for Oxford/Cambridge and medicine is October 15. Main deadline is January 15. Personal statement is central — start drafting in September. Predicted grades submitted by your school.' },
            { n: 4, title: 'Year 12: US Common App / Coalition', detail: 'US applications open August 1. Early Decision/Early Action deadlines are November 1–15. Regular Decision deadlines are January 1–15. Requires personal essays, letters of recommendation, and activity lists alongside predicted grades.' },
            { n: 5, title: 'Year 13 July: Results and confirmation', detail: 'IB results published in July. UK conditional offers confirmed. US deferred gap year possible. Australian applications can be submitted with final IB results directly.' },
          ],
          honest: 'IB is the native credential for UK, Australian, and Canadian universities — it is exactly what these admissions systems are designed to receive. US universities use IB as one strong input in a holistic process. For Japanese families, this is typically the least friction-heavy university pathway for IB graduates.',
        },
      ],
    },
    ja: {
      intro: 'IBの卒業生が日本の大学進学を考える場合、進路は実際に分岐しています。目標によって必要な準備戦略が異なり、正直に言えば、10年生（高校1年生相当）以前から準備を始めなければならない場合もあります。',
      paths: [
        {
          id: 'japan-mainstream',
          label: '日本の国立大学・一般入試ルート',
          flag: '🇯🇵',
          warning: 'IB卒業資格だけでは大学入学共通テストへの出願資格はありません。別途登録・受験が必要です。',
          steps: [
            { n: 1, title: '10年生：早期決断', detail: '国立大学への一般入試を目指す場合は、10年生のうちに決断する必要があります。大学入学共通テスト（JEAT）はIB・DPと並行して別途準備が必要です。通常、13年生（高校3年生相当）の1月に受験します。' },
            { n: 2, title: '11〜12年生：二刀流の準備', detail: 'DPと共通テストの準備を並行して行う必要があります。負担は大きいですが、11年生からJEAT対策を始め、DPの科目選択と並行して進める学生が多いです。' },
            { n: 3, title: '12年生：共通テスト出願登録', detail: '出願登録は12年生の9月に始まります。IB生は独立受験生として登録します。登録締め切りをカウンセラーに確認してください。' },
            { n: 4, title: '13年生1月：共通テスト受験', detail: '共通テストは1月に実施されます。DPの最終提出期限（12月）と重なるため、学習スケジュールの慎重な計画が必要です。' },
            { n: 5, title: '13年生2〜3月：大学別個別試験', detail: 'ほとんどの国立大学（旧帝大など）は共通テスト後に個別試験を課します。12年生からの準備が必要です。' },
          ],
          honest: 'このルートは実現可能ですが、11年生までに共通テスト対策を開始し、DPと並行して進める必要があります。科目選択と現在の成績を踏まえ、カウンセラーと現実的かどうか相談してください。',
        },
        {
          id: 'japan-international-program',
          label: '日本の大学・英語プログラム（PEAK・SILSなど）',
          flag: '🇯🇵',
          warning: null,
          steps: [
            { n: 1, title: '10〜11年生：プログラム調査', detail: 'IBを直接受け入れる主なプログラム：東京大学PEAK、早稲田大学SILS、慶應SFC、上智大学グローバル学部、国際基督教大学（ICU）、立命館アジア太平洋大学（APU）。各校でIBスコア要件が異なります。' },
            { n: 2, title: '11年生：スコア要件の確認', detail: '上位大学の英語プログラムは通常IB合計32〜38点以上を要求します。PEAK（東大）は競争が激しく、通常38点以上・HLスコアが高い必要があります。SILS（早稲田）は32〜36点が目安です。' },
            { n: 3, title: '12年生：出願書類の準備', detail: '多くのプログラムの出願は12年生の9〜11月に開始し、翌年4月入学が対象です。通常の要件：IB予測成績、パーソナルステートメント、推薦状、場合によっては面接。' },
            { n: 4, title: '12〜13年生：出願', detail: '出願締め切りは通常10〜12月（春入学）。出願には予測成績が必要です（IBコーディネーターが提出）。最終合否は7月のIB成績発表後に確定します。' },
            { n: 5, title: '13年生7月：IB成績・最終確認', detail: '7月にIB成績が発表されます。最低条件を満たしていれば入学が確定します。予測成績と最終成績が一致するよう準備を。' },
          ],
          honest: '日本国内でのIB進学において、最も自然なルートです。PEAK（東大）の競争は激しいですが、SILS・ICU・APU・上智などは幅広い学生が目指せる優れたプログラムです。',
        },
        {
          id: 'overseas',
          label: '海外大学（英国・米国・豪州・カナダ）',
          flag: '🌏',
          warning: null,
          steps: [
            { n: 1, title: '10年生：志望先の研究', detail: 'UK大学（ラッセルグループ）は通常IB36〜40点とHL要件を求めます。米国大学はIBを包括的な選考の一部として評価します。豪州G8大学は33〜38点、カナダは32〜36点が目安です。' },
            { n: 2, title: '11年生：課題論文とCAS計画', detail: 'UK・海外の大学はIBコア（課題論文・ToK・CAS）を重視します。課題論文（EE）のテーマは11年生から研究を始めましょう。' },
            { n: 3, title: '12年生10〜1月：UCAS出願（英国）', detail: 'UCASOは9月に開きます。牛津・ケンブリッジ・医学部の早期締め切りは10月15日。通常締め切りは1月15日。個人陳述書（PS）が中心です。' },
            { n: 4, title: '12年生：米国Common App出願', detail: '米国出願は8月1日開始。早期出願（ED/EA）は11月1〜15日締め切り。通常出願は1月1〜15日締め切り。エッセイ・推薦状・活動リストが必要です。' },
            { n: 5, title: '13年生7月：成績発表・入学確定', detail: '7月のIB成績発表後、UK条件付き合格が確定します。豪州大学は最終成績での直接出願も可能です。' },
          ],
          honest: 'IBはUK・豪州・カナダの大学入試に最適な資格です。日本人IB生にとって、海外大学進学は最も摩擦の少ないルートの一つです。',
        },
      ],
    },

  },
  pypBridge: {
    en: {
      title: 'The PYP → MYP Transition: What Japanese Families Should Know',
      intro: 'For Japanese families, the PYP to MYP transition happens at precisely the age when juken (受験) culture kicks in hardest. Middle school entrance exams in Japan are typically at age 12. Juku enrolment accelerates. Friends are drilling. Your child is moving into MYP criterion-based learning while their counterparts are in intense exam preparation. Understanding what changes at the transition — and why the MYP approach produces different but real outcomes — is essential preparation for the years ahead.',
      changes: [
        { aspect: 'Report format and grading', pyp: 'Narrative comments and portfolio evidence. No numerical grades. Progress described in learning behaviour and inquiry skills.', myp: 'Criterion scores A–D (0–8 each). Total maps to grade 1–7. Structured but different from the tansuugaku (単数学, numerical) approach peers are experiencing in juku.' },
        { aspect: 'Assessment style', pyp: 'Ongoing observation, student portfolios, student agency in learning. The PYP Exhibition is Year 5 capstone.', myp: 'Formal summative assessments in each subject at defined points. Criterion-referenced feedback. External IB moderation at Year 10 (MYP 5). Assessment tests understanding and application, not rote recall.' },
        { aspect: 'Exam culture and study intensity', pyp: 'No high-stakes entrance exams. Learning is exploratory and question-driven.', myp: 'Still no entrance exams or kyouikushinkoku (教育振興国, competitive ranking). By contrast, peers are entering juku or intensifying cram study. MYP maintains emphasis on critical thinking and problem-solving, not memorisation for naishinsho (内申書, entrance exam recommendation documents).' },
        { aspect: 'Educational philosophy', pyp: 'IB learner profile, transdisciplinary thinking, whole-child development.', myp: 'Continues conceptual, inquiry-based learning. By MYP Year 5, students are prepared for DP — which is recognized globally but is NOT a pathway to Japanese universities via shingaku (進学) or kyoutsusennkenkyukai (共通受験). Families must choose: IB track or Japanese national exam track.' }
      ],
      firstYearNote: 'Year 7 is the first year of genuine structural difference. Your child\'s report will not look like a naishinsho-style assessment, nor will it predict performance on juken. The criterion scores (A through D) will feel abstract at first. This is intentional — MYP Year 7 is the year of learning the system itself. A student who exits Year 7 understanding what each criterion means in each subject has made significant progress, even if the numerical total is modest. Do not compare your child\'s MYP Year 7 scores to a juku-prepped peer\'s exam scores — you are measuring different skills.',
      whatToAsk: [
        'What does my child need to do to move from their current criterion score to the next level in [subject]?',
        'How is my child developing as a critical thinker and problem-solver? Can you give specific examples?',
        'What is the DP pathway, and when do we discuss whether the IB track or a Japanese university pathway is the right fit for our family?'
      ],
    },
    ja: {
      title: 'PYP → MYP 移行：日本の家族が知るべきこと',
      intro: '日本の家族にとって、PYP から MYP への移行は、受験文化が最も激しくなる年齢で起こります。日本の中学入試は通常 12 歳で行われます。塾の入会が加速しています。友人たちは受験勉強に励んでいます。一方、お子さんは MYP 基準ベースの学習に進みながら、同年代の子どもたちは激しい試験準備に取り組んでいます。この移行で何が変わるのか、そして MYP のアプローチがなぜ異なるが実在する結果をもたらすのかを理解することは、今後の準備として不可欠です。',
      changes: [
        { aspect: '成績表形式と評定', pyp: '記述的なコメントと作品集の根拠。数値等級なし。学習行動と探究技能で進捗が説明されます。', myp: '基準スコア A–D（各 0–8）。合計は 1–7 等級にマップされます。構造化されていますが、塾で経験している単数学的なアプローチとは異なります。' },
        { aspect: '評価方式', pyp: '継続的な観察、学生作品集、学習における学生主体性。PYP エキシビションは 5 年生のクライマックスです。', myp: '各科目での定義された時点での正式な総括評価。基準参照フィードバック。10 年生での外部 IB 協調（MYP 5）。評価は暗記ではなく、理解と応用をテストします。' },
        { aspect: '試験文化と学習強度', pyp: '高リスク入試なし。学習は探索的で質問駆動型です。', myp: '相変わらず入試や競争的ランキングはありません。対照的に、同年代は塾に入会するか受験勉強を強化しています。MYP は内申書のための暗記ではなく、批判的思考と問題解決に重点を置き続けています。' },
        { aspect: '教育哲学', pyp: 'IB 学習者プロフィール、学際的思考、全人発達。', myp: '概念的で探究ベースの学習を継続します。MYP 5 年までに、学生は DP の準備ができています — これは世界的に認識されていますが、進学や共通試験への日本の大学のパスウェイではありません。家族は選択する必要があります：IB トラックまたは日本の国家試験トラック。' }
      ],
      firstYearNote: '7 年生は真の構造的差異の最初の年です。お子さんの報告書は内申書方式の評価のようには見えず、受験の成績を予測することもありません。基準スコア（A から D）は最初は抽象的に感じるでしょう。これは意図的です — MYP 7 年生はシステム自体を学ぶ年です。各科目で各基準の意味を理解して 7 年生を終える学生は、数値の合計が控えめであっても、大きな進歩を遂げています。お子さんの MYP 7 年生のスコアを塾で準備した同年代の試験スコアと比較しないでください — 異なるスキルを測定しています。',
      whatToAsk: [
        '[科目]で現在の基準スコアから次のレベルに移動するために、子どもは何をする必要がありますか？',
        '子どもは批判的思考者で問題解決者としてどのように発達していますか？具体的な例を教えていただけますか？',
        'DP パスウェイとは何ですか？また、IB トラックまたは日本の大学パスウェイが家族に適しているかについて、いつ議論しますか？'
      ],
    }
  }
}
};
