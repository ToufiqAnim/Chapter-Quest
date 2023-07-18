import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="bg-[#e6e3d6] ">
      <div className=" p-0 m-0">
        <Navbar />
        <div className="pt-8 px-8 w-full">
          <Header />
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
