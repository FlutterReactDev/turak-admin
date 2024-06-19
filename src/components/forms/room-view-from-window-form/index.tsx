import { NestedForm } from "@/utils/nested-from";
import { RoomViewFromWindowType } from "./schema";
import { FC } from "react";
import { FormCard } from "@/components/atoms/form-card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

interface RoomViewFromWindowFormProps {
  form: NestedForm<RoomViewFromWindowType>;
}

export const RoomViewFromWindowForm: FC<RoomViewFromWindowFormProps> = ({
  form,
}) => {
  const { control, path } = form;

  return (
    <FormCard
      title="Вид из окон"
      description="Укажите, что можно увидеть из окон вашего объекта. В разделе
    «Фото» загрузите фотографии всех видов, которые вы отметили"
      noBorder
      noTitle
    >
      <div className="grid grid-cols-2 gap-2">
        <FormField
          control={control}
          name={path("onTheSea")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>на море</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("toTheMountains")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>на горы</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("toTheCity")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>на город</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("toTheLake")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>на реку</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("toTheRiver")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>на озеро</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("toTheForest")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>на лес</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("toThePark")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>на парк</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("outside")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>на улицу</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("intoTheYard")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>во двор</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("toThePool")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>на бассейн</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("toTheAttraction")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>на достопримечательность</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("toTheGarden")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>на сад</FormLabel>
            </FormItem>
          )}
        />
      </div>
    </FormCard>
  );
};
