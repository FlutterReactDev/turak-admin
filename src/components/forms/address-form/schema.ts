import { InferType, number, object, string } from "yup";

export const addressFormSchema = object({
  suggest: object({
    id: string().required("Это поле обязательно для заполнения"),
    addressName: string().required("Это поле обязательно для заполнения"),
    point: object({
      lon: number().required("Это поле обязательно для заполнения"),
      lat: number().required("Это поле обязательно для заполнения"),
    }).required("Это поле обязательно для заполнения"),
  }).required("Это поле обязательно для заполнения"),
});

export type AddressFormType = InferType<typeof addressFormSchema>;
