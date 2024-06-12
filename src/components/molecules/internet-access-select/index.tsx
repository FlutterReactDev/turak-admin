import { useGetInternetAccessQuery } from "@/api/InternetAccess";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FC } from "react";

interface InternetAccessSelectProps {
  value: number | undefined;
  onChange: (value: number) => void;
}

export const InternetAccessSelect: FC<InternetAccessSelectProps> = (props) => {
  const { onChange, value } = props;
  const { data } = useGetInternetAccessQuery();

  return (
    <Select
      value={value ? `${value}` : undefined}
      onValueChange={(value) => {
        onChange(parseInt(value));
      }}
    >
      <SelectTrigger>
        <SelectValue placeholder="Выберите" />
      </SelectTrigger>
      <SelectContent>
        {data?.result.map(({ value, name }) => {
          return (
            <SelectItem
              onSelect={() => {
                onChange(value);
              }}
              value={`${value}`}
            >
              {name}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
