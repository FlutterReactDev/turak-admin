import { useGetPaymentTypeQuery } from "@/api/PaymentType";
import { Badge } from "@/components/ui/badge";
import { FC } from "react";

interface PaymentTypeBadgeProps {
  value: number;
}

export const PaymentTypeBadge: FC<PaymentTypeBadgeProps> = (props) => {
  const { value } = props;
  const { data, isSuccess } = useGetPaymentTypeQuery();

  if (isSuccess) {
    return (
      <Badge variant={"outline"}>
        {data.result.filter((v) => v.value == value)[0].name}
      </Badge>
    );
  }
  return <></>;
};
