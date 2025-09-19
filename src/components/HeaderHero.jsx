import { useNavigate } from "react-router-dom";

function HeaderHero({ title, subtitle, badge }) {
  const navigate = useNavigate();

  return (
    <div
      className="relative overflow-hidden flex items-center justify-center w-full"
      style={{
        backgroundImage:
          "url(https://image.luatvietnam.vn/uploaded/twebp/images/original/2023/03/20/chu-nghia-duy-vat-bien-chung-la-mot-noi-dung-cot-loi-cua-triet-hoc-mac-lenin_2003181955.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <button
        onClick={() => {
          navigate("/");
        }}
        className="absolute top-8 left-8 z-30 bg-white bg-opacity-80 text-gray-800 px-5 py-2 rounded-full shadow hover:bg-opacity-100 transition font-semibold"
      >
        ← Quay lại
      </button>
      <div className="absolute inset-0 bg-black opacity-10 rounded-2xl"></div>
      <div className="max-w-6xl mx-auto text-center text-white text-shadow-2xs shadow-md relative z-10 w-full px-4">
        {badge ? (
          <div className="mb-6">
            <span className="inline-block bg-white text-black bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium mb-4">
              {badge}
            </span>
          </div>
        ) : null}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-shadow-2xl text-shadow-black">
          {title}
        </h1>
        {subtitle ? (
          <p className="text-xl text-white mt-4 max-w-3xl mx-auto">
            {subtitle}
          </p>
        ) : null}
        <div className="mt-8 flex justify-center">
          <div className="w-16 h-1 bg-white bg-opacity-30 rounded-full"></div>
        </div>
      </div>
      {/* Animated down arrow */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer"
        onClick={() => {
          window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
        }}
      >
        <svg
          className="animate-bounce w-8 h-8 text-white opacity-80"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}

export default HeaderHero;
