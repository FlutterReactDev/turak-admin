import { useGetFromBookingToCheckInQuery } from "@/api/FromBookingToCheckIn";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FC } from "react";
interface FromBookingToCheckInSelectProps {
  value?: number | undefined;
  onChange: (value: number) => void;
}
export const FromBookingToCheckInSelect: FC<FromBookingToCheckInSelectProps> = (
  props
) => {
  const { onChange, value } = props;
  const { data } = useGetFromBookingToCheckInQuery();
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
