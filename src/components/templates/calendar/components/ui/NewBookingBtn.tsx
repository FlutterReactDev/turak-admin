import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { AddBookingForm } from "./AddBookingForm";
import { memo } from "react";
import { Button } from "@/components/ui/button";

export const NewBookingBtn = memo(() => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Новое бронирование</Button>
      <Modal isOpen={isOpen} onClose={onClose} size={["full", "md", "md"]}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Новое бронирование</ModalHeader>
          <ModalCloseButton />
          <AddBookingForm onClose={onClose} />
        </ModalContent>
      </Modal>
    </>
  );
});
