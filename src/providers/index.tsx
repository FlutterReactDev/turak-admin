import { FC, PropsWithChildren } from "react";
import { ReduxProvider } from "./redux-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ReduxProvider>
      <TooltipProvider delayDuration={200}>{children}</TooltipProvider>
      <Toaster />
    </ReduxProvider>
  );
};
