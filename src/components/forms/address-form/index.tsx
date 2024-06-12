import { FormCard } from "@/components/atoms/form-card";
import { SuggestInput } from "@/components/atoms/suggest-input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { NestedForm, nestedForm } from "@/utils/nested-from";
import { FC } from "react";
import { AddressFormType } from "./schema";

type AddressFormProps = {
  form: NestedForm<AddressFormType>;
};
export const AddressForm: FC<AddressFormProps> = ({ form }) => {
  const { path, control } = form;
  const f = nestedForm(form, "suggest");

  return (
    <FormCard title="Адрес" description="Укажите адрес до вашего объекта">
      <FormField
        control={control}
        name={path("suggest")}
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel>Адрес</FormLabel>
            <FormControl>
              <SuggestInput
                placeholder="Советская улица, 216а"
                onChange={field.onChange}
                value={field.value}
                ref={field.ref}
              />
            </FormControl>
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            {f.formState.errors?.address && (
              <p className="text-sm font-medium text-destructive">
                Это поле обязательно для заполнения
              </p>
            )}
          </FormItem>
        )}
      />
    </FormCard>
  );
};
