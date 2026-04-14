/**
 * Vietnam Parent IB/AP Module — English + Vietnamese (Tiếng Việt)
 * Helps Vietnamese and expat families in Vietnam navigate IB and AP international schools.
 *
 * Cultural anchors: Kỳ thi tốt nghiệp THPT (national graduation exam), thang điểm 10
 * (10-point scale), học sinh giỏi (excellent student designation), cuộc thi học sinh giỏi
 * (gifted student competitions), Đại học Quốc gia (Vietnam National University),
 * con đường du học (overseas study path), sổ liên lạc (school–family communication book),
 * nhóm phụ huynh Zalo (parent Zalo group), ôn thi (exam preparation culture),
 * học thêm (extra tutoring), trường quốc tế (international school).
 *
 * DP focus + AP note: Most major international schools in HCMC and Hanoi offer IB
 * (ISHCMC, BIS, BVIS, SIS, Vinschool International). Some US-oriented schools offer
 * AP (ACIS, AIS Saigon). The module covers both where the grading differs.
 */

export const vietnamIbParent = {
  id: 'parent-vietnam-ib-001',
  slug: 'vietnam-ib',
  country: 'vietnam',
  program: 'IB',
  languages: ['en', 'vi'],

  journeyStages: [
    {
      id: 'new',
      en: {
        label: 'New to IB',
        description: 'Typically your first year. Your child has moved from the Vietnamese national curriculum — điểm 10, học sinh giỏi rankings, and end-of-semester exams — into an IB or AP international school. The shift to criterion-based grades, no class ranking, and inquiry-based learning often arrives without enough explanation at orientation. This guide starts with what confuses Vietnamese families most.',
        highlight: 'Start with Core Concepts — especially how criterion-based grades work and why there is no percentage score.',
      },
      vi: {
        label: 'Mới làm quen với IB',
        description: 'Thông thường là năm đầu tiên. Con bạn vừa chuyển từ chương trình giáo dục quốc gia Việt Nam — với thang điểm 10, danh hiệu học sinh giỏi và thi học kỳ — sang trường quốc tế IB hoặc AP. Sự thay đổi sang đánh giá theo tiêu chí, không có xếp hạng lớp và học tập dựa trên khám phá thường đến mà không được giải thích đầy đủ trong buổi định hướng. Hướng dẫn này bắt đầu bằng những điều khiến các gia đình Việt Nam bối rối nhất.',
        highlight: 'Bắt đầu với Các khái niệm cốt lõi — đặc biệt là cách thức hoạt động của đánh giá theo tiêu chí và lý do không có điểm phần trăm.',
      },
    },
    {
      id: 'settled',
      en: {
        label: 'Settling in',
        description: 'Year 2 or beyond. You have received several reports and are beginning to read the language. But questions from grandparents, comparisons with peers at Vietnamese schools earning học sinh giỏi, and the university pathway question may still be creating pressure. The Grade System calculators are the most useful tools at this stage.',
        highlight: 'Jump to Grade System — use the calculators to read your child\'s reports accurately and stop converting to điểm 10.',
      },
      vi: {
        label: 'Đang ổn định',
        description: 'Năm thứ hai trở đi. Bạn đã nhận được một số bảng điểm và bắt đầu đọc hiểu ngôn ngữ của chúng. Nhưng câu hỏi từ ông bà, so sánh với bạn bè ở trường Việt Nam đạt danh hiệu học sinh giỏi, và câu hỏi về con đường đại học vẫn có thể tạo áp lực. Các máy tính điểm trong phần Hệ thống điểm là công cụ hữu ích nhất ở giai đoạn này.',
        highlight: 'Chuyển thẳng đến Hệ thống điểm — dùng máy tính để đọc bảng điểm của con chính xác và ngừng việc quy đổi sang thang điểm 10.',
      },
    },
    {
      id: 'pyp-myp',
      en: {
        label: 'PYP → MYP',
        description: 'Your child is around 10–12 years old, moving from Primary Years to Middle Years — or has just transferred into MYP from a Vietnamese national school. Formal criterion-based grades appear for the first time and the contrast with Vietnamese school reporting can feel most disorienting right now. Questions about whether the school teaches Vietnamese language and history are also sharpest at this stage.',
        highlight: 'See PYP section first, then Grade System to understand the new grading pattern.',
      },
      vi: {
        label: 'PYP → MYP',
        description: 'Con bạn khoảng 10–12 tuổi, chuyển từ Chương trình Tiểu học sang Chương trình Trung học Cơ sở — hoặc vừa chuyển vào MYP từ trường quốc gia Việt Nam. Các điểm tiêu chí chính thức xuất hiện lần đầu tiên và sự tương phản với bảng điểm của trường Việt Nam có thể khiến bạn bối rối nhất lúc này. Câu hỏi về việc trường có dạy tiếng Việt và lịch sử Việt Nam hay không cũng nảy sinh nhiều nhất ở giai đoạn này.',
        highlight: 'Xem phần PYP trước, sau đó xem Hệ thống điểm để hiểu mô hình đánh giá mới.',
      },
    },
    {
      id: 'myp-dp',
      en: {
        label: 'MYP → DP / AP',
        description: 'Your child is typically in Year 10 or 11. Subject selection, HL/SL choices (IB) or AP subject selection, and the university pathway decision are urgent now. The question of whether IB or AP results are recognised by Vietnamese universities — and what the path to study in the US, UK, or Australia looks like — needs a direct conversation with the school counsellor before Year 12.',
        highlight: 'Focus on Grade System (DP calculator or AP scale) and Card 5 on university pathways. Do not defer the overseas university conversation.',
      },
      vi: {
        label: 'MYP → DP / AP',
        description: 'Con bạn thường ở năm học 10 hoặc 11. Lựa chọn môn học, chọn HL/SL (IB) hoặc lựa chọn môn AP, và quyết định hướng đại học đều cần được giải quyết ngay bây giờ. Câu hỏi về việc kết quả IB hoặc AP có được các trường đại học Việt Nam công nhận không — và con đường du học ở Mỹ, Anh, hoặc Úc trông như thế nào — cần được thảo luận trực tiếp với cố vấn học đường trước năm 12.',
        highlight: 'Tập trung vào Hệ thống điểm (máy tính DP hoặc thang điểm AP) và Thẻ 5 về hướng đại học. Đừng trì hoãn cuộc trò chuyện về du học.',
      },
    },
  ],

  meta: {
    en: {
      title: 'Understanding Your Child\'s International School',
      subtitle: 'A guide for Vietnamese and expat families navigating IB and AP education in Vietnam',
      intro: 'IB and AP schools look very different from Vietnamese national curriculum schools — not because they are less rigorous, but because they are built around different goals. If you have already encountered something that confused or unsettled you — a report with no điểm 10, a lesson without a textbook, an assessment called an "Internal Assessment" or "Extended Essay," a subject called "Theory of Knowledge" — this guide is for that moment. It covers five core concepts, interactive grade calculators for MYP and DP, a PYP section, two scenarios showing what happens with and without this context, and a Vietnamese–English glossary.',
      reassurance: 'One thing that does not change: your child is still learning Mathematics, Sciences, and Languages to a high standard. IB HL Mathematics and Sciences are among the most rigorous curricula at secondary level anywhere in the world. AP Calculus BC, AP Chemistry, and AP Physics C are similarly demanding. The differences are in how learning is structured, how assessment works, and how progress is reported — not in whether rigour exists. On Vietnamese language: IB schools offer Vietnamese Language and Literature (Vietnamese A) for native Vietnamese speakers, taught as a serious literature course with classical and modern Vietnamese texts, critical essay writing, and oral commentary. Your child\'s Vietnamese does not have to stop at the school gate.',
      visionNote: 'Vietnamese families consistently choose international schools for one reason: the overseas university pathway. IB and AP are both specifically designed for that pathway. In 2025, over 2,100 US colleges and universities award AP credit — including a record 1,900 that grant credit for a score of 3. The most selective schools, including Harvard, MIT, and Stanford, typically do not grant course credit for AP scores; they use AP for advanced placement decisions only. The IB Diploma is recognised by every leading university in the US, UK, Australia, and Singapore. Vietnamese-background students at schools like ISHCMC and BIS Vietnam regularly gain admission to universities in the top 50 worldwide. The question is not whether IB or AP leads to good universities — it does. The question is whether your child is being supported to use it well.',
      whatToAskNote: 'IB and AP teachers expect direct, evidence-based questions from parents. At your next parent–teacher meeting, it is entirely appropriate to ask: "My child scored 4 in MYP Sciences — what specific skills would move them to a 5 or 6?" or "Which AP subjects give the best credit recognition at US universities?" Bring your child\'s most recent report. Teachers will have the assessment criteria in front of them and can answer specifically. You do not need to decode the report yourself first.',
    },
    vi: {
      title: 'Hiểu về Trường Quốc tế của Con Bạn',
      subtitle: 'Hướng dẫn cho các gia đình Việt Nam và người nước ngoài đang theo học IB và AP tại Việt Nam',
      intro: 'Các trường IB và AP trông rất khác so với trường theo chương trình quốc gia Việt Nam — không phải vì chúng ít nghiêm túc hơn, mà vì chúng được xây dựng với những mục tiêu khác. Nếu bạn đã gặp điều gì đó khiến bạn bối rối hoặc lo lắng — một bảng điểm không có thang điểm 10, một buổi học không có sách giáo khoa, một bài kiểm tra gọi là "Đánh giá Nội bộ" hay "Tiểu luận Mở rộng", một môn học gọi là "Lý thuyết Tri thức" — hướng dẫn này dành cho những khoảnh khắc đó. Nó bao gồm năm khái niệm cốt lõi, máy tính điểm tương tác cho MYP và DP, phần PYP, hai tình huống thực tế, và bảng thuật ngữ Việt–Anh.',
      reassurance: 'Một điều không thay đổi: con bạn vẫn đang học Toán, Khoa học và Ngoại ngữ ở mức độ cao. Toán HL và Khoa học HL của IB thuộc những chương trình học nghiêm túc nhất ở bậc THPT trên thế giới. AP Giải tích BC, AP Hóa học, và AP Vật lý C cũng đòi hỏi mức độ tương tự. Sự khác biệt nằm ở cách cấu trúc việc học, cách thức đánh giá hoạt động và cách báo cáo tiến bộ — không phải ở việc có hay không có sự nghiêm túc. Về tiếng Việt: các trường IB cung cấp môn Ngôn ngữ và Văn học Việt Nam (Tiếng Việt A) cho học sinh nói tiếng Việt bản ngữ, được dạy như một khóa học văn học nghiêm túc với các tác phẩm văn học cổ điển và hiện đại, viết bài luận phân tích, và bình luận nói. Tiếng Việt của con bạn không phải dừng lại ở cổng trường.',
      visionNote: 'Các gia đình Việt Nam luôn chọn trường quốc tế vì một lý do: con đường vào các trường đại học nước ngoài. IB và AP đều được thiết kế đặc biệt cho con đường đó. Năm 2025, hơn 2.100 trường cao đẳng và đại học Mỹ cấp tín chỉ AP — bao gồm 1.900 trường cấp tín chỉ cho điểm 3. Các trường chọn lọc nhất, bao gồm Harvard, MIT và Stanford, thường không cấp tín chỉ khóa học cho điểm AP; họ sử dụng AP để quyết định vị trí nậng cao mà không phải tín chỉ. Bằng Tú tài IB được công nhận bởi mọi trường đại học hàng đầu ở Mỹ, Anh, Úc và Singapore. Học sinh gốc Việt tại các trường như ISHCMC và BIS Vietnam thường xuyên được nhận vào các trường đại học trong top 50 thế giới. Câu hỏi không phải là IB hay AP có dẫn đến các trường đại học tốt không — chắc chắn là có. Câu hỏi là liệu con bạn có đang được hỗ trợ để tận dụng tốt hay không.',
      whatToAskNote: 'Giáo viên IB và AP mong đợi những câu hỏi trực tiếp, dựa trên bằng chứng từ phụ huynh. Trong buổi họp phụ huynh tiếp theo, hoàn toàn phù hợp khi hỏi: "Con tôi được 4 điểm trong MYP Khoa học — kỹ năng cụ thể nào sẽ giúp con đạt 5 hoặc 6?" hoặc "Môn AP nào được công nhận tín chỉ tốt nhất tại các trường đại học Mỹ?" Hãy mang theo bảng điểm gần nhất của con. Giáo viên sẽ có tiêu chí đánh giá trước mặt và có thể trả lời cụ thể. Bạn không cần phải tự giải mã bảng điểm trước.',
    },
  },

  openingHook: {
    en: {
      situation: [
        'Your child\'s Year 8 MYP report arrives in your email. Instead of điểm tổng kết and a class ranking, there are four criterion scores for each subject — each out of 8. The teacher comments are long. There is no number like 8.5 or 9.2. There is no học sinh giỏi or học sinh tiên tiến designation. There is no position in class.',
        'You screenshot it and send it to the family Zalo group. Your mother-in-law asks: "Con được bao nhiêu điểm?" Your sister, whose daughter just received học sinh giỏi at the local school with a 9.1 average, asks how your child\'s school works. Your husband\'s colleague says his son at the Vietnamese public school scored 9.5 in Maths and is the top of his class. You type back that you\'re not sure how to compare.',
        'That night you try to convert the score. Your child got a 5 out of 7 in Sciences — Criterion B: Inquiring and Designing. You think: 5 ÷ 7 = 71%. On the Vietnamese thang điểm 10, that would be about 7.1 — "Khá" (Good), but not "Giỏi" (Excellent). You start wondering whether you made the right decision transferring your child to an international school.',
      ],
      question: 'Is a 5 in MYP Sciences the same as 7.1 on the Vietnamese 10-point scale?',
      directAnswer: 'No — the conversion does not work. A 5 in IB MYP Sciences is "Substantial achievement" — a strong result against internationally published, externally verified criteria. The division 5 ÷ 7 is mathematically valid but educationally meaningless here. MYP grades are not percentage-derived; they are criterion-matched. Your child may be performing considerably better than the converted number suggests. The sections below explain how to read IB grades accurately — and why the điểm 10 frame, however familiar, does not apply.',
    },
    vi: {
      situation: [
        'Bảng điểm học kỳ lớp 8 MYP của con bạn đến qua email. Thay vì điểm tổng kết và xếp hạng lớp, có bốn điểm tiêu chí cho mỗi môn học — mỗi điểm trên 8. Nhận xét của giáo viên rất dài. Không có số nào như 8.5 hay 9.2. Không có danh hiệu học sinh giỏi hay học sinh tiên tiến. Không có thứ hạng trong lớp.',
        'Bạn chụp màn hình và gửi vào nhóm Zalo gia đình. Mẹ chồng hỏi: "Con được bao nhiêu điểm?" Em gái bạn, có con gái vừa được học sinh giỏi ở trường địa phương với trung bình 9.1, hỏi trường của con bạn hoạt động như thế nào. Đồng nghiệp của chồng bạn nói con trai anh ấy ở trường công lập Việt Nam được 9.5 môn Toán và đứng đầu lớp. Bạn nhắn lại rằng bạn không chắc cách so sánh.',
        'Tối hôm đó bạn thử quy đổi điểm. Con bạn được 5/7 môn Khoa học — Tiêu chí B: Tìm hiểu và Thiết kế. Bạn nghĩ: 5 ÷ 7 = 71%. Trên thang điểm 10 của Việt Nam, đó sẽ là khoảng 7.1 — "Khá", nhưng không phải "Giỏi". Bạn bắt đầu tự hỏi liệu mình có đưa ra quyết định đúng khi chuyển con sang trường quốc tế không.',
      ],
      question: 'Điểm 5 môn Khoa học MYP có giống điểm 7.1 theo thang điểm 10 của Việt Nam không?',
      directAnswer: 'Không — việc quy đổi này không có giá trị. Điểm 5 trong MYP Khoa học của IB là "Thành tích đáng kể" — một kết quả tốt theo tiêu chí được công bố quốc tế và kiểm tra bên ngoài. Phép chia 5 ÷ 7 đúng về mặt toán học nhưng vô nghĩa về mặt giáo dục ở đây. Điểm MYP không được tính theo phần trăm; chúng được đối chiếu với tiêu chí. Con bạn có thể đang thực hiện tốt hơn đáng kể so với con số được quy đổi. Các phần dưới đây giải thích cách đọc điểm IB chính xác — và tại sao thang điểm 10, dù quen thuộc đến đâu, không áp dụng ở đây.',
    },
  },

  cards: [
    {
      id: 'card-001',
      ibComponent: 'MYP/DP — Criterion-Based Assessment',
      en: {
        concept: 'There is no điểm 10 — and that is intentional',
        concern: 'Vietnamese national schools give clear điểm số (point scores) from 1–10 and rank students as học sinh giỏi, học sinh tiên tiến, or học sinh trung bình. Without a score out of 10, I cannot tell if my child is doing well or falling behind. The IB report feels impossible to read.',
        bridge: 'IB grades are not hidden percentage scores. They are judgements against published criteria — four to six criteria per subject, each scored 1–8 in MYP or 1–7 in DP. A 5 in MYP does not mean 71%. It means the student demonstrated "substantial achievement" of that criterion. The criteria describe what understanding looks like at each level. No conversion to điểm 10 is valid.',
        goal: 'To tell you precisely what skills your child has and has not yet demonstrated — so the teacher can tell you exactly what to work on, not just whether the number was high.',
        ibConnection: 'IB assessment is criterion-referenced, not norm-referenced. In a norm-referenced system (like class rankings), your child\'s grade depends partly on how other students performed. In criterion-referenced assessment, your child\'s grade depends only on what your child can do — regardless of the class. This is why there is no class rank in IB reports.',
        whatToAsk: ['Ask the teacher: "Can you show me the criterion rubric for Sciences? Where specifically did my child score on Criterion C, and what would a 6 look like in practice?"'],
      },
      vi: {
        concept: 'Không có thang điểm 10 — và điều đó là có chủ đích',
        concern: 'Trường quốc gia Việt Nam cho điểm rõ ràng từ 1–10 và xếp loại học sinh là giỏi, khá, hay trung bình. Không có điểm trên 10, tôi không thể biết con mình đang học tốt hay đang tụt hậu. Bảng điểm IB có cảm giác không thể đọc được.',
        bridge: 'Điểm IB không phải là điểm phần trăm ẩn. Chúng là các đánh giá theo tiêu chí đã công bố — bốn đến sáu tiêu chí mỗi môn, mỗi tiêu chí được chấm 1–8 trong MYP hoặc 1–7 trong DP. Điểm 5 trong MYP không có nghĩa là 71%. Nó có nghĩa là học sinh đã chứng minh "thành tích đáng kể" của tiêu chí đó. Các tiêu chí mô tả mức độ hiểu biết trông như thế nào ở từng cấp độ. Không có việc quy đổi sang thang điểm 10 nào là hợp lệ.',
        goal: 'Cho bạn biết chính xác những kỹ năng nào con bạn đã thể hiện và chưa thể hiện — để giáo viên có thể cho bạn biết chính xác cần luyện tập gì, không chỉ là con số có cao hay không.',
        ibConnection: 'Đánh giá IB là đánh giá theo tiêu chí, không phải theo chuẩn mực. Trong hệ thống theo chuẩn mực (như xếp hạng lớp), điểm của con bạn phụ thuộc một phần vào cách các học sinh khác thực hiện. Trong đánh giá theo tiêu chí, điểm của con bạn chỉ phụ thuộc vào những gì con bạn có thể làm — bất kể lớp học. Đó là lý do tại sao không có xếp hạng lớp trong bảng điểm IB.',
        whatToAsk: ['Hỏi giáo viên: "Bạn có thể cho tôi xem bảng tiêu chí đánh giá môn Khoa học không? Con tôi cụ thể đạt bao nhiêu điểm ở Tiêu chí C, và điểm 6 trong thực tế trông như thế nào?"'],
      },
    },
    {
      id: 'card-002',
      ibComponent: 'DP Internal Assessment / AP Free-Response',
      en: {
        concept: 'The biggest grade is not a test — it is a project',
        concern: 'In Vietnam, the most important assessments are thi học kỳ (semester exams) and ultimately the kỳ thi tốt nghiệp THPT. High-stakes knowledge is tested under exam conditions. My child\'s school keeps talking about something called an Internal Assessment or a research paper. I am worried this is not rigorous enough and will not prepare my child for the university exam culture.',
        bridge: 'IB Internal Assessments (IAs) are externally moderated by IB examiners worldwide — they are not just marked by the class teacher. In DP Sciences, the IA is a full research investigation: hypothesis, experimental design, data collection, statistical analysis, evaluation, and conclusion. In DP Mathematics, it is a mathematical exploration. In AP, the free-response section and project-based assessments are scored by College Board-trained examiners. These are not less rigorous than exams — they assess a different, complementary kind of rigour.',
        goal: 'To build the research, analytical, and writing skills that Vietnamese national schools do not assess — skills that US, UK, and Australian universities explicitly look for at application and in the first year.',
        ibConnection: 'IA grades count for 20–25% of the final DP subject grade. This means your child cannot ignore them or "save everything for the exam." Universities like NUS, Melbourne, and top US schools read the predicted grades that include IA performance. Strong IA work directly influences predicted grades and therefore university offers.',
        whatToAsk: ['Ask the teacher: "When is my child\'s IA deadline for each subject? Has the topic been confirmed? Is there a moderated sample from a previous year I can show my child as a reference point?"'],
      },
      vi: {
        concept: 'Bài kiểm tra quan trọng nhất không phải là bài thi — đó là một dự án',
        concern: 'Ở Việt Nam, các bài kiểm tra quan trọng nhất là thi học kỳ và cuối cùng là kỳ thi tốt nghiệp THPT. Kiến thức quan trọng được kiểm tra trong điều kiện thi. Trường của con tôi cứ nhắc đến thứ gọi là Đánh giá Nội bộ hay bài nghiên cứu. Tôi lo rằng điều này không đủ nghiêm túc và sẽ không chuẩn bị cho con tôi đối mặt với văn hóa thi cử đại học.',
        bridge: 'Các Đánh giá Nội bộ (IA) của IB được kiểm duyệt bên ngoài bởi các giám khảo IB trên toàn thế giới — chúng không chỉ được chấm bởi giáo viên lớp. Trong DP Khoa học, IA là một cuộc điều tra nghiên cứu đầy đủ: giả thuyết, thiết kế thực nghiệm, thu thập dữ liệu, phân tích thống kê, đánh giá và kết luận. Trong DP Toán học, đó là một bài khám phá toán học. Trong AP, phần trả lời tự do và các đánh giá dựa trên dự án được chấm bởi các giám khảo được College Board đào tạo. Những điều này không kém nghiêm túc hơn bài thi — chúng đánh giá một loại sự nghiêm túc khác, bổ sung.',
        goal: 'Xây dựng kỹ năng nghiên cứu, phân tích và viết mà các trường quốc gia Việt Nam không đánh giá — những kỹ năng mà các trường đại học Mỹ, Anh và Úc tìm kiếm rõ ràng khi xét tuyển và trong năm đầu tiên.',
        ibConnection: 'Điểm IA chiếm 20–25% điểm môn học DP cuối cùng. Điều này có nghĩa là con bạn không thể bỏ qua chúng hay "dành tất cả cho bài thi". Các trường đại học như NUS, Melbourne và các trường hàng đầu của Mỹ đọc điểm dự đoán bao gồm kết quả IA. Làm IA tốt ảnh hưởng trực tiếp đến điểm dự đoán và do đó đến các đề nghị nhập học.',
        whatToAsk: ['Hỏi giáo viên: "Hạn nộp IA của từng môn học của con tôi là khi nào? Chủ đề đã được xác nhận chưa? Có mẫu đã được kiểm duyệt từ năm trước để tôi có thể cho con xem làm tài liệu tham khảo không?"'],
      },
    },
    {
      id: 'card-003',
      ibComponent: 'CAS — Creativity, Activity, Service',
      en: {
        concept: 'CAS is not wasted time — it is a graduation requirement',
        concern: 'My child spends time on sports, art, and community service at school. In Vietnam, this time would normally go toward ôn thi (exam preparation) and học thêm (extra tutoring). University entrance in Vietnam is almost entirely about academic scores. Why is my child spending hours on activities that do not count toward grades?',
        bridge: 'CAS is a non-negotiable IB Diploma requirement — your child cannot receive the diploma without completing it. More importantly, CAS is exactly what US and UK university admissions officers look for. A student with strong DP grades and genuine CAS activity — a community service project, a sport coached at a high level, a creative process documented over two years — is a far more compelling applicant than one with only exam scores. Vietnamese students at IB schools sometimes underinvest in CAS because of the ôn thi mindset. This is the wrong approach for overseas university applications.',
        goal: 'To ensure the university application tells a whole story about your child — not just academics. CAS provides the evidence of character, leadership, and initiative that top universities explicitly require.',
        ibConnection: 'The IB Diploma has six subject grades plus three core requirements: the Extended Essay, Theory of Knowledge, and CAS. Failing to complete CAS means no diploma regardless of subject grades. Beyond compliance, strong CAS reflections are directly quoted in UCAS personal statements and the Common App activity section.',
        whatToAsk: ['Ask the CAS coordinator: "What CAS experiences has my child logged so far? Are any of the experiences at a significant enough depth to write about in university applications? Is there a community service project the school recommends?"'],
      },
      vi: {
        concept: 'CAS không phải là thời gian lãng phí — đó là yêu cầu tốt nghiệp',
        concern: 'Con tôi dành thời gian cho thể thao, nghệ thuật và phục vụ cộng đồng ở trường. Ở Việt Nam, thời gian này thường dành cho ôn thi và học thêm. Đầu vào đại học ở Việt Nam gần như hoàn toàn dựa vào điểm học tập. Tại sao con tôi lại dành hàng giờ cho các hoạt động không tính vào điểm số?',
        bridge: 'CAS là yêu cầu bắt buộc của Bằng Tú tài IB — con bạn không thể nhận bằng mà không hoàn thành nó. Quan trọng hơn, CAS chính xác là những gì cán bộ tuyển sinh của các trường đại học Mỹ và Anh tìm kiếm. Một học sinh có điểm DP tốt và hoạt động CAS thực sự — một dự án phục vụ cộng đồng, một môn thể thao được huấn luyện ở cấp độ cao, một quá trình sáng tạo được ghi lại trong hai năm — là ứng viên hấp dẫn hơn nhiều so với người chỉ có điểm thi. Học sinh Việt Nam tại các trường IB đôi khi đầu tư không đủ vào CAS vì tâm lý ôn thi. Đây là cách tiếp cận sai cho các đơn xin học đại học nước ngoài.',
        goal: 'Đảm bảo hồ sơ đại học kể một câu chuyện hoàn chỉnh về con bạn — không chỉ là học tập. CAS cung cấp bằng chứng về tính cách, khả năng lãnh đạo và sự chủ động mà các trường đại học hàng đầu yêu cầu rõ ràng.',
        ibConnection: 'Bằng Tú tài IB có sáu điểm môn học cộng ba yêu cầu cốt lõi: Tiểu luận Mở rộng, Lý thuyết Tri thức và CAS. Không hoàn thành CAS đồng nghĩa với không có bằng tú tài bất kể điểm các môn học. Ngoài việc tuân thủ, các phản ánh CAS mạnh mẽ được trích dẫn trực tiếp trong bản tự giới thiệu UCAS và phần hoạt động của Common App.',
        whatToAsk: ['Hỏi điều phối viên CAS: "Con tôi đã ghi lại bao nhiêu trải nghiệm CAS cho đến nay? Có trải nghiệm nào đủ sâu để viết về trong đơn xin vào đại học không? Có dự án phục vụ cộng đồng nào nhà trường giới thiệu không?"'],
      },
    },
    {
      id: 'card-004',
      ibComponent: 'Theory of Knowledge (TOK)',
      en: {
        concept: 'TOK is not philosophy — it is how your child learns to argue at university',
        concern: 'My child has a subject called Theory of Knowledge where they discuss "how we know what we know." This sounds abstract and disconnected from the practical skills needed for university. In Vietnam, classroom time is for learning content. Is TOK taking time away from real subjects?',
        bridge: 'TOK teaches two things that university admissions tutors at Oxford, Cambridge, MIT, and NUS specifically say Vietnamese and East Asian applicants often lack: (1) the ability to construct an argument that acknowledges counter-evidence, and (2) the habit of questioning the basis of knowledge claims rather than accepting them as given. A Vietnamese student who can write "There are good reasons to believe X, but here is where that breaks down" is significantly stronger in a university seminar or interview than one who can only restate information. TOK is also worth up to 3 bonus points on the IB Diploma — it directly affects the final score.',
        goal: 'To give your child the academic voice that top universities reward. Not memorising philosophy, but practising the structured thinking that makes science essays, history arguments, and MBA applications stronger.',
        ibConnection: 'TOK is assessed by a 1,600-word essay (externally marked by IB examiners) and an exhibition. Combined with the Extended Essay, TOK can contribute up to 3 additional points to the IB total of 45. A student with strong core work can reach 45 — the maximum — partly through TOK. This is not a minor subject.',
        whatToAsk: ['Ask the TOK teacher: "What knowledge question is my child working on for the TOK essay? Has a first draft been reviewed? How do the current marks project onto the final diploma bonus points?"'],
      },
      vi: {
        concept: 'TOK không phải là triết học — đó là cách con bạn học cách lập luận tại đại học',
        concern: 'Con tôi có môn học gọi là Lý thuyết Tri thức, nơi chúng thảo luận về "cách chúng ta biết những gì chúng ta biết". Điều này nghe có vẻ trừu tượng và không liên quan đến các kỹ năng thực tế cần thiết cho đại học. Ở Việt Nam, giờ học trên lớp là để học nội dung. Liệu TOK có đang chiếm thời gian của các môn thực sự không?',
        bridge: 'TOK dạy hai điều mà cán bộ tuyển sinh tại Oxford, Cambridge, MIT và NUS cụ thể nói rằng các ứng viên Việt Nam và Đông Á thường thiếu: (1) khả năng xây dựng một lập luận thừa nhận bằng chứng phản bác, và (2) thói quen đặt câu hỏi về cơ sở của các tuyên bố kiến thức thay vì chấp nhận chúng như đã cho. Một học sinh Việt Nam có thể viết "Có lý do chính đáng để tin vào X, nhưng đây là nơi điều đó phá vỡ" mạnh hơn đáng kể trong một buổi seminar đại học hay phỏng vấn so với người chỉ có thể trình bày lại thông tin. TOK cũng có giá trị lên đến 3 điểm thưởng trong Bằng Tú tài IB — nó ảnh hưởng trực tiếp đến điểm cuối cùng.',
        goal: 'Cho con bạn tiếng nói học thuật mà các trường đại học hàng đầu khen thưởng. Không phải ghi nhớ triết học, mà là thực hành tư duy có cấu trúc giúp bài luận khoa học, lập luận lịch sử và đơn xin học MBA trở nên mạnh mẽ hơn.',
        ibConnection: 'TOK được đánh giá bằng bài luận 1.600 từ (được chấm bên ngoài bởi các giám khảo IB) và một bài trưng bày. Cùng với Tiểu luận Mở rộng, TOK có thể đóng góp tới 3 điểm bổ sung cho tổng điểm IB là 45. Một học sinh có thành tích cốt lõi tốt có thể đạt 45 — điểm tối đa — một phần nhờ TOK. Đây không phải là một môn học nhỏ.',
        whatToAsk: ['Hỏi giáo viên TOK: "Câu hỏi tri thức nào con tôi đang nghiên cứu cho bài luận TOK? Bản nháp đầu tiên đã được xem xét chưa? Điểm hiện tại dự báo điểm thưởng tú tài cuối cùng như thế nào?"'],
      },
    },
    {
      id: 'card-005',
      ibComponent: 'University Pathways — Vietnam, US, UK, Australia',
      en: {
        concept: 'IB and AP open doors that the Vietnamese national system cannot',
        concern: 'If my child\'s IB diploma is not recognised by Vietnamese national universities, they are locked out of universities like VNU or HUST. Most Vietnamese families want to keep that option open. Will IB or AP actually close the door to Vietnamese universities?',
        bridge: 'Vietnam\'s Ministry of Education and Training (Ministry of Education and Training recognises international qualifications through VN-NARIC (Vietnam National Academic Recognition Information Centre). Vietnam National University, both the Hanoi and HCMC campuses, accepts international baccalaureate-equivalent qualifications — prospective students should obtain a formal equivalency verification from VN-NARIC and confirm programme-specific requirements directly with VNU admissions well ahead of application deadlines. Beyond Vietnam: IB Diploma graduates from ISHCMC, BIS Vietnam, and BVIS Vietnam have been admitted to UCL, Warwick, Melbourne, ANU, NYU, Emory, and dozens of ranked US schools. AP students from AIS Saigon and ACIS have similarly strong track records to US universities. The overseas pathway is not theoretical — it is being taken by students at your child\'s school right now.',
        goal: 'To ensure your child\'s qualifications give maximum optionality: Vietnamese university if needed, but internationally competitive for the UK, US, Australia, and Singapore as the primary pathway.',
        ibConnection: 'The IB Diploma is accepted by every university in the UK UCAS system, every US university that participates in the Common App, every major Australian university, and NUS and NTU in Singapore. AP credit reduces first-year tuition at US universities — a 5 in AP Calculus BC at many universities exempts a student from first-year calculus, saving one course of fees. The financial case for AP is strongest for the US pathway.',
        whatToAsk: ['Ask the university counsellor: "What are the predicted outcomes for the current Year 12 cohort? What US, UK, or Australian universities have accepted IB graduates from this school in the last three years? What Vietnamese university options exist for IB graduates?"'],
      },
      vi: {
        concept: 'IB và AP mở ra những cánh cửa mà chương trình quốc gia Việt Nam không thể',
        concern: 'Nếu bằng tú tài IB của con tôi không được các trường đại học quốc gia Việt Nam công nhận, con sẽ bị chặn khỏi các trường như Đại học Quốc gia hay BKHN. Hầu hết các gia đình Việt Nam đều muốn giữ lựa chọn đó. Liệu IB hay AP có thực sự đóng cửa vào các trường đại học Việt Nam không?',
        bridge: 'Bộ Giáo dục và Đào tạo Việt Nam (BGDĐT) có các con đường công nhận chính thức cho học sinh tốt nghiệp IB và AP. Một số trường đại học hàng đầu của Việt Nam — bao gồm Đại học Quốc gia Hà Nội và TP.HCM — có các con đường tuyển thẳng cho học sinh tốt nghiệp trường quốc tế với chứng chỉ IB hoặc AP. Ngoài Việt Nam: Học sinh tốt nghiệp Bằng Tú tài IB từ ISHCMC, BIS Vietnam và BVIS Vietnam đã được nhận vào UCL, Warwick, Melbourne, ANU, NYU, Emory và hàng chục trường có xếp hạng của Mỹ. Học sinh AP từ AIS Saigon và ACIS cũng có thành tích tương tự tại các trường đại học Mỹ. Con đường du học không phải là lý thuyết — nó đang được các học sinh tại trường của con bạn thực hiện ngay bây giờ.',
        goal: 'Đảm bảo chứng chỉ của con bạn mang lại tối đa sự lựa chọn: đại học Việt Nam nếu cần, nhưng có khả năng cạnh tranh quốc tế với Anh, Mỹ, Úc và Singapore là con đường chính.',
        ibConnection: 'Bằng Tú tài IB được chấp nhận bởi mọi trường đại học trong hệ thống UCAS của Anh, mọi trường đại học Mỹ tham gia Common App, mọi trường đại học lớn của Úc, và NUS và NTU ở Singapore. Tín chỉ AP giúp giảm học phí năm đầu tại các trường đại học Mỹ — điểm 5 trong AP Giải tích BC tại nhiều trường miễn cho học sinh khỏi môn giải tích năm nhất, tiết kiệm một học phần. Lợi ích tài chính của AP là mạnh nhất cho con đường vào Mỹ.',
        whatToAsk: ['Hỏi cố vấn đại học: "Kết quả dự đoán của lớp 12 hiện tại là gì? Những trường đại học Mỹ, Anh hoặc Úc nào đã nhận học sinh tốt nghiệp IB từ trường này trong ba năm qua? Có những lựa chọn đại học Việt Nam nào dành cho học sinh tốt nghiệp IB không?"'],
      },
    },
  ],

  reviewScenarios: [
    {
      id: 'scenario-001',
      en: {
        title: 'The parent–teacher meeting — with and without this context',
        termsInPlay: ['MYP criterion scores', 'predicted grades', 'HL/SL choices'],
        situation: 'Your child is in Year 10. The school has scheduled a subject-selection meeting for the DP. The teacher says your child is "strong in Sciences but needs to decide whether to take Chemistry HL or Biology HL, as both with Physics HL would be very heavy." Your child wants to study Medicine in Australia.',
        situationNote: 'This is one of the most consequential conversations in your child\'s international school career. The HL choices made now affect university applications in 18 months.',
        withUnderstanding: 'You know that Australian medical schools require strong HL Science subjects and that Chemistry HL + Biology HL is the most direct route for Medicine at Melbourne or UNSW. You ask the teacher: "What are my child\'s current criterion scores in Chemistry and Biology MYP? Are both at a level that suggests HL is realistic?" You also ask the counsellor: "Which Australian medical schools accept IB graduates, and what are the typical score requirements?" You leave with a clear plan.',
        withoutUnderstanding: 'You hear that two HL Sciences is "heavy" and worry about overloading. You suggest your child take Chemistry SL instead. Eighteen months later, your child\'s Australian medicine application is rejected because Chemistry SL does not meet the prerequisite. The counsellor explains this could have been avoided — Chemistry HL was needed from the start.',
      },
      vi: {
        title: 'Buổi họp phụ huynh-giáo viên — có và không có bối cảnh này',
        termsInPlay: ['Điểm tiêu chí MYP', 'điểm dự đoán', 'lựa chọn HL/SL'],
        situation: 'Con bạn đang ở năm 10. Trường đã lên lịch một buổi họp lựa chọn môn học cho DP. Giáo viên nói con bạn "mạnh về Khoa học nhưng cần quyết định nên học Hóa học HL hay Sinh học HL, vì cả hai với Vật lý HL sẽ rất nặng". Con bạn muốn học Y khoa ở Úc.',
        situationNote: 'Đây là một trong những cuộc trò chuyện quan trọng nhất trong sự nghiệp học tập tại trường quốc tế của con bạn. Các lựa chọn HL được thực hiện bây giờ ảnh hưởng đến đơn xin học đại học trong 18 tháng tới.',
        withUnderstanding: 'Bạn biết rằng các trường y Úc yêu cầu các môn Khoa học HL mạnh và rằng Hóa học HL + Sinh học HL là con đường trực tiếp nhất cho Y khoa tại Melbourne hay UNSW. Bạn hỏi giáo viên: "Điểm tiêu chí hiện tại của con tôi trong MYP Hóa học và Sinh học là bao nhiêu? Cả hai có ở mức gợi ý rằng HL là thực tế không?" Bạn cũng hỏi cố vấn: "Những trường y Úc nào nhận học sinh tốt nghiệp IB, và yêu cầu điểm điển hình là gì?" Bạn rời đi với một kế hoạch rõ ràng.',
        withoutUnderstanding: 'Bạn nghe rằng hai HL Khoa học là "nặng" và lo lắng về quá tải. Bạn đề nghị con học Hóa học SL thay thế. Mười tám tháng sau, đơn xin học Y khoa Úc của con bị từ chối vì Hóa học SL không đáp ứng điều kiện tiên quyết. Cố vấn giải thích điều này có thể đã tránh được — Hóa học HL đã cần từ đầu.',
      },
    },
    {
      id: 'scenario-002',
      en: {
        title: 'The family conversation about grades',
        termsInPlay: ['MYP grades', 'học sinh giỏi comparison', 'overseas university context'],
        situation: 'Your child\'s MYP Year 7 report arrives. They scored 5s and 6s across subjects. Meanwhile, your sister\'s daughter at a Vietnamese public school has just been awarded học sinh giỏi with an average of 9.1. Grandmother asks why your child does not have a 9 or a "Giỏi" on the report.',
        situationNote: 'This comparison is the most common source of anxiety for Vietnamese families at IB schools. It happens in almost every household in the first two years.',
        withUnderstanding: 'You explain to grandmother: "A 5 in MYP is Substantial Achievement — it means the teacher has confirmed that [child\'s name] can demonstrate the skill at a high level. The school does not give percentage marks because the grading works differently. A 6 would be Outstanding Achievement. The goal is not to compete with students at Vietnamese schools — the goal is to be ready for university in Australia or the US, and for that pathway, a 5 or 6 in MYP is exactly where we want to be."',
        withoutUnderstanding: 'Grandmother\'s question creates pressure. You ask the child why they are not getting "9s or 10s" like their cousin. The child becomes confused — they thought they were doing well. The child starts to doubt the school. You start researching whether to transfer back to the Vietnamese national system. Six months later, you transfer — and the overseas university pathway becomes much harder.',
      },
      vi: {
        title: 'Cuộc trò chuyện gia đình về điểm số',
        termsInPlay: ['Điểm MYP', 'so sánh học sinh giỏi', 'bối cảnh đại học nước ngoài'],
        situation: 'Bảng điểm MYP năm 7 của con bạn đến. Con đạt điểm 5 và 6 ở các môn học. Trong khi đó, con gái của chị bạn ở trường công lập Việt Nam vừa được trao danh hiệu học sinh giỏi với trung bình 9.1. Bà ngoại hỏi tại sao con bạn không có điểm 9 hay "Giỏi" trên bảng điểm.',
        situationNote: 'Sự so sánh này là nguồn lo lắng phổ biến nhất của các gia đình Việt Nam tại các trường IB. Nó xảy ra ở hầu hết mọi gia đình trong hai năm đầu.',
        withUnderstanding: 'Bạn giải thích với bà: "Điểm 5 trong MYP là Thành tích Đáng kể — có nghĩa là giáo viên đã xác nhận rằng [tên con] có thể thể hiện kỹ năng ở mức độ cao. Trường không chấm điểm phần trăm vì hệ thống chấm điểm hoạt động khác. Điểm 6 sẽ là Thành tích Xuất sắc. Mục tiêu không phải là cạnh tranh với học sinh ở các trường Việt Nam — mục tiêu là sẵn sàng cho đại học ở Úc hay Mỹ, và cho con đường đó, điểm 5 hay 6 trong MYP chính xác là nơi chúng ta muốn đến."',
        withoutUnderstanding: 'Câu hỏi của bà tạo ra áp lực. Bạn hỏi con tại sao không được "9 hay 10" như em họ. Con bối rối — con nghĩ con đang học tốt. Con bắt đầu nghi ngờ về trường. Bạn bắt đầu nghiên cứu xem có nên chuyển về hệ thống quốc gia Việt Nam không. Sáu tháng sau, bạn chuyển trường — và con đường đại học nước ngoài trở nên khó khăn hơn nhiều.',
      },
    },
  ],

  pypCards: [
    {
      id: 'pyp-001',
      ibComponent: 'PYP — Inquiry-Based Learning',
      en: {
        concept: 'What PYP actually teaches',
        concern: 'PYP looks unstructured — there are no textbooks, no dictation (đọc chính tả), no chapter tests, and no class ranking. I cannot see what content my child is learning. How do I know progress is being made?',
        bridge: 'PYP (Primary Years Programme) is for students aged 3–12. It is structured around six transdisciplinary themes — Who We Are, Where We Are in Place and Time, How We Express Ourselves, How the World Works, How We Organise Ourselves, Sharing the Planet. Within each theme, students inquire into real questions: Why do people migrate? How do ecosystems change? What makes a system fair? The academic content — Mathematics, Language, Science, Social Studies, Arts — is taught inside these inquiries. A child studying "How ecosystems change" is learning Science curriculum — the difference is that they are learning it by investigating a question, not by reading a chapter and sitting a test.',
        goal: 'To develop the habits of inquiry, communication, and self-management that MYP criterion-based assessment and DP Internal Assessments directly reward — skills that content-memorisation alone does not build.',
        ibConnection: 'PYP is the foundation stage of the IB programme. The six transdisciplinary themes and IB Learner Profile attributes developed here — Inquirer, Thinker, Risk-taker, Reflective — are the same attributes that MYP criterion grades and DP Internal Assessment rubrics are built around.',
        whatToAsk: ['Ask your child tonight: "What question is your class exploring this week?" — if they can answer clearly, inquiry is working.'],
      },
      vi: {
        concept: 'PYP thực sự dạy gì',
        concern: 'PYP trông không có cấu trúc — không có sách giáo khoa, không có đọc chính tả, không có bài kiểm tra theo chương và không có xếp hạng lớp. Tôi không thể thấy con mình đang học nội dung gì. Làm sao tôi biết tiến bộ đang được thực hiện?',
        bridge: 'PYP (Chương trình Tiểu học) dành cho học sinh từ 3–12 tuổi. Chương trình được cấu trúc xung quanh sáu chủ đề liên môn — Chúng Ta Là Ai, Chúng Ta Ở Đâu Trong Không Gian Và Thời Gian, Cách Chúng Ta Thể Hiện Bản Thân, Thế Giới Hoạt Động Như Thế Nào, Cách Chúng Ta Tổ Chức Bản Thân, Chia Sẻ Hành Tinh. Trong mỗi chủ đề, học sinh tìm hiểu về các câu hỏi thực. Nội dung học thuật — Toán học, Ngôn ngữ, Khoa học, Khoa học Xã hội, Nghệ thuật — được dạy trong các cuộc điều tra này. Một đứa trẻ nghiên cứu "Hệ sinh thái thay đổi như thế nào" vẫn đang học nội dung Khoa học — sự khác biệt là chúng học bằng cách điều tra một câu hỏi, không phải đọc chương và làm bài kiểm tra.',
        goal: 'Xây dựng thói quen tìm hiểu, giao tiếp và tự quản lý mà đánh giá theo tiêu chí MYP và Đánh giá Nội bộ DP trực tiếp khen thưởng — những kỹ năng mà học thuộc lòng nội dung đơn thuần không xây dựng được.',
        ibConnection: 'PYP là giai đoạn nền tảng của chương trình IB. Sáu chủ đề liên môn và các thuộc tính Hồ sơ Học sinh IB được phát triển ở đây — Người tìm hiểu, Người suy nghĩ, Người dám chấp nhận rủi ro, Người phản ánh — là những thuộc tính tương tự mà điểm tiêu chí MYP và bảng đánh giá Đánh giá Nội bộ DP được xây dựng dựa trên.',
        whatToAsk: ['Hỏi con tối nay: "Lớp đang khám phá câu hỏi gì tuần này?" — nếu con có thể trả lời rõ ràng, việc học tập dựa trên tìm hiểu đang hoạt động.'],
      },
    },
    {
      id: 'pyp-002',
      ibComponent: 'PYP — Language Policy & Vietnamese A/B',
      en: {
        concept: 'Will my child lose their Vietnamese at an international school?',
        concern: 'My child will spend most of the school day speaking and learning in English. Vietnamese language proficiency — which took years to build — will fall behind. Family conversations will become harder. My child will lose cultural connection.',
        bridge: 'Most IB schools in Vietnam offer Vietnamese Language as a school-supported subject — Language B at PYP level, Language A or B at MYP/DP level. At ISHCMC, BIS Vietnam, and BVIS, Vietnamese is taught as a formal curriculum subject throughout. Schools with strong Vietnamese Language A programmes teach at the same literary depth as the Vietnamese national curriculum. The key question is whether your school offers Vietnamese A or only Vietnamese B — the literary depth is different. Ask the school directly.',
        goal: 'To ensure your child maintains Vietnamese literacy throughout PYP so they arrive in MYP and DP with genuine bilingual capability — a significant advantage in university applications and a connection to Vietnamese identity that does not need to be sacrificed.',
        ibConnection: 'IB language policy explicitly supports mother-tongue preservation. Vietnamese Language A at MYP and DP level is a full literature course — classical and modern Vietnamese texts, oral commentary, and critical essay writing — taught at the same depth as the Vietnamese national curriculum. A student with Vietnamese A on the DP can include it as one of their six subjects.',
        whatToAsk: ['Ask the school: "Is Vietnamese offered as Language A or Language B? What level is my child currently enrolled in?" — Language A means literary depth and full DP subject credit; Language B means language acquisition at a lower literary level.'],
      },
      vi: {
        concept: 'Con tôi có bị mất tiếng Việt khi học trường quốc tế không?',
        concern: 'Con tôi sẽ dành phần lớn ngày học nói và học bằng tiếng Anh. Khả năng thành thạo tiếng Việt — mà mất nhiều năm để xây dựng — sẽ bị tụt hậu. Các cuộc trò chuyện gia đình sẽ trở nên khó khăn hơn. Con tôi sẽ mất kết nối văn hóa.',
        bridge: 'Hầu hết các trường IB tại Việt Nam cung cấp Tiếng Việt như một môn học được trường hỗ trợ — Ngôn ngữ B ở cấp độ PYP, Ngôn ngữ A hoặc B ở cấp độ MYP/DP. Tại ISHCMC, BIS Vietnam và BVIS, Tiếng Việt được dạy như một môn học chính thức trong suốt chương trình. Các trường có chương trình Tiếng Việt A mạnh dạy ngôn ngữ ở cùng độ sâu văn học như chương trình quốc gia. Câu hỏi quan trọng là trường của bạn có cung cấp Tiếng Việt A hay chỉ Tiếng Việt B — độ sâu văn học khác nhau. Hỏi trường trực tiếp.',
        goal: 'Đảm bảo con bạn duy trì khả năng đọc viết tiếng Việt trong suốt PYP để con đến MYP và DP với khả năng song ngữ thực sự — một lợi thế đáng kể trong đơn xin học đại học và một kết nối với bản sắc Việt Nam không cần phải hy sinh.',
        ibConnection: 'Chính sách ngôn ngữ IB hỗ trợ rõ ràng việc bảo tồn tiếng mẹ đẻ. Tiếng Việt A ở bậc MYP và DP là một khóa học văn học đầy đủ — văn học cổ điển và hiện đại, bình luận nói và viết bài luận phân tích — được dạy ở cùng độ sâu như chương trình quốc gia Việt Nam. Học sinh có Tiếng Việt A trong DP có thể tính nó như một trong sáu môn học của mình.',
        whatToAsk: ['Hỏi trường: "Tiếng Việt có được dạy như Ngôn ngữ A hay Ngôn ngữ B không? Con tôi hiện đang học ở cấp độ nào?" — Ngôn ngữ A có nghĩa là độ sâu văn học và tín chỉ môn học DP đầy đủ; Ngôn ngữ B có nghĩa là tiếp thu ngôn ngữ ở cấp độ văn học thấp hơn.'],
      },
    },
    {
      id: 'pyp-003',
      ibComponent: 'PYP — Reports & the Learner Profile',
      en: {
        concept: 'How PYP reports work',
        concern: 'My child\'s PYP report gives no điểm số, no overall classification (giỏi / khá / trung bình), and no class position. It is full of narrative comments and references to attributes like "Inquirer" and "Risk-taker." I cannot tell whether my child is performing at a high level or needs urgent support.',
        bridge: 'PYP reports describe learning using the IB Learner Profile attributes (Inquirer, Knowledgeable, Thinker, Communicator, Principled, Open-minded, Caring, Risk-taker, Balanced, Reflective) and narrative teacher comments. Many schools also include approaches to learning ratings. It is not designed to say "your child is a 7.5 in Maths." It is designed to say "here is what your child can and cannot yet do, and here is what we are working on together." The measure of a strong PYP year is not a number — it is specific growth.',
        goal: 'To give you and the teacher a shared, specific language about your child\'s development — one that produces more actionable conversations at parent meetings than a number can.',
        ibConnection: 'PYP reports use the same Learner Profile framework that runs through MYP and DP. A child described as "Inquirer" and "Risk-taker" in Year 3 is building the same attributes that MYP criterion tasks and DP Internal Assessment rubrics reward at age 16–18.',
        whatToAsk: ['After the next report, schedule a 15-minute conversation with the class teacher. Ask: "What is one thing my child does confidently right now? What is one area we can work on together at home?" — most PYP teachers welcome this and will be specific.'],
      },
      vi: {
        concept: 'Cách báo cáo PYP hoạt động',
        concern: 'Báo cáo PYP của con tôi không có điểm số, không có phân loại tổng thể (giỏi / khá / trung bình) và không có thứ hạng trong lớp. Nó chứa đầy nhận xét tường thuật và tham chiếu đến các thuộc tính như "Người tìm hiểu" và "Người dám chấp nhận rủi ro". Tôi không thể biết liệu con mình đang thực hiện ở mức độ cao hay cần hỗ trợ khẩn cấp.',
        bridge: 'Báo cáo PYP mô tả việc học bằng cách sử dụng các thuộc tính Hồ sơ Học sinh IB và nhận xét tường thuật của giáo viên. Nhiều trường cũng bao gồm đánh giá về cách tiếp cận học tập. Nó không được thiết kế để nói "con bạn được 7.5 môn Toán". Nó được thiết kế để nói "đây là những gì con bạn có thể và chưa thể làm, và đây là những gì chúng tôi đang làm việc cùng nhau." Thước đo của một năm PYP tốt không phải là con số — mà là sự tăng trưởng cụ thể.',
        goal: 'Cho bạn và giáo viên một ngôn ngữ cụ thể, chung về sự phát triển của con bạn — một ngôn ngữ tạo ra các cuộc trò chuyện có thể thực hiện được hơn tại các buổi họp phụ huynh so với con số.',
        ibConnection: 'Báo cáo PYP sử dụng cùng khung Hồ sơ Học sinh chạy qua MYP và DP. Một đứa trẻ được mô tả là "Người tìm hiểu" và "Người dám chấp nhận rủi ro" ở năm 3 đang xây dựng các thuộc tính tương tự mà các bài tập tiêu chí MYP và bảng đánh giá Đánh giá Nội bộ DP khen thưởng ở tuổi 16–18.',
        whatToAsk: ['Sau báo cáo tiếp theo, hãy lên lịch một cuộc trò chuyện 15 phút với giáo viên. Hỏi: "Một điều con tôi đang làm tự tin ngay bây giờ là gì? Một lĩnh vực chúng ta có thể cùng nhau làm việc ở nhà là gì?" — hầu hết giáo viên PYP đều hoan nghênh điều này và sẽ cụ thể.'],
      },
    },
    {
      id: 'pyp-004',
      ibComponent: 'PYP — The Exhibition (Capstone Assessment)',
      en: {
        concept: 'The PYP Exhibition',
        concern: 'The Exhibition is described as the "culminating assessment" but there is no grade, no exam, and no ranking. My child has been working on a self-chosen topic for months. I am not sure how to evaluate whether this is going well or what it means for MYP readiness.',
        bridge: 'In the final year of PYP (Year 5/Grade 5, ages 10–11), students complete the PYP Exhibition: an independent inquiry project on a real-world issue they have chosen and researched over several months. It is presented publicly — to parents, teachers, and guests. It is not a memory test. It is a demonstration of the student\'s ability to identify a problem, research it using multiple sources, connect it to transdisciplinary themes, and communicate findings to an audience.',
        goal: 'To publicly demonstrate that your child can take a question from curiosity to conclusion — independently. This is the foundational skill for DP Internal Assessments and for university-level research at age 18.',
        ibConnection: 'The Exhibition is the capstone of PYP, assessed against IB criteria and externally verified. Students who do this well at age 10 have already practised the core structure of a DP Internal Assessment — from research question to data to evaluated conclusion — years before DP begins.',
        whatToAsk: ['When the Exhibition is scheduled, attend. Ask your child beforehand: "What is your Exhibition question? Why did you choose it? What have you found out that surprised you?" — if they can answer clearly, the inquiry is working.'],
      },
      vi: {
        concept: 'Triển lãm PYP',
        concern: 'Triển lãm được mô tả là "bài đánh giá kết thúc" nhưng không có điểm số, không có bài thi và không có xếp hạng. Con tôi đã làm việc về một chủ đề tự chọn trong nhiều tháng. Tôi không chắc cách đánh giá điều này có đang diễn ra tốt không hay nó có ý nghĩa gì cho sự sẵn sàng vào MYP.',
        bridge: 'Trong năm cuối của PYP (Năm 5/Lớp 5, 10–11 tuổi), học sinh hoàn thành Triển lãm PYP: một dự án tìm hiểu độc lập về một vấn đề thực tế mà chúng đã chọn và nghiên cứu trong vài tháng. Nó được trình bày công khai — cho phụ huynh, giáo viên và khách mời. Đó không phải là bài kiểm tra trí nhớ — đó là sự thể hiện khả năng xác định vấn đề, nghiên cứu bằng nhiều nguồn, kết nối với các chủ đề liên môn và truyền đạt kết quả cho khán giả.',
        goal: 'Để chứng minh công khai rằng con bạn có thể đưa một câu hỏi từ sự tò mò đến kết luận — một cách độc lập. Đây là kỹ năng nền tảng cho Đánh giá Nội bộ DP và công việc nghiên cứu cấp đại học ở tuổi 18.',
        ibConnection: 'Triển lãm là bài đánh giá kết thúc của PYP, được đánh giá theo tiêu chí IB và kiểm tra bên ngoài. Học sinh làm tốt điều này ở tuổi 10 đã thực hành cấu trúc cốt lõi của Đánh giá Nội bộ DP — từ câu hỏi nghiên cứu đến dữ liệu đến kết luận đã đánh giá — nhiều năm trước khi DP bắt đầu.',
        whatToAsk: ['Khi Triển lãm được lên lịch, hãy tham dự. Hỏi con trước: "Câu hỏi Triển lãm của con là gì? Tại sao con chọn câu hỏi đó? Con đã phát hiện ra điều gì khiến con ngạc nhiên?" — nếu con có thể trả lời rõ ràng, việc tìm hiểu đang hoạt động.'],
      },
    },
    {
      id: 'pyp-005',
      ibComponent: 'PYP — Home Support & học thêm',
      en: {
        concept: 'Homework, tutoring (học thêm), and PYP',
        concern: 'PYP teachers sometimes notice that heavily tutored Vietnamese students can recall facts quickly but struggle to apply them in open-ended tasks. I want to support my child\'s learning at home, but I am not sure whether the extra tutoring I am paying for is helping or creating the wrong habits.',
        bridge: 'Whether học thêm is useful in PYP depends entirely on what kind. Drilling Maths facts (times tables, mental arithmetic) and building strong reading habits in Vietnamese and English are genuinely useful at PYP age. Cramming textbook chapters or rote-memorising content for a test that does not exist at IB schools is not useful and may create confusion. A student who understands why 6×7=42 — rather than only that it equals 42 — will perform better in MYP criterion tasks than a student who has drilled the table 200 times without context.',
        goal: 'To direct your home support toward activities that genuinely strengthen PYP and future MYP performance — reading, real-world problem-solving, and discussion — rather than content-memorisation routines misaligned with how IB assessment works.',
        ibConnection: 'IB assessment at all levels rewards application and transfer of knowledge, not recall. The Approaches to Learning skills — research, critical thinking, self-management — are built through conversation and open-ended practice. Reading together, discussing inquiry themes at dinner, and doing real-world Maths outperform content-drilling sessions for IB readiness.',
        whatToAsk: ['At home during PYP: read together every evening in Vietnamese and English, practise Maths in real contexts (cooking, shopping, telling time), and discuss the unit of inquiry theme at dinner. Ask your child: "What question is your class investigating right now?"'],
      },
      vi: {
        concept: 'Bài tập về nhà, học thêm và PYP',
        concern: 'Giáo viên PYP đôi khi nhận thấy rằng học sinh Việt Nam được học thêm nhiều có thể nhớ lại sự kiện nhanh chóng nhưng gặp khó khăn khi áp dụng chúng vào các nhiệm vụ mở. Tôi muốn hỗ trợ việc học của con ở nhà, nhưng không chắc liệu học thêm tôi đang trả tiền có đang giúp ích hay tạo ra những thói quen sai lầm.',
        bridge: 'Học thêm có hữu ích trong PYP hay không phụ thuộc hoàn toàn vào loại học thêm. Luyện tập các sự kiện Toán học (bảng nhân, tính toán tâm trí) và xây dựng thói quen đọc tốt bằng tiếng Việt và tiếng Anh thực sự hữu ích ở độ tuổi PYP. Nhồi nhét các chương sách giáo khoa hoặc ghi nhớ máy móc nội dung cho bài kiểm tra không tồn tại ở các trường IB không hữu ích và có thể gây nhầm lẫn. Một học sinh hiểu tại sao 6×7=42 — thay vì chỉ biết nó bằng 42 — sẽ thực hiện tốt hơn trong các bài tập tiêu chí MYP so với học sinh đã luyện bảng 200 lần mà không có ngữ cảnh.',
        goal: 'Định hướng hỗ trợ tại nhà của bạn đến các hoạt động thực sự tăng cường PYP và hiệu suất MYP tương lai — đọc sách, giải quyết vấn đề thực tế và thảo luận — thay vì các thói quen ghi nhớ nội dung không phù hợp với cách đánh giá IB hoạt động.',
        ibConnection: 'Đánh giá IB ở tất cả các cấp độ khen thưởng việc áp dụng và chuyển giao kiến thức, không phải ghi nhớ. Các kỹ năng Phương pháp Tiếp cận Học tập — nghiên cứu, tư duy phản biện, tự quản lý — được xây dựng thông qua trò chuyện và thực hành mở. Đọc cùng nhau, thảo luận về các chủ đề tìm hiểu trong bữa tối và thực hành Toán thực tế vượt trội hơn các buổi học thuộc nội dung để sẵn sàng cho IB.',
        whatToAsk: ['Ở nhà trong PYP: đọc cùng nhau mỗi tối bằng tiếng Việt và tiếng Anh, thực hành Toán trong bối cảnh thực tế (nấu ăn, mua sắm, đọc giờ), và thảo luận về chủ đề đơn vị tìm hiểu trong bữa tối. Hỏi con: "Lớp đang điều tra câu hỏi gì ngay bây giờ?"'],
      },
    },
  ],

  gradingSystem: {
    myp: {
      en: {
        title: 'MYP Grade Descriptors',
        intro: 'MYP subject grades run from 1 to 7. The grade is derived from four criterion scores (each 0–8), which are added and then converted using a grade boundary table. The table is recalibrated each year by subject. Do not convert MYP grades to a percentage — the boundary positions shift.',
        criteriaNote: 'In Vietnam, parents sometimes try to map MYP grades to thang điểm 10 by multiplying by 10/7, giving Grade 5 = 7.1 ("Khá"). This mapping is educationally incorrect. A Grade 5 is Substantial Achievement against externally verified, internationally published criteria — it cannot be compared to a Vietnamese percentage score.',
        descriptors: [
          { grade: 7, label: 'Excellent', vi: 'Xuất sắc' },
          { grade: 6, label: 'Very Good', vi: 'Rất tốt' },
          { grade: 5, label: 'Substantial', vi: 'Đáng kể' },
          { grade: 4, label: 'Good', vi: 'Tốt' },
          { grade: 3, label: 'Satisfactory', vi: 'Đạt yêu cầu' },
          { grade: 2, label: 'Fair', vi: 'Trung bình' },
          { grade: 1, label: 'Minimal', vi: 'Tối thiểu' },
        ],
        boundaries: [
          { grade: 1, min: 0,  max: 5  },
          { grade: 2, min: 6,  max: 9  },
          { grade: 3, min: 10, max: 14 },
          { grade: 4, min: 15, max: 18 },
          { grade: 5, min: 19, max: 23 },
          { grade: 6, min: 24, max: 27 },
          { grade: 7, min: 28, max: 32 },
        ],
        watchOut: [
          'A 4 in MYP is "Good" achievement — not a failing grade. Vietnamese parents often interpret it as mediocre because it is below the midpoint of 7. In IB terms, 4 means the student has demonstrated solid understanding of all four criteria.',
          'Do not add criterion scores and divide by 4 to get an "average" — the total is converted using a boundary table, not averaged. Total of 22 = Grade 5, not 22÷4 = 5.5.',
          'MYP grade boundaries shift each year and vary by subject. A total of 20 might be a 5 in Sciences and a 4 in Humanities depending on the year\'s boundary table. Always read the report with the school\'s boundary table in hand.',
        ],
      },
      vi: {
        title: 'Mô tả điểm MYP',
        intro: 'Điểm môn học MYP chạy từ 1 đến 7. Điểm được tính từ bốn điểm tiêu chí (mỗi điểm từ 0–8), được cộng lại và sau đó chuyển đổi bằng bảng giới hạn điểm. Bảng được hiệu chỉnh lại mỗi năm theo môn học. Đừng quy đổi điểm MYP thành phần trăm — vị trí giới hạn thay đổi.',
        criteriaNote: 'Ở Việt Nam, phụ huynh đôi khi cố ánh xạ điểm MYP sang thang điểm 10 bằng cách nhân với 10/7, cho Điểm 5 = 7.1 ("Khá"). Ánh xạ này về giáo dục là không chính xác. Điểm 5 là Thành tích Đáng kể theo tiêu chí được kiểm tra bên ngoài, được công bố quốc tế — không thể so sánh với điểm phần trăm của Việt Nam.',
        watchOut: [
          'Điểm 4 trong MYP là thành tích "Tốt" — không phải điểm rớt. Phụ huynh Việt Nam thường hiểu nó là trung bình vì nó dưới điểm giữa là 7. Trong thuật ngữ IB, điểm 4 có nghĩa là học sinh đã chứng minh hiểu biết vững chắc về cả bốn tiêu chí.',
          'Đừng cộng điểm tiêu chí và chia cho 4 để lấy "trung bình" — tổng điểm được chuyển đổi bằng bảng giới hạn, không phải tính trung bình. Tổng 22 = Điểm 5, không phải 22÷4 = 5.5.',
          'Ranh giới điểm MYP thay đổi mỗi năm và khác nhau theo môn học. Tổng 20 có thể là điểm 5 trong Khoa học và điểm 4 trong Nhân văn tùy thuộc vào bảng ranh giới của năm đó. Luôn đọc bảng điểm với bảng ranh giới của trường trong tay.',
        ],
      },
    },
    dp: {
      en: {
        title: 'DP Grade Scale & AP Scale',
        intro: 'IB Diploma Programme subjects are graded 1–7. The maximum total is 45 (six subjects × max 7, plus up to 3 bonus points from TOK and Extended Essay). A score of 24+ with no failed conditions earns the diploma. Strong university applicants typically score 36–42. A 7 in IB HL Maths is equivalent in recognition to an A* in A-Level Mathematics.',
        subjectStructure: 'Six subjects: three at Higher Level (HL, 240+ teaching hours) and three at Standard Level (SL, 150+ hours). HL subjects carry more weight in university recognition. For Medicine in Australia or Engineering at a top UK university, two HL Sciences are typically required.',
        apNote: 'AP (Advanced Placement): Each AP subject is graded 1–5. A score of 3 is considered "passing" and earns credit at most US universities. A 4 or 5 is competitive for top universities and may earn advanced standing. AP subjects are taken independently — there is no AP "diploma" — so a student can take 1 or 12 AP courses. Most US-bound students at AP schools in Vietnam take 4–8 AP courses in Years 11–12.',
        coreBonus: {
          title: 'TOK + Extended Essay Bonus Points',
          note: 'The TOK/EE matrix can add 0–3 bonus points or deduct the diploma (grade E in both). These points are added to the six-subject total.',
          matrix: [
            { ee: 'A', tok: 'A', points: 3 },
            { ee: 'A', tok: 'B', points: 2 },
            { ee: 'A', tok: 'C', points: 2 },
            { ee: 'A', tok: 'D', points: 2 },
            { ee: 'B', tok: 'A', points: 2 },
            { ee: 'B', tok: 'B', points: 2 },
            { ee: 'B', tok: 'C', points: 1 },
            { ee: 'B', tok: 'D', points: 1 },
            { ee: 'C', tok: 'A', points: 2 },
            { ee: 'C', tok: 'B', points: 1 },
            { ee: 'C', tok: 'C', points: 1 },
            { ee: 'C', tok: 'D', points: 0 },
            { ee: 'D', tok: 'A', points: 2 },
            { ee: 'D', tok: 'B', points: 1 },
            { ee: 'D', tok: 'C', points: 0 },
            { ee: 'D', tok: 'D', points: 0 },
            { ee: 'E', tok: 'A', points: -1 },
            { ee: 'E', tok: 'B', points: -1 },
            { ee: 'E', tok: 'C', points: -1 },
            { ee: 'E', tok: 'D', points: -1 },
            { ee: 'A', tok: 'E', points: -1 },
            { ee: 'B', tok: 'E', points: -1 },
            { ee: 'C', tok: 'E', points: -1 },
            { ee: 'D', tok: 'E', points: -1 },
            { ee: 'E', tok: 'E', points: -99 },
          ],
        },
        watchOut: [
          'Do not confuse predicted grades with actual exam grades. Universities make offers based on predicted grades (provided by teachers in Year 12). If final results fall significantly below predicted grades, some offers may be withdrawn.',
          'A student needs at least 12 points from HL subjects (each HL must score 3 or above) and at least 9 points from SL subjects (each SL must score 2 or above) to receive the diploma — subject minimums matter as much as the total.',
          'Grade E in both TOK and Extended Essay means no diploma regardless of subject scores. This is the most common diploma failure mode for students who underinvest in core components.',
          'For Vietnamese families focused on Medicine in Australia: Chemistry HL is typically required. Choosing Chemistry SL instead to reduce workload can close the Medicine pathway — confirm prerequisites before subject selection.',
        ],
        universityContext: 'For Vietnam-based students targeting overseas universities: IB 36+ is competitive for Russell Group UK, Go8 Australia, and top-40 US schools. IB 38+ opens doors to UCL, Warwick, and the lower tier of Oxbridge. IB 40+ is competitive for Oxford, Cambridge, Imperial. AP 4–5 in 5+ subjects is competitive for the same tier. The critical factor is not the number alone — it is the combination of scores, subject choices, and the application narrative.',
      },
      vi: {
        title: 'Thang điểm DP và thang điểm AP',
        intro: 'Các môn học của Chương trình Tú tài IB được chấm từ 1–7. Tổng điểm tối đa là 45 (sáu môn × tối đa 7, cộng tới 3 điểm thưởng từ TOK và Tiểu luận Mở rộng). Điểm 24+ không có điều kiện thất bại được nhận bằng tú tài. Ứng viên đại học tốt thường đạt 36–42. Điểm 7 trong Toán HL của IB tương đương về mặt công nhận với A* trong A-Level Toán học.',
        subjectStructure: 'Sáu môn học: ba ở Cấp độ Nâng cao (HL, 240+ giờ học) và ba ở Cấp độ Tiêu chuẩn (SL, 150+ giờ). Các môn HL có trọng lượng cao hơn trong việc công nhận đại học. Đối với Y khoa ở Úc hoặc Kỹ thuật tại trường đại học hàng đầu Anh, thông thường cần hai môn Khoa học HL.',
        apNote: 'AP (Advanced Placement): Mỗi môn AP được chấm từ 1–5. Điểm 3 được coi là "đạt" và được tín chỉ tại hầu hết các trường đại học Mỹ. Điểm 4 hoặc 5 cạnh tranh cho các trường hàng đầu và có thể nhận được vị trí nâng cao. Các môn AP được học độc lập — không có "bằng" AP — vì vậy học sinh có thể học 1 hoặc 12 khóa AP. Hầu hết học sinh hướng Mỹ tại các trường AP ở Việt Nam học 4–8 khóa AP trong các năm 11–12.',
        watchOut: [
          'Đừng nhầm lẫn điểm dự đoán với điểm thi thực tế. Các trường đại học đưa ra đề nghị dựa trên điểm dự đoán (do giáo viên cung cấp vào năm 12). Nếu kết quả cuối cùng giảm đáng kể so với điểm dự đoán, một số đề nghị có thể bị rút lại.',
          'Học sinh cần ít nhất 12 điểm từ các môn HL (mỗi HL phải đạt 3 trở lên) và ít nhất 9 điểm từ các môn SL (mỗi SL phải đạt 2 trở lên) để nhận bằng tú tài — điểm tối thiểu của từng môn quan trọng như tổng điểm.',
          'Điểm E trong cả TOK và Tiểu luận Mở rộng có nghĩa là không có bằng tú tài bất kể điểm các môn học. Đây là chế độ thất bại tú tài phổ biến nhất đối với học sinh đầu tư không đủ vào các thành phần cốt lõi.',
          'Đối với các gia đình Việt Nam tập trung vào Y khoa ở Úc: Hóa học HL thường được yêu cầu. Chọn Hóa học SL thay thế để giảm khối lượng công việc có thể đóng con đường Y khoa — xác nhận điều kiện tiên quyết trước khi chọn môn học.',
        ],
        universityContext: 'Đối với học sinh ở Việt Nam nhắm đến các trường đại học nước ngoài: IB 36+ cạnh tranh cho Russell Group Anh, Go8 Úc và các trường top-40 Mỹ. IB 38+ mở cửa cho UCL, Warwick và tầng thấp hơn của Oxbridge. IB 40+ cạnh tranh cho Oxford, Cambridge, Imperial. AP 4–5 trong 5+ môn cạnh tranh cho cùng cấp độ. Yếu tố quan trọng không chỉ là con số — mà là sự kết hợp của điểm số, lựa chọn môn học và câu chuyện đơn xin học.',
      },
    },

    ap: {
      en: {
        title: 'AP Score Scale & Credit Reference',
        intro: 'AP (Advanced Placement) subjects are graded 1–5 by College Board-trained examiners. Unlike IB, there is no combined AP total — each subject is graded independently. A score of 3 is considered passing and typically earns college credit at US universities. A 4 or 5 is competitive for selective universities and may earn advanced standing or course exemption. Most Vietnam-based AP students at ACIS, AIS Saigon, and similar schools take 4–8 AP courses in Years 11–12.',
        scoresNote: 'Credit policies vary by university. Always verify the specific policy of your target school via the College Board AP credit policy database.',
        scores: [
          {
            score: 5,
            label: 'Extremely well qualified',
            vi: 'Cực kỳ đủ năng lực',
            creditEn: 'Credit + advanced standing at most US universities, including many selective schools. Often grants course exemption — one course of tuition fees saved.',
            creditVi: 'Được tín chỉ và vị trí nâng cao tại hầu hết các trường đại học Mỹ, kể cả nhiều trường chọn lọc. Thường được miễn môn học — tiết kiệm học phí một môn.',
          },
          {
            score: 4,
            label: 'Well qualified',
            vi: 'Đủ năng lực tốt',
            creditEn: 'Credit at most US universities. Top-10 schools (Harvard, MIT, Stanford) rarely grant course credit for any AP score — they use AP for advanced placement decisions, not credit.',
            creditVi: 'Được tín chỉ tại hầu hết các trường đại học Mỹ. Các trường top-10 (Harvard, MIT, Stanford) hiếm khi cấp tín chỉ cho bất kỳ điểm AP nào — họ dùng AP để quyết định vị trí nâng cao, không phải tín chỉ.',
          },
          {
            score: 3,
            label: 'Qualified',
            vi: 'Đủ năng lực',
            creditEn: 'Credit at many US universities (varies by school and subject). Not accepted at highly selective universities for credit. Still demonstrates academic preparation to admissions committees.',
            creditVi: 'Được tín chỉ tại nhiều trường đại học Mỹ (tùy trường và môn). Không được chấp nhận cho tín chỉ tại các trường rất chọn lọc. Vẫn thể hiện sự chuẩn bị học thuật với hội đồng tuyển sinh.',
          },
          {
            score: 2,
            label: 'Possibly qualified',
            vi: 'Có thể đủ năng lực',
            creditEn: 'Not typically accepted for credit. May still reflect a difficult subject taken under challenging circumstances — context matters in applications.',
            creditVi: 'Thường không được chấp nhận cho tín chỉ. Vẫn có thể phản ánh một môn khó được học trong điều kiện khó khăn — bối cảnh quan trọng trong đơn xin học.',
          },
          {
            score: 1,
            label: 'No recommendation',
            vi: 'Không được khuyến nghị',
            creditEn: 'Not accepted for credit. Scores of 1 can be withheld from university reports — students choose which AP scores to release.',
            creditVi: 'Không được chấp nhận cho tín chỉ. Điểm 1 có thể được giữ lại khỏi báo cáo đại học — học sinh chọn điểm AP nào sẽ được gửi đi.',
          },
        ],
        highValueSubjects: [
          {
            subject: 'Calculus BC',
            subjectVi: 'Giải tích BC',
            noteEn: 'A 4–5 exempts students from first-year calculus at most US universities, including STEM programs. Strongest credit recognition of any AP — directly saves one course of tuition. Calculus AB sub-score also included in BC exam.',
            noteVi: 'Điểm 4–5 miễn môn giải tích năm nhất tại hầu hết các trường đại học Mỹ, kể cả các chương trình STEM. Công nhận tín chỉ mạnh nhất trong các môn AP — trực tiếp tiết kiệm học phí một môn. Điểm phụ Giải tích AB cũng có trong bài thi BC.',
          },
          {
            subject: 'Chemistry',
            subjectVi: 'Hóa học',
            noteEn: 'A 4–5 grants general chemistry credit at most US universities. Also relevant for Medicine pathways in Australia — check whether AP Chemistry satisfies prerequisite requirements for your target program.',
            noteVi: 'Điểm 4–5 được tín chỉ hóa học đại cương tại hầu hết các trường đại học Mỹ. Cũng liên quan đến con đường Y khoa ở Úc — kiểm tra xem AP Hóa học có đáp ứng yêu cầu điều kiện tiên quyết cho chương trình mục tiêu của bạn không.',
          },
          {
            subject: 'Physics C: Mechanics + E&M',
            subjectVi: 'Vật lý C: Cơ học + Điện từ học',
            noteEn: 'Two independent exams, both graded 1–5. A 4–5 in each is highly regarded in engineering admissions and earns credit at most US engineering programs. One of the few AP exams with a calculus prerequisite.',
            noteVi: 'Hai bài thi độc lập, đều được chấm từ 1–5. Điểm 4–5 ở mỗi bài được đánh giá cao trong tuyển sinh kỹ thuật và được tín chỉ tại hầu hết các chương trình kỹ thuật Mỹ. Một trong số ít bài thi AP yêu cầu kiến thức giải tích.',
          },
          {
            subject: 'English Language & Composition',
            subjectVi: 'Ngôn ngữ và Bố cục Tiếng Anh',
            noteEn: 'A 3+ exempts from first-year writing/composition at most US universities, directly reducing course load and associated fees. Strong signal for international students demonstrating English academic proficiency.',
            noteVi: 'Điểm 3+ miễn môn viết/bố cục năm nhất tại hầu hết các trường đại học Mỹ, trực tiếp giảm tải lượng môn học và học phí liên quan. Tín hiệu mạnh cho học sinh quốc tế thể hiện trình độ học thuật tiếng Anh.',
          },
          {
            subject: 'Computer Science A',
            subjectVi: 'Khoa học Máy tính A',
            noteEn: 'A 4–5 accepted for introductory CS credit at most universities. Increasingly valued in applications to CS and engineering programs. Java-based — different from IB CS which is multi-language.',
            noteVi: 'Điểm 4–5 được chấp nhận cho tín chỉ CS nhập môn tại hầu hết các trường đại học. Ngày càng được đánh giá cao trong đơn xin vào các chương trình CS và kỹ thuật. Dựa trên Java — khác với IB CS sử dụng nhiều ngôn ngữ.',
          },
          {
            subject: 'Biology',
            subjectVi: 'Sinh học',
            noteEn: 'A 4–5 earns general biology credit at many universities. Key for pre-medicine or life sciences pathways. Complements Chemistry AP for strong science portfolios.',
            noteVi: 'Điểm 4–5 được tín chỉ sinh học đại cương tại nhiều trường đại học. Quan trọng cho con đường y khoa hoặc khoa học sự sống. Bổ sung cho AP Hóa học để tạo hồ sơ khoa học mạnh.',
          },
        ],
        watchOut: [
          'Harvard, MIT, Stanford, and most top-10 US universities do not grant course credit for AP scores — they use AP for advanced placement only (e.g., skipping to higher-level courses). Credit is primarily a benefit at universities ranked roughly 11–150 in the US.',
          'Universities can see how many AP courses a student took even if individual scores are withheld. Taking 5+ AP courses and withholding several low scores is transparent to admissions readers.',
          'The number of AP courses signals course rigour to admissions committees. A student who takes 8 AP courses and scores 4–5 on all of them presents a significantly stronger profile than a student who takes 3 and scores 5 on all three — both demonstrate mastery, but the former demonstrates range.',
          'AP Calculus AB and BC are different exams. BC covers all AB content plus additional topics. A student who takes BC and scores a 3 still receives an AB sub-score, which may qualify for AB credit. Do not retake AB after a weak BC result without checking the sub-score first.',
        ],
      },
      vi: {
        title: 'Thang điểm AP & Tham chiếu Tín chỉ',
        intro: 'Các môn AP (Advanced Placement) được chấm từ 1–5 bởi các giám khảo được College Board đào tạo. Khác với IB, không có tổng điểm AP kết hợp — mỗi môn được chấm độc lập. Điểm 3 được coi là đạt và thường được tín chỉ đại học tại các trường đại học Mỹ. Điểm 4 hoặc 5 cạnh tranh cho các trường chọn lọc và có thể được vị trí nâng cao hoặc miễn môn. Hầu hết học sinh AP ở Việt Nam tại ACIS, AIS Saigon và các trường tương tự học 4–8 khóa AP trong các năm 11–12.',
        scoresNote: 'Chính sách tín chỉ khác nhau theo từng trường đại học. Luôn xác minh chính sách cụ thể của trường mục tiêu qua cơ sở dữ liệu chính sách tín chỉ AP của College Board.',
      },
    },
  },

  nextSteps: {
    en: {
      default: [
        'Schedule a meeting with your child\'s form tutor or advisor and ask one specific question: "Can you show me where my child stands on each subject criterion, and what one improvement would make the most difference to their predicted grade?" That question, asked once a semester, is the most effective parental action in IB and AP schools.',
        'Find the assessment criteria for one of your child\'s subjects on the school\'s learning platform. Read criteria A–D and notice what each one measures.',
        'Ask your child tonight: "What are you investigating or researching in school right now?" — if they can answer specifically, inquiry is working.',
      ],
      new: [
        'Request the criterion rubrics for two subjects your child finds most challenging. Read them — this is the vocabulary all future feedback will use.',
        'Ask the school counsellor: "What is the overseas university profile of recent graduates from this school? Which universities have IB students been admitted to in the last three years?"',
        'Attend the school\'s parent IB information evening if one is scheduled.',
        'At home: establish one Vietnamese-language evening reading habit. It is the single best long-term investment at this stage.',
      ],
      settled: [
        'Use the MYP Grade Calculator in the Grade System section to re-read the most recent report. Identify the lowest criterion and ask the subject teacher what a higher score would look like.',
        'Ask the school: "Are predicted DP grades being discussed with Year 10 students?" If yes, ask to see the evidence those predictions are based on.',
        'Check CAS logs: ask your child to show you their current CAS tracker and confirm it is being actively maintained.',
        'If your child is in Year 10: subject selection is urgent. Schedule a counsellor meeting before the selection deadline.',
      ],
      'pyp-myp': [
        'Read the PYP section of this guide to understand what foundations PYP has been building — PYP graduates arrive in MYP with more self-awareness than parents often realise.',
        'Ask the Year 5 or MYP form teacher: "Which of the Approaches to Learning skills does my child need to develop most this year?" — most IB schools have a deliberate PYP–MYP transition programme.',
        'Review Vietnamese Language level with the language teacher: is your child in Language A or Language B? The distinction matters for DP.',
        'Set expectations with extended family: MYP grades look different from Vietnamese school grades. Share the grade descriptor table with grandparents if needed.',
      ],
      'myp-dp': [
        'Schedule a subject selection meeting before the end of Year 10. Bring your child\'s MYP criterion scores and a clear university destination in mind.',
        'Research prerequisite subjects for the target university and programme before subject selection — do not choose HL subjects without confirming prerequisites.',
        'Clarify the overseas university counselling service: does the school have a dedicated counsellor? Ask for their track record with Vietnam-based students.',
        'Discuss TOK and Extended Essay topics early: the best EE topics are chosen at the start of Year 11, not Year 12.',
      ],
    },
    vi: {
      default: [
        'Lên lịch một cuộc họp với giáo viên chủ nhiệm hoặc cố vấn của con bạn và hỏi một câu hỏi cụ thể: "Bạn có thể cho tôi xem vị trí hiện tại của con tôi trên từng tiêu chí môn học, và một cải tiến nào sẽ tạo ra sự khác biệt lớn nhất cho điểm dự đoán của con không?" Câu hỏi đó, được hỏi mỗi học kỳ một lần, là hành động hiệu quả nhất của phụ huynh trong các trường IB và AP.',
        'Tìm tiêu chí đánh giá cho một trong các môn học của con bạn trên nền tảng học tập của trường. Đọc tiêu chí A–D và chú ý từng tiêu chí đo lường gì.',
        'Hỏi con tối nay: "Con đang điều tra hay nghiên cứu gì ở trường ngay bây giờ?" — nếu con có thể trả lời cụ thể, việc tìm hiểu đang hoạt động.',
      ],
      new: [
        'Yêu cầu bảng tiêu chí đánh giá cho hai môn học con bạn thấy khó khăn nhất. Hãy đọc chúng — đây là từ vựng mà tất cả các phản hồi trong tương lai sẽ sử dụng.',
        'Hỏi cố vấn học đường: "Hồ sơ đại học nước ngoài của học sinh tốt nghiệp gần đây từ trường này là gì? Những trường đại học nào đã nhận học sinh IB trong ba năm qua?"',
        'Tham dự buổi thông tin IB dành cho phụ huynh của trường nếu có lịch.',
        'Ở nhà: thiết lập thói quen đọc sách tiếng Việt mỗi tối. Đây là khoản đầu tư dài hạn tốt nhất ở giai đoạn này.',
      ],
      settled: [
        'Sử dụng Máy tính điểm MYP trong phần Hệ thống điểm để đọc lại bảng điểm gần nhất. Xác định tiêu chí thấp nhất và hỏi giáo viên điểm cao hơn sẽ trông như thế nào.',
        'Hỏi trường: "Điểm DP dự đoán có đang được thảo luận với học sinh năm 10 không?" Nếu có, yêu cầu xem bằng chứng mà những dự đoán đó dựa vào.',
        'Kiểm tra nhật ký CAS: yêu cầu con bạn cho bạn xem bộ theo dõi CAS hiện tại và xác nhận nó đang được duy trì tích cực.',
        'Nếu con bạn đang ở năm 10: lựa chọn môn học rất cấp bách. Lên lịch cuộc họp với cố vấn trước hạn chót lựa chọn.',
      ],
      'pyp-myp': [
        'Đọc phần PYP của hướng dẫn này để hiểu những nền tảng PYP đã xây dựng — học sinh tốt nghiệp PYP đến MYP với nhiều tự nhận thức hơn phụ huynh thường nghĩ.',
        'Hỏi giáo viên năm 5 hoặc giáo viên chủ nhiệm MYP: "Kỹ năng Phương pháp Tiếp cận Học tập nào con tôi cần phát triển nhất năm nay?" — hầu hết các trường IB có chương trình chuyển tiếp PYP–MYP có chủ đích.',
        'Xem lại cấp độ Tiếng Việt với giáo viên ngôn ngữ: con bạn đang học Ngôn ngữ A hay Ngôn ngữ B? Sự phân biệt quan trọng cho DP.',
        'Đặt kỳ vọng với đại gia đình: điểm MYP trông khác so với điểm trường Việt Nam. Chia sẻ bảng mô tả điểm với ông bà nếu cần.',
      ],
      'myp-dp': [
        'Lên lịch cuộc họp lựa chọn môn học trước cuối năm 10. Mang theo điểm tiêu chí MYP của con và ý tưởng rõ ràng về điểm đến đại học của con.',
        'Nghiên cứu các môn học tiên quyết cho trường đại học và chương trình mục tiêu trước khi chọn môn — đừng chọn HL mà không xác nhận điều kiện tiên quyết.',
        'Làm rõ dịch vụ tư vấn đại học nước ngoài: trường có cố vấn chuyên dụng không? Hỏi thành tích của họ đối với học sinh có căn cứ ở Việt Nam.',
        'Thảo luận về TOK và Tiểu luận Mở rộng sớm: con bạn quan tâm đến chủ đề nào? Các chủ đề EE tốt nhất được chọn vào đầu năm 11, không phải năm 12.',
      ],
    },
  },

  glossary: [
    {
      term: 'DP',
      en: 'Diploma Programme — the IB qualification for students aged 16–19. Two-year course, six subjects, three core components (EE, TOK, CAS). Maximum 45 points.',
      vi: 'Chương trình Tú tài — bằng cấp IB dành cho học sinh 16–19 tuổi. Khóa học hai năm, sáu môn học, ba thành phần cốt lõi (EE, TOK, CAS). Tối đa 45 điểm.',
    },
    {
      term: 'AP',
      en: 'Advanced Placement — US College Board programme offering university-level courses in secondary school. Graded 1–5. No diploma — individual subject credits. Primarily used for US university applications.',
      vi: 'Chương trình Nâng cao — chương trình của College Board Mỹ cung cấp các khóa học cấp đại học ở bậc THPT. Chấm từ 1–5. Không có bằng tú tài — tín chỉ từng môn riêng lẻ. Chủ yếu được sử dụng cho đơn xin học đại học Mỹ.',
    },
    {
      term: 'MYP',
      en: 'Middle Years Programme — IB programme for students aged 11–16 (Years 6–10). Criterion-based grades 1–7. No external exams in most schools; some schools opt into MYP eAssessment.',
      vi: 'Chương trình Trung học Cơ sở — chương trình IB dành cho học sinh 11–16 tuổi (Năm 6–10). Điểm tiêu chí từ 1–7. Không có bài thi bên ngoài ở hầu hết các trường; một số trường tham gia đánh giá điện tử MYP.',
    },
    {
      term: 'PYP',
      en: 'Primary Years Programme — IB programme for students aged 3–12. No formal grades; assessed through teacher observation, portfolios, and the PYP Exhibition in Year 5.',
      vi: 'Chương trình Tiểu học — chương trình IB dành cho học sinh 3–12 tuổi. Không có điểm chính thức; được đánh giá qua quan sát của giáo viên, hồ sơ học tập và Triển lãm PYP ở Năm 5.',
    },
    {
      term: 'HL / SL',
      en: 'Higher Level / Standard Level — the two levels of study in DP. HL subjects are studied for 240+ hours; SL for 150+ hours. Universities specify which HL subjects they require for admission to competitive courses.',
      vi: 'Cấp độ Nâng cao / Cấp độ Tiêu chuẩn — hai cấp độ học tập trong DP. Các môn HL được học 240+ giờ; SL 150+ giờ. Các trường đại học xác định các môn HL nào họ yêu cầu để nhận vào các chương trình cạnh tranh.',
    },
    {
      term: 'IA',
      en: 'Internal Assessment — a coursework component within each DP subject, completed during the course and submitted to IB for external moderation. Counts for 20–25% of the final subject grade.',
      vi: 'Đánh giá Nội bộ — thành phần bài tập trong từng môn học DP, hoàn thành trong quá trình học và nộp cho IB để kiểm duyệt bên ngoài. Chiếm 20–25% điểm môn học cuối cùng.',
    },
    {
      term: 'EE',
      en: 'Extended Essay — a 4,000-word independent research essay, one of three core requirements for the IB Diploma. Written in a subject of the student\'s choice and assessed by an external IB examiner.',
      vi: 'Tiểu luận Mở rộng — bài luận nghiên cứu độc lập 4.000 từ, một trong ba yêu cầu cốt lõi của Bằng Tú tài IB. Được viết theo môn học mà học sinh chọn và được đánh giá bởi giám khảo IB bên ngoài.',
    },
    {
      term: 'TOK',
      en: 'Theory of Knowledge — a core IB component asking students to reflect on the nature of knowledge. Assessed by a 1,600-word essay and an exhibition. Contributes up to 3 bonus points to the diploma total.',
      vi: 'Lý thuyết Tri thức — thành phần cốt lõi IB yêu cầu học sinh suy ngẫm về bản chất của tri thức. Được đánh giá bằng bài luận 1.600 từ và một bài trưng bày. Đóng góp tới 3 điểm thưởng cho tổng điểm tú tài.',
    },
    {
      term: 'CAS',
      en: 'Creativity, Activity, Service — the third core IB component. Students must complete and reflect on experiences across all three strands. Non-completion means no diploma, regardless of subject grades.',
      vi: 'Sáng tạo, Hoạt động, Phục vụ — thành phần cốt lõi thứ ba của IB. Học sinh phải hoàn thành và phản ánh về các trải nghiệm trên cả ba lĩnh vực. Không hoàn thành có nghĩa là không có bằng tú tài, bất kể điểm các môn học.',
    },
    {
      term: 'Predicted grades',
      en: 'Grade estimates provided by IB teachers in Year 12, submitted to universities as part of the application. Universities make conditional offers based on these. If final exam results fall significantly below predicted grades, offers may be reviewed.',
      vi: 'Điểm dự đoán do giáo viên IB cung cấp vào năm 12, được nộp cho các trường đại học như một phần của đơn xin học. Các trường đại học đưa ra đề nghị có điều kiện dựa trên những điểm này. Nếu kết quả thi cuối kỳ giảm đáng kể so với điểm dự đoán, các đề nghị có thể được xem xét lại.',
    },
  ],

  pypBridge: {
    en: {
      title: 'The PYP → MYP Transition: What Vietnamese Families Should Know',
      intro: 'Vietnamese families at IB schools often reach the PYP to MYP transition with a quiet anxiety: their child\'s peers in the Vietnamese national system are now preparing formally for university entrance pathways, and the IB system looks different — less structured, less exam-focused, at exactly the moment when Vietnamese education culture is accelerating. Here is what specifically changes in the transition and what the first year of MYP looks like.',
      changes: [
        { aspect: 'Report format', pyp: 'Narrative comments and portfolio evidence. No percentage grades or class rank. Progress described in terms of learning behaviour and inquiry skills.', myp: 'Criterion scores A–D (0–8 each). Total score maps to grade 1–7. More structured than PYP, but no percentage — and no class rank. Incomparable to the national system reports.' },
        { aspect: 'Assessment style', pyp: 'Ongoing observation, student portfolios, integrated assessment. The PYP Exhibition is the Year 5 capstone.', myp: 'Formal summative assessments in each of eight subject groups. External IB moderation at Year 10 (MYP 5). Assessment is transparent and criterion-referenced, not curve-based or competitive.' },
        { aspect: 'Exam culture and pressure', pyp: 'No high-stakes entrance exams. Learning is exploratory and inquiry-driven.', myp: 'Still no entrance exams or ranking. By contrast, peers in the Vietnamese national system are beginning formal exam coaching (luyện thi). MYP maintains focus on understanding and critical thinking, not memorisation.' },
        { aspect: 'University preparation philosophy', pyp: 'Development of the whole learner. IB learner profile and transdisciplinary thinking.', myp: 'Continues IB philosophy. By MYP Year 5 (Grade 10), students are prepared for DP (not Thi Tốt Nghiệp). DP is recognized globally but requires a different mindset than Vietnamese board exam preparation.' }
      ],
      firstYearNote: 'Year 7 is a genuine transition year. The report will be shorter and more criterion-focused than what you might expect from national school reports. Do not worry about the absence of percentages or rankings — the criterion feedback is actually more detailed and actionable. Many Vietnamese families experience some anxiety comparing their IB track child to relatives on the national system track. The answer is: "The systems are measuring different things. Our child is developing critical thinking, collaboration, and research skills — skills the board system does not formally assess until university."',
      whatToAsk: [
        'What does my child need to do to move from their current criterion score to the next level in [subject]?',
        'How is my child developing as an independent learner and critical thinker? Can you give me specific examples?',
        'What is the DP pathway, and how does it differ from the Thi Tốt Nghiệp (Vietnamese board exam) that peers might be preparing for?'
      ],
    },
    vi: {
      title: 'Chuyển đổi PYP → MYP: Những gì các gia đình Việt Nam nên biết',
      intro: 'Các gia đình Việt Nam tại các trường IB thường đạt tới giai đoạn chuyển đổi PYP sang MYP với một lo lắng im lặng: những bạn cùng lứa của con em họ trong hệ thống giáo dục quốc gia Việt Nam hiện đang chuẩn bị chính thức cho những con đường vào đại học, và hệ thống IB trông khác — ít có cấu trúc hơn, ít tập trung vào kỳ thi hơn, chính xác vào lúc văn hóa giáo dục Việt Nam đang tăng tốc. Dưới đây là những gì cụ thể thay đổi trong quá trình chuyển đổi và năm đầu tiên của MYP trông như thế nào.',
      changes: [
        { aspect: 'Định dạng báo cáo', pyp: 'Nhận xét mô tả và bằng chứng danh mục. Không có điểm số phần trăm hay xếp hạng lớp. Tiến độ được mô tả theo các hành vi học tập và kỹ năng điều tra.', myp: 'Điểm tiêu chí A–D (0–8 mỗi điểm). Điểm tổng cộng ánh xạ tới điểm 1–7. Có cấu trúc hơn PYP, nhưng không phần trăm — và không có xếp hạng lớp. Không thể so sánh với các báo cáo của hệ thống quốc gia.' },
        { aspect: 'Phong cách đánh giá', pyp: 'Quan sát liên tục, danh mục học sinh, đánh giá tích hợp. Triển lãm PYP là đỉnh cao của năm 5.', myp: 'Đánh giá tổng hợp chính thức trong mỗi nhóm môn học tám điểm. Điều chỉnh IB bên ngoài vào năm 10 (MYP 5). Đánh giá là minh bạch và dựa trên tiêu chí, không phải dựa trên đường cong hay cạnh tranh.' },
        { aspect: 'Văn hóa thi cử và áp lực', pyp: 'Không có kỳ thi nhập học có độ cược cao. Học tập là thăm dò và hướng tới điều tra.', myp: 'Vẫn không có kỳ thi nhập học hay xếp hạng. Ngược lại, những bạn cùng lứa trong hệ thống quốc gia Việt Nam đang bắt đầu huấn luyện thi chính thức (luyện thi). MYP duy trì sự tập trung vào hiểu biết và tư duy phản biện, không phải ghi nhớ.' },
        { aspect: 'Triết lý chuẩn bị đại học', pyp: 'Phát triển của toàn bộ học sinh. Hồ sơ học tập IB và tư duy xuyên ngành.', myp: 'Tiếp tục triết lý IB. Bằng năm MYP (lớp 10), học sinh được chuẩn bị cho DP (không phải Thi Tốt Nghiệp). DP được công nhận trên toàn cầu nhưng đòi hỏi một tư duy khác so với chuẩn bị thi ứng viên quốc gia Việt Nam.' }
      ],
      firstYearNote: 'Năm 7 là một năm chuyển đổi thực sự. Báo cáo sẽ ngắn hơn và tập trung vào tiêu chí hơn so với những gì bạn có thể mong đợi từ các báo cáo trường quốc gia. Đừng lo lắng về sự vắng mặt của phần trăm hoặc xếp hạng — phản hồi tiêu chí thực tế chi tiết hơn và có thể hành động được. Nhiều gia đình Việt Nam trải qua một số lo lắng khi so sánh con em họ trên đường IB với các thành viên gia đình trên đường hệ thống quốc gia. Câu trả lời là: "Các hệ thống đang đo lường những thứ khác nhau. Con em chúng tôi đang phát triển tư duy phản biện, sự hợp tác và kỹ năng nghiên cứu — những kỹ năng mà hệ thống bảng điểm không đánh giá chính thức cho đến đại học."',
      whatToAsk: [
        'Con em tôi cần làm gì để chuyển từ điểm tiêu chí hiện tại của mình lên cấp độ tiếp theo trong [môn học]?',
        'Con em tôi đang phát triển như thế nào với tư cách là một học sinh độc lập và một nhà tư duy phản biện? Bạn có thể cho tôi các ví dụ cụ thể không?',
        'Đường dẫn DP là gì, và nó khác với Thi Tốt Nghiệp (kỳ thi ứng viên Việt Nam) mà các bạn cùng lứa có thể chuẩn bị như thế nào?'
      ],
    }
  },
}
