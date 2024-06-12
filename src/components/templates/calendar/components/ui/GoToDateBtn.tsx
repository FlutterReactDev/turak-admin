
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ru } from "date-fns/locale";
import { CalendarDays } from "lucide-react";
import {
  memo,
  useState
} from "react";
import { calendarActions } from "../..";
import { getCalendarActions } from "../../model/selectors";
import { useAppDispatch } from "../shared/hooks/useAppDispatch";
import { useAppSelector } from "../shared/hooks/useAppSelecter";

export const GoToDateBtn = memo(() => {
  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();

  const { beginDate } = useAppSelector(getCalendarActions);

  return (
    <Popover open={open} onOpenChange={setOpen} modal>
      <PopoverTrigger>
        <Button>
          <CalendarDays />
          Перейти к дате
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          initialFocus
          mode="single"
          numberOfMonths={2}
          locale={ru}
          onSelect={(date) => {
            dispatch(calendarActions.setBeginDate(date));
          }}
          defaultMonth={beginDate}
          selected={beginDate}
        />
      </PopoverContent>
    </Popover>
  );
});
