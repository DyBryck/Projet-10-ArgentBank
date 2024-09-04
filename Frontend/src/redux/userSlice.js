import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  firstName: "",
  lastName: "",
  userName: "",
  token: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.userName = action.payload.userName;
      state.token = action.payload.token;
    },
    logout: () => {
      return initialState;
    },
    editName: (state, action) => {
      state.userName = action.payload;
    },
  },
});

export const { login, logout, editName } = userSlice.actions;

export default userSlice.reducer;
