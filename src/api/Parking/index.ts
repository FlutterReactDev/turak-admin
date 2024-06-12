import { baseApi } from "../Base";
import { BaseResponse } from "../Base/types";
import { ParkingType } from "./types";

const parkingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getParking: build.query<BaseResponse<ParkingType[]>, void>({
      query: () => ({
        url: "/Parking",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetParkingQuery } = parkingApi;
