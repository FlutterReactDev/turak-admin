import { FC, PropsWithChildren, useEffect } from "react";
import { useDispatch } from "react-redux";
import { calendarActions } from "../store/store";

export const CalendarSettingProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const dispatch = useDispatch();
  const onResize = () => {
    dispatch(calendarActions.initWidthWindow());
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);

    dispatch(calendarActions.initWidthWindow());

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <>{children}</>;
};
