import { baseApi } from "../Base";
import { BaseResponse } from "../Base/types";
import { RoomCategoriesType } from "./types";

const roomCategoriesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getRoomCategories: build.query<BaseResponse<RoomCategoriesType[]>, void>({
      query: () => ({
        url: "/RoomCategories",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetRoomCategoriesQuery } = roomCategoriesApi;
