import { SettingsCard } from "@/components/atoms/setting-card";
import {
  Page,
  PageContent,
  PageHeader,
  PageHeaderButtons,
  PageTitle,
} from "@/components/organisms/page";
import { ReactNode } from "@tanstack/react-router";
import { Smile } from "lucide-react";
type SettingsCardType = {
  heading: string;
  description: string;
  icon: ReactNode;
  to: string;
  feature_flag?: string;
};

const settings: SettingsCardType[] = [
  {
    heading: "Персональная информация",
    description: "Управляйте своим профилем",
    icon: <Smile className="w-12 h-12" />,
    to: "/a/settings/personal-information",
  },
];
export const SettingPage = () => {
  return (
    <Page>
      <PageHeader>
        <PageTitle>Настройки</PageTitle>
        <PageHeaderButtons></PageHeaderButtons>
      </PageHeader>
      <PageContent>
        <div className="grid grid-cols-2 gap-4">
          {settings.map((s) => (
            <SettingsCard
              description={s.description}
              heading={s.heading}
              icon={s.icon}
              to={s.to}
              key={s.to}
            />
          ))}
        </div>
      </PageContent>
    </Page>
  );
};
