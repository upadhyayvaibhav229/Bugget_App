import React from "react";
import { img } from "../assets";

const Navbar = () => {
  return (
    <div className="flex items-center gap-x-2 p-5 bg-white shadow rounded-lg w-full max-w-screen-lg">
      <img className="h-[40px] w-[40px]" src={img.logo} alt="logo" />
      <h1 className="md:text-3xl text-2xl font-bold">HomeBudget</h1>
    </div>
  );
};

export default Navbar;
