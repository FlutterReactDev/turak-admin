import { baseApi } from "../Base";
import { BaseResponse } from "../Base/types";
import { SmokingOnSiteType } from "./types";

const smokingOnSiteApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSmokingOnSite: build.query<BaseResponse<SmokingOnSiteType[]>, void>({
      query: () => ({
        url: "/SmokingOnSite",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetSmokingOnSiteQuery } = smokingOnSiteApi;
