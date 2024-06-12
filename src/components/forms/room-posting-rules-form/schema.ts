import { InferType, boolean, number, object } from "yup";

export const postingRulesSchema = object({
  possibleWithChildren: boolean().required(),
  petsAllowed: boolean().required(),
  smokingAllowed: boolean().required(),
  partiesAllowed: boolean().required(),
  childsAge: number().when(
    "possibleWithChildren",
    (possibleWithChildren, schema) => {
      if (possibleWithChildren[0]) {
        return schema.required();
      }
      return schema;
    }
  ),
});

export type PostingRulesType = InferType<typeof postingRulesSchema>;
