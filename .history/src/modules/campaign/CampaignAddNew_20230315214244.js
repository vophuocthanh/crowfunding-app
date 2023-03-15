import React from "react";
import { useForm } from "react-hook-form";
import FormGroup from "../../components/common/FormGroup";
import FormRow from "../../components/common/FormRow";
import { Input } from "../../components/input";
import { Label } from "../../components/label";

const CampaignAddNew = () => {
  const { handleSubmit, control } = useForm();
  return (
    <div className="bg-white rounded-xl py-10 px-[66px]">
      <div className="text-center">
        <h1 className="py-4 px-14 bg-text4 bg-opacity-10 rounded-xl font-bold text-[25px] inline-block mb-10">
          Start a Campaign 🚀
        </h1>
        <form>
          <FormRow>
            <FormGroup>
              <Label>Campaign Title *</Label>
              <Input control={control} name="title"></Input>
            </FormGroup>
          </FormRow>
        </form>
      </div>
    </div>
  );
};

export default CampaignAddNew;
