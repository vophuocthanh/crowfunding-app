import React from "react";
import { Link } from "react-router-dom";
import { IconFolder } from "../../components/icons";

const CampaignItem = () => {
  return (
    <div>
      <div className="h-[158px] ">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="px-5 py-4">
        <Link className="flex items-center gap-x-3">
          <IconFolder></IconFolder>
          <span>Education</span>
        </Link>
      </div>
    </div>
  );
};

export default CampaignItem;
