import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isAuthenticated: false,
  loading: false,
  message: null,
  error: null,
  user:null,
};

export const user = createSlice({
  name: "user", // Name of the slice
  initialState,
  reducers: { },
})


export default user.reducer; // Export the reducer function

export const {
 
} = user.actions; // Export actions
