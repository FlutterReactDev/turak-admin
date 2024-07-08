import { Separator } from "@/components/ui/separator";
import { BarChartBig, Calendar, Hotel, Settings, Users } from "lucide-react";
import { FC } from "react";
import { Nav } from "./nav";

interface SidebarProps {
  isCollapsed: boolean;
}
export const Sidebar: FC<SidebarProps> = (props) => {
  const { isCollapsed } = props;

  return (
    <aside className="h-full w-full">
      <Separator />
      <Nav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Мои объекты",
            label: "0",
            icon: Hotel,
            to: "objects",
          },
          {
            title: "Календарь",
            label: "0",
            icon: Calendar,
            to: "calendar",
          },
          {
            title: "Клиенты",
            label: "0",
            icon: Users,
            to: "customers",
          },
          {
            title: "Статистика",
            label: "0",
            icon: BarChartBig,
            to: "stats",
          },
          {
            title: "Настройки",
            label: "",
            icon: Settings,
            to: "settings",
          },
        ]}
      />
    </aside>
  );
};
