import { InferType, boolean, object } from "yup";

export const objectAdditionalComfortSchema = object({
  restaurant: boolean().default(false).required(),
  barCounter: boolean().default(false).required(),
  sauna: boolean().default(false).required(),
  garden: boolean().default(false).required(),
  spaCenter: boolean().default(false).required(),
  tennisCourt: boolean().default(false).required(),
  aquapark: boolean().default(false).required(),
  indoorPool: boolean().default(false).required(),
  privateBeach: boolean().default(false).required(),
  elevator: boolean().default(false).required(),
  childrenSwimmingPool: boolean().default(false).required(),
  roomDelivery: boolean().default(false).required(),
  twentyFourhourFrontDesk: boolean().default(false).required(),
  gym: boolean().default(false).required(),
  terrace: boolean().default(false).required(),
  footballField: boolean().default(false).required(),
  golf: boolean().default(false).required(),
  openPool: boolean().default(false).required(),
  jacuzzi: boolean().default(false).required(),
  playground: boolean().default(false).required(),
  ramp: boolean().default(false).required(),
  laundry: boolean().default(false).required(),
});

export type ObjectAdditionalComfortType = InferType<
  typeof objectAdditionalComfortSchema
>;
