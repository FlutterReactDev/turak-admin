import { ObjectEditPage } from "@/domains/objects/edit";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/a/_layout/objects/$id/edit")({
  component: () => <ObjectEditPage />,
});
