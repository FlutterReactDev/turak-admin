import { useGetCurrenciesQuery } from "@/api/Currencies";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FC } from "react";
interface CurrencySelectProps {
  value: number;
  onChange: (value: number) => void;
}
export const CurrencySelect: FC<CurrencySelectProps> = (props) => {
  const { onChange, value } = props;
  const { data } = useGetCurrenciesQuery();

  return (
    <Select
      value={value ? `${value}` : undefined}
      onValueChange={(value) => onChange(parseInt(value))}
    >
      <SelectTrigger>
        <SelectValue placeholder="Валюта для расчётов" />
      </SelectTrigger>
      <SelectContent>
        {data?.result.map(({ id, name, symbol }) => {
          return (
            <SelectItem value={`${id}`}>
              {symbol} {name}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
