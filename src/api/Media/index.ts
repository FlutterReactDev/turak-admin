import { UploadMediaType } from "@/types/shared";
import { baseApiWithReAuth } from "../Base";

export const mediaApi = baseApiWithReAuth.injectEndpoints({
  endpoints: (build) => ({
    uploadMedia: build.mutation<
      void,
      {
        files: FormData;
        id: number;
        uploadMediaType: UploadMediaType;
      }
    >({
      query: ({ files, id, uploadMediaType }) => ({
        url: "/UploadMedia",
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data;",
          Accept: "application/json",
        },

        params: {
          ID: id,
          uploadMediaType,
        },
        body: files,
        formData: true,
      }),
    }),
  }),
});

export const { useUploadMediaMutation } = mediaApi;
