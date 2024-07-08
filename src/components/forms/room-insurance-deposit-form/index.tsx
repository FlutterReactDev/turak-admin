import { NestedForm } from "@/utils/nested-from";
import { RoomInsuranceDepositType } from "./schema";
import { FC } from "react";
import { FormCard } from "@/components/atoms/form-card";
import { ObjectFormCard } from "../types";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface RoomInsuranceDepositFormProps extends ObjectFormCard {
  form: NestedForm<RoomInsuranceDepositType>;
}
export const RoomInsuranceDepositForm: FC<RoomInsuranceDepositFormProps> = ({
  form,
  noBorder,
  noTitle,
}) => {
  const { control, path } = form;
  return (
    <FormCard
      title="Страховой депозит"
      description=""
      noBorder={noBorder}
      noTitle={noTitle}
    >
      <FormField
        control={control}
        name={path("amount")}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Размер депозита</FormLabel>
            <FormControl>
              <Input {...field} type="number" placeholder="Размер депозита" />
            </FormControl>
            <FormMessage />
            <FormDescription>
              Залог, который вы берёте с гостя при заезде и возвращаете при
              отъезде
            </FormDescription>
          </FormItem>
        )}
      />
    </FormCard>
  );
};
