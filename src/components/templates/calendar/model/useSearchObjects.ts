import { getSearch } from "./selectors";

import { calendarActions } from "..";
import { useAppDispatch } from "../components/shared/hooks/useAppDispatch";
import { useAppSelector } from "../components/shared/hooks/useAppSelecter";

export const useSearchObjects = () => {
  const query = useAppSelector(getSearch);
  const dispatch = useAppDispatch();

  const onChangeQuery = (value: string) => {
    dispatch(calendarActions.search(value));
  };

  return {
    query,
    onChangeQuery,
  };
};
