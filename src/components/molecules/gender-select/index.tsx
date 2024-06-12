import { useGetGendersQuery } from "@/api/Gender";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FC } from "react";

interface GenderSelectProps {
  value: number | undefined;
  onChange: (value: number) => void;
}

export const GenderSelect: FC<GenderSelectProps> = (props) => {
  const { onChange, value } = props;
  const { data } = useGetGendersQuery();
  return (
    <Select
      value={value ? `${value}` : undefined}
      onValueChange={(value) => {
        onChange(parseInt(value));
      }}
    >
      <SelectTrigger>
        <SelectValue placeholder="Ввберите Пол" />
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
