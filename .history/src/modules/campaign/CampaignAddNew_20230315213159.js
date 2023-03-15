import React from "react";
import { useForm } from "react-hook-form";

const CampaignAddNew = () => {
  const { handle } = useForm();
  return (
    <div className="bg-white rounded-xl py-10 px-[66px]">
      <div className="text-center">
        <h1 className="py-4 px-14 bg-text4 bg-opacity-10 rounded-xl font-bold text-[25px] inline-block mb-10">
          Start a Campaign 🚀
        </h1>
      </div>
    </div>
  );
};

export default CampaignAddNew;
