import React from "react";
import PeriodCard from "./PeriodCard";
import TOC from "./TOC";
import { periods, socialistFactors } from "../data/periods";

function HistorySection() {
  return (
    <div
      className="bg-gradient-to-r from-gray-50 to-green-50 rounded-xl p-6"
      id="section-history"
    >
      <h4 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
        <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
          b
        </span>
        Sự ra đời, phát triển của dân chủ
      </h4>

      <div className="space-y-8">
        {periods.map((p) => (
          <PeriodCard key={p.id} {...p} />
        ))}

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
              Chế độ tư bản chủ nghĩa
            </h5>
          </div>
          <div className="ml-14 space-y-4">
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
              <ul className="space-y-2">
                {socialistFactors.introPoints.map((t, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <details className="bg-green-100 p-4 rounded-lg">
              <summary className="font-semibold text-green-800 mb-3 cursor-pointer select-none">
                5 Yếu tố đặc trưng của Chế độ tư bản chủ nghĩa (XHCN)
              </summary>
              <ol className="mt-3 space-y-2">
                {socialistFactors.factors.map((f, i) => (
                  <li key={i} className="flex items-start">
                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-gray-700">{f}</span>
                  </li>
                ))}
              </ol>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistorySection;
