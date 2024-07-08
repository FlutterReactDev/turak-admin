import { array, boolean, InferType, number, object } from "yup";

export const roomBedsSchema = object({
  beds: array().of(
    object({
      id: number().required(),
      bedType: number().required(),
      count: number().required(),
      isDelete: boolean().required(),
    })
  ),
});

export type RoomBedsType = InferType<typeof roomBedsSchema>;
