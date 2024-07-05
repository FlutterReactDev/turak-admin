import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { yupResolver } from "@hookform/resolvers/yup";

import { RegisterSchema, RegisterType } from "./schema";

import { useRegisterMutation } from "@/api/Auth";
import { PasswordInput } from "@/components/atoms/password-input";
import { PhoneInput } from "@/components/atoms/phone-input";
import { useToast } from "@/components/ui/use-toast";
import { isFetchBaseQueryError } from "@/lib/server-error-handler";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { CountrySelect } from "../country-select";
import { GenderSelect } from "../gender-select";
import { LanguageSelect } from "../languages-select";
import { Link, useNavigate } from "@tanstack/react-router";

export const RegisterForm = () => {
  const [register, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();
  const form = useForm({
    resolver: yupResolver(RegisterSchema),
  });
  const { toast } = useToast();
  const onSubmit = async (data: RegisterType) => {
    try {
      await register({
        ...data,
        phoneNumbers: [
          {
            isDelete: false,
            isMain: true,
            phoneNumber: data.phone,
          },
        ],
      }).unwrap();
      navigate({
        to: "/login",
      });
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
  return (
    <Card className="max-w-2xl w-full  relative">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Регистрация</CardTitle>
        <CardDescription>Создайте аккаунт</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="grid gap-4">
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
                    <GenderSelect
                      value={field.value}
                      onChange={field.onChange}
                    />
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
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Пароль</FormLabel>
                  <FormControl>
                    <PasswordInput {...field} placeholder="Укажите пароль" />
                  </FormControl>
                  <FormDescription>Укажите пароль</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Подтвердите пароль</FormLabel>
                  <FormControl>
                    <PasswordInput
                      {...field}
                      placeholder="Подтвердите пароль"
                    />
                  </FormControl>
                  <FormDescription>Подтвердите пароль</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
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
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full"
              {...(isLoading && {
                disabled: true,
              })}
            >
              {isLoading && <Loader2 className="animate-spin" />}
              {!isLoading && "Регистрация"}
            </Button>
          </CardFooter>
          <div className="mb-4 text-center text-sm">
            Есть аккаунта?{" "}
            <Link to="/login" className="underline">
              Войти
            </Link>
          </div>
        </form>
      </Form>
    </Card>
  );
};
