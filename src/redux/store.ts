import { configureStore } from "@reduxjs/toolkit";
import { myApi } from "./api";
import { myReducer } from "./reducer";

export const store = configureStore({
  reducer: {
    // myapi: myApi.reducer,
    [myApi.reducerPath]: myApi.reducer,
    // myReducer: myReducer.reducer,
    [myReducer.name]: myReducer.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myApi.middleware),
});
