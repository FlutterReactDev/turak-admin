import { cn } from "@/lib/utils";
import { FC, HTMLAttributes } from "react";

export interface StackProps extends HTMLAttributes<HTMLDivElement> {}

export const Stack: FC<StackProps> = ({ className, ...props }) => {
  return <div className={cn("flex flex-col gap-2", className)} {...props} />;
};
