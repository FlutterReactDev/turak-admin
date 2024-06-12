import * as Yup from "yup";

export const objectDetailSchema = Yup.object({
  yearOfConstruntion: Yup.number().required(
    "Выберите один из предложенных вариантов"
  ),
  numberOfRooms: Yup.number()
    .typeError("Выберите один из предложенных вариантов")
    .moreThan(0, "Количества комнат должно быть больше 0")
    .typeError("Комнат не может быть меньше или равно 0")
    .required("Поле обязательно для заполнения"),
  areaOfTheLand: Yup.number()
    .typeError("Выберите один из предложенных вариантов")
    .required("Поле обязательно для заполнения"),
  checkInAfter: Yup.string().required(
    "Выберите один из предложенных вариантов"
  ),
  checkOutAfter: Yup.string().required(
    "Выберите один из предложенных вариантов"
  ),
  smokingOnSite: Yup.number()
    .typeError("Выберите один из предложенных вариантов")
    .required("Выберите один из предложенных вариантов"),
  paymentType: Yup.number()
    .typeError("Выберите один из предложенных вариантов")
    .required("Выберите один из предложенных вариантов"),
});

export type ObjectDetailType = Yup.InferType<typeof objectDetailSchema>;
