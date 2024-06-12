import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FC, PropsWithChildren } from "react";

export interface FormCardProps {
  title: string;
  description: string;
}

export const FormCard: FC<PropsWithChildren<FormCardProps>> = (props) => {
  const { title, description, children } = props;
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4">{children}</div>
      </CardContent>
    </Card>
  );
};
