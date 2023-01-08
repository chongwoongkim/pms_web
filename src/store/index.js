//import { createStore } from "redex";
import {configureStore} from "@reduxjs/toolkit";

import authSlice from "./auth";
import headerSlice from "./header";

const store = configureStore({
    reducer: {auth: authSlice, header: headerSlice},
});

export default store;
