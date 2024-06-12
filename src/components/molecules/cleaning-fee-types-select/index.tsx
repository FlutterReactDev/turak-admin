import { useGetCleaningFeeTypesQuery } from "@/api/CleaningFeeTypes";
import { FC } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export interface CleaningFeeTypesSelectProps {
  value?: number | undefined;
  onChange: (value: number) => void;
}
export const CleaningFeeTypesSelect: FC<CleaningFeeTypesSelectProps> = (
  props
) => {
  const { onChange, value } = props;
  const { data } = useGetCleaningFeeTypesQuery();
  return (
    <Select
      value={`${value}`}
      onValueChange={(value) => onChange(parseInt(value))}
    >
      <SelectTrigger>
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        {data?.result.map(({ value, name }) => {
          return <SelectItem value={`${value}`}>{name}</SelectItem>;
        })}
      </SelectContent>
    </Select>
  );
};
