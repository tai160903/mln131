import React from "react";

function ConclusionCard({ children }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-100 card-hover">
      <h4 className="text-xl font-semibold text-gray-800 mb-3">Kết luận</h4>
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </div>
  );
}

export default ConclusionCard;
