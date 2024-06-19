import { PersonalInformationPage } from "@/domains/settings/personal-information";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute(
  "/a/_layout/settings/personal-information/"
)({
  component: () => <PersonalInformationPage />,
});
