import { object, number, InferType } from "yup";

export const objectTypeSchema = object({
  objectType: object({
    objectType: number().required(),
    objectTypeProperty: number().required(),
  }),
});

export type ObjectTypeSchema = InferType<typeof objectTypeSchema>;
