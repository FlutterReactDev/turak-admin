import { InferType, boolean, number, object } from "yup";

export const roomBathroomSchema = object({
  numberOfBathroomsWithToilet: number().required(
    "Поле обязательно для заполнения"
  ),
  numberOfBathroomsWithOutToilet: number().required(
    "Поле обязательно для заполнения"
  ),
  numberOfSeparateToilets: number().required("Поле обязательно для заполнения"),
  bidet: boolean().required(),
  bath: boolean().required(),
  hygienicShower: boolean().required(),
  additionalBathroom: boolean().required(),
  additionalToilet: boolean().required(),
  shower: boolean().required(),
  sharedBathroom: boolean().required(),
  sharedToilet: boolean().required(),
  towels: boolean().required(),
  sauna: boolean().required(),
  slippers: boolean().required(),
  toiletries: boolean().required(),
  hairDryer: boolean().required(),
  robe: boolean().required(),
  sharedShowerRoom: boolean().required(),
});

export type RoomBathroomType = InferType<typeof roomBathroomSchema>;
