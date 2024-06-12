import { FC, PropsWithChildren } from "react";
import { CalendarSettingProvider } from "./calendar-setting";

export const CalendarProviders: FC<PropsWithChildren> = ({ children }) => {
  return <CalendarSettingProvider>{children}</CalendarSettingProvider>;
};
