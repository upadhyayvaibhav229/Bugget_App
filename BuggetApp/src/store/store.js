import { configureStore } from "@reduxjs/toolkit";
import BudgetSlice from "./BuggetSlice.js";

const store = configureStore({
    reducer: {
        Budget: BudgetSlice,
    }
})

export default store;