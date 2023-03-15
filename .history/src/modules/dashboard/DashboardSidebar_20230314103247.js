import React from "react";
import { NavLink } from "react-router-dom";
import { IconDashboard } from "../../components/icons";
const sidebarLinks = [
  {
    icon: <IconDashboard></IconDashboard>,
    title: "Dashboard",
    url: "/",
  },
];
const DashboardSidebar = () => {
  return (
    <div className="w-full md:w-[76px] rounded-3xl shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] bg-white ">
      {sidebarLinks.map((link) => (
        <NavLink key={link.title}>
          {link.icon}
          {link.title}
        </NavLink>
      ))}
    </div>
  );
};

export default DashboardSidebar;
