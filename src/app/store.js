import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { apiSlice } from "./api/apiSlice";
import chatReducer from "../Redux/Chats/chatSlice"
import authReducer from "../Redux/Auth/authSlice"
import vaccinationReducer from "../Redux/Vaccinations/vaccinationSlice"
import messagesReducer from "../Redux/Messages/messagesSlice"


const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, authReducer)


export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: persistedReducer,
    chats: chatReducer,
    vaccinations: vaccinationReducer,
    messages: messagesReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  // middleware: [thunk],
  devTools: true,
});

export const persistor = persistStore(store);