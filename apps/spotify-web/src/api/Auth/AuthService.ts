import axios from "axios";

class AuthService {
  url = "http://localhost:3000";
  async GoogleAuth(_: any, thunkAPI: any) {
    try {
      window.location.href = "http://localhost:3000/auth/google/login";
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message || "Unknown error");
    }
  }
  async Login(email: string, thunkAPI: any) {
    try {
      let response = await axios.post(
        "http://localhost:3000/auth/login",
        email
      );
      if (response.status === 201) {
        window.localStorage.setItem("User", JSON.stringify(response.data.user));
        window.location.href = "/";
        return response.data;
      }
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message || "Unknown error");
    }
  }
}

export const authService = new AuthService();
