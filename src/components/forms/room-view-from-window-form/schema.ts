import { InferType, boolean, object } from "yup";

export const roomViewFromWindowSchema = object({
  onTheSea: boolean().required(),
  toTheMountains: boolean().required(),
  toTheCity: boolean().required(),
  toTheRiver: boolean().required(),
  toTheLake: boolean().required(),
  toTheForest: boolean().required(),
  toThePark: boolean().required(),
  outside: boolean().required(),
  intoTheYard: boolean().required(),
  toThePool: boolean().required(),
  toTheAttraction: boolean().required(),
  toTheGarden: boolean().required(),
});

export type RoomViewFromWindowType = InferType<typeof roomViewFromWindowSchema>;
