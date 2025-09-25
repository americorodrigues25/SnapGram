import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import photoReducer from "./slices/photoSlice";

export const store = configureStore({
  reducer: {
    // Aqui você adiciona seus reducers
    auth: authReducer,
    user: userReducer,
    photo: photoReducer,
  },
});
