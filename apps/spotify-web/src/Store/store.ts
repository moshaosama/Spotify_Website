import { configureStore } from "@reduxjs/toolkit";
import authreducer from "../Features/Auth/Reducer/GoogleAuth";

export const store = configureStore({
  reducer: {
    auth: authreducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
