import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

import { MoreHorizontalIcon } from "lucide-react";
import React from "react";

export type ActionType = {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "default" | "destructive";
  disabled?: boolean;
  icon?: React.ReactNode;
};

type ActionablesProps = {
  actions?: ActionType[];
  customTrigger?: React.ReactNode;
  forceDropdown?: boolean;
};

const Actionables: React.FC<ActionablesProps> = ({
  actions,
  customTrigger,
  forceDropdown = false,
}) => {
  if (actions && (forceDropdown || actions.length > 1)) {
    return (
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            {!customTrigger ? (
              <Button
                variant="ghost"
                size="sm"
                className="focus-visible:shadow-input focus-visible:border-primary focus:shadow-none focus-visible:outline-none"
              >
                <MoreHorizontalIcon size={20} />
              </Button>
            ) : (
              customTrigger
            )}
          </DropdownMenuTrigger>

          <DropdownMenuContent
            sideOffset={5}
            className="bg-muted- rounded-lg shadow-dropdown p-2 z-50 min-w-[200px] "
          >
            {actions.map((action, i) => {
              return (
                <DropdownMenuItem className="mb-1 last:mb-0" key={i}>
                  {
                    <Button
                      variant={action.variant}
                      size={"sm"}
                      className={cn("flex w-full justify-start gap-2", {
                        "pointer-events-none select-none opacity-50":
                          action?.disabled,
                      })}
                      onClick={action?.onClick}
                    >
                      {action.icon}
                      {action.label}
                    </Button>
                  }
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }

  if (customTrigger) {
    const triggers = Array.isArray(customTrigger)
      ? customTrigger
      : [customTrigger];
    return (
      <div>
        {triggers.map((trigger, i) => (
          <div key={i}>{trigger}</div>
        ))}
      </div>
    );
  }

  const [action] = actions ?? [];
  if (action) {
    return (
      <div>
        <Button
          variant="secondary"
          size="sm"
          type="button"
          className="flex items-center"
          onClick={action.onClick}
        >
          {action.icon ? (
            <div className="gap-x-1 flex items-center">
              {action.icon}
              {action.label}
            </div>
          ) : (
            <>{action.label}</>
          )}
        </Button>
      </div>
    );
  }

  return null;
};

export default Actionables;
