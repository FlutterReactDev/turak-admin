import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { cn } from "@/lib/utils";
import { Card } from "./card";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

interface ChoiceBoxProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  label: string;
  description: string;
}

const ChoiceBox = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  ChoiceBoxProps
>(({ className, description, label, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item ref={ref} className={cn(className)} {...props}>
      <Card className="p-3">
        <div className="flex gap-2 items-start">
          <div className="flex items-center justify-center aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
            <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
              <Circle className="h-2.5 w-2.5 fill-current text-current" />
            </RadioGroupPrimitive.Indicator>
          </div>

          <div className="flex flex-col gap-0 items-start">
            <h3
              className={cn(
                "text-md font-medium leading-none tracking-tight capitalize",
                className
              )}
            >
              {label}
            </h3>
            <p className={cn("text-sm text-muted-foreground", className)}>
              {description}
            </p>
          </div>
        </div>
      </Card>
    </RadioGroupPrimitive.Item>
  );
});

export { RadioGroup, RadioGroupItem, ChoiceBox };
