import React from "react";

const Navbar = () => {
  return (
    <div className="my-4 h-[60px] flex gap-2 text-lg font-medium justify-center items-center bg-white rounded-lg">
      <img className="h-8 rounded-full" src="/firebaselogo.png" alt="" />
      <h1 className="">My Firebase Contact App</h1>
    </div>
  );
};

export default Navbar;
