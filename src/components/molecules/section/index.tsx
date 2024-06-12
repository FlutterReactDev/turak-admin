import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { FC, PropsWithChildren, ReactNode } from "react";

interface SectionProps {
  title?: string;
  description?: string;
  actions?: ReactNode;
  className?: string;
}

export const Section: FC<PropsWithChildren<SectionProps>> = (props) => {
  const { actions, children, description, title, className } = props;
  return (
    <Card>
      <CardHeader className="flex-row justify-between">
        <div className="flex flex-col space-y-1.5 p-6 py-3">
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </div>
        <div className="flex gap-2">{actions}</div>
      </CardHeader>
      <CardContent className={cn("h-full w-full", className)}>
        {children}
      </CardContent>
    </Card>
  );
};
