import { calendarActions } from "..";
import { useAppDispatch } from "../components/shared/hooks/useAppDispatch";
import { useAppSelector } from "../components/shared/hooks/useAppSelecter";

import { getSearchAvailibilityRoomsModal } from "./selectors";

export const useSearchAvailibilityRoomsModal = () => {
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector(getSearchAvailibilityRoomsModal);
  const onOpen = ({
    checkIn,
    checkOut,
    maxDate,
    minDate,
  }: {
    minDate: Date;
    maxDate: Date;
    checkIn: string;
    checkOut: string;
  }) => {
    dispatch(
      calendarActions.setOpenSearchAvailibilityRooms({
        checkIn,
        checkOut,
        maxDate,
        minDate,
      })
    );
  };

  const onClose = () => {
    dispatch(calendarActions.setCloseSearchAvailibilityRooms());
  };

  return {
    isOpen,
    onClose,
    onOpen,
  };
};
