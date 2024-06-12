import { useGetBedTypesQuery } from "@/api/BedTypes";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FC } from "react";

export interface BedTypesSelectProps {
  value?: number | undefined;
  onChange: (value: number) => void;
}

export const BedTypesSelect: FC<BedTypesSelectProps> = (props) => {
  const { onChange, value } = props;
  const { data } = useGetBedTypesQuery();
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
