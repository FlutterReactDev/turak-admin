import { NestedForm } from "@/utils/nested-from";
import { RoomAmenitiesType } from "./schema";
import { FC } from "react";
import { FormCard } from "@/components/atoms/form-card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { ObjectFormCard } from "../types";

interface RoomAmenitiesFormProps extends ObjectFormCard {
  form: NestedForm<RoomAmenitiesType>;
}
export const RoomAmenitiesForm: FC<RoomAmenitiesFormProps> = ({
  form,
  noBorder,
  noTitle,
}) => {
  const { control, path } = form;
  return (
    <FormCard
      title="Удобства"
      description="Популярные услуги и удобства, на которые чаще всего обращают
        внимание гости при поиске жилья. После публикации можно добавить
        другие"
      noBorder={noBorder}
      noTitle={noTitle}
    >
      <div className="grid grid-cols-2 gap-2">
        <FormField
          control={control}
          name={path("airConditioner")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>кондиционер</FormLabel>
            </FormItem>
          )}
        />
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
          name={path("bath")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>ванна</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("toiletries")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>туалетные принадлежности</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("safe")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>сейф</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("tv")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>телевизор</FormLabel>
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
          name={path("hairDryer")}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>фен</FormLabel>
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

              <FormLabel>джакузи</FormLabel>
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
      </div>
    </FormCard>
  );
};
