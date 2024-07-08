import { NestedForm } from "@/utils/nested-from";
import { ObjectFormCard } from "../types";
import { RoomCleaningFeeType } from "./schema";
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
import { CleaningFeeTypesSelect } from "@/components/molecules/cleaning-fee-types-select";

interface RoomCleaningFeeFormProps extends ObjectFormCard {
  form: NestedForm<RoomCleaningFeeType>;
}
export const RoomCleaningFeeForm: FC<RoomCleaningFeeFormProps> = ({
  form,
  noBorder,
  noTitle,
}) => {
  const { control, path } = form;
  return (
    <FormCard
      title="Плата за уборку"
      description=""
      noBorder={noBorder}
      noTitle={noTitle}
    >
      <FormField
        control={control}
        name={path("cleaningFeeType")}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Финальная уборка</FormLabel>
            <FormControl>
              <CleaningFeeTypesSelect
                value={field.value}
                onChange={field.onChange}
              />
            </FormControl>
            <FormMessage />
            <FormDescription>
              Цена уборки уже учитывается в стоимости проживания
            </FormDescription>
          </FormItem>
        )}
      />
    </FormCard>
  );
};
