import { UploadMediaType } from "@/types/shared";

type GetImageUrlProps = {
  type: UploadMediaType;
  fileName: string;
};

export const getImageUrl = ({ type, fileName }: GetImageUrlProps) => {
  return `${import.meta.env.VITE_BASE_API_URL}/GetMedia?type=${type}&fileName=${fileName}`;
};
