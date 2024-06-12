import { getObjects } from "./selectors";
import { CalendarObject } from "./types";

import { calendarActions } from "..";
import { useAppDispatch } from "../components/shared/hooks/useAppDispatch";
import { useAppSelector } from "../components/shared/hooks/useAppSelecter";

export const useObjects = () => {
  const dispatch = useAppDispatch();
  const objects = useAppSelector(getObjects);
  const currentObject = useAppSelector((state) => state.calendar.currentObject);
  const setObjects = (objects: CalendarObject[]) => {
    dispatch(calendarActions.setObjects(objects));
  };

  const setCurrentObject = (id: number) => {
    dispatch(calendarActions.setCurrentObject(id));
  };

  return {
    objects,
    setObjects,
    setCurrentObject,
    currentObject,
  };
};
