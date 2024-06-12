import { MapEventHandlerTable } from "../models";
import { MapCustomEvents } from "./models";

/** Массив с пользовательскими событиями карты **/
export const CUSTOM_EVENTS: Array<
  keyof (MapCustomEvents & Partial<MapEventHandlerTable>)
> = ["onMount", "onUnmount"];
export const initalOptions = {
  key: import.meta.env.VITE_2GIS_MAP_KEY,
  keepCenterWhileUserZoomRotate: true,
  scaleControl: true,
  
};
