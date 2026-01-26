import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header.jsx";

const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
        {/*Body*/}
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10">
        Copyright 2026 Anipso Systems
      </div>
      {/*Footer*/}
    </div>
  );
};

export default AppLayout;
