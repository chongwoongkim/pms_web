import {createSlice} from "@reduxjs/toolkit";

const initialHeaderState = {
    headerName: true,
};

const headerSlice = createSlice({
    name: "headerInfo",
    initialState: initialHeaderState,
    reducers: {
        setTitle(state, action) {
            state.headerName = action.payload;
        }
    },

});

export const headerActions = headerSlice.actions;
export default headerSlice.reducer;
