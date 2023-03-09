import React from "react";
import AdminHeader from "./AdminHeader";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import "./css/Admin.css";

const HomeAdmin = () => {
  return (
    <>
      <AdminHeader />
      <Sidebar />
      <Dashboard />
    </>
  );
};

export default HomeAdmin;
