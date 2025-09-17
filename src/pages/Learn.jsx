import Layout from "../components/Layout";
import HeaderHero from "../components/HeaderHero";
import TOC from "../components/TOC";
import BackToTop from "../components/BackToTop";

function Home() {
  return (
    <Layout>
      <div>
        <HeaderHero
          title="Chương 4: Dân chủ xã hội và nhà nước xã hội chủ nghĩa"
          subtitle="Tìm hiểu về nền tảng lý thuyết và thực tiễn của dân chủ trong xã hội hiện đại"
          badge="📖 Tài liệu học tập MLN131"
        />

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <TOC
            items={[
              { href: "#dm-i", label: "I. Dân chủ là gì?" },
              { href: "#dm-ii", label: "II. Dân chủ xã hội chủ nghĩa" },
              { href: "#dm-quan-niem", label: "- Quan niệm về dân chủ" },
              { href: "#dm-nguyen-tac", label: "- Nguyên tắc và mục tiêu" },
              { href: "#dm-mac-lenin", label: "- Quan điểm Mác - Lênin" },
              {
                href: "#dm-hinh-thanh",
                label: "- Sự hình thành và phát triển",
              },
              { href: "#dm-hcm", label: "- Quan điểm Hồ Chí Minh" },
              { href: "#dm-dac-diem", label: "- Đặc điểm tóm lược" },
              { href: "#dm-ket-luan", label: "- Kết luận" },
              { href: "#dm-khai-niem", label: "- Khái niệm dân chủ XHCN" },
              { href: "#dm-ban-chat", label: "- Bản chất dân chủ XHCN" },
            ]}
            smoothScroll={true}
          />

          {/* Section I */}
          <div
            className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100 card-hover"
            id="dm-i"
          >
            <div className="flex items-center mb-6" id="section-overview">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                I
              </div>
              <h2 className="text-3xl font-bold text-gray-800">
                Dân chủ và dân chủ xã hội chủ nghĩa
              </h2>
            </div>

            {/* Quan niệm về dân chủ */}
            <div className="mb-8" id="dm-quan-niem">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                1. Quan niệm về dân chủ
              </h3>

              {/* Nguồn gốc */}
              <div className="mb-6 bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                <h4 className="text-lg font-bold text-yellow-700 mb-3">
                  Nguồn gốc và ý nghĩa ban đầu:
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Thuật ngữ "dân chủ" xuất hiện từ khoảng{" "}
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded font-medium">
                    thế kỷ VII - VI trước Công nguyên
                  </span>
                  . Nó có nguồn gốc từ cụm từ Hy Lạp cổ đại{" "}
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded font-medium">
                    "demoskratos"
                  </span>
                  , trong đó "demos" là nhân dân và "kratos" là cai trị, nghĩa
                  là "nhân dân cai trị".
                </p>
              </div>

              {/* Quan điểm Mác-Lênin */}
              <div
                className="mb-6 bg-red-50 rounded-xl p-6 border border-red-200"
                id="dm-mac-lenin"
              >
                <h4 className="text-lg font-bold text-red-600 mb-3">
                  Quan điểm Chủ nghĩa Mác - Lênin về dân chủ:
                </h4>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Là sản phẩm và thành quả của đấu tranh giai cấp vì các giá
                    trị tiến bộ của nhân loại.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Là một hình thức tổ chức nhà nước của giai cấp cầm quyền.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Là một trong những nguyên tắc hoạt động của các tổ chức
                    chính trị - xã hội.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <span className="text-gray-700 font-medium">
                        Nội dung cơ bản:
                      </span>
                      <ul className="mt-2 ml-4 space-y-2">
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="bg-red-100 text-red-800 px-2 py-1 rounded font-medium">
                            Dân chủ là quyền lực thuộc về nhân dân
                          </span>
                          , nhân dân là chủ của nhà nước.
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Là một{" "}
                          <span className="bg-red-100 text-red-800 px-2 py-1 rounded font-medium">
                            hình thức hay hình thái nhà nước
                          </span>
                          , một chế độ chính trị.
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Là một{" "}
                          <span className="bg-red-100 text-red-800 px-2 py-1 rounded font-medium">
                            nguyên tắc
                          </span>{" "}
                          dân chủ, kết hợp với nguyên tắc tập trung dân chủ.
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Chủ nghĩa Mác - Lênin coi dân chủ là{" "}
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded font-medium">
                      mục tiêu, tiền đề và phương tiện
                    </span>{" "}
                    để đạt tới tự do, giải phóng con người.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Dân chủ là{" "}
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded font-medium">
                      phạm trù lịch sử
                    </span>{" "}
                    (hình thức chế độ chính trị) nhưng là{" "}
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded font-medium">
                      phạm trù vĩnh viễn
                    </span>{" "}
                    (giá trị xã hội).
                  </li>
                </ul>
              </div>

              {/* Quan điểm Hồ Chí Minh */}
              <div
                className="bg-orange-50 rounded-xl p-6 border border-orange-200"
                id="dm-hcm"
              >
                <h4 className="text-lg font-bold text-orange-600 mb-3">
                  Quan điểm của Chủ tịch Hồ Chí Minh:
                </h4>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      Dân chủ là một{" "}
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded font-medium">
                        giá trị nhân loại chung
                      </span>
                      :
                      <blockquote className="mt-2 ml-4 italic text-gray-600 border-l-2 border-orange-300 pl-4">
                        "Dân là chủ, dân là dân làm chủ". "Nước ta là nước dân
                        chủ, địa vị cao nhất là dân, vì dân là chủ".
                      </blockquote>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      Dân chủ là một{" "}
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded font-medium">
                        thể chế chính trị, một chế độ xã hội
                      </span>
                      :
                      <blockquote className="mt-2 ml-4 italic text-gray-600 border-l-2 border-orange-300 pl-4">
                        "Chế độ ta là chế độ dân chủ, tức là nhân dân là người
                        chủ, mà Chính phủ là người đầy tớ trung thành của nhân
                        dân".
                      </blockquote>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Mọi quyền hạn đều thuộc về nhân dân, nhân dân là chủ xã hội
                    trên mọi lĩnh vực, đặc biệt là kinh tế và chính trị.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded font-medium">
                      Chủ trương của Đảng Cộng sản Việt Nam
                    </span>
                    : Xây dựng và phát huy quyền làm chủ của nhân dân, quán
                    triệt tư tưởng "
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded font-medium">
                      lấy dân làm gốc
                    </span>
                    ".
                  </li>
                </ul>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-100 card-hover">
              <h4
                className="text-xl font-semibold text-gray-800 mb-3"
                id="dm-ket-luan"
              >
                Kết luận
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Dân chủ là một tiến trình lịch sử liên tục phát triển. Dân chủ
                tư sản mở rộng pháp quyền và quyền công dân nhưng còn giới hạn
                bởi lợi ích giai cấp. Dân chủ xã hội chủ nghĩa kế thừa có chọn
                lọc các giá trị dân chủ trước đó, đặt quyền lực thực sự vào tay
                đa số nhân dân, hướng tới mở rộng tự do và năng lực làm chủ của
                con người.
              </p>
            </div>

            {/* Sự ra đời và phát triển của dân chủ qua lịch sử */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                2. Sự ra đời và phát triển của các hình thái dân chủ qua các
                thời kỳ lịch sử
              </h3>
              {/* Dân chủ nguyên thủy */}
              <div
                className="mb-6 bg-blue-50 rounded-xl p-6 border border-blue-200"
                id="period-1"
              >
                <h4 className="text-lg font-bold text-blue-600 mb-3">
                  Dân chủ nguyên thủy:
                </h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Nhu cầu dân chủ xuất hiện từ sớm trong xã hội tự quản của công
                  xã thị tộc, bộ lạc, dưới hình thức "dân chủ nguyên thủy" hay
                  "dân chủ quân sự", đặc trưng bởi việc nhân dân bầu thủ lĩnh và
                  tham gia quyết định qua "Đại hội nhân dân".
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Không nhà nước – không giai cấp: Tất cả đều bình đẳng, chưa
                    có phân biệt giàu nghèo.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Dân chủ trực tiếp: Mọi thành viên thị tộc/bộ lạc cùng họp
                    bàn, quyết định vấn đề chung.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Quyền lực tập thể: Sức mạnh nằm ở cộng đồng, cá nhân phải
                    gắn liền với lợi ích chung.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Trưởng lão uy tín, không cai trị: Người đứng đầu chỉ được
                    kính trọng, không có quyền lực áp đặt.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Phân phối công bằng: Sản phẩm lao động được chia đều, dựa
                    trên nhu cầu.
                  </li>
                </ul>
              </div>

              {/* Dân chủ nô lệ */}
              <div
                className="mb-6 bg-purple-50 rounded-xl p-6 border border-purple-200"
                id="period-2"
              >
                <h4 className="text-lg font-bold text-purple-600 mb-3">
                  Dân chủ nô lệ:
                </h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Ra đời khi chế độ tư hữu và giai cấp xuất hiện, thay thế dân
                  chủ nguyên thủy. Nền dân chủ này chỉ thực hiện cho thiểu số
                  (chủ nô và tầng lớp tự do); nô lệ không có quyền tham gia công
                  việc nhà nước.
                </p>
                <details className="ml-2">
                  <summary className="cursor-pointer font-bold text-purple-700 text-lg py-3 px-4 bg-gradient-to-r from-purple-100 to-violet-100 rounded-xl mb-3 shadow-md hover:shadow-lg transition-all duration-200 hover:from-purple-200 hover:to-violet-200">
                    ✨ 5 yếu tố đặc trưng
                  </summary>
                  <ul className="list-decimal ml-6 text-gray-700 space-y-2 mt-2">
                    <li>
                      Dân chủ “một nửa”: Chỉ dành cho chủ nô và công dân tự do,
                      tuyệt đối loại trừ nô lệ, phụ nữ, ngoại kiều.
                    </li>
                    <li>
                      Dân chủ trực tiếp đầu tiên: Athens – nơi công dân nam trực
                      tiếp tham gia họp bàn, biểu quyết các vấn đề lớn.
                    </li>
                    <li>
                      Pháp luật – công cụ giai cấp: Nhà nước và luật lệ được lập
                      ra chủ yếu để bảo vệ quyền lợi chủ nô.
                    </li>
                    <li>
                      Hạt giống tư tưởng chính trị: Nhiều triết gia (Socrates,
                      Plato, Aristotle, Cicero…) đặt nền móng lý luận về dân
                      chủ, pháp quyền.
                    </li>
                    <li>
                      Nghịch lý lịch sử: Vừa khai sinh nền dân chủ có tổ chức,
                      vừa duy trì chế độ nô lệ tàn khốc.
                    </li>
                  </ul>
                </details>
              </div>
              {/* Độc tài chuyên chế phong kiến */}
              <div
                className="bg-red-50 border-l-4 border-red-400 p-6 mb-6"
                id="period-3"
              >
                <h5 className="text-xl font-semibold text-red-800 mb-3">
                  3. Độc tài chuyên chế phong kiến
                </h5>
                <p className="text-gray-700 mb-4">
                  Chế độ dân chủ nô lệ bị xóa bỏ và thay bằng chế độ độc tài
                  chuyên chế phong kiến trong thời kỳ xã hội phong kiến.
                </p>
                <details className="ml-2">
                  <summary className="cursor-pointer font-bold text-red-700 text-lg py-3 px-4 bg-gradient-to-r from-red-100 to-rose-100 rounded-xl mb-3 shadow-md hover:shadow-lg transition-all duration-200 hover:from-red-200 hover:to-rose-200">
                    ✨ 5 yếu tố đặc trưng
                  </summary>
                  <ul className="list-decimal ml-6 text-gray-700 space-y-2 mt-2">
                    <li>
                      Quyền lực tuyệt đối: Vua là “thiên tử”, “con trời”, nắm
                      toàn bộ quyền lập pháp, hành pháp, tư pháp.
                    </li>
                    <li>
                      Tôn giáo & ý thức hệ: Thường dựa vào tôn giáo/triết học
                      (Nho giáo, Kitô giáo, Hồi giáo…) để củng cố “thiên mệnh”
                      cai trị.
                    </li>
                    <li>
                      Xã hội đẳng cấp: Quý tộc – tăng lữ – nông dân – nô lệ/tá
                      điền; trật tự cứng nhắc, khó thay đổi.
                    </li>
                    <li>
                      Pháp luật phục tùng vua: Luật lệ chủ yếu là công cụ duy
                      trì trật tự và củng cố quyền lực tối cao.
                    </li>
                    <li>
                      Nghịch lý phát triển: Vừa duy trì bảo thủ, áp bức, vừa sản
                      sinh ra nhiều thành tựu văn hóa, kiến trúc, khoa học thời
                      trung đại.
                    </li>
                  </ul>
                </details>
              </div>
              {/* Dân chủ tư sản */}
              <div
                className="bg-gradient-to-br from-indigo-50 to-blue-100 rounded-2xl shadow-xl p-8 mb-8 border-2 border-indigo-200 hover:border-indigo-300 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
                id="period-4"
              >
                <h5 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-700 bg-clip-text text-transparent mb-4 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full mr-3"></span>
                  Dân chủ tư sản
                </h5>
                <p className="text-gray-700 mb-4">
                  Giai cấp tư sản với tư tưởng tự do, công bằng, dân chủ đã mở
                  đường cho sự ra đời nền dân chủ tư sản vào cuối thế kỷ XIV -
                  đầu thế kỷ XV. Chủ nghĩa Mác - Lênin công nhận đây là một bước
                  tiến lớn nhưng thực tế vẫn là nền dân chủ của thiểu số do dựa
                  trên chế độ tư hữu về tư liệu sản xuất.
                </p>
                <details className="ml-2">
                  <summary className="cursor-pointer font-bold text-indigo-700 text-lg py-3 px-4 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-xl mb-3 shadow-md hover:shadow-lg transition-all duration-200 hover:from-indigo-200 hover:to-blue-200">
                    ✨ 5 yếu tố đặc trưng
                  </summary>
                  <ul className="list-decimal ml-6 text-gray-700 space-y-2 mt-2">
                    <li>
                      Ra đời từ cách mạng: Xuất phát từ những cuộc cách mạng tư
                      sản (Anh thế kỷ XVII, Mỹ 1776, Pháp 1789…) lật đổ chế độ
                      phong kiến.
                    </li>
                    <li>
                      Nguyên tắc pháp quyền: Nhà nước tổ chức theo Hiến pháp,
                      tam quyền phân lập (lập pháp – hành pháp – tư pháp).
                    </li>
                    <li>
                      Quyền công dân: Đề cao các quyền “tự do – bình đẳng – bác
                      ái”, nhân quyền, quyền tư hữu, quyền bầu cử (ban đầu chỉ
                      dành cho giai cấp tư sản, sau mở rộng dần).
                    </li>
                    <li>
                      Cơ chế đại diện: Dân chủ gián tiếp thông qua bầu cử nghị
                      viện, quốc hội, thay vì tham gia trực tiếp.
                    </li>
                    <li>
                      Hai mặt đối lập: Tiến bộ vì mở rộng dân chủ và pháp quyền,
                      nhưng vẫn hạn chế khi duy trì bất công giai cấp (tư sản
                      thống trị, công nhân và nông dân bị áp bức).
                    </li>
                  </ul>
                </details>
              </div>
              {/* Dân chủ vô sản (XHCN) */}
              <div
                className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl shadow-xl p-8 mb-8 border-2 border-green-200 hover:border-green-300 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
                id="period-5"
              >
                <h5 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent mb-4 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full mr-3"></span>
                  Dân chủ vô sản (Dân chủ xã hội chủ nghĩa)
                </h5>
                <p className="text-gray-700 mb-4">
                  Do những hạn chế của dân chủ tư sản, tất yếu xuất hiện một nền
                  dân chủ mới, cao hơn.
                </p>
                <details className="ml-2">
                  <summary className="cursor-pointer font-bold text-green-700 text-lg py-3 px-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl mb-3 shadow-md hover:shadow-lg transition-all duration-200 hover:from-green-200 hover:to-emerald-200">
                    ✨ 5 yếu tố đặc trưng
                  </summary>
                  <ul className="list-decimal ml-6 text-gray-700 space-y-2 mt-2">
                    <li>
                      Ra đời từ cách mạng: Xuất hiện sau các cuộc cách mạng vô
                      sản (điển hình: Cách mạng Tháng Mười Nga 1917).
                    </li>
                    <li>
                      Quyền lực thuộc về đa số: Nhà nước của giai cấp công nhân
                      và nhân dân lao động, thay thế quyền thống trị của thiểu
                      số tư sản.
                    </li>
                    <li>
                      Nguyên tắc bình đẳng: Đề cao quyền lợi tập thể, xóa bỏ đặc
                      quyền giai cấp, tiến tới “mọi người làm theo năng lực,
                      hưởng theo lao động”.
                    </li>
                    <li>
                      Hình thức thực hiện: Kết hợp dân chủ trực tiếp (tham gia,
                      giám sát) và dân chủ đại diện (thông qua Quốc hội, Hội
                      đồng nhân dân).
                    </li>
                    <li>
                      Mục tiêu dài hạn: Xây dựng xã hội xã hội chủ nghĩa, tiến
                      tới cộng sản chủ nghĩa – nơi dân chủ đạt đến mức toàn
                      diện, không còn nhà nước theo nghĩa truyền thống.
                    </li>
                  </ul>
                </details>
              </div>
            </div>
          </div>

          {/* Section II */}
          <div
            className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100 card-hover"
            id="dm-ii"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                II
              </div>
              <h2 className="text-3xl font-bold text-gray-800">
                Dân chủ xã hội chủ nghĩa
              </h2>
            </div>

            {/* Sự hình thành và phát triển */}
            <div className="mb-8" id="dm-hinh-thanh">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                1. Sự hình thành và phát triển
              </h3>
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <p className="text-gray-700 leading-relaxed">
                  Dân chủ xã hội chủ nghĩa bắt đầu từ{" "}
                  <span className="font-semibold text-blue-600">
                    Công xã Pari (1871)
                  </span>
                  , xác lập với{" "}
                  <span className="font-semibold text-red-600">
                    Cách mạng Tháng Mười Nga 1917
                  </span>{" "}
                  và sự ra đời của nhà nước XHCN đầu tiên. Là bước phát triển
                  mới về chất, kế thừa các giá trị dân chủ trước đó.
                </p>
              </div>
            </div>

            {/* Nguyên tắc và mục tiêu */}
            <div className="mb-8" id="dm-nguyen-tac">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                2. Nguyên tắc và mục tiêu
              </h3>
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Không ngừng mở rộng dân chủ, giải phóng người lao động, thu
                    hút tham gia quản lý nhà nước & xã hội.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Dân chủ dần trở thành "thói quen" tự quản lý khi xã hội phát
                    triển cao, không còn giai cấp.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Kế thừa chọn lọc các giá trị dân chủ trước đó, đặc biệt là
                    chế độ tư bản chủ nghĩa.
                  </li>
                </ul>
              </div>
            </div>

            {/* Đặc điểm tóm lược */}
            <div className="mb-8" id="dm-dac-diem">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                3. Đặc điểm tóm lược
              </h3>
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <p className="text-gray-700 leading-relaxed">
                  Nền dân chủ cao hơn về chất so với chế độ tư bản chủ nghĩa,
                  mọi quyền lực thuộc về nhân dân. Dân chủ & pháp luật thống
                  nhất biện chứng, thực hiện qua nhà nước pháp quyền XHCN dưới
                  sự lãnh đạo của Đảng Cộng sản.
                </p>
              </div>
            </div>

            {/* Khái niệm */}
            <div className="mb-8" id="dm-khai-niem">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                4. Khái niệm dân chủ XHCN
              </h3>
              <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      <span className="font-semibold text-orange-600">
                        Lênin:
                      </span>{" "}
                      "chuyên chính vô sản so với bất cứ chế độ tư bản chủ nghĩa
                      nào, cũng dân chủ hơn gấp triệu lần".
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Dân chủ XHCN không phải cho tất cả mọi người, mà là cho quần
                    chúng lao động & bị bóc lột, vì lợi ích đa số.
                  </li>
                </ul>
              </div>
            </div>

            {/* Bản chất */}
            <div className="mb-8" id="dm-ban-chat">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                5. Bản chất dân chủ XHCN
              </h3>

              {/* Chính trị */}
              <div className="mb-6 bg-red-50 rounded-xl p-6 border border-red-200">
                <h4 className="text-lg font-bold text-red-600 mb-3">
                  Về chính trị:
                </h4>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Quyền lực nhân dân, lãnh đạo bởi Đảng của giai cấp công
                    nhân.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Đảng đại diện trí tuệ & lợi ích công nhân, nhân dân lao
                    động, toàn dân tộc.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Nhân dân làm chủ quan hệ chính trị, tham gia quản lý nhà
                    nước, góp ý chính sách, pháp luật.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Bản chất giai cấp công nhân, tính nhân dân rộng rãi, tính
                    dân tộc sâu sắc.
                  </li>
                </ul>
              </div>

              {/* Kinh tế */}
              <div className="mb-6 bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h4 className="text-lg font-bold text-blue-600 mb-3">
                  Về kinh tế:
                </h4>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Sở hữu xã hội về tư liệu sản xuất chủ yếu.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Đáp ứng phát triển lực lượng sản xuất & nhu cầu vật chất,
                    tinh thần của nhân dân lao động.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Chi phối chính trị, phát triển sản xuất, nâng cao đời sống
                    xã hội.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Lợi ích kinh tế người lao động là động lực phát triển.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Công hữu tư liệu sản xuất chủ yếu, phân phối lợi ích theo
                    kết quả lao động.
                  </li>
                </ul>
              </div>

              {/* Tư tưởng - văn hóa - xã hội */}
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <h4 className="text-lg font-bold text-purple-600 mb-3">
                  Về tư tưởng - văn hóa - xã hội:
                </h4>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Tư tưởng Mác - Lênin chủ đạo cho mọi hình thái ý thức xã
                    hội.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Kế thừa, phát huy văn hóa truyền thống dân tộc, tiếp thu giá
                    trị tiến bộ nhân loại.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Nhân dân làm chủ giá trị văn hóa tinh thần, nâng cao trình
                    độ, phát triển cá nhân.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Kết hợp hài hòa lợi ích cá nhân, tập thể, xã hội.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Thực hiện bằng nhà nước pháp quyền XHCN, hoạt động tự giác
                    của nhân dân dưới sự lãnh đạo của Đảng.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Vai trò lãnh đạo của Đảng quyết định sự ra đời, tồn tại,
                    phát triển dân chủ XHCN.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <BackToTop />
      </div>
    </Layout>
  );
}

export default Home;
