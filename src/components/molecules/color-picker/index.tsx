import { colors } from "@/components/forms/color-picker-form/colors";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { FC } from "react";

interface ColorPickerFormProps {
  value: string;
  onChange: (value: string) => void;
}

export const ColorPicker: FC<ColorPickerFormProps> = ({ onChange, value }) => {
  return (
    <RadioGroup
      onValueChange={onChange}
      className="grid max-w-md grid-cols-2 gap-2 pt-2"
      value={value}
    >
      {colors.map(({ name, value }) => {
        return (
          <FormItem key={name}>
            <FormLabel className="[&:has([data-state=checked])>div]:border-ring ">
              <FormControl>
                <RadioGroupItem value={value} className="sr-only" />
              </FormControl>
              <div className="h-32 p-1 rounded-md  border-2 border-transparent transition-all">
                <div
                  className={cn(
                    "items-center h-full rounded-md hover:border-accent",
                    `bg-[${value}]`
                  )}
                  style={{
                    backgroundColor: value,
                  }}
                ></div>
              </div>
            </FormLabel>
          </FormItem>
        );
      })}
    </RadioGroup>
  );
};
