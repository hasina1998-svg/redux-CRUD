import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './cartSlice'

export const store=configureStore({
    reducer:{
        users:usersReducer,
    }
})