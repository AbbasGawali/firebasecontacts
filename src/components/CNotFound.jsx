import React from "react";
import { FaUserCircle } from "react-icons/fa";
const CNotFound = () => {
  return (
    <div className="flex items-center justify-center m-auto h-screen text-white gap-2">
      <FaUserCircle className="text-white  text-3xl" />

      <h3 className="text-2xl font-semibold  ">Contact Not Found</h3>
    </div>
  );
};

export default CNotFound;
