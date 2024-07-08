import { FormCard } from "@/components/atoms/form-card";
import { CurrencySelect } from "@/components/molecules/currency-select";
import { MinimumLengthOfStaySelect } from "@/components/molecules/minimum-length-of-stay-select";
import { Alert, AlertDescription } from "@/components/ui/alert";
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

import { TriangleAlert } from "lucide-react";
import { FC } from "react";
import { ObjectFormCard } from "../types";
import { RoomBaseCostType } from "./schema";

interface RoomBaseCostProps extends ObjectFormCard {
  form: NestedForm<RoomBaseCostType>;
}

export const RoomBaseCostForm: FC<RoomBaseCostProps> = ({
  form,
  noBorder,
  noTitle,
}) => {
  const { control, path } = form;
  return (
    <FormCard title="Цены" description="" noBorder={noBorder} noTitle={noTitle}>
      <Alert variant="warning">
        <TriangleAlert className="h-4 w-4" />
        <AlertDescription>
          Внимание! В этом блоке вы указываете основную цену за сутки. Она
          применяется в расчёте при отсутствии сезонных цен. После публикации
          объявления вы сможете задать цены на конкретные даты, месяцы и дни
          недели, а также закрыть любые даты в календаре занятости. Подробнее
        </AlertDescription>
      </Alert>
      <FormField
        control={control}
        name={path("currencyId")}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Валюта для расчётов</FormLabel>
            <FormControl>
              <CurrencySelect value={field.value} onChange={field.onChange} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={path("minimumLengthOfStay")}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Минимальный срок проживания</FormLabel>
            <FormControl>
              <MinimumLengthOfStaySelect
                value={field.value}
                onChange={field.onChange}
              />
            </FormControl>
            <FormMessage />
            <FormDescription>
              Это общее ограничение. В календаре занятости вы можете установить
              минимальный срок на конкретные даты
            </FormDescription>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={path("pricePerDay")}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Цена за сутки</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Цена за сутки" type="number" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={path("forHowManyGuests")}
        render={({ field }) => (
          <FormItem>
            <FormLabel>За сколько гостей</FormLabel>
            <FormControl>
              <Input {...field} placeholder="За сколько гостей" type="number" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </FormCard>
  );
};
