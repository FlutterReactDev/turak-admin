import { baseApi } from "../Base";
import { BaseResponse } from "../Base/types";
import { RegionType } from "./types";

export const regionsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getRegions: build.query<BaseResponse<RegionType[]>, number>({
      query: (countryId) => ({
        url: "/Regions",
        method: "GET",
        params: {
          countryId,
        },
      }),
    }),
  }),
});

export const { useGetRegionsQuery } = regionsApi;
