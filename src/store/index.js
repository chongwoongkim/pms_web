import {configureStore} from "@reduxjs/toolkit";

import authReducer from "./auth";
import headerReducer from "./header";
import counterReducer from './counter';

const store = configureStore({
    reducer: {counter: counterReducer, auth: authReducer, header: headerReducer},
});

export default store;
