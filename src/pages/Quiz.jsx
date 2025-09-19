import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faCircleCheck,
  faRotateRight,
  faXmark,
  faBook,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/Layout";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const set1 = [
  {
    question:
      "Câu 1: Theo nghĩa rộng, chủ nghĩa xã hội khoa học được hiểu là gì?",
    options: [
      "Chủ nghĩa Mác - Lênin, luận giải từ các góc độ triết học, kinh tế học chính trị và chính trị - xã hội về sự chuyển biến tất yếu của xã hội loài người từ chủ nghĩa tư bản lên chủ nghĩa xã hội và chủ nghĩa cộng sản.",
      "Một trong ba bộ phận cấu thành chủ nghĩa Mác - Lênin.",
      "Học thuyết về sứ mệnh lịch sử toàn thế giới của giai cấp công nhân.",
      "Hệ thống các quan điểm lý luận về sự giải phóng giai cấp và giải phóng xã hội.",
    ],
    answer: 0,
  },
  {
    question: "Câu 2: Theo nghĩa hẹp, chủ nghĩa xã hội khoa học là gì?",
    options: [
      "Chủ nghĩa Mác - Lênin.",
      "Một trong ba bộ phận cấu thành chủ nghĩa Mác - Lênin.",
      "Học thuyết về sự chuyển biến xã hội.",
      "Khoa học về sự vận động và phát triển của xã hội loài người.",
    ],
    answer: 1,
  },
  {
    question:
      "Câu 3: Điều kiện kinh tế - xã hội nào đã thúc đẩy sự ra đời của chủ nghĩa xã hội khoa học vào những năm 40 thế kỷ XIX?",
    options: [
      "Sự hoàn thành cách mạng công nghiệp ở Anh và sự xuất hiện nền đại công nghiệp.",
      "Sự phát triển mạnh mẽ của khoa học tự nhiên.",
      "Sự ra đời của giai cấp tư sản.",
      "Sự tan rã của chế độ phong kiến.",
    ],
    answer: 0,
  },
  {
    question:
      "Câu 4: Sự phát triển của nền đại công nghiệp đã dẫn đến điều gì trong phương thức sản xuất?",
    options: [
      "Phương thức sản xuất phong kiến phát triển.",
      "Phương thức sản xuất tư bản chủ nghĩa phát triển vượt bậc.",
      "Nền kinh tế nông nghiệp chiếm ưu thế.",
      "Xã hội nguyên thủy tái lập.",
    ],
    answer: 1,
  },
  {
    question:
      "Câu 5: Tác phẩm nào đánh dấu sự ra đời của chủ nghĩa xã hội khoa học vào tháng 2 năm 1848?",
    options: [
      "Bộ Tư bản.",
      "Chống Đuyrinh.",
      "Tuyên ngôn của Đảng Cộng sản.",
      "Ba nguồn gốc và ba bộ phận cấu thành chủ nghĩa Mác.",
    ],
    answer: 2,
  },
  {
    question: "Câu 6: Ba bộ phận hợp thành chủ nghĩa Mác bao gồm những gì?",
    options: [
      "Triết học, xã hội học, đạo đức học.",
      "Kinh tế học, chính trị học, văn hóa học.",
      "Triết học, kinh tế chính trị học và chủ nghĩa xã hội khoa học.",
      "Khoa học tự nhiên, khoa học xã hội, khoa học nhân văn.",
    ],
    answer: 2,
  },
  {
    question:
      "Câu 7: Công lao lớn nhất của V.I. Lênin đối với chủ nghĩa xã hội khoa học là gì?",
    options: [
      "Sáng lập chủ nghĩa duy vật lịch sử.",
      "Xây dựng chủ nghĩa xã hội hiện thực, với sự ra đời của Nhà nước Xôviết năm 1917.",
      "Soạn thảo Tuyên ngôn của Đảng Cộng sản.",
      "Phê phán chủ nghĩa xã hội không tưởng.",
    ],
    answer: 1,
  },
  {
    question:
      "Câu 8: Theo V.I. Lênin, trong chế độ chuyên chính vô sản, dân chủ được hiểu như thế nào?",
    options: [
      "Dân chủ thuần túy.",
      "Dân chủ nói chung.",
      "Dân chủ vô sản (dân chủ xã hội chủ nghĩa).",
      "Dân chủ đại trà cho mọi giai cấp.",
    ],
    answer: 2,
  },
  {
    question:
      "Câu 9: Phương pháp luận chung nhất được chủ nghĩa xã hội khoa học sử dụng là gì?",
    options: [
      "Phương pháp phân tích, tổng hợp.",
      "Phương pháp kết hợp lịch sử và logic.",
      "Chủ nghĩa duy vật biện chứng và chủ nghĩa duy vật lịch sử.",
      "Phương pháp so sánh.",
    ],
    answer: 2,
  },
  {
    question:
      "Câu 10: Chức năng cơ bản của chủ nghĩa xã hội khoa học đối với giai cấp công nhân là gì?",
    options: [
      "Phê phán mọi trào lưu tư tưởng phản động.",
      "Giác ngộ và hướng dẫn giai cấp công nhân thực hiện sứ mệnh lịch sử của mình.",
      "Nghiên cứu chính ngay bản chất của sự biến đổi xã hội.",
      "Tổng kết thực tiễn phong trào công nhân.",
    ],
    answer: 1,
  },
  {
    question:
      "Câu 11: C. Mác và Ph. Ăngghen đã sử dụng thuật ngữ nào để chỉ giai cấp công nhân?",
    options: [
      "Giai cấp nông dân.",
      "Giai cấp tiểu tư sản.",
      "Giai cấp vô sản.",
      "Giai cấp địa chủ.",
    ],
    answer: 2,
  },
  {
    question:
      "Câu 12: Từ góc độ kinh tế - xã hội, giai cấp công nhân là sản phẩm và chủ thể của nền sản xuất nào?",
    options: [
      "Nền sản xuất nông nghiệp.",
      "Nền sản xuất thủ công nghiệp.",
      "Nền sản xuất đại công nghiệp.",
      "Nền sản xuất tự cấp tự túc.",
    ],
    answer: 2,
  },
  {
    question:
      "Câu 13: Về phương diện chính trị - xã hội, giai cấp công nhân là sản phẩm của quá trình phát triển của chế độ nào?",
    options: [
      "Chế độ phong kiến.",
      "Chế độ công xã nguyên thủy.",
      "Chủ nghĩa tư bản.",
      "Chủ nghĩa xã hội.",
    ],
    answer: 2,
  },
  {
    question:
      "Câu 14: Mâu thuẫn cơ bản trong chủ nghĩa tư bản, thể hiện về mặt xã hội, là mâu thuẫn giữa giai cấp nào?",
    options: [
      "Nông dân và địa chủ.",
      "Tư sản và địa chủ.",
      "Công nhân và tư sản.",
      "Công nhân và nông dân.",
    ],
    answer: 2,
  },
  {
    question:
      "Câu 15: Đặc điểm nổi bật của giai cấp công nhân là gì trong phương thức lao động?",
    options: [
      "Lao động thủ công.",
      "Lao động bằng phương thức công nghiệp với máy móc.",
      "Lao động nông nghiệp.",
      "Lao động tự do, không bị ràng buộc.",
    ],
    answer: 1,
  },
  {
    question:
      "Câu 16: Nội dung kinh tế của sứ mệnh lịch sử giai cấp công nhân là gì?",
    options: [
      "Củng cố quan hệ sản xuất phong kiến.",
      "Làm đại biểu cho quan hệ sản xuất mới và phát triển lực lượng sản xuất xã hội hóa cao.",
      "Bảo vệ chế độ tư hữu tư bản chủ nghĩa.",
      "Phá bỏ mọi quan hệ sản xuất.",
    ],
    answer: 1,
  },
  {
    question:
      "Câu 17: Nội dung chính trị - xã hội của sứ mệnh lịch sử giai cấp công nhân bao gồm việc gì?",
    options: [
      "Thiết lập chế độ độc tài.",
      "Xây dựng nhà nước của mình làm công cụ cải tạo xã hội cũ và xây dựng xã hội mới.",
      "Phục hồi chế độ phong kiến.",
      "Hạn chế quyền lực của nhân dân.",
    ],
    answer: 1,
  },
  {
    question:
      "Câu 18: Điều kiện khách quan nào về địa vị kinh tế - xã hội quy định sứ mệnh lịch sử của giai cấp công nhân?",
    options: [
      "Là con đẻ của nền nông nghiệp lạc hậu.",
      "Là chủ sở hữu tư liệu sản xuất chính.",
      "Là sản phẩm của nền đại công nghiệp, chủ thể quá trình sản xuất vật chất hiện đại.",
      "Là tầng lớp thiểu số trong xã hội.",
    ],
    answer: 2,
  },
  {
    question:
      "Câu 19: Nhân tố chủ quan nào quan trọng nhất để giai cấp công nhân thực hiện thắng lợi sứ mệnh lịch sử của mình?",
    options: [
      "Sự phát triển về số lượng và chất lượng của giai cấp công nhân.",
      "Đảng Cộng sản lãnh đạo.",
      "Liên minh với các giai cấp khác.",
      "Sự hỗ trợ từ quốc tế.",
    ],
    answer: 1,
  },
  {
    question:
      "Câu 20: Một trong những xu hướng biến đổi của giai cấp công nhân hiện nay là gì?",
    options: [
      "Giảm chất lượng lao động.",
      'Xu hướng "trí tuệ hóa" tăng nhanh.',
      "Giảm số lượng.",
      "Tăng cường lao động thủ công.",
    ],
    answer: 1,
  },
  {
    question:
      "Câu 21: Giai cấp công nhân Việt Nam có đặc điểm gì về thời điểm ra đời?",
    options: [
      "Ra đời cùng lúc với giai cấp tư sản.",
      "Ra đời sau giai cấp tư sản.",
      "Ra đời trước giai cấp tư sản, vào đầu thế kỷ XX.",
      "Chỉ xuất hiện sau Cách mạng tháng Tám.",
    ],
    answer: 2,
  },
  {
    question:
      "Câu 22: Giai cấp công nhân Việt Nam đã thể hiện vai trò gì trong cách mạng giải phóng dân tộc?",
    options: [
      "Lực lượng hỗ trợ cho giai cấp nông dân.",
      "Lực lượng chính trị tiên phong lãnh đạo.",
      "Lực lượng thứ yếu, đi sau.",
      "Lực lượng chỉ tập trung vào phát triển kinh tế.",
    ],
    answer: 1,
  },
  {
    question:
      "Câu 23: Theo quan điểm của Chủ nghĩa Mác - Lênin, chủ nghĩa xã hội là gì trên phương diện phong trào thực tiễn?",
    options: [
      "Trào lưu tư tưởng lý luận phê phán.",
      "Một khoa học.",
      "Một phong trào đấu tranh của nhân dân lao động chống áp bức.",
      "Một hình thái kinh tế - xã hội.",
    ],
    answer: 2,
  },
  {
    question:
      "Câu 24: Theo Chủ nghĩa Mác - Lênin, chủ nghĩa xã hội là một khoa học về vấn đề gì?",
    options: [
      "Phát triển kinh tế thị trường.",
      "Sứ mệnh lịch sử của giai cấp công nhân.",
      "Văn hóa và tư tưởng.",
      "Quan hệ quốc tế.",
    ],
    answer: 1,
  },
  {
    question:
      "Câu 25: Học thuyết nào chỉ ra sự thay thế tất yếu của hình thái kinh tế - xã hội tư bản chủ nghĩa bằng hình thái kinh tế - xã hội cộng sản chủ nghĩa?",
    options: [
      "Học thuyết giá trị thặng dư.",
      "Học thuyết hình thái kinh tế - xã hội.",
      "Học thuyết tiến hóa.",
      "Học thuyết dân chủ.",
    ],
    answer: 1,
  },
  {
    question:
      "Câu 26: Chủ nghĩa xã hội khoa học có vai trò gì đối với sự phát triển của xã hội hiện đại?",
    options: [
      "Chỉ mang tính lý thuyết, không thực tiễn.",
      "Định hướng cho sự phát triển tiến bộ, công bằng và dân chủ.",
      "Chỉ áp dụng cho các nước phát triển.",
      "Không ảnh hưởng đến xã hội hiện đại.",
    ],
    answer: 1,
  },
];

const set2 = [
  {
    question:
      "Câu 1: Giữa xã hội tư bản chủ nghĩa và xã hội cộng sản chủ nghĩa là thời kỳ nào?",
    options: [
      "Thời kỳ phát triển ổn định.",
      "Thời kỳ quá độ lên chủ nghĩa cộng sản.",
      "Thời kỳ phục hồi phong kiến.",
      "Thời kỳ độc tài tư sản.",
    ],
    answer: 1,
  },
  {
    question:
      "Câu 2: Đối với những nước chưa có chủ nghĩa tư bản phát triển cao, V.I. Lênin cho rằng thời kỳ quá độ lên chủ nghĩa xã hội sẽ như thế nào?",
    options: [
      "Rất ngắn ngủi.",
      "Không cần thiết.",
      "Khá lâu dài.",
      "Bỏ qua hoàn toàn.",
    ],
    answer: 2,
  },
  {
    question: "Câu 3: Thuật ngữ 'dân chủ' xuất hiện vào khoảng thời gian nào?",
    options: [
      "Thế kỷ IX – VIII TCN",
      "Thế kỷ VII – VI TCN",
      "Thế kỷ V – IV TCN",
      "Thế kỷ III – II TCN",
    ],
    answer: 1,
  },
  {
    question: "Câu 4: 'Demos' trong tiếng Hy Lạp cổ có nghĩa là gì?",
    options: ["Quyền lực", "Nhà nước", "Nhân dân", "Chính trị"],
    answer: 2,
  },
  {
    question: "Câu 5: 'Kratos' trong tiếng Hy Lạp cổ có nghĩa là gì?",
    options: ["Tự do", "Quyền lực", "Giai cấp", "Công lý"],
    answer: 1,
  },
  {
    question: "Câu 6: Ý nghĩa cơ bản của khái niệm dân chủ là gì?",
    options: [
      "Tự do của cá nhân",
      "Quyền lực của nhân dân",
      "Lợi ích của giai cấp thống trị",
      "Quyền bình đẳng giới",
    ],
    answer: 1,
  },
  {
    question:
      "Câu 7: Theo chủ nghĩa Mác – Lênin, dân chủ là sản phẩm của quá trình nào?",
    options: [
      "Phát triển khoa học kỹ thuật",
      "Đấu tranh giai cấp",
      "Tiến bộ văn hóa nhân loại",
      "Tự nhiên xã hội",
    ],
    answer: 1,
  },
  {
    question: "Câu 8: Dân chủ, về bản chất, theo chủ nghĩa Mác – Lênin là gì?",
    options: [
      "Hình thức chính quyền quân chủ",
      "Quyền lực thực sự của nhân dân",
      "Pháp luật của giai cấp thống trị",
      "Nhu cầu văn hóa xã hội",
    ],
    answer: 1,
  },
  {
    question:
      "Câu 9: Dân chủ còn là nguyên tắc nào trong tổ chức và quản lý xã hội?",
    options: [
      "Tập trung chuyên chế",
      "Phân quyền độc lập",
      "Tập trung dân chủ",
      "Tự do tuyệt đối",
    ],
    answer: 2,
  },
  {
    question:
      "Câu 10: Dân chủ, với tư cách là một giá trị nhân loại chung, sẽ như thế nào?",
    options: [
      "Sớm muộn cũng mất đi",
      "Chỉ tồn tại trong xã hội tư sản",
      "Luôn tồn tại và phát triển cùng con người",
      "Bị thay thế bởi chế độ quân chủ",
    ],
    answer: 2,
  },
  {
    question: "Câu 11: Dân chủ nguyên thủy được Ph. Ăngghen gọi là gì?",
    options: [
      "Dân chủ quân sự",
      "Dân chủ tự nhiên",
      "Dân chủ công xã",
      "Dân chủ bộ lạc",
    ],
    answer: 0,
  },
  {
    question: "Câu 12: Đặc trưng cơ bản của dân chủ nguyên thủy là gì?",
    options: [
      "Chỉ thủ lĩnh có quyền",
      "Nô lệ không được tham gia",
      "Mọi người đều có quyền biểu quyết",
      "Quyền lực thuộc về tăng lữ",
    ],
    answer: 2,
  },
  {
    question: "Câu 13: Khi nào dân chủ nguyên thủy tan rã?",
    options: [
      "Khi xuất hiện chiến tranh",
      "Khi ra đời chế độ tư hữu và giai cấp",
      "Khi bộ lạc phân tách",
      "Khi hình thành nhà nước",
    ],
    answer: 1,
  },
  {
    question: "Câu 14: Bản chất của dân chủ chủ nô là gì?",
    options: [
      "Dân chủ cho toàn thể nhân dân",
      "Dân chủ cho thiểu số",
      "Dân chủ bình đẳng",
      "Dân chủ của nô lệ",
    ],
    answer: 1,
  },
  {
    question: "Câu 15: Ai được coi là 'dân' trong dân chủ chủ nô?",
    options: [
      "Toàn bộ cư dân",
      "Nô lệ và chủ nô",
      "Chủ nô và một số tầng lớp tự do",
      "Tăng lữ và nô lệ",
    ],
    answer: 2,
  },
  {
    question: "Câu 16: Dân chủ chủ nô bị thay thế bởi hình thái nào?",
    options: [
      "Dân chủ tư sản",
      "Độc tài chuyên chế phong kiến",
      "Cộng sản nguyên thủy",
      "Dân chủ xã hội chủ nghĩa",
    ],
    answer: 1,
  },
  {
    question: "Câu 17: Dân chủ tư sản ra đời vào giai đoạn nào?",
    options: [
      "Thế kỷ XI – XII",
      "Cuối thế kỷ XIV – đầu thế kỷ XV",
      "Thế kỷ XVI – XVII",
      "Thế kỷ XVIII – XIX",
    ],
    answer: 1,
  },
  {
    question: "Câu 18: Bản chất của dân chủ tư sản theo Mác – Lênin là gì?",
    options: [
      "Một nền dân chủ toàn dân",
      "Một bước lùi của nhân loại",
      "Nền dân chủ của thiểu số",
      "Nền dân chủ bình đẳng tuyệt đối",
    ],
    answer: 2,
  },
  {
    question:
      "Câu 19: Cách mạng nào đánh dấu sự xác lập dân chủ xã hội chủ nghĩa?",
    options: [
      "Cách mạng Pháp 1789",
      "Cách mạng công nghiệp",
      "Cách mạng Tháng Mười Nga 1917",
      "Công xã Pari 1871",
    ],
    answer: 2,
  },
  {
    question:
      "Câu 20: Nhà nước xã hội chủ nghĩa đầu tiên trên thế giới ra đời năm nào?",
    options: ["1867", "1871", "1917", "1924"],
    answer: 2,
  },
  {
    question: "Câu 21: Nguyên tắc cơ bản của dân chủ xã hội chủ nghĩa là gì?",
    options: [
      "Tập quyền tuyệt đối",
      "Không ngừng mở rộng dân chủ",
      "Giới hạn quyền công dân",
      "Giữ nguyên mô hình cũ",
    ],
    answer: 1,
  },
  {
    question:
      "Câu 22: Theo V.I. Lênin, bản chất của việc mở rộng dân chủ là gì?",
    options: [
      "Tăng cường quyền lực Đảng",
      "Củng cố quyền lực của nhân dân",
      "Hạn chế vai trò nhà nước",
      "Bảo vệ lợi ích tư sản",
    ],
    answer: 1,
  },
  {
    question: "Câu 23: Nền dân chủ xã hội chủ nghĩa có đặc điểm nào?",
    options: [
      "Mọi quyền lực thuộc về nhân dân",
      "Quyền lực thuộc về thiểu số",
      "Nhà nước phi pháp quyền",
      "Tách biệt dân chủ và pháp luật",
    ],
    answer: 0,
  },
  {
    question:
      "Câu 24: Dân chủ xã hội chủ nghĩa được thực hiện bằng hình thức nào?",
    options: [
      "Nhà nước pháp quyền xã hội chủ nghĩa",
      "Chế độ độc tài tư sản",
      "Thể chế phong kiến quân chủ",
      "Chính quyền bộ lạc",
    ],
    answer: 0,
  },
  {
    question:
      "Câu 25: Ai giữ vai trò lãnh đạo trong nền dân chủ xã hội chủ nghĩa?",
    options: [
      "Tầng lớp thương nhân",
      "Quý tộc phong kiến",
      "Đảng Cộng sản",
      "Chủ nghĩa tư bản",
    ],
    answer: 2,
  },
  {
    question:
      "Câu 26: Dân chủ xã hội chủ nghĩa khác dân chủ tư sản ở điểm nào?",
    options: [
      "Quyền lực thuộc về thiểu số.",
      "Không có pháp luật.",
      "Quyền lực thực sự thuộc về nhân dân lao động.",
      "Chỉ dành cho tầng lớp giàu có.",
    ],
    answer: 2,
  },
];

function Quiz() {
  const navigate = useNavigate();
  const [activeSet, setActiveSet] = useState(1);
  const questions = useMemo(() => (activeSet === 1 ? set1 : set2), [activeSet]);
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [selections, setSelections] = useState(
    Array((activeSet === 1 ? set1 : set2).length).fill(null)
  );

  const resetQuiz = (setNo = activeSet) => {
    setActiveSet(setNo);
    setStep(0);
    setSelected(null);
    setScore(0);
    setShowResult(false);
    setWrongAnswers([]);
    const len = (setNo === 1 ? set1 : set2).length;
    setSelections(Array(len).fill(null));
  };

  const handleOptionClick = (idx) => {
    setSelected(idx);
    const next = [...selections];
    next[step] = idx;
    setSelections(next);
  };

  const handleNext = () => {
    if (step < questions.length - 1) {
      const nextStep = step + 1;
      setStep(nextStep);
      setSelected(selections[nextStep]);
    } else {
      const computedWrong = questions
        .map((q, i) => ({
          i,
          chosenIdx: selections[i],
          correctIdx: q.answer,
          question: q.question,
          chosen: selections[i] !== null ? q.options[selections[i]] : null,
          correct: q.options[q.answer],
        }))
        .filter((x) => x.chosenIdx !== x.correctIdx);
      setWrongAnswers(
        computedWrong.map(({ question, chosen, correct }) => ({
          question,
          chosen,
          correct,
        }))
      );
      setScore(questions.length - computedWrong.length);
      try {
        localStorage.setItem(
          `mln-quiz-wrong-set-${activeSet}`,
          JSON.stringify(
            computedWrong.map(({ question, chosen, correct }) => ({
              question,
              chosen,
              correct,
            }))
          )
        );
      } catch {}
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      const prevStep = step - 1;
      setStep(prevStep);
      setSelected(selections[prevStep]);
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
        {/* Top navigation buttons */}
        <div className="flex w-full max-w-2xl justify-between mb-6 mt-5">
          <button
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-blue-700 font-bold shadow-lg hover:bg-blue-50 transition"
            onClick={() => navigate("/")}
          >
            Quay lại
          </button>
          <button
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-green-500 text-white font-bold shadow-lg hover:bg-green-600 transition"
            onClick={() => navigate("/learn")}
          >
            Học bài
          </button>
        </div>
        <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600 drop-shadow-lg tracking-tight">
          Quiz MLN131
        </h1>
        <div className="flex gap-6 mb-10">
          <button
            className={`px-6 py-3 rounded-xl border-2 text-lg font-bold shadow-lg transition-all ${
              activeSet === 1
                ? "bg-blue-600 text-white border-blue-600 scale-105"
                : "bg-white text-blue-700 border-blue-300 hover:bg-blue-50"
            }`}
            onClick={() => resetQuiz(1)}
          >
            Bộ 1 ({set1.length} câu)
          </button>
          <button
            className={`px-6 py-3 rounded-xl border-2 text-lg font-bold shadow-lg transition-all ${
              activeSet === 2
                ? "bg-blue-600 text-white border-blue-600 scale-105"
                : "bg-white text-blue-700 border-blue-300 hover:bg-blue-50"
            }`}
            onClick={() => resetQuiz(2)}
          >
            Bộ 2 ({set2.length} câu)
          </button>
        </div>
        {!showResult ? (
          <div className="w-full max-w-2xl bg-white/80 rounded-3xl shadow-2xl p-12 border border-blue-200 flex flex-col items-center">
            <div className="flex items-center justify-between w-full mb-6 text-lg text-gray-700 font-semibold">
              <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-800">
                Bộ {activeSet}
              </span>
              <span>
                <span className="flex items-center gap-2 px-3 py-2 rounded bg-indigo-100 text-indigo-700">
                  Câu {step + 1}/{questions.length}
                </span>
              </span>
            </div>
            <h2 className="text-2xl font-bold mb-8 text-indigo-800 text-center leading-relaxed">
              {questions[step].question}
            </h2>
            <div className="w-full space-y-5 mb-10">
              {questions[step].options.map((opt, idx) => (
                <button
                  key={idx}
                  className={`w-full text-left px-6 py-5 rounded-2xl border-2 text-lg font-medium shadow-md transition-all duration-200
                    ${
                      selected === idx
                        ? "bg-gradient-to-r from-blue-300 via-purple-200 to-pink-200 border-blue-500 text-blue-900 scale-105"
                        : "bg-white border-gray-300 hover:bg-blue-50 hover:border-blue-300"
                    }`}
                  onClick={() => handleOptionClick(idx)}
                >
                  {opt}
                </button>
              ))}
            </div>
            <div className="flex justify-between w-full mt-2">
              <button
                className="flex items-center gap-2 px-7 py-3 bg-gray-200 text-gray-800 rounded-xl font-bold border border-gray-400 hover:bg-gray-300 transition-all disabled:opacity-50"
                onClick={handleBack}
                disabled={step === 0}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
                Back
              </button>
              <button
                className="flex items-center gap-2 px-7 py-3 bg-blue-700 text-white rounded-xl font-bold shadow hover:bg-blue-800 transition-all disabled:opacity-50"
                onClick={handleNext}
                disabled={selected === null}
              >
                {step < questions.length - 1 ? (
                  <>
                    Next
                    <FontAwesomeIcon icon={faArrowRight} />
                  </>
                ) : (
                  <>
                    Finish <FontAwesomeIcon icon={faCircleCheck} />
                  </>
                )}
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-2xl bg-white/90 rounded-3xl shadow-2xl p-12 text-center border border-green-200 flex flex-col items-center">
            <h2 className="text-4xl font-extrabold mb-8 text-green-700 drop-shadow-lg flex items-center justify-center gap-3">
              Quiz Completed!
            </h2>
            <p className="text-2xl mb-8 font-bold">
              Your score:{" "}
              <span className="text-green-700">
                {score} / {questions.length}
              </span>
            </p>
            {wrongAnswers.length > 0 ? (
              <div className="text-left bg-white rounded-2xl border border-green-200 p-6 mb-8 max-h-80 overflow-auto shadow w-full">
                <h3 className="font-semibold text-red-700 mb-4 text-lg flex items-center gap-2">
                  <FontAwesomeIcon icon={faXmark} />
                  Câu trả lời sai ({wrongAnswers.length}):
                </h3>
                <ol className="list-decimal ml-6 space-y-4 text-base text-gray-800">
                  {wrongAnswers.map((w, i) => (
                    <li key={i}>
                      <div className="font-medium">{w.question}</div>
                      <div>
                        Chọn:{" "}
                        <span className="text-red-600">
                          {w.chosen ?? "(bỏ qua)"}
                        </span>
                      </div>
                      <div>
                        Đúng:{" "}
                        <span className="text-green-700">{w.correct}</span>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            ) : (
              <p className="text-green-700 mb-8 text-xl font-semibold flex items-center gap-2">
                <FontAwesomeIcon icon={faGraduationCap} />
                Tuyệt vời! Không có câu sai.
              </p>
            )}
            <div className="flex flex-col gap-4 items-center w-full">
              <button
                className="flex items-center gap-2 px-8 py-4 bg-blue-700 text-white rounded-xl font-bold shadow hover:bg-blue-800 transition-all text-lg"
                onClick={() => resetQuiz(activeSet)}
              >
                <FontAwesomeIcon icon={faRotateRight} />
                Try Again
              </button>
              <button
                className="flex items-center gap-2 px-8 py-4 bg-green-500 text-white rounded-xl font-bold shadow hover:bg-green-600 transition-all text-lg"
                onClick={() => navigate("/learn")}
              >
                <FontAwesomeIcon icon={faBook} />
                Học bài
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Quiz;
