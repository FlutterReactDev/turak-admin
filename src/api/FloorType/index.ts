import { baseApi } from "../Base";
import { BaseResponse } from "../Base/types";
import { FloorType } from "./types";

const floorTypeApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getFloorType: build.query<BaseResponse<FloorType[]>, void>({
      query: () => ({
        url: "/FloorType",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetFloorTypeQuery } = floorTypeApi;
