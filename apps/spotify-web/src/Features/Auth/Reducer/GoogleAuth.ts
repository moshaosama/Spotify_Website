import { createSlice } from "@reduxjs/toolkit";
import { fetchGoogleAuth } from "../Actions/GoogleAuth";

const initialState = {
  User: {},
  loading: false,
  error: "",
};

const GoogleAuth = createSlice({
  name: "GoogleAuth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGoogleAuth.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchGoogleAuth.fulfilled, (state, action) => {
      state.loading = true;
      state.User = action.payload;
    });
    builder.addCase(fetchGoogleAuth.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default GoogleAuth.reducer;
