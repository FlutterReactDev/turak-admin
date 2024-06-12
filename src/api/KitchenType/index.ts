import { baseApi } from "../Base";
import { BaseResponse } from "../Base/types";
import { KitchenType } from "./types";

const kitchenTypeApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getKitchenTypeApi: build.query<BaseResponse<KitchenType[]>, void>({
      query: () => ({
        url: "/KitchenType",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetKitchenTypeApiQuery } = kitchenTypeApi;
