import { configureStore } from "@reduxjs/toolkit";

import LanguageSlice from "./Reducers/LanguageSlice"




export const store = configureStore({
  reducer: {
    LanguageReducer:LanguageSlice,

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
