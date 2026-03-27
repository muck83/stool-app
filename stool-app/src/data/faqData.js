export const FAQ_DATA = [
  {
    id:'f1', behavior:'Students stay silent - nobody speaks up in class',
    dims:['Group culture','Respect for authority'], category:'participation',
    dim_key:'IDV',
    dest_key:'IDV',
    current_context: (cc,hc) => {
      if(!hc) return 'Add your current country in your profile to see how this applies where you are now.';
      const idv = hc[1];
      if(idv < 35) return cc+' is a strongly group-oriented culture (group score: '+idv+'/100). Speaking out publicly carries real social risk - a wrong answer in front of peers can feel embarrassing for the whole group, not just the individual. Silence is not disengagement. It is social caution.';
      if(idv < 65) return cc+' has a mixed individual-group pattern (group score: '+idv+'/100). Some students will speak up easily; others will hold back to protect group harmony or avoid standing out.';
      return cc+' leans toward individual expression (score: '+idv+'/100). Silence there is more likely to signal genuine confusion or uncertainty than group-culture caution.';
    },
    why:"In strongly group-oriented cultures, speaking out in class carries real social risk. A wrong answer - or an opinion that goes against the teacher or classmates - can feel like public failure for the whole group, not just the individual. Students are not being passive: they are actively protecting the group's harmony and their own social standing. Research on how culture shapes identity (Markus & Kitayama, 1991) helps explain why.",
    respond:"Replace public individual questioning with structures that protect everyone: anonymous written responses, mini-whiteboards shown simultaneously, small-group discussion before whole-class sharing, and think-pair-share where the pair reports rather than the person. Never single out a student for a wrong answer in front of peers.",
    research:'Markus & Kitayama (1991), Hofstede cultural research, King & Witt (2009)',
    dest_high:'In more individually oriented destinations, silence more often means genuine confusion rather than social caution. Direct questioning is culturally normal and students expect to advocate for themselves.',
    dest_low:'In equally or more group-oriented destinations, the same dynamic intensifies. Build protective participation structures early and lean into collaborative formats as real pedagogy, not just a workaround.',
  },
  {
    id:'f2', behavior:"Students say 'yes' but do not follow through",
    dims:['Group culture','Communication style'], category:'communication',
    dim_key:'IDV',
    dest_key:'IDV',
    current_context: (cc,hc) => {
      if(!hc) return 'Add your current country to see how this plays out where you are.';
      const pdi = hc[0];
      const idv = hc[1];
      if(pdi > 65 && idv < 40) return 'In '+cc+', "yes" is often a relational response - it can mean "I respect you" or "I am engaged" more than "I fully understand and will do this."';
      if(idv < 50) return 'In '+cc+', saying no or admitting confusion can feel socially uncomfortable, so "yes" sometimes smooths over uncertainty. Build in check-in moments to catch this early.';
      return 'In '+cc+', "yes" usually means yes. If students are not following through, the issue is more likely workload, clarity, or competing priorities than cultural communication norms.';
    },
    why:"In cultures where group harmony and respect for authority are strong values, 'yes' is often a relationship-maintenance response rather than a literal factual commitment. Saying 'no', 'I do not understand', or 'I disagree' to a teacher can feel disrespectful or socially risky.",
    respond:"Never rely on a single 'yes' as confirmation of understanding. Use structured comprehension checks: 'Show me the first step', 'Walk me through your plan', or 'Let's do the first part together now.' Build multiple low-stakes checkpoints into the workflow.",
    research:'Triandis (1995), Hall (1976), Hofstede cultural research',
    dest_high:"In more individually oriented destinations, 'yes' is usually more literal. Students will tell you directly when they do not understand, and sometimes bluntly.",
    dest_low:"In more group-oriented destinations, this pattern gets stronger. The answer is not to demand more verbal compliance - it is to create better follow-through structures.",
  },
  {
    id:'f3', behavior:'Parents are intensely involved and academically demanding',
    dims:['Future focus','Academic pressure'], category:'parents',
    dim_key:'LTO',
    dest_key:'LTO',
    current_context: (cc,hc) => {
      if(!hc) return 'Add your current country to understand parent engagement in your context.';
      const lto = hc[4];
      const mas = hc[2];
      if(lto > 60 && mas > 50) return 'In '+cc+', education is often treated as a serious long-term investment and social-mobility strategy. Parent intensity is rational inside that frame.';
      if(lto > 60) return 'In '+cc+', families often think in generational timescales when it comes to education. Parent engagement is future-oriented and trajectory-focused.';
      return 'In '+cc+', parental involvement is usually more moderate. Parents still care deeply, but the cultural pressure around academic outcomes is lower than in highly future-focused systems.';
    },
    why:"In cultures with strong future orientation and high academic competition, education is often seen as the primary vehicle for social mobility across generations. The parent is not just engaging with your class - they are managing a long-term family strategy.",
    respond:"Communicate proactively with data. These parents respond well to concrete progress indicators, benchmark comparisons, and specific improvement paths. Frame feedback as direction rather than verdict, and build trust early with frequent, accessible communication.",
    research:'Inglehart & Welzel, Kim (1993), Hofstede cultural research',
    dest_high:'Moving to a more future-focused, academically competitive destination intensifies this. Exam pressure, parent scrutiny, and expectations for measurable progress usually rise together.',
    dest_low:'Moving to a more present-focused destination often reduces exam-driven pressure, but may increase advocacy around a child\'s individual preferences, wellbeing, or fit.',
  },
  {
    id:'f4', behavior:'Students resist open-ended tasks and want definite answers',
    dims:['Certainty preference','Clear structure'], category:'learning',
    dim_key:'UAI',
    dest_key:'UAI',
    current_context: (cc,hc) => {
      if(!hc) return 'Add your current country to see how this applies in your classroom.';
      const uai = hc[3];
      if(uai > 70) return 'In '+cc+', students often have a strong cultural preference for clear, correct answers (certainty score: '+uai+'/100). Ambiguity can feel like a problem, not a feature of learning.';
      if(uai > 45) return 'In '+cc+', students usually prefer structure but can handle open tasks with good scaffolding, worked examples, and visible criteria.';
      return 'In '+cc+', students are often more comfortable with open questions and ambiguity. The challenge there may be building precision and rigor inside inquiry.';
    },
    why:"In cultures with high uncertainty avoidance, educational systems often reward correct, reproducible answers. Open-ended inquiry can feel threatening because it removes the certainty that tells students what success looks like.",
    respond:"Scaffold ambiguity explicitly. Give rubrics, worked examples, and staged releases before expecting students to thrive in open inquiry. Frame the task as 'multiple strong answers are possible' rather than 'there is no right answer.'",
    research:'Hofstede cultural research, Schwartz (1992), Carless (2009)',
    dest_high:'Destinations with very high uncertainty avoidance make this challenge sharper. Students may have had little prior experience with open-ended inquiry and need patient, deliberate scaffolding.',
    dest_low:'Destinations more comfortable with ambiguity can feel liberating. Students are more willing to experiment, but you may need to work harder on rigor and follow-through.',
  },
  {
    id:'f5', behavior:'Students avoid expressing individual opinions - group harmony comes first',
    dims:['Group culture'], category:'participation',
    dim_key:'IDV',
    dest_key:'IDV',
    current_context: (cc,hc) => {
      if(!hc) return 'Add your current country to understand this in your specific context.';
      const idv = hc[1];
      if(idv < 35) return 'In '+cc+', student identity is often deeply tied to group relationships (group score: '+idv+'/100). Public disagreement can feel like a social threat, not just an academic move.';
      if(idv < 55) return 'In '+cc+', students balance group loyalty and individual voice. Some will speak readily; others will wait for social cover before sharing.';
      return 'In '+cc+', individual opinion expression is culturally expected. Students are more likely to state personal views directly and expect intellectual push-and-pull.';
    },
    why:"In group-oriented cultures, a student's sense of self is relational - embedded in how they are perceived by peers and family. Public contradiction can therefore feel much bigger than simple disagreement.",
    respond:"Use discussion structures that depersonalize the opinion from the individual: role cards, written arguments before speaking, fishbowl formats, and protocols where the group carries the idea rather than one exposed student.",
    research:'Markus & Kitayama (1991), Hofstede cultural research, Nisbett (2003)',
    dest_high:'In more individualist destinations, students are expected to form and defend personal opinions. That can feel energizing, but also more confrontational.',
    dest_low:'In more collectivist destinations, group harmony remains central. Treat consensus-seeking as a real cultural logic, not as passivity.',
  },
  {
    id:'f6', behavior:'Grade pushback - parents and students challenge your assessments constantly',
    dims:['Academic pressure','Authority distance'], category:'parents',
    dim_key:'MAS',
    dest_key:'MAS',
    current_context: (cc,hc) => {
      if(!hc) return 'Add your current country to understand the grading culture where you are.';
      const mas = hc[2];
      const pdi = hc[0];
      if(mas > 60 && pdi < 55) return 'In '+cc+', academic results carry high social stakes and the culture is relatively open to questioning authority. That combination makes grade challenges especially common.';
      if(mas > 60) return 'In '+cc+', education is highly competitive (competitiveness score: '+mas+'/100). Grades carry weight, even if challenges come through informal channels.';
      return 'In '+cc+', assessment pressure is more moderate. Occasional grade questions are normal, but sustained confrontation is less culturally typical.';
    },
    why:"In highly competitive cultures, grades are not just measures - they are social currency. When lower authority distance is also present, challenging a grade can feel like responsible advocacy rather than disrespect.",
    respond:"Build assessment transparency into the front end. Share detailed rubrics, mark schemes, and worked examples before assessment, and document decisions carefully so you are not reconstructing your reasoning during conflict.",
    research:'Hofstede cultural research, Biggs (1996), Kennedy (2002)',
    dest_high:'More achievement-oriented destinations usually intensify this. Competition is openly sanctioned and assessment pressure can spill quickly into parent-school interactions.',
    dest_low:'Lower-competition destinations often reduce the volume and intensity of grade pushback, though expectations around fairness and clarity remain high.',
  },
  {
    id:'f7', behavior:'Students call you by your first name - or never call you anything at all',
    dims:['Authority distance','Teacher-student formality'], category:'relationships',
    dim_key:'PDI',
    dest_key:'PDI',
    current_context: (cc,hc) => {
      if(!hc) return 'Add your current country to see how teacher titles usually work where you are now.';
      const pdi = hc[0];
      if(pdi > 70) return 'In '+cc+', students usually expect a clear authority gap (authority distance score: '+pdi+'/100). Formal titles signal respect, and using your first name can feel too familiar.';
      if(pdi > 45) return 'In '+cc+', naming conventions are mixed. Some students will use titles automatically, while others will follow the tone the school or teacher sets.';
      return 'In '+cc+', students are more likely to treat first-name use as normal rather than disrespectful. Low formality usually reflects cultural equality, not poor behavior.';
    },
    why:"Power Distance shapes how natural hierarchy feels. In lower-PDI cultures, reducing formality signals accessibility and equality. In higher-PDI cultures, titles protect the social order and clarify who carries responsibility in the room.",
    respond:"Set your naming preference explicitly on day one and explain it without moralizing. If you prefer a title, teach it and reinforce it calmly. If first names are normal in the destination, do not read them automatically as disrespect.",
    research:'Hofstede cultural research, Trompenaars & Hampden-Turner (1997)',
    dest_high:'In higher-PDI destinations, students will usually default to formal titles and may feel uneasy if you ask them to collapse the hierarchy too quickly.',
    dest_low:'In lower-PDI destinations, first names or relaxed address are common. Students may show respect through tone, punctuality, and honesty rather than formal title use.',
  },
  {
    id:'f8', behavior:'Students are intensely focused on exams but check out after them',
    dims:['Future focus','Assessment orientation'], category:'learning',
    dim_key:'LTO',
    dest_key:'LTO',
    current_context: (cc,hc) => {
      if(!hc) return 'Add your current country to compare how exam-centered the learning culture is.';
      const lto = hc[4];
      if(lto > 60) return 'In '+cc+', long-term payoff and disciplined effort tend to carry high value (future-focus score: '+lto+'/100). Students often treat major assessments as the point around which learning is organized.';
      if(lto > 40) return 'In '+cc+', exams matter, but students are usually balancing credential goals with broader learning expectations.';
      return 'In '+cc+', students are less likely to define learning entirely through major exams. Once the test is over, it is easier to redirect energy toward broader application or exploration.';
    },
    why:"Long-term orientation often aligns with delayed gratification, persistence, and willingness to work hard for distant payoffs. In exam-heavy systems, that can translate into intense commitment before the assessment and a sharp drop in energy once the immediate benchmark has passed.",
    respond:"Name the post-exam slump before it arrives. Build a visible bridge between the exam unit and what comes next: reflection tasks, transfer problems, portfolio pieces, or authentic applications that show the learning still matters after the score is issued.",
    research:'Hofstede cultural research, Biggs (1996), Watkins & Biggs (2001)',
    dest_high:'In higher-LTO destinations, exam preparation often feels purposeful and socially validated. Plan for strong pre-exam effort and a deliberate re-entry after the assessment window closes.',
    dest_low:'In lower-LTO destinations, students may place less identity weight on the exam itself, which can make broader learning goals easier to sustain.',
  },
  {
    id:'f9', behavior:"Students want the rubric before they'll start - creative tasks cause anxiety",
    dims:['Certainty preference','Task ambiguity'], category:'communication',
    dim_key:'UAI',
    dest_key:'UAI',
    current_context: (cc,hc) => {
      if(!hc) return 'Add your current country to compare how much structure students usually want before they begin.';
      const uai = hc[3];
      if(uai > 70) return 'In '+cc+', students often want certainty before action (uncertainty avoidance score: '+uai+'/100). A detailed rubric feels like safety, not hand-holding.';
      if(uai > 45) return 'In '+cc+', students usually appreciate visible criteria before they start, even if they can tolerate some open space once they feel anchored.';
      return 'In '+cc+', students are usually more willing to begin before everything is fully specified. They tend to treat ambiguity as part of the work rather than a sign that the task is broken.';
    },
    why:"High uncertainty avoidance cultures tend to create strong preferences for rules, predictability, and reduced ambiguity. A rubric reduces social and academic risk by making success legible before students expose themselves to failure.",
    respond:"Give a rubric early, but use it as a launch pad rather than a cage. Model a few strong but different responses so students can see that structure and originality can coexist. Start creative work with low-stakes drafts before asking for final products.",
    research:'Hofstede cultural research, Carless (2009), Sadler (1989)',
    dest_high:'In higher-UAI destinations, rubrics and worked examples are often essential. Students may read a vague brief as teacher unpreparedness rather than freedom.',
    dest_low:'In lower-UAI destinations, students are more likely to improvise, experiment, and tolerate incomplete instructions. The challenge may shift toward consistency and polish.',
  },
  {
    id:'f10', behavior:'A few students dominate while others never speak',
    dims:['Competition norms','Classroom assertiveness'], category:'participation',
    dim_key:'MAS',
    dest_key:'MAS',
    current_context: (cc,hc) => {
      if(!hc) return 'Add your current country to compare how competitive classroom participation usually feels.';
      const mas = hc[2];
      if(mas > 60) return 'In '+cc+', assertiveness and visible success tend to be rewarded (competition score: '+mas+'/100). More confident students may treat talk-time as something to win.';
      if(mas > 45) return 'In '+cc+', participation norms are mixed. Some students push hard for space while others wait for more explicit invitation.';
      return 'In '+cc+', classrooms tend to value balance, inclusion, and cooperative turn-taking more strongly than open competition for airtime.';
    },
    why:"Higher masculinity scores are associated with stronger social approval for competition, assertiveness, and standing out. In classroom discussion, that can produce a few confident students who dominate while others retreat rather than compete publicly.",
    respond:"Do not rely on free-for-all discussion if you want equitable participation. Use timed turns, structured protocols, small-group rehearsals, cold-call systems with support, and written thinking before talk so the loudest students do not set the whole participation culture.",
    research:'Hofstede cultural research, Johnson & Johnson (2009), Mercer & Dawes (2014)',
    dest_high:'In higher-MAS destinations, outspoken students may crowd out quieter peers unless you design against it. Competition can energize the room, but it will not distribute voice fairly on its own.',
    dest_low:'In lower-MAS destinations, students are often more collaborative and less eager to compete for airtime, which makes balanced participation easier to build.',
  },
  {
    id:'f11', behavior:'Parents defer completely to your judgment - you never hear from them',
    dims:['Authority distance','Parent-school roles'], category:'parents',
    dim_key:'PDI',
    dest_key:'PDI',
    current_context: (cc,hc) => {
      if(!hc) return 'Add your current country to compare how directly parents usually engage with teachers.';
      const pdi = hc[0];
      if(pdi > 70) return 'In '+cc+', families are more likely to treat teachers as unquestioned professionals (authority distance score: '+pdi+'/100). Silence can signal trust and deference, not indifference.';
      if(pdi > 45) return 'In '+cc+', some parents will defer to school expertise while others expect two-way dialogue. The level of contact often depends on class, school type, and the issue at hand.';
      return 'In '+cc+', parents are more likely to see advocacy and direct communication as part of the role. No contact there is less likely to mean deference and more likely to mean distance or disengagement.';
    },
    why:"Power Distance shapes how comfortable families feel questioning institutional authority. In higher-PDI contexts, a teacher's professional authority may be treated as something parents should not casually challenge, especially in public or formal channels.",
    respond:"Do not mistake silence for lack of care. Offer clear invitation points for contact and make it obvious when parent input is welcome. If you need feedback, ask specific questions rather than waiting for parents to volunteer critique.",
    research:'Hofstede cultural research, Epstein (2011), Trompenaars & Hampden-Turner (1997)',
    dest_high:'In higher-PDI destinations, parents may defer strongly to teacher judgment and only surface concerns when a problem is already serious.',
    dest_low:'In lower-PDI destinations, parents are more likely to contact you early, advocate actively, and expect visible responsiveness from the school.',
  },
  {
    id:'f12', behavior:'Students bring you food, gifts, and personal items constantly',
    dims:['Warmth','Social expressiveness'], category:'relationships',
    dim_key:'IVR',
    dest_key:'IVR',
    current_context: (cc,hc) => {
      if(!hc) return 'Add your current country to compare how openly warmth and generosity are usually expressed.';
      const ivr = hc[5];
      if(ivr > 60) return 'In '+cc+', warmth is often expressed outwardly and generously (indulgence score: '+ivr+'/100). Small gifts, snacks, and tokens of affection can be a normal way students show connection.';
      if(ivr > 40) return 'In '+cc+', gift-giving and warm gestures are fairly common, especially once trust is built. The intent is usually relational rather than transactional.';
      return 'In '+cc+', warmth may be expressed more quietly. Students can still care deeply, but the culture may favor restraint over constant visible tokens or affectionate gestures.';
    },
    why:"Indulgence is partly about how freely people express enjoyment, warmth, and everyday gratification. In more indulgent settings, generosity and small pleasures can become a routine social language, including in school relationships.",
    respond:"Receive genuine warmth graciously while keeping school boundaries clear. Thank students, follow school policy on gifts, and redirect when the giving becomes excessive or inequitable. The goal is not to cool the relationship - it is to channel it fairly and professionally.",
    research:'Hofstede cultural research, Triandis (1995), Trompenaars & Hampden-Turner (1997)',
    dest_high:'In higher-IVR destinations, visible warmth and giving are often culturally normal. Students may show care through food, notes, humor, and frequent personal gestures.',
    dest_low:'In lower-IVR destinations, restraint is stronger. Care may show up more through consistency, reliability, and respectful distance than through gifts or open affection.',
  },
];
