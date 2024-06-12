import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { selectCommonSettings } from "../store/selectors";
import { useMedia } from "react-use";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { cn } from "@/lib/utils";

interface DayProps {
  date: string;
  isMonth: boolean;
  isToday: boolean;
  isPastDay: boolean;
  isWeekday: boolean;
  isFirst: boolean;
  isLast: boolean;
}

export const Day: FC<DayProps> = memo((props) => {
  const { date, isMonth, isPastDay, isToday, isWeekday } = props;
  const { currentWidth } = useSelector(selectCommonSettings);

  const toDate = new Date(date);
  return (
    <div
      className={`grid grid-cols-[${currentWidth}px] grid-rows-[32px_47px] [grid-template-areas:'month''day'] select-none`}
      style={{
        gridTemplateColumns: currentWidth + "px",
      }}
    >
      <div className="w-[130px] [grid-area:month] font-medium capitalize ml-[26px]">
        <div>
          {isMonth &&
            format(toDate, "MMMM yyyy", {
              locale: ru,
            })}
        </div>
      </div>
      <div
        className={cn(
          "w-[37px] h-[35px] flex flex-col gap-0 rounded-md text-center relative left-[50%] translate-x-[-50%] bg-white font-medium [grid-area:day]",
          isPastDay && "text-white bg-primary opacity-50",
          {
            "text-white bg-destructive": isWeekday && !isPastDay,
            "text-white bg-primary": isToday,
          }
        )}
      >
        <div className="leading-none">
          {format(toDate, "EEEEEE", { locale: ru })}
        </div>
        <div className="leading-none">{toDate.getDate()}</div>
      </div>
    </div>
  );
});
