import { baseApi } from "../Base";
import { BaseResponse } from "../Base/types";
import { CleaningFeeType } from "./types";

const cleaningFeeTypeApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCleaningFeeTypes: build.query<BaseResponse<CleaningFeeType[]>, void>({
      query: () => ({
        url: "/CleaningFeeTypes",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCleaningFeeTypesQuery } = cleaningFeeTypeApi;
