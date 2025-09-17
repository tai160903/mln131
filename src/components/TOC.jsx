import React from "react";

function TOC({ items }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-8 border border-gray-100">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Mục lục</h3>
      <ul className="grid md:grid-cols-2 gap-3 text-blue-700">
        {items?.map((it) => (
          <li key={it.href}>
            <a href={it.href} className="hover:underline">
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TOC;
