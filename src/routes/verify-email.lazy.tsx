import { VerifyEmail } from "@/pages/email-verify";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/verify-email")({
  component: () => <VerifyEmail />,
});
