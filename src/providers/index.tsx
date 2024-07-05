import { FC, PropsWithChildren } from "react";
import { ReduxProvider } from "./redux-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { SonnerComp } from "@/components/ui/sonner";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ReduxProvider>
      <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
      <Toaster />
      <SonnerComp />
    </ReduxProvider>
  );
};
