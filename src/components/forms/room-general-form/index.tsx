import { FormCard } from "@/components/atoms/form-card";
import { FloorTypeSelect } from "@/components/molecules/floor-type-select";
import { RoomTypeNamesSelect } from "@/components/molecules/room-type-names-select";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { NestedForm } from "@/utils/nested-from";
import { FC } from "react";
import { RoomGeneralType } from "./schema";
import { ObjectFormCard } from "../types";
interface RoomGeneralFormProps extends ObjectFormCard {
  form: NestedForm<RoomGeneralType>;
}
export const RoomGeneralForm: FC<RoomGeneralFormProps> = ({
  form,
  noBorder,
  noTitle,
}) => {
  const { control, path } = form;
  return (
    <FormCard
      title="Основная информация"
      description=""
      noBorder={noBorder}
      noTitle={noTitle}
    >
      <FormField
        control={control}
        name={path("roomNameTypeId")}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Название номера</FormLabel>
            <FormControl>
              <RoomTypeNamesSelect
                value={field.value}
                onChange={field.onChange}
                anObjectPropertyTypeId={0}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={path("uniqueName")}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Уникальное название</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={path("uniqueName")}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Своё название (необязательно)</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormDescription>
              Можете ввести ваше собственное название этой категории (будет
              видно только вам)
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={path("count")}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Количество комнат в номере</FormLabel>
            <FormControl>
              <Input {...field} type="number" />
            </FormControl>
            <FormDescription>
              Только жилые комнаты — без учёта кухни, кухни-гостиной и других
              вспомогательных помещений
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={path("area")}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Площадь номера</FormLabel>
            <FormControl>
              <Input {...field} type="number" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={path("floorType")}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Этаж номера</FormLabel>
            <FormControl>
              <FloorTypeSelect value={field.value} onChange={field.onChange} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={path("floorsInTheBuilding")}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Этажей в здании</FormLabel>
            <FormControl>
              <Input {...field} type="number" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </FormCard>
  );
};
