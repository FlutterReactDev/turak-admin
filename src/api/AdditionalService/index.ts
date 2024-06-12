import { baseApi } from "../Base";
import { BaseResponse } from "../Base/types";
import { AdditionalServiceType } from "./types";

const additionalServiceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAdditionalService: build.query<
      BaseResponse<AdditionalServiceType[]>,
      void
    >({
      query: () => ({
        url: "/AdditionalService",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAdditionalServiceQuery } = additionalServiceApi;
