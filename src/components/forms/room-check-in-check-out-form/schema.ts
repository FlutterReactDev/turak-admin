import { InferType, object, string } from "yup";

export const roomCheckInCheckOutSchema = object({
  checkInAfter: string().required(),
  checkOutAfter: string().required(),
});

export type RoomCheckInCheckOutType = InferType<
  typeof roomCheckInCheckOutSchema
>;
