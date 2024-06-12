import { baseApi } from "../Base";
import { BaseResponse } from "../Base/types";
import { Currency } from "./types";

const currenciesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCurrencies: build.query<BaseResponse<Currency[]>, void>({
      query: () => ({
        url: "/Currencies",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCurrenciesQuery } = currenciesApi;
