import React from "react";
import { Link } from "react-router-dom";
import { IconFolder } from "../../components/icons";
import CampCategory from "./parts/CampCategory";
import CampDesc from "./parts/CampDesc";
import CampMeta from "./parts/CampMeta";

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
        <CampCategory text="Education"></CampCategory>
        <h3 className="font-semibold text-text1 mb-1">
          Powered Kits Learning Boxes
        </h3>
        <CampDesc>
          Fun, durable and reusable boxes with eco-friendly options.
        </CampDesc>
        <div className="flex items-start justify-between gap-x-5 mb-5">
          <CampMeta></CampMeta>
          <CampMeta></CampMeta>
        </div>
        <div className="flex items-center gap-x-3">
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
