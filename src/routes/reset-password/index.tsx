import { ResetPage } from "@/pages/reset";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/reset-password/")({
  component: () => <ResetPage />,
});
