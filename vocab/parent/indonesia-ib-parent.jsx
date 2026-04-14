export const indonesiaIbParent = {
  id: 'parent-indonesia-ib-001',
  slug: 'indonesia-ib',
  country: 'indonesia',
  program: 'IB',
  languages: ['en', 'id'],

  journeyStages: [
    {
      id: 'new',
      en: {
        label: 'New to IB',
        description: 'Your child has recently transitioned from Indonesian national curriculum to IB.',
        highlight: 'Learning to speak a new educational language',
      },
      id: {
        label: 'Baru ke IB',
        description: 'Anak Anda baru saja pindah dari kurikulum nasional Indonesia ke IB.',
        highlight: 'Belajar berbicara dalam bahasa pendidikan yang baru',
      },
    },
    {
      id: 'settled',
      en: {
        label: 'Settling In',
        description: 'Your child is in Year 2+ and report cards are arriving. Extended family and peers are asking about university prospects.',
        highlight: 'Comparison with peer pathways becomes real',
      },
      id: {
        label: 'Mulai Beradaptasi',
        description: 'Anak Anda sudah di Tahun 2+ dan rapor mulai tiba. Keluarga besar dan teman sebaya mulai bertanya tentang prospek universitas.',
        highlight: 'Perbandingan dengan jalur teman sebaya menjadi nyata',
      },
    },
    {
      id: 'pyp-myp',
      en: {
        label: 'PYP to MYP Transition',
        description: 'Around age 10-12, moving from PYP to MYP. The shadow of national exams still looms even though Ujian Nasional was abolished.',
        highlight: 'Foundation strength question emerges',
      },
      id: {
        label: 'Transisi PYP ke MYP',
        description: 'Sekitar usia 10-12 tahun, pindah dari PYP ke MYP. Bayangan ujian nasional masih terasa meski sudah dihapuskan.',
        highlight: 'Pertanyaan tentang kekuatan fondasi muncul',
      },
    },
    {
      id: 'myp-dp',
      en: {
        label: 'MYP to DP Decision',
        description: 'Year 10-11. University pathway urgency is now high. SNBT versus IB diploma question becomes critical.',
        highlight: 'The pathway fork in the road becomes unavoidable',
      },
      id: {
        label: 'Keputusan MYP ke DP',
        description: 'Tahun 10-11. Kedesakan jalur universitas kini tinggi. Pertanyaan SNBT versus diploma IB menjadi kritis.',
        highlight: 'Persimpangan jalan jalur pendidikan menjadi tak terhindarkan',
      },
    },
  ],

  meta: {
    en: {
      title: 'Understanding IB in Indonesia',
      subtitle: 'A guide for parents navigating an international curriculum in a competitive education landscape',
      intro: 'You chose IB for your child because you believe in inquiry, critical thinking, and a global perspective. But you live in Indonesia, where the SNBT determines public university admission, where bimbel is normal, and where your extended family asks: "Can your child still get into UI?" This guide bridges that gap. It explains what IB actually means for your child\'s future in Indonesia—honestly, clearly, without either sugarcoating or undermining your choice.',
      reassurance: 'Your choice of IB is not a gamble. But it is a different path. Understanding that path—its strengths, its tradeoffs, and how to navigate it—is what this guide provides.',
      indonesianUniversityNote: 'Indonesia has two university systems: PTN (public universities) and PTS (private universities). PTN admission typically requires the SNBT. PTS, and many international programs at PTNs, recognize IB directly. This distinction shapes your child\'s pathway.',
    },
    id: {
      title: 'Memahami IB di Indonesia',
      subtitle: 'Panduan untuk orang tua yang menavigasi kurikulum internasional di lanskap pendidikan yang kompetitif',
      intro: 'Anda memilih IB untuk anak Anda karena Anda percaya pada inquiry, pemikiran kritis, dan perspektif global. Namun Anda tinggal di Indonesia, di mana SNBT menentukan penerimaan universitas negeri, di mana bimbel adalah normal, dan di mana keluarga besar Anda bertanya: "Bisakah anak Anda masuk UI?" Panduan ini menjembatani kesenjangan itu. Panduan ini menjelaskan apa yang IB benar-benar berarti untuk masa depan anak Anda di Indonesia—jujur, jelas, tanpa menyederhanakan maupun mengkerdilkan pilihan Anda.',
      reassurance: 'Pilihan Anda untuk IB bukan judi. Namun ini adalah jalur yang berbeda. Memahami jalur itu—kekuatan, trade-off-nya, dan cara menavigasinya—adalah apa yang panduan ini sediakan.',
      indonesianUniversityNote: 'Indonesia memiliki dua sistem universitas: PTN (perguruan tinggi negeri) dan PTS (perguruan tinggi swasta). Penerimaan PTN biasanya memerlukan SNBT. PTS, dan banyak program internasional di PTN, mengakui IB secara langsung. Perbedaan ini membentuk jalur anak Anda.',
    },
  },

  openingHook: {
    en: {
      situation: [
        'Ibu Sari, a parent from Surabaya, moved her daughter Dina to an IB school at the start of Year 9 (MYP 3). She had researched IB, talked to other expat parents, and believed it was the right choice for a globally minded child.',
        'At the first report day, she received a sheet of criterion scores and narrative comments. No percentage. No ranking (peringkat). No comparison to class average. She stared at the paper trying to understand what "approaching the aims of the course" meant in Bahasa Indonesia.',
        'That evening, her mother called from Surabaya. "What\'s her score?" asked Nenek. Ibu Sari could not answer the question in a way that made sense to her own mother. Meanwhile, she learned that Dina\'s former bimbel teacher was already coaching Year 9 students on SNBT strategy. She wondered if she had made a mistake.',
      ],
      question: 'Is my daughter falling behind her peers?',
      directAnswer: 'The short answer: no, but the pathways are genuinely different. Being clear about that now prevents a bigger crisis at university application time.',
    },
    id: {
      situation: [
        'Ibu Sari, seorang orang tua dari Surabaya, memindahkan putrinya Dina ke sekolah IB di awal Tahun 9 (MYP 3). Dia telah meneliti IB, berbicara dengan orang tua ekspat lainnya, dan percaya itu adalah pilihan yang tepat untuk anak yang berpikiran global.',
        'Pada hari laporan pertama, dia menerima lembar skor kriteria dan komentar naratif. Tidak ada persentase. Tidak ada peringkat. Tidak ada perbandingan dengan rata-rata kelas. Dia menatap kertas itu mencoba memahami apa arti "approaching the aims of the course" dalam Bahasa Indonesia.',
        'Malam itu, ibunya menelepon dari Surabaya. "Berapa nilainya?" tanya Nenek. Ibu Sari tidak bisa menjawab pertanyaan itu dengan cara yang masuk akal bagi ibunya sendiri. Sementara itu, dia belajar bahwa guru bimbel Dina sebelumnya sudah melatih siswa Tahun 9 tentang strategi SNBT. Dia bertanya-tanya apakah dia telah membuat kesalahan.',
      ],
      question: 'Apakah anak saya tertinggal dari teman-temannya?',
      directAnswer: 'Jawaban singkatnya: tidak, tetapi jalurnya benar-benar berbeda. Menjadi jelas tentang itu sekarang mencegah krisis yang lebih besar pada waktu aplikasi universitas.',
    },
  },

  cards: [
    {
      id: 'inquiry-vs-drilling',
      relevantAt: ['new', 'settled'],
      ibComponent: 'IB Learner Profile, Inquiry-based learning',
      en: {
        concept: 'Inquiry vs. Hafalan (Rote Memorization)',
        concern: 'Your child\'s report says "shows curiosity and asks questions" but you\'re worried: "They\'re not memorising the way they did at their old school. How will they pass exams?" In the Indonesian national curriculum, hafalan—memorizing facts, formulae, dates—is the dominant learning mode. Bimbel centers teach you to drill hard. Report cards measure how much you can reproduce.',
        bridge: 'IB inquiry does not abandon memorization; it builds something on top of it. Your child still needs to know facts. But IB asks: "Why do you need to know this? How does it connect to other ideas? When would you actually use it?" This deeper processing makes learning sticky. Research shows that inquiry-based learning produces better retention and transfer than drilling alone. Your child will also develop the ability to learn independently—a skill that matters far more in university and beyond than raw memorization.',
        goal: 'Your child develops both factual knowledge and deep understanding. They learn to teach themselves, to ask productive questions, and to solve unfamiliar problems—skills that IB measures and universities value.',
        ibConnection: 'IB\'s inquiry-based approach is one of its core strengths. It\'s not laziness; it\'s learning science.',
        whatToAsk: [
          'What is my child learning to ask about in their classes?',
          'Can you show me an example of how inquiry led to deeper understanding in one of their recent assignments?',
          'How is my child building independent study skills?',
        ],
      },
      id: {
        concept: 'Inquiry vs. Hafalan (Menghafal)',
        concern: 'Laporan anak Anda mengatakan "menunjukkan rasa ingin tahu dan bertanya" tetapi Anda khawatir: "Mereka tidak menghafal seperti di sekolah lama mereka. Bagaimana mereka akan lulus ujian?" Di kurikulum nasional Indonesia, hafalan—menghafal fakta, rumus, tanggal—adalah mode pembelajaran yang dominan. Pusat bimbel mengajarkan Anda untuk mengejar dengan keras. Rapor mengukur berapa banyak yang bisa Anda reproduksi.',
        bridge: 'Inquiry IB tidak menghilangkan hafalan; ia membangun sesuatu di atasnya. Anak Anda masih perlu tahu fakta. Tetapi IB bertanya: "Mengapa Anda perlu tahu ini? Bagaimana itu terhubung dengan ide-ide lain? Kapan Anda akan benar-benar menggunakannya?" Pemrosesan yang lebih dalam ini membuat pembelajaran lengket. Penelitian menunjukkan bahwa pembelajaran berbasis inquiry menghasilkan retensi dan transfer yang lebih baik daripada mengejar saja. Anak Anda juga akan mengembangkan kemampuan untuk belajar secara mandiri—keterampilan yang jauh lebih penting di universitas dan seterusnya daripada hafalan murni.',
        goal: 'Anak Anda mengembangkan pengetahuan faktual dan pemahaman mendalam. Mereka belajar mengajar diri sendiri, mengajukan pertanyaan yang produktif, dan menyelesaikan masalah yang tidak familiar—keterampilan yang IB ukur dan universitas hargai.',
        ibConnection: 'Pendekatan berbasis inquiry IB adalah salah satu kekuatan intinya. Ini bukan kemalasan; ini adalah sains pembelajaran.',
        whatToAsk: [
          'Apa yang sedang dipelajari anak saya untuk ditanyakan di kelasnya?',
          'Bisakah Anda menunjukkan contoh bagaimana inquiry menghasilkan pemahaman yang lebih dalam dalam salah satu tugas mereka yang baru-baru ini?',
          'Bagaimana anak saya membangun keterampilan belajar mandiri?',
        ],
      },
    },
    {
      id: 'criterion-grades-vs-scores',
      relevantAt: ['new', 'settled', 'pyp-myp'],
      ibComponent: 'MYP Assessment, Criterion-based grading',
      en: {
        concept: 'Criterion Grades (1–7) vs. Familiar Percentage/Raport System',
        concern: 'Your child\'s MYP report shows criterion grades: "Subject on track for a 6" or "Demonstrates a 5 in Criterion B." You\'re accustomed to a percentage (60%, 85%) or a raport score. You can\'t translate a "6" into something meaningful. You worry: is a 6 good? How does it compare? Where does your child stand in the class?',
        bridge: 'MYP criterion grading measures something different from percentage scores. A percentage score says: "You got 75% of the questions right." A criterion score says: "Your work demonstrates these specific qualities at this level." For example, a "6" in Criterion A (Knowing and Understanding) means the student demonstrates comprehensive knowledge and understanding. The boundaries are: 1–5 is developing, 6–7 is proficient, 7 is excellent. This is more informative than a percentage because it tells you exactly what your child can and cannot do. It also removes the ranking comparison that dominates Indonesian schools—which is intentional. IB is not hiding information; it\'s measuring what matters.',
        goal: 'You learn to read your child\'s strengths and weaknesses in specific terms (e.g., "needs to develop Criterion C—applying and analyzing—in Mathematics") instead of just a score. This helps you support them more effectively.',
        ibConnection: 'MYP uses criterion-based assessment across all subjects, aligned to IB Learner Profile traits.',
        whatToAsk: [
          'Can you explain what my child needs to do to reach a 7 in this criterion?',
          'Which criteria does my child find easiest? Which ones are they still developing?',
          'How often are these criterion grades reviewed and updated?',
        ],
      },
      id: {
        concept: 'Nilai Kriteria (1–7) vs. Sistem Persentase/Raport Familiar',
        concern: 'Laporan MYP anak Anda menunjukkan nilai kriteria: "Mata pelajaran on track untuk 6" atau "Menunjukkan 5 dalam Kriteria B." Anda terbiasa dengan persentase (60%, 85%) atau skor raport. Anda tidak bisa menerjemahkan "6" menjadi sesuatu yang bermakna. Anda khawatir: apakah 6 itu baik? Bagaimana perbandingannya? Di mana posisi anak Anda di kelas?',
        bridge: 'Penilaian kriteria MYP mengukur sesuatu yang berbeda dari skor persentase. Skor persentase mengatakan: "Anda mendapat 75% dari pertanyaan yang benar." Skor kriteria mengatakan: "Pekerjaan Anda menunjukkan kualitas-kualitas spesifik ini pada tingkat ini." Misalnya, "6" dalam Kriteria A (Knowing and Understanding) berarti siswa menunjukkan pengetahuan dan pemahaman yang komprehensif. Batasannya adalah: 1–5 sedang berkembang, 6–7 profisien, 7 sangat bagus. Ini lebih informatif daripada persentase karena memberitahu Anda dengan tepat apa yang bisa dan tidak bisa dilakukan anak Anda. Ini juga menghilangkan perbandingan peringkat yang mendominasi sekolah-sekolah Indonesia—yang disengaja. IB tidak menyembunyikan informasi; ia mengukur apa yang penting.',
        goal: 'Anda belajar membaca kekuatan dan kelemahan anak Anda dalam istilah spesifik (misalnya, "perlu mengembangkan Kriteria C—applying and analyzing—di Matematika") bukan hanya skor. Ini membantu Anda mendukung mereka lebih efektif.',
        ibConnection: 'MYP menggunakan penilaian berbasis kriteria di semua mata pelajaran, selaras dengan sifat-sifat IB Learner Profile.',
        whatToAsk: [
          'Bisakah Anda menjelaskan apa yang perlu dilakukan anak saya untuk mencapai 7 dalam kriteria ini?',
          'Kriteria mana yang paling mudah bagi anak saya? Mana yang masih mereka kembangkan?',
          'Seberapa sering nilai kriteria ini dikaji dan diperbarui?',
        ],
      },
    },
    {
      id: 'university-pathway-honest-truth',
      relevantAt: ['settled', 'myp-dp'],
      ibComponent: 'DP college preparation, University recognition',
      en: {
        concept: 'University Pathway — The Honest Truth',
        concern: 'Your dream is that your child attends a top Indonesian public university (UI, ITB, UGM) or an overseas university. You chose IB believing it would open those doors. But you are hearing (from relatives, from bimbel teachers, from other parents) that IB does not count toward the SNBT, the national university entrance exam. You\'re now wondering: did I make the right choice? Is my child locked out of PTN?',
        bridge: 'Here is the honest truth: IB does NOT prepare students specifically for the SNBT. The SNBT is a separate, timed, multiple-choice test in Bahasa Indonesia designed for the Indonesian national curriculum. IB graduates can apply to: (1) International programs at top PTNs (UI, ITB, UGM all have international tracks that accept IB directly); (2) Private universities (Binus, Prasetiya Mulya, Pelita Harapan, Universitas Bina Nusantara all recognize IB); (3) Overseas universities. If your family\'s explicit goal is to place your child in a mainstream PTN program (e.g., UI\'s Faculty of Medicine via the standard SNBT pathway), then IB is not the direct route—and it would be dishonest to pretend it is. But if your goal is a strong university education at a top institution, IB is absolutely a viable and often superior path. The question is not "IB vs. national curriculum" but rather "What university destination am I aiming for?"',
        goal: 'You have a clear-eyed conversation with your family about university goals. If the destination is SNBT-dependent, you plan ahead (perhaps dual preparation, or accepting the private university option). If the destination is an international program or overseas university, IB is exactly the right choice. Either way, you are making an informed decision.',
        ibConnection: 'DP prepares students for university-level work and international university admission. This is its design. It is not a failure of IB; it is a different aim than the Indonesian national curriculum.',
        whatToAsk: [
          'What are the specific university destinations and programs my child is targeting?',
          'Does the IB school offer guidance on PTN international program pathways?',
          'What do IB graduates from this school typically do after Year 13?',
          'Are there any dual-track or supplementary SNBT preparation options if that is still a goal?',
        ],
      },
      id: {
        concept: 'Jalur Universitas — Kebenaran yang Jujur',
        concern: 'Impian Anda adalah anak Anda menghadiri universitas negeri terkemuka Indonesia (UI, ITB, UGM) atau universitas luar negeri. Anda memilih IB percaya itu akan membuka pintu itu. Tetapi Anda mendengar (dari keluarga besar, dari guru bimbel, dari orang tua lain) bahwa IB tidak diperhitungkan untuk SNBT, ujian masuk universitas nasional. Anda sekarang bertanya-tanya: apakah saya membuat pilihan yang tepat? Apakah anak saya terkunci dari PTN?',
        bridge: 'Berikut adalah kebenaran yang jujur: IB TIDAK mempersiapkan siswa khusus untuk SNBT. SNBT adalah ujian terpisah, terbatas waktu, pilihan ganda dalam Bahasa Indonesia yang dirancang untuk kurikulum nasional Indonesia. Lulusan IB dapat melamar ke: (1) Program internasional di PTN terkemuka (UI, ITB, UGM semuanya memiliki jalur internasional yang menerima IB secara langsung); (2) Universitas swasta (Binus, Prasetiya Mulya, Pelita Harapan, Universitas Bina Nusantara semuanya mengakui IB); (3) Universitas luar negeri. Jika tujuan keluarga Anda yang eksplisit adalah menempatkan anak Anda di program PTN arus utama (misalnya, Fakultas Kedokteran UI melalui jalur SNBT standar), maka IB bukan rute langsung—dan akan tidak jujur untuk berpura-pura. Tetapi jika tujuan Anda adalah pendidikan universitas yang kuat di institusi terkemuka, IB adalah jalur yang benar-benar viable dan sering lebih baik. Pertanyaannya bukan "IB vs. kurikulum nasional" melainkan "Destinasi universitas apa yang saya targetkan?"',
        goal: 'Anda memiliki percakapan yang jelas-eyed dengan keluarga tentang tujuan universitas. Jika tujuannya tergantung SNBT, Anda merencanakan ke depan (mungkin persiapan ganda, atau menerima opsi universitas swasta). Jika tujuannya adalah program internasional atau universitas luar negeri, IB adalah pilihan yang tepat. Either way, Anda membuat keputusan yang informed.',
        ibConnection: 'DP mempersiapkan siswa untuk pekerjaan tingkat universitas dan penerimaan universitas internasional. Ini adalah desainnya. Ini bukan kegagalan IB; ini adalah tujuan yang berbeda dari kurikulum nasional Indonesia.',
        whatToAsk: [
          'Apa destinasi universitas spesifik dan program yang ditargetkan anak saya?',
          'Apakah sekolah IB menawarkan panduan tentang jalur program PTN internasional?',
          'Apa yang biasanya dilakukan lulusan IB dari sekolah ini setelah Tahun 13?',
          'Apakah ada opsi persiapan jalur ganda atau tambahan SNBT jika itu masih menjadi tujuan?',
        ],
      },
    },
    {
      id: 'no-ranking-peringkat',
      relevantAt: ['new', 'settled'],
      ibComponent: 'Assessment philosophy, Reporting',
      en: {
        concept: 'No Ranking (Peringkat) — What IB Measures Instead',
        concern: 'At your child\'s previous Indonesian school, the peringkat (ranking) was posted on the board and in the raport. Every student knew their place: 1st in class, 15th, 28th. It motivated some and discouraged others. Now, the IB school does not rank. You worry: is the school hiding something? How do I know if my child is doing well compared to their peers? Without ranking, doesn\'t the system lack accountability?',
        bridge: 'IB deliberately does not rank students. This is not because the school lacks accountability; it is because research shows that ranking creates anxiety and can harm motivation, especially in students who are not at the top. Instead, IB reports on what each student can do: criterion grades, teacher comments, and descriptive feedback. This is actually more information than a ranking provides. A ranking tells you "you are 5th"—nothing else. A criterion report tells you "you excel in analysis and communication but need to develop practical application skills." The second is more useful for growth. Ranking is also culturally tied to the Indonesian national curriculum, where it was meant to identify the strongest students for university entry. IB takes a different view: all students can grow, and comparison to a fixed peer ranking is not the best motivator.',
        goal: 'You shift your focus from ranking (a fixed snapshot) to growth (where is my child improving and what are they learning to do). You learn to read detailed feedback and use it to support your child.',
        ibConnection: 'IB\'s approach to assessment is learner-centered, not rank-centered.',
        whatToAsk: [
          'What does the school report instead of ranking? (Criterion grades, narrative, self-reflection?)',
          'How can I monitor my child\'s progress without a ranking comparison?',
          'What information is available if I want to understand how my child is doing relative to the curriculum standards?',
        ],
      },
      id: {
        concept: 'Tanpa Peringkat — Apa yang IB Ukur Sebaliknya',
        concern: 'Di sekolah Indonesia sebelumnya anak Anda, peringkat diposting di papan dan di raport. Setiap siswa tahu tempatnya: 1 di kelas, ke-15, ke-28. Itu memotivasi beberapa orang dan menggoyahkan yang lain. Sekarang, sekolah IB tidak memberi peringkat. Anda khawatir: apakah sekolah menyembunyikan sesuatu? Bagaimana saya tahu jika anak saya melakukan dengan baik dibandingkan teman sebayanya? Tanpa peringkat, bukankah sistem kekurangan akuntabilitas?',
        bridge: 'IB dengan sengaja tidak memberi peringkat kepada siswa. Ini bukan karena sekolah kekurangan akuntabilitas; ini karena penelitian menunjukkan bahwa peringkat menciptakan kecemasan dan dapat merusak motivasi, terutama pada siswa yang tidak berada di puncak. Sebaliknya, IB melaporkan apa yang dapat dilakukan setiap siswa: nilai kriteria, komentar guru, dan umpan balik deskriptif. Ini sebenarnya lebih banyak informasi daripada peringkat yang disediakan. Peringkat memberitahu Anda "Anda adalah ke-5"—tidak ada yang lain. Laporan kriteria memberitahu Anda "Anda unggul dalam analisis dan komunikasi tetapi perlu mengembangkan keterampilan penerapan praktis." Yang kedua lebih berguna untuk pertumbuhan. Peringkat juga terikat secara budaya pada kurikulum nasional Indonesia, di mana itu dimaksudkan untuk mengidentifikasi siswa terkuat untuk masuk universitas. IB mengambil pandangan yang berbeda: semua siswa dapat berkembang, dan perbandingan dengan peringkat teman sebaya yang tetap bukan motivator terbaik.',
        goal: 'Anda mengubah fokus dari peringkat (snapshot tetap) menjadi pertumbuhan (di mana anak saya meningkat dan apa yang mereka belajar lakukan). Anda belajar membaca umpan balik terperinci dan menggunakannya untuk mendukung anak Anda.',
        ibConnection: 'Pendekatan IB terhadap penilaian berpusat pada siswa, bukan peringkat.',
        whatToAsk: [
          'Apa yang dilaporkan sekolah sebagai pengganti peringkat? (Nilai kriteria, naratif, refleksi diri?)',
          'Bagaimana saya bisa memantau kemajuan anak saya tanpa perbandingan peringkat?',
          'Informasi apa yang tersedia jika saya ingin memahami bagaimana kinerja anak saya relatif terhadap standar kurikulum?',
        ],
      },
    },
    {
      id: 'prestasi-visibility',
      relevantAt: ['settled', 'pyp-myp', 'myp-dp'],
      ibComponent: 'CAS, Co-curricular, Extended Essay, Model UN',
      en: {
        concept: 'Prestasi Visibility — Translating IB Achievements into Recognized Success',
        concern: 'Indonesian parents value prestasi—visible, named, measurable achievement. In the national system, this is clear: a student wins a math competition, places 1st in a science olympiad, gets into UI. In IB, your child might be "developing international perspectives" or "leading a CAS project on water conservation." These are real achievements, but they are not easy to describe to your extended family or to a university admissions officer who is scanning a CV quickly. You worry that IB achievements will be invisible.',
        bridge: 'IB has concrete, prestigious prestasi that are recognizable: Model UN (where your child might chair a committee or win a Best Delegate award), Inter-school debates, science competitions, the Extended Essay (a 4,000-word independent research project—this is a very visible prestasi). CAS (Creativity, Activity, Service) is less obviously prestigious but is a differentiator in overseas university applications. The key is that IB schools need to highlight these achievements clearly, and you need to understand them as prestasi. When your child leads a CAS project or wins a debate, that is prestasi. When they complete an Extended Essay on, say, the role of traditional Indonesian medicines in rural healthcare, that is prestasi—with substance. Your job is to translate: "My child completed a research project on traditional medicine" is more recognizable prestasi language than "My child is developing international mindedness."',
        goal: 'You understand which IB activities generate recognizable prestasi (EE, Model UN, competitions, CAS with visible impact) and you help your child articulate their achievements in language that resonates both in Indonesia and globally.',
        ibConnection: 'IB DP has structured prestasi pathways: EE, Model UN, sports, clubs, service projects. These are real achievements.',
        whatToAsk: [
          'What competitions and external activities does the school participate in? (Model UN, Science Olympiad, Debate, etc.)',
          'Can you help me understand my child\'s Extended Essay as a prestasi—what research question is they pursuing?',
          'What CAS projects are happening, and how can my child make a visible impact?',
          'How are these achievements documented for university applications?',
        ],
      },
      id: {
        concept: 'Visibilitas Prestasi — Menerjemahkan Pencapaian IB menjadi Kesuksesan yang Diakui',
        concern: 'Orang tua Indonesia menghargai prestasi—pencapaian yang terlihat, bernama, terukur. Dalam sistem nasional, ini jelas: seorang siswa memenangkan kompetisi matematika, menempati urutan 1 dalam olimpiade sains, masuk UI. Di IB, anak Anda mungkin "mengembangkan perspektif internasional" atau "memimpin proyek CAS tentang konservasi air." Ini adalah pencapaian nyata, tetapi tidak mudah untuk dijelaskan kepada keluarga besar Anda atau kepada petugas penerimaan universitas yang memindai CV dengan cepat. Anda khawatir bahwa pencapaian IB akan tidak terlihat.',
        bridge: 'IB memiliki prestasi konkret dan bergengsi yang dapat dikenali: Model UN (di mana anak Anda mungkin memimpin komite atau memenangkan penghargaan Best Delegate), Debat Antar-sekolah, kompetisi sains, Extended Essay (proyek penelitian independen 4.000 kata—ini adalah prestasi yang sangat terlihat). CAS (Creativity, Activity, Service) kurang jelas bergengsi tetapi adalah diferensiator dalam aplikasi universitas luar negeri. Kunci adalah bahwa sekolah IB perlu menyoroti pencapaian ini dengan jelas, dan Anda perlu memahaminya sebagai prestasi. Ketika anak Anda memimpin proyek CAS atau memenangkan debat, itu adalah prestasi. Ketika mereka menyelesaikan Extended Essay tentang, katakanlah, peran obat tradisional Indonesia dalam perawatan kesehatan pedesaan, itu adalah prestasi—dengan substansi. Pekerjaan Anda adalah menerjemahkan: "Anak saya menyelesaikan proyek penelitian tentang obat tradisional" adalah bahasa prestasi yang lebih dapat dikenali daripada "Anak saya mengembangkan international mindedness."',
        goal: 'Anda memahami aktivitas IB mana yang menghasilkan prestasi yang dapat dikenali (EE, Model UN, kompetisi, CAS dengan dampak terlihat) dan Anda membantu anak Anda mengartikulasikan pencapaian mereka dalam bahasa yang bergema baik di Indonesia maupun secara global.',
        ibConnection: 'IB DP memiliki jalur prestasi terstruktur: EE, Model UN, olahraga, klub, proyek layanan. Ini adalah pencapaian nyata.',
        whatToAsk: [
          'Kompetisi dan aktivitas eksternal apa yang diikuti sekolah? (Model UN, Science Olympiad, Debat, dll)',
          'Bisakah Anda membantu saya memahami Extended Essay anak saya sebagai prestasi—pertanyaan penelitian apa yang mereka kejar?',
          'Proyek CAS apa yang sedang berlangsung, dan bagaimana anak saya bisa membuat dampak yang terlihat?',
          'Bagaimana pencapaian ini didokumentasikan untuk aplikasi universitas?',
        ],
      },
    },
  ],

  pypCards: [
    {
      id: 'pyp-exhibitions-vs-ujian',
      relevantAt: ['pyp-myp'],
      ibComponent: 'PYP Exhibition, Unit of Inquiry',
      en: {
        concept: 'PYP Exhibitions vs. Traditional Ujian',
        concern: 'Your child is in PYP and they talk about a "unit of inquiry" and an "exhibition" instead of taking a final exam. You are familiar with the ujian (exam)—you sit down, answer questions, get a score. You wonder: is an exhibition a real assessment? How do I know my child has actually learned?',
        bridge: 'A PYP exhibition is a culminating demonstration of learning where students investigate a real-world problem or question (the unit of inquiry) and then create something—a project, installation, performance, or product—that demonstrates their understanding. An exhibition is actually more rigorous than a traditional ujian because it requires synthesis, creativity, and application, not just recall. For example, a unit on water conservation might culminate in students designing a water-saving system for their school and presenting it to real stakeholders (school administration, the community). This is deeper learning than answering 20 questions on an exam. The exhibition is the assessment.',
        goal: 'You understand that PYP exhibitions measure real learning—the ability to apply knowledge to solve actual problems—rather than memorized facts.',
        ibConnection: 'PYP uses exhibitions and student reflection as the primary assessment method, aligned to the IB Learner Profile.',
        whatToAsk: [
          'What is the unit of inquiry for this exhibition, and what real-world question is it exploring?',
          'How will my child demonstrate their learning in the exhibition?',
          'Can I see the exhibition and understand my child\'s learning process?',
        ],
      },
      id: {
        concept: 'Pameran PYP vs. Ujian Tradisional',
        concern: 'Anak Anda berada di PYP dan mereka berbicara tentang "unit of inquiry" dan "exhibition" bukan mengambil ujian akhir. Anda terbiasa dengan ujian—Anda duduk, menjawab pertanyaan, mendapat skor. Anda bertanya-tanya: apakah exhibition adalah penilaian nyata? Bagaimana saya tahu anak saya benar-benar belajar?',
        bridge: 'Pameran PYP adalah demonstrasi pembelajaran puncak di mana siswa menyelidiki masalah atau pertanyaan dunia nyata (unit of inquiry) dan kemudian membuat sesuatu—proyek, instalasi, pertunjukan, atau produk—yang menunjukkan pemahaman mereka. Pameran sebenarnya lebih ketat daripada ujian tradisional karena memerlukan sintesis, kreativitas, dan aplikasi, bukan hanya recall. Misalnya, unit tentang konservasi air mungkin puncaknya adalah siswa merancang sistem hemat air untuk sekolah mereka dan mempresentasikannya kepada stakeholder nyata (administrasi sekolah, komunitas). Ini adalah pembelajaran yang lebih dalam daripada menjawab 20 pertanyaan di ujian. Pameran adalah penilaiannnya.',
        goal: 'Anda memahami bahwa pameran PYP mengukur pembelajaran nyata—kemampuan menerapkan pengetahuan untuk menyelesaikan masalah aktual—bukan fakta yang diingat.',
        ibConnection: 'PYP menggunakan pameran dan refleksi siswa sebagai metode penilaian utama, selaras dengan Profil Pelajar IB.',
        whatToAsk: [
          'Apa unit of inquiry untuk pameran ini, dan pertanyaan dunia nyata apa yang sedang dijelajahi?',
          'Bagaimana anak saya akan menunjukkan pembelajaran mereka dalam pameran?',
          'Bisakah saya melihat pameran dan memahami proses pembelajaran anak saya?',
        ],
      },
    },
    {
      id: 'pyp-language-continuity',
      relevantAt: ['pyp-myp'],
      ibComponent: 'Language policy, Mother tongue instruction',
      en: {
        concept: 'Language — IB and Bahasa Indonesia Continuity',
        concern: 'Your child came from a school where Bahasa Indonesia was the primary language of instruction. Now, at an IB school, most subjects are in English. You worry: will your child lose their Bahasa Indonesia? Will they struggle with Indonesian culture and identity? Will they be unable to read Indonesian literature or communicate with family members who don\'t speak English well?',
        bridge: 'Good IB schools, especially in Indonesia, protect Bahasa Indonesia. Many offer Bahasa Indonesia as a subject (often IB Language B or Indonesian literature). Some have PYP curriculum where inquiry units explicitly explore Indonesian culture, language, and identity. Your child will learn in English in most classes, but they maintain and develop Indonesian language through dedicated instruction, reading, and family use. Bilingualism is an asset, not a liability. Your child is building a language repertoire. The goal is not to replace Bahasa Indonesia but to add English alongside it. Make sure the school supports this continuity.',
        goal: 'Your child becomes bilingual—fluent in both English and Bahasa Indonesia—and maintains connection to Indonesian culture and identity.',
        ibConnection: 'IB recognizes language as central to identity and learning. The PYP and MYP offer Bahasa Indonesia as a language subject.',
        whatToAsk: [
          'Does the school offer Bahasa Indonesia as a subject (Language A or Language B)?',
          'How does the curriculum explore Indonesian culture, values, and literature?',
          'What are the language goals for your child by the end of PYP/MYP?',
        ],
      },
      id: {
        concept: 'Bahasa — Kontinuitas IB dan Bahasa Indonesia',
        concern: 'Anak Anda berasal dari sekolah di mana Bahasa Indonesia adalah bahasa utama instruksi. Sekarang, di sekolah IB, sebagian besar mata pelajaran dalam Bahasa Inggris. Anda khawatir: apakah anak saya akan kehilangan Bahasa Indonesia mereka? Apakah mereka akan berjuang dengan budaya dan identitas Indonesia? Apakah mereka tidak akan mampu membaca literatur Indonesia atau berkomunikasi dengan anggota keluarga yang tidak berbicara Bahasa Inggris dengan baik?',
        bridge: 'Sekolah IB yang baik, terutama di Indonesia, melindungi Bahasa Indonesia. Banyak yang menawarkan Bahasa Indonesia sebagai mata pelajaran (sering IB Language B atau sastra Indonesia). Beberapa memiliki kurikulum PYP di mana unit inquiry secara eksplisit mengeksplorasi budaya, bahasa, dan identitas Indonesia. Anak Anda akan belajar dalam Bahasa Inggris di sebagian besar kelas, tetapi mereka mempertahankan dan mengembangkan bahasa Indonesia melalui instruksi khusus, membaca, dan penggunaan keluarga. Bilingualisme adalah aset, bukan kewajiban. Anak Anda membangun repertoar bahasa. Tujuannya bukan untuk mengganti Bahasa Indonesia tetapi untuk menambahkan Bahasa Inggris di sampingnya. Pastikan sekolah mendukung kontinuitas ini.',
        goal: 'Anak Anda menjadi bilingual—lancar dalam Bahasa Inggris dan Bahasa Indonesia—dan mempertahankan koneksi dengan budaya dan identitas Indonesia.',
        ibConnection: 'IB mengakui bahasa sebagai pusat identitas dan pembelajaran. PYP dan MYP menawarkan Bahasa Indonesia sebagai mata pelajaran bahasa.',
        whatToAsk: [
          'Apakah sekolah menawarkan Bahasa Indonesia sebagai mata pelajaran (Language A atau Language B)?',
          'Bagaimana kurikulum mengeksplorasi budaya, nilai, dan sastra Indonesia?',
          'Apa tujuan bahasa untuk anak Anda pada akhir PYP/MYP?',
        ],
      },
    },
  ],

  gradeSystem: {
    myp: {
      en: {
        title: 'MYP Grade System (Years 7–11)',
        intro: 'MYP uses criterion-based assessment across all subjects. Instead of percentage scores, each subject is assessed against 4 criteria (Knowing & Understanding, Applying & Analyzing, Evaluating, Creating), and each criterion is graded 1–7. Your child\'s report will show a criterion grade (e.g., "5 in Criterion A") and a subject grade (1–7) that is derived from all criteria.',
        criteriaNote: 'Each criterion measures specific skills: Criterion A assesses factual knowledge and conceptual understanding; Criterion B assesses analysis and application; Criterion C assesses evaluation and critical thinking; Criterion D assesses creation and synthesis.',
        boundaryNote: 'The boundaries below show the cumulative point threshold for each grade. A grade of 1 typically means the student is new to the content; a grade of 7 means the student demonstrates excellent understanding and application.',
        descriptors: [
          {
            grade: 1,
            description: 'The student has an extremely limited understanding of the concepts and skills. They struggle to complete tasks and require significant support.',
          },
          {
            grade: 2,
            description: 'The student has a limited understanding. They can complete some tasks with support but have difficulty applying knowledge independently.',
          },
          {
            grade: 3,
            description: 'The student demonstrates adequate understanding of the main concepts and can complete most tasks with guidance. Understanding is sometimes inconsistent.',
          },
          {
            grade: 4,
            description: 'The student demonstrates good understanding of the concepts and can complete most tasks independently. They show some ability to apply knowledge to new situations.',
          },
          {
            grade: 5,
            description: 'The student demonstrates secure understanding and can consistently apply knowledge independently. They show good ability to analyze and evaluate.',
          },
          {
            grade: 6,
            description: 'The student demonstrates comprehensive understanding. They can consistently apply knowledge, analyze effectively, and begin to synthesize complex ideas.',
          },
          {
            grade: 7,
            description: 'The student demonstrates excellent, sophisticated understanding. They consistently synthesize knowledge, evaluate critically, and create original work.',
          },
        ],
        boundaries: [
          { grade: 1, min: 0, max: 5 },
          { grade: 2, min: 6, max: 9 },
          { grade: 3, min: 10, max: 14 },
          { grade: 4, min: 15, max: 18 },
          { grade: 5, min: 19, max: 23 },
          { grade: 6, min: 24, max: 27 },
          { grade: 7, min: 28, max: 32 },
        ],
        watchOut: [
          'A grade of 4–5 is considered "on track"—this is solid progress, not a cause for concern. Many students in MYP hover around 5–6.',
          'Criterion grades can vary by subject. Your child might score 6 in Language and 4 in Science—this is normal and indicates relative strengths.',
          'MYP does not rank students, so you cannot directly compare your child\'s grade to their peers. Focus instead on growth and individual targets set by teachers.',
          'If your child is struggling (consistently 2–3), the school will typically offer support and intervention plans. Ask about these proactively.',
        ],
      },
      id: {
        title: 'Sistem Nilai MYP (Tahun 7–11)',
        intro: 'MYP menggunakan penilaian berbasis kriteria di semua mata pelajaran. Bukan skor persentase, setiap mata pelajaran dinilai terhadap 4 kriteria (Knowing & Understanding, Applying & Analyzing, Evaluating, Creating), dan setiap kriteria diberi nilai 1–7. Laporan anak Anda akan menunjukkan nilai kriteria (misalnya, "5 dalam Kriteria A") dan nilai mata pelajaran (1–7) yang diturunkan dari semua kriteria.',
        criteriaNote: 'Setiap kriteria mengukur keterampilan spesifik: Kriteria A menilai pengetahuan faktual dan pemahaman konseptual; Kriteria B menilai analisis dan aplikasi; Kriteria C menilai evaluasi dan pemikiran kritis; Kriteria D menilai kreasi dan sintesis.',
        boundaryNote: 'Batas-batas di bawah menunjukkan ambang titik kumulatif untuk setiap nilai. Nilai 1 biasanya berarti siswa baru dengan konten; nilai 7 berarti siswa menunjukkan pemahaman dan aplikasi yang sangat baik.',
        descriptors: [
          {
            grade: 1,
            description: 'Siswa memiliki pemahaman yang sangat terbatas tentang konsep dan keterampilan. Mereka berjuang untuk menyelesaikan tugas dan memerlukan dukungan yang signifikan.',
          },
          {
            grade: 2,
            description: 'Siswa memiliki pemahaman yang terbatas. Mereka dapat menyelesaikan beberapa tugas dengan dukungan tetapi kesulitan menerapkan pengetahuan secara independen.',
          },
          {
            grade: 3,
            description: 'Siswa menunjukkan pemahaman yang cukup tentang konsep utama dan dapat menyelesaikan sebagian besar tugas dengan bimbingan. Pemahaman kadang-kadang tidak konsisten.',
          },
          {
            grade: 4,
            description: 'Siswa menunjukkan pemahaman yang baik tentang konsep dan dapat menyelesaikan sebagian besar tugas secara independen. Mereka menunjukkan kemampuan untuk menerapkan pengetahuan ke situasi baru.',
          },
          {
            grade: 5,
            description: 'Siswa menunjukkan pemahaman yang aman dan dapat secara konsisten menerapkan pengetahuan secara independen. Mereka menunjukkan kemampuan yang baik untuk menganalisis dan mengevaluasi.',
          },
          {
            grade: 6,
            description: 'Siswa menunjukkan pemahaman yang komprehensif. Mereka dapat secara konsisten menerapkan pengetahuan, menganalisis secara efektif, dan mulai mensintesis ide-ide yang kompleks.',
          },
          {
            grade: 7,
            description: 'Siswa menunjukkan pemahaman yang sangat baik dan canggih. Mereka secara konsisten mensintesis pengetahuan, mengevaluasi secara kritis, dan membuat karya asli.',
          },
        ],
        boundaries: [
          { grade: 1, min: 0, max: 5 },
          { grade: 2, min: 6, max: 9 },
          { grade: 3, min: 10, max: 14 },
          { grade: 4, min: 15, max: 18 },
          { grade: 5, min: 19, max: 23 },
          { grade: 6, min: 24, max: 27 },
          { grade: 7, min: 28, max: 32 },
        ],
        watchOut: [
          'Nilai 4–5 dianggap "on track"—ini adalah kemajuan yang solid, bukan alasan untuk khawatir. Banyak siswa di MYP melayang sekitar 5–6.',
          'Nilai kriteria dapat bervariasi menurut mata pelajaran. Anak Anda mungkin mendapat skor 6 dalam Bahasa dan 4 dalam Sains—ini normal dan menunjukkan kekuatan relatif.',
          'MYP tidak memberi peringkat kepada siswa, jadi Anda tidak dapat langsung membandingkan nilai anak Anda dengan teman sebaya. Fokus sebaliknya pada pertumbuhan dan target individual yang ditetapkan oleh guru.',
          'Jika anak Anda berjuang (secara konsisten 2–3), sekolah biasanya akan menawarkan dukungan dan rencana intervensi. Tanyakan tentang ini secara proaktif.',
        ],
      },
    },
    dp: {
      en: {
        title: 'DP Grade System (Years 12–13)',
        intro: 'DP uses a 7-point grading system per subject, with points contributing to a total Diploma score. The Extended Essay and Theory of Knowledge also contribute bonus points. A passing DP score is typically 24–28 points out of 45, but universities have different requirements. In Indonesia, top private universities (Binus, Prasetiya Mulya) typically accept scores of 28+. Overseas universities vary widely (some accept 24+, others 32+). Public universities (PTN) in Indonesia do not directly use DP scores; they use SNBT.',
        subjectStructure: 'Students take 6 subjects: 3 Higher Level (HL, 240 hours) and 3 Standard Level (SL, 150 hours). HL subjects are graded more rigorously than SL. Each subject is graded 1–7. So the maximum subject score is 42 points (6 subjects × 7 points).',
        coreBonus: {
          title: 'Core Components & Bonus Points',
          note: 'Extended Essay (EE: A–E grade) and Theory of Knowledge (ToK: A–D grade) together can earn 0–3 bonus points based on the matrix below. These bonus points are added to the subject total to reach the final Diploma score (maximum 45).',
          matrix: [
            { ee: 'A', tok: 'A', points: 3 },
            { ee: 'A', tok: 'B', points: 3 },
            { ee: 'A', tok: 'C', points: 2 },
            { ee: 'A', tok: 'D', points: 2 },
            { ee: 'B', tok: 'A', points: 3 },
            { ee: 'B', tok: 'B', points: 2 },
            { ee: 'B', tok: 'C', points: 1 },
            { ee: 'B', tok: 'D', points: 1 },
            { ee: 'C', tok: 'A', points: 2 },
            { ee: 'C', tok: 'B', points: 1 },
            { ee: 'C', tok: 'C', points: 0 },
            { ee: 'C', tok: 'D', points: 0 },
            { ee: 'D', tok: 'A', points: 2 },
            { ee: 'D', tok: 'B', points: 1 },
            { ee: 'D', tok: 'C', points: 0 },
            { ee: 'D', tok: 'D', points: -1 },
            { ee: 'E', tok: 'A', points: -1 },
            { ee: 'E', tok: 'B', points: -1 },
            { ee: 'E', tok: 'C', points: -1 },
            { ee: 'E', tok: 'D', points: -1 },
          ],
        },
        passingRules: [
          'A student must earn at least 24 points to receive the Diploma (in most cases).',
          'A student cannot score less than 3 in any HL subject or less than 2 in any SL subject (in most cases).',
          'If a student earns an E in EE or ToK, certain point penalties apply (as shown in the matrix).',
          'CAS (Creativity, Activity, Service) is a mandatory component but does not contribute points. A student must complete CAS to receive the Diploma.',
        ],
        watchOut: [
          'DP is rigorous. Most universities (especially overseas) expect a score of 28–35. A score of 24 is technically passing but may not be competitive for top institutions.',
          'HL subjects are graded more strictly than SL. A grade of 5 in HL is equivalent to roughly a grade of 6 in SL.',
          'The Extended Essay is a 4,000-word independent research project. It is time-consuming but is a significant prestasi. Encourage your child to choose a topic they are genuinely interested in.',
          'Theory of Knowledge can be challenging for first-language English speakers, let alone for students from non-English backgrounds. Support is often available through the school.',
          'CAS requires 150 hours of commitment. Encourage your child to choose activities they enjoy, not just activities that look good on a CV.',
        ],
        universityContext: 'In Indonesia: Private universities (Binus, Prasetiya Mulya, Universitas Bina Nusantara) typically require a DP score of 28–32 and recognize DP directly. International programs at top PTNs (UI, ITB, UGM) accept DP and may have specific score requirements (usually 24–30, depending on the program). Mainstream PTN programs (SNBT pathway) do not recognize DP; they require the SNBT national entrance exam. Overseas universities: Typically require 24–45 depending on the institution and program. Top universities (e.g., Oxford, Cambridge, MIT) may require 38+. This is a critical conversation for families to have early in Year 12.',
      },
      id: {
        title: 'Sistem Nilai DP (Tahun 12–13)',
        intro: 'DP menggunakan sistem penilaian 7 poin per mata pelajaran, dengan poin berkontribusi pada skor Diploma total. Extended Essay dan Theory of Knowledge juga memberikan poin bonus. Skor DP yang lulus biasanya 24–28 poin dari 45, tetapi universitas memiliki persyaratan yang berbeda. Di Indonesia, universitas swasta terkemuka (Binus, Prasetiya Mulya) biasanya menerima skor 28+. Universitas luar negeri sangat bervariasi (beberapa menerima 24+, lainnya 32+). Universitas negeri (PTN) di Indonesia tidak secara langsung menggunakan skor DP; mereka menggunakan SNBT.',
        subjectStructure: 'Siswa mengambil 6 mata pelajaran: 3 Higher Level (HL, 240 jam) dan 3 Standard Level (SL, 150 jam). Mata pelajaran HL dinilai lebih ketat daripada SL. Setiap mata pelajaran dinilai 1–7. Jadi skor mata pelajaran maksimum adalah 42 poin (6 mata pelajaran × 7 poin).',
        coreBonus: {
          title: 'Komponen Inti & Poin Bonus',
          note: 'Extended Essay (EE: grade A–E) dan Theory of Knowledge (ToK: grade A–D) bersama-sama dapat menghasilkan 0–3 poin bonus berdasarkan matriks di bawah. Poin bonus ini ditambahkan ke total mata pelajaran untuk mencapai skor Diploma akhir (maksimum 45).',
          matrix: [
            { ee: 'A', tok: 'A', points: 3 },
            { ee: 'A', tok: 'B', points: 3 },
            { ee: 'A', tok: 'C', points: 2 },
            { ee: 'A', tok: 'D', points: 2 },
            { ee: 'B', tok: 'A', points: 3 },
            { ee: 'B', tok: 'B', points: 2 },
            { ee: 'B', tok: 'C', points: 1 },
            { ee: 'B', tok: 'D', points: 1 },
            { ee: 'C', tok: 'A', points: 2 },
            { ee: 'C', tok: 'B', points: 1 },
            { ee: 'C', tok: 'C', points: 0 },
            { ee: 'C', tok: 'D', points: 0 },
            { ee: 'D', tok: 'A', points: 2 },
            { ee: 'D', tok: 'B', points: 1 },
            { ee: 'D', tok: 'C', points: 0 },
            { ee: 'D', tok: 'D', points: -1 },
            { ee: 'E', tok: 'A', points: -1 },
            { ee: 'E', tok: 'B', points: -1 },
            { ee: 'E', tok: 'C', points: -1 },
            { ee: 'E', tok: 'D', points: -1 },
          ],
        },
        passingRules: [
          'Siswa harus mendapatkan setidaknya 24 poin untuk menerima Diploma (dalam kebanyakan kasus).',
          'Siswa tidak dapat mendapat skor kurang dari 3 di mata pelajaran HL mana pun atau kurang dari 2 di mata pelajaran SL mana pun (dalam kebanyakan kasus).',
          'Jika siswa mendapatkan E dalam EE atau ToK, penalti poin tertentu berlaku (seperti yang ditunjukkan dalam matriks).',
          'CAS (Creativity, Activity, Service) adalah komponen wajib tetapi tidak berkontribusi poin. Siswa harus menyelesaikan CAS untuk menerima Diploma.',
        ],
        watchOut: [
          'DP ketat. Sebagian besar universitas (terutama luar negeri) mengharapkan skor 28–35. Skor 24 secara teknis lulus tetapi mungkin tidak kompetitif untuk institusi terkemuka.',
          'Mata pelajaran HL dinilai lebih ketat daripada SL. Nilai 5 dalam HL setara dengan kira-kira nilai 6 dalam SL.',
          'Extended Essay adalah proyek penelitian independen 4.000 kata. Memakan waktu tetapi merupakan prestasi yang signifikan. Dorong anak Anda memilih topik yang mereka benar-benar tertarik.',
          'Theory of Knowledge dapat menantang bahkan bagi pembicara bahasa Inggris asli, apalagi untuk siswa dari latar belakang non-Inggris. Dukungan sering tersedia melalui sekolah.',
          'CAS memerlukan 150 jam komitmen. Dorong anak Anda memilih aktivitas yang mereka nikmati, bukan hanya aktivitas yang terlihat bagus di CV.',
        ],
        universityContext: 'Di Indonesia: Universitas swasta (Binus, Prasetiya Mulya, Universitas Bina Nusantara) biasanya memerlukan skor DP 28–32 dan mengakui DP secara langsung. Program internasional di PTN terkemuka (UI, ITB, UGM) menerima DP dan mungkin memiliki persyaratan skor spesifik (biasanya 24–30, tergantung program). Program PTN mainstream (jalur SNBT) tidak mengakui DP; mereka memerlukan ujian masuk nasional SNBT. Universitas luar negeri: Biasanya memerlukan 24–45 tergantung institusi dan program. Universitas terkemuka (misalnya, Oxford, Cambridge, MIT) mungkin memerlukan 38+. Ini adalah percakapan kritis bagi keluarga untuk diadakan sejak dini di Tahun 12.',
      },
    },
  },

  scenarios: [
    {
      id: 'bimbel-decision',
      en: {
        title: 'The Bimbel Dilemma',
        termsInPlay: ['hafalan', 'prestasi', 'independent learning', 'workload'],
        situation: 'Your son is in Year 10 (MYP 4) and his math score is 5 in IB. A relative mentions that their child at the national school is already attending bimbel twice a week to prepare for SNBT (which is still three years away). Your son\'s best friend is also joining a bimbel center. Your son asks: "Should I go to bimbel too? Will I fall behind if I don\'t?" You are torn. You chose IB for deeper learning, but you also want your son to feel prepared and not at a disadvantage.',
        situationNote: 'This scenario reflects real anxiety in Indonesian families. Bimbel is normalized—it is not seen as supplementary; it is seen as essential. The pressure is intense.',
        withUnderstanding: 'You explain to your son: "IB is designed to teach you to learn independently. If you join bimbel, you will spend your evenings drilling SNBT problems—repetition and speed. That is a different goal from what your IB math teacher is helping you develop: deep problem-solving and reasoning. You cannot do both well. If your math score is 5, that is solid progress. Your energy is better spent on understanding the concepts deeply, on doing your homework, on asking your teacher for help when you do not understand. That is the IB way." You might also add: "If your goal later is to take the SNBT (perhaps as a backup plan for a PTN mainstream program), we can revisit this decision in Year 12. But right now, focus on your IB foundation. It will serve you better." You then follow up with the school: are they supporting your son\'s learning adequately? Is he receiving the help he needs?',
        withoutUnderstanding: 'You feel pressured by the relative\'s comment and the friend\'s decision. You say: "Okay, let\'s enroll you in bimbel. Everyone is doing it; you should too." Your son now spends 15 hours per week (classes + homework) on IB math and another 6 hours on bimbel SNBT-style drills. He is exhausted. His IB homework suffers because he is burned out. He is also not learning either curriculum deeply because he is splitting his energy. By Year 12, he is frustrated, his math score has stalled, and the bimbel has not prepared him for SNBT anyway (different skills, different exam). You have now spent a significant amount of money and your son is worse off.',
      },
      id: {
        title: 'Dilema Bimbel',
        termsInPlay: ['hafalan', 'prestasi', 'belajar mandiri', 'beban kerja'],
        situation: 'Anak laki-laki Anda berada di Tahun 10 (MYP 4) dan nilainya adalah 5 dalam IB math. Seorang kerabat menyebutkan bahwa anak mereka di sekolah nasional sudah menghadiri bimbel dua kali seminggu untuk mempersiapkan SNBT (yang masih tiga tahun lagi). Teman terbaik anak Anda juga bergabung dengan pusat bimbel. Anak Anda bertanya: "Haruskah saya pergi ke bimbel juga? Apakah saya akan tertinggal jika saya tidak?" Anda terbagi. Anda memilih IB untuk pembelajaran yang lebih dalam, tetapi Anda juga ingin anak Anda merasa siap dan tidak berada di posisi yang merugikan.',
        situationNote: 'Skenario ini mencerminkan kecemasan nyata dalam keluarga Indonesia. Bimbel dinormalisasi—tidak dilihat sebagai suplemen; dilihat sebagai penting. Tekanannya intens.',
        withUnderstanding: 'Anda menjelaskan kepada anak Anda: "IB dirancang untuk mengajarkan Anda belajar secara mandiri. Jika Anda bergabung dengan bimbel, Anda akan menghabiskan malam Anda mengejar soal-soal SNBT—pengulangan dan kecepatan. Itu adalah tujuan yang berbeda dari apa yang guru matematika IB Anda membantu Anda kembangkan: pemecahan masalah mendalam dan penalaran. Anda tidak bisa melakukan keduanya dengan baik. Jika nilai matematika Anda adalah 5, itu adalah kemajuan yang solid. Energi Anda lebih baik dihabiskan untuk memahami konsep secara mendalam, pada mengerjakan pekerjaan rumah Anda, pada meminta bantuan guru Anda ketika Anda tidak memahami. Itulah cara IB." Anda mungkin juga menambahkan: "Jika tujuan Anda nanti adalah mengambil SNBT (mungkin sebagai rencana cadangan untuk program PTN mainstream), kami dapat meninjau kembali keputusan ini di Tahun 12. Tetapi sekarang, fokus pada fondasi IB Anda. Itu akan melayani Anda lebih baik." Anda kemudian menindaklanjuti dengan sekolah: apakah mereka mendukung pembelajaran anak Anda secukupnya? Apakah dia menerima bantuan yang dia butuhkan?',
        withoutUnderstanding: 'Anda merasa tertekan oleh komentar kerabat dan keputusan teman. Anda mengatakan: "Baiklah, mari kita mendaftarkan Anda di bimbel. Semua orang melakukannya; Anda juga harus." Anak Anda sekarang menghabiskan 15 jam per minggu (kelas + pekerjaan rumah) pada matematika IB dan 6 jam lagi pada bimbel gaya SNBT. Dia kelelahan. Pekerjaan rumah IB-nya menderita karena dia lelah. Dia juga tidak belajar kurikulum apa pun secara mendalam karena dia membagi energinya. Pada Tahun 12, dia frustrasi, nilai matematikanya telah berhenti, dan bimbel belum mempersiapkannya untuk SNBT (keterampilan berbeda, ujian berbeda). Anda sekarang telah menghabiskan jumlah uang yang signifikan dan anak Anda lebih buruk.',
      },
    },
    {
      id: 'ui-dream',
      en: {
        title: 'The UI Dream',
        termsInPlay: ['university pathway', 'SNBT', 'PTN vs. PTS', 'international programs'],
        situation: 'Your daughter is in Year 11 (MYP 5) at an IB school. Her academic performance is strong (averaging 6 in most subjects). The family\'s aspiration is clear: she should study Medicine at Universitas Indonesia (UI), which is the most prestigious medical school in Indonesia. You are proud of her and you believe IB has prepared her well. But at a family gathering, an uncle who is a doctor at UI asks: "Has she taken the SNBT yet? What is her score?" You realize you do not have a clear answer. Your daughter says: "I am doing IB. I will apply to universities through IB." The uncle is skeptical. You start to worry: is IB a detour? Should she also be preparing for the SNBT as a backup?',
        situationNote: 'This is a version of the scenario from the opening hook. It is a real decision point for many families. UI Medicine is highly competitive and is a status symbol in Indonesia.',
        withUnderstanding: 'You have an honest conversation with your daughter and the school guidance counselor. The counselor explains: "UI has an international medical program that accepts IB directly. The SNBT pathway is for the mainstream Indonesian-medium program. Both are competitive. Which does your daughter want to pursue?" Your daughter says: "I would prefer the international program; I feel more confident in English than in purely academic Bahasa Indonesia for a medical course." You then research: What are the requirements for UI\'s international medical program? (Usually a DP score of 30+, strong science subjects, English proficiency.) You work with the school to ensure your daughter is on track. You also have the uncle explain his pathway to her—maybe he can mentor her. You do not panic. You have a clear picture of the goal and the pathway.',
        withoutUnderstanding: 'You feel pressure from the uncle\'s skepticism and from the cultural weight of the "UI dream." You push your daughter to also prepare for the SNBT alongside IB, even though she is not interested in the mainstream pathway. She spends her final IB years doing both: attending SNBT prep courses, doing practice tests in Indonesian, while also completing IB assignments and preparing for DP exams. She is overwhelmed. Her DP performance suffers. Her SNBT score, when she takes it, is mediocre (because she did not commit fully to the drilling culture that bimbel requires). She does not score high enough for mainstream UI Medicine, and she did not score high enough on her DP to apply confidently to the international program either. She ends up at a mid-tier private university. The family is disappointed. The tragedy is that if she had committed fully to one pathway (DP + international UI), she likely would have succeeded.',
      },
      id: {
        title: 'Mimpi UI',
        termsInPlay: ['jalur universitas', 'SNBT', 'PTN vs. PTS', 'program internasional'],
        situation: 'Anak perempuan Anda berada di Tahun 11 (MYP 5) di sekolah IB. Kinerja akademiknya kuat (rata-rata 6 di sebagian besar mata pelajaran). Aspirasi keluarga jelas: dia harus belajar Kedokteran di Universitas Indonesia (UI), yang merupakan sekolah kedokteran paling bergengsi di Indonesia. Anda bangga pada dirinya dan Anda percaya IB telah mempersiapkannya dengan baik. Tetapi pada gathering keluarga, seorang paman yang adalah dokter di UI bertanya: "Apakah dia sudah mengambil SNBT? Berapa nilainya?" Anda menyadari Anda tidak memiliki jawaban yang jelas. Anak perempuan Anda mengatakan: "Saya melakukan IB. Saya akan melamar ke universitas melalui IB." Paman skeptis. Anda mulai khawatir: apakah IB adalah jalan memutar? Haruskah dia juga mempersiapkan SNBT sebagai cadangan?',
        situationNote: 'Ini adalah versi dari skenario dari hook pembukaan. Ini adalah titik keputusan nyata bagi banyak keluarga. UI Medicine sangat kompetitif dan merupakan simbol status di Indonesia.',
        withUnderstanding: 'Anda memiliki percakapan yang jujur dengan anak perempuan Anda dan konselor bimbingan sekolah. Konselor menjelaskan: "UI memiliki program medis internasional yang menerima IB secara langsung. Jalur SNBT adalah untuk program mainstream berbahasa Indonesia. Keduanya kompetitif. Mana yang ingin dikejar anak perempuan Anda?" Anak perempuan Anda mengatakan: "Saya lebih suka program internasional; saya merasa lebih percaya diri dalam Bahasa Inggris daripada dalam Bahasa Indonesia murni akademis untuk kursus medis." Anda kemudian meneliti: Apa persyaratan untuk program medis internasional UI? (Biasanya skor DP 30+, mata pelajaran sains yang kuat, kecakapan Bahasa Inggris.) Anda bekerja dengan sekolah untuk memastikan anak perempuan Anda on track. Anda juga meminta paman menjelaskan jalannya kepada dirinya—mungkin dia bisa mentor dia. Anda tidak panik. Anda memiliki gambaran yang jelas tentang tujuan dan jalurnya.',
        withoutUnderstanding: 'Anda merasa tertekan oleh skeptisisme paman dan oleh berat budaya "mimpi UI." Anda mendorong anak perempuan Anda untuk juga mempersiapkan SNBT di samping IB, meskipun dia tidak tertarik pada jalur mainstream. Dia menghabiskan tahun IB terakhirnya melakukan keduanya: menghadiri kursus persiapan SNBT, melakukan tes praktik dalam Bahasa Indonesia, sambil juga menyelesaikan tugas IB dan mempersiapkan ujian DP. Dia kewalahan. Kinerja DP-nya menderita. Skor SNBT-nya, ketika dia mengambilnya, biasa saja (karena dia tidak berkomitmen sepenuhnya pada budaya drilling yang bimbel perlukan). Dia tidak mendapat skor cukup tinggi untuk UI Medicine mainstream, dan dia juga tidak mendapat skor cukup tinggi pada DP-nya untuk melamar dengan percaya diri ke program internasional. Dia akhirnya di universitas swasta tingkat menengah. Keluarga kecewa. Tragedinya adalah bahwa jika dia telah berkomitmen sepenuhnya pada satu jalur (DP + UI internasional), dia mungkin akan berhasil.',
      },
    },
  ],

  glossary: [
    {
      term: 'IB (International Baccalaureate)',
      en: {
        full: 'International Baccalaureate',
        definition: 'A rigorous international education program offered in over 150 countries. In Indonesia, it is available at private and some international schools. IB programs emphasize inquiry-based learning, critical thinking, and preparing students for university-level work. There are three programs: PYP (ages 3–12), MYP (ages 11–16), and DP (ages 16–19).',
      },
      id: {
        full: 'International Baccalaureate',
        definition: 'Program pendidikan internasional yang ketat ditawarkan di lebih dari 150 negara. Di Indonesia, tersedia di sekolah swasta dan beberapa sekolah internasional. Program IB menekankan pembelajaran berbasis inquiry, pemikiran kritis, dan mempersiapkan siswa untuk pekerjaan tingkat universitas. Ada tiga program: PYP (usia 3–12), MYP (usia 11–16), dan DP (usia 16–19).',
      },
    },
    {
      term: 'MYP (Middle Years Programme)',
      en: {
        full: 'Middle Years Programme',
        definition: 'The IB program for students ages 11–16 (typically Years 7–11). MYP emphasizes personal development, critical thinking, and interdisciplinary learning. Assessment is criterion-based (1–7 grades), not percentage-based. There is no formal MYP examination; assessment is continuous throughout the program.',
      },
      id: {
        full: 'Middle Years Programme',
        definition: 'Program IB untuk siswa berusia 11–16 tahun (biasanya Tahun 7–11). MYP menekankan pengembangan pribadi, pemikiran kritis, dan pembelajaran interdisipliner. Penilaian berbasis kriteria (nilai 1–7), bukan berbasis persentase. Tidak ada ujian MYP formal; penilaian terus-menerus sepanjang program.',
      },
    },
    {
      term: 'DP (Diploma Programme)',
      en: {
        full: 'Diploma Programme',
        definition: 'The IB program for students ages 16–19 (typically Years 12–13). DP is a rigorous two-year program leading to the IB Diploma. Students take 6 subjects (3 Higher Level, 3 Standard Level) and complete three core components: Extended Essay, Theory of Knowledge, and CAS. The DP Diploma is recognized by universities worldwide.',
      },
      id: {
        full: 'Diploma Programme',
        definition: 'Program IB untuk siswa berusia 16–19 tahun (biasanya Tahun 12–13). DP adalah program dua tahun yang ketat mengarah ke Diploma IB. Siswa mengambil 6 mata pelajaran (3 Higher Level, 3 Standard Level) dan menyelesaikan tiga komponen inti: Extended Essay, Theory of Knowledge, dan CAS. Diploma DP diakui oleh universitas di seluruh dunia.',
      },
    },
    {
      term: 'PYP (Primary Years Programme)',
      en: {
        full: 'Primary Years Programme',
        definition: 'The IB program for students ages 3–12. PYP emphasizes the development of the whole child through inquiry-based, play-based learning. Units of Inquiry are the core of the curriculum, culminating in exhibitions. PYP does not have formal exams; assessment is ongoing and based on observation, portfolio, and student reflection.',
      },
      id: {
        full: 'Primary Years Programme',
        definition: 'Program IB untuk siswa berusia 3–12 tahun. PYP menekankan pengembangan anak secara keseluruhan melalui pembelajaran berbasis inquiry dan berbasis permainan. Units of Inquiry adalah inti kurikulum, mencapai puncaknya dalam pameran. PYP tidak memiliki ujian formal; penilaian berkelanjutan dan didasarkan pada observasi, portofolio, dan refleksi siswa.',
      },
    },
    {
      term: 'SNBT (Seleksi Nasional Berdasarkan Tes)',
      en: {
        full: 'Seleksi Nasional Berdasarkan Tes (National Selection Based on Test)',
        definition: 'The national university entrance examination for Indonesian public universities (PTN, Perguruan Tinggi Negeri). It replaces the former UTBK-SBMPTN system and Ujian Nasional (UN). The SNBT is a timed, multiple-choice test in Bahasa Indonesia and English, covering academic and reasoning skills. It is required for admission to most mainstream PTN programs.',
      },
      id: {
        full: 'Seleksi Nasional Berdasarkan Tes',
        definition: 'Ujian masuk universitas nasional untuk universitas negeri Indonesia (PTN, Perguruan Tinggi Negeri). Menggantikan sistem UTBK-SBMPTN sebelumnya dan Ujian Nasional (UN). SNBT adalah ujian pilihan ganda terbatas waktu dalam Bahasa Indonesia dan Bahasa Inggris, mencakup keterampilan akademis dan penalaran. Diperlukan untuk penerimaan ke sebagian besar program PTN mainstream.',
      },
    },
    {
      term: 'Bimbel (Bimbingan Belajar)',
      en: {
        full: 'Bimbingan Belajar (Private tutoring center)',
        definition: 'Private tutoring centers common in Indonesia, similar to Japanese juku. Bimbel offers focused, exam-oriented instruction, usually drill-based and competitive. Major chains include Ganesha Operation, Primagama, and Neutron. Attendance is widespread, especially for high school students preparing for SNBT or national exams. Bimbel emphasizes rote memorization (hafalan) and speed.',
      },
      id: {
        full: 'Bimbingan Belajar',
        definition: 'Pusat bimbingan belajar swasta yang umum di Indonesia, mirip dengan juku Jepang. Bimbel menawarkan instruksi yang fokus dan berorientasi pada ujian, biasanya berbasis drill dan kompetitif. Rantai utama termasuk Ganesha Operation, Primagama, dan Neutron. Kehadiran luas, terutama untuk siswa sekolah menengah atas yang mempersiapkan SNBT atau ujian nasional. Bimbel menekankan hafalan dan kecepatan.',
      },
    },
    {
      term: 'Raport',
      en: {
        full: 'Raport (School report card)',
        definition: 'The official school report card in the Indonesian education system. It documents a student\'s academic performance, attendance, behavior, and skills. Raports typically show percentage scores or letter grades and may include a student\'s ranking (peringkat) in the class. Raports are issued at the end of each semester.',
      },
      id: {
        full: 'Raport',
        definition: 'Kartu laporan sekolah resmi dalam sistem pendidikan Indonesia. Mendokumentasikan kinerja akademik siswa, kehadiran, perilaku, dan keterampilan. Raport biasanya menunjukkan skor persentase atau nilai huruf dan mungkin menyertakan peringkat siswa di kelas. Raport dikeluarkan di akhir setiap semester.',
      },
    },
    {
      term: 'PTN (Perguruan Tinggi Negeri)',
      en: {
        full: 'Perguruan Tinggi Negeri (Public/State University)',
        definition: 'Government-funded universities in Indonesia. The most prestigious PTNs are Universitas Indonesia (UI), Institut Teknologi Bandung (ITB), and Universitas Gadjah Mada (UGM). Admission to mainstream PTN programs requires passing the SNBT. However, many PTNs now have international programs that accept IB directly.',
      },
      id: {
        full: 'Perguruan Tinggi Negeri',
        definition: 'Universitas yang didukung pemerintah di Indonesia. PTN paling bergengsi adalah Universitas Indonesia (UI), Institut Teknologi Bandung (ITB), dan Universitas Gadjah Mada (UGM). Penerimaan ke program PTN mainstream memerlukan lulus SNBT. Namun, banyak PTN sekarang memiliki program internasional yang menerima IB secara langsung.',
      },
    },
    {
      term: 'Criterion (Kriteria Penilaian)',
      en: {
        full: 'Criterion / Criteria (Assessment criteria)',
        definition: 'The specific dimensions along which student work is measured in IB. MYP typically uses 4 criteria per subject (Knowing & Understanding, Applying & Analyzing, Evaluating, Creating). Each criterion is graded separately on a 1–7 scale. Criterion-based assessment is more detailed and diagnostic than percentage scores.',
      },
      id: {
        full: 'Kriteria Penilaian',
        definition: 'Dimensi spesifik yang mendasarinya pekerjaan siswa diukur dalam IB. MYP biasanya menggunakan 4 kriteria per mata pelajaran (Knowing & Understanding, Applying & Analyzing, Evaluating, Creating). Setiap kriteria dinilai secara terpisah pada skala 1–7. Penilaian berbasis kriteria lebih terperinci dan diagnostik daripada skor persentase.',
      },
    },
    {
      term: 'Extended Essay (Esai Panjang)',
      en: {
        full: 'Extended Essay',
        definition: 'A 4,000-word independent research project completed by DP students on a topic of their choice, within their subject areas. The Extended Essay is graded A–E and contributes to the DP final score. It is a significant prestasi and a key differentiator for university applications. It teaches research skills and intellectual independence.',
      },
      id: {
        full: 'Esai Panjang (Extended Essay)',
        definition: 'Proyek penelitian independen 4.000 kata yang diselesaikan oleh siswa DP pada topik pilihan mereka, dalam bidang mata pelajaran mereka. Extended Essay dinilai A–E dan berkontribusi pada skor DP akhir. Ini adalah prestasi yang signifikan dan diferensiator kunci untuk aplikasi universitas. Ini mengajarkan keterampilan penelitian dan kemandirian intelektual.',
      },
    },
  ],

  universityWalkthrough: {
    en: {
      intro: 'Indonesian IB graduates face a clearly branching university landscape. The most important decision is whether the target is a public university (PTN) or a private university (PTS) — because these require different preparation. Being clear about this in Year 10 saves significant stress in Year 13.',
      paths: [
        {
          id: 'ptn-mainstream',
          label: 'Indonesian public university (PTN) — mainstream SNBT entry',
          flag: '🇮🇩',
          warning: 'IB diploma does NOT replace SNBT. PTN mainstream entry requires a qualifying SNBT score.',
          steps: [
            { n: 1, title: 'Year 10–11: Understand the reality', detail: 'SNBT (Seleksi Nasional Berdasarkan Tes) is required for mainstream PTN entry — UI, ITB, UGM, UNPAD, and others. An IB diploma does not substitute for SNBT. If PTN mainstream is the goal, SNBT preparation must begin in Year 11 at the latest, running alongside DP.' },
            { n: 2, title: 'Year 11: UTBK-SNBT subject alignment', detail: 'SNBT tests Mathematics, Bahasa Indonesia, English, and reasoning. IB students often have strong English and reasoning skills from DP. Mathematics preparation may require separate attention if the student\'s IB Mathematics is Applications and Interpretation rather than Analysis and Approaches.' },
            { n: 3, title: 'Year 12: Register and prepare intensively', detail: 'SNBT registration opens in February of Year 12. The exam is held in April–May. This is the final year of DP — coordinate SNBT preparation carefully around DP assessments and May IB examinations.' },
            { n: 4, title: 'Year 12 April–May: Sit SNBT', detail: 'SNBT is held in two waves (gelombang) in April and May. IB May examinations are also in May — this is the hardest scheduling conflict. Work with your counsellor to map the calendar.' },
            { n: 5, title: 'Year 12 June: PTN results and IB results', detail: 'SNBT results are announced in June. IB results follow in July. If PTN offer is secured, confirm enrolment. If not, private university or overseas applications are the backup.' },
          ],
          honest: 'This path requires running SNBT and DP simultaneously in Year 12. It is demanding. Discuss honestly with your counsellor whether this is the right path — and if so, begin SNBT preparation no later than Year 11.',
        },
        {
          id: 'ptn-international',
          label: 'PTN international program — IB-friendly entry',
          flag: '🇮🇩',
          warning: null,
          steps: [
            { n: 1, title: 'Year 10–11: Research programs', detail: 'Several PTNs offer international or English-medium programs that accept IB directly. Key programs: UI International Class (Kelas Internasional), ITB International Program, UGM International Program. These have separate admissions processes that do not require SNBT.' },
            { n: 2, title: 'Year 11: Score requirements', detail: 'PTN international programs typically require IB total scores of 28–36. Specific requirements vary by faculty. Engineering faculties (ITB) typically require stronger Mathematics HL scores. Check each program\'s current requirements with your counsellor.' },
            { n: 3, title: 'Year 12: Application process', detail: 'Application windows for PTN international programs vary — typically March–June of Year 12. Most require predicted grades, transcripts, and a personal statement or motivation letter. Some require an interview.' },
            { n: 4, title: 'Year 12: Submit with predicted grades', detail: 'Applications submitted with IB predicted grades (from your school\'s IB coordinator). Final offers confirmed after July IB results. Ensure predicted grades are realistic.' },
            { n: 5, title: 'July Year 12/Year 13: Results confirmation', detail: 'Final IB results confirm admission. Note that some PTN international programs use the Indonesian academic year (August start) while others align with IB results in July.' },
          ],
          honest: 'PTN international programs offer a meaningful pathway for IB graduates to attend top Indonesian universities without SNBT. Competition is real but manageable with solid IB scores.',
        },
        {
          id: 'pts',
          label: 'Indonesian private university (PTS) — IB-direct entry',
          flag: '🇮🇩',
          warning: null,
          steps: [
            { n: 1, title: 'Year 10–11: Identify target PTS', detail: 'Strong PTS options for IB graduates: BINUS University (well-recognised for technology/business), Universitas Pelita Harapan (UPH — international focus), Prasetiya Mulya (business/management), Universitas Ciputra, Swiss German University. All accept IB directly.' },
            { n: 2, title: 'Year 11–12: Check specific requirements', detail: 'PTS admissions processes vary. Most accept IB predicted grades for conditional entry. Some have rolling admissions. Requirements are typically: IB predicted grades, transcripts, personal statement, and sometimes a motivation interview.' },
            { n: 3, title: 'Year 12: Apply early', detail: 'Many PTS have early application windows starting in Year 12 (Indonesian academic year: July–June). Applying early often secures scholarships or early-bird discounts. IB students are competitive applicants at most PTS.' },
            { n: 4, title: 'Year 13 July: Confirm with final results', detail: 'Final IB results confirm enrolment. Conditional offers become unconditional once results meet the stated requirements.' },
          ],
          honest: 'PTS are increasingly well-regarded in Indonesia, especially for business, technology, and management fields. For IB graduates, PTS often represents the most direct and least stressful university pathway within Indonesia.',
        },
        {
          id: 'overseas',
          label: 'Overseas university — Singapore, Australia, UK, others',
          flag: '🌏',
          warning: null,
          steps: [
            { n: 1, title: 'Year 10: Research destinations', detail: 'Singapore (NUS, NTU, SMU) is the closest prestigious option — typically requires 36–40 IB points, very competitive. Australian universities (Go8) typically 33–38. UK Russell Group 36–40. Netherlands and Germany have accessible English-medium programs at lower score thresholds.' },
            { n: 2, title: 'Year 11: EE and CAS planning', detail: 'Extended Essay and CAS are valued in overseas applications. Begin EE topic research in Year 11. Singapore universities particularly value the IB Diploma\'s research component.' },
            { n: 3, title: 'Year 12: Applications open', detail: 'Singapore, Australian, and UK applications open in August–October of Year 12. Each system has different requirements — personal statements (UK), essays (US), direct academic applications (Singapore/Australia). Work with your counsellor on timing.' },
            { n: 4, title: 'Year 13 July: Results and final offers', detail: 'IB results in July confirm all overseas conditional offers. Singapore and Australia typically respond quickly. UK UCAS decisions usually finalised by July.' },
          ],
          honest: 'For Indonesian IB graduates, overseas universities — especially in Singapore and Australia — are often the most natural pathway. These systems are designed to receive IB credentials and assess them accurately. Indonesian employers increasingly value overseas degrees.',
        },
      ],
    },
    id: {
      intro: 'Lulusan IB dari Indonesia menghadapi lanskap perguruan tinggi yang benar-benar bercabang. Keputusan terpenting adalah apakah tujuannya PTN atau PTS — karena keduanya membutuhkan persiapan berbeda. Kejelasan ini di kelas 10 akan menghemat banyak stres di kelas 12.',
      paths: [
        {
          id: 'ptn-mainstream',
          label: 'PTN jalur utama — SNBT',
          flag: '🇮🇩',
          warning: 'Ijazah IB tidak menggantikan SNBT. Masuk PTN jalur reguler membutuhkan nilai SNBT yang memenuhi syarat.',
          steps: [
            { n: 1, title: 'Kelas 10–11: Pahami realitanya', detail: 'SNBT diperlukan untuk masuk PTN jalur reguler — UI, ITB, UGM, UNPAD, dan lainnya. Ijazah IB tidak dapat menggantikan SNBT. Jika PTN reguler adalah tujuan, persiapan SNBT harus dimulai paling lambat kelas 11, berjalan paralel dengan DP.' },
            { n: 2, title: 'Kelas 11: Keselarasan materi SNBT', detail: 'SNBT menguji Matematika, Bahasa Indonesia, Bahasa Inggris, dan Penalaran. Siswa IB biasanya kuat di Bahasa Inggris dan penalaran. Persiapan Matematika mungkin memerlukan perhatian tambahan tergantung pilihan Matematika IB.' },
            { n: 3, title: 'Kelas 12: Daftar dan persiapan intensif', detail: 'Pendaftaran SNBT dibuka Februari kelas 12. Ujian dilaksanakan April–Mei. Koordinasikan persiapan SNBT dengan ujian IB yang juga di bulan Mei.' },
            { n: 4, title: 'Kelas 12 April–Mei: Ikuti SNBT', detail: 'SNBT dilaksanakan dua gelombang di April dan Mei. Ujian IB juga di bulan Mei — ini konflik jadwal tersibuk. Buat peta kalender bersama konselor.' },
            { n: 5, title: 'Kelas 12 Juni: Pengumuman SNBT dan IB', detail: 'Hasil SNBT diumumkan Juni. Hasil IB menyusul Juli. Jika diterima PTN, konfirmasi pendaftaran. Jika tidak, PTS atau luar negeri menjadi alternatif.' },
          ],
          honest: 'Jalur ini menuntut SNBT dan DP berjalan bersamaan di kelas 12. Diskusikan dengan konselor apakah jalur ini realistis — dan mulai persiapan SNBT paling lambat kelas 11.',
        },
        {
          id: 'ptn-international',
          label: 'Program internasional PTN — jalur ramah IB',
          flag: '🇮🇩',
          warning: null,
          steps: [
            { n: 1, title: 'Kelas 10–11: Cari program', detail: 'Beberapa PTN memiliki program internasional yang menerima IB langsung: Kelas Internasional UI, Program Internasional ITB, Program Internasional UGM. Proses seleksi ini tidak memerlukan SNBT.' },
            { n: 2, title: 'Kelas 11: Persyaratan skor', detail: 'Program internasional PTN biasanya mensyaratkan total IB 28–36. Persyaratan bervariasi per fakultas. Periksa persyaratan terkini bersama konselor Anda.' },
            { n: 3, title: 'Kelas 12: Proses pendaftaran', detail: 'Jendela pendaftaran program internasional PTN bervariasi, biasanya Maret–Juni kelas 12. Sebagian besar memerlukan prediksi nilai IB, transkrip, dan surat motivasi.' },
            { n: 4, title: 'Kelas 12: Daftar dengan nilai prediksi', detail: 'Pendaftaran dengan nilai prediksi IB dari koordinator IB sekolah. Penawaran final dikonfirmasi setelah hasil IB Juli.' },
            { n: 5, title: 'Juli: Konfirmasi hasil', detail: 'Hasil IB final mengkonfirmasi penerimaan. Beberapa program internasional PTN menggunakan tahun akademik Indonesia (mulai Agustus).' },
          ],
          honest: 'Program internasional PTN menawarkan jalur nyata bagi lulusan IB ke universitas negeri terkemuka tanpa SNBT. Persaingan ada, namun dapat dicapai dengan nilai IB yang solid.',
        },
        {
          id: 'pts',
          label: 'PTS Indonesia — masuk langsung dengan IB',
          flag: '🇮🇩',
          warning: null,
          steps: [
            { n: 1, title: 'Kelas 10–11: Kenali pilihan PTS', detail: 'PTS terkemuka untuk lulusan IB: BINUS University, Universitas Pelita Harapan (UPH), Prasetiya Mulya, Universitas Ciputra, Swiss German University. Semua menerima IB secara langsung.' },
            { n: 2, title: 'Kelas 11–12: Cek persyaratan', detail: 'Proses penerimaan PTS bervariasi. Sebagian besar menerima nilai prediksi IB untuk penawaran bersyarat. Banyak yang memiliki penerimaan bergulir.' },
            { n: 3, title: 'Kelas 12: Daftar lebih awal', detail: 'Banyak PTS membuka pendaftaran awal di kelas 12. Mendaftar lebih awal sering mengamankan beasiswa. Siswa IB adalah pelamar kompetitif di sebagian besar PTS.' },
            { n: 4, title: 'Juli kelas 13: Konfirmasi dengan hasil akhir', detail: 'Hasil IB akhir mengkonfirmasi pendaftaran. Penawaran bersyarat menjadi tidak bersyarat setelah hasil memenuhi ketentuan.' },
          ],
          honest: 'PTS semakin dipandang tinggi di Indonesia, terutama untuk bisnis, teknologi, dan manajemen. Bagi lulusan IB, PTS sering menjadi jalur perguruan tinggi paling langsung dan tidak menegangkan di dalam negeri.',
        },
        {
          id: 'overseas',
          label: 'Universitas luar negeri — Singapura, Australia, Inggris',
          flag: '🌏',
          warning: null,
          steps: [
            { n: 1, title: 'Kelas 10: Riset tujuan', detail: 'Singapura (NUS, NTU, SMU) adalah pilihan bergengsi terdekat — biasanya butuh 36–40 poin IB. Universitas Australia (Go8) biasanya 33–38. UK Russell Group 36–40.' },
            { n: 2, title: 'Kelas 11: EE dan perencanaan CAS', detail: 'Essay Panjang dan CAS dihargai dalam pendaftaran luar negeri. Mulai riset topik EE di kelas 11.' },
            { n: 3, title: 'Kelas 12: Pendaftaran dibuka', detail: 'Pendaftaran Singapura, Australia, dan UK dibuka Agustus–Oktober kelas 12. Setiap sistem memiliki persyaratan berbeda. Diskusikan jadwal dengan konselor.' },
            { n: 4, title: 'Juli kelas 13: Hasil dan penawaran final', detail: 'Hasil IB Juli mengkonfirmasi semua penawaran bersyarat. Singapura dan Australia biasanya merespons cepat.' },
          ],
          honest: 'Bagi lulusan IB Indonesia, universitas luar negeri — terutama di Singapura dan Australia — sering menjadi jalur paling alami. Sistem ini dirancang untuk menerima kredensi IB.',
        },
      ],
    },
  },

  pypBridge: {
    en: {
      title: 'The PYP → MYP Transition: What Indonesian Families Should Know',
      intro: 'Indonesian families at IB schools often feel the PYP to MYP transition in two ways: the report cards become more structured (criterion scores replace purely narrative comments), and the question of national university pathways starts to feel more urgent. At age 12–13, bimbel attendance among peers in the national system begins to accelerate. This guide explains what changes in the MYP transition — and why the two paths serve genuinely different goals.',
      changes: [
        { aspect: 'Report format', pyp: 'Narrative comments and portfolio evidence. No percentage or class rank. Progress described in learning behaviour and inquiry skills.', myp: 'Criterion scores A–D (0–8 each). Total maps to grade 1–7. More structured than PYP, but not percentage-based like SNBP (Seleksi Nasional Berdasarkan Prestasi) preparation peers are entering.' },
        { aspect: 'Assessment style', pyp: 'Ongoing observation, student portfolios, integrated assessment. Assessment is developmental and holistic.', myp: 'Formal summative assessments in eight subject groups, assessed against explicit criteria. External IB moderation at Year 10 (MYP 5). Transparent criterion feedback, not competitive ranking.' },
        { aspect: 'University pathway pressure', pyp: 'IB pathway is discussed as one among several options. No early pressure toward Indonesian university entrance exams.', myp: 'Family must understand: IB track leads to DP (international recognition), NOT to Indonesian SNBP/SBMPTN pathway. By Year 7, this choice is implicit. Extended family may ask, "Will this hurt my child\'s chances in Indonesian universities?" The answer is: "We are choosing a different path that universities like ITB, Bandung Institute of Technology recognise, but DP is a different qualification than Indonesian board exams."' },
        { aspect: 'Academic intensity and focus', pyp: 'Learning across subject areas is integrated. No subject narrowing or early specialisation.', myp: 'Still eight integrated subject groups. Peers in national schools are beginning to narrow focus toward STEM or humanities. MYP maintains breadth. By DP, students will specialise.' }
      ],
      firstYearNote: 'Year 7 is a transition year. The report will be shorter and more criterion-focused than Indonesian national school reports. The absence of percentage marks or class ranking may feel strange to extended family who ask, "Berapa nilainya?" (What is the score?). The answer is: "He/she is developing strong learning skills in criterion A and C, and growing in criterion B." This is more informative than a single percentage. Indonesian families who wonder if MYP will disadvantage their child in Indonesian university applications should have an honest conversation with the school about the IB pathway and what it means for future university options — not just in Indonesia, but globally.',
      whatToAsk: [
        'What does my child need to do to move from their current criterion score to the next level in [subject]?',
        'If my family ultimately decides the DP pathway is not the right fit, what are the re-entry options to Indonesian national curriculum?',
        'What universities recognize the IB DP, both within Indonesia and internationally? How should we think about this decision now, at Year 7?'
      ],
    },
    id: {
      title: 'Transisi PYP → MYP: Apa yang Harus Diketahui Keluarga Indonesia',
      intro: 'Keluarga Indonesia di sekolah IB sering merasakan transisi PYP ke MYP dalam dua cara: kartu rapor menjadi lebih terstruktur (skor kriteria menggantikan komentar murni naratif), dan pertanyaan tentang jalur universitas nasional mulai terasa lebih mendesak. Pada usia 12–13 tahun, kehadiran bimbel di kalangan teman sebaya dalam sistem nasional mulai meningkat. Panduan ini menjelaskan apa yang berubah dalam transisi MYP — dan mengapa kedua jalur tersebut melayani tujuan yang benar-benar berbeda.',
      changes: [
        { aspect: 'Format laporan', pyp: 'Komentar naratif dan bukti portofolio. Tanpa persentase atau peringkat kelas. Kemajuan dijelaskan dalam perilaku belajar dan keterampilan penyelidikan.', myp: 'Skor kriteria A–D (0–8 masing-masing). Total memetakan ke nilai 1–7. Lebih terstruktur daripada PYP, tetapi bukan berbasis persentase seperti persiapan SNBP yang teman sebaya masuki.' },
        { aspect: 'Gaya penilaian', pyp: 'Pengamatan berkelanjutan, portofolio siswa, penilaian terintegrasi. Penilaian bersifat perkembangan dan holistik.', myp: 'Penilaian ringkasan formal dalam delapan kelompok mata pelajaran, dinilai terhadap kriteria eksplisit. Moderasi IB eksternal pada Tahun 10 (MYP 5). Umpan balik kriteria transparan, bukan peringkat kompetitif.' },
        { aspect: 'Tekanan jalur universitas', pyp: 'Jalur IB dibahas sebagai salah satu dari beberapa opsi. Tidak ada tekanan awal menuju ujian masuk universitas Indonesia.', myp: 'Keluarga harus memahami: jalur IB mengarah ke DP (pengakuan internasional), BUKAN jalur SNBP/SBMPTN Indonesia. Pada Tahun 7, pilihan ini tersirat. Keluarga besar mungkin bertanya, "Akankah ini merugikan kesempatan anak saya di universitas Indonesia?" Jawabannya ialah: "Kami memilih jalur berbeda yang diakui oleh universitas seperti ITB, tetapi DP adalah kualifikasi berbeda daripada ujian akhir Indonesia."' },
        { aspect: 'Intensitas akademik dan fokus', pyp: 'Pembelajaran di berbagai mata pelajaran terintegrasi. Tidak ada penyempitan mata pelajaran atau spesialisasi awal.', myp: 'Masih delapan kelompok mata pelajaran terintegrasi. Teman sebaya di sekolah nasional mulai mempersempit fokus menuju STEM atau kemanusiaan. MYP mempertahankan keluasan. Pada DP, siswa akan berspesialisasi.' }
      ],
      firstYearNote: 'Tahun 7 adalah tahun transisi. Laporan akan lebih pendek dan lebih berfokus pada kriteria daripada laporan sekolah nasional Indonesia. Tidak adanya nilai persentase atau peringkat kelas mungkin terasa aneh bagi keluarga besar yang bertanya, "Berapa nilainya?" Jawabannya ialah: "Dia mengembangkan keterampilan belajar yang kuat dalam kriteria A dan C, dan berkembang dalam kriteria B." Ini lebih informatif daripada persentase tunggal. Keluarga Indonesia yang bertanya-tanya apakah MYP akan merugikan anak mereka dalam aplikasi universitas Indonesia harus memiliki percakapan jujur dengan sekolah tentang jalur IB dan artinya untuk opsi universitas masa depan — tidak hanya di Indonesia, tetapi secara global.',
      whatToAsk: [
        'Apa yang harus dilakukan anak saya untuk pindah dari skor kriteria saat ini ke level berikutnya di [mata pelajaran]?',
        'Jika keluarga saya pada akhirnya memutuskan jalur DP bukan yang tepat, apa saja opsi masuk kembali ke kurikulum nasional Indonesia?',
        'Universitas apa yang mengakui DP IB, baik di dalam Indonesia maupun secara internasional? Bagaimana cara kami memikirkan keputusan ini sekarang, di Tahun 7?'
      ],
    }
  },
};
