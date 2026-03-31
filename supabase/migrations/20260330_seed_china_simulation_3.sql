-- Seed China Simulation 3: "Between Two Worlds"
-- Source: CHINA_SIM3_BETWEEN_TWO_WORLDS.md
-- Dimensions: D4 (Classroom Dynamics), D5 (Homework & Praise), D6 (Cultural Identity)
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
  'a1b2c3d4-0001-0003-0001-000000000001',
  'china-001',
  'Between Two Worlds',
  'A student with Chinese heritage publicly refuses a cultural activity. What looks like disrespect might be something much harder to name.',
  'It''s late January at your international school. The Chinese New Year assembly is in three weeks, and Ms. Chen has coordinated a school-wide lantern-making activity. Most students are into it — it''s tactile, creative, no exam pressure. But Mei, fourteen, is sitting with her arms crossed.',
  '[
    {
      "name": "You",
      "role": "Advisory class teacher, Years 8-10",
      "description": "You''re in your fourth year at this school. You care about your students as whole people, not just learners. You have a professional, warm relationship with your colleagues and you don''t want that to fracture. You''re watching a situation unfold in real time that involves both a student you care about and a colleague you respect."
    },
    {
      "name": "Mei",
      "role": "Student, Year 9, age 14",
      "description": "Born in Chengdu, moved to an international school at age 7. Fluent in English, conversational but hesitant in Mandarin. Has lived in an expat bubble for most of her formative years. She''s sharp, funny with her friends, articulate about her ideas — but increasingly hostile to anything framed as ''Chinese'' in the school context. Her resistance isn''t authentic cultural rejection; it''s self-protection against the feeling of being trapped between two identities and fully belonging to neither."
    },
    {
      "name": "Ms. Chen",
      "role": "Mandarin language and culture teacher",
      "description": "20+ years in education (first 15 in the PRC, now 5 at international schools). Genuinely passionate about Chinese cultural transmission and sees it as part of her mission to keep her students connected to their heritage. She takes Mei''s public refusal personally — it reads to her as disrespect for something she''s devoted her career to protecting. She''s not authoritarian; she''s wounded."
    }
  ]',
  '{
    "setup": {
      "id": "setup",
      "type": "setup",
      "title": "Setup",
      "content": [
        "A classroom during advisory time. Lantern-making materials spread across tables — colored paper, glue sticks, string. Students seated in small groups, mostly engaged, laughing at each other''s creations. Ms. Chen is circulating, warm and present.",
        "It''s late January. The Chinese New Year assembly is in three weeks, and Ms. Chen has coordinated a school-wide activity where students create silk lanterns — part cultural activity, part art lesson, part heritage celebration. Most students are into it.",
        "Mei is at a table in the back. Her friends are folding and gluing. She''s not. She''s sitting with her arms crossed, wearing an expression somewhere between bored and angry.",
        "Ms. Chen approaches the table. ''Mei, come on — this is the fun part! Make a lantern. You can choose any colors you want.''",
        "Mei doesn''t look up. ''I''m not doing this.'' ''It''s not difficult,'' Ms. Chen says, her tone gently insistent. ''Just a bit of folding and—''",
        "''I said no.'' Mei''s voice is louder now. Several students at nearby tables glance over. ''This isn''t my culture anyway. I don''t see why we have to do it.''",
        "There''s a silence. The activity doesn''t stop, but energy has shifted. Ms. Chen''s face flushes. She opens her mouth — searching for a response.",
        "You''re standing at the front of the room with a pile of lantern templates. All eyes are tracking this moment. What you do next will be witnessed and interpreted by the whole group."
      ],
      "next": "dilemma_1"
    },
    "dilemma_1": {
      "id": "dilemma_1",
      "type": "dilemma",
      "title": "Dilemma 1: The Public Refusal",
      "content": ["What do you do?"],
      "choices": [
        {
          "id": "choice_1a",
          "label": "Intervene publicly and firmly",
          "text": "You move quickly to Mei''s table. Your tone is calm but non-negotiable: ''Mei, I need you to step outside for a moment.'' You address the group without blame: ''Everyone keep working on your lanterns — we''ll be right back.'' You remove her from the room, away from the audience. It establishes a boundary without publicly shaming her or Ms. Chen.",
          "next": "consequence_1a"
        },
        {
          "id": "choice_1b",
          "label": "Move in privately, right now",
          "text": "You catch Ms. Chen''s eye with a small gesture that says I''ve got this, and approach Mei''s table casually. You lower yourself to her eye level, voice quiet: ''Mei, take a break from the lantern if you need to, but your arms need to uncross. Let''s figure out what''s going on here after class. For now, just sit with your group.'' You''re not forcing participation, but you''re not leaving the moment unaddressed.",
          "next": "consequence_1b"
        },
        {
          "id": "choice_1c",
          "label": "Let the moment breathe; continue the activity",
          "text": "You don''t interrupt. You let Ms. Chen respond, and you monitor the room. If this becomes a bigger blow-up, you''ll step in. But for now, you''re giving Mei space to exist in her resistance without it becoming a spectacle. You''re not reinforcing it, but you''re not crushing it either.",
          "next": "consequence_1c"
        }
      ]
    },
    "consequence_1a": {
      "id": "consequence_1a",
      "type": "consequence",
      "title": "Consequence 1A",
      "content": [
        "Outside the classroom, Mei''s defensiveness hardens. ''What? I''m not doing some random culture activity.''",
        "''That''s not actually what this is about,'' you say, ''and we both know that. This is the second time this month you''ve refused to participate in something connected to China. I''m not asking if you want to do the lantern. I''m telling you that the way you handled it — the volume, the comment, the arms crossed — isn''t okay in my classroom, regardless of the content.''",
        "Mei''s eyes get hot. ''Why does everyone care so much if I do this stupid lantern?''",
        "''Because you made it everyone''s problem in that moment. But also because Ms. Chen is noticing a pattern, and so am I. And I want to understand what''s driving it before we all end up frustrated with each other.''",
        "You''ve been direct and fair. But Mei goes back into the room feeling corrected, not heard. She sits out the rest of the lantern activity, arms still crossed. Ms. Chen is grateful that you intervened, but Mei is more entrenched.",
        "That evening, Mei''s mother emails you: ''Mei says you made her feel bad about the lantern activity. She feels like the school is trying to force her to be Chinese. Can we talk?''"
      ],
      "next": "perspective_1"
    },
    "consequence_1b": {
      "id": "consequence_1b",
      "type": "consequence",
      "title": "Consequence 1B",
      "content": [
        "After class, Mei is quieter but not angrier. You''ve given her a way to save face in front of her friends.",
        "You catch her in the hallway afterward. ''So what was that about?'' ''I don''t know. I just don''t want to do stuff like that.'' ''Stuff like making art projects?'' ''Stuff like being told I have to participate in being Chinese. It''s annoying.''",
        "This is the first time Mei has said it plainly, and you hear it. She''s not rejecting the activity as much as rejecting the assumption that because she was born in China, this cultural activity should automatically feel like hers.",
        "Ms. Chen passes you in the hallway later. ''Thank you for handling that. Do you think you can talk to her? She needs to understand that this isn''t optional.''",
        "You''ve bought yourself space and information. Ms. Chen feels supported. Mei feels less publicly shamed. But the underlying tension hasn''t been resolved."
      ],
      "next": "perspective_1"
    },
    "consequence_1c": {
      "id": "consequence_1c",
      "type": "consequence",
      "title": "Consequence 1C",
      "content": [
        "Ms. Chen takes a breath. You can see her doing it — a moment of self-regulation. She steps back slightly from Mei''s table.",
        "''Okay,'' Ms. Chen says. Her voice is quieter, the warmth strained but not gone. ''You don''t have to make a lantern. But you do have to sit here with the class without being disruptive. You can read, you can watch, but everyone needs you to be present to the group without commenting.''",
        "Mei rolls her eyes dramatically. You make a note — the eye-roll is performative, audience-aware. She''s playing a part.",
        "The activity continues. Mei sits, ostensibly reading, but clearly fuming. A few of her friends glance at her with concern. Ms. Chen looks hurt and tight for the rest of the period.",
        "By letting it play out, you haven''t escalated. But you also haven''t addressed the pattern. That conversation is still coming — it just didn''t happen in real time."
      ],
      "next": "perspective_1"
    },
    "perspective_1": {
      "id": "perspective_1",
      "type": "perspective",
      "title": "Perspective 1: Mei''s Internal Experience",
      "content": [
        "Mei''s arms are crossed because the moment Ms. Chen approached her felt like a demand dressed up as an invitation. Make a lantern. This is the fun part. You can choose any colors.",
        "What Mei hears underneath is: You are Chinese. You should want this. Your reluctance is a personal failure. This isn''t Ms. Chen''s intention, but intention and impact aren''t the same thing.",
        "Mei was born in Chengdu. Her first memories are in Mandarin. But she''s been in English-speaking international schools since age 7, and those schools are where she''s built her identity, her friendships, her sense of competence.",
        "When she goes to China to visit family, her cousins call her ''the American girl.'' Her Mandarin is conversational but not fluent. She''s forgotten characters. She doesn''t know slang. She feels fake.",
        "At school, the Chinese cultural activities feel like they''re demanding she prove an identity she doesn''t actually inhabit. It''s not that she rejects China — it''s that she''s exhausted by being asked to perform it, especially in front of an audience that expects automatic emotional investment.",
        "The cultural dynamic: Pollock & Van Reken (1999, 2009) identify ''third culture kids'' as children who grow up in a culture that''s not their parents'' culture of origin and not the culture of their parents'' passport — they develop their own culture, often one of global mobility and intercultural fluency. But this identity can feel unstable, especially in contexts that demand simplicity: Are you Chinese or American?",
        "The answer, for third culture kids, is often: Neither. Both. A third one they''ve created. But schools that celebrate ''heritage'' often unintentionally pathologize this fluidity. Mei''s resistance is a form of identity self-defense. She''s refusing the either/or in order to protect the both/and that is actually her.",
        "Code-switching research (Blanco et al., 2021) shows that repeated demands to perform one cultural identity while suppressing another creates fatigue and resentment, especially in adolescence. Mei isn''t being difficult; she''s exhausted."
      ],
      "next": "reflection_1"
    },
    "reflection_1": {
      "id": "reflection_1",
      "type": "reflection",
      "title": "Reflection 1",
      "prompt": "Look back at your choice. What were you responding to in that moment?",
      "options": [
        "Mei''s rudeness to Ms. Chen and the need to enforce classroom norms.",
        "The possibility that Mei''s resistance signals a deeper struggle with her identity.",
        "The need to protect Ms. Chen''s authority and the activity''s integrity.",
        "My uncertainty about whether to prioritize the group dynamic or Mei''s individual experience.",
        "Write your own."
      ],
      "next": "dilemma_2"
    },
    "dilemma_2": {
      "id": "dilemma_2",
      "type": "dilemma",
      "title": "Dilemma 2: Ms. Chen Comes to You",
      "content": [
        "Two days later, Ms. Chen asks to see you before school. She closes the door of your classroom behind her.",
        "''I need to ask you for help with something,'' she says. Her tone is not angry — it''s something more vulnerable than that. It''s hurt. ''Mei. I keep trying to include her in cultural activities, and she keeps refusing. And now she''s being loud about it, which is affecting other students'' engagement. I''m wondering if you can talk to her.''",
        "She''s not asking you to force Mei to participate. But she''s asking you, implicitly, to deliver a message: You should want to be part of this. You should care about your heritage.",
        "Ms. Chen continues: ''I''ve been teaching for twenty years. And I have to say — this generation of students, the ones who have lived here their whole lives, they''re losing connection to Chinese culture. They''re becoming too Western. And students like Mei, who are actually Chinese — when they reject it, it feels like they''re rejecting everything I''m trying to preserve.''",
        "There''s real pain in this. Ms. Chen isn''t being authoritarian. She''s grieving. But a private conversation where you reinforce her message could backfire, positioning you against Mei, who is dealing with something complicated. How do you navigate this?"
      ],
      "choices": [
        {
          "id": "choice_2a",
          "label": "Validate Ms. Chen''s frustration; agree to reinforce",
          "text": "''You''re right, and I hear you. The cultural disconnection is real. Let me talk to Mei. I''ll help her understand that participating in these activities matters — for her own identity, and for the message she''s sending to the other students.''",
          "next": "consequence_2a"
        },
        {
          "id": "choice_2b",
          "label": "Reframe Mei''s resistance as complexity, not defiance",
          "text": "''I appreciate you sharing this, and I know how much this work matters to you. But I think what we''re seeing with Mei might not be cultural rejection — it might be something more like identity confusion. She''s caught between two cultures in a way that''s genuinely hard. Before I talk to her, I want to understand what''s driving this. Can I learn more about what''s been happening in your class?''",
          "next": "consequence_2b"
        },
        {
          "id": "choice_2c",
          "label": "Suggest a three-way meeting",
          "text": "''Ms. Chen, I want to help, but I don''t think a one-on-one from me is the right move. What if the three of us sat down together? Mei, you, and me. Not to convince Mei to participate — but to actually understand what''s happening here. It sounds like there''s a real mismatch in what Mei thinks you need from her and what you''re actually trying to offer. Maybe we can close that gap together.''",
          "next": "consequence_2c"
        }
      ]
    },
    "consequence_2a": {
      "id": "consequence_2a",
      "type": "consequence",
      "title": "Consequence 2A",
      "content": [
        "You talk to Mei that afternoon. ''Ms. Chen is concerned about your participation in the lantern activity and some of the other cultural events. And honestly, I think she''s right to be. You''re a smart, thoughtful person, Mei, and I think you''re shutting yourself off from something that could be meaningful to you.''",
        "Mei''s face closes. ''Okay, so now you''re teaming up with her.''",
        "''That''s not what this is. I''m saying — you have a heritage. You''re actually lucky that you have multiple cultures. I think you''re dismissing something because it''s cool to be resistant right now, but you might regret that later.''",
        "Mei is quiet. When she speaks, her voice is small and angry at the same time: ''Everyone acts like being Chinese is just this automatic thing I should want. Like I woke up and decided to reject it. But I didn''t. I just didn''t grow up with it, and now everyone''s mad at me for not feeling it.''",
        "You''ve now confirmed for Mei that the adults in her world are aligned against her. She feels more alone, not less.",
        "Later, her mother reaches out again: ''Mei is really upset. She says both her teachers are pushing her to be someone she''s not. I''m worried about her.''"
      ],
      "next": "perspective_2"
    },
    "consequence_2b": {
      "id": "consequence_2b",
      "type": "consequence",
      "title": "Consequence 2B",
      "content": [
        "You sit with Ms. Chen for a longer conversation. ''Can I tell you what I''m noticing? I think Mei''s resistance isn''t about disrespecting you or Chinese culture. I think she''s actually struggling with something more fundamental — which culture is ''hers.'' She was born in China, but she''s been in international schools her whole life. When she''s here, everyone expects her to be the Chinese representative. When she visits China, her cousins think she''s too Western. She doesn''t belong cleanly to either world.''",
        "''And I think the cultural activities, even though they''re well-intentioned, can feel like they''re saying: You must perform the Chinese part of your identity. And she''s kind of stuck because if she doesn''t, she''s ungrateful or disloyal. But if she does, she''s performing something that doesn''t actually feel like hers.''",
        "Ms. Chen listens. ''So what you''re saying is that this is bigger than just participation in a lantern activity.'' ''Much bigger. And if I go to her right now and reinforce that she should want to participate, I think it''ll backfire. It''ll just feel like more adults telling her who she''s supposed to be.''",
        "Ms. Chen nods slowly. ''I didn''t realize it was that deep. I thought she was just being a typical resistant teenager.''",
        "You''ve honored Ms. Chen''s concern, but you''ve also given her a more complex frame. She can now see Mei as struggling rather than defiant. It doesn''t solve the problem, but it shifts the ground."
      ],
      "next": "perspective_2"
    },
    "consequence_2c": {
      "id": "consequence_2c",
      "type": "consequence",
      "title": "Consequence 2C",
      "content": [
        "Ms. Chen''s initial reaction is hesitant. ''I don''t know if that will help. She''ll just be defensive.'' ''Probably,'' you say. ''But at least she''ll hear what Ms. Chen is actually trying to say, and Ms. Chen will hear what Mei is actually struggling with. Right now, you''re both guessing at each other''s intentions.''",
        "''Is that what you''re trying to do — make her be something she''s not?'' ''No, of course not. I just want her to be connected to her culture.'' ''Then maybe Mei needs to hear that directly. And maybe she needs to tell you what she''s actually struggling with — not in front of the whole class, but in a private space where it''s not about performance.''",
        "Ms. Chen agrees, though with some anxiety. ''Okay. But I want to make sure this doesn''t feel like we''re letting her off the hook for her behavior.''",
        "You schedule the meeting for later in the week. Before it happens, you have a private conversation with Mei: ''Ms. Chen wants to understand what''s been going on. Not to convince you to do the lanterns, but to actually listen. Are you willing to have that conversation?''",
        "Mei is nervous but willing. You''ve set up the possibility of real dialogue instead of parallel monologues."
      ],
      "next": "perspective_2"
    },
    "perspective_2": {
      "id": "perspective_2",
      "type": "perspective",
      "title": "Perspective 2: Ms. Chen''s Internal Experience",
      "content": [
        "When Ms. Chen began teaching Mandarin and culture at international schools five years ago, it was because she wanted to give students like Mei — students with Chinese heritage — a place to explore that identity. In China, she was a teacher. In an international school, she''s a cultural guardian.",
        "She''s watched dozens of heritage students come through her classroom. Some of them — the ones who engage — later tell her that her class helped them feel less alone. That it gave them language to claim their identity. But other students reject it entirely.",
        "When they do it publicly, with eye-rolling and loud refusals, it feels personal. It feels like a rejection of her life''s work.",
        "Ms. Chen doesn''t know, fully consciously, that she''s processing grief. Grief about globalization, about the erosion of cultural distinctiveness, about the fact that her students are becoming something she doesn''t have a frame for. She grew up in a world where cultural identity was legible and stable. Her students are growing up in a world where it''s fluid and ambiguous.",
        "When Mei refuses the lantern, Ms. Chen feels it as an erasure: You don''t want to know where you came from. And if students like you don''t care, who will?",
        "She also doesn''t recognize — because this is hard to recognize about ourselves — that her insistence on participation, however gentle, contains an implicit demand: You should want this. You should feel grateful. You should perform your heritage for the sake of its preservation.",
        "The cultural dynamic: This is where Li''s (2005) mind-vs.-virtue framework meets identity formation theory. Ms. Chen comes from a Chinese educational tradition where moral development (virtue) is inseparable from cultural continuity. Maintaining cultural knowledge isn''t self-expression; it''s a responsibility to ancestors and community. From that frame, Mei''s refusal is a moral failing, not an identity struggle.",
        "But Western theories of adolescent identity development (Erikson, 1968; Marcia, 1980) center the individual''s right to explore and choose identity. Mei''s resistance, from this frame, is developmentally healthy — she''s exploring, questioning, testing what feels authentic. These frameworks don''t have to be in conflict, but they''re operating on different assumptions about what it means to be loyal to a culture."
      ],
      "next": "reflection_2"
    },
    "reflection_2": {
      "id": "reflection_2",
      "type": "reflection",
      "title": "Reflection 2",
      "prompt": "What were you most concerned about protecting when you made that choice?",
      "options": [
        "My relationship with Ms. Chen and the need to support a colleague.",
        "Mei''s experience and the risk of making her feel more isolated.",
        "The possibility of genuine understanding between both parties.",
        "My own discomfort with the conflict and wanting to find the ''right'' solution.",
        "Write your own."
      ],
      "next": "dilemma_3"
    },
    "dilemma_3": {
      "id": "dilemma_3",
      "type": "dilemma",
      "title": "Dilemma 3: Mei''s Confession",
      "content": [
        "The next week, Mei asks to talk to you after advisory. She seems more vulnerable than usual — less performed, more real.",
        "''I know Ms. Chen is probably upset with me. And I get that what I did was rude. But I''m tired, okay? I''m tired of people asking me to care about being Chinese when I''ve never actually... lived that. I''ve visited, like, twice. My Mandarin is bad. I don''t know anything about the culture actually. When I go to China, my cousins laugh at me because I can''t read or speak properly. But here, everyone acts like I''m supposed to be this authority on Chinese culture just because I was born there.''",
        "She''s close to tears. ''The worst part is — I don''t even know who I''m supposed to be. Am I Chinese? Am I basically American because I grew up here? Am I just... neither? I''m not good enough at being Chinese for my family, and I''m not quite part of the British-American crowd here either, even though that''s where I actually feel comfortable. So what am I? And why does everyone care so much?''",
        "This is the moment. Mei isn''t rejecting culture — she''s drowning in the contradiction of being asked to authentically claim something she doesn''t actually possess. How do you respond?"
      ],
      "choices": [
        {
          "id": "choice_3a",
          "label": "Validate her emotions; frame the goal as self-acceptance",
          "text": "''I hear you, and I''m glad you''re being honest about this. Your feelings are completely legitimate. The hard thing right now is that you''re being pulled in different directions, and that''s exhausting. But what I want you to work toward is accepting yourself — all of yourself — even the parts that don''t fit neatly into one category. You''re allowed to be complex. You''re allowed to not be fluent in Mandarin and still honor your heritage in your own way.''",
          "next": "consequence_3a"
        },
        {
          "id": "choice_3b",
          "label": "Validate her experience; don''t prescribe a direction",
          "text": "''That''s a lot to carry, and I''m really glad you told me. It makes complete sense that you''re frustrated and exhausted. It sounds like you''re living in a constant negotiation between what other people expect and what you actually feel. I don''t think there''s a simple answer to ''who am I'' right now. But I do think you deserve space to figure that out without having to perform it for anyone. What would feel most true to you right now, if no one was watching?''",
          "next": "consequence_3b"
        },
        {
          "id": "choice_3c",
          "label": "Name the bind; offer language and frameworks",
          "text": "''What you''re describing is actually really common for people who grow up between cultures. There''s a researcher named Pollock who calls it being a ''Third Culture Kid,'' and it''s not about being confused — it''s about creating your own identity that''s genuinely yours. You''re not supposed to be fully Chinese OR fully Western. The goal isn''t to fit neatly. The goal is to understand your own story and own it. Would you want to understand your identity more intentionally, or would that feel like more pressure right now?''",
          "next": "consequence_3c"
        }
      ]
    },
    "consequence_3a": {
      "id": "consequence_3a",
      "type": "consequence",
      "title": "Consequence 3A",
      "content": [
        "Mei visibly relaxes. You''ve given her permission to stop fighting so hard. ''Yeah, okay. That helps. I just need everyone to stop expecting me to be excited about being Chinese, I guess.''",
        "But then, a week later, you notice something: Mei''s defensiveness has softened, but she''s also absent. She''s less engaged in the cultural conversations. She''s not rejecting them anymore, but she''s not participating in the way that would help her actually build any connection.",
        "She feels less alone because you''ve validated her, but she''s also more resigned. She''s accepted her identity confusion, but she hasn''t moved toward integration or understanding.",
        "Ms. Chen also feels the shift — Mei''s still not participating, but now she''s not refusing. She''s just absent. For Ms. Chen, this is a quiet loss.",
        "You''ve helped Mei feel less pressure, which was necessary. But you may have stopped short of what could have helped her more."
      ],
      "next": "perspective_3"
    },
    "consequence_3b": {
      "id": "consequence_3b",
      "type": "consequence",
      "title": "Consequence 3B",
      "content": [
        "Mei thinks about your question. ''I don''t know. If no one was watching, I think I''d just... not think about being Chinese? I''d just be Mei. Does that make sense?''",
        "''That makes total sense,'' you say. ''And that''s actually a healthy place to be. You don''t have to perform culture. But I will say this — you might also find that understanding your cultural roots, not as a performance but as part of your story, could be interesting to you eventually. Not now. Maybe not for years. But at some point, you might want to know more about Chengdu or your family''s history just because it''s your story.''",
        "Mei nods. ''Maybe. I don''t know. Right now I just want people to stop expecting me to have figured this out.''",
        "You''ve honored her experience without pressuring her to do anything with it. But you''ve also left her without a framework to understand what''s happening to her. She feels validated, which is important and necessary. But she doesn''t have language for her own experience — she just knows it''s confusing and exhausting.",
        "She goes back into the world still searching for an answer to ''who am I?'' but with a little more permission to struggle with it privately."
      ],
      "next": "perspective_3"
    },
    "consequence_3c": {
      "id": "consequence_3c",
      "type": "consequence",
      "title": "Consequence 3C",
      "content": [
        "Mei''s eyes widen slightly. ''Third Culture Kid? Is that like... a real thing?''",
        "''Very real. And it''s not something that needs to be ''fixed.'' It''s actually an asset — you have genuinely more fluency across cultures than kids who grew up in one place. But that fluency comes with its own challenges, and I think what you''re experiencing right now is one of those challenges. The world wants to put you in a box, and you don''t fit in a box because you were literally raised across multiple boxes.''",
        "''So I''m not broken,'' Mei says. ''You''re not broken. You''re navigating something genuinely complex. And the skill is learning to explain your own story to people who want a simpler narrative. That''s hard work, but it''s learnable.''",
        "She asks you for the researcher''s name, and you give it to her. Days later, Mei comes back: ''I read that article. It was weird because it was like... someone explaining my life back to me.''",
        "More importantly, she approaches the question of her identity differently. She''s not performing it for anyone. But she''s also not rejecting it as impossible. She''s begun to own her own complexity.",
        "She still doesn''t do the lantern activity. But when Ms. Chen mentions a documentary about Chengdu coming up, Mei says she might watch it — not because she has to, but because it''s actually about the place where she was born. It''s hers to explore now, not something being done to her.",
        "Ms. Chen notices the shift. She doesn''t get the public participation she was hoping for, but she gets something better: evidence that Mei is engaging with her heritage privately, on her own terms."
      ],
      "next": "perspective_3"
    },
    "perspective_3": {
      "id": "perspective_3",
      "type": "perspective",
      "title": "Perspective 3: Mei''s Deeper Truth",
      "content": [
        "Mei''s resistance isn''t authentic cultural rejection. It''s self-protection.",
        "She was six years old when she moved to her first international school. She was fluent in Mandarin, knew her neighborhood in Chengdu, felt at home. Then, suddenly, she was in a classroom where no one spoke her language, where the rules were different, where people looked at her differently.",
        "She adapted. Fast. That''s what kids do. By age 8, she was more comfortable in English than Mandarin. By age 10, she had friends who''d never been to China. By age 12, she''d learned to move through a global world with ease and competence.",
        "But ease and competence also meant invisibility within her own heritage. She stopped learning Mandarin formally after age 9. Her parents, busy navigating their own expatriate lives, didn''t push it. Then she hit age 13, and suddenly her school started emphasizing ''cultural identity'' and ''heritage pride.'' Ms. Chen showed up, passionate and expectant.",
        "And Mei panicked. Because here''s what no one told her: she''d actually moved between cultures in a real way. It wasn''t her fault. It was the natural outcome of growing up in that world. But now, at an age where identity questions are already intense, she was being asked to claim something she didn''t actually have access to anymore.",
        "So she rejected it. Loudly. Because rejection felt like the only way to say ''this is not mine'' without being told that she was ungrateful or lost. The eye-rolling, the loud refusal, the arms crossed — it was armor.",
        "What she actually needed was someone to say: You''re right. You don''t have fluency in this culture. And that''s not your failure. It''s a natural outcome of your life. And now you get to decide what your relationship to that heritage is going to be.",
        "The cultural dynamic: Pollock & Van Reken (1999, 2009) found that Third Culture Kids often experience ''cross-cultural mobility risk'' — the loss of home culture through no conscious choice of their own. They adapt rapidly to new environments as a developmental necessity, but that adaptation has a cost: alienation from their origin culture. This isn''t identity confusion; it''s adaptive development in a cross-cultural context.",
        "Blanco et al. (2021) research on code-switching fatigue shows that repeated demands to perform one cultural identity while suppressing another creates cognitive and emotional exhaustion, especially in adolescence. When Mei encounters the term ''Third Culture Kid,'' she''s not being pathologized — she''s being seen accurately. That recognition is often the first step toward integration rather than rejection."
      ],
      "next": "reflection_3"
    },
    "reflection_3": {
      "id": "reflection_3",
      "type": "reflection",
      "title": "Reflection 3",
      "prompt": "Think about what Mei actually needed in that conversation. What did you offer her, and what else might she have needed?",
      "options": [
        "Permission to not feel Chinese and permission to be confused — she needed validation more than direction.",
        "A framework for understanding her own experience — language that helped her see herself clearly instead of as broken.",
        "Support in defining her own relationship to her heritage, untethered from what others expect.",
        "A realistic acknowledgment that this is something she''ll keep processing for years, not something to fix now.",
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
            "This simulation exercised three cultural dimensions that shape the experience of heritage students and third culture kids in international school settings.",
            "Classroom Dynamics (D4): The lantern-making activity seems like a simple cultural celebration. But it''s actually a moment where classroom culture, teacher expectations, and student identity collide. In Chinese educational contexts, participation in collective cultural activities is often non-negotiable — it''s about group cohesion and moral development. In Western progressive education, refusal of an activity is sometimes interpreted as healthy individual assertion. Mei is caught between these frameworks, and her ''no'' is being read as defiance rather than self-protection.",
            "Homework & Praise (D5): Ms. Chen''s approach to Mei includes an implicit expectation: that because Mei has Chinese heritage, she should naturally be intrinsically motivated by Chinese cultural activities. This is the ''heritage as automatic asset'' assumption. But for Mei, who has spent her formative years in international schools where Mandarin was not her daily medium, heritage is something she''s learned about, not lived in. The praise structure — the expectation that Mei should want to participate — misaligns with her actual relationship to the culture.",
            "Cultural Identity (D6): This is the core tension. Mei is experiencing what Pollock & Van Reken identify as the ''third culture identity'' — she is not fully Chinese (in the sense of having been acculturated in China during formative years) and not fully Western (in the sense of having that as her heritage). She''s navigating a legitimate but often invisible identity formation process. The adults around her want her to choose a simple narrative. Mei''s actual experience is more fluid and complex than any of these options."
          ]
        },
        {
          "title": "The Research Behind This",
          "content": [
            "Pollock, D. C., & Van Reken, R. E. (2009). Third culture kids: Growing up among worlds (2nd ed.). Intercultural Press.",
            "Blanco, O., Kanegae, H., & Voci, A. (2021). ''Code-switching and cultural exhaustion in bilingual adolescents.'' International Journal of Intercultural Relations, 85, 156-168.",
            "Li, J. (2005). ''Mind or virtue: Western and Chinese beliefs about learning.'' Current Directions in Psychological Science, 14(4), 190-194.",
            "Erikson, E. H. (1968). Identity: Youth and crisis. W.W. Norton & Company."
          ]
        }
      ],
      "finalPrompt": "You''ve now walked through this scenario from three perspectives: Mei''s public refusal, Ms. Chen''s pain, and Mei''s private confession. Looking back at your first choice in the classroom, knowing what you now know about what was really happening for Mei, would you handle that moment differently? What would you say, and what would you be trying to do for Mei rather than for the classroom management situation?"
    }
  }',
  ARRAY[4, 5, 6],
  20,
  3,
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
WHERE id = 'a1b2c3d4-0001-0003-0001-000000000001';
