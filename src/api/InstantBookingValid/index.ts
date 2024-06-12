import { baseApi } from "../Base";
import { BaseResponse } from "../Base/types";
import { InstantBookingValidType } from "./types";

const instantBookingValidApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getInstantBookingValid: build.query<
      BaseResponse<InstantBookingValidType[]>,
      void
    >({
      query: () => ({
        url: "/InstantBookingValid",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetInstantBookingValidQuery } = instantBookingValidApi;
