import { FormImage, UploadParams } from "@/types/shared";
import Client from "@/services/api";
const splitImages = (
  images: FormImage[]
): { uploadImages: FormImage[]; existingImages: FormImage[] } => {
  const uploadImages: FormImage[] = [];
  const existingImages: FormImage[] = [];

  images.forEach((image) => {
    if (image.nativeFile) {
      uploadImages.push(image);
    } else {
      existingImages.push(image);
    }
  });

  return { uploadImages, existingImages };
};

export const prepareImages = async (
  images: FormImage[],
  params: UploadParams
) => {
  const { uploadImages, existingImages } = splitImages(images);

  let uploadedImgs: FormImage[] = [];
  if (uploadImages.length > 0) {
    const files = uploadImages.map((i) => i.nativeFile) as File[];
    uploadedImgs = await Client.uploads
      .create(files, params)
      .then(({ data }) => data.uploads);
  }

  return [...existingImages, ...uploadedImgs];
};
