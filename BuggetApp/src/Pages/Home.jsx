import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Input from "../Components/Input";
import Button from "../Components/Button";
import {useDispatch,useSelector} from "@reduxjs/toolkit"

const Home = () => {
  const { name } = useParams(); // Get the name parameter from the URL
  const [budgetName, setBudgetName] = useState("");
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch(); // Assuming you have set up Redux and useDispatch
  // Handle budget form submission

  const buggets = useSelector((state) => state.bugget.budgets);
    const handleAddBugget = () => {
      
    }

  return (
    <>
      <div className="p-10">
        <h1 className="font-bold text-5xl text-center md:text-left">
          Welcome back{" "}
          <span className="text-blue-500">{decodeURIComponent(name)}</span>
        </h1>
        <p className="mt-5 text-gray-600 text-xl text-center md:text-left">
          Personal budgeting is the secret to financial freedom.
        </p>
        <p className="mt-3 text-gray-600 text-xl text-center md:text-left">
          Create a budget to get started!
        </p>
      </div>

      <div className="p-5">
      <div className="max-w-3xl  shadow-2xl rounded-lg p-6 bg-white">
        <div className="border-2 border-dashed border-gray-800 p-6 rounded-lg">
          <h2 className="font-bold text-2xl text-center">Create a Budget</h2>
          <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
            <Input
              label="Budget Name"
              type="text"
              placeholder="e.g., ₹3500 for groceries"
              value={budgetName}
              onChange={(e) => setBudgetName(e.target.value)}
            />
            <Input
              label="Amount"
              type="number"
              placeholder="e.g., ₹3500"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <div >
              <Button
                type="submit"
                className="mt-5 bg-gray-800 text-white w-full sm:w-auto"
                text="Create Budget ₹"
              />
            </div>
          </form>
        </div>
      </div>
      </div>
      
    </>
  );
};

export default Home;
