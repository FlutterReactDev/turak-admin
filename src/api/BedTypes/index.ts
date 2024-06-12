import { baseApi } from "../Base";
import { BaseResponse } from "../Base/types";
import { BedType } from "./types";

const bedTypesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getBedTypes: build.query<BaseResponse<BedType[]>, void>({
      query: () => ({
        url: "/BedTypes",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetBedTypesQuery } = bedTypesApi;
