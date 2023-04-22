import { configureStore } from "@reduxjs/toolkit";
import apiUrlSlice from "../features/apiUrlSlice";

export const store = configureStore({
  reducer: {
    mealApiUrl: apiUrlSlice,
  },
});
