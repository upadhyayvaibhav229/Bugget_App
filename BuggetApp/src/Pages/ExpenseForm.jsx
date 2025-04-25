// src/components/ExpenseForm.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../store/BuggetSlice";
import ExpenseList from "./ExpenseList";

export default function ExpenseForm({ budgetsId, BudgetName, budgets = [] }) {
  const [desc, setDesc] = useState("");
  const [cost, setCost] = useState("");
  const [selectedBudgetId, setSelectedBudgetId] = useState(budgetsId);
  const dispatch = useDispatch();

  // Ensure budgets is always an array
  const safeBudgets = Array.isArray(budgets) ? budgets : [];
  
  // Get current budget's expenses
  const currentBudget = safeBudgets.find(budget => budget.id === budgetsId) || {};
  const currentExpenses = Array.isArray(currentBudget.expenses) ? currentBudget.expenses : [];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (desc && cost) {
      dispatch(
        addExpense({
          budgetId: selectedBudgetId || budgetsId,
          description: desc,
          cost: parseFloat(cost),
        })
      );
      setDesc("");
      setCost("");
    }
  };

  return (
    <div className="mt-4">
      <div className="max-w-2xl shadow-md rounded-lg p-6 bg-white">
        <div className="border-2 border-dashed border-gray-300 p-4 rounded-lg">
          <h2 className="font-bold text-2xl">
            Add Expense to <span className="text-blue-500">{BudgetName}</span>
          </h2>
          
          <form onSubmit={handleSubmit} className="mt-4 space-y-3">
            <div className="flex flex-wrap gap-3 items-end">
              <div className="flex-1 min-w-[200px]">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <input
                  type="text"
                  placeholder="e.g., Coffee"
                  className="w-full border p-2 rounded"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  required
                />
              </div>
              
              <div className="flex-1 min-w-[150px]">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Amount
                </label>
                <input
                  type="number"
                  placeholder="e.g., 100"
                  className="w-full border p-2 rounded"
                  value={cost}
                  onChange={(e) => setCost(e.target.value)}
                  required
                  min="0"
                  step="0.01"
                />
              </div>

              {safeBudgets.length > 1 && (
                <div className="flex-1 min-w-[200px]">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Budget Category
                  </label>
                  <select
                    className="w-full border p-2 rounded"
                    value={selectedBudgetId}
                    onChange={(e) => setSelectedBudgetId(e.target.value)}
                  >
                    {safeBudgets.map((budget) => (
                      <option key={budget.id} value={budget.id}>
                        {budget.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="flex-1 min-w-[100px]">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full"
                >
                  Add Expense
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <ExpenseList 
        budgetId={budgetsId}
        budgetName={BudgetName}
        expenses={currentExpenses}
      />
    </div>
  );
}