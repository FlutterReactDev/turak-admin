import { InferType, number, object } from "yup";

export const roomTypeSchema = object({
  categoryType: number()
    .typeError("Поле обязательно для заполнения")
    .required("Поле обязательно для заполнения"),
  count: number()
    .moreThan(0, "Значение должно быть больше 0")
    .required("Поле обязательно для заполнения"),
});

export type RoomType = InferType<typeof roomTypeSchema>;
