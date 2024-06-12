import { Sheet } from "@/components/ui/sheet";
import { memo } from "react";
import { useSidebar } from "../../model/useSidebar";
import { SidebarForm } from "./SidebarForm";

export const Sidebar = memo(() => {
  const { isOpen } = useSidebar();

  return <>{isOpen && <SidebarForm />}</>;
});
