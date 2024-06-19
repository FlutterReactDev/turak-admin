import { NestedForm } from "@/utils/nested-from";
import { RoomEquipmentType } from "./schema";
import { FC } from "react";
import { FormCard } from "@/components/atoms/form-card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

interface RoomEquipmentFormProps {
  form: NestedForm<RoomEquipmentType>;
}

export const RoomEquipmentForm: FC<RoomEquipmentFormProps> = ({ form }) => {
  const { control, path } = form;

  return (
    <FormCard title="Оснащение" description="" noBorder noTitle>
      <FormField
        control={control}
        name={path("balcony")}
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>

            <FormLabel>балкон</FormLabel>
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name={path("wirelessInternetWiFi")}
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>

            <FormLabel>беспроводной интернет Wi-Fi</FormLabel>
          </FormItem>
        )}
      />
    </FormCard>
  );
};
