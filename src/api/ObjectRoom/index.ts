import { baseApiWithReAuth } from "../Base";
import { BaseResponse } from "../Base/types";
import { ObjectRoom } from "./types";

const objectRoomApi = baseApiWithReAuth.injectEndpoints({
  endpoints: (build) => ({
    createRoom: build.mutation<BaseResponse<ObjectRoom>, ObjectRoom>({
      query: (data) => ({
        url: `/CreateRoom`,
        method: "POST",
        body: data,
      }),
    }),
    createRooms: build.mutation<BaseResponse<ObjectRoom>, ObjectRoom[]>({
      query: (data) => ({
        url: `/CreateRooms`,
        method: "POST",
        body: data,
      }),
    }),
    getRoomById: build.query<BaseResponse<ObjectRoom>, number>({
      query: (roomId) => ({
        url: `/GetRoomById/${roomId}`,
        method: "GET",
      }),
    }),

    getRoomsByAnObjectId: build.query<BaseResponse<ObjectRoom[]>, number>({
      query: (anObjectId) => ({
        url: `/GetRoomsByAnObjectId/${anObjectId}`,
        method: "GET",
      }),
    }),

    updateRoom: build.mutation<
      BaseResponse<ObjectRoom>,
      {
        data: ObjectRoom;
        roomId: number;
      }
    >({
      query: ({ data, roomId }) => ({
        url: `/UpdateRoom/${roomId}`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useCreateRoomMutation,
  useCreateRoomsMutation,
  useGetRoomByIdQuery,
  useGetRoomsByAnObjectIdQuery,
  useUpdateRoomMutation,
} = objectRoomApi;
