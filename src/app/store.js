import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { apiSlice } from "./api/apiSlice";
import chatReducer from "../Redux/Chats/chatSlice";
import authReducer from "../Redux/Auth/authSlice";
import vaccinationReducer from "../Redux/Vaccinations/vaccinationSlice";
import messagesReducer from "../Redux/Messages/messagesSlice";
import vaccinationDetailsReducer from "../Redux/VaccinationSchedule/vaccinationDetailsSlice"

const persistConfig = {
  key: "root",
  storage,
};

const vDConfig = {
  key: "vaccinationDetails",
  storage
}

const persistedReducer = persistReducer(persistConfig, authReducer);
const persistedVDReducer = persistReducer(vDConfig, vaccinationDetailsReducer);
=======
import { apiSlice } from "./api/apiSlice";
import chatReducer from "../Redux/Chats/chatSlice"
import authReducer from "../Redux/Auth/authSlice"
import vaccinationReducer from "../Redux/Vaccinations/vaccinationSlice"
import messagesReducer from "../Redux/Messages/messagesSlice"

>>>>>>> Abdullah

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
<<<<<<< HEAD
    auth: persistedReducer,
    chats: chatReducer,
    vaccinations: vaccinationReducer,
    messages: messagesReducer,
    vaccinationDetails: persistedVDReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),
  devTools: true,
});

export const persistor = persistStore(store);
=======
    auth: authReducer,
    chats: chatReducer,
    vaccinations: vaccinationReducer,
    messages: messagesReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
>>>>>>> Abdullah
