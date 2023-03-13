import React from "react";
import { useController } from "react-hook-form";

const Input = (props) => {
  const { control, name, type } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: {},
  });
  return (
    <div className="relative">
      <input
        type={type}
        className="w-full py-4 px-6border border-strock rounded-xl text-sm font-medium text-text1 placeholder:text-text4"
      />
    </div>
  );
};

export default Input;
