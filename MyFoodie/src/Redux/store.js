import {configureStore} from "@reduxjs/toolkit";
import CartSlice from "./slices/Cartslice";

 export const store=configureStore({
  reducer:CartSlice
})
