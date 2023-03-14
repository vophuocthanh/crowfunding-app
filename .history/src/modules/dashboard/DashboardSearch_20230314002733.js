import React from "react";

const DashboardSearch = () => {
  return (
    <div className="bg-white rounded-full shadow-[10px_10px_20px_rgba(218, 213, 213, 0.15)] p-2 w-full max-w-[458px] flex items-center">
      <input
        type="text"
        className="bg-transparent text-sm placeholder:text-text4 text-text1"
        placeholder="Do fundrise now"
      />
    </div>
  );
};

export default DashboardSearch;
