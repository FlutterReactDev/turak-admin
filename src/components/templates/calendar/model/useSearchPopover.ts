import { calendarActions } from "..";
import { useAppDispatch } from "../components/shared/hooks/useAppDispatch";
import { useAppSelector } from "../components/shared/hooks/useAppSelecter";
import { getSaerchPopover } from "./selectors";

export const useSearchPopover = () => {
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector(getSaerchPopover);

  const onOpen = () => {
    dispatch(calendarActions.setOpenSearchPopover());
  };

  const onClose = () => {
    dispatch(calendarActions.setCloseSearchPopover());
  };

  return { isOpen, onOpen, onClose };
};
