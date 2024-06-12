import { baseApi } from "../Base";
import { BaseResponse } from "../Base/types";
import { FoodTypeProps } from "./types";

const foodTypeApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getFoodType: build.query<BaseResponse<FoodTypeProps[]>, void>({
      query: () => ({
        url: "/FoodType",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetFoodTypeQuery } = foodTypeApi;
