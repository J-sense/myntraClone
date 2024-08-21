import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_VALUES } from "../data/data";

const itemSlice = createSlice({
    name:'items',
    initialState:[DEFAULT_VALUES],
    reducers:{
        additems:(store,action)=>{
            return store;
        }
    }
   
})
const itemsAction = itemSlice.actions;
export default itemSlice;