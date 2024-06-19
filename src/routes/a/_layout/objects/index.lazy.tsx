import { ObjectsPage } from "@/domains/objects";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/a/_layout/objects/")({
  component: () => <ObjectsPage />,
});
