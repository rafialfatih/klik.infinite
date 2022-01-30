import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div className="relative">
      <p className="text-center text-4xl text-blue-900 font-semibold ">
        {title}
      </p>
      <div className="h-1 w-48 bg-orange-600 top-16 -translate-x-1/2 inset-x-1/2 absolute"></div>
    </div>
  );
};

export default SectionTitle;
