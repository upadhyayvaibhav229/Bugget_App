import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    budgets: [],
};

const BudgetSlice = createSlice({
    name: "budget",
    initialState,
    reducers: {
        addBudget: (state, action) => {
            state.budgets.push({
                id: Date.now(),
                name: action.payload.name,
                amount: action.payload.amount,
                expenses: []
            });
        },
        addExpense: (state, action) => {
            const { budgetsId, description, cost } = action.payload;
            const budget = state.budgets.find(b => b.id === budgetsId);
            if (budget) {
                budget.expenses.push({
                    id: Date.now(),  
                    description,
                    cost: Number(cost) 
                });
            }
        }
    }
});

export const { addExpense, addBudget } = BudgetSlice.actions;
export default BudgetSlice.reducer;