import React from "react";
import { NavLink } from "react-router-dom";
import {
  IconCampaign,
  IconDashboard,
  IconPayment,
  IconProfile,
  IconWithdraw,
} from "../../components/icons";
const sidebarLinks = [
  {
    icon: <IconDashboard></IconDashboard>,
    title: "Dashboard",
    url: "/",
  },
  {
    icon: <IconCampaign></IconCampaign>,
    title: "Campaign",
    url: "/campaign",
  },
  {
    icon: <IconPayment></IconPayment>,
    title: "Payment",
    url: "/payment",
  },
  {
    icon: <IconWithdraw></IconWithdraw>,
    title: "Withdraw",
    url: "/withdraw",
  },
  {
    icon: <IconProfile></IconProfile>,
    title: "Profile",
    url: "/profile",
  },
  {
    icon: <IconProfile></IconProfile>,
    title: "Profile",
    url: "/profile",
  },
];
const DashboardSidebar = () => {
  return (
    <div className="w-full md:w-[76px] rounded-3xl shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] px-[14px] py-10 bg-white flex flex-col">
      {sidebarLinks.map((link) => (
        <NavLink
          to={link.url}
          key={link.title}
          className="flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-3xl md:mb-8 text-icon-color"
        >
          <span>{link.icon}</span>
          <span className="md:hidden">{link.title}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default DashboardSidebar;
