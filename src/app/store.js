import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import chatReducer from "../Redux/Chats/chatSlice"
import authReducer from "../Redux/Auth/authSlice"
import vaccinationReducer from "../Redux/Vaccinations/vaccinationSlice"
import messagesReducer from "../Redux/Messages/messagesSlice"


export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    chats: chatReducer,
    vaccinations: vaccinationReducer,
    messages: messagesReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});