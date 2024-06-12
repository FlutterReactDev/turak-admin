import { NestedForm } from "@/utils/nested-from";
import { RoomCapacityBerthsType } from "./schema";
import { FC } from "react";
import { FormCard } from "@/components/atoms/form-card";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFieldArray } from "react-hook-form";

interface RoomCapacityBerthsFormProps {
  form: NestedForm<RoomCapacityBerthsType>;
}

export const RoomCapacityBerthsForm: FC<RoomCapacityBerthsFormProps> = ({
  form,
}) => {
  const { control, path } = form;
  const { fields } = useFieldArray({
    control,
    name: path("beds"),
  });
  return (
    <FormCard title="Вместимость и спальные места" description="">
      <FormField
        control={control}
        name={path("maximumGuests")}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Максимум гостей</FormLabel>
            <FormControl>
              <Input {...field} type="number" />
            </FormControl>
            <FormDescription>
              Для каждого гостя должно быть комфортное спальное местоm
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormItem>
        <FormLabel>Тип и количество кроватей</FormLabel>
         {}
      </FormItem>
    </FormCard>
  );
};
