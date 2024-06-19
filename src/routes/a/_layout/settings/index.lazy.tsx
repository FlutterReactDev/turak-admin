import { SettingPage } from "@/domains/settings";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/a/_layout/settings/")({
  component: () => <SettingPage />,
});
