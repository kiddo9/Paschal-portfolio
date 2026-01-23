import React from "react";
import Nav from "./../components/NavLink"; // Ensure this matches your filename
import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    // min-h-screen ensures the background covers the whole screen
    // flex-col + justify-between pushes the footer to the bottom
    <div className="min-h-screen bg-[#151515] text-gray-300 font-sans flex flex-col">
      <div className="w-full max-w-5xl mx-auto px-6 flex flex-col min-h-screen">
        {/* Navigation */}
        <Nav />

        {/* Main Content: Grow fills available space */}
        <main className="flex-grow py-10 flex flex-col justify-center">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
