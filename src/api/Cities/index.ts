import { baseApi } from "../Base";
import { BaseResponse } from "../Base/types";
import { City } from "./types";

const citiesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCities: build.query<BaseResponse<City[]>, number>({
      query: (regionId) => ({
        url: "/Cities",
        method: "GET",
        params: {
          regionId,
        },
      }),
    }),
  }),
});

export const { useGetCitiesQuery } = citiesApi;
