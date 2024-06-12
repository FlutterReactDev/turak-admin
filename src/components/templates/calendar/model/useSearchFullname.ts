import { calendarActions } from "..";
import { useAppDispatch } from "../components/shared/hooks/useAppDispatch";
import { useAppSelector } from "../components/shared/hooks/useAppSelecter";

export const useSearchFullname = () => {
  const dispatch = useAppDispatch();
  const query = useAppSelector((state) => state.calendar.searchClientFullname);

  const setQuery = (data: string) => {
    dispatch(calendarActions.setSearchClientFullnameQuery(data));
  };

  return {
    query,
    setQuery,
  };
};
