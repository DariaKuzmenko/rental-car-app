import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { advertsReducer } from "./adverts/advertsSlice";

const PersistConfig = {
  key: "root",
  storage,
  whilelist: ["favorites"],
};

export const store = configureStore({
  reducer: {
    adverts: persistReducer(PersistConfig, advertsReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  evTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
