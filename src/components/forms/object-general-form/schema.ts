import { InternetAccess } from "@/components/molecules/internet-access-select/types";
import { Parking } from "@/components/molecules/parking-select/types";
import { InferType, number, object, string } from "yup";

export const objectGeneralSchema = object({
  name: string().required(),
  rating: number()
    .transform((value) =>
      isNaN(value) || value === null || value === undefined ? 0 : value
    )
    .typeError("Выберите один из предложенных вариантов"),
  internetAccess: number()
    .typeError("Выберите один из предложенных вариантов")
    .required("Выберите один из предложенных вариантов"),
  internetAccessSumm: number().when(
    "internetAccess",
    (internetAccess, schema) => {
      if (internetAccess[0] == InternetAccess.PAID) {
        return schema
          .moreThan(0, "Стоимость услуги должна быть больше 0")
          .typeError("Стоимость услуги должна быть больше 0")
          .required("Стоимость услуги должна быть больше 0");
      }
      return schema;
    }
  ),
  parking: number()
    .typeError("Выберите один из предложенных вариантов")
    .required("Выберите один из предложенных вариантов"),
  parkingSumm: number().when("parking", (parking, schema) => {
    if (parking[0] == Parking.PAID) {
      return schema
        .moreThan(0, "Стоимость услуги должна быть больше 0")
        .typeError("Стоимость услуги должна быть больше 0")
        .required("Стоимость услуги должна быть больше 0");
    }
    return schema;
  }),
});

export type ObjectGeneralType = InferType<typeof objectGeneralSchema>;
