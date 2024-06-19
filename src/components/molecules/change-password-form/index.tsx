import { useChangePasswordMutation, useLogoutMutation } from "@/api/Auth";
import { PasswordInput } from "@/components/atoms/password-input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
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
import { useNavigate } from "@tanstack/react-router";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { InferType, object, ref, string } from "yup";
const changePasswordSchema = object({
  oldPassword: string()
    .min(6, "Необходимо указать пaроль не меньше 6 символов")
    .required("Необходимо указать пaроль"),
  newPassword: string()
    .min(6, "Необходимо указать пaроль не меньше 6 символов")
    .required("Необходимо указать пaроль"),
  confirmNewPassword: string()
    .oneOf([ref("newPassword")], "Пороли должны быть похожи")
    .required("Необходимо указать пороль"),
});

type ChangePasswordType = InferType<typeof changePasswordSchema>;
export const ChangePasswordForm = () => {
  const form = useForm({
    resolver: yupResolver(changePasswordSchema),
  });

  const [changePassword, { isLoading }] = useChangePasswordMutation();
  const [logout] = useLogoutMutation();
  const { isValid } = form.formState;
  const { toast } = useToast();
  const navigate = useNavigate();

  const onSubmit = async (data: ChangePasswordType) => {
    try {
      const response = await changePassword({
        ...data,
      }).unwrap();
      toast({
        title: response.message,
        description: response.details,
        variant: "success",
      });
      await logout().unwrap();
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
            description: errMsg.details,
          });
        }
      }
    }
  };

  return (
    <Card className=" w-full  relative border-0 p-0 shadow-none">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="grid gap-4">
            <FormField
              control={form.control}
              name="oldPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Старый пароль</FormLabel>
                  <FormControl>
                    <PasswordInput placeholder="Старый пароль" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
              {!isLoading && "Изменить пароль"}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};
