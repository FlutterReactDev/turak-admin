import { PhoneInput } from "@/components/atoms/phone-input";
import { ColorPicker } from "@/components/molecules/color-picker";
import { RangeDatepicker } from "@/components/molecules/range-datepicker";
import { TimeSelect } from "@/components/molecules/time-select";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { NestedForm } from "@/utils/nested-from";
import { FC } from "react";
import { AddBookingType } from "./schema";

interface AddBookignFormProps {
  form: NestedForm<AddBookingType>;
}
export const AddBookignForm: FC<AddBookignFormProps> = ({ form }) => {
  const { control, path } = form;
  return (
    <>
      <FormField
        control={control}
        name={path("dates")}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Дата</FormLabel>
            <FormControl>
              <RangeDatepicker
                date={{
                  from: field.value.startDate,
                  to: field.value.endDate,
                }}
                onChange={(value) => {
                  field.onChange({
                    startDate: value.from,
                    endDate: value.to,
                  });
                }}
              />
            </FormControl>
            <FormDescription>Выберите страну</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="grid grid-cols-2 gap-3">
        <FormField
          control={control}
          name={path("timeStart")}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Время заезда</FormLabel>
              <FormControl>
                <TimeSelect
                  placeholder="Время заезда"
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
          name={path("timeEnd")}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Время выезда</FormLabel>
              <FormControl>
                <TimeSelect
                  placeholder="Время выезда"
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <FormField
        control={control}
        name={path("gusetName")}
        render={({ field }) => (
          <FormItem>
            <FormLabel>ФИО клиента</FormLabel>
            <FormControl>
              <Input type="text" placeholder="ФИО клиента" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={path("guestPhone")}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Номер телефона клиента</FormLabel>
            <FormControl>
              <PhoneInput
                value={field.value}
                onChange={field.onChange}
                ref={field.ref}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={path("comment")}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Личный коментарий</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Здесь можете оставить коментарий"
                {...field}
              />
            </FormControl>
            <FormDescription>
              Комментарий будет виден только вам
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={path("color")}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Выберите цвет</FormLabel>
            <FormControl>
              <ColorPicker value={field.value} onChange={field.onChange} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};
