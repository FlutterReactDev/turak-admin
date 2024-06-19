import { RoomEditPage } from "@/domains/rooms/edit";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/a/_layout/rooms/$id/edit")({
  component: () => <RoomEditPage />,
});
