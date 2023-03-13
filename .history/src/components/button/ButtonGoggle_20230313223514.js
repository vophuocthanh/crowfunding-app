import React from "react";

const ButtonGoggle = ({ text = "Sign up with google" }) => {
  return (
    <button className="flex items-center justify-center py-4 gap-x-3 w-full border border-strock rounded-xl text-text2 text-base font-semibold mb-5 dark:text-white dark:border-darkStroke">
      <img srcSet="./icon-google.png 2x" alt="icon-google" />
      <span></span>
    </button>
  );
};

export default ButtonGoggle;
