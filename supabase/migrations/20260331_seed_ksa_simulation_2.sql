-- Seed KSA Simulation 2: "The Student Voice Week"
-- Source: KSA_SIM2_THE_STUDENT_VOICE_WEEK.md
-- Dimensions: D1 (International Ethos and Cultural Fit), D2 (Parent Interpretation and Trust), D4 (Voice, Leadership, and Moral Meaning)
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
  'b2c3d4e5-0002-0002-0002-000000000003',
  'ksa-001',
  'The Student Voice Week',
  'A school launches Student Voice Week. A parent asks what the school means by ''voice'' and ''leadership.'' What looks like a simple question is really a test of whether the school can translate its values into culturally grounded practice.',
  'It is January at Al Manar International School in Riyadh. The school has launched Student Voice Week, a cross-campus initiative where students will identify a problem in school life and propose improvements. Leadership describes it as a way to build agency, communication, and collaborative citizenship.',
  '[
    {
      "name": "You",
      "role": "Year 5 classroom teacher at Al Manar International School, Riyadh",
      "description": "You trained in the UK, US, or Australia. You believe students should speak up, solve problems, and contribute ideas. You care about making students feel capable, but you are still learning how international-school language can sound different in Saudi family contexts."
    },
    {
      "name": "Mrs. Alsubaie",
      "role": "Mother of Noura",
      "description": "Mrs. Alsubaie chose the school for English, confidence, and future opportunities, but also expects clear cultural and moral fit. She is thoughtful, polite, and precise. She is not suspicious by default. She wants to understand what the school really means by the values-heavy language it uses."
    },
    {
      "name": "Noura",
      "role": "Student, Year 5, age 10",
      "description": "Noura is strong in English, observant, eager to do school ''the right way,'' and increasingly attentive to which kinds of speech seem admired by adults."
    }
  ]',
  '{
    "setup": {
      "id": "setup",
      "type": "setup",
      "title": "Setup",
      "content": [
        "A bright classroom slide titled Student Voice Week. Under it: ''Speak up. Lead change. Make school better.''",
        "It is January at Al Manar International School in Riyadh. The school has launched Student Voice Week, a cross-campus initiative where students will identify a problem in school life and propose improvements. Leadership describes it as a way to build agency, communication, and collaborative citizenship.",
        "Your class is excited. So are many teachers.",
        "But you know the phrase student voice can carry different meanings depending on who hears it.",
        "Noura is one of your most capable students. She is strong in English, confident in presentations, and highly attuned to what the school rewards. When the announcement slides went up, she whispered to a friend, ''We get to tell the school what should change.''",
        "That afternoon, Mrs. Alsubaie messages you: ''Teacher, may I ask about Student Voice Week? Noura explained it as children making proposals to improve school. That sounds positive. I only want to understand the boundaries. Is this about problem-solving inside school life, or is it encouraging children to question adults more generally? I ask because the language can mean different things.''",
        "The question is calm, not hostile. But it is asking you to do interpretive work, not just provide logistics."
      ],
      "next": "dilemma_1"
    },
    "dilemma_1": {
      "id": "dilemma_1",
      "type": "dilemma",
      "title": "The First Explanation",
      "prompt": "How do you respond to Mrs. Alsubaie''s message?",
      "choices": [
        {
          "id": "1a",
          "label": "Defend the student voice language",
          "text": "Student voice is an important part of modern learning. We want students to think critically, express opinions, and take ownership. It is about helping them become confident leaders.",
          "next": "consequence_1a"
        },
        {
          "id": "1b",
          "label": "Reassure vaguely",
          "text": "Please do not worry. It is just a school activity and nothing controversial.",
          "next": "consequence_1b"
        },
        {
          "id": "1c",
          "label": "Translate the activity concretely",
          "text": "That is a fair question. In our Year 5 context, this means identifying practical school-life issues — like playground flow, library access, or classroom routines — then making respectful proposals with evidence. It is not about telling children to challenge family authority or moral boundaries. It is about guided problem-solving inside school.",
          "next": "consequence_1c"
        }
      ]
    },
    "consequence_1a": {
      "id": "consequence_1a",
      "type": "consequence",
      "title": "Defended the Language",
      "content": [
        "Mrs. Alsubaie thanks you, but her reply is careful: ''I understand. My question was more about how the idea is being interpreted by children.''",
        "The next day, you hear Noura telling another student, ''We are supposed to speak up even if we disagree.''",
        "Nothing in your message was wrong. But because it stayed at the level of international-school ideals, it left the concrete boundaries of the activity unclear. The school slogan travelled faster than the practical meaning.",
        "You now have a family that is not against the activity, but less sure that the school notices how its language lands."
      ],
      "next": "perspective_1"
    },
    "consequence_1b": {
      "id": "consequence_1b",
      "type": "consequence",
      "title": "Reassured Vaguely",
      "content": [
        "Mrs. Alsubaie responds politely: ''Thank you, Teacher.''",
        "Two days later, she writes again: ''I appreciate that. Could you still clarify what kinds of proposals children are being asked to make? Noura says they can suggest rules that adults should change.''",
        "Your first answer solved nothing because it addressed the emotion, not the meaning.",
        "By trying to avoid the values layer, you made it harder for the parent to trust that you had actually understood the question."
      ],
      "next": "perspective_1"
    },
    "consequence_1c": {
      "id": "consequence_1c",
      "type": "consequence",
      "title": "Translated the Activity Concretely",
      "content": [
        "Mrs. Alsubaie replies almost immediately: ''Thank you. That makes much more sense.''",
        "The next day, Noura comes to class with a different tone. ''Can my group propose a quieter lunch line system?'' she asks. The activity is still energising, but now it is framed as collaborative improvement rather than vague permission to challenge everything.",
        "You have not removed the possibility of misunderstanding altogether. But you have narrowed the interpretive gap before it widened."
      ],
      "next": "perspective_1"
    },
    "perspective_1": {
      "id": "perspective_1",
      "type": "perspective",
      "title": "Mrs. Alsubaie''s View",
      "content": [
        "Mrs. Alsubaie is not objecting to participation.",
        "She is trying to determine what kind of person the school is helping form. In an international-school context, the same words that sound obviously positive to teachers can carry broader meanings for families. Voice, leadership, and critical thinking may be heard not only as classroom skills, but as signals about authority, boundaries, and moral orientation.",
        "From her perspective, asking for clarification is not resistance. It is due diligence.",
        "Research note: Hammad and Shah (2018) show that international schools in Saudi Arabia often operate inside a zone of dissonance between international discourse and national expectations. Families do not always reject the school''s aims. They often need the school to translate those aims into concrete practice so they can judge their cultural fit."
      ],
      "next": "reflection_1"
    },
    "reflection_1": {
      "id": "reflection_1",
      "type": "reflection",
      "title": "Reflection",
      "prompt": "What was the parent really asking in the first message?",
      "options": [
        "Whether the school was becoming too political",
        "Whether school language and classroom practice meant the same thing",
        "Whether student agency had clear cultural and relational boundaries",
        "Whether she could trust the school''s interpretation of its own slogans"
      ],
      "next": "dilemma_2"
    },
    "dilemma_2": {
      "id": "dilemma_2",
      "type": "dilemma",
      "title": "The Child''s Interpretation",
      "prompt": "Later that week, Noura presents a draft poster with her group. At the top it says: ''Students should have more say because adults do not always know what is best for us.'' That afternoon, a second parent asks if students are being taught to ''challenge decisions.'' Leadership notices the concern and asks teachers to be careful in how they describe the week. How do you respond now?",
      "choices": [
        {
          "id": "2a",
          "label": "Frame the concern as a misunderstanding",
          "text": "The parents are overreading the activity. The children are simply getting a little carried away with the language. We should not overreact.",
          "next": "consequence_2a"
        },
        {
          "id": "2b",
          "label": "Treat it as a child-development issue",
          "text": "The issue is not that families are unreasonable. The children need stronger scaffolding so they understand that voice means respectful, evidence-based problem-solving within agreed boundaries.",
          "next": "consequence_2b"
        },
        {
          "id": "2c",
          "label": "Clarify institutional intent publicly",
          "text": "We need a school-wide explanation now. If we leave each family to infer what voice means, the activity will keep accumulating meanings we did not intend. We should send a concrete note about purpose, examples, and limits.",
          "next": "consequence_2c"
        }
      ]
    },
    "consequence_2a": {
      "id": "consequence_2a",
      "type": "consequence",
      "title": "Called It a Misunderstanding",
      "content": [
        "The school does very little.",
        "Teachers quietly rephrase a few slides. Parents continue comparing interpretations in WhatsApp groups. The activity still happens, but it now carries an undercurrent of unease because the school seems to believe the problem is simply parental sensitivity.",
        "Mrs. Alsubaie does not complain further. She just becomes more careful in future conversations, especially when school language sounds too abstract.",
        "The immediate issue passes. The trust issue lingers."
      ],
      "next": "perspective_2"
    },
    "consequence_2b": {
      "id": "consequence_2b",
      "type": "consequence",
      "title": "Treated It as a Child-Development Issue",
      "content": [
        "You revise your class instructions: focus on shared school problems, propose realistic solutions, explain respectfully, and do not frame adults as opponents.",
        "The change helps in your room. Noura''s group rewrites its poster: ''Students notice things adults may miss, and we can help improve them respectfully.''",
        "But outside your class, the wording remains inconsistent. Some families still hear very different versions of what the week means.",
        "You improved pedagogy locally. The institutional ambiguity remains."
      ],
      "next": "perspective_2"
    },
    "consequence_2c": {
      "id": "consequence_2c",
      "type": "consequence",
      "title": "Clarified Institutional Intent Publicly",
      "content": [
        "Leadership accepts the suggestion and sends a brief bilingual note: Student Voice Week is about school improvement not opposition to adults, proposals must be respectful and evidence-based, examples include routines and facilities, and teachers guide all discussions and outputs.",
        "The note does not please every parent equally, but it changes the tone. The school''s intent is now visible enough to discuss rather than merely infer.",
        "Mrs. Alsubaie replies, ''This clarification is helpful. Thank you for making the practical boundaries clearer.''"
      ],
      "next": "perspective_2"
    },
    "perspective_2": {
      "id": "perspective_2",
      "type": "perspective",
      "title": "Noura''s View",
      "content": [
        "Noura is doing exactly what schools often ask children like her to do: she is listening carefully for what counts.",
        "When the school says lead, speak up, and make change, she assumes those phrases are aspirational and expansive. She wants to perform the ideal student identity the school celebrates.",
        "If teachers do not define the boundaries, students will supply their own.",
        "Research note: Much of the tension in international schools is not caused by bad intent. It emerges when broad, values-loaded language travels farther and faster than the practical classroom structures meant to contain it."
      ],
      "next": "reflection_2"
    },
    "reflection_2": {
      "id": "reflection_2",
      "type": "reflection",
      "title": "Reflection",
      "prompt": "What needed to happen once students started overextending the message?",
      "options": [
        "Parents needed to relax",
        "Teachers needed better scaffolding",
        "The school needed a clearer shared explanation",
        "The activity needed to be translated from slogan to practice"
      ],
      "next": "dilemma_3"
    },
    "dilemma_3": {
      "id": "dilemma_3",
      "type": "dilemma",
      "title": "The School''s Next Move",
      "prompt": "At the end of the week, leadership asks for feedback. Future Learning and Student Voice initiatives are likely to continue, but wording and framing may change. You are asked what the school should do next time. What do you recommend?",
      "choices": [
        {
          "id": "3a",
          "label": "Keep the language unchanged",
          "text": "The school should not dilute its values language simply because some parents read it narrowly. We should keep the messaging bold and trust families to adapt.",
          "next": "consequence_3a"
        },
        {
          "id": "3b",
          "label": "Quietly soften the activity",
          "text": "To avoid future tension, we should reduce the emphasis on voice and make it more of a teacher-led suggestion exercise.",
          "next": "consequence_3b"
        },
        {
          "id": "3c",
          "label": "Keep the activity, revise the framing",
          "text": "The school should keep the activity, but pair aspirational language with explicit examples, limits, and culturally grounded explanation so families do not have to guess what terms like voice and leadership mean in practice.",
          "next": "consequence_3c"
        }
      ]
    },
    "consequence_3a": {
      "id": "consequence_3a",
      "type": "consequence",
      "title": "Kept the Language Unchanged",
      "content": [
        "The school''s values branding remains strong. So does the interpretive friction.",
        "Some teachers are comfortable with this. Others begin informally translating school language on their own to prevent avoidable parent concern. The result is inconsistency. Students hear one message in posters, another in classrooms, and a third at home.",
        "You protected the ideal. You did not strengthen the bridge between school and family."
      ],
      "next": "perspective_3"
    },
    "consequence_3b": {
      "id": "consequence_3b",
      "type": "consequence",
      "title": "Quietly Softened the Activity",
      "content": [
        "Next term, similar activities become much narrower. Students still participate, but the energy is lower. Teachers feel safer. Families ask fewer questions.",
        "But something is lost. The school has not solved the translation problem. It has simply reduced the ambition of the experience so the tension goes away.",
        "The activity is smoother. The institutional confidence is weaker."
      ],
      "next": "perspective_3"
    },
    "consequence_3c": {
      "id": "consequence_3c",
      "type": "consequence",
      "title": "Kept the Activity, Revised the Framing",
      "content": [
        "The school adopts a new pattern: aspirational language stays, every initiative includes concrete examples, teacher scripts clarify purpose and boundaries, and parent communications explain what the activity is and is not.",
        "The next time a similar unit launches, fewer parents need private interpretation because much of that work has already been done publicly.",
        "Mrs. Alsubaie remains thoughtful and engaged, but no longer wary. She sees that the school is capable of translation, not only branding."
      ],
      "next": "perspective_3"
    },
    "perspective_3": {
      "id": "perspective_3",
      "type": "perspective",
      "title": "Mrs. Alsubaie Revisited",
      "content": [
        "Mrs. Alsubaie''s concern was never that children should remain passive.",
        "Her concern was whether the school understood that its language has moral and cultural meanings beyond the classroom. Families choosing international schools in Saudi Arabia are often balancing aspiration and rootedness at the same time. They do not necessarily want less confidence for their children. They want confidence formed inside recognisable boundaries.",
        "Research note: The real work is not choosing between ''international'' and ''national.'' It is building enough interpretive clarity that families do not experience that choice as a zero-sum one in ordinary classroom life. (Hammad and Shah, 2018)"
      ],
      "next": "reflection_3"
    },
    "reflection_3": {
      "id": "reflection_3",
      "type": "reflection",
      "title": "Reflection",
      "prompt": "What was the core lesson of the final dilemma?",
      "options": [
        "Schools should not change for parent concern",
        "Schools should avoid values language altogether",
        "Schools need translation, not just conviction",
        "The issue was never the activity alone, but the meanings attached to it"
      ],
      "next": "debrief"
    },
    "debrief": {
      "id": "debrief",
      "type": "debrief",
      "title": "Debrief",
      "content": [
        "This simulation explored three recurring tensions in international schools in the Kingdom of Saudi Arabia.",
        "International Ethos and Cultural Fit (D1): Families may actively want English, confidence, and future-facing education while still expecting clear cultural fit. These aims are not contradictory from the family''s perspective. Tension begins when the school acts as if they are.",
        "Parent Interpretation and Trust (D2): Parents often need more than reassurance. They need translation. When school language is highly aspirational but practically underdefined, families are left to interpret meanings for themselves, often through a broader cultural and moral lens.",
        "Voice, Leadership, and Moral Meaning (D4): Concepts like student voice and leadership are not culturally self-explanatory. In values-laden contexts, they require concrete framing so that agency is understood as guided participation rather than boundaryless challenge.",
        "Research: Hammad, W., and Shah, S. (2018). Dissonance Between the ''International'' and the Conservative ''National'': Challenges Facing School Leaders in International Schools in Saudi Arabia. DOI: 10.1177/0013161X18785864"
      ],
      "researchCitations": [
        {
          "author": "Hammad and Shah",
          "year": "2018",
          "title": "Dissonance Between the International and the Conservative National: Challenges Facing School Leaders in International Schools in Saudi Arabia",
          "doi": "10.1177/0013161X18785864"
        }
      ],
      "closingPrompt": "If you could go back to Mrs. Alsubaie''s first message, how would you explain Student Voice Week so that its educational purpose remains strong but its practical meaning is unmistakably clear?"
    }
  }',
  ARRAY[1,2,4],
  20,
  2,
  'active'
);
