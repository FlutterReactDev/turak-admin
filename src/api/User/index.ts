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
    update: build.mutation<
      BaseResponse<null>,
      Omit<User, "emaiIsVerified" | "lastLoginDateTime">
    >({
      query: (data) => ({
        url: "/Update",
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["auth"],
    }),
  }),
});

export const { useGetAboutMeQuery, useUpdateMutation } = userApi;
