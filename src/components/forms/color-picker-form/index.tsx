import { colors } from "@/components/forms/color-picker-form/colors";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { NestedForm } from "@/utils/nested-from";
import { FC } from "react";
import { ColorPickerType } from "./schema";

interface ColorPickerFormProps {
  form: NestedForm<ColorPickerType>;
}

export const ColorPickerForm: FC<ColorPickerFormProps> = ({ form }) => {
  const { control, path } = form;
  return (
    <FormField
      control={control}
      name={path("color")}
      render={({ field }) => (
        <FormItem className="space-y-1">
          <FormLabel>Цвет</FormLabel>
          <FormDescription>Выберите цвет бронирование</FormDescription>
          <FormMessage />
          <RadioGroup
            onValueChange={field.onChange}
            className="grid max-w-md grid-cols-2 gap-8 pt-2"
          >
            {colors.map(({ name, value }) => {
              return (
                <FormItem key={name}>
                  <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                    <FormControl>
                      <RadioGroupItem value={value} className="sr-only" />
                    </FormControl>
                    <div
                      className={cn(
                        "items-center rounded-md border-2 border-muted p-1 hover:border-accent",
                        `bg-${value}`
                      )}
                    >
                      <div className="space-y-2 rounded-sm bg-[#ecedef] p-2">
                        <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
                          <div className="h-2 w-[80px] rounded-lg bg-[#ecedef]" />
                          <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                        </div>
                        <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                          <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                          <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                        </div>
                        <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                          <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                          <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                        </div>
                      </div>
                    </div>
                  </FormLabel>
                </FormItem>
              );
            })}
          </RadioGroup>
        </FormItem>
      )}
    />
  );
};
