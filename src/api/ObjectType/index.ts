import { baseApiWithReAuth } from "../Base";
import { BaseResponse } from "../Base/types";
import { ObjectType } from "./types";

const objectTypeApi = baseApiWithReAuth.injectEndpoints({
  endpoints: (build) => ({
    getObjectType: build.query<BaseResponse<ObjectType[]>, void>({
      query: () => ({
        url: "/AllObjectTypes",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetObjectTypeQuery } = objectTypeApi;
