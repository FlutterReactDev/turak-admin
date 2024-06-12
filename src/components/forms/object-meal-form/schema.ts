import { FoodType } from "@/api/FoodType/types";
import { InferType, boolean, number, object } from "yup";

export const objectMealSchema = object({
  allInclusive: boolean().default(false).required(),
  breakfast: number()
    .typeError("Выберите один из предложенных вариантов")
    .transform((value) =>
      isNaN(value) || value === null || value === undefined ? 0 : value
    )
    .when("allInclusive", (allInclusive, schema) => {
      console.log(allInclusive);

      if (!allInclusive[0]) {
        return schema.required("Выберите один из предложенных вариантов");
      }
      return schema;
    }),
  breakfastService: number().when("breakfast", (breakfast, schema) => {
    if (breakfast[0] && breakfast[0] != FoodType.NOT_PROVIDING) {
      return schema
        .typeError("Выберите один из предложенных вариантов")
        .required("Выберите один из предложенных вариантов");
    }
    return schema;
  }),
  lunch: number()
    .typeError("Выберите один из предложенных вариантов")
    .transform((value) =>
      isNaN(value) || value === null || value === undefined ? 0 : value
    )

    .when("allInclusive", (allInclusive, schema) => {
      if (!allInclusive[0]) {
        return schema.required("Выберите один из предложенных вариантов");
      }
      return schema;
    }),
  lunchService: number()
    .typeError("Выберите один из предложенных вариантов")
    .when("lunch", (lunch, schema) => {
      if (lunch[0] && lunch[0] != FoodType.NOT_PROVIDING) {
        return schema.required("Выберите один из предложенных вариантов");
      }
      return schema;
    }),
  dinner: number()
    .typeError("Выберите один из предложенных вариантов")
    .transform((value) =>
      isNaN(value) || value === null || value === undefined ? 0 : value
    )

    .when("allInclusive", (allInclusive, schema) => {
      if (!allInclusive[0]) {
        return schema.required("Выберите один из предложенных вариантов");
      }
      return schema;
    }),
  dinnerService: number()
    .typeError("Выберите один из предложенных вариантов")
    .when("dinner", (dinner, schema) => {
      if (dinner[0] && dinner[0] != FoodType.NOT_PROVIDING) {
        return schema.required("Выберите один из предложенных вариантов");
      }
      return schema;
    }),
});

export type ObjectMealType = InferType<typeof objectMealSchema>;
