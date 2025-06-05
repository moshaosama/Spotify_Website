import { createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "../../../api/Auth/AuthService";

export const fetchLogin = createAsyncThunk(
  "UserAuth/fetchLogin",
  async (email: string, thunkAPI: any) => {
    return authService.Login(email, thunkAPI);
  }
);
