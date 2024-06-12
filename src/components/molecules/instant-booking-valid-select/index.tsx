import { FC } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetInstantBookingValidQuery } from "@/api/InstantBookingValid";
export interface InstantBookingValidSelectProps {
  value?: number | undefined;
  onChange: (value: number) => void;
}
export const InstantBookingValidSelect: FC<InstantBookingValidSelectProps> = (
  props
) => {
  const { onChange, value } = props;
  const { data } = useGetInstantBookingValidQuery();
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
