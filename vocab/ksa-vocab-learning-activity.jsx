export const ksaVocabLearningActivity = {
  id: 'ksa-vocab-001',
  country: 'Kingdom of Saudi Arabia',
  title: 'Saudi Arabia Education Culture Vocabulary Lab',
  subtitle:
    'Critical concepts for understanding daily school interactions in Saudi private and international school contexts.',
  estimatedMinutes: 15,
  difficulty: 'intermediate',
  recommendedUse: [
    'Pre-simulation warm-up',
    'Dimension checkpoint activity',
    'Standalone vocabulary practice',
  ],
  learningGoals: [
    'Learn key concepts for interpreting parent, student, and colleague behavior in Saudi school settings.',
    'Understand how school language, cultural fit, and educational aspiration interact.',
    'Practice translating values-heavy school discourse into clearer classroom meaning.',
  ],
  researchAnchors: [
    {
      citation:
        'Hammad, W., & Shah, S. (2018). Dissonance Between the "International" and the Conservative "National": Challenges Facing School Leaders in International Schools in Saudi Arabia.',
      doi: '10.1177/0013161X18785864',
      url: 'https://doi.org/10.1177/0013161X18785864',
      use: 'Institutional dissonance, international-school language, and the need to interpret school ideals within local expectations.',
    },
    {
      citation:
        'Alothman, H. F., Bashatah, L., Aldossari, A. S., et al. (2024). How Saudi parents rationalize the choice of school for their children.',
      doi: '10.1057/s41599-024-03867-9',
      url: 'https://doi.org/10.1057/s41599-024-03867-9',
      use: 'School choice, cultural and religious identity, English, wellbeing, pedagogy, and parental rationality in K-12 private schooling.',
    },
    {
      citation:
        'Alsaawi, A., & Almulhim, F. (2024). Impact of the English-Only Policy on Learners at International Schools from the Perspective of Teachers and Parents: A Sociocultural Study in the Saudi Context.',
      doi: '10.32601/ejal.10201',
      url: 'https://ejal.info/article-view?id=723',
      use: 'English-only policy, identity, sociocultural concerns, and why language decisions carry social meaning beyond instruction.',
    },
  ],
  facilitatorNote:
    'These terms aim to improve interpretation, not to frame local concerns as resistance. The goal is to understand how aspiration, identity, and school language interact in daily practice.',
  sections: [
    {
      id: 'flashcards',
      type: 'vocab_cards',
      title: 'Key Terms',
      instructions:
        'Use the cards as reveal-based learning: predict first, then compare your instinct with the research-backed interpretation.',
      cards: [
        {
          id: 'cultural-fit',
          term: 'Cultural fit',
          partOfSpeech: 'noun phrase',
          learnerFriendlyDefinition:
            'The extent to which a school feels educationally strong without feeling socially or morally out of alignment.',
          deeperMeaning:
            'In Saudi private and international schooling, families often evaluate schools through both aspiration and fit. A school can be attractive because of English, pedagogy, and confidence-building while still being judged on whether it aligns with cultural and religious expectations.',
          whyItMatters:
            'A parent can want "modern" schooling and still ask careful questions about language, values, or boundaries.',
          commonMisread:
            'The parent is against global education.',
          betterInterpretation:
            'The parent may be trying to hold future opportunity and cultural continuity together at the same time.',
          example:
            'A mother likes the school\'s English program but asks what "student voice" really means in practice. She is testing cultural fit.',
          contexts: ['parents', 'leadership', 'school choice'],
        },
        {
          id: 'translation-work',
          term: 'Translation work',
          partOfSpeech: 'noun phrase',
          learnerFriendlyDefinition:
            'The job of turning broad school values language into clear, bounded, practical meaning.',
          deeperMeaning:
            'Words like voice, agency, leadership, and openness may sound straightforward inside an international-school culture. Families may need those words translated into concrete classroom practice before they feel trustworthy.',
          whyItMatters:
            'Without translation work, parents may be left to infer meanings the school never intended.',
          commonMisread:
            'Parents just need more reassurance.',
          betterInterpretation:
            'Parents may need clearer interpretation, not only calmer tone.',
          example:
            'A teacher explains that "student voice" means evidence-based proposals about playground routines, not children challenging family authority. That is translation work.',
          contexts: ['parents', 'teachers', 'leadership'],
        },
        {
          id: 'english-plus-identity',
          term: 'English-plus-identity',
          partOfSpeech: 'noun phrase',
          learnerFriendlyDefinition:
            'The idea that families may want strong English without wanting Arabic or cultural identity to feel diminished.',
          deeperMeaning:
            'English is often valued for mobility, confidence, and opportunity, but not always as a substitute for Arabic, religion, or local belonging. Tension appears when school language suggests hierarchy rather than addition.',
          whyItMatters:
            'An English-forward routine may be interpreted as a values issue if teachers do not signal that other identities remain legitimate and respected.',
          commonMisread:
            'Parents are afraid of English or global exposure.',
          betterInterpretation:
            'Parents may want expansion without erasure.',
          example:
            'A parent supports English-medium instruction but worries when a child starts speaking as if Arabic is "not for school." That is an English-plus-identity tension.',
          contexts: ['parents', 'students', 'language policy'],
        },
        {
          id: 'bounded-voice',
          term: 'Bounded voice',
          partOfSpeech: 'noun phrase',
          learnerFriendlyDefinition:
            'Student participation that is encouraged within clear relational and moral boundaries.',
          deeperMeaning:
            'Many families are open to children speaking, presenting, and solving problems, but want to know what kinds of voice are being cultivated and within what limits.',
          whyItMatters:
            'Teachers may assume "more voice" is self-evidently positive when parents are really asking what the voice is for and how it is framed.',
          commonMisread:
            'The family is against agency or critical thinking.',
          betterInterpretation:
            'The family may support agency but want it bounded and explained.',
          example:
            'A parent asks whether a proposal task means students are learning to improve school life or to challenge adults more broadly. That is a bounded-voice question.',
          contexts: ['parents', 'students', 'classroom discourse'],
        },
        {
          id: 'values-readability',
          term: 'Values readability',
          partOfSpeech: 'noun phrase',
          learnerFriendlyDefinition:
            'How easy it is for families to understand what a school\'s values language actually means in daily life.',
          deeperMeaning:
            'A school can have strong values branding, but if the link between slogan and practice is vague, parents may experience the school as morally unclear rather than merely ambitious.',
          whyItMatters:
            'Families often need to see what ideals look like in ordinary classroom routines before they trust them.',
          commonMisread:
            'The parent is overthinking school language.',
          betterInterpretation:
            'The parent may be trying to decode whether the school\'s stated values align with lived practice.',
          example:
            'A family is comfortable once "leadership" is explained through respectful peer mentoring rather than abstract personal freedom. That is values readability.',
          contexts: ['parents', 'leadership', 'school communications'],
        },
        {
          id: 'private-school-rationality',
          term: 'Private-school rationality',
          partOfSpeech: 'noun phrase',
          learnerFriendlyDefinition:
            'The practical logic families use when choosing schools: culture, wellbeing, English, pedagogy, location, cost, and outcomes together.',
          deeperMeaning:
            'Parents are often balancing multiple factors rather than making irrational or purely symbolic choices. School choice can be highly reasoned even when the factors span identity, academics, and family logistics.',
          whyItMatters:
            'This helps teachers interpret parent decisions as structured and rational rather than contradictory.',
          commonMisread:
            'Families choose schools mostly for prestige.',
          betterInterpretation:
            'Families may be making complex tradeoffs among fit, opportunity, wellbeing, and outcomes.',
          example:
            'A family accepts higher fees because the school offers strong English, strong Islamic studies, and a safer emotional climate. That reflects private-school rationality.',
          contexts: ['parents', 'admissions', 'leadership'],
        },
        {
          id: 'institutional-dissonance',
          term: 'Institutional dissonance',
          partOfSpeech: 'noun phrase',
          learnerFriendlyDefinition:
            'A mismatch between what the school\'s international ethos says and what local families hear or expect.',
          deeperMeaning:
            'Tension in Saudi international schools is often not located in one parent or one teacher. It sits in the institution itself, where imported educational language meets local moral and cultural expectations.',
          whyItMatters:
            'Teachers can stop treating every tension as a personal misunderstanding and start recognizing the wider institutional context.',
          commonMisread:
            'This parent is unusually difficult.',
          betterInterpretation:
            'The conflict may be built into the school\'s operating language and identity.',
          example:
            'Several parents interpret "student leadership" very differently from leadership\'s intended meaning. That suggests institutional dissonance.',
          contexts: ['leadership', 'teachers', 'parents'],
        },
        {
          id: 'respectful-clarification',
          term: 'Respectful clarification',
          partOfSpeech: 'noun phrase',
          learnerFriendlyDefinition:
            'A communication style that explains clearly without becoming defensive or dismissive.',
          deeperMeaning:
            'Because some school tensions are really interpretive, the strongest teacher move is often not to reassure vaguely or argue ideals, but to clarify purpose, examples, and limits in a respectful way.',
          whyItMatters:
            'This is often the bridge between school confidence and family trust.',
          commonMisread:
            'If I explain too much, I am giving ground.',
          betterInterpretation:
            'Clear explanation can protect the school\'s purpose while reducing unnecessary anxiety.',
          example:
            'A teacher explains exactly what students will and will not be asked to do in a values-themed week. That is respectful clarification.',
          contexts: ['parents', 'teacher communication', 'leadership'],
        },
      ],
    },
    {
      id: 'applied-sort',
      type: 'scenario_sort',
      title: 'Applied Interpretation Check',
      instructions:
        'Pick the concept that best explains the tension underneath each situation.',
      items: [
        {
          id: 'sort-1',
          prompt:
            'A parent says, "I support the school\'s confidence-building, but I want to understand the boundaries of what you mean by student voice." Which concept best fits?',
          options: [
            'Bounded voice',
            'Private-school rationality',
            'Respectful clarification',
            'English-plus-identity',
          ],
          correctAnswer: 'Bounded voice',
          feedback: {
            correct:
              'Yes. The parent is not rejecting participation itself; the question is about how voice is framed and bounded.',
            incorrect:
              'The strongest clue is that the parent is asking what kind of participation is being cultivated and within what limits. That is bounded voice.',
          },
        },
        {
          id: 'sort-2',
          prompt:
            'A school poster says "Speak up. Lead change." Families seem uneasy until teachers explain what those words mean in actual Year 5 tasks. Which concept best captures the problem?',
          options: [
            'Values readability',
            'Institutional dissonance',
            'Private-school rationality',
            'Respectful clarification',
          ],
          correctAnswer: 'Values readability',
          feedback: {
            correct:
              'Right. The key issue is whether the school\'s values language is readable and interpretable in daily practice.',
            incorrect:
              'There may be institutional tension too, but the immediate problem is that the values language is hard to read. That is values readability.',
          },
        },
        {
          id: 'sort-3',
          prompt:
            'A family wants strong English but becomes concerned when the child starts speaking as if Arabic is academically inferior. Which concept best fits?',
          options: [
            'Institutional dissonance',
            'Respectful clarification',
            'English-plus-identity',
            'Cultural fit',
          ],
          correctAnswer: 'English-plus-identity',
          feedback: {
            correct:
              'Exactly. The tension is not about English alone, but about whether English is being layered onto identity or replacing it symbolically.',
            incorrect:
              'The most direct concept here is English-plus-identity, because the concern centers on addition versus hierarchy.',
          },
        },
        {
          id: 'sort-4',
          prompt:
            'A teacher treats a parent\'s question as a personal challenge, but the same concern keeps surfacing across families because it is built into the school\'s rhetoric. Which concept is most useful?',
          options: [
            'Institutional dissonance',
            'Bounded voice',
            'Private-school rationality',
            'Respectful clarification',
          ],
          correctAnswer: 'Institutional dissonance',
          feedback: {
            correct:
              'Yes. The pattern suggests a school-wide gap between ethos language and how it is being received.',
            incorrect:
              'The clue is that the same interpretive tension keeps recurring beyond one family. That points to institutional dissonance.',
          },
        },
      ],
    },
    {
      id: 'micro-dialogues',
      type: 'best_response',
      title: 'Micro-Dialogue Practice',
      instructions:
        'Choose the strongest response for building trust without flattening the local context.',
      items: [
        {
          id: 'dialogue-1',
          prompt:
            'Parent: "I just want to understand whether this activity is about practical school improvement or about children questioning adults more generally." Which response is strongest?',
          options: [
            {
              id: 'a',
              text: 'Please do not worry. It is just a school activity.',
              isCorrect: false,
              rationale:
                'This offers reassurance but avoids the actual interpretive question.',
            },
            {
              id: 'b',
              text: 'That is a fair question. In this class, students identify practical school-life issues and propose respectful, evidence-based solutions within clear teacher guidance.',
              isCorrect: true,
              rationale:
                'This performs respectful clarification and improves values readability without becoming defensive.',
            },
            {
              id: 'c',
              text: 'Modern schools everywhere now encourage students to challenge norms.',
              isCorrect: false,
              rationale:
                'This intensifies the values tension instead of clarifying the activity.',
            },
          ],
        },
        {
          id: 'dialogue-2',
          prompt:
            'Colleague: "These parents say they want international schooling, but then they worry about the language we use." Which reply best reflects the research?',
          options: [
            {
              id: 'a',
              text: 'That is contradictory, but parents often are.',
              isCorrect: false,
              rationale:
                'This dismisses the complex balancing logic in Saudi school choice.',
            },
            {
              id: 'b',
              text: 'It may be more accurate to say they want strong opportunity and strong cultural fit at the same time. The tension appears when our values language is less clear than we think.',
              isCorrect: true,
              rationale:
                'This captures both private-school rationality and cultural fit without caricature.',
            },
            {
              id: 'c',
              text: 'We should stop using values language altogether.',
              isCorrect: false,
              rationale:
                'That avoids the translation problem rather than solving it.',
            },
          ],
        },
        {
          id: 'dialogue-3',
          prompt:
            'Student: "Are we supposed to say adults are wrong if we have a better idea?" Which response best applies the vocabulary?',
          options: [
            {
              id: 'a',
              text: 'Yes, if you disagree you should always say so strongly.',
              isCorrect: false,
              rationale:
                'This removes boundaries and increases the chance of misinterpretation.',
            },
            {
              id: 'b',
              text: 'You are allowed to notice problems and propose better ideas respectfully. In this activity, voice means helping improve school life, not treating adults like opponents.',
              isCorrect: true,
              rationale:
                'This applies bounded voice clearly and keeps the task educationally strong.',
            },
            {
              id: 'c',
              text: 'No, it is safer not to question anything.',
              isCorrect: false,
              rationale:
                'This overcorrects and empties the activity of its purpose.',
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
        'Use these as checkpoint items or a short end-of-activity quiz.',
      questions: [
        {
          id: 'mc-1',
          stem:
            'Why is "translation work" such an important teacher skill in Saudi international school settings?',
          options: [
            'Because parents never understand school language',
            'Because broad international-school values terms often need practical interpretation before families can trust them',
            'Because schools should hide their values',
            'Because all parents prefer detailed policy documents',
          ],
          correctAnswer:
            'Because broad international-school values terms often need practical interpretation before families can trust them',
          explanation:
            'The issue is not parental deficiency. It is that abstract values language can carry multiple meanings unless translated into concrete school practice.',
        },
        {
          id: 'mc-2',
          stem:
            'A parent wants strong English but also worries about Arabic feeling devalued. Which concept best helps the teacher interpret this without caricature?',
          options: [
            'Bounded voice',
            'Cultural fit',
            'English-plus-identity',
            'Respectful clarification',
          ],
          correctAnswer: 'English-plus-identity',
          explanation:
            'The concern is about addition versus replacement: gaining English without attaching a hierarchy to language and belonging.',
        },
        {
          id: 'mc-3',
          stem:
            'What does "institutional dissonance" help teachers see more clearly?',
          options: [
            'That the problem is always one difficult parent',
            'That some recurring tensions are built into the school\'s ethos language and context, not just into individual personalities',
            'That cultural fit is impossible',
            'That leadership and teachers should never change their wording',
          ],
          correctAnswer:
            'That some recurring tensions are built into the school\'s ethos language and context, not just into individual personalities',
          explanation:
            'This concept shifts interpretation from blame to context, which often leads to better teacher responses.',
        },
      ],
    },
  ],
  jsxIntegrationNotes: {
    easiestRenderPattern:
      'Render the activity with the same section-type mapping as the India and Korea files. The structure is intentionally parallel.',
    suggestedComponentProps: [
      'activity.title',
      'activity.subtitle',
      'activity.researchAnchors',
      'section.title',
      'section.instructions',
      'card.term',
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
      'Score scenario_sort and checkpoint_quiz. Keep flashcards and micro-dialogues formative with rationale reveal.',
  },
};

export default ksaVocabLearningActivity;
