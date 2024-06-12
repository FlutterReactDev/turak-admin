import { baseApi } from "../Base";
import { BaseResponse } from "../Base/types";
import {
  LoginData,
  RefreshTokenData,
  UserLoginData,
  UserRegisterData,
  UserResetPassword,
} from "./types";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginData, UserLoginData>({
      query: (data) => ({
        url: "/Login",
        body: data,
        method: "POST",
      }),
    }),
    register: build.mutation<UserRegisterData, UserRegisterData>({
      query: (data) => ({
        url: "/Register",
        body: data,
        method: "POST",
      }),
    }),
    refreshToken: build.mutation<LoginData, RefreshTokenData>({
      query: (data) => ({
        url: "/RefreshToken",
        body: data,
        method: "POST",
      }),
    }),
    getResetPassword: build.mutation<BaseResponse<string>, string>({
      query: (emailAddress) => ({
        url: "/ResetPassword",
        params: {
          emailAddress,
        },
        method: "GET",
      }),
    }),
    resetPassword: build.mutation<void, UserResetPassword & { token: string }>({
      query: ({ confirmNewPassword, newPassword, token }) => ({
        url: "/ResetPassword",
        body: { confirmNewPassword, newPassword },
        method: "POST",
        params: {
          token,
        },
      }),
    }),
    getVerifyEmail: build.query({
      query: () => ({
        url: "/VerifyEmail",
        method: "GET",
      }),
    }),
    verifyEmail: build.mutation({
      query: (data) => ({
        url: "/VerifyEmail",
        body: data,
        method: "POST",
      }),
    }),
    changePassword: build.mutation({
      query: (data) => ({
        url: "/ChangePassword",
        body: data,
        method: "POST",
      }),
    }),
    logout: build.mutation<void, void>({
      query: () => ({
        url: "/Logout",
        method: "POST",
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});

export const {
  useChangePasswordMutation,
  useGetResetPasswordMutation,
  useGetVerifyEmailQuery,
  useVerifyEmailMutation,
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useResetPasswordMutation,
  useRefreshTokenMutation,
} = authApi;
