import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import logo from "../assets/QSpiders_image.png";

const Dashboard = () => {
  return (
    <>
      <nav id="mainNavBar">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="" />
          </NavLink>
        </div>

        <div>
          <NavLink to="/">Home</NavLink>

          <NavLink to="addemp">Add Employee</NavLink>

          <NavLink to="viewall">View All</NavLink>
        </div>
      </nav>
      <hr />
      <main id="main">
        <Outlet />
      </main>
    </>
  );
};

export default Dashboard;
