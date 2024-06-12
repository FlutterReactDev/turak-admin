import { CalendarPage } from "@/domains/calendar";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/a/_layout/calendar/")({
  component: () => <CalendarPage />,
});
