-- Seed India Simulation 2: "The PTM Follow-Up"
-- Source: INDIA_SIM2_THE_PTM_FOLLOW_UP.md
-- Dimensions: D2 (Parent-Teacher Follow-Through), D4 (Relational Trust and School Responsiveness), D5 (Escalation, Specificity, and System Efficacy)
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
  'a1b2c3d4-0004-0002-0001-000000000001',
  'india-001',
  'The PTM Follow-Up',
  'A parent raises a concern at a PTM about group work dynamics. Two weeks later, he emails to ask what happened. Your response will determine whether the meeting meant anything.',
  'It is July at Greenwood Academy in Pune. Midterm PTMs are underway. You are moving quickly from one family to the next, trying to be present without running too late. Aarav''s father, Mr. Sharma, sits down with a notebook in his hand.',
  '[
    {
      "name": "You",
      "role": "Year 5 class teacher at Greenwood Academy, Pune",
      "description": "You trained in the UK, US, or Australia. You care deeply about student belonging and good communication with families. You are warm in meetings, but your workload is heavy and your follow-through can become more general than specific when several issues are moving at once."
    },
    {
      "name": "Mr. Sharma",
      "role": "Father of Aarav",
      "description": "Mr. Sharma works in operations for a manufacturing company and takes PTMs seriously. He is courteous, practical, and not especially argumentative. He expects that if a concern is discussed in a meeting, the school will either act on it or explain clearly what happens next."
    },
    {
      "name": "Aarav",
      "role": "Student, Year 5, age 10",
      "description": "Aarav is thoughtful, slightly reserved in large groups, and academically capable. He likes school but does not always insert himself socially. When group work turns messy, he often lets louder children decide roles."
    }
  ]',
  '{
    "setup": {
      "id": "setup",
      "type": "setup",
      "title": "Setup",
      "content": [
        "Parent-Teacher Meeting Day. A plastic chair, a paper sign-in sheet, half-finished tea, and six more families still waiting.",
        "It is July at Greenwood Academy in Pune. Midterm PTMs are underway. You are moving quickly from one family to the next, trying to be present without running too late.",
        "Aarav''s father, Mr. Sharma, sits down with a notebook in his hand.",
        "''Aarav is doing well academically,'' he says, ''but he has mentioned something a few times. In group work, the same louder children keep deciding roles, and he gets pushed to smaller tasks. He says this happened again during the science chart activity. I do not want to overreact, but I also do not want this to become a pattern.''",
        "You know the class dynamic he means. Nothing looks like outright bullying. But there are definitely students who dominate shared tasks unless guided carefully.",
        "You have eight minutes left in the slot, one child waiting outside to show a portfolio, and three parents already glancing at the clock."
      ],
      "next": "dilemma_1"
    },
    "dilemma_1": {
      "id": "dilemma_1",
      "type": "dilemma",
      "title": "The PTM Response",
      "prompt": "How do you respond in the meeting?",
      "choices": [
        {
          "id": "1a",
          "label": "Offer warm reassurance only",
          "text": "Thank you for telling me, Mr. Sharma. I am glad you raised it. Aarav is such a lovely child, and I will definitely keep an eye on it.",
          "next": "consequence_1a"
        },
        {
          "id": "1b",
          "label": "Promise quick action",
          "text": "Thank you. I will speak to the group tomorrow and make sure Aarav gets more equitable roles right away.",
          "next": "consequence_1b"
        },
        {
          "id": "1c",
          "label": "Name a specific follow-through plan",
          "text": "Thank you for raising it. I have noticed that some students dominate group roles unless I structure them. Over the next two weeks, I will observe Aarav during collaborative tasks, rotate roles more explicitly, and check back with you by next Friday about what I am seeing.",
          "next": "consequence_1c"
        }
      ]
    },
    "consequence_1a": {
      "id": "consequence_1a",
      "type": "consequence",
      "title": "Warm Reassurance Only",
      "content": [
        "Mr. Sharma nods politely. ''Thank you, Teacher.''",
        "The PTM ends smoothly.",
        "But the next two weeks are crowded. A reading assessment cycle begins, one student is absent for a family wedding, and you do not specifically revisit Aarav''s group experiences. You assume that because you are now more aware, you are effectively monitoring the issue.",
        "Then an email arrives: ''At the PTM we discussed Aarav''s difficulty getting meaningful roles in group work. I asked him this week, and he says it is still happening. Could you let me know what has been done since the meeting?''",
        "You realize that from his side, the meeting produced sympathy but not evidence."
      ],
      "next": "perspective_1"
    },
    "consequence_1b": {
      "id": "consequence_1b",
      "type": "consequence",
      "title": "Promised Quick Action",
      "content": [
        "The next day, you speak to the class in general terms about sharing responsibility in groups.",
        "It feels like you have done something. But in practice, the reminder is broad, and the next science activity still falls into familiar patterns. Aarav ends up lettering the title while two stronger personalities drive the task.",
        "Mr. Sharma writes again: ''Thank you for taking it up. Aarav says there was still no real change in his role this week. Could you explain what steps are being taken?''",
        "Your promise created a higher bar than your classroom follow-through actually met."
      ],
      "next": "perspective_1"
    },
    "consequence_1c": {
      "id": "consequence_1c",
      "type": "consequence",
      "title": "Named a Specific Follow-Through Plan",
      "content": [
        "You set a note in your planner. During the next two collaborative tasks, you deliberately watch Aarav''s groups, assign rotating roles, and record who leads, who writes, and who presents.",
        "At the end of the week, you message Mr. Sharma: ''I observed Aarav in two tasks. He contributes ideas but yields quickly when peers move faster. I have started rotating roles more explicitly and will keep doing so. Next step: I want to support him in claiming the recorder or presenter role at least once next week.''",
        "Mr. Sharma replies, ''Thank you. This is very helpful.''",
        "The problem is not solved yet. But the parent can now see that the meeting produced movement, not just empathy."
      ],
      "next": "perspective_1"
    },
    "perspective_1": {
      "id": "perspective_1",
      "type": "perspective",
      "title": "Mr. Sharma''s View",
      "content": [
        "Mr. Sharma did not come to the PTM because he wanted a long emotional conversation.",
        "He came because the meeting is supposed to matter.",
        "From his perspective, parent-teacher engagement is not successful when the teacher sounds kind. It is successful when the concern enters the school''s working memory. If a teacher listens warmly but the problem returns unchanged, the parent may feel not only disappointed but dismissed, even if no one intended that.",
        "Research note: In Indian PTM contexts, parents often judge the meeting by whether it produces visible responsiveness. The frustration is not always with disagreement itself. It is with the feeling that the system absorbed the concern politely and then carried on as before. (Munthe and Westergård, 2023)"
      ],
      "next": "reflection_1"
    },
    "reflection_1": {
      "id": "reflection_1",
      "type": "reflection",
      "title": "Reflection",
      "prompt": "What was the biggest risk in your first response?",
      "options": [
        "Sounding uncaring",
        "Promising more than you could track",
        "Treating empathy as if it were evidence of action",
        "Underestimating how concretely the parent would interpret your response"
      ],
      "next": "dilemma_2"
    },
    "dilemma_2": {
      "id": "dilemma_2",
      "type": "dilemma",
      "title": "The Parent Email",
      "prompt": "Mr. Sharma''s follow-up email is direct but respectful: ''At the PTM we discussed Aarav''s difficulty in getting proper roles in group work. I checked with him this week, and he feels the pattern is continuing. I wanted to understand what has been observed and what the school is doing next.'' You feel a flash of defensiveness. You are doing your best. But you also know the email is fair. How do you reply?",
      "choices": [
        {
          "id": "2a",
          "label": "Be defensive",
          "text": "Group work is complex, and these situations are not always as clear as children describe them. Aarav is doing well overall, and I think it would be best not to magnify a small issue.",
          "next": "consequence_2a"
        },
        {
          "id": "2b",
          "label": "Explain generally",
          "text": "Thank you for following up. I have been mindful of the issue and am continuing to observe classroom interactions. We are always working on collaboration as a class, and I will keep encouraging fair participation.",
          "next": "consequence_2b"
        },
        {
          "id": "2c",
          "label": "Account concretely for what happened",
          "text": "Thank you for following up. You are right to ask. Since the PTM, I gave a general reminder about shared roles, but I did not yet create a strong enough structure to change the pattern consistently. I have now planned three specific next steps: rotating roles, observing Aarav''s next two group tasks directly, and checking back with you on Friday with what I saw.",
          "next": "consequence_2c"
        }
      ]
    },
    "consequence_2a": {
      "id": "consequence_2a",
      "type": "consequence",
      "title": "Defensive Response",
      "content": [
        "Mr. Sharma''s next reply is still polite, but firmer: ''I understand group work is complex. My concern is not that the issue is huge, but that it may become a pattern if not addressed. I was hoping for a clearer response.''",
        "The problem is now larger than it was at the PTM. It is no longer only about Aarav''s group role. It is about whether the school takes parent concerns seriously once the polite meeting is over.",
        "You protected yourself in the moment. You weakened the relationship."
      ],
      "next": "perspective_2"
    },
    "consequence_2b": {
      "id": "consequence_2b",
      "type": "consequence",
      "title": "General Explanation",
      "content": [
        "Mr. Sharma thanks you for the message. Then nothing changes.",
        "A week later, he writes again, now cc''ing the grade coordinator: ''I appreciate the reply. I am still not clear on what has been specifically observed or changed. I would be grateful for a more concrete update.''",
        "Your answer was calm, professional, and almost useless from the parent''s point of view. It described attention, not action."
      ],
      "next": "perspective_2"
    },
    "consequence_2c": {
      "id": "consequence_2c",
      "type": "consequence",
      "title": "Concrete Account",
      "content": [
        "Mr. Sharma responds: ''Thank you. I appreciate the clarity.''",
        "You follow through. In the next task, Aarav is assigned discussion leader. He hesitates, but with a bit of prompting, he does it. In the second task, he volunteers to present one section.",
        "When you update Mr. Sharma on Friday, you can describe what you saw rather than what you meant to do.",
        "The original issue is still real. But the parent now experiences the school as responsive rather than slippery."
      ],
      "next": "perspective_2"
    },
    "perspective_2": {
      "id": "perspective_2",
      "type": "perspective",
      "title": "Aarav''s View",
      "content": [
        "Aarav notices more than adults think.",
        "He knows his father raised the issue because his father asked him again after the PTM. He also knows whether anything actually changed. Children like Aarav can sense quickly whether school conversations stay in the adult layer or alter classroom reality.",
        "If the adults speak warmly but nothing changes, Aarav learns a quiet lesson: meetings are for talking, not for shifting the pattern. If he sees a real change, even a small one, he learns that speaking up through a parent can matter.",
        "Research note: Responsiveness is not only for parents. It shapes children''s sense of whether school structures are real and whether quieter students can count on adults to rebalance participation."
      ],
      "next": "reflection_2"
    },
    "reflection_2": {
      "id": "reflection_2",
      "type": "reflection",
      "title": "Reflection",
      "prompt": "What made the strongest response in the second dilemma more effective?",
      "options": [
        "It sounded more apologetic",
        "It admitted the gap between intention and action",
        "It gave observable next steps and a timeline",
        "It treated the parent''s follow-up as legitimate rather than irritating"
      ],
      "next": "dilemma_3"
    },
    "dilemma_3": {
      "id": "dilemma_3",
      "type": "dilemma",
      "title": "The System Question",
      "prompt": "The grade coordinator asks if this situation points to a broader issue. She says, ''We are getting more parent follow-ups after PTMs this term. Not hostile ones, but specific ones. I think some families are leaving meetings unclear about what happens next.'' You now have a chance to recommend a change beyond Aarav''s case. What do you suggest?",
      "choices": [
        {
          "id": "3a",
          "label": "Treat this as an individual parent issue",
          "text": "Some parents simply expect too much immediate action. I do not think the school needs a new system because of a few persistent follow-up emails.",
          "next": "consequence_3a"
        },
        {
          "id": "3b",
          "label": "Overcorrect immediately",
          "text": "We should require teachers to send written action plans after every PTM, even for small concerns, so no parent can say the school did nothing.",
          "next": "consequence_3b"
        },
        {
          "id": "3c",
          "label": "Tighten the follow-up system thoughtfully",
          "text": "We do not need formal action plans for every conversation, but for concerns that involve recurring patterns, teachers should record one clear next step, one time frame, and one follow-up point. That would make PTMs feel more consequential without becoming bureaucratic.",
          "next": "consequence_3c"
        }
      ]
    },
    "consequence_3a": {
      "id": "consequence_3a",
      "type": "consequence",
      "title": "Treated as Individual Issue",
      "content": [
        "Nothing systemic changes.",
        "Some teachers keep doing excellent follow-through. Others keep offering warm but vague reassurance. The pattern continues unevenly across classes.",
        "Parents who are persistent get clarity eventually. Parents who are less confident may simply stop asking.",
        "The school avoids extra process. It also misses a chance to make responsiveness more equitable."
      ],
      "next": "perspective_3"
    },
    "consequence_3b": {
      "id": "consequence_3b",
      "type": "consequence",
      "title": "Overcorrected Immediately",
      "content": [
        "The new PTM paperwork is heavy. Teachers resent it. Many start filling it with generic language just to comply.",
        "Parents receive more documentation, but not always more meaning. Aarav''s case is now technically covered by a stronger system, yet the school as a whole becomes more performative than responsive.",
        "You solved the visibility problem by creating a bureaucracy problem."
      ],
      "next": "perspective_3"
    },
    "consequence_3c": {
      "id": "consequence_3c",
      "type": "consequence",
      "title": "Tightened the System Thoughtfully",
      "content": [
        "The grade coordinator adopts a simple shared practice for substantive concerns: note the issue, note one next step, note a time frame, note who closes the loop.",
        "It is small enough to use and concrete enough to matter.",
        "At the next PTM cycle, teachers begin sending shorter but clearer follow-up messages. Parents still ask questions, but fewer of them feel they must reopen the whole conversation just to know whether anything happened.",
        "You have turned one parent email into a healthier school habit."
      ],
      "next": "perspective_3"
    },
    "perspective_3": {
      "id": "perspective_3",
      "type": "perspective",
      "title": "Mr. Sharma Revisited",
      "content": [
        "Mr. Sharma''s persistence was not really about group work alone.",
        "It was about whether the PTM is a meaningful institutional space or a courtesy ritual. If the school listens, nods, and forgets, the meeting functions as performance. If the school listens, records, acts, and reports back, the meeting becomes part of the learning system.",
        "Research note: In many Indian school contexts, trust is built less through polished messaging than through visible follow-through. Parents do not always need perfect outcomes. They need to know the concern entered a real process."
      ],
      "next": "reflection_3"
    },
    "reflection_3": {
      "id": "reflection_3",
      "type": "reflection",
      "title": "Reflection",
      "prompt": "What was the central lesson of the final dilemma?",
      "options": [
        "Schools need fewer parent meetings",
        "Teachers should never promise too much",
        "Responsiveness needs light structure, not just goodwill",
        "The real issue was parent impatience"
      ],
      "next": "debrief"
    },
    "debrief": {
      "id": "debrief",
      "type": "debrief",
      "title": "Debrief",
      "content": [
        "This simulation explored three recurring tensions in parent-teacher engagement in Indian school settings.",
        "Parent-Teacher Follow-Through (D2): Families often judge a meeting not only by the teacher''s warmth, but by whether the concern produces visible action, observation, or closure afterward.",
        "Relational Trust and School Responsiveness (D4): Trust is not built only through kindness. It is built when the school''s response is legible, specific, and proportionate. Parents may tolerate disagreement more easily than vagueness.",
        "Escalation, Specificity, and System Efficacy (D5): When follow-through is weak, parents often re-ask, escalate, or widen the circle — not necessarily because they are adversarial, but because they are trying to confirm that the issue entered an actual school process. Light institutional structure can prevent small concerns from becoming credibility problems.",
        "Research: Munthe, E., and Westergård, E. (2023). Parents'', teachers'', and students'' roles in parent-teacher conferences: A systematic review and meta-synthesis. Teaching and Teacher Education, 136, 104355. DOI: 10.1016/j.tate.2023.104355"
      ],
      "researchCitations": [
        {
          "author": "Munthe and Westergård",
          "year": "2023",
          "title": "Parents'', teachers'', and students'' roles in parent-teacher conferences: A systematic review and meta-synthesis",
          "journal": "Teaching and Teacher Education",
          "doi": "10.1016/j.tate.2023.104355"
        }
      ],
      "closingPrompt": "If you could return to the original PTM, what would you say so that Mr. Sharma leaves feeling heard and you leave with a follow-through plan you can actually sustain?"
    }
  }',
  ARRAY[2,4,5],
  20,
  2,
  'active'
);
