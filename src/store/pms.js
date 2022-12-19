//import { createStore } from "redex";
import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./auth";

const store = configureStore({
  reducer: { auth: authSlice },
});

export const authActions = authSlice.actions;
export default store;
