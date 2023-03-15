import React from "react";

const DashboardSearch = () => {
  return (
    <div className="relative">
      <div className="bg-white rounded-full shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] p-2 w-full flex items-center ">
        <div className="flex-1 px-5">
          <input
            type="text"
            className="w-full text-sm bg-transparent placeholder:text-text4 text-text1"
            placeholder="Do fundrise now"
          />
        </div>
        <button className="w-[72px] rounded-full bg-primary text-white h-10 flex items-center justify-center flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      <div className="search-results w-[843px] bg-white absolute top-full left-0 z-50 translate-x-5">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia nisi cum
        exercitationem dolores cumque, officia consectetur! Laborum iusto
        inventore voluptate itaque possimus, reprehenderit quasi aut impedit
        necessitatibus maiores, minima laudantium?
      </div>
    </div>
  );
};

export default DashboardSearch;
