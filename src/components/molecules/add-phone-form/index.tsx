import { UserPhoneNumber } from "@/api/User/types";
import { PhoneInput } from "@/components/atoms/phone-input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { AddPhoneType, addPhoneSchema } from "./schema";
interface AddPhoneProps {
  onAdd: (phone: string) => void;
  phoneNumbers: UserPhoneNumber[];
  defaultPhone?: string;
}
export const AddPhone: FC<AddPhoneProps> = (props) => {
  const { onAdd, phoneNumbers, defaultPhone } = props;

  const form = useForm({
    resolver: yupResolver(addPhoneSchema),
    defaultValues: {
      phone: defaultPhone || "",
    },
  });

  const onSubmit = (data: AddPhoneType) => {
    if (
      !phoneNumbers.some(({ phoneNumber }) => {
        return phoneNumber == data.phone;
      })
    ) {
      onAdd(data.phone);
    } else {
      toast.error("У вас уже есть такой номер");
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Form {...form}>
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Номер телефона</FormLabel>
              <FormControl>
                <PhoneInput
                  onChange={field.onChange}
                  value={field.value}
                  ref={field.ref}
                />
              </FormControl>
              <FormDescription>Укажите номер телефона</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="mt-4"
          disabled={!form.formState.isDirty}
        >
          Сохранить
        </Button>
      </Form>
    </form>
  );
};
