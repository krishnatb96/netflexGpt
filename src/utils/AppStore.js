import { configureStore } from "@reduxjs/toolkit";
import useReducer  from "../utils/userSlice";
import movieReducer from '../utils/movieSlice'
const appStore = configureStore({
    reducer:{
        user:useReducer,
        movies : movieReducer   
    }
})
export default appStore