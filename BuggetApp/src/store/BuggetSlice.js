import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    expenses: [],
    categories: [],
    budgets: [],
}

const BuggetSlice  = createSlice({
    name: "bugget",
    initialState,
    reducers: {
        addExpense: (state,action) =>{
            state.expenses.push(action.payload)
        }
    }
})

export const {addExpense} = BuggetSlice.actions
export default BuggetSlice.reducer