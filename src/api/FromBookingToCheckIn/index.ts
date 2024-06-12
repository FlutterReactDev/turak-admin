import { baseApi } from "../Base";
import { BaseResponse } from "../Base/types";
import { FromBookingToCheckInType } from "./types";

const fromBookingToCheckInApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getFromBookingToCheckIn: build.query<
      BaseResponse<FromBookingToCheckInType[]>,
      void
    >({
      query: () => ({
        url: "/FoodType",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetFromBookingToCheckInQuery } = fromBookingToCheckInApi;
