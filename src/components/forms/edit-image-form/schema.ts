import { InferType, array, number, object, string } from "yup";

export const imageSchema = object({
  media: array().of(
    object({
      anObjectId: number().required(),
      fileName: string().required(),
      id: number().required(),
    })
  ),
});

export type ImageType = InferType<typeof imageSchema>;
