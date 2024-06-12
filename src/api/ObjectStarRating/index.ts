import { baseApi } from "../Base";
import { BaseResponse } from "../Base/types";
import { ObjectStarRatingType } from "./types";

const objectStarRatingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getObjectStarRating: build.query<
      BaseResponse<ObjectStarRatingType[]>,
      void
    >({
      query: () => ({
        url: "/ObjectStarRating",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetObjectStarRatingQuery } = objectStarRatingApi;
