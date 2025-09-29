import React from "react";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="w-full h-full">
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Layout;
