import { StatsPage } from "@/domains/stats";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/a/_layout/stats/")({
  component: () => <StatsPage />,
});
