export const SR_QS = [
  {
    label:'Leadership',
    text:'When you raised a concern or disagreed with a decision that affected your work, what actually happened?',
    why:'This is the single strongest predictor of school culture health. Not what the handbook says — what happened in practice.',
    opts:[
      {t:'It was genuinely heard. The reasoning was explained, even when the decision didn\'t change.',       score:9, diag:'none'},
      {t:'I could raise things privately. Public disagreement was quietly discouraged.',                     score:6, diag:'opacity'},
      {t:'Concerns were acknowledged on the surface — then nothing changed and it wasn\'t mentioned again.', score:3, diag:'opacity'},
      {t:'Raising concerns had visible consequences. Most people learned not to.',                           score:1, diag:'toxicity'},
    ], key:'q1'
  },
  {
    label:'Honesty',
    text:'How closely did the job match what you were told during recruitment?',
    why:'The gap between what schools promise and what they deliver is the most common source of regret in international teaching.',
    opts:[
      {t:'Closely — they were honest about the challenges as well as the benefits.',                 score:9, diag:'none'},
      {t:'Mostly accurate. Some surprises, but nothing I couldn\'t adapt to.',                       score:7, diag:'none'},
      {t:'Significant gaps — important realities were framed much more positively than they were.',  score:3, diag:'dishonesty'},
      {t:'The gap was severe. The job I took was substantially different from the job described.',   score:1, diag:'dishonesty'},
    ], key:'q2'
  },
  {
    label:'Workload',
    text:'How sustainable was the actual workload — teaching, prep, marking, meetings, duties, everything?',
    why:'Workload exploitation is the most common thing teachers don\'t see coming. It\'s often normalized inside the school as "commitment."',
    opts:[
      {t:'Sustainable. I had a life outside school and didn\'t feel constantly behind.',              score:9, diag:'none'},
      {t:'Heavy, but manageable. I adjusted my expectations and it worked.',                          score:6, diag:'none'},
      {t:'Heavier than stated — consistently more than I was led to believe.',                        score:3, diag:'workload'},
      {t:'Unsustainable. It significantly affected my health, relationships, or wellbeing.',          score:1, diag:'workload'},
    ], key:'q3', extra:'hours'
  },
  {
    label:'Autonomy',
    text:'As a professional, how much were you trusted to make decisions about your own teaching?',
    why:'Professional autonomy is a top predictor of satisfaction that\'s independent of salary. Losing it is hard to recover from inside the same school.',
    opts:[
      {t:'High. I was genuinely trusted and my professional judgment was respected.',                 score:9, diag:'none'},
      {t:'Structured but fair — clear frameworks with room for professional judgment within them.',   score:7, diag:'none'},
      {t:'Low. Top-down directives left little room for adaptation.',                                score:3, diag:'autonomy'},
      {t:'Contradictory — autonomy stated in recruitment, compliance demanded in practice.',          score:1, diag:'autonomy'},
    ], key:'q4'
  },
  {
    label:'Colleagues',
    text:'How would you honestly describe the staff culture?',
    why:'Colleague culture is what makes the long days manageable or unbearable. It\'s also a leading indicator of leadership health.',
    opts:[
      {t:'Genuinely cohesive. People supported each other; new teachers were mentored.',              score:9, diag:'none'},
      {t:'Mixed. Good pockets of connection but no consistent culture.',                              score:6, diag:'none'},
      {t:'Fragmented. High turnover, limited connection, everyone fends for themselves.',             score:3, diag:'fragmentation'},
      {t:'Actively difficult. Visible factions, political culture, or real fear.',                   score:1, diag:'toxicity'},
    ], key:'q5'
  },
  {
    label:'Mission',
    text:'Who did the school actually serve in practice — not in the brochure?',
    why:'Mission drift — the gap between stated values and operational reality — is the clearest indicator of institutional integrity. And the hardest to spot from outside.',
    opts:[
      {t:'Students. Decisions consistently prioritised genuine learning and wellbeing.',              score:9, diag:'none'},
      {t:'Families. Genuinely responsive to parent expectations, sometimes at cost to teachers.',     score:7, diag:'none'},
      {t:'Reputation and metrics — rankings, accreditations, and appearances drove decisions.',       score:3, diag:'mission'},
      {t:'Ownership or profit — cost-cutting and revenue were clearly the primary drivers.',         score:1, diag:'mission'},
    ], key:'q6'
  },
  {
    label:'Your take',
    text:'If a colleague you respected asked you "should I take a job at this school?" what would you actually say?',
    why:'This question forces the honest synthesis. Not what you\'d say to be polite — what you\'d say to someone whose career you cared about.',
    opts:[
      {t:'Yes, without hesitation. I\'d recommend it genuinely.',                                    score:9, diag:'none'},
      {t:'Yes, with specific caveats they\'d need to go in knowing.',                                score:7, diag:'none'},
      {t:'Only if their situation made the trade-offs worthwhile.',                                  score:4, diag:'mixed'},
      {t:'No. I\'d tell them to look elsewhere.',                                                    score:1, diag:'leave'},
    ], key:'q7'
  },
  {
    label:'Exit safety',
    text:'When teachers left this school — voluntarily or not — how did the school handle their departure?',
    why:'Reference weaponisation — schools using references to punish departures — is one of the most feared and least discussed risks in international teaching. What happened to colleagues who left tells you more about institutional character than almost any other signal.',
    opts:[
      {t:'Professionally. References were given fairly regardless of the circumstances of leaving.',  score:9, diag:'none'},
      {t:'Quietly awkward. No overt punishment but departures were treated as a form of disloyalty.', score:6, diag:'exit_pressure'},
      {t:'Punitive for some. There were visible consequences for people who left on bad terms.',       score:3, diag:'exit_risk'},
      {t:'References were leverage. Teachers felt trapped by the threat of a damaging reference.',    score:1, diag:'exit_risk'},
    ], key:'q8', extra:'notice'
  },
  {
    label:'Parent culture',
    text:'How much did parental pressure shape what was actually acceptable in your classroom day to day?',
    why:'In elite international schools, parent expectations can override professional standards — affecting discipline, grades, and safeguarding. The TES has documented this as "affluent neglect." It\'s one of the most underreported structural problems in the sector and one of the hardest to see from outside.',
    opts:[
      {t:'Healthy. Parents were genuine partners and leadership backed professional decisions.',        score:9, diag:'none'},
      {t:'Some pressure, but leadership drew clear lines and held them when needed.',                  score:7, diag:'none'},
      {t:'Parent expectations regularly overrode professional standards in the classroom.',            score:3, diag:'parent_pressure'},
      {t:'Customer-service culture. Complaints bypassed teachers and were escalated routinely.',       score:1, diag:'parent_pressure'},
    ], key:'q9'
  },
  {
    label:'Family package',
    text:'How well did the school support the lives of partners and dependents — children\'s schooling, partner work opportunities, family logistics?',
    why:'The international school sector has a K-shaped split: some schools still provide genuinely family-friendly packages; a growing number of for-profit schools are quietly cutting dependent benefits. This question captures whether the family picture matched what was promised.',
    opts:[
      {t:'Strong. Dependent benefits were real, staff children integrated, partners genuinely supported.', score:9, diag:'none'},
      {t:'Adequate. Basic support existed but the lived reality required substantial self-management.',      score:7, diag:'none'},
      {t:'Gaps. Key promises — tuition remission, dependent places, spouse visas — fell meaningfully short.', score:3, diag:'family_gap'},
      {t:'N/A — I was at this school as a single teacher without dependents.',                             score:null, diag:'na'},
    ], key:'q10'
  },
];

// Diagnostic profiles — named verdicts with prognosis and advice
export const SR_DIAGNOSES = {
  none: null,
  opacity: {
    name: 'Leadership opacity',
    short: 'Decisions happen to you, not with you',
    color: '#BA7517', bg: '#FAEEDA',
    prognosis: 'This typically doesn\'t improve without a change in director. Leadership style is the single most stable feature of a school\'s culture. If the person at the top has learned that opacity works, they have no incentive to change.',
    advice: 'The diagnostic question is: is this person capable of changing, or have they built a culture that depends on information asymmetry? If you can\'t answer that confidently after 12 months, you have your answer. Document your concerns, build relationships with colleagues who share your experience, and give yourself a clear internal deadline for reassessment.',
  },
  dishonesty: {
    name: 'Recruitment dishonesty',
    short: 'The school knew what it was doing',
    color: '#D85A30', bg: '#FAECE7',
    prognosis: 'The gap between what schools promise and what they deliver is almost never accidental. Recruiters know the actual workload, the real housing situation, the leadership issues. What was misrepresented was a deliberate choice. That rarely corrects itself.',
    advice: 'Separate the legitimate grievance (you were misled) from the practical question (what do you do now). If the package or workload gaps are tolerable and other legs of the stool are strong, staying for one contract while building your exit strategy is rational. If they\'re not, leaving at the end of this contract is not failure — it\'s appropriate response to being deceived.',
  },
  workload: {
    name: 'Workload exploitation',
    short: 'Overwork normalised as commitment',
    color: '#D85A30', bg: '#FAECE7',
    prognosis: 'Workload cultures are deeply embedded and change slowly. They\'re often invisible from inside because everyone is equally overloaded and the framing is "we all work hard here." The health cost compounds over time in ways that are hard to reverse.',
    advice: 'Name it privately and precisely: how many hours per week, what the contract says, what a reasonable professional expects. Then make a deliberate choice about whether you can sustain this for the length of a contract. Trying to change the culture from inside almost never works. Protecting your own hours does — and is worth attempting before deciding to leave.',
  },
  autonomy: {
    name: 'Autonomy erosion',
    short: 'Professional trust withdrawn',
    color: '#534AB7', bg: '#EEEDFE',
    prognosis: 'Once a school shifts toward compliance culture, it rarely shifts back on its own. The systems built to enforce compliance (observation frameworks, lesson plan submissions, audit trails) generate their own institutional momentum. New leadership can reverse it, but that requires both the will and the specific capability.',
    advice: 'Autonomy matters more to some teachers than others — know which you are before deciding how seriously to weigh this. If you\'re someone who needs professional trust to do your best work, this is a structural problem, not a personal adjustment challenge. It\'s worth leaving for a school that\'s built differently.',
  },
  fragmentation: {
    name: 'Colleague fragmentation',
    short: 'High turnover, no roots, everyone alone',
    color: '#185FA5', bg: '#E6F1FB',
    prognosis: 'Fragmented staff culture is usually a downstream effect of leadership problems and high turnover. It can improve if leadership changes and retention stabilises — but this takes years. The chicken-and-egg: people leave because it\'s fragmented; it\'s fragmented because people leave.',
    advice: 'Invest selectively in 2–3 genuine relationships with colleagues who plan to stay. Don\'t try to fix the culture — focus on creating enough human connection to make the posting sustainable for its duration. If you can\'t find even a handful of people worth staying for, that tells you something.',
  },
  mission: {
    name: 'Mission drift',
    short: 'Values stated, values lived — different schools',
    color: '#3B6D11', bg: '#EAF3DE',
    prognosis: 'Mission drift is structural. Schools that primarily serve ownership or reputation rather than students have built their operational systems around that priority. It doesn\'t drift back toward mission without governance change — which almost never happens from inside.',
    advice: 'The question isn\'t whether to be idealistic — it\'s whether the stated mission is what drove you to take the post. If so, the gap between what you believed and what exists is a legitimate reason to leave. If you went in primarily for the package and the mission gap is disappointing but not central, that\'s a different calculation.',
  },
  toxicity: {
    name: 'Toxic culture',
    short: 'Fear, factions, or both',
    color: '#A32D2D', bg: '#FCEBEB',
    prognosis: 'Toxic cultures — where disagreement has consequences and visible factions exist — are the most stable dysfunction in institutional life. They sustain themselves because the people who could challenge them have learned not to. Change almost never comes from within.',
    advice: 'Stop trying to fix it. Your energy is limited and the system will outlast your attempts. The only productive questions are: can you protect yourself for the duration of this contract, and what\'s your realistic exit timeline? Document everything, build external networks, and prioritise your mental health over professional heroism.',
  },
  mixed: {
    name: 'Mixed picture',
    short: 'Real trade-offs, no single root cause',
    color: '#BA7517', bg: '#FAEEDA',
    prognosis: 'Mixed pictures are the hardest to act on — there\'s no single thing to fix or name. The risk is staying indefinitely because nothing is bad enough to justify leaving, while the accumulated weight of multiple "acceptable" problems erodes your professional wellbeing.',
    advice: 'Use the three-legged stool explicitly. Rate each leg honestly: school, place, package. If two of three are genuinely strong, a mixed school picture is survivable. If the school is the only weak leg, that\'s one kind of problem. If it\'s weak alongside another leg, that\'s a different and more urgent one.',
  },
  leave: {
    name: 'Time to move',
    short: 'Your own honest answer is the diagnosis',
    color: '#A32D2D', bg: '#FCEBEB',
    prognosis: 'When you\'d tell someone you respect not to take a job at your school, you already have your diagnosis. You\'re staying for reasons that probably have nothing to do with this school being good for you.',
    advice: 'Give yourself a concrete exit timeline — not "I\'ll see how next year goes" but a specific date by which you\'ll have applied elsewhere. The research on expatriate adjustment is clear: the teachers who stay too long in poor postings almost universally wish they\'d left sooner. The cost of leaving early is manageable. The cost of staying too long is not.',
  },
  exit_pressure: {
    name: 'Exit discomfort',
    short: 'Departures treated as disloyalty',
    color: '#BA7517', bg: '#FAEEDA',
    prognosis: 'Schools that treat departures as betrayals create a quiet culture of entrapment. It\'s not overt enough to call weaponisation, but over time it shapes who stays and why — and the people who stay are often doing so out of fear rather than genuine commitment.',
    advice: 'Document your work and relationships independently of school systems. Build external professional references before you need them. If you\'re thinking about moving, don\'t announce it until your plans are concrete.',
  },
  exit_risk: {
    name: 'Reference weaponisation risk',
    short: 'Leaving carries real professional consequences',
    color: '#A32D2D', bg: '#FCEBEB',
    prognosis: 'Schools that use references as leverage have built a power structure that depends on teacher captivity. This is one of the most serious structural problems in international schools — and one of the most underdiscussed. It almost never improves without a complete change in leadership.',
    advice: 'Secure external references from people who know your work and will not be influenced by the school before you begin any job search. Understand your contract\'s resignation clause precisely. The community of international education is smaller than it seems — schools with this reputation are known to experienced recruiters.',
  },
  parent_pressure: {
    name: 'Affluent neglect pressure',
    short: 'Parent expectations override professional standards',
    color: '#D85A30', bg: '#FAECE7',
    prognosis: 'Customer-service culture in elite international schools is a structural problem, not a personal conflict. When leadership routinely sides with parents over professional staff, the system rewards complaint and erodes the conditions for real teaching. It escalates rather than stabilises.',
    advice: 'Document specific incidents — not as ammunition but as clarity for yourself. The question to ask is whether the leadership *can\'t* or *won\'t* hold the line with parents. The first is a capacity problem; the second is a values problem. Both lead to the same place, but one is more hopeful than the other.',
  },
  family_gap: {
    name: 'Family package shortfall',
    short: 'Dependent benefits didn\'t match the promise',
    color: '#534AB7', bg: '#EEEDFE',
    prognosis: 'The K-shaped split in international school benefits is real and growing. For-profit school groups in particular have steadily reduced dependent benefits while maintaining headline salary figures. If the gap between promised and delivered benefits is large, it reflects a deliberate model — not an oversight.',
    advice: 'Get everything in writing at offer stage — tuition remission, dependent visa support, partner employment assistance. Verbal promises are not enforceable. If a school is reluctant to commit these to a contract, that tells you something about their intention to deliver them.',
  },
  na: null,
};

export const SR_DIM_COLORS = {
  q1: '#BA7517', q2: '#D85A30',  q3: '#D85A30',  q4: '#534AB7',
  q5: '#185FA5', q6: '#3B6D11',  q7: '#1a1917',
  q8: '#A32D2D', q9: '#8B4513',  q10: '#2E6B9E',
};
