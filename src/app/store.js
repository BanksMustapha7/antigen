import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import chatReducer from "../Redux/Chats/chatSlice"


export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    chats: chatReducer,
    // notes: noteReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});