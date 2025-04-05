import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
import { apiSlice } from "../features/api/apiSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware({
      serializableCheck:false,
    }).concat(apiSlice.middleware),
  devTools: true,
});

export default store;
