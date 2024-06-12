import { App } from "./components/app";
import { CalendarProviders } from "./providers";

export const CalendarTimeline = () => {
  return (
    <CalendarProviders>
      <App />
    </CalendarProviders>
  );
};
