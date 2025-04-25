import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { useSelector, useDispatch } from "react-redux";
import { addBudget } from "../store/BuggetSlice";
import ExpenseForm from "./ExpenseForm";

const Home = () => {
  // const { name } = useParams();
  const [budgetName, setBudgetName] = useState("");
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();
  const name = localStorage.getItem("userName");

  const budgets = useSelector((state) => state.Budget.budgets);
  const handleAddBugget = () => {
    if (budgetName && amount) {
      const newBudget = {
        id: budgets.length + 1,
        name: budgetName,
        amount: parseFloat(amount),
      };
      dispatch(addBudget(newBudget));
      setBudgetName("");
      setAmount("");
    }
  };

  return (
    <>
      <div className="p-10">
        <h1 className="font-bold text-7xl text-center md:text-left">
          Welcome back , <span className="text-blue-500">{name}</span>
        </h1>
        <p className="mt-5 text-gray-600 text-xl text-center md:text-left">
          Personal budgeting is the secret to financial freedom.
        </p>
        <p className="mt-3 text-gray-600 text-xl text-center md:text-left">
          Create a budget to get started!
        </p>
      </div>

      <div className="p-5 grid grid-cols-2 gap-5">
        <div className="max-w-2xl  shadow-2xl rounded-lg p-6 bg-white">
          <div className="border-2 border-dashed border-gray-800 p-6 rounded-lg">
            <h2 className="font-bold text-3xl">Create a Budget</h2>
            <form
              className="mt-6 space-y-2"
              // onSubmit={handleSubmit}
            >
              <Input
                label="Budget Name"
                labelClassName="text-2xl"
                className="border border-gray-800"
                type="text"
                placeholder="e.g., ₹3500 for groceries"
                value={budgetName}
                onChange={(e) => setBudgetName(e.target.value)}
              />
              <Input
                label="Amount"
                labelClassName="text-2xl"
                className="border border-gray-800"
                type="number"
                placeholder="e.g., ₹3500"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <div>
                <Button
                  type="submit"
                  className="mt-5 bg-gray-800 text-white w-full sm:w-auto"
                  text="Create Budget ₹"
                  onClick={handleAddBugget}
                />
              </div>
            </form>
          </div>
        </div>

        <div className="mt-10">
          // In Home.jsx
          {budgets.map((budget) => (
            <div key={budget.id} className="mb-8">
              <h3 className="text-lg font-semibold">
                {budget.name} - ₹{budget.amount}
              </h3>
              <ExpenseForm
                budgetsId={budget.id}
                BudgetName={budget.name}
                budgets={budgets}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
