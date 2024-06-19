import { ObjectEditPage } from "@/domains/objects/edit";
import { createLazyFileRoute } from "@tanstack/react-router";
export const Route = createLazyFileRoute("/a/_layout/objects/$id/edit")({
  component: () => <ObjectEditPage />,
});
