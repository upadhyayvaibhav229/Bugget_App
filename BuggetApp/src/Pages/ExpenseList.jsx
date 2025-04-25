// src/components/ExpenseList.jsx
import React from "react";

export default function ExpenseList({ budgetId, budgetName, expenses = [] }) {
  // Ensure expenses is always an array
  const safeExpenses = Array.isArray(expenses) ? expenses : [];

  return (
    <div className="mt-6">
      {safeExpenses.length > 0 ? (
        <>
          <h3 className="font-semibold text-xl mb-2">{budgetName} Expenses</h3>
          <ul className="space-y-2">
            {safeExpenses.map((expense) => (
              <li 
                key={expense.id} 
                className="bg-gray-50 p-3 rounded-lg flex justify-between"
              >
                <span>{expense.description}</span>
                <span className="font-medium">₹{expense.cost.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-3 font-medium">
            Total: ₹{safeExpenses.reduce((sum, exp) => sum + exp.cost, 0).toFixed(2)}
          </div>
        </>
      ) : (
        <p className="text-gray-500">No expenses added yet for {budgetName}.</p>
      )}
    </div>
  );
}