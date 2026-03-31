export const chinaVocabLearningActivity = {
  id: 'china-vocab-001',
  country: 'China',
  title: 'China Education Culture Vocabulary Lab',
  subtitle:
    'High-utility concepts for reading everyday interactions with students, parents, and colleagues in Chinese and China-based international school settings.',
  estimatedMinutes: 15,
  difficulty: 'intermediate',
  recommendedUse: [
    'Pre-simulation warm-up',
    'Dimension checkpoint activity',
    'Standalone vocabulary practice',
  ],
  learningGoals: [
    'Learn critical vocabulary for interpreting school-family and school-staff interactions in China.',
    'Recognize when a conflict is really about communication structure, legitimacy, or differing beliefs about learning.',
    'Apply vocabulary to practice rather than treating culture as a list of static traits.',
  ],
  researchAnchors: [
    {
      citation:
        'Guo, Y., Wu, X., & Liu, X. (2019). Challenges and Opportunities in Parent-Teacher Relationships in Contemporary China.',
      doi: '10.5206/cie-eci.v47i2.9331',
      url: 'https://doi.org/10.5206/cie-eci.v47i2.9331',
      use: 'Contemporary parent-teacher relations, WeChat communication, middle-class parental involvement, and shifting teacher authority.',
    },
    {
      citation:
        'Li, J. (2005). Mind or virtue: Western and Chinese beliefs about learning.',
      doi: '10.1111/j.0963-7214.2005.00342.x',
      url: 'https://doi.org/10.1111/j.0963-7214.2005.00342.x',
      use: 'Learning beliefs, effort, diligence, correctness, and the logic behind visible seriousness in schooling.',
    },
    {
      citation:
        'Poole, A., & Bunnell, T. (2023). “Diluting, decoupling, and dovetailing”: Considering new metaphors for understanding the changing International School landscape in China.',
      doi: '10.1177/14752409231160710',
      url: 'https://doi.org/10.1177/14752409231160710',
      use: 'Internationalised schools, fusion of national and international logics, and why older expatriate-centered assumptions are no longer enough.',
    },
    {
      citation:
        'Poole, A., & Bunnell, T. (2024/2025). Host National Teachers’ Perceptions of Foreign Educators: Insights into the Changing International School Sector in China.',
      doi: '10.1080/00071005.2024.2393816',
      url: 'https://doi.org/10.1080/00071005.2024.2393816',
      use: 'Changing teacher roles, host-national expertise, and the shrinking automatic status of foreign educators in China’s internationalised sector.',
    },
  ],
  facilitatorNote:
    'These concepts are designed to help teachers interpret Chinese school interactions more accurately. They are not a license to flatten all parents, students, or colleagues into one pattern.',
  sections: [
    {
      id: 'flashcards',
      type: 'vocab_cards',
      title: 'Key Terms',
      instructions:
        'Ask the learner to guess the meaning first, then reveal the definition, school example, and common misread.',
      cards: [
        {
          id: 'wechat-accountability',
          term: 'WeChat accountability',
          partOfSpeech: 'noun phrase',
          learnerFriendlyDefinition:
            'When parent questions become public, visible tests of trust through class-group messaging.',
          deeperMeaning:
            'In many China-based school communities, WeChat is not just logistics. It can become the place where standards, speed, and teacher responsiveness are publicly judged.',
          whyItMatters:
            'A teacher may hear a group question as disrespect. A parent may hear the same move as efficient shared clarification.',
          commonMisread:
            'The parent is trying to embarrass me.',
          betterInterpretation:
            'The parent may be using the class communication channel to make expectations visible for everyone at once.',
          example:
            'A parent asks in the group why another class has more homework. That is WeChat accountability, not just curiosity.',
          contexts: ['parents', 'teacher communication', 'class groups'],
        },
        {
          id: 'parallel-tracks',
          term: 'Parallel tracks',
          partOfSpeech: 'noun phrase',
          learnerFriendlyDefinition:
            'When school and family want the same outcome for the child but operate through different assumptions and methods.',
          deeperMeaning:
            'The teacher may think she is protecting curriculum coherence while the parent thinks he is responsibly reinforcing learning. Both are trying to help, but on separate tracks that do not quite meet.',
          whyItMatters:
            'Conflict often comes less from opposite goals than from misaligned models of collaboration.',
          commonMisread:
            'The family and teacher fundamentally disagree about the child.',
          betterInterpretation:
            'They may share the same goal but differ on what partnership should look like.',
          example:
            'A parent brings extra practice materials; the teacher sees interference, the parent sees support. That is a parallel-tracks problem.',
          contexts: ['parents', 'teachers', 'home-school alignment'],
        },
        {
          id: 'virtue-orientation',
          term: 'Virtue orientation',
          partOfSpeech: 'noun phrase',
          learnerFriendlyDefinition:
            'A learning model that values diligence, effort, moral seriousness, and disciplined study.',
          deeperMeaning:
            'In Li’s framework, learning is not only about curiosity or voice. It is also about hard work, endurance, carefulness, and becoming the kind of person who studies properly.',
          whyItMatters:
            'A student who seems overly cautious may actually be showing seriousness, not disengagement.',
          commonMisread:
            'This child is passive or lacks originality.',
          betterInterpretation:
            'This child may have learned that correctness, effort, and restraint are part of being a good learner.',
          example:
            'A student hesitates to share until the answer is fully correct because she treats visible accuracy as part of moral academic seriousness.',
          contexts: ['students', 'parents', 'classroom culture'],
        },
        {
          id: 'legible-diligence',
          term: 'Legible diligence',
          partOfSpeech: 'noun phrase',
          learnerFriendlyDefinition:
            'Visible signs that a child and school are working seriously, such as practice, corrections, and structured routines.',
          deeperMeaning:
            'Parents may trust a school more when they can see disciplined learning in action, not only hear about abstract understanding.',
          whyItMatters:
            'A low-volume, inquiry-based class can feel under-serious if diligence is not made visible.',
          commonMisread:
            'The family only values quantity over quality.',
          betterInterpretation:
            'The family may need visible proof that effort and standards are real.',
          example:
            'A parent feels reassured by dictation checks or retrieval tasks because they make diligence legible.',
          contexts: ['parents', 'students', 'homework', 'assessment'],
        },
        {
          id: 'pragmatic-involvement',
          term: 'Pragmatic involvement',
          partOfSpeech: 'noun phrase',
          learnerFriendlyDefinition:
            'Parent involvement focused on solving practical school problems and protecting the child’s academic path.',
          deeperMeaning:
            'Contemporary urban Chinese parents are often actively involved both at home and at school, not as a performance of care only, but as a pragmatic response to competitive educational systems.',
          whyItMatters:
            'Teacher interpretations improve when they stop assuming high involvement is automatically mistrust or interference.',
          commonMisread:
            'This parent is hovering because they do not respect the teacher.',
          betterInterpretation:
            'This parent may believe active intervention is part of responsible educational stewardship.',
          example:
            'A father asks for more detail on pacing, practice, and expectations because he wants to avoid drift, not because he dislikes the teacher.',
          contexts: ['parents', 'teacher relationships', 'school expectations'],
        },
        {
          id: 'internationalised-school',
          term: 'Internationalised school',
          partOfSpeech: 'noun phrase',
          learnerFriendlyDefinition:
            'A school in China that combines international and national logics rather than operating as a purely foreign school.',
          deeperMeaning:
            'Many schools serving Chinese nationals now blend international curricula, local staffing, national regulation, and market logics. Teachers need to read these settings as hybrid, not purely expatriate spaces.',
          whyItMatters:
            'Assuming the school is culturally neutral or fully “international” can lead teachers to miss how local expectations shape everyday interactions.',
          commonMisread:
            'This is just an international school located in China.',
          betterInterpretation:
            'This is often a hybrid institution where national and international expectations coexist and sometimes collide.',
          example:
            'A colleague says, “Parents here think more like local school parents than international school parents.” The better frame may be that the school itself is internationalised.',
          contexts: ['colleagues', 'leadership', 'school identity'],
        },
        {
          id: 'host-national-expertise',
          term: 'Host-national expertise',
          partOfSpeech: 'noun phrase',
          learnerFriendlyDefinition:
            'The growing authority and practical knowledge of local Chinese teachers in internationalised schools.',
          deeperMeaning:
            'Recent research suggests foreign teachers are no longer automatically treated as the most authoritative figures. Local teachers often hold stronger curricular, linguistic, and institutional knowledge.',
          whyItMatters:
            'Foreign teachers can misread colleague dynamics if they assume “international” still means expatriate leadership by default.',
          commonMisread:
            'The local colleague is only handling the national side of the school.',
          betterInterpretation:
            'The local colleague may be central to both institutional legitimacy and pedagogical coherence.',
          example:
            'A Chinese co-teacher is the person parents trust most on standards, even in an English-medium program. That reflects host-national expertise.',
          contexts: ['colleagues', 'leadership', 'school operations'],
        },
        {
          id: 'reasoning-as-performance',
          term: 'Reasoning-as-performance',
          partOfSpeech: 'noun phrase',
          learnerFriendlyDefinition:
            'The expectation that students should explain their thinking out loud as evidence of learning.',
          deeperMeaning:
            'In many Western-style classrooms, articulation is treated as part of learning itself. Some students and families may see this as useful but secondary to mastery, or as socially risky.',
          whyItMatters:
            'Teachers may overread silence as weak understanding when the real issue is discomfort with performing unfinished thought publicly.',
          commonMisread:
            'If the child cannot explain, the child does not understand.',
          betterInterpretation:
            'The child may understand but not yet see oral explanation as the safest or most legitimate way to show it.',
          example:
            'A student solves the math elegantly but resists explaining in front of the class. That may be a reasoning-as-performance tension.',
          contexts: ['students', 'classroom discussion', 'assessment'],
        },
      ],
    },
    {
      id: 'applied-sort',
      type: 'scenario_sort',
      title: 'Applied Interpretation Check',
      instructions:
        'Choose the concept that best explains what is happening beneath the surface.',
      items: [
        {
          id: 'sort-1',
          prompt:
            'A parent posts in the class WeChat group asking whether your homework load is lighter than another class. What concept is most directly at work?',
          options: [
            'Virtue orientation',
            'WeChat accountability',
            'Reasoning-as-performance',
            'Host-national expertise',
          ],
          correctAnswer: 'WeChat accountability',
          feedback: {
            correct:
              'Yes. The issue is not just homework. It is a public, visible request for reassurance and standards clarification inside a group communication space.',
            incorrect:
              'Not quite. The clue is that the concern is being raised publicly in the parent group, where it becomes a shared trust question. That is WeChat accountability.',
          },
        },
        {
          id: 'sort-2',
          prompt:
            'A child solves every problem correctly but avoids explaining in class because he dislikes being singled out. Which concept best helps the teacher read the tension?',
          options: [
            'Reasoning-as-performance',
            'Internationalised school',
            'Pragmatic involvement',
            'Legible diligence',
          ],
          correctAnswer: 'Reasoning-as-performance',
          feedback: {
            correct:
              'Right. The issue is the mismatch between private mastery and public explanation as a required display of learning.',
            incorrect:
              'The core classroom tension here is not school structure or parent involvement. It is the expectation that students perform their reasoning publicly.',
          },
        },
        {
          id: 'sort-3',
          prompt:
            'A foreign teacher assumes parents will trust the international curriculum logic automatically, while local staff keep emphasizing national expectations and regulation. Which term is most useful?',
          options: [
            'Parallel tracks',
            'Internationalised school',
            'Virtue orientation',
            'Pragmatic involvement',
          ],
          correctAnswer: 'Internationalised school',
          feedback: {
            correct:
              'Yes. This is a school-identity issue: the institution is not purely international, but hybrid and locally shaped.',
            incorrect:
              'There may be misalignment, but the deepest clue is the hybrid nature of the school itself. The most useful concept is internationalised school.',
          },
        },
        {
          id: 'sort-4',
          prompt:
            'A parent brings extra materials and expects the teacher to see this as support, while the teacher hears interference. Which concept best captures the mismatch?',
          options: [
            'Host-national expertise',
            'Parallel tracks',
            'WeChat accountability',
            'Legible diligence',
          ],
          correctAnswer: 'Parallel tracks',
          feedback: {
            correct:
              'Exactly. Both adults may be aiming at the child’s success but operating with different assumptions about how partnership works.',
            incorrect:
              'The key issue is not messaging platform or hierarchy of expertise. It is shared purpose with mismatched assumptions. That is a parallel-tracks problem.',
          },
        },
      ],
    },
    {
      id: 'micro-dialogues',
      type: 'best_response',
      title: 'Micro-Dialogue Practice',
      instructions:
        'Choose the teacher reply that best applies the vocabulary with nuance.',
      items: [
        {
          id: 'dialogue-1',
          prompt:
            'Parent: "I know your class values deep thinking, but from home it is hard to see whether the work is really demanding enough." Which reply best addresses the concern?',
          options: [
            {
              id: 'a',
              text: 'More worksheets do not mean more learning, so I would encourage you not to compare classes.',
              isCorrect: false,
              rationale:
                'This may be true, but it does not address the parent’s need for legible diligence or legible rigor.',
            },
            {
              id: 'b',
              text: 'I understand. Let me show you where the rigor lives in the week and what evidence we use to check it, so the seriousness is visible rather than only assumed.',
              isCorrect: true,
              rationale:
                'This recognizes the trust-signal issue without surrendering the pedagogy.',
            },
            {
              id: 'c',
              text: 'If your child were struggling, I would tell you.',
              isCorrect: false,
              rationale:
                'This gives reassurance but still leaves the underlying standard invisible.',
            },
          ],
        },
        {
          id: 'dialogue-2',
          prompt:
            'Colleague: "Parents keep treating our school like a local private school, not a real international school." Which reply best reflects the research?',
          options: [
            {
              id: 'a',
              text: 'That is because they do not understand international education.',
              isCorrect: false,
              rationale:
                'This is too dismissive and ignores how hybrid many China-based schools now are.',
            },
            {
              id: 'b',
              text: 'It may be more accurate to say the school itself is internationalised, not culturally neutral. Parent expectations are reacting to the actual hybrid structure we work in.',
              isCorrect: true,
              rationale:
                'This applies the institutional nuance from recent China research more accurately.',
            },
            {
              id: 'c',
              text: 'We should simply stop listening to local expectations.',
              isCorrect: false,
              rationale:
                'That would make the school harder, not easier, to read accurately.',
            },
          ],
        },
        {
          id: 'dialogue-3',
          prompt:
            'Student: "I know the answer. I just don’t want to explain it in front of everyone." Which teacher response best reflects the vocabulary?',
          options: [
            {
              id: 'a',
              text: 'If you understand it, you must explain it publicly right now.',
              isCorrect: false,
              rationale:
                'This treats oral explanation as the only legitimate evidence without recognizing the performance tension.',
            },
            {
              id: 'b',
              text: 'Let’s find another way for you to show your reasoning first, then we can work on sharing it more publicly over time.',
              isCorrect: true,
              rationale:
                'This keeps explanation as a goal while reducing the immediate performance threat.',
            },
            {
              id: 'c',
              text: 'Fine, then I will just grade the final answer.',
              isCorrect: false,
              rationale:
                'This avoids the tension instead of helping the student bridge it.',
            },
          ],
        },
      ],
    },
    {
      id: 'mastery-check',
      type: 'checkpoint_quiz',
      title: 'Mastery Check',
      instructions:
        'Use these as checkpoint questions or a short end-of-activity quiz.',
      questions: [
        {
          id: 'mc-1',
          stem:
            'Which concept best explains why contemporary Chinese parent involvement may feel more direct and public than some teachers expect?',
          options: [
            'Reasoning-as-performance',
            'WeChat accountability',
            'Host-national expertise',
            'Virtue orientation',
          ],
          correctAnswer: 'WeChat accountability',
          explanation:
            'Digital communication platforms like WeChat help make questions faster, more collective, and more public, changing the feel of parent-teacher interaction.',
        },
        {
          id: 'mc-2',
          stem:
            'Why is “internationalised school” more accurate than simply saying “international school” in many China-based settings?',
          options: [
            'Because all such schools are run only by foreign staff',
            'Because these schools often fuse international and national curricula, local staffing, regulation, and market logic',
            'Because parents reject all foreign influence',
            'Because Chinese teachers never support international methods',
          ],
          correctAnswer:
            'Because these schools often fuse international and national curricula, local staffing, regulation, and market logic',
          explanation:
            'Recent research shows that many China-based schools are hybrids, not culturally neutral foreign enclaves.',
        },
        {
          id: 'mc-3',
          stem:
            'A teacher thinks a quiet student is underparticipating; the student thinks public explanation is risky and unnecessary. Which concept best clarifies the mismatch?',
          options: [
            'Pragmatic involvement',
            'Parallel tracks',
            'Reasoning-as-performance',
            'Legible diligence',
          ],
          correctAnswer: 'Reasoning-as-performance',
          explanation:
            'The mismatch is about how learning is supposed to be shown, not simply about whether the student understands.',
        },
      ],
    },
  ],
  jsxIntegrationNotes: {
    easiestRenderPattern:
      'Use the same renderer pattern as the India activity: vocab_cards for study, scenario_sort and best_response for formative application, checkpoint_quiz for scoring.',
    suggestedComponentProps: [
      'activity.title',
      'activity.subtitle',
      'activity.researchAnchors',
      'section.title',
      'section.instructions',
      'card.term',
      'card.learnerFriendlyDefinition',
      'card.commonMisread',
      'card.betterInterpretation',
      'item.prompt',
      'item.options',
      'item.feedback',
      'question.stem',
      'question.correctAnswer',
      'question.explanation',
    ],
    recommendedScoring:
      'Score scenario_sort and checkpoint_quiz. Treat vocab_cards and best_response as learning supports with answer-specific rationale.',
  },
};

export default chinaVocabLearningActivity;
