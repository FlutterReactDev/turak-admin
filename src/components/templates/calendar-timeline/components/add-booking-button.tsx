import { Button } from "@/components/ui/button";
import { useBookingSheet } from "../../calendar/hooks/useBookingSheet";
import { CalendarPlus } from "lucide-react";

export const AddBookingButton = () => {
  const addBookingSheet = useBookingSheet();
  const onClick = async () => {
    const data = await addBookingSheet({
      objectId: 0,
      timeStart: "12:00",
      timeEnd: "15:00",
      checkIn: new Date(),
      checkOut: new Date(),
    });
  };
  return (
    <Button onClick={onClick}>
      <CalendarPlus /> Добавить бронирование
    </Button>
  );
};
