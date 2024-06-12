import { NestedForm } from "@/utils/nested-from";
import { FC } from "react";
import { LocationType } from "./schema";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CountrySelect } from "@/components/molecules/country-select";
import { FormCard } from "@/components/atoms/form-card";
import { CitySelect } from "@/components/molecules/city-select";
import { RegionSelect } from "@/components/molecules/region-select";

interface LocationFormProps {
  form: NestedForm<LocationType>;
}
export const LocationForm: FC<LocationFormProps> = ({ form }) => {
  const { control, path, getValues } = form;

  return (
    <FormCard
      title={"Местоположение"}
      description={"Географическое расположение вашего объекта"}
    >
      <FormField
        control={control}
        name={path("countryId")}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Страна</FormLabel>
            <FormControl>
              <CountrySelect onChange={field.onChange} value={field.value} />
            </FormControl>
            <FormDescription>Выберите страну</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      {getValues(path("countryId")) && (
        <FormField
          control={control}
          name={path("regionId")}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Регион</FormLabel>
              <FormControl>
                <RegionSelect
                  counrtyId={getValues(path("countryId"))}
                  onChange={field.onChange}
                  value={field.value}
                />
              </FormControl>
              <FormDescription>Выберите регион</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      )}

      {getValues(path("regionId")) && (
        <FormField
          control={control}
          name={path("cityId")}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Город</FormLabel>
              <FormControl>
                <CitySelect
                  regionId={getValues(path("regionId"))}
                  onChange={field.onChange}
                  value={field.value}
                />
              </FormControl>
              <FormDescription>Выберите город</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
    </FormCard>
  );
};
