import { baseApi } from "../Base";
import { BaseResponse } from "../Base/types";
import { MealServiceType } from "./types";

const mealServiceTypesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMealServiceTypes: build.query<BaseResponse<MealServiceType[]>, void>({
      query: () => ({
        url: "/MealServiceTypes",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetMealServiceTypesQuery } = mealServiceTypesApi;
