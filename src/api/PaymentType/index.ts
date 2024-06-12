import { baseApi } from "../Base";
import { BaseResponse } from "../Base/types";
import { PaymentType } from "./types";

const paymentTypeApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPaymentType: build.query<BaseResponse<PaymentType[]>, void>({
      query: () => ({
        url: "/PaymentType",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPaymentTypeQuery } = paymentTypeApi;
