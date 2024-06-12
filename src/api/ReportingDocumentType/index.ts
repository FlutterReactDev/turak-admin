import { baseApi } from "../Base";
import { BaseResponse } from "../Base/types";
import { ReportingDocumentType } from "./types";

const reportingDocumentTypeApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getReportingDocumentType: build.query<
      BaseResponse<ReportingDocumentType[]>,
      void
    >({
      query: () => ({
        url: "/ReportingDocumentType",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetReportingDocumentTypeQuery } = reportingDocumentTypeApi;
