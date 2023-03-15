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
        <Link
          to="/"
          className="flex items-baseline gap-x-3 text-xs font-medium text-text3 mb-4"
        >
          <IconFolder></IconFolder>
          <span>Education</span>
        </Link>
        <h3 className="font-semibold text-text1 mb-1">
          Powered Kits Learning Boxes
        </h3>
        <p className="text-xs text-text3 mb-4">
          Fun, durable and reusable boxes with eco-friendly options.
        </p>
        <div className="flex items-start justify-between gap-x-5 mb-5">
          <div className="flex flex-col gap-y-1">
            <h4 className="text-text2 text-sm font-semibold">$2,000</h4>
            <span className="text-text4 text-xs">Raised of $1,900</span>
          </div>
          <div className="flex flex-col gap-y-1">
            <h4 className="text-text2 text-sm font-semibold">173</h4>
            <span className="text-text4 text-xs">Total backers</span>
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <img
            src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            alt=""
            className="w-8 h-8 rounded-full object-cover"
          ></img>
          <p className="text-text3 font-xs">
            By <span className="text-text2 font-semibold">Võ Phước Thạnh</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CampaignItem;
