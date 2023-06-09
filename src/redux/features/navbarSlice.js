import { createSlice } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
    name: 'navbar',
    initialState: {
        value: 0,
    },
    reducers: {
        setTabValue: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setTabValue } = navbarSlice.actions;
export default navbarSlice.reducer;