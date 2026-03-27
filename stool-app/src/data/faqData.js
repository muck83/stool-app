export const FAQ_DATA = [
  {
    id:'f1', behavior:'Students stay silent — nobody speaks up in class',
    dims:['Group culture','Respect for authority'], category:'participation',
    dim_key:'IDV', // internal
    dest_key:'IDV',
    current_context: (cc,hc) => {
      if(!hc) return 'Add your current country in your profile to see how this applies where you are now.';
      const s = hc[1]; // IDV
      if(s < 35) return cc+' is a strongly group-oriented culture (group score: '+s+'/100). Speaking out publicly carries real social risk — a wrong answer in front of peers can be embarrassing for the whole group, not just the individual. This silence is not disengagement. It is sophisticated social caution.';
      if(s < 65) return cc+' has a mixed culture (group score: '+s+'/100). Some students will speak up easily; others won\'t. Watch for patterns — quieter students may be navigating group loyalty norms.';
      return cc+' leans toward individual expression (score: '+s+'/100). Silence here is more likely to mean genuine confusion or uncertainty than group-culture caution.';
    },
    why:"In strongly group-oriented cultures, speaking out in class carries real social risk. A wrong answer — or an opinion that goes against the teacher or classmates — can feel like public failure for the whole group, not just the individual. Students are not being passive: they are actively protecting the group\'s harmony and their own social standing. Research on how culture shapes identity (Markus & Kitayama, 1991) explains this precisely: in group-oriented cultures, students' sense of self is deeply tied to how they are seen by others. Individual public failure threatens something fundamental.",
    respond:"Replace public individual questioning with structures that protect everyone: anonymous written responses (exit tickets, mini-whiteboards shown simultaneously), small group discussion before whole-class sharing (the group speaks, not the individual), think-pair-share where the pair reports rather than the person. Never single out a student for a wrong answer in front of peers. Always frame questions as 'I\'m curious what different people think' rather than 'what is the answer?'",
    research:'Markus & Kitayama (1991), Hofstede cultural research, King & Witt (2009)',
    dest_high:'In more individually-oriented destinations, silence typically means genuine confusion — not social caution. Direct questioning is culturally normal. Students expect to advocate for themselves and will do so, sometimes forcefully. Enjoy the engagement, but be ready for students who push back on your decisions.',
    dest_low:'In equally or more group-oriented destinations, this dynamic intensifies. Build the same protective structures — they will be just as necessary. The culture\'s strength in collaborative work is real: lean into group projects as genuine pedagogy, not a workaround.',
  },
  {
    id:'f2', behavior:"Students say 'yes' but don\'t follow through",
    dims:['Group culture','Communication style'], category:'communication',
    dim_key:'IDV',
    dest_key:'IDV',
    current_context: (cc,hc) => {
      if(!hc) return 'Add your current country to see how this plays out where you are.';
      const pdi = hc[0], idv = hc[1];
      if(pdi > 65 && idv < 40) return 'In '+cc+', "yes" is often a relational response — it means "I respect you and I\'m engaged" rather than "I\'ve understood and will do this." The relationship with you (as the authority figure) takes priority over literal accuracy. This is not deception. It is a different communication system.';
      if(idv < 50) return 'In '+cc+', saying no or expressing confusion can feel socially uncomfortable, so "yes" sometimes smooths over uncertainty. Build in regular check-in moments to catch this early.';
      return 'In '+cc+', "yes" generally means yes. If students aren\'t following through, look for other causes: workload, unclear instructions, or competing priorities.';
    },
    why:"In cultures where group harmony and respect for authority are strong values, 'yes' is often a relationship-maintenance response rather than a factual commitment. Saying 'no', 'I don\'t understand', or 'I disagree' to a teacher can feel disrespectful or socially risky. Cross-cultural communication research (Hall, 1976; Triandis, 1995) calls these 'high-context' cultures — where meaning is carried as much by relationship and social context as by the literal words spoken. This is a different communication operating system, not a character flaw.",
    respond:"Never rely on a single 'yes' as confirmation of understanding. Use structured comprehension checks: 'Show me the first step', 'Walk me through your plan', 'Let\'s try the first part together now.' Build multiple low-stakes checkpoints into your workflow. Create private channels for clarification — a written note, a quiet one-on-one moment — where students don\'t risk public embarrassment by admitting confusion.",
    research:'Triandis (1995), Hall (1976) high-context communication, Hofstede cultural research',
    dest_high:"In more individually-oriented destinations, 'yes' more reliably means yes. Students will tell you directly when they don\'t understand — sometimes bluntly. Welcome the directness, but be aware that students may also negotiate or dispute your assessment decisions more assertively.",
    dest_low:"This pattern strengthens further if you move to a more group-oriented, high-authority-distance culture. Build even more structured check-in routines. The 'yes problem' doesn\'t fix itself — it deepens.",
  },
  {
    id:'f3', behavior:'Parents are intensely involved and academically demanding',
    dims:['Future focus','Academic pressure'], category:'parents',
    dim_key:'LTO',
    dest_key:'LTO',
    current_context: (cc,hc) => {
      if(!hc) return 'Add your current country to understand parent engagement in your context.';
      const lto = hc[4], mas = hc[2];
      if(lto > 65 && mas > 50) return 'In '+cc+', education is treated as a serious long-term investment — often the primary strategy for family social mobility. Parents are not hovering; they are managing what may feel like a generational bet. Academic results carry real existential weight here. Their intensity is rational, not pathological.';
      if(lto > 65) return 'In '+cc+', families think in generational timescales when it comes to education. Parent involvement is high and future-oriented. They want to understand the trajectory, not just the grade.';
      return 'In '+cc+', parental involvement is moderate. Parents value education but the cultural pressure around academic outcomes is lower than in East Asian or South Asian contexts.';
    },
    why:"In cultures with strong future-orientation and high academic competition, education is the primary vehicle for social mobility across generations. The parent isn\'t just engaged with your class — they are managing a multi-generational strategy. World Values Survey research (Inglehart & Welzel) shows that in cultures closer to 'survival values', educational outcomes carry near-existential weight. Academic success is security. Their intensity makes complete sense from inside their cultural frame.",
    respond:"Communicate proactively with data. These parents respond to quantitative information: grade distributions, benchmark comparisons, specific improvement trajectories. Frame feedback as direction ('improving in X, needs to develop Y') not verdict. Build trust early with accessible, frequent communication — messaging apps are standard in many of these cultures. Never dismiss parental concern as helicopter parenting. It is a culturally valid expression of care and responsibility.",
    research:'Inglehart & Welzel World Values Survey, Kim (1993) Confucian education values, Hofstede cultural research',
    dest_high:'Moving to a more future-focused, academically competitive destination will intensify this. South Korea, Japan, China, and Vietnam represent the extreme end of this spectrum — academic pressure on students (and therefore on you) will be significant.',
    dest_low:'Moving to a more present-focused destination typically means less academic pressure from parents — but more individual advocacy for their child\'s personal preferences and learning style. A different kind of engagement, not a quieter one.',
  },
  {
    id:'f4', behavior:'Students resist open-ended tasks and want definite answers',
    dims:['Certainty preference','Clear structure'], category:'learning',
    dim_key:'UAI',
    dest_key:'UAI',
    current_context: (cc,hc) => {
      if(!hc) return 'Add your current country to see how this applies in your classroom.';
      const uai = hc[3];
      if(uai > 70) return 'In '+cc+', students have a strong cultural preference for clear, correct answers (certainty score: '+uai+'/100). Education in this context is usually about mastering right answers, not exploring open questions. Ambiguity doesn\'t just feel uncomfortable — it can feel like a failure of the teacher to provide what education is supposed to deliver.';
      if(uai > 45) return 'In '+cc+', students have a moderate preference for structure. Open tasks are manageable if scaffolded well — introduce them gradually with clear rubrics and worked examples.';
      return 'In '+cc+', students are generally comfortable with open questions and ambiguous tasks. The challenge here may be the opposite: building rigour and precision within open inquiry.';
    },
    why:"In cultures with a high preference for certainty, the entire educational experience — from national exams to parent expectations — is typically built around mastering correct, reproducible answers. Open-ended inquiry can feel threatening because it removes the certainty that defines what 'doing well' looks like. Cultural value research (Schwartz, 1992) describes this as 'embeddedness' — conformity to established patterns is a virtue, not a constraint. Students aren\'t resisting your pedagogy; they\'re applying a completely rational strategy for their educational context.",
    respond:"Scaffold ambiguity explicitly before expecting students to embrace it. Use 'productive struggle' frameworks where uncertainty is named as a normal learning stage. Provide structured rubrics for open tasks — the rubric provides enough certainty to allow exploration. Move from highly structured to more open tasks progressively within a unit. Frame inquiry as 'there are multiple strong answers' rather than 'there is no right answer' — the latter is genuinely anxiety-inducing.",
    research:'Hofstede cultural research, Schwartz (1992) cultural values, Carless (2009) assessment uncertainty',
    dest_high:'Destinations with very high certainty preference (Japan, South Korea, Romania) will present this challenge intensely. Students may have had almost no experience with open-ended inquiry. Build gradually, with extensive scaffolding, and be patient — this is not resistance, it is cultural history.',
    dest_low:'Destinations more comfortable with ambiguity (Singapore is the most striking example globally, followed by UK, Netherlands, US) will feel liberating. Students are more willing to experiment and explore. Watch for the opposite challenge: building sustained rigour within open work.',
  },
  {
    id:'f5', behavior:'Students avoid expressing individual opinions — group harmony comes first',
    dims:['Group culture'], category:'participation',
    dim_key:'IDV',
    dest_key:'IDV',
    current_context: (cc,hc) => {
      if(!hc) return 'Add your current country to understand this in your specific context.';
      const idv = hc[1];
      if(idv < 35) return 'In '+cc+', students\' identity is deeply tied to their group relationships (group score: '+idv+'/100). Contradicting a classmate publicly is not just socially uncomfortable — it can feel like a threat to something fundamental about who they are. Consensus-seeking is not passivity. It is a sophisticated and culturally valid social strategy.';
      if(idv < 55) return 'In '+cc+', students balance individual and group identity. Some will express opinions readily; others prioritise group cohesion. Read the room and design structures that give both types a pathway.';
      return 'In '+cc+', individual opinion expression is culturally expected and taught. Students are likely to express opinions directly. Watch instead for assertiveness that can feel aggressive to students from more group-oriented backgrounds.';
    },
    why:"In group-oriented cultures, a student\'s sense of self is relational — embedded in how they are perceived by peers and family, not separate from that. Contradicting a classmate or teacher in public isn\'t just socially uncomfortable; it risks fragmenting something core to their identity. Research on how culture shapes selfhood (Markus & Kitayama, 1991) explains why this isn\'t timidity or intellectual passivity — it is a coherent, sophisticated strategy for maintaining the social fabric that their identity depends on.",
    respond:"Design discussion formats that depersonalise the opinion from the individual: role cards ('argue the position that...'), written arguments submitted before oral discussion, fishbowl formats where an inner group speaks while an outer group evaluates. Use 'authors' and 'characters' rather than students' own views. Create contexts where the class as a whole expresses diverse perspectives — the group becomes the unit of intellectual exploration, not isolated individuals.",
    research:'Markus & Kitayama (1991), Hofstede cultural research, Nisbett (2003) geography of thought',
    dest_high:'In individually-oriented destinations, students are expected to form and defend personal opinions. This shift can feel energising — but watch for students who argue assertively and expect genuine intellectual engagement rather than just compliance from you.',
    dest_low:'In equally group-oriented destinations, this dynamic continues. The culture\'s genuine strength in collaborative work is real — lean into it as pedagogy. Group consensus is not intellectual laziness; it can be sophisticated collective reasoning.',
  },
  {
    id:'f6', behavior:'Grade pushback — parents and students challenge your assessments constantly',
    dims:['Academic pressure','Authority distance'], category:'parents',
    dim_key:'MAS',
    dest_key:'MAS',
    current_context: (cc,hc) => {
      if(!hc) return 'Add your current country to understand the grading culture where you are.';
      const mas = hc[2], pdi = hc[0];
      if(mas > 60 && pdi < 55) return 'In '+cc+', academic results carry high social stakes AND the culture is relatively open to challenging authority (competitiveness: '+mas+'/100, authority distance: '+pdi+'/100). This combination makes grade appeals especially common. Parents may use formal institutional channels. Build your assessment transparency at the front end, not the back end.';
      if(mas > 60) return 'In '+cc+', education is intensely competitive (score: '+mas+'/100). Grades matter enormously. Pushback may come through informal channels rather than formal appeals, but the underlying pressure is real.';
      return 'In '+cc+', assessment pressure is moderate. Occasional grade queries are normal, but sustained confrontation over grades is unusual.';
    },
    why:"In cultures where education is intensely competitive, grades carry high social stakes — they are a currency, not just a measure. When a culture also has a lower respect for authority as absolute, the combination makes formal grade challenges more likely. Research on achievement-oriented cultures shows that competition for top scores, public recognition, and strong reactions to perceived unfair assessment are all culturally expected, not aberrant behaviour. Parents in these contexts may view challenging a grade as responsible parenting, not disrespect.",
    respond:"Build assessment transparency into the front end, not the back end. Share detailed rubrics, worked examples, and mark schemes before assessment, not just after. Document your grading decisions carefully. Create a clear, visible appeals process that sits within your institution\'s policies. Pre-empt conflict with proactive parent communication about assessment standards — a brief email before results go home costs far less than a confrontation after.",
    research:'Hofstede cultural research, Biggs (1996) learning in competitive cultures, Kennedy (2002) assessment in East Asia',
    dest_high:'Moving to a more academically competitive destination will intensify this. Japan and China represent particularly high-pressure environments where student competition is open, intense, and socially sanctioned.',
    dest_low:'Netherlands, Scandinavia, and much of Western Europe have genuinely lower academic competition norms. Assessment pressure decreases, collaborative dynamics prevail, and institutional wellbeing is taken seriously.',
  },
  {
    id:'f7', behavior:'Students seem to prefer memorisation over creative thinking',
    dims:['Certainty preference','Future focus','Authority distance'], category:'learning',
    dim_key:'UAI',
    dest_key:'UAI',
    current_context: (cc,hc) => {
      if(!hc) return 'Add your current country to see how this plays out in your context.';
      const uai = hc[3], lto = hc[4], pdi = hc[0];
      if(uai > 65 && lto > 60) return 'In '+cc+', the entire educational system — from national exams to parent expectations — is typically built around reproducible, correct knowledge. Memorisation is not laziness here. It is the rational strategy for success in a system that rewards accuracy. The good news: research shows that students in these contexts are often deep strategic learners who apply their memorised knowledge with great precision.';
      if(uai > 45) return 'In '+cc+', students have a preference for clear, structured knowledge over open exploration. This is a spectrum — they can engage with creative thinking if it\'s introduced carefully with strong scaffolding.';
      return 'In '+cc+', students are more open to creative and exploratory thinking. The challenge may be building rigour and precision within that openness.';
    },
    why:"In cultures with strong preferences for certainty and future-focused, achievement-oriented values, the whole educational ecosystem rewards accurate, reproducible knowledge. National examinations, parental expectations, and social recognition are typically aligned around precision and memorisation. Research on learning in these contexts (Biggs, 1996) is important here: students who appear to be surface-level memorisers are often deep strategic learners — they are applying their memorised knowledge with great sophistication within a system that rewards exactly that. The issue is the system, not the student.",
    respond:"Explicitly teach and model the difference between reproducing knowledge and applying it creatively — and explain why you\'re asking for the latter. Frame critical thinking as a skill that multiplies the knowledge they already have, not a replacement for it. Hybridise your assessments: some certainty-providing foundational tasks alongside open analytical ones. Never dismiss strong memorisation skills — they are genuine cognitive assets that transfer powerfully when given the right scaffolding.",
    research:'Biggs (1996), Marton et al. (1996) deep vs surface learning, Hofstede cultural research',
    dest_high:'Destinations with high certainty preference will present this same dynamic. South Korea\'s private tutoring culture represents the most extreme form, but the underlying pattern appears across much of East Asia.',
    dest_low:'Destinations more comfortable with ambiguity tend to expect independent thought from earlier ages. Students may be more creative but sometimes less rigorous with foundational knowledge.',
  },
  {
    id:'f8', behavior:'Students and families are intensely warm — professional distance feels impossible',
    dims:['Social warmth','Group culture'], category:'relationships',
    dim_key:'IVR',
    dest_key:'IVR',
    current_context: (cc,hc) => {
      if(!hc) return 'Add your current country to understand the relationship culture in your context.';
      const ivr = hc[5], idv = hc[1];
      if(ivr > 65 && idv < 40) return 'In '+cc+', relationships are the infrastructure through which professional life actually functions (warmth score: '+ivr+'/100). Being invited to family events, receiving gifts, having students wait for you after class — these are genuine expressions of respect and inclusion, not boundary violations. The concept of professional distance is itself culturally constructed, and it is weakest here.';
      if(ivr > 55) return 'In '+cc+', social warmth and personal connection are genuinely valued in professional contexts. Investing in relationships is not optional socialising — it is how trust gets built and work gets done.';
      return 'In '+cc+', professional and personal spheres are more clearly separated. Warmth exists but is expressed through reliability and professional excellence rather than personal access.';
    },
    why:"In warm, group-oriented cultures, relationships are not separate from professional effectiveness — they ARE professional effectiveness. Being included in family occasions, receiving gifts, having students seek you out after school are expressions of genuine respect and welcome. The concept of 'professional distance' is itself culturally constructed, and it is strongest in individually-oriented, emotionally restrained cultures. Cross-cultural relationship research (Trompenaars, 1993) describes these as 'diffuse' cultures — where personal and professional life are genuinely integrated, not compartmentalised.",
    respond:"Distinguish between warmth (accept it gratefully) and genuine boundary concerns (navigate through cultural frameworks, not professional ones). Gift-giving: acceptance with reciprocation at a later stage is usually appropriate. Social events: selectively attending significant occasions signals genuine community membership and is professionally worth the investment. Set boundaries through workload management and practical limits rather than emotional distance — emotional distance will read as coldness and damage the very relationships that make your professional life work.",
    research:'Triandis (1995) in-group relationships, Trompenaars (1993) diffuse vs specific cultures, Hofstede cultural research',
    dest_high:'Highly warm destinations (Mexico, Colombia, parts of SE Asia) will feel even more relationship-intensive. Your social investment is not separate from your professional effectiveness — it IS your effectiveness. Build community early.',
    dest_low:'Destinations with lower social warmth (Hong Kong, Japan, South Korea) present the opposite challenge. Warmth is real but expressed through reliability, precision, and professional excellence rather than personal access. The culture can feel cold until you understand that showing up prepared and on time IS the expression of care.',
  },
];;
