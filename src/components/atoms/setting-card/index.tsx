import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import React from "react";

type SettingsCardProps = {
  icon: React.ReactNode;
  heading: string;
  description: string;
  to: string;
  externalLink?: string;
  disabled?: boolean;
};

export const SettingsCard: React.FC<SettingsCardProps> = ({
  icon,
  heading,
  description,
  to,
  disabled = false,
}) => {
  return (
    <Link to={to}>
      <Button disabled={disabled} variant={"outline"} className="h-20 w-full">
        <div className="flex items-center justify-center ">
          <div className="flex items-center justify-center overflow-hidden">
            {icon}
          </div>
        </div>
        <div className="mx-large flex-1 text-left">
          <h3 className="text-xl text-grey-90  m-0">{heading}</h3>
          <p className="text-base text-muted-foreground  m-0">{description}</p>
        </div>
        <div className="text-grey-40 group-disabled:text-grey-30">
          <ChevronRight />
        </div>
      </Button>
    </Link>
  );
};
