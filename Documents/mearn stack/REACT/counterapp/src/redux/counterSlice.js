import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name:'counterapp',
    initialState:{
        value:0
    },
            //action are created inside theis reducer key as objects

    reducers:{

        //logics to update state 
        increment:(state,action)=>{
            state.value += action.payload
        },
        //function to drement number
        decrement:(state,action)=>{
            state.value -= action.payload
        },
            //function to reset
        reset:(state)=>{
            state.value = 0
        }
    }
})

//action is requred bu component inorder to update state

export const{increment, decrement, reset} = counterSlice.actions
//reducer is require to store to change the state value

export default counterSlice.reducer
