import { FormCard } from "@/components/atoms/form-card";
import { NestedForm } from "@/utils/nested-from";
import { ObjectDetailType } from "./schema";
import { FC, memo } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { YearSelect } from "@/components/molecules/year-select";
import { TimeSelect } from "@/components/molecules/time-select";
import { SmokingSelect } from "@/components/molecules/smoking-select";
import { PaymentTypeSelect } from "@/components/molecules/payment-type-select";
import { ObjectFormCard } from "../types";
interface ObjectDetailFormProps extends ObjectFormCard {
  form: NestedForm<ObjectDetailType>;
}
export const ObjectDetailForm: FC<ObjectDetailFormProps> = memo(
  ({ form, noBorder, noTitle }) => {
    const { path, control } = form;
    return (
      <FormCard
        title="Сведение"
        description=""
        noBorder={noBorder}
        noTitle={noTitle}
      >
        <FormField
          control={control}
          name={path("yearOfConstruntion")}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Год постройки</FormLabel>
              <FormControl>
                <YearSelect
                  range={120}
                  onChange={field.onChange}
                  value={field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-2">
          <FormField
            control={control}
            name={path("numberOfRooms")}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Количество номеров</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Количество номеров"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name={path("areaOfTheLand")}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Площадь территории</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Площадь территории"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <FormField
            control={control}
            name={path("checkInAfter")}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>заезд после</FormLabel>
                <FormControl>
                  <TimeSelect
                    placeholder="заезд после"
                    onChange={field.onChange}
                    value={field.value}
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
              <FormItem className="w-full">
                <FormLabel>отъезд до</FormLabel>
                <FormControl>
                  <TimeSelect
                    placeholder="отъезд до"
                    onChange={field.onChange}
                    value={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={control}
          name={path("smokingOnSite")}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Курение на территории</FormLabel>
              <FormControl>
                <SmokingSelect onChange={field.onChange} value={field.value} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name={path("paymentType")}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Принимаемая оплата</FormLabel>
              <FormControl>
                <PaymentTypeSelect
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </FormCard>
    );
  }
);
