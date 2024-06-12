import { InferType, number, object } from "yup";

export const locationSchema = object({
  countryId: number().required("Это поле обязательно для заполнения"),
  regionId: number().required("Это поле обязательно для заполнения"),
  cityId: number().required("Это поле обязательно для заполнения"),
});

export type LocationType = InferType<typeof locationSchema>;
