import React from "react";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {children}
    </div>
  );
}

export default Layout;
