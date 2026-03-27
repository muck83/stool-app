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
    why:"Silence often reflects risk management, not apathy. Students may need more processing time, social cover, or confidence before speaking in front of others.",
    respond:"Lower the social risk of participation. Use think-pair-share, quick writes, mini-whiteboards, and small-group rehearsal before whole-class discussion.",
    research:'Wait time; think-pair-share; formative assessment',
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
    why:"Students sometimes say yes to keep the interaction moving before they have fully understood the task. Follow-through problems usually signal unclear expectations, overload, or weak checking for understanding.",
    respond:"Check commitment through action, not just agreement. Ask students to show the first step, restate the task, or complete a short checkpoint before working independently.",
    research:'Checking for understanding; task clarity',
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
    why:"Intense parent contact often reflects high stakes, anxiety, and a desire for predictability rather than distrust of you personally. Families usually want concrete signs that their child is progressing.",
    respond:"Communicate early and specifically. Share timelines, criteria, and next steps so families can see both the current picture and the plan.",
    research:'Family-school partnership; expectancy-value',
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
    why:"Open-ended work raises cognitive load because success is less obvious and the path is less scripted. Students often resist it when they are unsure what quality looks like.",
    respond:"Make ambiguity manageable. Give exemplars, success criteria, and a staged entry point before widening the task.",
    research:'Scaffolding; cognitive load theory',
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
    why:"Students often hold back opinions when disagreement feels socially exposing or when they are still learning the norms of academic discussion. The issue is usually classroom safety, not lack of ideas.",
    respond:"Separate idea generation from public performance. Use silent writing, sentence stems, partner talk, and structured discussion roles before open debate.",
    research:'Psychological safety; discussion protocols',
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
    why:"Assessment challenges usually grow when grades carry high consequences and criteria feel open to interpretation. Students and parents push hardest when they cannot see how the decision was made.",
    respond:"Front-load transparency. Share rubrics, annotate examples, and document how the criteria were applied before and after assessment.",
    research:'Assessment transparency; rubric calibration',
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
    why:"Forms of address are part of how students read boundaries and relationship cues. What feels warm in one setting can feel too informal or too distant in another.",
    respond:"Name your preference clearly and model it consistently. Correct gently, explain the norm, and avoid treating every mismatch as a character issue.",
    research:'Teacher-student relationships; classroom norms',
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
    why:"Students often pour effort into the visible milestone and then lose momentum once the immediate pressure is gone. That drop is about motivation cycles more than laziness.",
    respond:"Plan the re-entry before the exam ends. Debrief, show what the assessment unlocked, and move quickly into transfer, reflection, or application.",
    research:'Goal orientation; transfer of learning',
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
    why:"Creative tasks feel risky when expectations are vague. Students ask for rubrics because they want a clearer picture of what success looks like before they commit effort.",
    respond:"Provide enough structure to reduce anxiety without scripting every move. Share criteria, model varied strong examples, and build in draft feedback.",
    research:'Success criteria; worked examples',
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
    why:"Uneven participation is often a design problem, not just a personality problem. Confident students take the floor quickly while quieter students need more time and invitation.",
    respond:"Structure airtime on purpose. Use turn limits, cold call with support, partner rehearsal, and written thinking so discussion does not default to the quickest voices.",
    research:'Equitable participation; dialogic teaching',
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
    why:"Parent silence can mean trust, uncertainty, distance, or lack of access rather than lack of interest. Many families wait for a clear invitation before they step in.",
    respond:"Open predictable channels for contact. Ask specific questions, explain when outreach is welcome, and make it easy for families to respond in small ways.",
    research:'Family engagement; communication routines',
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
    why:"Gift-giving is often a relationship signal rather than an attempt to manipulate you. Students may be expressing gratitude, warmth, or belonging through something tangible.",
    respond:"Acknowledge the kindness, follow school policy, and keep the boundary visible. Accept or redirect in a way that preserves warmth without creating favoritism.",
    research:'Relational trust; boundary setting',
    dest_high:'In higher-IVR destinations, visible warmth and giving are often culturally normal. Students may show care through food, notes, humor, and frequent personal gestures.',
    dest_low:'In lower-IVR destinations, restraint is stronger. Care may show up more through consistency, reliability, and respectful distance than through gifts or open affection.',
  },
];
