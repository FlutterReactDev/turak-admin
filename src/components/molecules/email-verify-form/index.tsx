import { useGetVerifyEmailQuery, useVerifyEmailMutation } from "@/api/Auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputOTP,
  InputOTPSlot,
  InputOTPGroup,
} from "@/components/ui/input-otp";
import { LoadingButton } from "@/components/ui/loading-button";
import { useToast } from "@/components/ui/use-toast";
import { isFetchBaseQueryError } from "@/lib/server-error-handler";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { useEffect, useState } from "react";
import { toast as sonnerToast } from "sonner";
export const EmailVerifyForm = () => {
  const { data, isSuccess } = useGetVerifyEmailQuery();
  const [verify, { isLoading }] = useVerifyEmailMutation();
  const [optValue, setOtpValue] = useState("");
  const { toast } = useToast();
  const onVerify = async () => {
    try {
      await verify(optValue).unwrap();
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

  useEffect(() => {
    if (isSuccess) {
      sonnerToast.info(data.details);
    }
  }, [isSuccess]);
  return (
    <Card className="mx-auto max-w-xl">
      <CardHeader>
        <CardTitle className="text-2xl">
          Подтвердите Ваш электронный адрес
        </CardTitle>
        <CardDescription>{data?.details}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center w-full">
        <InputOTP
          maxLength={5}
          pattern={REGEXP_ONLY_DIGITS}
          value={optValue}
          onChange={(value) => {
            setOtpValue(value);
          }}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
          </InputOTPGroup>
        </InputOTP>
      </CardContent>
      <CardFooter>
        <LoadingButton
          disabled={optValue.length < 5}
          loading={isLoading}
          onClick={onVerify}
          className="w-full"
        >
          Подтвердить
        </LoadingButton>
      </CardFooter>
    </Card>
  );
};
