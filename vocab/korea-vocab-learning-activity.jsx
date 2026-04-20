export const koreaVocabLearningActivity = {
  id: 'korea-vocab-001',
  country: 'South Korea',
  title: 'South Korea Education Culture Vocabulary Lab',
  subtitle:
    'Critical concepts for understanding everyday interactions with students, parents, and colleagues in South Korean school contexts.',
  estimatedMinutes: 15,
  difficulty: 'intermediate',
  recommendedUse: [
    'Pre-simulation warm-up',
    'Dimension checkpoint activity',
    'Standalone vocabulary practice',
  ],
  learningGoals: [
    'Learn school-culture vocabulary that helps decode family and student behavior in South Korea.',
    'Interpret pressure, activism, and silence more accurately in daily school interactions.',
    'Apply the concepts in classroom, reform, and parent-communication situations.',
  ],
  researchAnchors: [
    {
      citation:
        'Jang, S. (2024). Capital mechanisms driving parental activism in South Korea: Perspectives from parentocracy, meritocracy, and a Bourdieusian analysis of capital.',
      doi: '10.1016/j.ijedudev.2024.103104',
      url: 'https://doi.org/10.1016/j.ijedudev.2024.103104',
      use: 'Parental activism, meritocracy, parentocracy, and how capital shapes school intervention.',
    },
    {
      citation:
        'Zhang, J., Fang, Z., & Rhee, G. S. (2025). Analysis of classroom silence behaviors among Chinese and Korean undergraduates.',
      doi: '10.3389/fpsyg.2025.1674145',
      url: 'https://doi.org/10.3389/fpsyg.2025.1674145',
      use: 'Classroom silence as adaptive participation rather than a simple lack of engagement; useful as a caution against overreading quietness.',
    },
    {
      citation:
        'Lim, H.-S. (2025). The Impact of Korea\'s "Hagwon" Culture on Academic Pressure Among High School Students.',
      doi: '10.56397/RAE.2025.01.01',
      url: 'https://www.paradigmpress.org/rae/article/view/1488',
      use: 'Private academy culture, academic pressure, family strategy, and why after-school learning shapes daily school life.',
    },
  ],
  facilitatorNote:
    'These concepts are not meant to reduce South Korean schooling to competition alone. The goal is to help teachers see how legibility, fairness, and preparedness often shape what students and families do.',
  sections: [
    {
      id: 'flashcards',
      type: 'vocab_cards',
      title: 'Key Terms',
      instructions:
        'Let the learner predict the meaning before revealing the applied interpretation and school example.',
      cards: [
        {
          id: 'meritocratic-legibility',
          term: 'Meritocratic legibility',
          partOfSpeech: 'noun phrase',
          learnerFriendlyDefinition:
            'The need for achievement to be visible, comparable, and understandable.',
          deeperMeaning:
            'In high-pressure school environments, families often want clear signals of where a child stands. When those signals disappear, anxiety rises even if the pedagogy is thoughtful.',
          whyItMatters:
            'A reform may fail not because parents hate innovation, but because the new model is harder to read.',
          commonMisread:
            'Parents only care about scores because they are conservative.',
          betterInterpretation:
            'Parents may be protecting fairness and predictability in a competitive system.',
          example:
            'Parents push back on replacing test week because they cannot see what will replace the lost benchmark. That is meritocratic legibility.',
          contexts: ['parents', 'students', 'reform'],
        },
        {
          id: 'proactive-parenting-logic',
          term: 'Proactive parenting logic',
          partOfSpeech: 'noun phrase',
          learnerFriendlyDefinition:
            'The belief that good parents should intervene early and actively in schooling.',
          deeperMeaning:
            'Parental activism can reflect a normalized view that responsible care means gathering information, mobilizing networks, and influencing school conditions before a problem deepens.',
          whyItMatters:
            'Teachers may interpret organized parent action as overreach when parents experience it as responsible stewardship.',
          commonMisread:
            'This parent group is trying to control everything.',
          betterInterpretation:
            'This parent group may believe active intervention is part of proper educational care.',
          example:
            'A parent shares a draft petition before the coffee morning to build support around an assessment reform. That reflects proactive parenting logic.',
          contexts: ['parents', 'school communication', 'policy'],
        },
        {
          id: 'hagwon-ecology',
          term: 'Hagwon ecology',
          partOfSpeech: 'noun phrase',
          learnerFriendlyDefinition:
            'The wider learning system formed by school, private academies, tutoring, and family strategy.',
          deeperMeaning:
            'For many students, school is only one part of the learning environment. Hagwons shape pacing, pressure, confidence, and family expectations long before the teacher sees the child in class.',
          whyItMatters:
            'A classroom task can land very differently for a student whose evenings are already structured by private academies and test preparation.',
          commonMisread:
            'This child is simply overbooked or oversupported.',
          betterInterpretation:
            'The child may be navigating multiple overlapping systems of expectation at once.',
          example:
            'A student is calm in school but exhausted, benchmark-focused, and unable to experiment because hagwon work dominates evenings. That is hagwon ecology.',
          contexts: ['students', 'parents', 'school-home alignment'],
        },
        {
          id: 'prepared-participation',
          term: 'Prepared participation',
          partOfSpeech: 'noun phrase',
          learnerFriendlyDefinition:
            'Speaking when ready, accurate, and appropriately prepared rather than speaking spontaneously.',
          deeperMeaning:
            'Not all quietness reflects disengagement. Some students participate strategically, preferring to speak once they can do so correctly and responsibly.',
          whyItMatters:
            'Teachers who value fast visible thinking may overread caution as weak confidence or low engagement.',
          commonMisread:
            'This student has nothing to contribute.',
          betterInterpretation:
            'This student may be trying to contribute in a way that feels competent and respectful.',
          example:
            'A student waits until the teacher calls or until the answer is solid before speaking. That may be prepared participation.',
          contexts: ['students', 'classroom discussion', 'assessment'],
        },
        {
          id: 'quiet-competence',
          term: 'Quiet competence',
          partOfSpeech: 'noun phrase',
          learnerFriendlyDefinition:
            'Strong performance that is expressed with restraint rather than visible verbal confidence.',
          deeperMeaning:
            'A student can be highly capable while still disliking public display, rough thinking aloud, or frequent self-assertion.',
          whyItMatters:
            'This helps teachers distinguish low visibility from low understanding.',
          commonMisread:
            'If the student is not leading discussion, the student is less able.',
          betterInterpretation:
            'The student may be highly able but operating through a lower-display style of competence.',
          example:
            'A student earns top marks, contributes selectively, and prefers certainty before speaking. That is quiet competence.',
          contexts: ['students', 'classroom culture'],
        },
        {
          id: 'reform-opacity',
          term: 'Reform opacity',
          partOfSpeech: 'noun phrase',
          learnerFriendlyDefinition:
            'When a school change may be well intended but the academic logic and evidence are too unclear for families to trust.',
          deeperMeaning:
            'Parents may not oppose innovation itself. They may oppose not being able to see how fairness, standards, and comparability are protected under the new model.',
          whyItMatters:
            'A reform that feels pedagogically rich to teachers can still feel risky and underdefined to families.',
          commonMisread:
            'Parents are anti-change.',
          betterInterpretation:
            'Parents may be reacting to opacity, not to innovation itself.',
          example:
            'A school replaces one test week with a project but cannot explain moderation or evidence clearly. That is reform opacity.',
          contexts: ['parents', 'leadership', 'school change'],
        },
        {
          id: 'capital-backed-activism',
          term: 'Capital-backed activism',
          partOfSpeech: 'noun phrase',
          learnerFriendlyDefinition:
            'Parent influence strengthened by social networks, resources, knowledge, and confidence in how to intervene.',
          deeperMeaning:
            'Not all parents can shape school decisions equally. Some can organize faster and speak more effectively because they have more cultural, social, or economic capital.',
          whyItMatters:
            'This helps teachers distinguish a general "parent mood" from activism driven by specific networks and resources.',
          commonMisread:
            'All parents feel and act this way equally.',
          betterInterpretation:
            'Some parent groups have greater capacity to mobilize and influence school norms than others.',
          example:
            'A small, well-connected group quickly organizes a clear campaign around a reform. That is capital-backed activism.',
          contexts: ['parents', 'leadership', 'equity'],
        },
        {
          id: 'fairness-signal',
          term: 'Fairness signal',
          partOfSpeech: 'noun phrase',
          learnerFriendlyDefinition:
            'A recognizable sign that standards are shared and not arbitrary.',
          deeperMeaning:
            'Families often trust familiar structures because they signal that success is still trackable and not dependent on hidden interpretation.',
          whyItMatters:
            'A test, rubric, moderated sample, or common benchmark can function as a fairness signal even when it is not the richest form of learning evidence.',
          commonMisread:
            'Families only care about tradition.',
          betterInterpretation:
            'Families may be looking for reassurance that the system remains fair and readable.',
          example:
            'Parents accept a project more readily once the school shares common criteria and moderated exemplars. Those are fairness signals.',
          contexts: ['parents', 'students', 'assessment'],
        },
      ],
    },
    {
      id: 'applied-sort',
      type: 'scenario_sort',
      title: 'Applied Interpretation Check',
      instructions:
        'Choose the concept that best explains the hidden dynamic.',
      items: [
        {
          id: 'sort-1',
          prompt:
            'Parents object less to a new project week itself than to not knowing how standards and fairness will be protected. Which concept fits best?',
          options: [
            'Prepared participation',
            'Reform opacity',
            'Quiet competence',
            'Hagwon ecology',
          ],
          correctAnswer: 'Reform opacity',
          feedback: {
            correct:
              'Yes. The problem is not innovation alone, but the school\'s failure to make the replacement legible and trustworthy.',
            incorrect:
              'The key issue here is not student talk style or private tutoring. It is that the reform feels underexplained. That is reform opacity.',
          },
        },
        {
          id: 'sort-2',
          prompt:
            'A student does excellent work but rarely speaks until he is sure the answer is right. What concept best helps the teacher interpret this accurately?',
          options: [
            'Capital-backed activism',
            'Prepared participation',
            'Fairness signal',
            'Proactive parenting logic',
          ],
          correctAnswer: 'Prepared participation',
          feedback: {
            correct:
              'Right. The student\'s restraint may reflect a prepared, accuracy-first participation style rather than weak engagement.',
            incorrect:
              'This is a classroom participation issue, not a parent-network or policy issue. Prepared participation is the best fit.',
          },
        },
        {
          id: 'sort-3',
          prompt:
            'A parent petition gains traction fastest in affluent, high-pressure school districts where families have the confidence and networks to mobilize. Which concept fits best?',
          options: [
            'Capital-backed activism',
            'Quiet competence',
            'Hagwon ecology',
            'Fairness signal',
          ],
          correctAnswer: 'Capital-backed activism',
          feedback: {
            correct:
              'Yes. The dynamic is not just anxiety, but the unequal capacity to organize and influence school decisions.',
            incorrect:
              'The district-level organizing power is the clue here. The best concept is capital-backed activism.',
          },
        },
        {
          id: 'sort-4',
          prompt:
            'A child\'s teacher notices that every classroom task is being interpreted through after-school academies, benchmarks, and family strategy. Which term is most useful?',
          options: [
            'Hagwon ecology',
            'Reform opacity',
            'Prepared participation',
            'Meritocratic legibility',
          ],
          correctAnswer: 'Hagwon ecology',
          feedback: {
            correct:
              'Exactly. The term captures how school life is nested inside a wider private-education ecosystem.',
            incorrect:
              'The strongest clue is the overlap between school and academy life. That is hagwon ecology.',
          },
        },
      ],
    },
    {
      id: 'micro-dialogues',
      type: 'best_response',
      title: 'Micro-Dialogue Practice',
      instructions:
        'Choose the response that shows the strongest research-informed interpretation.',
      items: [
        {
          id: 'dialogue-1',
          prompt:
            'Parent: "We are not against the project. We just need to know how it will be fair." Which teacher reply is strongest?',
          options: [
            {
              id: 'a',
              text: 'Projects are better for the future, so I hope families can move beyond test thinking.',
              isCorrect: false,
              rationale:
                'This moralizes the issue and dismisses the family\'s need for fairness signals.',
            },
            {
              id: 'b',
              text: 'I understand. Let me show you the common criteria, moderation process, and what evidence students will receive so the standards are visible.',
              isCorrect: true,
              rationale:
                'This directly addresses meritocratic legibility and reform opacity without abandoning the reform.',
            },
            {
              id: 'c',
              text: 'Leadership made this decision, so there is not much teachers can do.',
              isCorrect: false,
              rationale:
                'This increases opacity and weakens trust in the school\'s interpretive capacity.',
            },
          ],
        },
        {
          id: 'dialogue-2',
          prompt:
            'Colleague: "That student never speaks. He must not be engaging." Which response best reflects the vocabulary?',
          options: [
            {
              id: 'a',
              text: 'Not necessarily. He may be showing prepared participation or quiet competence, so we should look at accuracy, timing, and risk tolerance before we call it disengagement.',
              isCorrect: true,
              rationale:
                'This is the most nuanced and research-aligned interpretation of visible quietness.',
            },
            {
              id: 'b',
              text: 'Yes, students need to learn to participate properly.',
              isCorrect: false,
              rationale:
                'This jumps too quickly from low visibility to low engagement.',
            },
            {
              id: 'c',
              text: 'It is probably because his parents are too involved.',
              isCorrect: false,
              rationale:
                'That may sometimes matter, but it is not the best first interpretation of classroom quietness.',
            },
          ],
        },
        {
          id: 'dialogue-3',
          prompt:
            'Parent group organizer: "We had to act early because schools don\'t always see how reforms affect high-performing children." Which reply best shows understanding without surrender?',
          options: [
            {
              id: 'a',
              text: 'That kind of organized pressure is inappropriate.',
              isCorrect: false,
              rationale:
                'This names pressure but misses the underlying parenting logic and will likely escalate defensiveness.',
            },
            {
              id: 'b',
              text: 'I can see that families are trying to protect legibility and fairness. Let me focus on making the school\'s evidence clearer rather than assuming the concern is anti-change.',
              isCorrect: true,
              rationale:
                'This acknowledges proactive parenting logic and shifts toward a constructive translation move.',
            },
            {
              id: 'c',
              text: 'Then perhaps the reform should just be cancelled.',
              isCorrect: false,
              rationale:
                'This gives up too much instead of solving the interpretation problem.',
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
        'Use these as checkpoint questions or as a short end-of-activity quiz.',
      questions: [
        {
          id: 'mc-1',
          stem:
            'What is the best explanation for why some parents resist a reform only after a familiar benchmark disappears?',
          options: [
            'They reject all innovation',
            'They fear reform opacity and loss of fairness signals',
            'They dislike teachers personally',
            'They want students to avoid collaboration',
          ],
          correctAnswer:
            'They fear reform opacity and loss of fairness signals',
          explanation:
            'The problem is often not reform itself, but losing a visible, trusted way to read performance and fairness.',
        },
        {
          id: 'mc-2',
          stem:
            'Which concept best explains why a highly capable student might still remain very quiet in class discussion?',
          options: [
            'Prepared participation',
            'Capital-backed activism',
            'Hagwon ecology',
            'Meritocratic legibility',
          ],
          correctAnswer: 'Prepared participation',
          explanation:
            'This term captures the idea that some students participate strategically and accurately rather than spontaneously.',
        },
        {
          id: 'mc-3',
          stem:
            'Why is "proactive parenting logic" a better term than simply "pushy parents" in many Korean school situations?',
          options: [
            'Because it recognizes intervention as a form of responsible care inside a competitive system',
            'Because all parents intervene in the same way',
            'Because teachers must accept all parent demands',
            'Because competition no longer matters in Korean education',
          ],
          correctAnswer:
            'Because it recognizes intervention as a form of responsible care inside a competitive system',
          explanation:
            'The term improves interpretation by locating intervention inside broader social expectations rather than inside stereotype.',
        },
      ],
    },
  ],
  jsxIntegrationNotes: {
    easiestRenderPattern:
      'Reuse the India vocabulary renderer shape: flashcards first, scenario_sort next, best_response after that, and checkpoint_quiz last for scoring.',
    suggestedComponentProps: [
      'activity.title',
      'activity.subtitle',
      'activity.researchAnchors',
      'section.title',
      'section.instructions',
      'card.term',
      'card.deeperMeaning',
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
      'Score scenario_sort and checkpoint_quiz. Leave vocab cards and micro-dialogues formative but answer-aware.',
  },
};

export default koreaVocabLearningActivity;
