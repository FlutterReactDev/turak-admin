import { InferType, number, object } from "yup";

export const roomCleaningFeeSchema = object({
  cleaningFeeType: number().required(),

  cleaningAmount: number().when("cleaningFeeType", (finalCleaning, schema) => {
    if (finalCleaning[0] == "1") {
      return schema
        .moreThan(0, "Значение должно быть больше нуля")
        .typeError("Поле обязательно для заполнения")
        .required("Поле обязательно для заполнения");
    }

    return schema;
  }),
});

export type RoomCleaningFeeType = InferType<typeof roomCleaningFeeSchema>;
