import { GISApi } from "@/api/2GiS";
import { baseApi, baseApiWithReAuth } from "@/api/Base";
import { calendarReducer } from "@/components/templates/calendar";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [baseApiWithReAuth.reducerPath]: baseApiWithReAuth.reducer,
    [GISApi.reducerPath]: GISApi.reducer,
    calendar: calendarReducer,
  },

  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat([
      baseApiWithReAuth.middleware,
      baseApi.middleware,
      GISApi.middleware,
    ]);
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
