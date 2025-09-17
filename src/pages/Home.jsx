import Layout from "../components/Layout";
import HeaderHero from "../components/HeaderHero";
import TOC from "../components/TOC";
import HistorySection from "../components/HistorySection";
import BackToTop from "../components/BackToTop";

function Home() {
  return (
    <Layout>
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
            { href: "#dm-hinh-thanh", label: "- Sự hình thành và phát triển" },
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

          {/* Subsection 1 */}
          <div className="ml-4 border-l-4 border-blue-200 pl-6 mb-8">
            <h3
              className="text-2xl font-semibold text-gray-700 mb-6"
              id="dm-quan-niem"
            >
              1. Dân chủ và sự ra đời, phát triển của dân chủ
            </h3>

            {/* Part a */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 mb-6">
              <h4
                className="text-xl font-semibold text-gray-800 mb-4 flex items-center"
                id="dm-quan-niem"
              >
                <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  a
                </span>
                Quan niệm về dân chủ
              </h4>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 card-hover">
                  <h5 className="font-semibold text-gray-800 mb-3 text-lg">
                    Nguồn gốc và ý nghĩa ban đầu:
                  </h5>
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

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 card-hover">
                  <h5
                    className="font-semibold text-gray-800 mb-4 text-lg flex items-center"
                    id="dm-mac-lenin"
                  >
                    <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">
                      M-L
                    </span>
                    Quan điểm Chủ nghĩa Mác - Lênin về dân chủ:
                  </h5>
                  <div className="space-y-4">
                    <div className=" p-4 rounded-r-lg">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">
                            Là sản phẩm và thành quả của đấu tranh giai cấp vì
                            các giá trị tiến bộ của nhân loại.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">
                            Là một hình thức tổ chức nhà nước của giai cấp cầm
                            quyền.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">
                            Là một trong những nguyên tắc hoạt động của các tổ
                            chức chính trị - xã hội
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div className="flex-1">
                            <span className="text-gray-700 font-medium">
                              Nội dung cơ bản:
                            </span>
                            <ul className="mt-2 ml-4 space-y-2">
                              <li className="flex items-start">
                                <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-gray-700">
                                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded font-medium">
                                    Dân chủ là quyền lực thuộc về nhân dân
                                  </span>
                                  , nhân dân là chủ của nhà nước, và bộ máy nhà
                                  nước phải hoạt động "vì nhân dân, do nhân dân
                                  và vì xã hội mà phục vụ".
                                </span>
                              </li>
                              <li className="flex items-start">
                                <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-gray-700">
                                  Là một{" "}
                                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded font-medium">
                                    hình thức hay hình thái nhà nước
                                  </span>
                                  , một chế độ chính trị hay chế độ dân chủ.
                                </span>
                              </li>
                              <li className="flex items-start">
                                <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-gray-700">
                                  Là một{" "}
                                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded font-medium">
                                    nguyên tắc
                                  </span>{" "}
                                  dân chủ, kết hợp với nguyên tắc tập trung dân
                                  chủ trong tổ chức và quản lý xã hội.
                                </span>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">
                            Chủ nghĩa Mác - Lênin coi dân chủ là{" "}
                            <span className="bg-red-100 text-red-800 px-2 py-1 rounded font-medium">
                              mục tiêu, tiền đề và phương tiện
                            </span>{" "}
                            để đạt tới tự do, giải phóng con người, giai cấp và
                            xã hội.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">
                            Dân chủ là{" "}
                            <span className="bg-red-100 text-red-800 px-2 py-1 rounded font-medium">
                              phạm trù lịch sử
                            </span>{" "}
                            (với tư cách là hình thức chế độ chính trị) nhưng là{" "}
                            <span className="bg-red-100 text-red-800 px-2 py-1 rounded font-medium">
                              phạm trù vĩnh viễn
                            </span>{" "}
                            (với tư cách là giá trị xã hội).
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 card-hover">
                  <h5
                    className="font-semibold text-gray-800 mb-4 text-lg flex items-center"
                    id="dm-hcm"
                  >
                    <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">
                      HCM
                    </span>
                    Quan điểm của Chủ tịch Hồ Chí Minh:
                  </h5>
                  <div className="space-y-4">
                    <div className=" p-4 rounded-r-lg">
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div className="flex-1">
                            <span className="text-gray-700">
                              Dân chủ là một{" "}
                              <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded font-medium">
                                giá trị nhân loại chung
                              </span>
                              :
                            </span>
                            <blockquote className="mt-2 ml-4 italic text-gray-600 border-l-2 border-orange-300 pl-4">
                              "Dân là chủ, dân là dân làm chủ". "Nước ta là nước
                              dân chủ, địa vị cao nhất là dân, vì dân là chủ".
                            </blockquote>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div className="flex-1">
                            <span className="text-gray-700">
                              Dân chủ là một{" "}
                              <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded font-medium">
                                thể chế chính trị, một chế độ xã hội
                              </span>
                              :
                            </span>
                            <blockquote className="mt-2 ml-4 italic text-gray-600 border-l-2 border-orange-300 pl-4">
                              "Chế độ ta là chế độ dân chủ, tức là nhân dân là
                              người chủ, mà Chính phủ là người đầy tớ trung
                              thành của nhân dân".
                            </blockquote>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">
                            Mọi quyền hạn đều thuộc về nhân dân, nhân dân là chủ
                            xã hội trên mọi lĩnh vực, đặc biệt là kinh tế và
                            chính trị.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div className="flex-1">
                            <span className="text-gray-700">
                              <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded font-medium">
                                Chủ trương của Đảng Cộng sản Việt Nam
                              </span>
                              : Xây dựng và phát huy quyền làm chủ của nhân dân,
                              quán triệt tư tưởng "
                              <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded font-medium">
                                lấy dân làm gốc
                              </span>
                              ". Dân chủ xã hội chủ nghĩa được phát triển, đảm
                              bảo quyền lực thuộc về nhân dân thông qua Nhà nước
                              và các hình thức dân chủ trực tiếp, đồng thời phải
                              đi đôi với kỷ luật, kỷ cương và được thể chế hóa
                              bằng pháp luật.
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
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

            {/* Part b */}
            <HistorySection />
          </div>

          {/* Dân chủ xã hội chủ nghĩa */}
          <div
            className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-blue-200 card-hover"
            id="dm-ii"
          >
            <h3 className="text-2xl font-bold text-blue-700 mb-4">
              II. Dân chủ xã hội chủ nghĩa
            </h3>
            <div className="space-y-4">
              <div id="dm-hinh-thanh">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  Sự hình thành và phát triển
                </h4>
                <p className="text-gray-700">
                  Dân chủ xã hội chủ nghĩa bắt đầu phôi thai từ Công xã Pari
                  (1871) nhưng được xác lập chính thức với Cách mạng Tháng Mười
                  Nga năm 1917 và sự ra đời của nhà nước xã hội chủ nghĩa đầu
                  tiên. Đây là một bước phát triển mới về chất của dân chủ, kế
                  thừa và phát triển các giá trị dân chủ trước đó.
                </p>
              </div>
              <div id="dm-nguyen-tac">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  Nguyên tắc và mục tiêu
                </h4>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>
                    Không ngừng mở rộng dân chủ, nâng cao mức độ giải phóng cho
                    người lao động, thu hút họ tham gia tự giác vào quản lý nhà
                    nước và xã hội.
                  </li>
                  <li>
                    Dân chủ sẽ dần tiêu vong tính chính trị và trở thành "thói
                    quen" tự quản lý khi xã hội đạt trình độ phát triển cao,
                    không còn giai cấp (khi xã hội đạt tới chủ nghĩa cộng sản
                    hoàn thiện).
                  </li>
                  <li>
                    Kế thừa chọn lọc các giá trị dân chủ trước đó, đặc biệt là
                    Chế độ tư bản chủ nghĩa.
                  </li>
                </ul>
              </div>
              <div id="dm-dac-diem">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  Đặc điểm tóm lược
                </h4>
                <p className="text-gray-700">
                  Dân chủ xã hội chủ nghĩa là nền dân chủ cao hơn về chất so với
                  Chế độ tư bản chủ nghĩa, trong đó mọi quyền lực thuộc về nhân
                  dân, dân là chủ và dân làm chủ. Dân chủ và pháp luật thống
                  nhất biện chứng, được thực hiện thông qua nhà nước pháp quyền
                  xã hội chủ nghĩa dưới sự lãnh đạo của Đảng Cộng sản.
                </p>
              </div>
              <div id="dm-khai-niem">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  a) Khái niệm dân chủ xã hội chủ nghĩa
                </h4>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>
                    V.I. Lênin khẳng định "chuyên chính vô sản so với bất cứ chế
                    độ Chế độ tư bản chủ nghĩa nào, cũng dân chủ hơn gấp triệu
                    lần". Điều này nhấn mạnh sự khác biệt về bản chất.
                  </li>
                  <li>
                    Dân chủ xã hội chủ nghĩa không phải là chế độ dân chủ cho
                    tất cả mọi người, mà là dân chủ đối với quần chúng lao động
                    và bị bóc lột, vì lợi ích của đa số. Nó bao quát tất cả các
                    mặt của đời sống xã hội.
                  </li>
                </ul>
              </div>
              <div id="dm-ban-chat">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  b) Bản chất của nền dân chủ xã hội chủ nghĩa
                </h4>
                <p className="text-gray-700 font-medium mb-2">
                  Nền dân chủ xã hội chủ nghĩa có ba bản chất cơ bản:
                </p>
                <ul className="list-decimal ml-6 text-gray-700 space-y-2">
                  <li>
                    <span className="font-semibold">Bản chất chính trị:</span>
                    <ul className="list-disc ml-6 mt-1 space-y-1">
                      <li>
                        Là sự thực hiện quyền lực của nhân dân trên mọi lĩnh vực
                        xã hội, dưới sự lãnh đạo duy nhất của một đảng của giai
                        cấp công nhân.
                      </li>
                      <li>
                        Là sự lãnh đạo chính trị của giai cấp công nhân thông
                        qua đảng của mình đối với toàn xã hội, nhằm thực hiện
                        quyền lực và lợi ích của toàn thể nhân dân, trong đó có
                        giai cấp công nhân.
                      </li>
                      <li>
                        Đảng Cộng sản đại diện cho trí tuệ và lợi ích của giai
                        cấp công nhân, nhân dân lao động và toàn dân tộc.
                      </li>
                      <li>
                        Nhân dân lao động là người làm chủ các quan hệ chính trị
                        trong xã hội, được tham gia rộng rãi vào công việc quản
                        lý nhà nước, góp ý xây dựng chính sách, pháp luật.
                      </li>
                      <li>
                        Dân chủ xã hội chủ nghĩa vừa mang bản chất giai cấp công
                        nhân, vừa có tính nhân dân rộng rãi và tính dân tộc sâu
                        sắc.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-semibold">Bản chất kinh tế:</span>
                    <ul className="list-disc ml-6 mt-1 space-y-1">
                      <li>
                        Dựa trên chế độ sở hữu xã hội về những tư liệu sản xuất
                        chủ yếu của toàn xã hội.
                      </li>
                      <li>
                        Mục tiêu là đáp ứng sự phát triển ngày càng cao của lực
                        lượng sản xuất và nhu cầu vật chất, tinh thần của nhân
                        dân lao động.
                      </li>
                      <li>
                        Bản chất kinh tế này chi phối quá trình chính trị, phát
                        triển sản xuất và nâng cao đời sống xã hội dưới sự lãnh
                        đạo của Đảng và quản lý của nhà nước xã hội chủ nghĩa.
                      </li>
                      <li>
                        Coi lợi ích kinh tế của người lao động là động lực cơ
                        bản nhất thúc đẩy kinh tế - xã hội phát triển.
                      </li>
                      <li>
                        Thực hiện chế độ công hữu về tư liệu sản xuất chủ yếu và
                        chế độ phân phối lợi ích theo kết quả lao động là chủ
                        yếu.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-semibold">
                      Bản chất tư tưởng - văn hóa - xã hội:
                    </span>
                    <ul className="list-disc ml-6 mt-1 space-y-1">
                      <li>
                        Lấy tư tưởng Mác - Lênin làm hệ tư tưởng chủ đạo đối với
                        mọi hình thái và ý thức xã hội khác.
                      </li>
                      <li>
                        Kế thừa và phát huy những tinh hoa văn hóa truyền thống
                        dân tộc, đồng thời tiếp thu những giá trị tư tưởng - văn
                        hóa, văn minh, tiến bộ mà nhân loại đã đạt được.
                      </li>
                      <li>
                        Nhân dân được làm chủ những giá trị văn hóa tinh thần,
                        nâng cao trình độ văn hóa và phát triển cá nhân.
                      </li>
                      <li>
                        Có sự kết hợp hài hòa lợi ích giữa cá nhân, tập thể và
                        toàn xã hội.
                      </li>
                      <li>
                        Được thực hiện bằng nhà nước pháp quyền xã hội chủ
                        nghĩa, là kết quả hoạt động tự giác của quần chúng nhân
                        dân dưới sự lãnh đạo của giai cấp công nhân và Đảng Cộng
                        sản.
                      </li>
                      <li>
                        Vai trò lãnh đạo của Đảng là điều kiện quyết định để dân
                        chủ xã hội chủ nghĩa ra đời, tồn tại và phát triển.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg p-8 border border-gray-100 card-hover">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                📚
              </div>
              <div className="text-left">
                <p className="text-gray-800 text-xl font-semibold">
                  Tài liệu học tập - MLN131
                </p>
                <p className="text-gray-600 text-sm">
                  Chương 4: Dân chủ xã hội và nhà nước xã hội chủ nghĩa
                </p>
              </div>
            </div>
            <p className="text-gray-600 text-lg">
              Nội dung được trình bày một cách khoa học và dễ hiểu
            </p>
            <div className="mt-4 flex justify-center space-x-4 text-sm text-gray-500">
              <span>🎯 Lý thuyết</span>
              <span>📖 Thực tiễn</span>
              <span>🔍 Phân tích</span>
            </div>
          </div>
        </div>
      </div>
      <BackToTop />
    </Layout>
  );
}

export default Home;
