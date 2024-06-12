import { baseApiWithReAuth } from "../Base";
import { BaseResponse } from "../Base/types";
import { User } from "./types";

const userApi = baseApiWithReAuth.injectEndpoints({
  endpoints: (build) => ({
    getAboutMe: build.query<BaseResponse<User>, void>({
      query: () => ({
        url: "/AboutMe",
        method: "GET",
      }),
      providesTags: ["auth"],
    }),
  }),
});

export const { useGetAboutMeQuery } = userApi;
