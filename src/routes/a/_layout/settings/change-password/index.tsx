import { ChangePasswordPage } from "@/domains/settings/change-password";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/a/_layout/settings/change-password/")({
  component: () => <ChangePasswordPage />,
});
