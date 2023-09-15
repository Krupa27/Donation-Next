"use client";

import React from "react";
import { useState } from "react";

const FaqsAccordion = ({ label, content }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`bg-white ${expanded && "bg-[#79aedc46] "}`}>
      <div
        onClick={() => setExpanded((prev) => !prev)}
        className="flex justify-between items-center border-b cursor-pointer "
      >
        <h3 className="font-playFair font-semibold flex justify-between py-5 px-3 items-center cursor-pointer z-10">
          {label}
        </h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-6 h-6 ease-in-out mr-5 cursor-pointer ${
            expanded && "rotate-90 transition-all "
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      <p
        className={`border-b font-montserrat font-light ${
          expanded ? "max-h-max opacity-1 pb-5 px-3" : "max-h-0 opacity-0"
        }`}
      >
        {content}
      </p>
    </div>
  );
};

export default FaqsAccordion;
