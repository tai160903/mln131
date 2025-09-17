import React from "react";

function BackToTop() {
  const handleClick = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full w-12 h-12 shadow-lg flex items-center justify-center"
      aria-label="Back to top"
      title="Lên đầu trang"
    >
      ↑
    </button>
  );
}

export default BackToTop;
