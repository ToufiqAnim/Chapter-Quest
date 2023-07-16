import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const MainLayout = () => {
  return (
    <div className="flex p-0 m-0">
      <Navbar />
      <div className="pt-8 px-8">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
