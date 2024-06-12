import { memo } from "react";
import { calendarActions } from "../..";
import { toDay } from "../../utils/toDay";
import { useAppDispatch } from "../shared/hooks/useAppDispatch";
import { Button } from "@/components/ui/button";

export const GoTodayBtn = memo(() => {
  const dispatch = useAppDispatch();
  const onClickToday = () => {
    dispatch(calendarActions.setBeginDate(toDay(new Date())));
  };

  return <Button onClick={onClickToday}>Сегодня</Button>;
});
