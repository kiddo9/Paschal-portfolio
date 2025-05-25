import React from "react";
import Nav from "./../components/NavLink";
import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <div className="bg-[#151515]  ">
      <div className="flex flex-col space-y-10 w-full md:max-w-4xl mx-auto px-4 py-4 sm:px-6 relative">
        <Nav />
        <div className="h-full">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
