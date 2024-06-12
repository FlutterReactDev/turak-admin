import LogoIcon from "@/assets/svg/logo.svg";
import { cn } from "@/lib/utils";
import { FC } from "react";

export interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}
export const Logo: FC<LogoProps> = ({ size = "md", className }) => {
  return (
    <img
      src={LogoIcon}
      className={cn(
        size == "md" && "max-w-40",
        size == "sm" && "max-w-36",
        size == "lg" && "max-w-52",
        className
      )}
    />
  );
};
