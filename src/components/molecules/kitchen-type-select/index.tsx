import { useGetKitchenTypeApiQuery } from "@/api/KitchenType";
import { FC } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
interface KitchenTypeSelectProps {
  value?: number | undefined;
  onChange: (value: number) => void;
}

export const KitchenTypeSelect: FC<KitchenTypeSelectProps> = (props) => {
  const { onChange, value } = props;
  const { data } = useGetKitchenTypeApiQuery();
  return (
    <Select
      value={value ? `${value}` : undefined}
      onValueChange={(value) => onChange(parseInt(value))}
    >
      <SelectTrigger>
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        {data?.result.map(({ value, name }) => {
          return (
            <SelectItem key={value} value={`${value}`}>
              {name}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
