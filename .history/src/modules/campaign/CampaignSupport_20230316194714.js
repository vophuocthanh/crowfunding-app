import React from "react";
import { Input } from "../../components/input";

const CampaignSupport = () => {
  return (
    <div>
      <h2 className="mb-5 text-lg font-semibold">Support</h2>
      <div className="flex flex-col items-center w-full px-6 bg-white shadow-1 py-7">
        <p className="mb-8 text-xl font-medium text-text3">
          Pledge without reward
        </p>
        <Input placeholder="$10"></Input>
      </div>
    </div>
  );
};

export default CampaignSupport;
