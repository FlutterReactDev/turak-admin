import { UploadParams } from "@/types/shared";
import request from "./request";

export default {
  uploads: {
    create(files: File[], { uploadMediaType, ID }: UploadParams) {
      const formData = new FormData();
      for (const f of files) {
        formData.append("files", f);
      }
      return request("POST", "/UploadMedia", formData, {
        uploadMediaType: uploadMediaType as unknown as string,
        ID: ID as unknown as string,
      });
    },
  },
};
