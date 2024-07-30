import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: "",
  },
  reducers: {
    fonctionUne: (state, action) => {},
    fonctionDeux: (state) => {},
    fonctionTrois: (state, action) => {},
  },
});

export const { fonctionUne, fonctionDeux, fonctionTrois } = userSlice.actions;

export default userSlice.reducer;
