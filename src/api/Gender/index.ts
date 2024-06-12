import { baseApi } from "../Base";
import { BaseResponse } from "../Base/types";
import { GenderType } from "./types";

const genderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getGenders: build.query<BaseResponse<GenderType[]>, void>({
      query: () => ({
        url: "/Gender",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetGendersQuery } = genderApi;
