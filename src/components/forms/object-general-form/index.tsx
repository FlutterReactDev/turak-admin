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
import { NestedForm } from "@/utils/nested-from";
import { ObjectGeneralType } from "./schema";
import { FC, memo } from "react";
import { ObjectStarRatingSelect } from "@/components/molecules/object-star-rating-select";
import { InternetAccessSelect } from "@/components/molecules/internet-access-select";
import { InternetAccess } from "@/components/molecules/internet-access-select/types";
import { ParkingSelect } from "@/components/molecules/parking-select";
import { Parking } from "@/components/molecules/parking-select/types";

interface ObjectGeneralForm {
  form: NestedForm<ObjectGeneralType>;
}
export const ObjectGeneralForm: FC<ObjectGeneralForm> = memo(({ form }) => {
  const { control, path, watch } = form;
  const internetAccess = watch(path("internetAccess"));
  const parking = watch(path("parking"));
  return (
    <FormCard title="Основная информация" description="">
      <FormField
        control={control}
        name={path("name")}
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel>Название</FormLabel>
            <FormControl>
              <Input type="text" placeholder="Название" {...field} />
            </FormControl>
            <FormMessage />
            <FormDescription>
              это название будут видеть гости при поиске (если у вас нет
              названия, можете указать название улицы, номер дома)
            </FormDescription>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={path("rating")}
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel>Звёздность</FormLabel>
            <FormControl>
              <ObjectStarRatingSelect
                onChange={field.onChange}
                value={field.value}
              />
            </FormControl>
            <FormMessage />
            <FormDescription>
              Укажите количество звёзд, присвоенных вашему объекту по Системе
              классификации гостиниц и иных средств размещения. звёздность
            </FormDescription>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={path("internetAccess")}
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel>Доступ к интернету</FormLabel>
            <FormControl>
              <InternetAccessSelect
                onChange={field.onChange}
                value={field.value}
              />
            </FormControl>
            <FormMessage />
            <FormDescription>
              Услуга, на которую чаще всего обращают внимание гости при поиске
              жилья
            </FormDescription>
          </FormItem>
        )}
      />
      {internetAccess == InternetAccess.PAID && (
        <FormField
          control={control}
          name={path("internetAccessSumm")}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Cколько стоит интернет?</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
      <FormField
        control={control}
        name={path("parking")}
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel>Парковка для гостей</FormLabel>
            <FormControl>
              <ParkingSelect
                onChange={(value) => {
                  console.log(value);

                  field.onChange(value);
                }}
                value={field.value}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {parking == Parking.PAID && (
        <FormField
          control={control}
          name={path("parkingSumm")}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Cколько стоит парковка?</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
    </FormCard>
  );
});
