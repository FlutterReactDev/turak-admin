import { useGetPaymentTypeQuery } from "@/api/PaymentType";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FC } from "react";

interface PaymentTypeSelectProps {
  value: number | undefined;
  onChange: (value: number) => void;
}

export const PaymentTypeSelect: FC<PaymentTypeSelectProps> = (props) => {
  const { onChange, value } = props;
  const { data } = useGetPaymentTypeQuery();
  return (
    <Select
      value={value ? `${value}` : undefined}
      onValueChange={(value) => onChange(parseInt(value))}
    >
      <SelectTrigger>
        <SelectValue placeholder="Принимаемая оплата" />
      </SelectTrigger>
      <SelectContent>
        {data?.result.map(({ value, name }) => {
          return <SelectItem value={`${value}`}>{name}</SelectItem>;
        })}
      </SelectContent>
    </Select>
  );
};
