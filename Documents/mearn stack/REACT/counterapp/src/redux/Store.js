import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";


export const Store = configureStore({
    //reducer can only update value of the store
    //reducer key is predefined(its an object which can hold more than oner reducer)

    reducer:{
        //reducer is comming from counterslice since we are export reducer as export default
        counter: counterSlice

    }
})