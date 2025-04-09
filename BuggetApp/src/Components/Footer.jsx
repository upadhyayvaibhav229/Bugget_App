import React from "react";
import { img } from "../assets";

const Footer = () => {
  return (
    <div className="w-full max-w-screen-lg mt-10 absolute bottom-0 flex flex-col items-center justify-center">
      <img src={img.wave} alt="" />
    </div>
  );
};

export default Footer;
