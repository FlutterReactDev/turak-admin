import { cn } from "@/lib/utils";
import { FC, HTMLAttributes } from "react";

export const Page: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div className={cn("flex flex-col gap-10", props.className)} {...props}>
      {props.children}
    </div>
  );
};

export const PageHeader: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(className, "flex items-center justify-between w-full")}
      {...props}
    >
      {children}
    </div>
  );
};

export const PageContent: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn(className)} {...props}>
      {children}
    </div>
  );
};

export const PageTitle: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h1 className={cn("text-3xl font-semibold", className)} {...props}>
      {children}
    </h1>
  );
};

export const PageHeaderButtons: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn(className, "flex gap-3")} {...props}>
      {children}
    </div>
  );
};
