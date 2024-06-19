import { SettingsCard } from "@/components/atoms/setting-card";
import {
  Page,
  PageContent,
  PageHeader,
  PageHeaderButtons,
  PageTitle,
} from "@/components/organisms/page";
import { ReactNode } from "@tanstack/react-router";
import { KeyRound, RotateCcw, UserCircle } from "lucide-react";
type SettingsCardType = {
  heading: string;
  description: string;
  icon: ReactNode;
  to: string;
  feature_flag?: string;
  from?: string;
};

const settings: SettingsCardType[] = [
  {
    heading: "Персональная информация",
    description: "Управляйте своим профилем",
    icon: <UserCircle className="w-12 h-12" />,
    to: "/a/settings/personal-information",
  },
  {
    heading: "Изменить пароль",
    description: "Изменение пароля на основе старого",
    icon: <KeyRound className="w-12 h-12" />,
    to: "/a/settings/change-password/",
  },
  {
    heading: "Сбросить пароль",
    description: "Сброс пароля (отправка на почту)",
    icon: <RotateCcw className="w-12 h-12" />,
    to: "/reset-password",
    from: "/a/settings",
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
              from={s.from}
              key={s.to}
            />
          ))}
        </div>
      </PageContent>
    </Page>
  );
};
