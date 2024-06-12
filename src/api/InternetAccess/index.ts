import { baseApi } from "../Base";
import { BaseResponse } from "../Base/types";
import { InternetAccessType } from "./types";

const internetAccessApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getInternetAccess: build.query<BaseResponse<InternetAccessType[]>, void>({
      query: () => ({
        url: "/InternetAccess",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetInternetAccessQuery } = internetAccessApi;
