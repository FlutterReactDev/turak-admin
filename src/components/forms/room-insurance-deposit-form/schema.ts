import { InferType, number, object } from "yup";

export const roomInsuranceDepositSchema = object({
  amount: number(),
});

export type RoomInsuranceDepositType = InferType<
  typeof roomInsuranceDepositSchema
>;
