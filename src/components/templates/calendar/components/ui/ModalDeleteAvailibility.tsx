import {
  Box,
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
} from "@chakra-ui/react";

import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { getObjectAvailibilityById } from "../../model/selectors";
import { useDeleteModal } from "../../model/useDeleteModal";

import { useAppSelector } from "../shared/hooks/useAppSelecter";

export const ModalDeleteAvailibility = () => {
  const toast = useToast();

  const { isOpen, onClose, availibilityId, objectId } = useDeleteModal();

  const availability = useAppSelector(
    getObjectAvailibilityById(objectId, availibilityId)
  );

  const onDelete = () => {
    if (availibilityId != undefined && objectId != undefined) {
      // deleteAvailability({
      //   roomId: objectId,
      //   availability: [
      //     {
      //       id: availibilityId,
      //       anObjectRoomId: objectId,
      //       color: availability.color,
      //       comment: availability.comment,
      //       createdDate: availability.createdDate,
      //       endDate: availability.maxDate,
      //       guestPhone: availability.phoneNumber,
      //       gusetName: availability.clientFullname,
      //       startDate: availability.minDate,
      //     },
      //   ],
      // })
      //   .unwrap()
      //   .then((data) => {
      //     dispatch(
      //       calendarActions.deleteAvailability({
      //         id: availibilityId,
      //         objectId,
      //       })
      //     );
      //   })
      //   .catch(() => {});

      onClose();
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Удалить бронь</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Вы действительно хотите сделать даты с{" "}
            {availability &&
              format(availability.minDate, "d MMMM y", {
                locale: ru,
              })}{" "}
            по{" "}
            {availability &&
              format(availability.maxDate, "d MMMM y", {
                locale: ru,
              })}{" "}
            доступными для бронирования ?
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Нет
            </Button>
            <Button colorScheme="red" onClick={onDelete}>
              Да
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
