import React from "react";

const Wrapper = ({ children, className }) => {
  return (
    <div
      className={`w-full max-w-[1280px] px-5 md:px-10 mx-auto py-10 ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
