import { baseApiWithReAuth } from "../Base";
import { BaseResponse } from "../Base/types";
import { Availability, SeasonPrice } from "./types";

const objectRoomCalendarApi = baseApiWithReAuth.injectEndpoints({
  endpoints: (build) => ({
    getSeasonPrice: build.query<BaseResponse<SeasonPrice[]>, void>({
      query: () => ({
        url: "/GetSeasonPrice",
        method: "GET",
      }),
    }),
    createSeasonPrice: build.mutation<
      BaseResponse<SeasonPrice[]>,
      {
        data: SeasonPrice[];
        roomId: number;
      }
    >({
      query: ({ data, roomId }) => ({
        url: `/CreateSeasonPrice/${roomId}`,
        method: "POST",
        body: data,
      }),
    }),
    deleteSeasonPrice: build.mutation<
      BaseResponse<SeasonPrice[]>,
      {
        roomId: number;
        data: SeasonPrice[];
      }
    >({
      query: ({ data, roomId }) => ({
        url: `/DeleteSeasonPrice/${roomId}`,
        method: "POST",
        body: data,
      }),
    }),
    updateSeasonPrice: build.mutation<
      BaseResponse<SeasonPrice[]>,
      {
        data: SeasonPrice[];
        roomId: number;
      }
    >({
      query: ({ data, roomId }) => ({
        url: `/UpdateSeasonPrice/${roomId}`,
        method: "POST",
        body: data,
      }),
    }),
    getAvailability: build.query<BaseResponse<Availability[]>, void>({
      query: () => ({
        url: `/GetAvailability`,
        method: "GET",
      }),
    }),

    createAvailability: build.mutation<
      BaseResponse<Availability[]>,
      {
        data: Availability[];
        roomId: number;
      }
    >({
      query: ({ data, roomId }) => ({
        url: `/CreateAvailability/${roomId}`,
        method: "POST",
        body: data,
      }),
    }),

    deleteAvailability: build.mutation<
      BaseResponse<Availability[]>,
      {
        data: Availability[];
        roomId: number;
      }
    >({
      query: ({ data, roomId }) => ({
        url: `/DeleteAvailability/${roomId}`,
        method: "POST",
        body: data,
      }),
    }),
    updateAvailability: build.mutation<
      BaseResponse<Availability[]>,
      {
        data: Availability[];
        roomId: number;
      }
    >({
      query: ({ data, roomId }) => ({
        url: `/UpdateAvailability/${roomId}`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetSeasonPriceQuery,
  useGetAvailabilityQuery,
  useCreateAvailabilityMutation,
} = objectRoomCalendarApi;
