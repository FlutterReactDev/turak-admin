import { getSidebar } from "./selectors";

import { calendarActions } from "..";
import { SidebarType } from "./types";
import { useAppDispatch } from "../components/shared/hooks/useAppDispatch";
import { useAppSelector } from "../components/shared/hooks/useAppSelecter";

export const useSidebar = () => {
  const dispatch = useAppDispatch();
  const { isOpen, objectId, type, availabilityId, checkIn, checkOut } =
    useAppSelector(getSidebar);

  const onOpen = ({
    objectId,
    type,
    availabilityId,
    checkIn,
    checkOut,
  }: {
    objectId: number;
    type?: SidebarType;
    availabilityId?: number;
    checkIn?: string;
    checkOut?: string;
  }) => {
    dispatch(
      calendarActions.setOnOpen({
        objectId,
        type,
        availabilityId,
        checkIn,
        checkOut,
      })
    );
  };
  const onClose = () => dispatch(calendarActions.setOnClose());

  return {
    isOpen,
    onClose,
    onOpen,
    objectId,
    type,
    availabilityId,
    checkIn,
    checkOut,
  };
};
