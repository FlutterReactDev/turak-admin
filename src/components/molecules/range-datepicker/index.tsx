import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format, isBefore } from "date-fns";
import ru from "date-fns/locale/ru";
import { CalendarIcon, CircleX } from "lucide-react";
import { FC, useState } from "react";
import { DateRange } from "react-day-picker";
export interface RangeDatepickerProps {
  date: DateRange | undefined;
  onChange: (date: DateRange) => void;
}
export const RangeDatepicker: FC<RangeDatepickerProps> = (props) => {
  const { onChange, date } = props;
  const [open, setOpen] = useState(false);

  const onDateChange = (toDate: Date) => {
    if (date?.from && !date.to) {
      if (isBefore(date.from, toDate)) {
        onChange({
          from: date.from,
          to: toDate,
        });
      } else {
        onChange({
          from: toDate,
          to: date.from,
        });
      }

      return;
    }

    if (date?.from && date?.to) {
      onChange({
        from: toDate,
        to: undefined,
      });
      return;
    }
  };

  return (
    <div className={cn("grid gap-2")}>
      <Popover open={open} onOpenChange={setOpen} modal>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y", {
                    locale: ru,
                  })}{" "}
                  -{" "}
                  {format(date.to, "LLL dd, y", {
                    locale: ru,
                  })}
                </>
              ) : (
                format(date.from, "LLL dd, y", {
                  locale: ru,
                })
              )
            ) : (
              <span>Выберите даты</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto py-2 px-1" align="start">
          <div className="flex justify-end w-full">
            <Button
              onClick={() => setOpen(false)}
              className="ml-auto"
              size={"icon"}
              variant={"ghost"}
            >
              <CircleX />
            </Button>
          </div>

          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={{
              from: date?.from,
              to: date?.to,
            }}
            locale={ru}
            onDayClick={onDateChange}
            numberOfMonths={2}
            showOutsideDays={false}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
