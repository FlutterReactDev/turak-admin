import { InferType, boolean, object } from "yup";

export const roomKitchenEquipmentSchema = object({
  barCounter: boolean().required(),
  blender: boolean().required(),
  gasStove: boolean().required(),
  oven: boolean().required(),
  coffeeMaker: boolean().required(),
  coffeeMachine: boolean().required(),
  kitchenSet: boolean().required(),
  microwave: boolean().required(),
  miniBar: boolean().required(),
  freezer: boolean().required(),
  multicooker: boolean().required(),
  dinnerTable: boolean().required(),
  dishesAndAccessories: boolean().required(),
  dishwasher: boolean().required(),
  cutlery: boolean().required(),
  toaster: boolean().required(),
  turkForMakingCoffee: boolean().required(),
  waterFilter: boolean().required(),
  fridge: boolean().required(),
  electricKettle: boolean().required(),
  electricStove: boolean().required(),
});

export type RoomKitchenEquipmentType = InferType<
  typeof roomKitchenEquipmentSchema
>;
