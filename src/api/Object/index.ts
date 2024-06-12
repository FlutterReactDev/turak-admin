import { baseApiWithReAuth } from "../Base";
import { BaseResponse } from "../Base/types";
import { ObjectT } from "./types";

const objectApi = baseApiWithReAuth.injectEndpoints({
  endpoints: (build) => ({
    create: build.mutation<BaseResponse<ObjectT>, ObjectT>({
      query: (data) => ({
        url: `/Create`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["objects"],
    }),
    edit: build.mutation<
      BaseResponse<ObjectT>,
      {
        data: ObjectT;
        anObjectId: number;
      }
    >({
      query: ({ data, anObjectId }) => ({
        url: `/Edit`,
        method: "PUT",
        params: {
          anObjectId,
        },
        body: data,
      }),
      invalidatesTags: ["objects"],
    }),
    delete: build.mutation<BaseResponse<void>, number>({
      query: (anObjectId) => ({
        url: `/Delete`,
        method: "DELETE",
        params: {
          anObjectId,
        },
      }),
      invalidatesTags: ["objects"],
    }),
    getObjectById: build.query<BaseResponse<ObjectT>, number>({
      query: (anObjectId) => ({
        url: `/Get/${anObjectId}`,
        method: "GET",
        params: {
          anObjectId,
        },
      }),
      providesTags: ["objects"],
    }),
    getAllObjects: build.query<BaseResponse<ObjectT[]>, void>({
      query: () => ({
        url: `/GetAll`,
        method: "GET",
      }),
      providesTags: ["objects"],
    }),
  }),
});

export const {
  useCreateMutation,
  useDeleteMutation,
  useEditMutation,
  useGetAllObjectsQuery,
  useGetObjectByIdQuery,
} = objectApi;
