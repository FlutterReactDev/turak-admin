import { calendarActions } from "..";
import { useAppDispatch } from "../components/shared/hooks/useAppDispatch";
import { useAppSelector } from "../components/shared/hooks/useAppSelecter";
import { getDeleteModal } from "./selectors";

export const useDeleteModal = () => {
  const dispatch = useAppDispatch();
  const { isOpen, availibilityId, objectId } = useAppSelector(getDeleteModal);

  const onOpen = ({
    objectId,
    availabilityId,
  }: {
    objectId: number;
    availabilityId: number;
  }) => {
    dispatch(
      calendarActions.setDeleteModalOnOpen({
        objectId,
        availabilityId,
      })
    );
  };
  const onClose = () => dispatch(calendarActions.setDeleteModalOnClose());

  return {
    isOpen,
    onClose,
    onOpen,
    availibilityId,
    objectId,
  };
};
