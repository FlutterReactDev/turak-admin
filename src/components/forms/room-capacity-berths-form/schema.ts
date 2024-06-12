import { InferType, array, number, object } from "yup";

export const roomCapacityBerthsSchema = object({
  maximumGuests: number().min(1).required("Поле обязательно для заполнения"),
  beds: array(
    object({
      bedType: number().required("Выберите один из предложенных вариантов"),
      count: number().required(),
    })
  ).required(),
});

export type RoomCapacityBerthsType = InferType<typeof roomCapacityBerthsSchema>;
