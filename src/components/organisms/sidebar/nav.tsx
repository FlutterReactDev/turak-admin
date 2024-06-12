import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Link } from "@tanstack/react-router";
import { LucideIcon } from "lucide-react";
import { FC } from "react";

interface NavProps {
  isCollapsed: boolean;
  links: {
    title: string;
    label?: string;
    icon: LucideIcon;
    to: string;
  }[];
}

export const Nav: FC<NavProps> = (props) => {
  const { isCollapsed, links } = props;

  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2 h-full w-full transition-all"
    >
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2 w-full transition-all">
        {links.map((link, index) =>
          isCollapsed ? (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <Link to={link.to} className="w-full">
                  {({ isActive }) => {
                    return (
                      <Button
                        {...(isActive && {
                          variant: "default",
                        })}
                        {...(!isActive && {
                          variant: "ghost",
                        })}
                        size={"icon"}
                        className="text-sm font-medium"
                      >
                        <link.icon />
                        <span className="sr-only">{link.title}</span>
                      </Button>
                    );
                  }}
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="flex items-center gap-4">
                <p>{link.title}</p>
              </TooltipContent>
            </Tooltip>
          ) : (
            <Link key={index} to={link.to} className="w-full">
              {({ isActive }) => {
                return (
                  <Button
                    {...(isActive && {
                      variant: "default",
                    })}
                    {...(!isActive && {
                      variant: "ghost",
                    })}
                    className="w-full justify-start text-sm font-medium" 
                  >
                    <link.icon className="mr-2" />
                    {link.title}
                  </Button>
                );
              }}
            </Link>
          )
        )}
      </nav>
    </div>
  );
};
