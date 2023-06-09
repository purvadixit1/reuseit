import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: true,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        },
        registerSuccess(state) {
            state.isLoggedIn = true;
        },
    },
});

export const { loginSuccess, logout, registerSuccess } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export default authSlice.reducer;
