import React, { Children } from "react";
import Sidebar from "./Sidebar";
import AdminHeader from "./AdminHeader";

const AdminLayout = ({ children }) => {
  return (
    <div className="d-flex vh-100">
      <div className="row vw-100 ">
        <div className="col-3 bg-dark">
          <Sidebar />
        </div>
        <div className="col-9 bg-light ">
          <AdminHeader />
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
