import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../components/input";

const CampaignSupport = () => {
  const { control } = useForm();
  return (
    <div>
      <h2 className="mb-5 text-lg font-semibold">Support</h2>
      <div className="flex flex-col items-center w-full px-6 bg-white shadow-1 py-7">
        <p className="mb-8 text-xl font-medium text-text3">
          Pledge without reward
        </p>
        <Input placeholder="$10" control={control} name="pedge"></Input>
      </div>
    </div>
  );
};

export default CampaignSupport;
