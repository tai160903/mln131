import GridMotion from "../components/GridMotion";
import { Link } from "react-router-dom";

const items = [
  "https://nguoikesu.com/images/wiki/ho-chi-minh/685a42c662d17e49b9e6e46aae1d1177.jpeg",
  "https://nguoikesu.com/images/wiki/ho-chi-minh/685a42c662d17e49b9e6e46aae1d1177.jpeg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRAUCWEKk_8svvsdWLYwlByoYcyjeq7IUy3Q&s",
  "https://images2.thanhnien.vn/zoom/686_429/Uploaded/hoangnam/2022_11_02/lanh-tu-dang-bolshevich-v-i-lenin-tuyen-bo-thanh-lap-chinh-quyen-xo-viet-ngay-7111917-anh-tl-2860.jpeg",
  "https://storage.googleapis.com/onthisinhvien.appspot.com/images/594519805-1692614460497-img_62fb1cbac4847.jpg",
  "https://images2.thanhnien.vn/zoom/686_429/Uploaded/hoangnam/2022_11_02/lanh-tu-dang-bolshevich-v-i-lenin-tuyen-bo-thanh-lap-chinh-quyen-xo-viet-ngay-7111917-anh-tl-2860.jpeg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKSKJ9vFVHRXM_IAnatnyR_IXOKQDV-CGKV4F8eeu1Y6oYa72RvJZgv9hupjKScLJMbBqe1jipyStZmsxPcTIqmool4VAysDF-cO2I1jBadGgAVCGRCo42Mf3AF7aa-5j2uPFUs4RASMM/s1600/tranh+c%25E1%25BB%2595+%25C4%2591%25E1%25BB%2596ng.jpg",
  "https://images2.thanhnien.vn/zoom/686_429/Uploaded/hoangnam/2022_11_02/lanh-tu-dang-bolshevich-v-i-lenin-tuyen-bo-thanh-lap-chinh-quyen-xo-viet-ngay-7111917-anh-tl-2860.jpeg",
  "https://lyluanchinhtri-statics.melisoft.vn/2023/10/26/anh_1._cnxh_1698315961584.jpg",
  "https://vuongquocanh.com/wp-content/uploads/2017/08/Richard-Coeur-de-Lion.jpg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKSKJ9vFVHRXM_IAnatnyR_IXOKQDV-CGKV4F8eeu1Y6oYa72RvJZgv9hupjKScLJMbBqe1jipyStZmsxPcTIqmool4VAysDF-cO2I1jBadGgAVCGRCo42Mf3AF7aa-5j2uPFUs4RASMM/s1600/tranh+c%25E1%25BB%2595+%25C4%2591%25E1%25BB%2596ng.jpg",
  "https://storage.googleapis.com/onthisinhvien.appspot.com/images/594519805-1692614460497-img_62fb1cbac4847.jpg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKSKJ9vFVHRXM_IAnatnyR_IXOKQDV-CGKV4F8eeu1Y6oYa72RvJZgv9hupjKScLJMbBqe1jipyStZmsxPcTIqmool4VAysDF-cO2I1jBadGgAVCGRCo42Mf3AF7aa-5j2uPFUs4RASMM/s1600/tranh+c%25E1%25BB%2595+%25C4%2591%25E1%25BB%2596ng.jpg",
  "https://images2.thanhnien.vn/zoom/686_429/Uploaded/hoangnam/2022_11_02/lanh-tu-dang-bolshevich-v-i-lenin-tuyen-bo-thanh-lap-chinh-quyen-xo-viet-ngay-7111917-anh-tl-2860.jpeg",
  "https://8486fef5bc.vws.vegacdn.vn/uploadimages/haydung/thcsnguyenhuetanphu/anhhaydung/vinh-biet_89202488.jpg",
  "https://nguoikesu.com/images/wiki/ho-chi-minh/685a42c662d17e49b9e6e46aae1d1177.jpeg",
  "https://8486fef5bc.vws.vegacdn.vn/uploadimages/haydung/thcsnguyenhuetanphu/anhhaydung/vinh-biet_89202488.jpg",
  "https://images2.thanhnien.vn/zoom/686_429/Uploaded/hoangnam/2022_11_02/lanh-tu-dang-bolshevich-v-i-lenin-tuyen-bo-thanh-lap-chinh-quyen-xo-viet-ngay-7111917-anh-tl-2860.jpeg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKSKJ9vFVHRXM_IAnatnyR_IXOKQDV-CGKV4F8eeu1Y6oYa72RvJZgv9hupjKScLJMbBqe1jipyStZmsxPcTIqmool4VAysDF-cO2I1jBadGgAVCGRCo42Mf3AF7aa-5j2uPFUs4RASMM/s1600/tranh+c%25E1%25BB%2595+%25C4%2591%25E1%25BB%2596ng.jpg",
  "https://8486fef5bc.vws.vegacdn.vn/uploadimages/haydung/thcsnguyenhuetanphu/anhhaydung/vinh-biet_89202488.jpg",
  "https://images2.thanhnien.vn/zoom/686_429/Uploaded/hoangnam/2022_11_02/lanh-tu-dang-bolshevich-v-i-lenin-tuyen-bo-thanh-lap-chinh-quyen-xo-viet-ngay-7111917-anh-tl-2860.jpeg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKSKJ9vFVHRXM_IAnatnyR_IXOKQDV-CGKV4F8eeu1Y6oYa72RvJZgv9hupjKScLJMbBqe1jipyStZmsxPcTIqmool4VAysDF-cO2I1jBadGgAVCGRCo42Mf3AF7aa-5j2uPFUs4RASMM/s1600/tranh+c%25E1%25BB%2595+%25C4%2591%25E1%25BB%2596ng.jpg",
  "https://storage.googleapis.com/onthisinhvien.appspot.com/images/594519805-1692614460497-img_62fb1cbac4847.jpg",
  "https://nguoikesu.com/images/wiki/ho-chi-minh/685a42c662d17e49b9e6e46aae1d1177.jpeg",
  "https://images2.thanhnien.vn/zoom/686_429/Uploaded/hoangnam/2022_11_02/lanh-tu-dang-bolshevich-v-i-lenin-tuyen-bo-thanh-lap-chinh-quyen-xo-viet-ngay-7111917-anh-tl-2860.jpeg",
  "https://storage.googleapis.com/onthisinhvien.appspot.com/images/594519805-1692614460497-img_62fb1cbac4847.jpg",
  "https://8486fef5bc.vws.vegacdn.vn/uploadimages/haydung/thcsnguyenhuetanphu/anhhaydung/vinh-biet_89202488.jpg",
];

function Home() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-50 relative">
      <GridMotion items={items} />
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20">
        <div className="bg-transparent rounded-2xl shadow-xl px-8 py-6 mb-8 border-2 border-gray-300 flex flex-col items-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-2 text-shadow-black text-shadow-md text-white">
            Chương 4
          </h2>
          <div className="text-2xl font-bold text-shadow-black text-shadow-md text-white text-center leading-snug mb-2">
            DÂN CHỦ XÃ HỘI CHỦ NGHĨA
            <br />
            VÀ NHÀ NƯỚC XÃ HỘI CHỦ NGHĨA
          </div>
          <div className="flex gap-8">
            <button
              className="relative inline-block overflow-hidden rounded-[20px] pointer-events-auto bg-white border border-red-500 text-red-600 text-center text-[18px] py-[18px] px-[32px] font-bold shadow-lg flex items-center justify-center"
              style={{}}
            >
              <Link to="/learn" className="text-red-600 font-bold">
                Lý thuyết
              </Link>
            </button>
            <button
              className="relative inline-block overflow-hidden rounded-[20px] pointer-events-auto bg-white border border-red-500 text-red-600 text-center text-[18px] py-[18px] px-[32px] font-bold shadow-lg flex items-center justify-center"
              style={{}}
            >
              <Link to="/quiz" className="text-red-600 font-bold">
                Ôn tập
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
