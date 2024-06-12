import { FC } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetMealServiceTypesQuery } from "@/api/MealServiceTypes";
interface MealServiceTypesSelectProps {
  value?: number | undefined;
  onChange: (value: number) => void;
}

export const MealServiceTypesSelect: FC<MealServiceTypesSelectProps> = (
  props
) => {
  const { onChange, value } = props;
  const { data } = useGetMealServiceTypesQuery();
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
