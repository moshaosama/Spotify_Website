import { createSlice } from "@reduxjs/toolkit";

import { fetchLogin } from "../Actions/Login";

const initialState = {
  User: {},
  loading: false,
  error: "",
};

const UserAuth = createSlice({
  name: "UserAuth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.loading = true;
      state.User = action.payload;
    });
    builder.addCase(fetchLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default UserAuth.reducer;
