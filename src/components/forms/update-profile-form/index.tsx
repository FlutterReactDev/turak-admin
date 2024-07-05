import { CountrySelect } from "@/components/molecules/country-select";
import { GenderSelect } from "@/components/molecules/gender-select";
import { LanguageSelect } from "@/components/molecules/languages-select";
import { Badge } from "@/components/ui/badge";
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
import { useFieldArray, useForm } from "react-hook-form";
import { UpdateProfileType, updateProfileSchema } from "./schema";

import { User } from "@/api/User/types";
import { AddPhone } from "@/components/molecules/add-phone-form";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Phone } from "lucide-react";
import { FC, useState } from "react";
import { PhoneButton } from "./phone-button";
import { format } from "date-fns";
import { useUpdateMutation } from "@/api/User";
import { isFetchBaseQueryError } from "@/lib/server-error-handler";
import { useToast } from "@/components/ui/use-toast";
import { LoadingButton } from "@/components/ui/loading-button";
interface UpdateProfileFormProps {
  data: User;
}
export const UpdateProfileForm: FC<UpdateProfileFormProps> = (props) => {
  const { data } = props;
  const [update, { isLoading }] = useUpdateMutation();
  const form = useForm({
    resolver: yupResolver(updateProfileSchema),
    defaultValues: {
      ...data,
      dateOfBirth: format(new Date(data.dateOfBirth), "yyyy-MM-dd"),
    },
  });

  const { toast } = useToast();

  const { formState } = form;

  const phoneNumbers = useFieldArray({
    control: form.control,
    name: "phoneNumbers",
  });

  const onSubmit = async (formData: UpdateProfileType) => {
    try {
      await update({
        id: data.id,
        countryID: formData.countryID,
        dateOfBirth: formData.dateOfBirth,
        email: formData.email,
        gender: formData.gender,
        languageID: formData.languageID,
        name: formData.name,
        phoneNumbers: formData.phoneNumbers,
        surname: formData.surname,
      }).unwrap();
    } catch (error) {
      if (isFetchBaseQueryError(error)) {
        const errMsg = "error" in error ? error.error : error.data;
        if (typeof errMsg == "string") {
          toast({
            variant: "destructive",
            title: errMsg,
          });
        } else {
          toast({
            variant: "destructive",
            title: errMsg.message,
          });
        }
      }
    }
  };

  const [open, setOpen] = useState(false);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-2">
          <div className="grid grid-cols-2 gap-2 items-start">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Имя</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Имя" {...field} />
                  </FormControl>
                  <FormDescription>Ваше имя</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="surname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Фамилия</FormLabel>
                  <FormControl>
                    <Input placeholder="Фамилия" type="text" {...field} />
                  </FormControl>
                  <FormDescription>Ваша фамилия</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Пол</FormLabel>
                <FormControl>
                  <GenderSelect value={field.value} onChange={field.onChange} />
                </FormControl>
                <FormDescription>Ваш пол</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dateOfBirth"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Дата рождения</FormLabel>
                <FormControl>
                  <Input placeholder="Дата рождения" type="date" {...field} />
                </FormControl>
                <FormDescription>Ваша дата рождения</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="countryID"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Страна</FormLabel>
                <FormControl>
                  <CountrySelect
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormDescription>Укажите страну</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="languageID"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Язык</FormLabel>
                <FormControl>
                  <LanguageSelect
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormDescription>Укажите язык</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Почта</FormLabel>
                <FormControl>
                  <Input {...field} type="email" placeholder="Почта" />
                </FormControl>
                <FormDescription>Укажите почту</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <h1 className="mt-4 text-lg">Номера телефона</h1>
          <div className="flex flex-wrap gap-3 mt-2">
            {phoneNumbers.fields.map((phoneNum, index) => {
              const { phoneNumber, id, isMain } = phoneNum;
              return (
                <div className="relative" key={id}>
                  {isMain && (
                    <Badge className="absolute top-0 translate-y-[-50%] left-2 z-30">
                      Главный
                    </Badge>
                  )}

                  <PhoneButton
                    value={phoneNumber}
                    phoneNumbers={phoneNumbers.fields}
                    onDelete={() => {
                      phoneNumbers.remove(index);
                    }}
                    onEdit={(phone) => {
                      phoneNumbers.update(index, {
                        ...phoneNum,
                        phoneNumber: phone,
                      });
                    }}
                    isMain={isMain}
                    onClick={() => {
                      const num = phoneNumbers.fields.find(({ isMain }) => {
                        return isMain;
                      });

                      const numIdx = phoneNumbers.fields.findIndex(
                        ({ isMain }) => {
                          return isMain;
                        }
                      );

                      if (num) {
                        phoneNumbers.update(numIdx, {
                          ...num,
                          isMain: false,
                        });
                      }
                      phoneNumbers.update(index, {
                        ...phoneNum,
                        isMain: true,
                      });
                    }}
                  />
                </div>
              );
            })}
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger>
                <Button>
                  <Phone /> Добавить номер телефона
                </Button>
              </DialogTrigger>
              <DialogContent>
                <AddPhone
                  phoneNumbers={phoneNumbers.fields}
                  onAdd={(phone) => {
                    phoneNumbers.append({
                      id: 0,
                      isDelete: false,
                      isMain: false,
                      phoneNumber: phone,
                    });
                    setOpen(false);
                  }}
                />
              </DialogContent>
            </Dialog>
          </div>

          <LoadingButton
            type="submit"
            className="mt-4"
            disabled={!formState.isDirty}
            loading={isLoading}
          >
            Сохранить
          </LoadingButton>
        </div>
      </form>
    </Form>
  );
};
