import { useGetFoodTypeQuery } from "@/api/FoodType";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FC } from "react";
interface FoodTypeSelectProps {
  value?: number | undefined;
  onChange: (value: number) => void;
}
export const FoodTypeSelect: FC<FoodTypeSelectProps> = (props) => {
  const { onChange, value } = props;
  const { data } = useGetFoodTypeQuery();
  return (
    <Select
      value={value ? `${value}` : undefined}
      onValueChange={(value) => onChange(parseInt(value))}
    >
      <SelectTrigger>
        <SelectValue placeholder="Выберите" />
      </SelectTrigger>
      <SelectContent>
        {data?.result.map(({ value, name }) => {
          return <SelectItem value={`${value}`}>{name}</SelectItem>;
        })}
      </SelectContent>
    </Select>
  );
};
