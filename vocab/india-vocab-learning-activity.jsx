export const indiaVocabLearningActivity = {
  id: 'india-vocab-001',
  country: 'India',
  title: 'India Education Culture Vocabulary Lab',
  subtitle:
    'Critical vocabulary for understanding day-to-day school interactions with students, parents, and colleagues in Indian school settings.',
  estimatedMinutes: 15,
  difficulty: 'intermediate',
  recommendedUse: [
    'Pre-simulation warm-up',
    'Dimension checkpoint activity',
    'Standalone vocabulary practice',
  ],
  learningGoals: [
    'Learn high-utility cultural vocabulary that shows up in Indian school interactions.',
    'Distinguish between superficial misreads and deeper school-culture dynamics.',
    'Apply vocabulary to classroom, parent, and colleague situations rather than memorizing definitions only.',
  ],
  researchAnchors: [
    {
      citation:
        'Munthe, E., & Westergård, E. (2023). Parents\', teachers\', and students\' roles in parent-teacher conferences: A systematic review and meta-synthesis. Teaching and Teacher Education, 136, 104355.',
      doi: '10.1016/j.tate.2023.104355',
      use: 'Parent-teacher responsiveness, follow-through, school credibility, and why polite reassurance without visible action breaks trust.',
    },
    {
      citation:
        'Ullah, A., Mukherjee, A., & Middendorf, G. (2025). School preferences of middle-class Indians: a sociological analysis of the decision-making process.',
      doi: '10.1007/s44217-025-00617-0',
      use: 'Visible rigor, school brand, English as capital, and how families read schools through trust signals.',
    },
    {
      citation:
        "Babu, S. S., & Mahajan, A. (2021). Branding an 'Inter'national school: Fusing 'Indian values' with a global diploma.",
      doi: '10.1080/09620214.2020.1853589',
      use: 'The global-plus-rootedness promise of Indian international schools and the gap between branding and lived school experience.',
    },
    {
      citation:
        'Gurney, E. (2017). Choosing schools, choosing selves: exploring the influence of parental identity and biography on the school choice process in Delhi, India.',
      doi: '10.1080/09620214.2017.1279560',
      use: 'School choice as identity work, not just a transaction.',
    },
    {
      citation:
        'Parikh, R., et al. (2019). "It is like a mind attack": stress and coping among urban school-going adolescents in India.',
      doi: '10.1186/s40359-019-0306-z',
      use: 'Academic pressure, emotional cost, and how seriousness can narrow student risk-taking.',
    },
  ],
  facilitatorNote:
    'These terms are not presented as timeless facts about all Indian families or schools. They are high-value interpretive concepts that help teachers read recurring patterns in Indian private, international, and aspirational school contexts without collapsing into stereotype.',
  sections: [
    {
      id: 'flashcards',
      type: 'vocab_cards',
      title: 'Key Terms',
      instructions:
        'Invite teachers to read each term, guess what it means in school life, then reveal the definition and applied example.',
      cards: [
        {
          id: 'legible-rigor',
          term: 'Legible rigor',
          partOfSpeech: 'noun phrase',
          learnerFriendlyDefinition:
            'Academic seriousness that parents and students can actually see, not just trust abstractly.',
          deeperMeaning:
            'In many Indian school contexts, rigor is not only about high expectations. It is also about whether those expectations are visible through homework, feedback, benchmarks, teacher responsiveness, or other recognizable signs.',
          whyItMatters:
            'A teacher may believe a class is rigorous because the thinking is strong. A parent may still worry if the rigor is hard to read from home.',
          commonMisread:
            'This parent only cares about marks or rote learning.',
          betterInterpretation:
            'This parent may be asking for proof that the school is serious enough to justify trust and investment.',
          example:
            'A mother says, "The exhibition was nice, but how do I know where my child actually stands?" She is asking for legible rigor.',
          contexts: ['parents', 'students', 'school leadership'],
        },
        {
          id: 'school-choice-as-identity-work',
          term: 'School choice as identity work',
          partOfSpeech: 'noun phrase',
          learnerFriendlyDefinition:
            'Choosing a school is also a way families express who they are and what future they want.',
          deeperMeaning:
            'For many families, choosing a school is not just a practical enrollment decision. It can express aspiration, class positioning, values, and the kind of childhood or future they believe is right.',
          whyItMatters:
            'Criticism of a school choice can feel personal because the choice often carries family biography, sacrifice, and identity.',
          commonMisread:
            'The parent is overinvested in branding.',
          betterInterpretation:
            'The school may stand in for the family’s hopes about mobility, respectability, and future belonging.',
          example:
            'A parent chose an international school because it promised "global exposure with Indian values." That is school choice as identity work.',
          contexts: ['parents', 'leadership', 'admissions'],
        },
        {
          id: 'follow-through',
          term: 'Follow-through',
          partOfSpeech: 'noun',
          learnerFriendlyDefinition:
            'The visible action or update that shows a parent conversation actually led somewhere.',
          deeperMeaning:
            'In PTMs and school communication, warmth alone is often not enough. Trust grows when the teacher can say what was observed, what changed, and what happens next.',
          whyItMatters:
            'Parents may feel dismissed when the teacher sounds kind in a meeting but nothing concrete happens afterward.',
          commonMisread:
            'This parent is impatient and does not trust me.',
          betterInterpretation:
            'The parent may be checking whether the school’s listening turned into an actual process.',
          example:
            'After a PTM about group work, the father asks what has happened since the meeting. He is asking for follow-through.',
          contexts: ['parents', 'teacher practice', 'school systems'],
        },
        {
          id: 'english-as-capital',
          term: 'English as capital',
          partOfSpeech: 'noun phrase',
          learnerFriendlyDefinition:
            'English is treated not just as a subject, but as something that opens doors and signals opportunity.',
          deeperMeaning:
            'Families may see English-medium education as a route to mobility, confidence, status, and future access. Because of that, English often carries more meaning than just language learning.',
          whyItMatters:
            'A school’s English environment can become part of how families judge quality, seriousness, and future readiness.',
          commonMisread:
            'Parents only care about English because it looks prestigious.',
          betterInterpretation:
            'English may function as practical and symbolic capital tied to future opportunity.',
          example:
            'A parent says, "We can compromise on facilities, but not on English quality." That reflects English as capital.',
          contexts: ['parents', 'students', 'school marketing'],
        },
        {
          id: 'grapevine-navigation',
          term: 'Grapevine navigation',
          partOfSpeech: 'noun phrase',
          learnerFriendlyDefinition:
            'Using other parents, relatives, and WhatsApp groups to make sense of school expectations and quality.',
          deeperMeaning:
            'Families often do not interpret school messages alone. They compare, validate, and decode information through informal networks.',
          whyItMatters:
            'If the school is vague, the grapevine becomes the real interpretation system.',
          commonMisread:
            'Parents are gossiping and making drama.',
          betterInterpretation:
            'Parents may be using the most available network for reducing uncertainty in a competitive school market.',
          example:
            'A parent says, "Other families said this school is strong in discipline but weak in feedback." That is grapevine navigation.',
          contexts: ['parents', 'communications', 'school reputation'],
        },
        {
          id: 'visible-seriousness',
          term: 'Visible seriousness',
          partOfSpeech: 'noun phrase',
          learnerFriendlyDefinition:
            'The feeling that a school takes academics and children’s futures seriously in ways families can observe.',
          deeperMeaning:
            'This can show up through punctuality, teacher responsiveness, assessment clarity, homework structure, discipline, and the way the school talks about learning.',
          whyItMatters:
            'Some families do not ask, "Is the pedagogy progressive?" first. They ask, "Does this school feel serious?"',
          commonMisread:
            'The family just wants a strict school.',
          betterInterpretation:
            'The family may be looking for emotional and academic reassurance that the school is worth the investment.',
          example:
            'A parent feels calmer when the teacher gives a precise timeline and concrete next steps. That creates visible seriousness.',
          contexts: ['parents', 'leadership', 'teachers'],
        },
        {
          id: 'intellectual-risk-taking',
          term: 'Intellectual risk-taking',
          partOfSpeech: 'noun phrase',
          learnerFriendlyDefinition:
            'Trying an idea before it is perfect and treating drafting or partial answers as part of learning.',
          deeperMeaning:
            'In inquiry-heavy classrooms, students are often expected to think aloud, test uncertain answers, and revise publicly. That can clash with environments where correctness and polish are read as signs of care and competence.',
          whyItMatters:
            'A student who seems passive may actually be protecting herself from getting something wrong in public.',
          commonMisread:
            'The child lacks curiosity.',
          betterInterpretation:
            'The child may be optimized for correctness, seriousness, and not wasting effort on ungraded uncertainty.',
          example:
            'A student keeps asking, "Will this be graded?" before joining a discussion. She may need support for intellectual risk-taking.',
          contexts: ['students', 'parents', 'classroom culture'],
        },
        {
          id: 'global-plus-rooted',
          term: 'Global-plus-rooted',
          partOfSpeech: 'adjective phrase',
          learnerFriendlyDefinition:
            'A school promise that children can become globally capable without losing cultural rootedness.',
          deeperMeaning:
            'Many Indian international or premium private schools market themselves as both future-facing and values-grounded. This creates real expectations for teachers about how modernity, confidence, and cultural continuity should coexist.',
          whyItMatters:
            'Parents may accept innovative pedagogy more readily when they believe the school still respects moral seriousness and Indian identity.',
          commonMisread:
            'The school is just using nice admissions language.',
          betterInterpretation:
            'Families may have chosen the school precisely because they believe it can hold both global ambition and cultural continuity together.',
          example:
            'A school banner says, "Rooted in India. Ready for the world." That is a global-plus-rooted promise.',
          contexts: ['leadership', 'parents', 'teachers'],
        },
      ],
    },
    {
      id: 'applied-sort',
      type: 'scenario_sort',
      title: 'Applied Interpretation Check',
      instructions:
        'Ask the learner to choose the best concept for each school situation. These are not definition recalls; they test whether the teacher can read the interaction accurately.',
      items: [
        {
          id: 'sort-1',
          prompt:
            'A parent says, "I liked the student exhibition, but I still need to know where my daughter stands compared with expectations." Which concept best explains the concern?',
          options: [
            'Legible rigor',
            'Intellectual risk-taking',
            'Follow-through',
            'Grapevine navigation',
          ],
          correctAnswer: 'Legible rigor',
          feedback: {
            correct:
              'Yes. The parent is not rejecting the exhibition itself. She is asking for visible proof that the school remains academically serious and trackable.',
            incorrect:
              'Not quite. The key issue here is not whether the parent likes projects or comparisons in general. It is that the school’s standards are not visible enough from home. That is legible rigor.',
          },
        },
        {
          id: 'sort-2',
          prompt:
            'At a PTM, a teacher says, "I’ll keep an eye on it." Two weeks later the parent asks what has actually changed. Which term best fits this tension?',
          options: [
            'Global-plus-rooted',
            'Follow-through',
            'English as capital',
            'Visible seriousness',
          ],
          correctAnswer: 'Follow-through',
          feedback: {
            correct:
              'Yes. The parent is testing whether the meeting created an observable school response rather than only a polite exchange.',
            incorrect:
              'The central issue is not language, branding, or values. It is whether concern moved from conversation into action. That is follow-through.',
          },
        },
        {
          id: 'sort-3',
          prompt:
            'A family says they chose the school because it offers "confidence, English, and opportunities, but still proper values." Which concept is most useful here?',
          options: [
            'Global-plus-rooted',
            'Grapevine navigation',
            'Legible rigor',
            'Visible seriousness',
          ],
          correctAnswer: 'Global-plus-rooted',
          feedback: {
            correct:
              'Right. The family is describing a dual aspiration: future-facing education plus continuity of values and identity.',
            incorrect:
              'This is not mainly about rumor networks or assessment visibility. It is the classic global-plus-rooted expectation common in premium Indian schooling.',
          },
        },
        {
          id: 'sort-4',
          prompt:
            'A student refuses to share an idea until she knows exactly how it will be graded and whether her answer is fully correct. Which term best frames the teacher’s next learning goal?',
          options: [
            'English as capital',
            'Intellectual risk-taking',
            'School choice as identity work',
            'Visible seriousness',
          ],
          correctAnswer: 'Intellectual risk-taking',
          feedback: {
            correct:
              'Yes. The issue is not simply confidence in general. The student needs support in treating uncertainty and drafting as legitimate parts of learning.',
            incorrect:
              'The focus here is student learning behavior inside the classroom. The most relevant concept is intellectual risk-taking.',
          },
        },
      ],
    },
    {
      id: 'micro-dialogues',
      type: 'best_response',
      title: 'Micro-Dialogue Practice',
      instructions:
        'Choose the teacher response that best applies the vocabulary accurately and respectfully.',
      items: [
        {
          id: 'dialogue-1',
          prompt:
            'Parent: "I’m not against projects. I just need to know this school is still serious." Which teacher reply best addresses the actual concern?',
          options: [
            {
              id: 'a',
              text: 'Projects are the future, so parents need to move beyond marks.',
              isCorrect: false,
              rationale:
                'This dismisses the parent’s need for legible rigor and frames the concern as backward rather than understandable.',
            },
            {
              id: 'b',
              text: 'I hear that. Let me show you where the academic rigor lives in this unit and what evidence we use to track it, so the seriousness is visible, not just assumed.',
              isCorrect: true,
              rationale:
                'This directly addresses legible rigor and visible seriousness without surrendering the pedagogy.',
            },
            {
              id: 'c',
              text: 'Your child is fine, so there is nothing to worry about.',
              isCorrect: false,
              rationale:
                'This gives reassurance but does not answer the structural concern about how seriousness is being shown.',
            },
          ],
        },
        {
          id: 'dialogue-2',
          prompt:
            'Parent: "At the PTM we discussed group work, but my son says nothing changed." Which teacher response best reflects strong follow-through?',
          options: [
            {
              id: 'a',
              text: 'Children often exaggerate these things, so let us not make it bigger than it is.',
              isCorrect: false,
              rationale:
                'This is defensive and undermines trust by questioning the legitimacy of the follow-up.',
            },
            {
              id: 'b',
              text: 'Thank you for checking back. Since the PTM I gave a general reminder, but I have not yet changed the structure strongly enough. My next step is to observe his next two group tasks and update you on Friday.',
              isCorrect: true,
              rationale:
                'This acknowledges the gap between intention and action and turns the conversation into a concrete process.',
            },
            {
              id: 'c',
              text: 'We are always encouraging collaboration in class.',
              isCorrect: false,
              rationale:
                'This sounds professional but remains too general to count as visible follow-through.',
            },
          ],
        },
        {
          id: 'dialogue-3',
          prompt:
            'Colleague: "These families only care about English and brand name." Which reply best reflects the research-informed vocabulary?',
          options: [
            {
              id: 'a',
              text: 'There is some truth to that. Premium schools naturally attract status-conscious parents.',
              isCorrect: false,
              rationale:
                'This flattens a complex school-choice process into stereotype and ignores identity, aspiration, and future security.',
            },
            {
              id: 'b',
              text: 'It may look like that, but English and school choice often function as forms of capital and identity work. Families may be reading future mobility, seriousness, and belonging into those choices.',
              isCorrect: true,
              rationale:
                'This uses the concepts accurately and avoids the lazy caricature.',
            },
            {
              id: 'c',
              text: 'It’s best not to think too much about parent motives.',
              isCorrect: false,
              rationale:
                'The whole point of this vocabulary is to improve interpretation, not avoid it.',
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
        'Use these as one-question checkpoints or a short end-of-activity quiz.',
      questions: [
        {
          id: 'mc-1',
          stem:
            'Which concept best explains why a teacher’s warm PTM response may still leave a parent dissatisfied?',
          options: [
            'English as capital',
            'Follow-through',
            'Global-plus-rooted',
            'School choice as identity work',
          ],
          correctAnswer: 'Follow-through',
          explanation:
            'The issue is not only tone. Research on Indian PTMs suggests parents often judge the meeting by whether it leads to visible action, observation, or closure.',
        },
        {
          id: 'mc-2',
          stem:
            'A teacher says, "Parents should trust us even if the rigor is not visible from home." Which concept suggests why that may fail?',
          options: [
            'Legible rigor',
            'Intellectual risk-taking',
            'Grapevine navigation',
            'Global-plus-rooted',
          ],
          correctAnswer: 'Legible rigor',
          explanation:
            'If rigor is not visible, many families will seek other signals or build parallel reassurance systems. The issue is not only whether rigor exists, but whether it is legible.',
        },
        {
          id: 'mc-3',
          stem:
            'Why is "school choice as identity work" useful for teachers to understand?',
          options: [
            'Because it explains why all parents want the same kind of school',
            'Because it shows school choice can express family values, aspirations, and biography, not just preference lists',
            'Because it proves school branding matters more than learning',
            'Because it means teachers should never challenge parent assumptions',
          ],
          correctAnswer:
            'Because it shows school choice can express family values, aspirations, and biography, not just preference lists',
          explanation:
            'This concept helps teachers interpret emotionally charged school conversations with more depth and less judgment.',
        },
      ],
    },
  ],
  jsxIntegrationNotes: {
    easiestRenderPattern:
      'Map sections by type. Render vocab_cards as flip cards or accordions, scenario_sort as single-select MCQs, best_response as stacked options with rationale reveal, and checkpoint_quiz with your existing quiz component.',
    suggestedComponentProps: [
      'activity.title',
      'activity.subtitle',
      'section.title',
      'section.instructions',
      'card.term',
      'card.learnerFriendlyDefinition',
      'card.deeperMeaning',
      'item.prompt',
      'item.options',
      'item.feedback',
      'question.stem',
      'question.correctAnswer',
      'question.explanation',
    ],
    recommendedScoring:
      'Use the scenario_sort items and mastery_check questions for scoring. Treat vocab_cards as study material and micro-dialogues as formative with answer-specific rationale.',
  },
};

export default indiaVocabLearningActivity;
