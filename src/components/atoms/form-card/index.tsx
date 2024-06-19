import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { FC, PropsWithChildren } from "react";

export interface FormCardProps {
  title: string;
  description: string;
  noBorder?: boolean;
  noTitle?: boolean;
}

export const FormCard: FC<PropsWithChildren<FormCardProps>> = (props) => {
  const {
    title,
    description,
    children,
    noBorder = false,
    noTitle = false,
  } = props;
  return (
    <Card className={cn("w-full", noBorder && "border-0 shadow-none")}>
      {!noTitle && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>

          <CardDescription>{description}</CardDescription>
        </CardHeader>
      )}

      <CardContent className={cn(noBorder)}>
        <div className="grid grid-cols-1 gap-4">{children}</div>
      </CardContent>
    </Card>
  );
};
