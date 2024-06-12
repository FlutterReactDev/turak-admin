// import { userActions } from "@entites/User";

import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query";

import { Mutex } from "async-mutex";
const mutex = new Mutex();
const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_API_URL,
  credentials: "include",
});

const REFRESH_TOKEN = "refresh_token";

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      const refreshToken = localStorage.getItem(REFRESH_TOKEN);
      try {
        if (refreshToken) {
          const refreshResult = await baseQuery(
            {
              url: "/RefreshToken",
              body: {
                refreshToken,
              },
              method: "POST",
            },
            api,
            extraOptions
          );
          if (refreshResult.data) {
            result = await baseQuery(args, api, extraOptions);
          }
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};
