import { baseApi } from "../Base";
import { BaseResponse } from "../Base/types";
import { LanguagesType } from "./types";

const languageApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getLanguages: build.query<BaseResponse<LanguagesType[]>, void>({
      query: () => ({
        url: "/Languages",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetLanguagesQuery } = languageApi;
