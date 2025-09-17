import React from "react";
import Layout from "../components/Layout";
import HeaderHero from "../components/HeaderHero";
import TOC from "../components/TOC";
import PeriodCard from "../components/PeriodCard";
import HistorySection from "../components/HistorySection";
import ConclusionCard from "../components/ConclusionCard";
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
            { href: "#section-overview", label: "I. Dân chủ là gì?" },
            { href: "#section-history", label: "II. Sự ra đời và phát triển" },
            { href: "#period-1", label: "1. Dân chủ nguyên thủy" },
            { href: "#period-2", label: "2. Dân chủ nô lệ" },
            { href: "#period-3", label: "3. Độc tài chuyên chế phong kiến" },
            { href: "#period-4", label: "4. Dân chủ tư sản" },
            { href: "#period-5", label: "III. Dân chủ vô sản (XHCN)" },
          ]}
        />
        {/* Table of Contents */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8 border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Mục lục</h3>
          <ul className="grid md:grid-cols-2 gap-3 text-blue-700">
            <li>
              <a href="#section-overview" className="hover:underline">
                I. Dân chủ là gì?
              </a>
            </li>
            <li>
              <a href="#section-history" className="hover:underline">
                II. Sự ra đời và phát triển của dân chủ
              </a>
            </li>
            <li>
              <a href="#period-1" className="hover:underline">
                1. Dân chủ nguyên thủy
              </a>
            </li>
            <li>
              <a href="#period-2" className="hover:underline">
                2. Dân chủ nô lệ
              </a>
            </li>
            <li>
              <a href="#period-3" className="hover:underline">
                3. Độc tài chuyên chế phong kiến
              </a>
            </li>
            <li>
              <a href="#period-4" className="hover:underline">
                4. Dân chủ tư sản
              </a>
            </li>
            <li>
              <a href="#period-5" className="hover:underline">
                III. Dân chủ vô sản (XHCN)
              </a>
            </li>
          </ul>
        </div>
        {/* Section I */}
        <div
          className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100 card-hover"
          id="section-i"
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
              id="section-history"
            >
              1. Dân chủ và sự ra đời, phát triển của dân chủ
            </h3>

            {/* Part a */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 mb-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
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
                  <h5 className="font-semibold text-gray-800 mb-4 text-lg flex items-center">
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
                  <h5 className="font-semibold text-gray-800 mb-4 text-lg flex items-center">
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
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
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
            <div
              className="bg-gradient-to-r from-gray-50 to-green-50 rounded-xl p-6"
              id="section-history"
            >
              <h4 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  b
                </span>
                II. Sự ra đời và Phát triển của Dân chủ qua các thời kỳ lịch sử
              </h4>

              {/* Historical Periods */}
              <div className="space-y-8">
                {/* Period 1: Primitive Democracy */}
                <div
                  className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 card-hover"
                  id="period-1"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                      1
                    </div>
                    <h5 className="text-xl font-semibold text-gray-800">
                      Dân chủ nguyên thủy
                    </h5>
                  </div>
                  <div className="ml-14 space-y-4">
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">
                            Nhu cầu dân chủ xuất hiện từ sớm trong xã hội tự
                            quản của công xã thị tộc, bộ lạc, dưới hình thức
                            "dân chủ nguyên thủy" hay "dân chủ quân sự".
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">
                            Đặc trưng bởi việc nhân dân bầu thủ lĩnh và tham gia
                            quyết định thông qua "Đại hội nhân dân".
                          </span>
                        </li>
                      </ul>
                    </div>
                    <details className="bg-blue-100 p-4 rounded-lg">
                      <summary className="font-semibold text-blue-800 mb-3 cursor-pointer select-none">
                        5 Yếu tố đặc trưng của Dân chủ nguyên thủy
                      </summary>
                      <ol className="mt-3 space-y-2">
                        <li className="flex items-start">
                          <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                            1
                          </span>
                          <span className="text-gray-700">
                            <span className="font-medium">
                              Không nhà nước – không giai cấp:
                            </span>{" "}
                            Tất cả đều bình đẳng, chưa có phân biệt giàu nghèo,
                            chưa tồn tại quyền lực cưỡng chế.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                            2
                          </span>
                          <span className="text-gray-700">
                            <span className="font-medium">
                              Dân chủ trực tiếp:
                            </span>{" "}
                            Mọi thành viên thị tộc/bộ lạc cùng họp bàn, quyết
                            định vấn đề chung.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                            3
                          </span>
                          <span className="text-gray-700">
                            <span className="font-medium">
                              Quyền lực tập thể:
                            </span>{" "}
                            Sức mạnh nằm ở cộng đồng, cá nhân phải gắn liền với
                            lợi ích chung.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                            4
                          </span>
                          <span className="text-gray-700">
                            <span className="font-medium">
                              Trưởng lão uy tín, không cai trị:
                            </span>{" "}
                            Người đứng đầu chỉ được kính trọng, không có quyền
                            lực áp đặt.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                            5
                          </span>
                          <span className="text-gray-700">
                            <span className="font-medium">
                              Phân phối công bằng:
                            </span>{" "}
                            Sản phẩm lao động được chia đều, dựa trên nhu cầu,
                            nhằm bảo đảm sự sống còn của cả cộng đồng.
                          </span>
                        </li>
                      </ol>
                    </details>
                  </div>
                </div>

                {/* Period 2: Slave Democracy */}
                <div
                  className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 card-hover"
                  id="period-2"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                      2
                    </div>
                    <h5 className="text-xl font-semibold text-gray-800">
                      Dân chủ nô lệ
                    </h5>
                  </div>
                  <div className="ml-14 space-y-4">
                    <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">
                            Ra đời khi chế độ tư hữu và giai cấp xuất hiện, thay
                            thế dân chủ nguyên thủy.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">
                            Nền dân chủ này chỉ thực hiện cho thiểu số (chủ nô
                            và tầng lớp tự do); nô lệ không có quyền tham gia
                            công việc nhà nước.
                          </span>
                        </li>
                      </ul>
                    </div>
                    <details className="bg-purple-100 p-4 rounded-lg">
                      <summary className="font-semibold text-purple-800 mb-3 cursor-pointer select-none">
                        5 Yếu tố đặc trưng của Dân chủ chủ nô
                      </summary>
                      <ol className="mt-3 space-y-2">
                        <li className="flex items-start">
                          <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                            1
                          </span>
                          <span className="text-gray-700">
                            <span className="font-medium">
                              Dân chủ "một nửa":
                            </span>{" "}
                            Chỉ dành cho chủ nô và công dân tự do, tuyệt đối
                            loại trừ nô lệ, phụ nữ, ngoại kiều.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                            2
                          </span>
                          <span className="text-gray-700">
                            <span className="font-medium">
                              Dân chủ trực tiếp đầu tiên:
                            </span>{" "}
                            Athens là nơi công dân nam trực tiếp tham gia họp
                            bàn, biểu quyết các vấn đề lớn.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                            3
                          </span>
                          <span className="text-gray-700">
                            <span className="font-medium">
                              Pháp luật – công cụ giai cấp:
                            </span>{" "}
                            Nhà nước và luật lệ được lập ra chủ yếu để bảo vệ
                            quyền lợi chủ nô.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                            4
                          </span>
                          <span className="text-gray-700">
                            <span className="font-medium">
                              Hạt giống tư tưởng chính trị:
                            </span>{" "}
                            Nhiều triết gia (Socrates, Plato, Aristotle,
                            Cicero…) đã đặt nền móng lý luận về dân chủ, pháp
                            quyền.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                            5
                          </span>
                          <span className="text-gray-700">
                            <span className="font-medium">
                              Nghịch lý lịch sử:
                            </span>{" "}
                            Vừa khai sinh nền dân chủ có tổ chức, vừa duy trì
                            chế độ nô lệ tàn khốc.
                          </span>
                        </li>
                      </ol>
                    </details>
                  </div>
                </div>

                {/* Period 3: Feudal Despotism */}
                <div
                  className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 card-hover"
                  id="period-3"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                      3
                    </div>
                    <h5 className="text-xl font-semibold text-gray-800">
                      Độc tài chuyên chế phong kiến (Sự gián đoạn của dân chủ)
                    </h5>
                  </div>
                  <div className="ml-14 space-y-4">
                    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                      <p className="text-gray-700">
                        Chế độ dân chủ nô lệ bị xóa bỏ và thay bằng chế độ độc
                        tài chuyên chế phong kiến trong thời kỳ xã hội phong
                        kiến.
                      </p>
                    </div>
                    <details className="bg-red-100 p-4 rounded-lg">
                      <summary className="font-semibold text-red-800 mb-3 cursor-pointer select-none">
                        5 Yếu tố đặc trưng của Độc tài chuyên chế phong kiến
                      </summary>
                      <ol className="mt-3 space-y-2">
                        <li className="flex items-start">
                          <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                            1
                          </span>
                          <span className="text-gray-700">
                            <span className="font-medium">
                              Quyền lực tuyệt đối:
                            </span>{" "}
                            Vua là "thiên tử", "con trời", nắm toàn bộ quyền lập
                            pháp, hành pháp, tư pháp.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                            2
                          </span>
                          <span className="text-gray-700">
                            <span className="font-medium">
                              Tôn giáo & ý thức hệ:
                            </span>{" "}
                            Thường dựa vào tôn giáo/triết học (Nho giáo, Kitô
                            giáo, Hồi giáo…) để củng cố "thiên mệnh" cai trị.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                            3
                          </span>
                          <span className="text-gray-700">
                            <span className="font-medium">
                              Xã hội đẳng cấp:
                            </span>{" "}
                            Quý tộc – tăng lữ – nông dân – nô lệ/tá điền; trật
                            tự cứng nhắc, khó thay đổi.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                            4
                          </span>
                          <span className="text-gray-700">
                            <span className="font-medium">
                              Pháp luật phục tùng vua:
                            </span>{" "}
                            Luật lệ chủ yếu là công cụ duy trì trật tự và củng
                            cố quyền lực tối cao.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                            5
                          </span>
                          <span className="text-gray-700">
                            <span className="font-medium">
                              Nghịch lý phát triển:
                            </span>{" "}
                            Vừa duy trì bảo thủ, áp bức, vừa sản sinh ra nhiều
                            thành tựu văn hóa, kiến trúc, khoa học thời trung
                            đại.
                          </span>
                        </li>
                      </ol>
                    </details>
                  </div>
                </div>

                {/* Period 4: Bourgeois Democracy */}
                <div
                  className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 card-hover"
                  id="period-4"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                      4
                    </div>
                    <h5 className="text-xl font-semibold text-gray-800">
                      Dân chủ tư sản
                    </h5>
                  </div>
                  <div className="ml-14 space-y-4">
                    <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded-r-lg">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">
                            Giai cấp tư sản với tư tưởng tự do, công bằng, dân
                            chủ đã mở đường cho sự ra đời nền dân chủ tư sản vào
                            cuối thế kỷ XIV - đầu thế kỷ XV.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">
                            Chủ nghĩa Mác - Lênin công nhận đây là một bước tiến
                            lớn nhưng thực tế vẫn là nền dân chủ của thiểu số do
                            dựa trên chế độ tư hữu về tư liệu sản xuất.
                          </span>
                        </li>
                      </ul>
                    </div>
                    <details className="bg-indigo-100 p-4 rounded-lg">
                      <summary className="font-semibold text-indigo-800 mb-3 cursor-pointer select-none">
                        5 Yếu tố đặc trưng của Dân chủ tư sản
                      </summary>
                      <ol className="mt-3 space-y-2">
                        <li className="flex items-start">
                          <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                            1
                          </span>
                          <span className="text-gray-700">
                            <span className="font-medium">
                              Ra đời từ cách mạng:
                            </span>{" "}
                            Xuất phát từ những cuộc cách mạng tư sản (Anh thế kỷ
                            XVII, Mỹ 1776, Pháp 1789…) lật đổ chế độ phong kiến.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                            2
                          </span>
                          <span className="text-gray-700">
                            <span className="font-medium">
                              Nguyên tắc pháp quyền:
                            </span>{" "}
                            Nhà nước tổ chức theo Hiến pháp, thực hiện nguyên
                            tắc tam quyền phân lập (lập pháp – hành pháp – tư
                            pháp).
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                            3
                          </span>
                          <span className="text-gray-700">
                            <span className="font-medium">Quyền công dân:</span>{" "}
                            Đề cao các quyền "tự do – bình đẳng – bác ái", nhân
                            quyền, quyền tư hữu, quyền bầu cử (ban đầu chỉ dành
                            cho giai cấp tư sản, sau mở rộng dần).
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                            4
                          </span>
                          <span className="text-gray-700">
                            <span className="font-medium">
                              Cơ chế đại diện:
                            </span>{" "}
                            Dân chủ gián tiếp thông qua bầu cử nghị viện, quốc
                            hội, thay vì tham gia trực tiếp.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                            5
                          </span>
                          <span className="text-gray-700">
                            <span className="font-medium">
                              Hai mặt đối lập:
                            </span>{" "}
                            Tiến bộ vì mở rộng dân chủ và pháp quyền, nhưng vẫn
                            hạn chế khi duy trì bất công giai cấp (tư sản thống
                            trị, công nhân và nông dân bị áp bức).
                          </span>
                        </li>
                      </ol>
                    </details>
                  </div>
                </div>

                {/* Period 5: Proletarian Democracy */}
                <div
                  className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 card-hover"
                  id="period-5"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                      5
                    </div>
                    <h5
                      className="text-xl font-semibold text-gray-800"
                      id="section-iii"
                    >
                      III. Dân chủ vô sản (Dân chủ xã hội chủ nghĩa)
                    </h5>
                  </div>
                  <div className="ml-14 space-y-4">
                    <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">
                            Do những hạn chế của dân chủ tư sản, tất yếu xuất
                            hiện một nền dân chủ mới, cao hơn.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">
                            Dân chủ xã hội chủ nghĩa bắt đầu phôi thai từ Công
                            xã Pari (1871) nhưng được xác lập chính thức với
                            Cách mạng Tháng Mười Nga năm 1917 và sự ra đời của
                            nhà nước xã hội chủ nghĩa đầu tiên.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">
                            Đây là một bước phát triển mới về chất của dân chủ,
                            kế thừa và phát triển các giá trị dân chủ trước đó.
                          </span>
                        </li>
                      </ul>
                    </div>
                    <details className="bg-green-100 p-4 rounded-lg">
                      <summary className="font-semibold text-green-800 mb-3 cursor-pointer select-none">
                        5 Yếu tố đặc trưng của Dân chủ vô sản (XHCN)
                      </summary>
                      <ol className="mt-3 space-y-2">
                        <li className="flex items-start">
                          <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                            1
                          </span>
                          <span className="text-gray-700">
                            <span className="font-medium">
                              Ra đời từ cách mạng:
                            </span>{" "}
                            Xuất hiện sau các cuộc cách mạng vô sản (điển hình:
                            Cách mạng Tháng Mười Nga 1917).
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                            2
                          </span>
                          <span className="text-gray-700">
                            <span className="font-medium">
                              Quyền lực thuộc về đa số:
                            </span>{" "}
                            Nhà nước của giai cấp công nhân và nhân dân lao
                            động, thay thế quyền thống trị của thiểu số tư sản.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                            3
                          </span>
                          <span className="text-gray-700">
                            <span className="font-medium">
                              Nguyên tắc bình đẳng:
                            </span>{" "}
                            Đề cao quyền lợi tập thể, xóa bỏ đặc quyền giai cấp,
                            tiến tới "mọi người làm theo năng lực, hưởng theo
                            lao động".
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                            4
                          </span>
                          <span className="text-gray-700">
                            <span className="font-medium">
                              Hình thức thực hiện:
                            </span>{" "}
                            Kết hợp dân chủ trực tiếp (tham gia, giám sát) và
                            dân chủ đại diện (thông qua Quốc hội, Hội đồng nhân
                            dân).
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                            5
                          </span>
                          <span className="text-gray-700">
                            <span className="font-medium">
                              Mục tiêu dài hạn:
                            </span>{" "}
                            Xây dựng xã hội xã hội chủ nghĩa, tiến tới cộng sản
                            chủ nghĩa – nơi dân chủ đạt đến mức toàn diện, không
                            còn nhà nước theo nghĩa truyền thống.
                          </span>
                        </li>
                      </ol>
                    </details>
                  </div>
                </div>

                {/* Characteristics and Nature of Socialist Democracy */}
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 card-hover mt-8">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                      ⭐
                    </div>
                    <h5 className="text-xl font-semibold text-gray-800">
                      Đặc điểm và Bản chất của Dân chủ xã hội chủ nghĩa
                    </h5>
                  </div>

                  <div className="ml-14 space-y-6">
                    {/* Introduction */}
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">
                            <span className="font-medium">
                              V.I. Lênin khẳng định:
                            </span>{" "}
                            "chuyên chính vô sản so với bất cứ chế độ dân chủ tư
                            sản nào, cũng dân chủ hơn gấp triệu lần". Điều này
                            nhấn mạnh sự khác biệt về bản chất.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">
                            Dân chủ xã hội chủ nghĩa là{" "}
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded font-medium">
                              nền dân chủ cao hơn về chất
                            </span>{" "}
                            so với dân chủ tư sản, trong đó mọi quyền lực thuộc
                            về nhân dân, dân là chủ và dân làm chủ.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">
                            Nó không phải là chế độ dân chủ cho tất cả mọi
                            người, mà là dân chủ đối với quần chúng lao động và
                            bị bóc lột, vì lợi ích của đa số. Nó bao quát tất cả
                            các mặt của đời sống xã hội.
                          </span>
                        </li>
                      </ul>
                    </div>

                    {/* Three Basic Natures */}
                    <div className="space-y-6">
                      {/* Political Nature */}
                      <div className="bg-red-50 border border-red-200 rounded-lg p-5">
                        <h6 className="font-semibold text-red-800 mb-4 text-lg flex items-center">
                          <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                            1
                          </span>
                          Bản chất chính trị
                        </h6>
                        <ul className="space-y-2 ml-9">
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-700">
                              Là sự thực hiện quyền lực của nhân dân trên mọi
                              lĩnh vực xã hội, dưới sự lãnh đạo duy nhất của một
                              đảng của giai cấp công nhân.
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-700">
                              Là sự lãnh đạo chính trị của giai cấp công nhân
                              thông qua đảng của mình đối với toàn xã hội, nhằm
                              thực hiện quyền lực và lợi ích của toàn thể nhân
                              dân.
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-700">
                              Đảng Cộng sản đại diện cho trí tuệ và lợi ích của
                              giai cấp công nhân, nhân dân lao động và toàn dân
                              tộc.
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-700">
                              Nhân dân lao động là người làm chủ các quan hệ
                              chính trị trong xã hội, được tham gia rộng rãi vào
                              công việc quản lý nhà nước.
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-700">
                              Vừa mang bản chất giai cấp công nhân, vừa có tính
                              nhân dân rộng rãi và tính dân tộc sâu sắc.
                            </span>
                          </li>
                        </ul>
                      </div>

                      {/* Economic Nature */}
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                        <h6 className="font-semibold text-blue-800 mb-4 text-lg flex items-center">
                          <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                            2
                          </span>
                          Bản chất kinh tế
                        </h6>
                        <ul className="space-y-2 ml-9">
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-700">
                              Dựa trên chế độ sở hữu xã hội về những tư liệu sản
                              xuất chủ yếu của toàn xã hội.
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-700">
                              Mục tiêu là đáp ứng sự phát triển ngày càng cao
                              của lực lượng sản xuất và nhu cầu vật chất, tinh
                              thần của nhân dân lao động.
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-700">
                              Bản chất kinh tế này chi phối quá trình chính trị,
                              phát triển sản xuất và nâng cao đời sống xã hội
                              dưới sự lãnh đạo của Đảng và quản lý của nhà nước
                              xã hội chủ nghĩa.
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-700">
                              Coi lợi ích kinh tế của người lao động là động lực
                              cơ bản nhất thúc đẩy kinh tế - xã hội phát triển.
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-700">
                              Thực hiện chế độ công hữu về tư liệu sản xuất chủ
                              yếu và chế độ phân phối lợi ích theo kết quả lao
                              động là chủ yếu.
                            </span>
                          </li>
                        </ul>
                      </div>

                      {/* Ideological-Cultural-Social Nature */}
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-5">
                        <h6 className="font-semibold text-purple-800 mb-4 text-lg flex items-center">
                          <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                            3
                          </span>
                          Bản chất tư tưởng - văn hóa - xã hội
                        </h6>
                        <ul className="space-y-2 ml-9">
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-700">
                              Lấy tư tưởng Mác - Lênin làm hệ tư tưởng chủ đạo
                              đối với mọi hình thái và ý thức xã hội khác.
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-700">
                              Kế thừa và phát huy những tinh hoa văn hóa truyền
                              thống dân tộc, đồng thời tiếp thu những giá trị tư
                              tưởng - văn hóa, văn minh, tiến bộ mà nhân loại đã
                              đạt được.
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-700">
                              Nhân dân được làm chủ những giá trị văn hóa tinh
                              thần, nâng cao trình độ văn hóa và phát triển cá
                              nhân.
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-700">
                              Có sự kết hợp hài hòa lợi ích giữa cá nhân, tập
                              thể và toàn xã hội.
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-700">
                              Được thực hiện bằng nhà nước pháp quyền xã hội chủ
                              nghĩa, là kết quả hoạt động tự giác của quần chúng
                              nhân dân dưới sự lãnh đạo của giai cấp công nhân
                              và Đảng Cộng sản.
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-700">
                              Vai trò lãnh đạo của Đảng là điều kiện quyết định
                              để dân chủ xã hội chủ nghĩa ra đời, tồn tại và
                              phát triển.
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
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
