import { useLogoutMutation, useResetPasswordMutation } from "@/api/Auth";
import { PasswordInput } from "@/components/atoms/password-input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
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
import { useNavigate, useParams } from "@tanstack/react-router";

import { Loader2 } from "lucide-react";

import { useForm } from "react-hook-form";
import { InferType, object, ref, string } from "yup";

const resetPasswordSchema = object({
  newPassword: string()
    .min(6, "Необходимо указать пaроль не меньше 6 символов")
    .required("Необходимо указать пaроль"),
  confirmNewPassword: string()
    .oneOf([ref("newPassword")], "Пороли должны быть похожи")
    .required("Необходимо указать пороль"),
});

type ResetPasswordType = InferType<typeof resetPasswordSchema>;
export const ResetForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { code } = useParams({
    from: "/reset-password/$code",
  });
  const [logout] = useLogoutMutation();
  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const form = useForm({
    resolver: yupResolver(resetPasswordSchema),
  });
  const {
    formState: { isValid },
  } = form;

  const onSubmit = async ({
    newPassword,
    confirmNewPassword,
  }: ResetPasswordType) => {
    try {
      await resetPassword({
        confirmNewPassword,
        newPassword,
        token: code,
      }).unwrap();

      toast({
        title: "Сброс пароля",
        description: "Ваш пароль сброшен",
        variant: "success",
      });
      navigate({
        to: "/login",
      });
      await logout().unwrap();
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
            description: errMsg.details,
          });
        }
      }
    }
  };

  return (
    <Card className="max-w-2xl w-full  relative">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Сброс пороля</CardTitle>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="grid gap-4">
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Новый пароль</FormLabel>
                  <FormControl>
                    <PasswordInput placeholder="Новый пароль" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmNewPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Подтвердите новый пароль</FormLabel>
                  <FormControl>
                    <PasswordInput
                      placeholder="Подтвердите новый пароль"
                      {...field}
                    />
                  </FormControl>
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
              disabled={!isValid}
            >
              {isLoading && <Loader2 className="animate-spin" />}
              {!isLoading && "Отправить код"}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};
