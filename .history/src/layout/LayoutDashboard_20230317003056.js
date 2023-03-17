import React from "react";
import ReactModal from "react-modal";
import { Outlet } from "react-router";
import { Button } from "../components/button";
import Overlay from "../components/common/Overlay";
import DashboardSidebar from "../modules/dashboard/DashboardSidebar";
import DashboardTopbar from "../modules/dashboard/DashboardTopbar";

const LayoutDashboard = ({ children }) => {
  return (
    <div className="min-h-screen p-10 bg-lite">
      <ReactModal
        isOpen
        overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center"
        className="modal-content w-full max-w-[521px] bg-white rounded-2xl outline-none p-10 relative"
      >
        <button className="absolute z-10 flex items-center justify-center cursor-pointer right-10 top-[10px] text-text1 w-11 h-11 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="font-bold text-[25px] mb-10 text-center">
          Back this project
        </h2>
        <p className="">Enter the contribute amount</p>
        <input
          type="text"
          placeholder="$10"
          name="amount"
          className="w-full px-5 py-3 mb-5 text-lg font-medium border rounded border-strock"
        ></input>
        <p>Contribution are not associatied with perks</p>
        <Button className="bg-secondary"></Button>
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
