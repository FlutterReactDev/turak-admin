import { baseApi } from "../Base";
import { BaseResponse } from "../Base/types";
import { RepairType } from "./types";

const repairTypeApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getRepairType: build.query<BaseResponse<RepairType[]>, void>({
      query: () => ({
        url: "/RepairType",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetRepairTypeQuery } = repairTypeApi;
