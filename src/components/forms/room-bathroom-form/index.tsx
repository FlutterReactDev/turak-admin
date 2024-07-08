import { NestedForm } from "@/utils/nested-from";
import { RoomBathroomType } from "./schema";
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
import { Checkbox } from "@/components/ui/checkbox";
import { ObjectFormCard } from "../types";

interface RoomBathroomFormProps extends ObjectFormCard {
  form: NestedForm<RoomBathroomType>;
}
export const RoomBathroomForm: FC<RoomBathroomFormProps> = ({
  form,
  noBorder,
  noTitle,
}) => {
  const { path, control } = form;
  return (
    <FormCard
      title="Ванная комната"
      description=""
      noBorder={noBorder}
      noTitle={noTitle}
    >
      <FormField
        control={control}
        name={path("numberOfBathroomsWithToilet")}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Количество ванных комнат с туалетом</FormLabel>
            <FormControl>
              <Input
                {...field}
                type="number"
                placeholder="Количество ванных комнат с туалетом"
              />
            </FormControl>
            <FormMessage />
            <FormDescription>
              Ванная комната с душем / ванной, совмещенная с туалетом
            </FormDescription>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={path("numberOfBathroomsWithToilet")}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Количество ванных комнат без туалета</FormLabel>
            <FormControl>
              <Input
                {...field}
                type="number"
                placeholder="Количество ванных комнат без туалета"
              />
            </FormControl>
            <FormMessage />
            <FormDescription>
              Ванная комната с душем / ванной без туалета
            </FormDescription>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={path("numberOfSeparateToilets")}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Количество отдельных туалетов</FormLabel>
            <FormControl>
              <Input
                {...field}
                type="number"
                placeholder="Количество отдельных туалетов"
              />
            </FormControl>
            <FormMessage />
            <FormDescription>Туалет с раковиной или без</FormDescription>
          </FormItem>
        )}
      />
      <div className="flex flex-col gap-2">
        <FormLabel>Удобства ванных комнат</FormLabel>
        <div className="grid grid-cols-2 gap-2">
          <FormField
            control={control}
            name={path("bidet")}
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>

                <FormLabel>биде</FormLabel>
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
            name={path("hygienicShower")}
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>

                <FormLabel>гигиенический душ</FormLabel>
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name={path("additionalBathroom")}
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>

                <FormLabel>дополнительная ванная</FormLabel>
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name={path("additionalToilet")}
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>

                <FormLabel>дополнительный туалет</FormLabel>
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name={path("shower")}
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>

                <FormLabel>душ</FormLabel>
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name={path("sharedBathroom")}
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>

                <FormLabel>общая ванная комната</FormLabel>
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name={path("sharedToilet")}
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>

                <FormLabel> общий туалет</FormLabel>
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name={path("towels")}
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>

                <FormLabel>полотенца</FormLabel>
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

                <FormLabel>сауна</FormLabel>
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name={path("slippers")}
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>

                <FormLabel>тапочки</FormLabel>
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
            name={path("robe")}
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>

                <FormLabel>халат</FormLabel>
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name={path("sharedShowerRoom")}
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>

                <FormLabel>общий душ/душевая</FormLabel>
              </FormItem>
            )}
          />
        </div>
      </div>
    </FormCard>
  );
};
