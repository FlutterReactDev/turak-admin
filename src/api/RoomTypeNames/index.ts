import { baseApi } from "../Base";
import { BaseResponse } from "../Base/types";
import { RoomTypeNameType } from "./types";

const roomTypeNamesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getRoomTypeNames: build.query<BaseResponse<RoomTypeNameType[]>, number>({
      query: (anObjectPropertyTypeId) => ({
        url: "/RoomTypeNames",
        method: "GET",
        params: {
          anObjectPropertyTypeId,
        },
      }),
    }),
  }),
});

export const { useGetRoomTypeNamesQuery } = roomTypeNamesApi;
