import { NestedForm } from "@/utils/nested-from";
import { RoomKitchenEquipmentType } from "./schema";
import { FC } from "react";
import { FormCard } from "@/components/atoms/form-card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

interface RoomKitchenEquipmentFormProps {
  form: NestedForm<RoomKitchenEquipmentType>;
}
export const RoomKitchenEquipmentForm: FC<RoomKitchenEquipmentFormProps> = ({
  form,
}) => {
  const { control, path } = form;
  return (
    <FormCard title="Кухонное оборудование" description="" noBorder noTitle>
      <div className="grid grid-cols-2 gap-2">
        <FormField
          control={control}
          name={path("barCounter")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>барная стойка</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("blender")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>блендер</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("gasStove")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>газовая плита</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("oven")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>духовка</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("coffeeMaker")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>кофеварка</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("coffeeMachine")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>кофемашина</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("kitchenSet")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>кухонный гарнитур</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("microwave")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>СВЧ-печь</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("miniBar")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel> мини-бар</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("freezer")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>морозильник</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("multicooker")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>мультиварка</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("dinnerTable")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>обеденный стол</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("dishesAndAccessories")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>посуда и принадлежности</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("dishwasher")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>посудомоечная машина</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("cutlery")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>столовые приборы</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("toaster")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>тостер</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("turkForMakingCoffee")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>турка для приготовления кофе</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("waterFilter")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>фильтр для воды</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("fridge")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>холодильник</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("electricKettle")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>электрический чайник</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("electricStove")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>электроплита</FormLabel>
            </FormItem>
          )}
        />
      </div>
    </FormCard>
  );
};
