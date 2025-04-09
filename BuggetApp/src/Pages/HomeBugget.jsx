import React, { useState } from "react";
import { img } from "../assets";
import { useNavigate } from "react-router-dom";

const HomeBugget = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (name.trim()) {
      navigate(`/index/${encodeURIComponent(name)}`);
    }
  };
  return (
    <>
      <div className=" flex flex-wrap flex-col items-center justify-around ">
        {/* Hero Section */}
        <div className="mt-16 w-full max-w-screen-lg flex flex-wrap items-center justify-between">
          {/* Left Content */}
          <div className="flex flex-col space-y-4 max-w-lg">
            <h1 className="text-6xl font-extrabold leading-tight">
              Take Control <br /> of{" "}
              <span className="text-blue-400">Your Money</span>
            </h1>
            <p className="text-xl text-gray-600">
              Personal budgeting is the secret to financial <br /> freedom.
              Start your journey today.
            </p>

            {/* Input Field */}
            <input
              type="text"
              className="border border-gray-300 p-3 rounded w-[350px] focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none"
              placeholder="What is your name?"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            {/* Buttons */}
            <div className=" flex ">
              <div className="inline-block border border-transparent hover:border-black hover:border-3 p-1 rounded">
                <button
                  onClick={handleSubmit}
                  type="button"
                  className="bg-black text-white flex items-center gap-x-2 px-6 py-3 rounded text-lg font-semibold shadow-md cursor-pointer"
                >
                  <img
                    className="w-6 h-6 bg-white p-1 rounded-full"
                    src={img.account}
                    alt="Account Icon"
                  />
                  Create Account
                </button>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="hidden md:block">
            <img
              className="w-[500px] h-[400px]"
              src={img.illstration}
              alt="Illustration"
            />
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden block">
        <svg
          width="2115"
          height="196"
          viewBox="0 0 2115 196"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 47.1846L88.125 43.0509C176.25 38.9171 352.5 30.6496 528.75 47.1846C705 63.7197 881.25 105.057 1057.5 96.7897C1233.75 88.5222 1410 30.6496 1586.25 9.98078C1762.5 -10.688 1938.75 5.84702 2026.88 14.1145L2115 22.3821V196H2026.88C1938.75 196 1762.5 196 1586.25 196C1410 196 1233.75 196 1057.5 196C881.25 196 705 196 528.75 196C352.5 196 176.25 196 88.125 196H0V47.1846Z"
            fill="#1DBBC3"
          />
        </svg>
      </div>
    </>
  );
};

export default HomeBugget;
