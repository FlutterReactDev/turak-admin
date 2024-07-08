import { FormCard } from "@/components/atoms/form-card";
import { TimeSelect } from "@/components/molecules/time-select";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { NestedForm } from "@/utils/nested-from";
import { FC } from "react";
import { ObjectFormCard } from "../types";
import { RoomCheckInCheckOutType } from "./schema";

export interface RoomCheckInCheckOutFormProps extends ObjectFormCard {
  form: NestedForm<RoomCheckInCheckOutType>;
}

export const RoomCheckInCheckOutForm: FC<RoomCheckInCheckOutFormProps> = ({
  form,
  noBorder,
  noTitle,
}) => {
  const { control, path } = form;
  return (
    <FormCard
      title="Оснащение"
      description=""
      noBorder={noBorder}
      noTitle={noTitle}
    >
      <div className="grid grid-cols-2 gap-3">
        <FormField
          control={control}
          name={path("checkInAfter")}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Расчетное время заезда</FormLabel>
              <FormControl>
                <TimeSelect
                  placeholder="Расчетное время заезда"
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
          name={path("checkOutAfter")}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Расчетное время отъезда</FormLabel>
              <FormControl>
                <TimeSelect
                  placeholder="Расчетное время отъезда"
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </FormCard>
  );
};
