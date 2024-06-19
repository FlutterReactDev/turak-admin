import { useLoginMutation } from "@/api/Auth";
import { PasswordInput } from "@/components/atoms/password-input";
import { PhoneInput } from "@/components/atoms/phone-input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { isFetchBaseQueryError } from "@/lib/server-error-handler";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "@tanstack/react-router";
import { Loader2 } from "lucide-react";
import qs from "qs";
import { useForm } from "react-hook-form";
import { LoginSchema, LoginType } from "./schema";
export function LoginForm() {
  const { toast } = useToast();
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();

  const form = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = async ({ password, phone }: LoginType) => {
    const parsedQueryString = qs.parse(window.location.search.slice(1));

    try {
      await login({ password, phoneNumber: phone }).unwrap();

      if (parsedQueryString.from && typeof parsedQueryString.from == "string") {
        navigate({ to: parsedQueryString.from });
      } else {
        navigate({ to: "/a/" });
      }
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
    <Card className="mx-auto max-w-xl">
      <CardHeader>
        <CardTitle className="text-2xl">Авторизация</CardTitle>
        <CardDescription>
          Введите e-mail указаный при регистрации и пароль от аккаунта
        </CardDescription>
      </CardHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Номер телефона</FormLabel>
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
              </div>
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center">
                        <FormLabel>Пароль</FormLabel>
                        <Link
                          to="/reset-password"
                          className="ml-auto inline-block text-sm underline"
                        >
                          Забыли пароль?
                        </Link>
                      </div>

                      <FormControl>
                        <PasswordInput {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                type="submit"
                className="w-full"
                {...(isLoading && {
                  disabled: true,
                })}
              >
                {isLoading && <Loader2 className="animate-spin" />}
                {!isLoading && "Войти"}
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Нет аккаунта?{" "}
              <Link to="/register" className="underline">
                Регистрация
              </Link>
            </div>
          </CardContent>
        </form>
      </Form>
    </Card>
  );
}
