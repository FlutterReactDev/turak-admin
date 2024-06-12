import { InferType, object, string } from "yup";

export const colorPickerSchema = object({
  color: string().required(),
});

export type ColorPickerType = InferType<typeof colorPickerSchema>;
