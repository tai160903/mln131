import React from "react";

function HeaderHero({ title, subtitle, badge }) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {badge ? (
          <div className="mb-6">
            <span className="inline-block bg-white text-black bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium mb-4">
              {badge}
            </span>
          </div>
        ) : null}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          {title}
        </h1>
        {subtitle ? (
          <p className="text-xl text-blue-100 mt-4 max-w-3xl mx-auto">
            {subtitle}
          </p>
        ) : null}
        <div className="mt-8 flex justify-center">
          <div className="w-16 h-1 bg-white bg-opacity-30 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default HeaderHero;
