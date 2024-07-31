import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  userName: "",
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    firstReducer: () => {},
    secondReducer: () => {},
  },
});

export const { firstReducer, secondReducer } = userSlice.actions;

export default userSlice.reducer;
