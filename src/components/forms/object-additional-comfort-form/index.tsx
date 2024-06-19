import { FormCard } from "@/components/atoms/form-card";
import { NestedForm } from "@/utils/nested-from";
import { ObjectAdditionalComfortType } from "./schema";
import { FC } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { ObjectFormCard } from "../types";
interface ObjectAdditionalComfortFormProps extends ObjectFormCard {
  form: NestedForm<ObjectAdditionalComfortType>;
}
export const ObjectAdditionalComfortForm: FC<
  ObjectAdditionalComfortFormProps
> = ({ form, noBorder, noTitle }) => {
  const { control, path } = form;
  return (
    <FormCard title="Удобства и услуги" description="" noBorder={noBorder} noTitle={noTitle}>
      <div className="grid grid-cols-2 gap-2">
        <FormField
          control={control}
          name={path("restaurant")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>Ресторан</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("sauna")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>Сауна</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("aquapark")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>Аквапарк</FormLabel>
            </FormItem>
          )}
        />
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

              <FormLabel>Барная стойка</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("childrenSwimmingPool")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>Детский бассейн</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("elevator")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>Лифт</FormLabel>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name={path("footballField")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>Фудбольное поле</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("garden")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>Сад</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("golf")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>Гольф</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("gym")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>Фитнес-зал</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("indoorPool")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>Крытый бассейн</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("jacuzzi")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>Джакузи</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("laundry")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>Прачечная</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("openPool")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>Откырытый бассейн</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("playground")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>Детская площадка</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("privateBeach")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>Частный пляж</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("ramp")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>Пандус</FormLabel>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name={path("roomDelivery")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>Доставка в номер</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("spaCenter")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>Спа-центр</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("tennisCourt")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>Теннисный корт</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("terrace")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>Террасса</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("twentyFourhourFrontDesk")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>Кругласуточная стойка регистрации</FormLabel>
            </FormItem>
          )}
        />
      </div>
    </FormCard>
  );
};
