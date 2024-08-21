import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./items";
import bagslice from "./Bag";


const myntraStore = configureStore({
    reducer:{
        items:itemSlice.reducer,
        bag:bagslice.reducer
    }
})
export default myntraStore;