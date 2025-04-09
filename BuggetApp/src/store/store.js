import { configureStore } from "@reduxjs/toolkit";
import BuggetSlice from "./BuggetSlice.js";

const store = configureStore({
    reducer: {
        Bugget: BuggetSlice,
    }
})

export default store;