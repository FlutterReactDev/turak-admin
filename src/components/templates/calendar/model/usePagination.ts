
import { getPagination, getTotalPage } from "./selectors";
import { calendarActions } from "..";
import { useAppDispatch } from "../components/shared/hooks/useAppDispatch";
import { useAppSelector } from "../components/shared/hooks/useAppSelecter";

export const usePagination = () => {
  const { currentPage, visibleObjectCount } = useAppSelector(getPagination);

  const totalPage = useAppSelector(getTotalPage);
  const dispatch = useAppDispatch();

  const onNext = () => {
    dispatch(calendarActions.increaseCurrentPage());
  };

  const onPrev = () => {
    dispatch(calendarActions.decreaseCurrentPage());
  };

  const jump = (page: number) => {
    dispatch(calendarActions.jumpPage(page));
  };

  return {
    totalPage,
    onNext,
    onPrev,
    currentPage,
    jump,
    visibleObjectCount
  };
};
