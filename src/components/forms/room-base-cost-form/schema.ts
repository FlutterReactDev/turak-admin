import { InferType, number, object } from "yup";

export const roomBaseCostSchema = object({
  currencyId: number().required(),
  minimumLengthOfStay: number().required(),
  pricePerDay: number()
    .moreThan(0, "Значение должно быть больше нуля")
    .typeError("Поле обязательно для заполнения")
    .required("Поле обязательно для заполнения"),
  forHowManyGuests: number().required(),
});

export type RoomBaseCostType = InferType<typeof roomBaseCostSchema>;
