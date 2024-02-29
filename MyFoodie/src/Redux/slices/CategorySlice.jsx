import { createSlice } from "@reduxjs/toolkit";

const CategortSlice=createSlice({
  name:"category",
  initialState:{
    category:"ALL",
  },
  reducers:{
    setCategory:(state,action)=>{
      state.category=action.payload
    },
  }
})

export const {setCategory}=CategortSlice.actions
export default CategortSlice.reducer