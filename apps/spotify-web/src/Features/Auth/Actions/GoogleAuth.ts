import { createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "../../../api/Auth/AuthService";

export const fetchGoogleAuth = createAsyncThunk("GoogleAuth", (_, thunkAPI) => {
  return authService.GoogleAuth(_, thunkAPI);
});
