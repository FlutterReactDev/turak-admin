import { baseApi } from "../Base";
import { BaseResponse } from "../Base/types";
import { NumberOfIsolatedBedroomType } from "./types";

const numberOfIsolatedBedroomApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getNumberOfIsolatedBedroom: build.query<
      BaseResponse<NumberOfIsolatedBedroomType[]>,
      void
    >({
      query: () => ({
        url: "/NumberOfIsolatedBedroom",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetNumberOfIsolatedBedroomQuery } =
  numberOfIsolatedBedroomApi;
