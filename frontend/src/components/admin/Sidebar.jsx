import React from "react";
import "../../App.css";
import { NavLink } from "react-router-dom";
import { MdDashboardCustomize } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { MdGroups2 } from "react-icons/md";
const sidebar = () => {
  return (
    <div className="fluid-container ">
      {/* images logo */}
      <div className="p-2 text-white">
        <h2>MAAN</h2>
      </div>
      {/* links */}
      <div className="p-2">
        <NavLink
          to="/dashboard/admin"
          className=" nav-links d-flex align-item-center mb-2"
        >
          <MdDashboardCustomize size={26} />
          <div className="ms-3">Dashboard</div>
        </NavLink>
        <NavLink
          to="/dashboard/admin/home"
          className=" nav-links d-flex align-item-center mb-2"
        >
          <FaHome size={26} />
          <div className="ms-3">Home</div>
        </NavLink>
        <NavLink
          to="/dashboard/admin/products"
          className=" nav-links d-flex align-item-center mb-2"
        >
          <FaBox size={26} />
          <div className="ms-3">Products</div>
        </NavLink>
        <NavLink
          to="/dashboard/admin/products"
          className=" nav-links d-flex align-item-center mb-2"
        >
          <FaBox size={26} />
          <div className="ms-3">orders</div>
        </NavLink>
        <NavLink
          to="/dashboard/admin/shop"
          className=" nav-links d-flex align-item-center mb-2"
        >
          <FaBasketShopping size={26} />
          <div className="ms-3">shop</div>
        </NavLink>
        <NavLink
          to="/dashboard/admin/payment"
          className=" nav-links d-flex align-item-center mb-2"
        >
          <MdOutlinePayment size={26} />
          <div className="ms-3">Payments</div>
        </NavLink>
        <NavLink
          to="/dashboard/admin/users"
          className=" nav-links d-flex align-item-center mb-2"
        >
          <MdGroups2 size={26} />
          <div className="ms-3">Users</div>
        </NavLink>

        <NavLink
          to="/dashboard/admin/profile"
          className=" nav-links d-flex align-item-center mb-2"
        >
          <CgProfile size={26} />
          <div className="ms-3">Profile</div>
        </NavLink>
        <NavLink
          to="/dashboard/admin/logout"
          className=" nav-links d-flex align-item-center mb-2"
        >
          <RiLogoutBoxRFill size={26} />
          <div className="ms-3">LogOut</div>
        </NavLink>
      </div>
    </div>
  );
};

export default sidebar;
