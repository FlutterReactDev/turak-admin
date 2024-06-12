import { useGetFloorTypeQuery } from "@/api/FloorType";
import { FC } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export interface FloorTypeSelectProps {
  value?: number | undefined;
  onChange: (value: number) => void;
}
export const FloorTypeSelect: FC<FloorTypeSelectProps> = (props) => {
  const { onChange, value } = props;
  const { data } = useGetFloorTypeQuery();

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
