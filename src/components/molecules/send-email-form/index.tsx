import { useGetResetPasswordMutation } from "@/api/Auth";
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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { isFetchBaseQueryError } from "@/lib/server-error-handler";
import { yupResolver } from "@hookform/resolvers/yup";

import { Loader2 } from "lucide-react";

import { useForm } from "react-hook-form";
import { InferType, object, string } from "yup";

const resetSchema = object({
  email: string().email().required(),
});

type ResetType = InferType<typeof resetSchema>;
export const SendEmailForm = () => {
  const { toast } = useToast();
  const [sendResetCode, { isLoading }] = useGetResetPasswordMutation();
  const form = useForm({
    resolver: yupResolver(resetSchema),
  });
  const {
    formState: { isValid },
  } = form;
  const onSubmit = async ({ email }: ResetType) => {
    try {
      const res = await sendResetCode(email).unwrap();
      toast({
        title: res.message,
        description: res.details,
        variant: "success",
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
        <CardTitle className="text-2xl">Сброс пороля</CardTitle>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="grid gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Почта</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Укажите почту"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    На указанную почту придет 6 значный код
                  </FormDescription>
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
