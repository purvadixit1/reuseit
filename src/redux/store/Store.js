import { configureStore } from "@reduxjs/toolkit";
import NavbarReducer from './../features/navbarSlice';
import authReducer from './../features/authSlice';

const store = configureStore({
    reducer: {
        navbar: NavbarReducer,
        auth: authReducer,
    },
});

export default store;