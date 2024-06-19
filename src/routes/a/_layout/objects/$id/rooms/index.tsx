import { RoomsPage } from "@/domains/rooms";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/a/_layout/objects/$id/rooms/")({
  component: () => <RoomsPage />,
});
