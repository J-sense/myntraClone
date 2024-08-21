import { createSlice } from "@reduxjs/toolkit";

const bagslice = createSlice({
    name:"bag",
    initialState:[],
    reducers:{
        addtoBag:(state,action) =>{
             state.push(action.payload)
        },
        removeTobag:(state,action) =>{
          return state.filter(item=>item !==action.payload)
        }

    }
})
export const bagActions = bagslice.actions;
export default bagslice;