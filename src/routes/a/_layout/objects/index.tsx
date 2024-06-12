import { ObjectsPage } from "@/domains/objects";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/a/_layout/objects/")({
  component: () => <ObjectsPage />,
});
