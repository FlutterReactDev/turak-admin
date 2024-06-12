import {
  addMonths,
  eachMonthOfInterval,
  format,
  startOfMonth,
  subMonths,
} from "date-fns";
import { ru } from "date-fns/locale";
import { getCalendarActions } from "../../model/selectors";
import { toDay } from "../../utils/toDay";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { memo, startTransition } from "react";
import { calendarActions } from "../..";
import { useAppDispatch } from "../shared/hooks/useAppDispatch";
import { useAppSelector } from "../shared/hooks/useAppSelecter";

export const GoToMonth = memo(() => {
  const dispatch = useAppDispatch();
  const { beginDate } = useAppSelector(getCalendarActions);

  const onDateClick = (date: Date) => {
    startTransition(() => {
      dispatch(calendarActions.setBeginDate(startOfMonth(date)));
    });
  };
  return (
    <Select
      value={startOfMonth(beginDate).toISOString()}
      onValueChange={(date: string) => {
        onDateClick(new Date(date));
      }}
    >
      <SelectTrigger className="w-[280px] capitalize">
        <SelectValue
          placeholder={format(beginDate, "MMMM yyyy ", { locale: ru })}
          className="capitalize"
        />
      </SelectTrigger>
      <SelectContent>
        {eachMonthOfInterval({
          start: subMonths(toDay(new Date()), 6),
          end: addMonths(toDay(new Date()), 12),
        }).map((date) => {
          return (
            <SelectItem value={date.toISOString()} className="capitalize">
              {format(date, "MMMM yyyy ", { locale: ru })}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
});
