import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./baseQueryWithReAuth";

export const baseApiWithReAuth = createApi({
  baseQuery: baseQueryWithReauth,
  reducerPath: "baseApiWithReAuth",
  endpoints: () => ({}),
  tagTypes: ["auth", "objects"],
});
