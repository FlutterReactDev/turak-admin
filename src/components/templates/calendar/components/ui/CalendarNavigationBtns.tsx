import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { Button, ButtonGroup, HStack } from "@chakra-ui/react";

import { getCalendarActions } from "../../model/selectors";
import { calendarActions } from "../..";
import { addDays, addMonths, subDays, subMonths } from "date-fns";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";

export const CalendarNavigationBtns = memo(() => {
  const dispatch = useDispatch();
  const { beginDate } = useSelector(getCalendarActions);
  const onNextWeek = () => {
    dispatch(calendarActions.setBeginDate(addDays(beginDate, 7)));
  };
  const onPrevWeek = () => {
    dispatch(calendarActions.setBeginDate(subDays(beginDate, 7)));
  };

  const onNextMonth = () => {
    dispatch(calendarActions.setBeginDate(addMonths(beginDate, 1)));
  };

  const onPrevMonth = () => {
    dispatch(calendarActions.setBeginDate(subMonths(beginDate, 1)));
  };
  return (
    <HStack h="full">
      <ButtonGroup>
        <Button bgColor={"white"} onClick={onPrevMonth}>
          <ArrowLeftIcon />
        </Button>
        <Button fontSize={"xl"} bgColor={"white"} onClick={onPrevWeek}>
          <ChevronLeftIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button fontSize={"xl"} bgColor={"white"} onClick={onNextWeek}>
          <ChevronRightIcon />
        </Button>
        <Button bgColor={"white"} onClick={onNextMonth}>
          <ArrowRightIcon />
        </Button>
      </ButtonGroup>
    </HStack>
  );
});
