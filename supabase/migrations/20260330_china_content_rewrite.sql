-- ─────────────────────────────────────────────────────────────────────────────
-- CHINA MODULE: Full content rewrite — all 6 dimensions + 4 new scenarios
-- Sources: Li (2005), Ran (2001), Dahlin & Watkins (2000), Jin & Cortazzi (1998)
-- Run after: 20260330_create_pd_layer.sql
-- ─────────────────────────────────────────────────────────────────────────────

-- ══════════════════════════════════════════════════════════════════════════════
-- D1 — Mind vs. Virtue: Two Models of What Learning Is
-- ══════════════════════════════════════════════════════════════════════════════
UPDATE public.pd_dimensions
SET
  title = 'Mind vs. Virtue: Two Models of What Learning Is',
  research_status = 'fully_sourced',
  content = '{
    "summary": "In Western education, learning is framed as developing the mind—cultivating curiosity, inquiry, and self-esteem through discovering knowledge. In China, learning is framed as becoming a better person through diligence, humility, and moral self-perfection. These are not minor pedagogical differences; they shape how students interpret feedback, define success, and understand why they are in school. You will need to decode this gap early, because a compliment that seems encouraging in one system can signal concern in the other.",
    "sections": [
      {
        "heading": "The Two Models: Mind vs. Virtue",
        "items": [
          "Western education is anchored in what researchers call a ''mind orientation''—inherited from the Socratic tradition. The goal is to develop students'' intellectual capacity: awaken curiosity, teach them to question, help them discover knowledge themselves. A successful student thinks independently and feels pride in their achievement. Failure brings disappointment or doubt in one''s ability.",
          "Chinese education is anchored in what researchers call a ''virtue orientation''—inherited from Mencian philosophy. The goal is to become a better person through self-discipline and moral development. Diligence, humility, endurance, concentration, and perseverance are not side effects of learning; they are learning. A successful student continues striving toward moral self-perfection with humility. Failure generates shame and guilt—but shame is a moral motivator, not a signal of inadequacy.",
          "The numbers are stark. When researchers asked Chinese college students to define ''knowledge,'' 79% said it means ''a need to self-perfect and spiritual power.'' Only 15% of Western students gave similar answers. Conversely, 96% of Western students defined knowledge as ''facts, information, skills, understanding.'' Only 32% of Chinese students did.",
          "These are not neutral differences. They shape the entire student experience. Chinese students expect to learn through a sequence: memorize, then understand, then apply, then question. Western teachers often expect questioning first—which can look like laziness or unwillingness to engage before students have secured the material."
        ]
      },
      {
        "heading": "How This Shapes Classroom Behavior",
        "items": [
          "In a virtue-oriented system, speaking has weight. To speak up in class is to commit yourself—to claim you have something worth saying, to stake your reputation on being right. If you cannot back your claim with action, silence is safer than false confidence. This is not shyness or passivity; it is moral caution. Chinese students see quiet receptiveness as methodical and disciplined; Western teachers sometimes read it as lacking critical thinking.",
          "Chinese children as young as four describe school''s purpose differently than Western peers. Ask a Chinese child why they go to school, and they will say: self-improvement, mastery, contribution to society. Ask a Western child, and they will say: friendship, play, being smart. These are not quirks—they reflect what their educational cultures emphasize from the start.",
          "The gap shows up when Western teachers praise ''good questions'' or ''challenging the material.'' In a mind-oriented system, this is encouragement. In a virtue-oriented system, this can read as permission to disrespect the teacher''s expertise. One teacher in Hong Kong was puzzled when praised questioning did not lead to more questions; she eventually realized her students heard ''question authority'' as morally dangerous.",
          "Participation grades—common in Western classrooms—create genuine conflict for virtue-oriented learners. Speaking in class is not practice; it is commitment. You do not earn points for tentative thinking; you speak when you are ready to stand by what you have said."
        ]
      },
      {
        "heading": "How Parents and Teachers Define Success Differently",
        "items": [
          "When a Western teacher writes ''good vocabulary and satisfactory spelling,'' they mean to encourage. The student is doing well. But Chinese parents hear ''satisfactory'' as barely adequate—not meeting expectations but only just meeting them. The same language that feels affirming in one system signals concern in the other.",
          "Chinese parents look for weak points because they assume the teacher''s job is to praise and the parent''s job is to fix gaps. Extra homework, extra practice, extra tutoring—these show investment and love. When a Western teacher suggests no extra homework is needed, the parents may hear ''I am not taking your child''s education seriously enough to identify what needs work.''",
          "The grading system reinforces this. In Chinese systems, 100/100 is achievable and meaningful—perfection exists and is worth pursuing. In Western systems, an A covers a range (90–100 typically), and perfection is not the stated goal. A student who scores 95 and one who scores 100 both ''get an A''—but in a Chinese frame, that is 5 points of waste.",
          "A ''good teacher'' in the Western frame arouses interest, explains clearly, and organizes activities. A ''good teacher'' in the Chinese frame has deep knowledge, can answer any question, and serves as a moral model. When you fall short of the Chinese image, parents do not necessarily think you are bad—they may think you are simply young or inexperienced."
        ]
      }
    ],
    "citations": [
      {"author": "Li, J.", "year": 2005, "title": "Mind or Virtue: Western and Chinese Beliefs About Learning", "journal": "Current Directions in Psychological Science", "doi": "10.1111/j.0963-7214.2005.00342.x"},
      {"author": "Pratt, Kelly, & Wong", "year": 1999, "title": "Chinese Conceptions of Effective Teaching in Hong Kong", "journal": "International Journal of Lifelong Learning"},
      {"author": "Jin, L. & Cortazzi, M.", "year": 1998, "title": "Dimensions of Dialogue: Large Classes in China", "journal": "International Journal of Educational Research"},
      {"author": "Ran, A.", "year": 2001, "title": "Travelling on Parallel Tracks: Chinese Parents and English Teachers", "journal": "Educational Research", "doi": "10.1080/00131880110081062"}
    ]
  }'::jsonb
WHERE module_id = 'china-001' AND dimension_number = 1;


-- ══════════════════════════════════════════════════════════════════════════════
-- D2 — Parent-Teacher Communication: "Parallel Tracks"
-- ══════════════════════════════════════════════════════════════════════════════
UPDATE public.pd_dimensions
SET
  title = 'Parent-Teacher Communication: Parallel Tracks',
  research_status = 'fully_sourced',
  content = '{
    "summary": "Chinese parents and Western teachers often believe they have communicated after a meeting when they have actually talked past each other on parallel tracks. Parents listen for weak points and specific actions to take at home. Teachers speak about targets and growth. Parents want accuracy; teachers want process. Praise alarms Chinese parents; constructive criticism reassures them. Understanding these patterns before your first parent meeting will save you months of frustration and prevent small misunderstandings from becoming trust fractures.",
    "sections": [
      {
        "heading": "What Parents Hear vs. What You Mean to Say",
        "items": [
          "When you tell a Chinese parent their child has ''good vocabulary,'' they may hear ''spelling is a problem.'' When you call something ''satisfactory,'' they interpret it as barely adequate. The same praise that feels warm in a Western context can sound like thinly veiled criticism to a parent from a virtue-oriented system, where the focus is always on what needs fixing.",
          "Parents want you to identify weak points explicitly. They are listening for specifics: which grammar mistakes? Which calculation errors? Which books does the child struggle with? A teacher who emphasizes ''overall she is doing well'' leaves parents frustrated because they hear nothing actionable.",
          "The word ''target'' means different things. You might say ''our target this term is to build confidence in public speaking''—framed as a stretch goal. Parents hear ''target'' as a pass-or-fail benchmark. Miss it, and the child has failed. The framing of goals as iterative and growth-oriented feels foreign to parents whose system treats targets as binary.",
          "Scores above 80% sound like excellence in Western contexts but incomplete in Chinese contexts. An 85% might be a solid B or A-; in the Chinese system, 85% is 15 points lost, and parents want to know which 15."
        ]
      },
      {
        "heading": "Three Case Studies: Real Parent-Teacher Friction",
        "items": [
          "Jiahui''s mother praised the school but left meetings confused. Mrs Smith had celebrated Jiahui''s vocabulary as ''good'' and spelling as ''satisfactory.'' Mrs Lu wanted specific weaknesses to address at home. She bought extra spelling workbooks, assigned Chinese homework, and was frustrated the school did not use standard textbooks she could follow along with. The teacher and parent shared one goal—better spelling—but incompatible vocabularies made alignment impossible.",
          "Yang''s father looked at a report showing ''above average, performing really well'' and felt alarm. In his frame, ''half marks in total'' was the salient data point. Mrs Brown saw an A-grade equivalent; Mr Tan saw 50% failure. He asked for extra homework to take home. Mrs Brown reassured him everything was fine—which, to Mr Tan, meant she was not paying close enough attention.",
          "Bob stood up to answer a question—normal in Chinese classrooms—and was embarrassed when no one else did. His early behavioral problems (''naughty—not horrendously naughty, but not on task'') were cultural adjustment, not defiance. He was encouraged to write in Chinese, but the teacher wanted it translated to English. No one had made the expectation explicit.",
          "Mr Zhao attended his son Qirui''s meeting and left wanting more emphasis on weaknesses. Mrs Lewis had actually spent significant time on areas for development—but in indirect, child-centered language that Mr Zhao did not register as criticism. Chinese academic discourse is very direct; British child-centered discourse wraps critique in encouragement. The wrapping is invisible to Chinese parents."
        ]
      },
      {
        "heading": "The Parallel Tracks Pattern",
        "items": [
          "Parents listen for ''weak points.'' Teachers stress ''targets.'' Same goal, incompatible vocabulary. Both sides leave meetings believing they communicated when they did not.",
          "Parents want accuracy and perfect scores. Teachers want growth and process. Mrs Brown told Mr Tan: ''It is not the answer. It is how you get there. It is not winning the race, but to see how you run it.'' This is meaningless in a system where the answer IS the measure of learning.",
          "Extra homework from parents means love and investment—not pressure. Chinese parents will spend hours supervising study, buying extra materials, drilling weak areas. A teacher who says ''no extra homework needed'' is perceived as uncommitted.",
          "Praise alarms Chinese parents. Criticism, constructively framed, reassures them. One parent observed that British teachers ''make excuses for children in order to encourage them, whereas Chinese teachers criticize children in an effort to pressurize them to improve.'' The parent found the encouragement frustrating."
        ]
      },
      {
        "heading": "How to Bridge the Tracks",
        "items": [
          "Be explicit about weaknesses. Do not frame everything as ''areas for growth.'' Say: ''Her addition is solid. Subtraction with regrouping is where we are focusing. Here is what that looks like at home.'' Directness is clarity, not coldness.",
          "Separate process from outcomes. When a parent wants 100%, do not dismiss it. Say: ''I understand 100% is your goal. We are building toward that. This week it is X; next week Y.'' Connect their outcome focus to your process focus.",
          "Expect parents to do extra work at home—and welcome it. Give them specific, high-value actions: ''The most helpful thing is to have him explain what he learned today. Not drill; conversation.'' This channels their energy productively.",
          "Provide visual evidence. Photos of classwork, annotated samples, rubrics with checkmarks. A parent who can see exactly which letters need improvement or which math steps were skipped trusts that you have actually looked closely.",
          "Acknowledge the system gap openly. ''I know our grading looks different from what you are used to. Let me explain what an A means in our system, and how I track progress within that band.'' Transparency prevents the parallel-track drift."
        ]
      }
    ],
    "citations": [
      {"author": "Ran, A.", "year": 2001, "title": "Travelling on Parallel Tracks: Chinese Parents and English Teachers", "journal": "Educational Research", "doi": "10.1080/00131880110081062"},
      {"author": "Li, J.", "year": 2005, "title": "Mind or Virtue: Western and Chinese Beliefs About Learning", "journal": "Current Directions in Psychological Science", "doi": "10.1111/j.0963-7214.2005.00342.x"}
    ]
  }'::jsonb
WHERE module_id = 'china-001' AND dimension_number = 2;


-- ══════════════════════════════════════════════════════════════════════════════
-- D3 — Exam Culture, System Structure, and the Stakes
-- ══════════════════════════════════════════════════════════════════════════════
UPDATE public.pd_dimensions
SET
  title = 'Exam Culture, System Structure, and the Stakes',
  research_status = 'partial',
  content = '{
    "summary": "China''s examination system is high-stakes in ways that shape every decision a parent makes about their child''s education. The gaokao—a single national exam taken once in year 13—determines university entry, which largely determines career. Vocational tracks are differentiated early and hard to switch from. Tutoring is technically restricted but thrives in shadow markets. International schools offer an alternative pathway, but parents bring gaokao-shaped expectations with them. Understanding the system''s logic helps you understand why parents push so hard and why international education feels both liberating and unsettling to them.",
    "sections": [
      {
        "heading": "The Gaokao and Why Every Year Counts",
        "items": [
          "The gaokao is not just an important exam. It is the primary mechanism by which students are sorted into universities, and universities are stratified by prestige and placement outcomes. A student''s university determines the jobs they are recruited for, the networks they enter, and often their geographic mobility. There is no second chance; you take it once. This is not helicopter parenting—it is rational response to genuine scarcity.",
          "Because the gaokao looms, parents reason backward. A first-grader''s habits, strengths, and weaknesses now will compound through nine years. Early intervention—extra tutoring, specific skill-building, character cultivation—is insurance. The parent investing heavily now is trying to prevent a crisis when the child reaches year 13 unprepared.",
          "Track differentiation begins early and is largely irreversible. Students are sorted into academic vs. vocational tracks, sometimes as early as middle school. The academic track leads to gaokao; the vocational track leads to different examinations and different outcomes. Parents fight fiercely for the academic track because switching later is difficult.",
          "International schools are partly an escape valve from this pressure. Parents choose international education hoping for more balance. But they often cannot release the gaokao-shaped expectations they have internalized. A teacher who says ''we do not grade or rank students'' can confuse parents who see ranking as essential preparation."
        ]
      },
      {
        "heading": "How the System Shapes Learning Beliefs",
        "items": [
          "The gaokao does not just select students; it reinforces the virtue-oriented model of learning. The system rewards diligence, persistence, concentration, and willingness to endure hardship. A student who studies eight hours a day, memorizes efficiently, and maintains focus for three-hour exam blocks is not wasting time—they are developing exactly the character traits their culture values.",
          "The shadow tutoring economy persists despite the Double Reduction policy of 2021, which banned for-profit tutoring for K–9. Parents find loopholes: private tutoring, online classes framed as ''enrichment,'' study groups with paid facilitators. For parents, tutoring is risk mitigation. For students, it is often exhausting normality.",
          "Grading systems embody these stakes. A Chinese system allows 100/100—perfection is achievable and meaningful. A Western system uses letter grades or bands where an A is 90–100. A Chinese parent sees 95/100 as five points of failure; a Western teacher sees 95/100 as excellent. These are not different standards; they are different assumptions about whether perfection is the standard.",
          "Chinese children''s beliefs about learning—diligence, persistence, concentration as moral virtues—are reinforced by this system every day. The system and the culture are mutually reinforcing; neither can be understood without the other."
        ]
      },
      {
        "heading": "What Parents Expect From International Schools",
        "items": [
          "Parents enroll children in international schools partly to escape gaokao pressure and partly to hedge their bets. They want the option of studying abroad. They also hope for a more balanced education. But they often have not released the underlying assumption: education''s primary purpose is preparation for high-stakes sorting.",
          "When your school says it does not rank students or publish league tables, parents may feel liberated or anxious. Explaining how a process-focused system still builds the skills that matter—on any high-stakes exam—is essential early communication.",
          "Expect questions about rigor and comparisons. ''What percentage of graduates get into top universities?'' ''How does your English teaching compare?'' These questions are rational in their framework. Answering evasively creates doubt. Answer directly, then reframe.",
          "The most effective parent communication acknowledges the tension: ''We are not preparing for the gaokao, but we are building the deep learning and resilience that help students succeed on any high-stakes exam. Here is what that looks like in practice.'' Validate the concern, then clarify the approach."
        ]
      }
    ],
    "citations": [
      {"author": "Li, J.", "year": 2005, "title": "Mind or Virtue: Western and Chinese Beliefs About Learning", "journal": "Current Directions in Psychological Science", "doi": "10.1111/j.0963-7214.2005.00342.x"},
      {"author": "Ministry of Education (China)", "year": 2021, "title": "Circular on Further Reducing Burden of Homework and Off-Campus Tutoring for Compulsory Education Students"}
    ]
  }'::jsonb
WHERE module_id = 'china-001' AND dimension_number = 3;


-- ══════════════════════════════════════════════════════════════════════════════
-- D4 — Classroom Dynamics and the Learning Sequence
-- ══════════════════════════════════════════════════════════════════════════════
UPDATE public.pd_dimensions
SET
  title = 'Classroom Dynamics and the Learning Sequence',
  research_status = 'fully_sourced',
  content = '{
    "summary": "Chinese students learn through a specific sequence: memorize first, then understand, then apply, then question. Western teachers often expect immediate verbal engagement and questioning—which asks students to skip to step four before completing steps one through three. The result is a classroom where silence looks like disengagement but is actually disciplined method, and where the teacher''s most encouraging behaviors can feel disorienting to students trained in a different order of operations.",
    "sections": [
      {
        "heading": "The Four-Step Sequence: Memorize, Understand, Apply, Question",
        "items": [
          "Chinese learners typically follow a sequence that looks like this: first, commit the new material to memory. Second, work toward understanding through sustained personal effort. Third, apply the knowledge to real situations. Fourth—and only then—question it, challenge it, extend it. Western classrooms often start at step four: ''What do you think about this? Challenge the idea. Ask questions.'' To a Chinese student, this feels like being asked to critique a building before seeing the blueprints.",
          "Dahlin and Watkins found that Chinese students use memorization and repetition more than British peers—but for different purposes. British students viewed understanding as sudden insight, a flash of clarity. Chinese students viewed understanding as a long process requiring extensive personal effort, with memorization as a path toward deeper comprehension, not a substitute for it.",
          "This means a Chinese student who is silently re-reading a passage is not stuck. They are on step one or two—securing the material before they are ready to discuss it. Asking them to ''share their initial reactions'' can feel premature and anxiety-inducing, because they have not yet earned the right (in their framework) to have reactions.",
          "Repetition is not rote. In the Chinese model, you repeat to deepen, not just to recall. Each pass through the material adds a layer of understanding. Western teachers who see repetition as low-level and discussion as high-level are mapping their own hierarchy onto a different system."
        ]
      },
      {
        "heading": "Why Silence Is Not Disengagement",
        "items": [
          "Speaking in the Confucian tradition carries moral weight. To speak is to commit yourself—to claim publicly that your idea has merit. If you cannot back your claim with action, the virtuous choice is silence. Kim (2002) found that speaking did not interfere with Western students'' thinking performance but actively interfered with Asian American students''. The processing mode is different.",
          "Pratt, Kelly, and Wong (1999) found that Western teachers in Hong Kong characterized Chinese students as ''quiet and receptive, lacking a challenging attitude toward authority.'' The students themselves described learning as requiring ''tremendous dedication and methodical steps.'' Both descriptions are accurate—they are just describing different things.",
          "When you ask a question and get silence, it does not mean nobody knows the answer. It may mean everyone is still in the memorize-and-understand phase and considers it premature to speak. Or it may mean students know the answer but see no reason to perform knowledge publicly when the teacher already knows it.",
          "Participation grades create a genuine ethical conflict: you are asking students to perform a behavior (tentative public thinking) that their moral framework considers reckless. This does not mean you cannot build toward participation—but understand that you are asking for cultural code-switching, not just a classroom skill."
        ]
      },
      {
        "heading": "Process vs. Product: The Daily Friction Point",
        "items": [
          "One teacher, Mrs Brown, described her Chinese student Yang as following instructions ''to the letter''—expending great effort, very anxious about mistakes. But when asked to do investigative maths (open-ended problem-solving), Yang responded: ''I have not got the answer yet''—as if the task was to find the single correct answer, not to explore the problem. Mrs Brown''s philosophy was: ''It is not the answer. It is how you get there.'' Yang''s framework had no space for this.",
          "A ''good teacher'' in the Western frame arouses interest, explains clearly, and organizes activities. A ''good teacher'' in the Chinese frame has deep subject knowledge, can answer any question, and serves as a moral model for students. When you prioritize facilitation over instruction, students may feel you do not know the material well enough to teach it directly.",
          "Homework follows the same split. Chinese parents expect homework to reinforce and drill specific skills taught that day. Open-ended homework (''write about something interesting'') can confuse both parents and students because it lacks the structure that signals rigor."
        ]
      }
    ],
    "citations": [
      {"author": "Li, J.", "year": 2005, "title": "Mind or Virtue: Western and Chinese Beliefs About Learning", "journal": "Current Directions in Psychological Science", "doi": "10.1111/j.0963-7214.2005.00342.x"},
      {"author": "Dahlin, B. & Watkins, D.", "year": 2000, "title": "The Role of Repetition in the Processes of Memorizing and Understanding", "journal": "British Journal of Educational Psychology", "doi": "10.1348/000709900157976"},
      {"author": "Kim, H.S.", "year": 2002, "title": "We Talk, Therefore We Think? A Cultural Analysis of the Effect of Talking on Thinking", "journal": "Journal of Personality and Social Psychology", "doi": "10.1037/0022-3514.83.4.828"},
      {"author": "Ran, A.", "year": 2001, "title": "Travelling on Parallel Tracks: Chinese Parents and English Teachers", "journal": "Educational Research", "doi": "10.1080/00131880110081062"}
    ]
  }'::jsonb
WHERE module_id = 'china-001' AND dimension_number = 4;


-- ══════════════════════════════════════════════════════════════════════════════
-- D5 — Homework, Praise, and What "Support" Means
-- ══════════════════════════════════════════════════════════════════════════════
UPDATE public.pd_dimensions
SET
  title = 'Homework, Praise, and What "Support" Means',
  research_status = 'fully_sourced',
  content = '{
    "summary": "Chinese parents and Western teachers have fundamentally different definitions of what it means to support a child''s learning. Parents show support through extra homework, close monitoring of weak points, and direct criticism aimed at improvement. Teachers show support through encouragement, celebrating progress, and building self-esteem. Neither side realizes their version of support looks like neglect—or even harm—to the other. This dimension is a translation guide for the daily interactions where these systems collide.",
    "sections": [
      {
        "heading": "Homework as Love Language",
        "items": [
          "Chinese parents giving extra homework at home is not pressure. It is care. Mrs Lu, a parent in Ran''s study, said: ''If we know the content of the textbook, we can check and help her if she has any problem. Now we cannot follow her. Since we cannot help her, we feel guilty.'' She was frustrated that the school did not use standard textbooks she could track.",
          "Another parent: ''Chinese parents, no matter how busy we are, we will spend some time in child''s study. The problem is we do not know how to help her.'' The desire to help is intense and genuine. Parents who request extra homework from you are testing your commitment to their child, not burdening them.",
          "Mrs Brown discovered that parents were doing extensive supervised work at home—and she had no idea. ''They were anxious for me to provide them with material for them to work with at home.'' When she found out, she felt conflicted: providing worksheets felt like capitulating to drill culture, but she recognized the parents'' effort as deeply invested care.",
          "When you say ''no extra homework needed,'' parents hear: ''I have not identified any weaknesses worth addressing.'' This does not mean you should assign busy-work. It means you should offer specific, targeted practice: ''This week, practice these five subtraction problems. Here is exactly where he gets confused.''"
        ]
      },
      {
        "heading": "Praise as Alarm, Criticism as Reassurance",
        "items": [
          "Chinese parents observed that British teachers ''make excuses for children in order to encourage them, whereas Chinese teachers criticize children in an effort to pressurize them to improve.'' One parent found it ''frustrating that the teacher seemed to spend more time praising than complaining or pointing out her weaknesses.''",
          "When you say ''your child''s vocabulary is good,'' parents hear you highlighting vocabulary because everything else is a problem. When you say ''satisfactory,'' they hear ''barely passing.'' The same words carry different emotional weight across the two systems.",
          "Parents take your good points for granted and focus on the weak points—because that is where action is needed. A teacher who only delivers good news is perceived as either unobservant or withholding the truth. Directness about weaknesses is what builds trust.",
          "This does not mean you should abandon encouragement. It means you should lead with the weakness, then follow with the strength. ''Subtraction with regrouping needs work—here is our plan. Her addition and multiplication are strong, which tells me she has the foundation to get there.'' The parent hears a professional who has actually looked."
        ]
      },
      {
        "heading": "Translation Guide: What They Say, What They Mean, What to Do",
        "items": [
          "Parent says: ''Can you give her more homework?'' They mean: ''I want to be involved in her learning at home. Give me something concrete to do.'' What to do: provide specific, targeted practice. Frame it as partnership, not extra burden.",
          "Parent says: ''Is 85% good enough?'' They mean: ''I see 15 points of room for improvement. Which 15?'' What to do: break down the score. Show exactly which concepts were missed and what the plan is. Do not just say ''85% is great.''",
          "Parent says: ''The teacher in China would have told me exactly what to fix.'' They mean: ''Your feedback is too vague for me to act on.'' What to do: be specific. ''Chapter 3 fractions are solid. Chapter 4 decimals need more practice. Here is a worksheet.''",
          "Parent says nothing and seems satisfied. They may mean: ''I do not know how to navigate this system, so I will handle it at home.'' What to do: proactively share detailed written feedback. Do not assume silence means agreement."
        ]
      }
    ],
    "citations": [
      {"author": "Ran, A.", "year": 2001, "title": "Travelling on Parallel Tracks: Chinese Parents and English Teachers", "journal": "Educational Research", "doi": "10.1080/00131880110081062"},
      {"author": "Li, J.", "year": 2005, "title": "Mind or Virtue: Western and Chinese Beliefs About Learning", "journal": "Current Directions in Psychological Science", "doi": "10.1111/j.0963-7214.2005.00342.x"}
    ]
  }'::jsonb
WHERE module_id = 'china-001' AND dimension_number = 5;


-- ══════════════════════════════════════════════════════════════════════════════
-- D6 — Cultural Identity and the Third Culture Child
-- ══════════════════════════════════════════════════════════════════════════════
UPDATE public.pd_dimensions
SET
  title = 'Cultural Identity and the Third Culture Child',
  research_status = 'partial',
  content = '{
    "summary": "Chinese children in international schools live between two models of learning every day. At home: diligence, humility, moral effort, respect for authority, and the pursuit of perfection. At school: curiosity, self-expression, questioning, and the celebration of process over product. The child navigating both systems does not blend them—they code-switch between them, often without anyone noticing. Understanding this dual existence is essential to supporting students who may look adapted but are quietly managing a deeper tension.",
    "sections": [
      {
        "heading": "The Question No One Asks",
        "items": [
          "Li poses the central question directly: ''How does acculturation of learning beliefs proceed when children reared in one culture attend school in another?'' Chinese children in international schools live this question daily. They are educated in one model and raised in another. The two systems do not merge naturally.",
          "Children''s learning beliefs become stronger with age, not weaker. Li and Wang (2004) found that by kindergarten, Chinese children already describe learning in terms of self-improvement, mastery, and social contribution, while Western children emphasize smartness and play. By age 8, these patterns are deeply set. A child who enters international school at 8 does not arrive as a blank slate—they arrive with deeply embedded virtue-orientation beliefs that will not dissolve on exposure to Western methods.",
          "Li asks a question with no comfortable answer: ''To what extent should educators attempt to reform Asian students into talkers; or similarly, to what extent should Asian educators make Western children quiet learners?'' There is no right answer. But teachers should know the question exists, because it shapes everything about how a Chinese student experiences an international classroom."
        ]
      },
      {
        "heading": "What Code-Switching Looks Like",
        "items": [
          "Bob, in Ran''s study, became ''naughty'' during his cultural transition—not horrendously, but unfocused and resistant. His father was called into school. The behavior was cultural disorientation, not defiance. Bob had been encouraged to write in Chinese but the teacher wanted it in English. He stood up to answer questions (normal in China) and was embarrassed when classmates stayed seated. These small friction points accumulated.",
          "Despite years in British schools, Chinese parents in Ran''s study maintained Chinese learning beliefs and practices at home. The home culture does not dilute—it runs parallel to the school culture. Children learn to present differently in each context: engaged questioner at school, diligent memorizer at home.",
          "A child who seems fully adapted may be managing significant cognitive load. They may participate verbally in class because they have learned it is expected, while privately believing that real learning happens through silent effort. They may accept teacher praise at school while knowing their parents will focus on what went wrong.",
          "Do not assume adaptation means reconciliation. Ask students what they think learning means. Ask how they study at home. Listen for the dual tracks. A student who says ''I study by reading the textbook three times, then doing practice problems'' is showing you their virtue-orientation method—even if they also raise their hand in class."
        ]
      },
      {
        "heading": "Supporting the Whole Student",
        "items": [
          "Acknowledge the tension explicitly with older students: ''I know our classroom looks different from what you might be used to. Both approaches have real strengths. You do not have to choose one.'' Giving permission to hold both models reduces the hidden pressure to perform one identity.",
          "Talk to parents about the dual system. Most Chinese parents in international schools know the tension exists—they chose it deliberately. What they want is reassurance that the school respects their values while offering something different. ''We build on the discipline and focus your child brings from home'' is a bridge sentence.",
          "Watch for signs of exhaustion that are not academic: a child who is quiet at school AND at home may be depleted from constant code-switching. A child whose parents report excellent behavior at home but who acts out at school may be releasing the pressure of a system they cannot fully inhabit."
        ]
      }
    ],
    "citations": [
      {"author": "Li, J.", "year": 2005, "title": "Mind or Virtue: Western and Chinese Beliefs About Learning", "journal": "Current Directions in Psychological Science", "doi": "10.1111/j.0963-7214.2005.00342.x"},
      {"author": "Li, J. & Wang, Q.", "year": 2004, "title": "Perceptions of Achievement and Achieving Peers in U.S. and Chinese Kindergartners", "journal": "Social Development"},
      {"author": "Ran, A.", "year": 2001, "title": "Travelling on Parallel Tracks: Chinese Parents and English Teachers", "journal": "Educational Research", "doi": "10.1080/00131880110081062"}
    ]
  }'::jsonb
WHERE module_id = 'china-001' AND dimension_number = 6;


-- ══════════════════════════════════════════════════════════════════════════════
-- NEW SCENARIOS — 4 additional scenarios from Ran (2001) case studies
-- ══════════════════════════════════════════════════════════════════════════════

-- Scenario: The parent who brings a textbook
INSERT INTO public.pd_scenarios (module_id, title, setup, common_misread, actual_dynamic, response_framework, source_type, dimension_tags, status)
VALUES (
  'china-001',
  'The parent who brings a textbook to the meeting',
  'Mrs Lu arrives at the parent-teacher meeting with a stack of maths textbooks she bought from a bookshop. She asks you which chapters you are covering this term and whether you can send home a list of exercises her daughter should complete each week. She also mentions she has been giving extra Chinese homework and handwriting practice at home.',
  'The parent is a pushy tiger-mom who is putting excessive academic pressure on her child and trying to micromanage your curriculum. She does not trust your teaching methods and wants to impose a Chinese-style drill approach.',
  'Mrs Lu cannot help her daughter because she does not know what is being taught or how. In China, parents follow along with standard textbooks and check their children''s work each night. Without a textbook to reference, she feels locked out of her child''s education. The extra homework is not pressure—it is the only way she knows how to show care and involvement. She is asking you to let her in.',
  '["Acknowledge her effort: ''Thank you for being so involved. That matters enormously.''", "Provide a specific, simplified overview of what you are covering each week—even a one-page summary helps.", "Offer targeted practice: ''This week, these five problems will reinforce what we did in class. Here is where she tends to get stuck.''", "Frame her home practice as complementary: ''The Chinese writing and handwriting practice you do at home builds discipline that helps in every subject here.''"]'::jsonb,
  'academic',
  '{2, 5}'::integer[],
  'live'
);

-- Scenario: The investigative maths frustration
INSERT INTO public.pd_scenarios (module_id, title, setup, common_misread, actual_dynamic, response_framework, source_type, dimension_tags, status)
VALUES (
  'china-001',
  'The investigative maths frustration',
  'You set an open-ended maths investigation: students must find patterns in number sequences and explain their reasoning. Yang, your Chinese student, follows your instructions precisely and works harder than anyone. But when you ask her to share her ''initial thinking,'' she says ''I have not got the answer yet.'' She seems anxious, redrafts every sentence, and will not submit work until it is perfect. Her father later asks you for extra exercises to do at home.',
  'Yang is a perfectionist who cannot handle ambiguity. She needs to loosen up, take risks, and accept that ''messy thinking'' is part of learning. Her father is reinforcing rigid thinking by drilling at home.',
  'Yang is following the Chinese learning sequence: memorize, understand, apply, then question. You are asking her to jump to step four (share reasoning, explore) before she has completed steps one and two (secure the knowledge, understand it deeply). Her perfectionism is not anxiety—it is the virtue of diligence. Her father''s request for exercises is rational: in his frame, structured practice is how you build toward open-ended thinking, not a substitute for it.',
  '["Start investigations with a structured warm-up that lets students secure foundational facts first, then open up the inquiry.", "Reframe ''initial thinking'' as ''what you notice so far''—lower the commitment threshold so students can share observations without claiming conclusions.", "Provide Yang with a worked example of what an investigation looks like completed, so she can see the destination before navigating the journey.", "Give her father the structured exercises he wants AND explain: ''These build the foundation. The investigation in class builds on top of it. Both matter.''"]'::jsonb,
  'academic',
  '{1, 4}'::integer[],
  'live'
);

-- Scenario: The naughty bilingual kid
INSERT INTO public.pd_scenarios (module_id, title, setup, common_misread, actual_dynamic, response_framework, source_type, dimension_tags, status)
VALUES (
  'china-001',
  'The bilingual student who acts out',
  'Bob arrived from China a year ago. He is bright—his maths is ''way ahead'' of British peers in mechanical arithmetic. But he has become disruptive: off-task, occasionally defiant, described as ''naughty—not horrendously naughty, but not on task.'' His father was called in. Bob had also been encouraged to write in Chinese for some assignments, but you asked for it in English, and nothing was submitted. Bob stands up every time he wants to speak.',
  'Bob has a behavior problem. He is not adjusting well, possibly needs additional support or a behavior plan. His standing up to speak is odd. The Chinese writing issue is a misunderstanding about homework expectations.',
  'Bob is navigating two complete cultural systems simultaneously and no one has made either set of expectations explicit. Standing up to speak is normal classroom behavior in China—he was embarrassed when he realized British students stay seated. The ''naughtiness'' is frustration from cultural disorientation, not defiance. He was told to write in Chinese to maintain his first language, but did not understand the teacher also expected an English version. Each small miscommunication compounds.',
  '["Make classroom conventions explicit: ''In our class, we stay seated to answer. I know it is different from what you are used to—both ways are fine, we just do it this way here.''", "Clarify assignment expectations in writing, especially for bilingual students: ''Write your first draft in whichever language helps you think. Then we will work on the English version together.''", "Reframe the behavior narrative: before escalating to a behavior plan, ask ''what changed recently?'' Cultural adjustment stress peaks at 6-12 months, not on arrival.", "Meet with the father to align: he may not know about classroom friction. Chinese parents are often deeply cooperative once they understand the specific expectations."]'::jsonb,
  'academic',
  '{4, 6}'::integer[],
  'live'
);

-- Scenario: The standing-up-to-answer embarrassment
INSERT INTO public.pd_scenarios (module_id, title, setup, common_misread, actual_dynamic, response_framework, source_type, dimension_tags, status)
VALUES (
  'china-001',
  'The classroom convention clash',
  'You notice that your Chinese student stands up every time you call on them, even though all other students remain seated. Other students giggle. The student looks confused and embarrassed. In the same week, you ask the class to debate a topic, and your Chinese students sit silently while Western students dominate the discussion. When you call on a Chinese student directly, she says quietly: ''I am still thinking.''',
  'The standing student does not know basic classroom etiquette. The silent students are disengaged or lack confidence. They need encouragement to ''find their voice'' and participate more actively.',
  'Standing to address the teacher is a sign of respect in Chinese classrooms—the student is showing deference, not ignorance. The silent students are not disengaged; they are following the Chinese learning norm where you speak only when you are certain and can back your claim. Saying ''I am still thinking'' is an honest and culturally appropriate response. In the Confucian tradition, speaking is an act of commitment—premature speech is considered reckless, not brave.',
  '["Quietly explain classroom conventions one-on-one, not publicly: ''Here, students usually stay seated. It is just a different custom—you were being very respectful.''", "For discussions, build in structured ''think time'' before any speaking. Give 2 minutes of silent writing first, then invite sharing. This respects the memorize-understand-then-speak sequence.", "Offer multiple participation modes: written responses, pair discussions before whole-class sharing, or digital polls. Not all learning needs to be verbal.", "Never frame silence as a problem to fix. Frame it as a different mode of engagement: ''Some students process by talking, others by thinking quietly first. Both are valuable in this classroom.''"]'::jsonb,
  'academic',
  '{1, 4}'::integer[],
  'live'
);


-- ══════════════════════════════════════════════════════════════════════════════
-- Verify after running:
--   SELECT dimension_number, title, research_status,
--          length(content::text) as content_chars,
--          jsonb_array_length(content->'sections') as sections,
--          jsonb_array_length(content->'citations') as citations
--   FROM pd_dimensions
--   WHERE module_id = 'china-001'
--   ORDER BY dimension_number;
--
--   SELECT count(*) FROM pd_scenarios WHERE module_id = 'china-001';
--   -- Expected: 9 (5 original + 4 new)
-- ══════════════════════════════════════════════════════════════════════════════
