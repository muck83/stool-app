-- Seed China Simulation 2: "The Silent Mathematician"
-- Source: CHINA_SIM2_THE_SILENT_MATHEMATICIAN.md
-- Dimensions: D1 (Learning Philosophy), D3 (Exam Culture), D4 (Classroom Dynamics)
-- Run AFTER 20260330_create_simulations.sql

INSERT INTO public.pd_simulations (
  id,
  module_id,
  title,
  description,
  context,
  characters,
  nodes,
  dimension_tags,
  estimated_minutes,
  sort_order,
  status
) VALUES (
  'a1b2c3d4-0001-0002-0001-000000000001',
  'china-001',
  'The Silent Mathematician',
  'A student solves every problem correctly but refuses to explain his thinking. What looks like evasion might be something else entirely.',
  'It''s May at your international school in Shanghai. You''ve been teaching an inquiry-based unit on fractions for three weeks. Your goal is conceptual flexibility — you want students to see fractions, not just memorize procedures. Wei finishes the problem in two minutes.',
  '[
    {
      "name": "You",
      "role": "5th-grade math teacher, international school, Shanghai",
      "description": "You trained in a Western inquiry-based tradition. You believe math is about understanding how to think, not just getting the right answer. You''re invested in your students'' conceptual development and frustrated when correct answers arrive without explanation."
    },
    {
      "name": "Wei",
      "role": "Student, 5th grade, age 10",
      "description": "Quiet in whole-class settings but animated with close friends. He''s not shy — he''s strategic. He solves problems with methods you didn''t teach, gets them right, but refuses to explain his thinking. His parents hired a tutor who coaches him ahead of the curriculum. Wei understands that staying quiet is safer than drawing attention to the gap between his home learning and his classroom learning."
    },
    {
      "name": "Mr. Liu",
      "role": "Father of Wei, software engineer",
      "description": "He measures success by marks and test performance. He sees education as a race with visible standings. He hired the tutor not to supplement school but to ensure competitive advantage. His communication with teachers is formal and infrequent."
    }
  ]',
  '{
    "setup": {
      "id": "setup",
      "type": "setup",
      "title": "Setup",
      "content": [
        "A classroom, late morning. Twelve students bent over a worksheet. The problem: ''How many different ways can you make the fraction 3/5 using two different fractions? Show your thinking.''",
        "It''s May. You''ve been working on this unit for three weeks — starting with area models, moving to number lines, now asking students to decompose fractions in multiple ways. The goal is conceptual flexibility. You want them to see fractions, not just memorize the procedure.",
        "Most students are using the strategies you''ve taught: drawing models, finding equivalent fractions systematically. Slow, visible, debuggable thinking.",
        "Wei is done in two minutes. He''s written four correct decompositions. The last one is elegant: 1/3 + 4/15. It uses a least common denominator your class hasn''t discussed yet.",
        "You walk over. ''Wei, these are all correct. How did you figure out that last one?'' Wei looks up, then looks down. ''I just... knew it.'' His tone isn''t defiant. It''s cautious. He''s clearly done the math, but he''s not going to walk you through it.",
        "Later, you ask him to share with the class. ''Pick your favorite one and explain how you thought about it.'' Wei shakes his head. ''I don''t want to.'' Other students raise their hands, excited to share. You move on. But you keep thinking about that decomposition.",
        "After school, you check his file. His previous math teachers noted the same pattern: ''Completes work accurately. Rarely explains his reasoning. Quiet in discussions.''",
        "That evening, you message Mr. Liu through WeChat asking if anything at home is helping Wei with math. Mr. Liu''s reply comes the next morning: ''Thank you, teacher. Wei is working with a tutor twice a week. He needs extra support to stay ahead.''",
        "You read between the lines. The tutor isn''t filling a gap — he''s drilling ahead. Wei is learning methods before he''s supposed to learn them. And he''s staying quiet in class because drawing attention to his knowledge would expose the gap between his home learning and his classroom learning."
      ],
      "next": "dilemma_1"
    },
    "dilemma_1": {
      "id": "dilemma_1",
      "type": "dilemma",
      "title": "Dilemma 1: The Decomposition",
      "content": ["What do you do about Wei''s refusal to explain his last decomposition?"],
      "choices": [
        {
          "id": "choice_1a",
          "label": "Press him to explain",
          "text": "You ask Wei again, this time more firmly but kindly. ''Wei, I know you can do it. Walk me through your thinking about that 1/3 + 4/15. Just tell me how you decided on those numbers. The class will learn from it.''",
          "next": "consequence_1a"
        },
        {
          "id": "choice_1b",
          "label": "Let it go",
          "text": "You move on. Wei completes his work accurately. He''s learning, even if he''s not sharing. You focus your classroom inquiry time on students who are willing to think aloud.",
          "next": "consequence_1b"
        },
        {
          "id": "choice_1c",
          "label": "Turn it into a class inquiry",
          "text": "You take Wei''s decomposition and turn it into a teaching moment for the whole class. ''Someone found that 3/5 can be made with 1/3 and 4/15. Can the class figure out how this works?'' You invite discovery, not confession.",
          "next": "consequence_1c"
        }
      ]
    },
    "consequence_1a": {
      "id": "consequence_1a",
      "type": "consequence",
      "title": "Consequence 1A",
      "content": [
        "Wei stares at his paper. His jaw tightens slightly. ''I don''t know,'' he says quietly. ''I just saw it.''",
        "You''re now in front of the class, and Wei is becoming visibly uncomfortable. A few students are watching. You drop it, but the moment has shifted. Wei has drawn attention to himself — exactly what he was avoiding.",
        "For the rest of the week, Wei is noticeably more withdrawn. He finishes his work but doesn''t raise his hand. When you call on him directly, he gives minimal responses. He''s protecting himself by becoming smaller.",
        "At recess, you overhear him with his friends. He''s joking, confident, animated. But in your classroom, he''s folded inward.",
        "That evening, you get a message from Mr. Liu: ''Wei mentioned that you asked him to explain something in front of the class and he was not comfortable. Can he just focus on doing the work instead of talking?''"
      ],
      "next": "perspective_1"
    },
    "consequence_1b": {
      "id": "consequence_1b",
      "type": "consequence",
      "title": "Consequence 1B",
      "content": [
        "You continue the unit. Wei does all the worksheets, gets high scores on quizzes, completes the unit assessment with a solid A. He''s learning — but silently, and at his own pace.",
        "By the end of the unit, you''ve mostly stopped noticing his clever solutions. He''s just one more high-performing quiet student. You have 28 students; the ones who are struggling or disruptive take your attention.",
        "Three weeks later, it''s time for parent-teacher conferences. Mr. Liu opens with: ''Wei''s tutor says he''s ready for algebra. Is this class moving too slowly?''",
        "You''re taken aback. Your unit has been rigorous. But you realize you actually don''t know what Wei can do, because you''ve never asked him to explain, justify, or reason through ambiguity out loud. He''s just a high-performing silent student in your record book.",
        "You''re now defending the pace of your curriculum to a parent who thinks his child is bored, and you don''t have much evidence that Wei is actually engaged or challenged."
      ],
      "next": "perspective_1"
    },
    "consequence_1c": {
      "id": "consequence_1c",
      "type": "consequence",
      "title": "Consequence 1C",
      "content": [
        "You write Wei''s decomposition on the board the next day: ''3/5 = 1/3 + 4/15.'' ''This is interesting,'' you say. ''Someone figured out that you can make three-fifths using one-third and four-fifteenths. Our other ways used fifths or tenths. This one jumps to different denominators. Why might that work?''",
        "The class sits with it. A few students pull out their number lines. Someone asks, ''What''s the same about 3, 5, and 15?'' Another: ''Is it about the times table? Like, 5 times 3 is 15?''",
        "You''re guiding them toward discovering why common denominators matter, using Wei''s elegant solution as the hook. Wei hasn''t had to explain. The class has done the reasoning. And Wei''s thinking has become classroom knowledge.",
        "At the end of class, Wei lingers. ''That was... how I thought about it,'' he says quietly. ''I know,'' you say. ''That''s why I used it. Your thinking helped everyone understand something deeper.''",
        "He nods. Something has shifted — you''ve validated his math without requiring public performance."
      ],
      "next": "perspective_1"
    },
    "perspective_1": {
      "id": "perspective_1",
      "type": "perspective",
      "title": "Perspective 1: Wei''s Point of View",
      "content": [
        "Wei is not refusing to explain out of defiance or shyness. He''s doing something much more sophisticated: managing two different math universes, and staying quiet to keep them separate.",
        "At the tutor''s place — twice a week, Monday and Thursday — he learns algebra, advanced fraction decomposition, and competition math strategies. His tutor drills him with methods and answer keys. Wei''s job is to understand the methods and execute them accurately.",
        "At school, the unit is about discovery. You''re asking students to invent strategies, to try things that might not work, to explain their thinking. This is genuinely different from what Wei experiences at the tutor''s place.",
        "Wei understands, intuitively, that explaining his tutor-taught method in class would signal that he''s ahead. It would make him visible in a way that feels risky. Standing out as someone with unauthorized knowledge feels like breaking a rule he''s not sure about.",
        "Also, Wei genuinely prefers being quiet. He''s not broken — he''s just different. He likes thinking alone. Forcing explanation feels like a personality change, not a learning move.",
        "The cultural dynamic: Ran (2001) documents how Chinese educational culture emphasizes procedural mastery first, conceptual understanding second. The tutor operates in this model — drill, master, understand. Your inquiry-based unit inverts this: conceptual first, then procedures. Wei is living in both worlds simultaneously, and he''s chosen to keep them separate.",
        "Li (2005) argues that in Chinese learning culture, the learner''s effort and diligence are valued more than the learner''s voice. You''re asking Wei to perform his thinking. In his home culture, demonstrating mastery is more respected — and less risky — than demonstrating process."
      ],
      "next": "reflection_1"
    },
    "reflection_1": {
      "id": "reflection_1",
      "type": "reflection",
      "title": "Reflection 1",
      "prompt": "Why do you think Wei refused to explain his thinking?",
      "options": [
        "He was being difficult or evasive.",
        "He didn''t want to stand out or draw attention.",
        "He genuinely didn''t know how to explain it, even though he got the answer.",
        "He was protecting something — maybe his relationship with his parents or his tutor.",
        "Write your own."
      ],
      "next": "dilemma_2"
    },
    "dilemma_2": {
      "id": "dilemma_2",
      "type": "dilemma",
      "title": "Dilemma 2: The Tutoring Discovery",
      "content": [
        "A week later, at a professional learning community meeting, another teacher mentions that several families in your cluster are using the same tutor — a college student who specializes in ''curriculum acceleration.''",
        "Wei isn''t the only student being coached ahead. But Wei is the only one you''re noticing, because his silence contrasts so sharply with your unit''s inquiry goals.",
        "What do you do?"
      ],
      "choices": [
        {
          "id": "choice_2a",
          "label": "Raise it with Mr. Liu",
          "text": "You email Mr. Liu. ''I appreciate your investment in Wei''s math education. I''ve learned that Wei is working with a tutor, and I wanted to understand how that fits with our classroom unit. It might help if we coordinated on timing and approach so the learning builds coherently. Could we discuss?''",
          "next": "consequence_2a"
        },
        {
          "id": "choice_2b",
          "label": "Tell Wei to stop",
          "text": "You pull Wei aside privately. ''I know you''re working with a tutor ahead of our unit. I understand your parents want you to get ahead, but it''s making it harder for you to engage in class the way I''m asking. Could you talk to your parents about pausing the tutor until we finish this unit?''",
          "next": "consequence_2b"
        },
        {
          "id": "choice_2c",
          "label": "Adapt your teaching",
          "text": "You don''t address the tutoring directly. Instead, you redesign your approach: problems with multiple valid strategies, more choice and differentiation, and more opportunities for students to work at their own level. You stop insisting on explanation; you value it when it happens, but don''t require it.",
          "next": "consequence_2c"
        }
      ]
    },
    "consequence_2a": {
      "id": "consequence_2a",
      "type": "consequence",
      "title": "Consequence 2A",
      "content": [
        "Mr. Liu responds the same day: ''Thank you for your communication. Wei''s tutor is his private education. It does not affect his school work. His tutor helps him prepare for advanced math. This is what we want for his future. I don''t see a problem.''",
        "The subtext is clear: This is not negotiable. My son''s education is my business. Stay in your lane.",
        "You''ve raised the issue and been shut down. The relationship with Mr. Liu has shifted. He''s not hostile, but he''s firm. He''s also unlikely to tell you anything else about Wei''s out-of-school learning.",
        "In the classroom, nothing changes. But you''re more aware of the tension, and it''s harder to teach the unit the way you designed it when you know that half your accelerated students are being prepped by the same tutor.",
        "You find yourself lowering the cognitive demand of your activities slightly — because the gap between what you''re teaching and what the tutored students already know feels too wide."
      ],
      "next": "perspective_2"
    },
    "consequence_2b": {
      "id": "consequence_2b",
      "type": "consequence",
      "title": "Consequence 2B",
      "content": [
        "Wei nods when you explain. He doesn''t argue. He just says, ''Okay.''",
        "That evening, his father sends you an email: ''Wei told me you asked him to stop his tutor. We hired the tutor because we believe he needs more support in math. Stopping the tutor would be a mistake for his learning. I do not understand why the school would discourage this. Can we discuss at conference?''",
        "Now you''re in a conflict with the parent over a boundary the child isn''t even responsible for negotiating. You''ve asked Wei to manage his parents, and he''s not equipped to do that.",
        "Moreover, the tutor continued. Mr. Liu simply didn''t stop the sessions. Wei now knows that you and his father are not aligned, and he''s caught in the middle. He becomes even quieter in class."
      ],
      "next": "perspective_2"
    },
    "consequence_2c": {
      "id": "consequence_2c",
      "type": "consequence",
      "title": "Consequence 2C",
      "content": [
        "You redesign the unit. Instead of a single sequence of activities, you build in choice and differentiation. You offer multiple pathways to the same learning goals.",
        "For fractions, you offer: a discovery path (find all the ways to make 3/5 using two fractions), a design path (create a fraction story problem that requires decomposing 3/5), and an analysis path (here are five decompositions of 3/5 — which is most efficient? Why?).",
        "Wei chooses the analysis path — it lets him work with mathematical ideas without explaining his thinking aloud. Other students find their own entry points.",
        "By the end of the unit, you''ve learned that Wei can decompose fractions in multiple ways, compare strategies, and analyze efficiency. He hasn''t explained his process, but you''ve found other ways to assess understanding.",
        "Mr. Liu''s email at conference time is neutral: ''Wei did well in this unit. Thank you.'' You haven''t addressed the tutoring directly, but you''ve changed the ecology so that tutored and non-tutored students can coexist without the tutoring becoming a pressure point."
      ],
      "next": "perspective_2"
    },
    "perspective_2": {
      "id": "perspective_2",
      "type": "perspective",
      "title": "Perspective 2: Mr. Liu''s Point of View",
      "content": [
        "Mr. Liu is not paranoid or Tiger-parenting out of aggression. He''s doing what he believes is responsible parenting in a high-stakes educational environment.",
        "He watched the gaokao system evolve. He knows the data: students who have tutoring during elementary school are significantly more likely to perform well on competitive exams later. In Shanghai, roughly 75% of primary students have after-school tutoring. Not having it is the outlier.",
        "He also knows that international school offers something different from the gaokao track — but he doesn''t believe the alternative is lower rigor. International school with strong math preparation. Not just learning, but advantage.",
        "The tutor isn''t meant to replace your classroom. She''s insurance. She''s a way to ensure Wei has options later — gaokao path if needed, but also advanced placement in any school, competition math if he shows interest, or simply being the strongest student in his year.",
        "From Mr. Liu''s perspective, when you raise the tutoring as a ''coordination'' issue, you''re implicitly asking him to slow down his son''s learning to match classroom pace. You''re asking him to optimize for your inquiry unit rather than for Wei''s long-term trajectory.",
        "The cultural dynamic: Ran (2001) describes how Chinese parents see education as a long-term competition with visible standings. The gaokao isn''t a test that happens at age 18 — it''s a destination that shapes every decision from age 6. The concept of 补习班 (buxiban — cram school/tutoring class) is so normalized that not tutoring a high-performing child is considered neglectful. Mr. Liu isn''t anxious; he''s being responsible by his culture''s definition."
      ],
      "next": "reflection_2"
    },
    "reflection_2": {
      "id": "reflection_2",
      "type": "reflection",
      "title": "Reflection 2",
      "prompt": "When Mr. Liu said the tutor was Wei''s ''private education,'' what did he mean?",
      "options": [
        "He was asserting that his parenting choices are beyond the school''s business.",
        "He was implying that what happens outside school shouldn''t affect what happens inside school.",
        "He was defending an investment he''s made in his son''s future.",
        "All of the above.",
        "Write your own."
      ],
      "next": "dilemma_3"
    },
    "dilemma_3": {
      "id": "dilemma_3",
      "type": "dilemma",
      "title": "Dilemma 3: The Grade and the Pushback",
      "content": [
        "Unit assessment day. The assessment includes three parts: (1) procedural problems (solve and explain), (2) a decomposition task, and (3) a reflection question.",
        "Wei''s scores: Part 1: 18/20 (all problems correct, explanations are brief). Part 2: 15/15 (elegant solutions, no explanation of thinking). Part 3: 5/8 (his reflection is surface: ''It helps me solve problems faster.'') Total: 38/50. That''s a B+, 76%.",
        "He got the math right. The explanations and reflection are where he lost points.",
        "Two days after grades go home, Mr. Liu sends you an email: ''Wei got a B+ on the math unit. I do not understand this grade. Wei solved every problem correctly. His math is excellent. Why is he marked down? He knows all the answers. This grade does not reflect his learning.''",
        "He''s right that Wei solved the math correctly. But for you, showing your thinking IS the learning. How do you reply?"
      ],
      "choices": [
        {
          "id": "choice_3a",
          "label": "Defend your grading",
          "text": "''Thank you for your email. Wei''s math accuracy is excellent, and that''s reflected in his problem-solving score. However, the unit assesses three things: accuracy, reasoning, and mathematical reflection. In an inquiry-based program, students must be able to explain and justify their thinking — that''s a core learning goal, not extra credit. Wei''s explanations are minimal, which is why his overall grade is a B+.''",
          "next": "consequence_3a"
        },
        {
          "id": "choice_3b",
          "label": "Offer additional context",
          "text": "''Thank you for writing. You''re right that Wei solved the problems correctly — his accuracy is excellent. In this unit, we''ve been working on helping students explain their mathematical thinking. That''s part of learning to think mathematically, not just get right answers. Would it help if we set up a plan for him to practice explaining in smaller, lower-pressure settings? I''d also love to hear more about how the tutoring is going — we might be able to coordinate.''",
          "next": "consequence_3b"
        },
        {
          "id": "choice_3c",
          "label": "Reframe the conversation",
          "text": "''Thank you for your email. Let me be direct about something: I think we might be measuring different things. You''re looking at what Wei knows. I''m assessing what he can communicate. Both matter. A B+ means Wei is a strong mathematician, but he''s still building the skill of explaining his reasoning. This isn''t a weakness — it''s the next frontier for him. Can we talk about what success looks like for the rest of the year?''",
          "next": "consequence_3c"
        }
      ]
    },
    "consequence_3a": {
      "id": "consequence_3a",
      "type": "consequence",
      "title": "Consequence 3A",
      "content": [
        "Mr. Liu doesn''t reply. Silence.",
        "Three weeks later, it''s parent-teacher conference time. He arrives with a very different energy — polite, but formal. He says he''s hired a new tutor who specializes in ''writing and explaining in English,'' because he believes that''s where Wei is being marked unfairly.",
        "You realize your email, intended as an explanation, was received as a judgment. You''re now in a position where Mr. Liu is allocating more tutoring resources to address a ''deficit'' that you''ve highlighted — except the deficit is something you value (explaining thinking) and he doesn''t think should be a grade-determining factor.",
        "The relationship with this parent is now transactional, not collaborative."
      ],
      "next": "perspective_3"
    },
    "consequence_3b": {
      "id": "consequence_3b",
      "type": "consequence",
      "title": "Consequence 3B",
      "content": [
        "Mr. Liu replies: ''I appreciate your willingness to work together. However, I do not think tutoring should be coordinated with school. The tutor is helping Wei prepare for his future. The school is helping him with the international curriculum. They are separate.''",
        "You''ve tried to build a bridge and been politely refused. But the tone is less hostile than if you''d defended the grade. You''ve acknowledged his investment and his perspective, even though you haven''t changed your grading.",
        "He accepts the B+ as final. But he maintains the boundary: the tutoring stays separate, and he''s not interested in how your unit and his tutoring might reinforce each other.",
        "You end the year with Wei still quiet in class, still producing accurate work, still not explaining. His father has Wei''s trajectory mapped out on a different timeline. Your inquiry unit is one point on a longer arc."
      ],
      "next": "perspective_3"
    },
    "consequence_3c": {
      "id": "consequence_3c",
      "type": "consequence",
      "title": "Consequence 3C",
      "content": [
        "Mr. Liu reads this and pauses. He writes back: ''You say Wei knows the math but needs to communicate better. I think this is reasonable. At home, we will also encourage him to explain his thinking. This is good for his future, especially if he goes to a university outside China.''",
        "Something has shifted. You''ve explicitly separated ''what he knows'' from ''what he can communicate'' — both accurate framings from different perspectives. You''ve also implied that explaining thinking is valuable for an international future, which aligns with Mr. Liu''s long-term goals.",
        "At conference, he''s still formal, but the conversation is different. He asks: ''What can we do at home to help Wei practice explaining?'' You suggest low-pressure strategies: explaining to his tutor, explaining to a friend, writing down his thinking without being perfect.",
        "Wei''s next unit assessment shows slightly more explanation. Not a dramatic change, but movement. Wei is starting to see articulating his thinking as a skill to build, not a threat to his efficiency."
      ],
      "next": "perspective_3"
    },
    "perspective_3": {
      "id": "perspective_3",
      "type": "perspective",
      "title": "Perspective 3: Wei''s Point of View Revisited",
      "content": [
        "Wei knew the math. He solved every problem correctly, the way his tutor taught him and the way he''d figured out on his own. When he got the B+, he didn''t think he''d made a calculation error. He thought: My teacher is saying my thinking is wrong.",
        "But his thinking wasn''t wrong — it was different. His tutor teaches solution methods. His teacher asks for explanation. These are not the same thing.",
        "Wei is 10 years old. He knows his father hired the tutor to keep him ahead. He knows his father wants high marks. When his mark is a B+, even though he got all the problems right, Wei reads this as: I''m not doing what the school wants.",
        "If you defend the grading, Wei assumes there''s something wrong with his thinking that even being correct can''t fix. He becomes more withdrawn.",
        "If you offer additional context and ask him to practice explaining, Wei might try — but he''s doing it to please you and his father, not because he understands why it matters.",
        "If you reframe explaining as a skill (not a judgment of his thinking), something changes. Wei can practice explaining the same way he practices piano. It''s a skill, not a character trait. And skills can be built.",
        "The cultural dynamic: Li (2005)''s research on ''virtue orientation'' meets the reality of modern tutoring culture. Li argues that in Chinese learning culture, effort and diligence are valued above innate ability. But contemporary parents like Mr. Liu operate from a different frame: results are valued most. Wei is caught between his father''s results-orientation and his teacher''s skill-orientation. Neither adult is wrong, but Wei''s only recourse is silence."
      ],
      "next": "reflection_3"
    },
    "reflection_3": {
      "id": "reflection_3",
      "type": "reflection",
      "title": "Reflection 3",
      "prompt": "What was the fundamental disagreement between you and Mr. Liu about what grade Wei ''deserved''?",
      "options": [
        "You measure learning by accuracy; he measures it by process.",
        "You measure learning by communication; he measures it by results.",
        "You expect him to learn like an international school student; he expects him to be prepared for any system.",
        "You see explaining as essential; he sees it as nice-to-have.",
        "Write your own."
      ],
      "next": "debrief"
    },
    "debrief": {
      "id": "debrief",
      "type": "debrief",
      "title": "Debrief",
      "pathSummaryIntro": "Display the learner''s three choices in sequence.",
      "sections": [
        {
          "title": "What Was Really Happening",
          "content": [
            "This simulation exercised three cultural dimensions that shape the experience of high-performing students in international schools in China.",
            "Learning Philosophy (D1): Wei was living in two different learning models simultaneously. At the tutor''s place, the model was procedural mastery → fluency → confidence. At school, the model was conceptual exploration → multiple strategies → articulation. Neither model is superior. But a student who''s optimized for one doesn''t automatically thrive in the other. Your inquiry unit asked Wei to explain, discuss, and justify — precisely the behaviors his tutor didn''t require and his home culture didn''t emphasize.",
            "Exam Culture & System Structure (D3): Mr. Liu''s hiring of a tutor wasn''t paranoid or excessive — it was a rational response to a system where early advantage compounds. Even in international school, parents like Mr. Liu are hedging: ''We''re choosing a different system, but our child should have options.'' Your inquiry-based unit is genuinely valuable, but from Mr. Liu''s perspective, it''s an alternative form of rigor, not a replacement for the kind of rigor that produces measurable advantage. The 补习班 (buxiban) exists because Asian parents have learned that school + tutoring = security.",
            "Classroom Dynamics (D4): Wei''s silence in class wasn''t passivity — it was strategy. He was managing identity: the quiet, focused student at school; the advanced, confident student at the tutor''s place. Forcing him to explain would have collapsed these identities into one, making visible the gap between what he knew and what he was supposed to know. By adapting your unit to create multiple pathways, you gave him choice. By reframing explanation as skill-building rather than proof of thinking, you changed what silence could mean."
          ]
        },
        {
          "title": "The Research Behind This",
          "content": [
            "Ran, A. (2001). ''Travelling on parallel tracks: Chinese parents and English teachers.'' Educational Research, 43(3), 311-328.",
            "Li, J. (2005). ''Mind or virtue: Western and Chinese beliefs about learning.'' Current Directions in Psychological Science, 14(4), 190-194.",
            "The 补习班 (buxiban/cram school) phenomenon is documented extensively in Chinese education research as a rational adaptation to perceived system pressures, not a cultural pathology."
          ]
        }
      ],
      "finalPrompt": "You started this simulation wanting to teach inquiry-based math. You ended it navigating tutoring, parental expectations, and a quiet student''s hidden knowledge. Looking back at all three dilemmas, what would you do differently if you could start over? Would you change anything about your initial approach to Wei''s silence, the tutoring discovery, or the grade conversation? What would you prioritize?"
    }
  }',
  ARRAY[1, 3, 4],
  20,
  2,
  'live'
)
ON CONFLICT (id) DO UPDATE SET
  title        = EXCLUDED.title,
  description  = EXCLUDED.description,
  context      = EXCLUDED.context,
  characters   = EXCLUDED.characters,
  nodes        = EXCLUDED.nodes,
  status       = EXCLUDED.status;

-- Make the simulation live immediately
UPDATE public.pd_simulations
SET status = 'live'
WHERE id = 'a1b2c3d4-0001-0002-0001-000000000001';
