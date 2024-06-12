import { baseApiWithReAuth } from "../Base";
import { BaseResponse } from "../Base/types";
import { ObjectTypeProperty } from "./types";

const objectTypePropertyApi = baseApiWithReAuth.injectEndpoints({
  endpoints: (build) => ({
    getAllObjectTypeProperty: build.query<
      BaseResponse<ObjectTypeProperty[]>,
      void
    >({
      query: () => ({
        url: "/AllObjectPropertyTypes",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllObjectTypePropertyQuery } = objectTypePropertyApi;
