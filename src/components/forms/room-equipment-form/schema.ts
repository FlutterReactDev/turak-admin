import { boolean, object } from "yup";

export const roomEquipmentSchema = object({
  balcony: boolean().required(),
  wirelessInternetWiFi: boolean().required(),
  fan: boolean().required(),
  pool: boolean().required(),
  waterHeater: boolean().required(),
  gasWaterHeater: boolean().required(),
  wardrobe: boolean().required(),
  seatingArea: boolean().required(),
  woodParquetFloor: boolean().required(),
  jacuzzi: boolean().required(),
  sofa: boolean().required(),
  sofaBed: boolean().required(),
  intercom: boolean().required(),
  soundproofing: boolean().required(),
  fireplace: boolean().required(),
  carpetCovering: boolean().required(),
  airConditioner: boolean().required(),
  steelDoor: boolean().required(),
  mosquitoNet: boolean().required(),
  heater: boolean().required(),
  electricHeatedBlankets: boolean().required(),
  personalComputer: boolean().required(),
  tileMarbleFloor: boolean().required(),
  wiredInternet: boolean().required(),
  desktop: boolean().required(),
  foldingBed: boolean().required(),
  safe: boolean().required(),
  washingMachine: boolean().required(),
  clothesDryer: boolean().required(),
  dryer: boolean().required(),
  telephone: boolean().required(),
  ironWithIroningBoard: boolean().required(),
  centralHeating: boolean().required(),
  cleaners: boolean().required(),
  closet: boolean().required(),
  attic: boolean().required(),
  laminate: boolean().required(),
  linoleum: boolean().required(),
  coffeeTable: boolean().required(),
  vacuumCleaner: boolean().required(),
  clothesHanger: boolean().required(),
  beachTowels: boolean().required(),
  skiSnowboardStorage: boolean().required(),
  blackoutCurtains: boolean().required(),
});


export type RoomEquipmentSchmea