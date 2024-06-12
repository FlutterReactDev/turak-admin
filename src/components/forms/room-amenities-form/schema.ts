import { InferType, boolean, object } from "yup";

export const roomAmenitiesSchema = object({
  airConditioner: boolean().required(),
  balcony: boolean().required(),
  bath: boolean().required(),
  toiletries: boolean().required(),
  safe: boolean().required(),
  tv: boolean().required(),
  electricKettle: boolean().required(),
  hairDryer: boolean().required(),
  jacuzzi: boolean().required(),
  microwave: boolean().required(),
});

export type RoomAmenitiesType = InferType<typeof roomAmenitiesSchema>;
