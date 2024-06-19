import { FoodType } from "@/api/FoodType/types";
import { FormCard } from "@/components/atoms/form-card";
import { FoodTypeSelect } from "@/components/molecules/food-type-select";
import { MealServiceTypesSelect } from "@/components/molecules/meal-service-types-select";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { NestedForm } from "@/utils/nested-from";
import { FC } from "react";
import { ObjectMealType } from "./schema";
import { ObjectFormCard } from "../types";

interface ObjectMealFormProps extends ObjectFormCard {
  form: NestedForm<ObjectMealType>;
}
export const ObjectMealForm: FC<ObjectMealFormProps> = ({
  form,
  noBorder,
  noTitle,
}) => {
  const { control, path, watch } = form;
  const allInclusive = watch(path("allInclusive"));
  const breakfast = watch(path("breakfast"));
  const lunch = watch(path("lunch"));
  const dinner = watch(path("dinner"));
  return (
    <FormCard
      title="Питание"
      description="Информация о питании появится во всех категориях номеров"
      noBorder={noBorder}
      noTitle={noTitle}
    >
      <FormField
        control={control}
        name={path("allInclusive")}
        render={({ field }) => (
          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
            <div className="space-y-0.5">
              <FormLabel>Всё включено</FormLabel>
              <FormDescription>
                Receive emails about new products, features, and more.
              </FormDescription>
            </div>
            <FormControl>
              <Switch checked={field.value} onCheckedChange={field.onChange} />
            </FormControl>
          </FormItem>
        )}
      />
      {!allInclusive && (
        <>
          <FormField
            control={control}
            name={path("breakfast")}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Завтрак</FormLabel>
                <FormControl>
                  <FoodTypeSelect
                    onChange={field.onChange}
                    value={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {breakfast && breakfast != FoodType.NOT_PROVIDING && (
            <FormField
              control={control}
              name={path("breakfastService")}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <MealServiceTypesSelect
                      onChange={field.onChange}
                      value={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <FormField
            control={control}
            name={path("lunch")}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Обед</FormLabel>
                <FormControl>
                  <FoodTypeSelect
                    onChange={field.onChange}
                    value={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {lunch && lunch != FoodType.NOT_PROVIDING && (
            <FormField
              control={control}
              name={path("lunchService")}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <MealServiceTypesSelect
                      onChange={field.onChange}
                      value={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <FormField
            control={control}
            name={path("dinner")}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ужин</FormLabel>
                <FormControl>
                  <FoodTypeSelect
                    onChange={field.onChange}
                    value={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {dinner && dinner != FoodType.NOT_PROVIDING && (
            <FormField
              control={control}
              name={path("dinnerService")}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <MealServiceTypesSelect
                      onChange={field.onChange}
                      value={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
        </>
      )}
    </FormCard>
  );
};
