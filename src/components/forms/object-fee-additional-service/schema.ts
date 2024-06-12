import { AdditionalServices } from "@/api/AdditionalService/types";
import { InferType, boolean, number, object, string } from "yup";

export const objectFeeAdditionalServiceSchema = object({
  cleaning: number()
    .typeError("Выберите один из предложенных вариантов")
    .required("Выберите один из предложенных вариантов"),
  cleaningSum: number().when("cleaning", (cleaning, schema) => {
    if (cleaning[0] == AdditionalServices.PAID) {
      return schema
        .moreThan(0, "Стоимость услуги должна быть больше 0")
        .typeError("Стоимость услуги должна быть больше 0")
        .required("Стоимость услуги должна быть больше 0");
    }
    return schema;
  }),
  bedLinen: number()
    .typeError("Выберите один из предложенных вариантов")
    .required("Выберите один из предложенных вариантов"),
  bedLinenSum: number()
    .transform((value) =>
      isNaN(value) || value === null || value === undefined ? 0 : value
    )
    .when("bedLinen", (bedLinen, schema) => {
      if (bedLinen[0] == AdditionalServices.PAID) {
        console.log(bedLinen[0]);

        return schema
          .moreThan(0, "Стоимость услуги должна быть больше 0")
          .typeError("Стоимость услуги должна быть больше 0")
          .required("Стоимость услуги должна быть больше 0");
      }
      return schema;
    }),
  reportingDocuments: number()
    .typeError("Выберите один из предложенных вариантов")
    .required("Выберите один из предложенных вариантов"),
  hasTransfer: boolean().default(false).required(),
  transferDetails: string().when("hasTransfer", (transfer, schema) => {
    if (transfer[0]) {
      return schema.required("Поле обязательно для заполнения");
    }
    return schema;
  }),
  detailComment: string(),
  objectInAnotherResources: string(),
});

export type ObjectFeeAdditionalServiceType = InferType<
  typeof objectFeeAdditionalServiceSchema
>;
