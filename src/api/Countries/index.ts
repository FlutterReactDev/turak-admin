import { baseApi } from "../Base";
import { BaseResponse } from "../Base/types";
import { Country } from "./types";

const countriesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCountires: build.query<BaseResponse<Country[]>, void>({
      query: () => ({
        url: "/Countires",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCountiresQuery } = countriesApi;
