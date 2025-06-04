class AuthService {
  url = "http://localhost:3000";
  async GoogleAuth(_: any, thunkAPI: any) {
    try {
      window.location.href = "http://localhost:3000/auth/google/login";
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message || "Unknown error");
    }
  }
}

export const authService = new AuthService();
