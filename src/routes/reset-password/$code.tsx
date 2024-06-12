import { ResetPasswordPage } from "@/pages/reset-password";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/reset-password/$code")({
  component: () => <ResetPasswordPage />,
});
