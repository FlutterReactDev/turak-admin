import { NestedForm } from "@/utils/nested-from";
import { RoomType } from "./schema";
import { FormCard } from "@/components/atoms/form-card";
import { FC } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RoomCategoriesSelect } from "@/components/molecules/room-categories-select";
import { Input } from "@/components/ui/input";

interface RoomTypeFormProps {
  form: NestedForm<RoomType>;
}
export const RoomTypeForm: FC<RoomTypeFormProps> = ({ form }) => {
  const { path, control } = form;
  return (
    <FormCard title="Тип объекта" description="">
      <FormField
        control={control}
        name={path("categoryType")}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Категория номера</FormLabel>
            <FormControl>
              <RoomCategoriesSelect
                value={field.value}
                onChange={field.onChange}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={path("count")}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Кол-во номеров этого типам</FormLabel>
            <FormControl>
              <Input {...field} type="number" placeholder="Кол-во номеров этого типам"/>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </FormCard>
  );
};
