import React from "react";

function PeriodCard({
  id,
  index,
  title,
  color,
  introPoints = [],
  factorsTitle,
  factors = [],
}) {
  const colorMap = {
    blue: {
      badge: "bg-blue-500",
      dot: "bg-blue-500",
      soft: "bg-blue-50 border-blue-400",
      soft2: "bg-blue-100",
      text: "text-blue-800",
    },
    purple: {
      badge: "bg-purple-500",
      dot: "bg-purple-500",
      soft: "bg-purple-50 border-purple-400",
      soft2: "bg-purple-100",
      text: "text-purple-800",
    },
    red: {
      badge: "bg-red-500",
      dot: "bg-red-500",
      soft: "bg-red-50 border-red-400",
      soft2: "bg-red-100",
      text: "text-red-800",
    },
    indigo: {
      badge: "bg-indigo-500",
      dot: "bg-indigo-500",
      soft: "bg-indigo-50 border-indigo-400",
      soft2: "bg-indigo-100",
      text: "text-indigo-800",
    },
    green: {
      badge: "bg-green-500",
      dot: "bg-green-500",
      soft: "bg-green-50 border-green-400",
      soft2: "bg-green-100",
      text: "text-green-800",
    },
  };
  const c = colorMap[color] || colorMap.blue;

  return (
    <div
      className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 card-hover"
      id={id}
    >
      <div className="flex items-center mb-4">
        <div
          className={`w-10 h-10 ${c.badge} text-white rounded-full flex items-center justify-center text-lg font-bold mr-4`}
        >
          {index}
        </div>
        <h5 className="text-xl font-semibold text-gray-800">{title}</h5>
      </div>
      <div className="ml-14 space-y-4">
        <div className={`${c.soft} p-4 rounded-r-lg border-l-4`}>
          <ul className="space-y-2">
            {introPoints.map((p, i) => (
              <li key={i} className="flex items-start">
                <span
                  className={`w-2 h-2 ${c.dot} rounded-full mt-2 mr-3 flex-shrink-0`}
                ></span>
                <span className="text-gray-700">{p}</span>
              </li>
            ))}
          </ul>
        </div>
        {factors?.length ? (
          <details className={`${c.soft2} p-4 rounded-lg`}>
            <summary
              className={`${c.text} font-semibold mb-3 cursor-pointer select-none`}
            >
              {factorsTitle}
            </summary>
            <ol className="mt-3 space-y-2">
              {factors.map((f, i) => (
                <li key={i} className="flex items-start">
                  <span
                    className={`${c.badge} text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5`}
                  >
                    {i + 1}
                  </span>
                  <span className="text-gray-700">{f}</span>
                </li>
              ))}
            </ol>
          </details>
        ) : null}
      </div>
    </div>
  );
}

export default PeriodCard;
