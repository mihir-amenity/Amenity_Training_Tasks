import { configureStore } from '@reduxjs/toolkit';
import  authReducer from "./Loginslice"
export const store=configureStore({
      reducer:{
        auth:authReducer,
      }
})