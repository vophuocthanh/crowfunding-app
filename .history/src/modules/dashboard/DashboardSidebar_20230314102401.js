import React from "react";
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
    <div>
      {sidebarLinks.map((link) => (
        <div key={link.title}>
          {link.icon}
          {link.title}
        </div>
      ))}
    </div>
  );
};

export default DashboardSidebar;
