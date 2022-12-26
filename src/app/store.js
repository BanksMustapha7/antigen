import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import chatReducer from "../Redux/Chats/chatSlice"
import authReducer from "../Redux/Auth/authSlice"
import vaccinationReducer from "../Redux/Vaccinations/vaccinationSlice"


export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    chats: chatReducer,
    vaccinations: vaccinationReducer,
    // notes: noteReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});