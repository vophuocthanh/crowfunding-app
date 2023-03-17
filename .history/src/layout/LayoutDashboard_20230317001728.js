import React from "react";
import ReactModal from "react-modal";
import { Outlet } from "react-router";
import Overlay from "../components/common/Overlay";
import DashboardSidebar from "../modules/dashboard/DashboardSidebar";
import DashboardTopbar from "../modules/dashboard/DashboardTopbar";

const LayoutDashboard = ({ children }) => {
  return (
    <div className="min-h-screen p-10 bg-lite">
      <ReactModal
        isOpen
        overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center outline-none"
        className="modal-content w-full max-w-[521px] bg-white rounded-2xl"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, iusto
        nihil! Praesentium veritatis, laudantium explicabo sunt repudiandae vel
        at officia eligendi fugit, nostrum, eaque reiciendis nulla ipsum?
        Obcaecati, provident quis?
      </ReactModal>
      <Overlay></Overlay>
      <DashboardTopbar></DashboardTopbar>
      <div className="flex items-start gap-x-10">
        <DashboardSidebar></DashboardSidebar>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
