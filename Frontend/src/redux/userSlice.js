import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  userName: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userReducer: {},
  },
});

export const { userReducer } = userSlice.actions;

export default userSlice.reducer;
