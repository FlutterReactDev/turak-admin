import { FC, useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export interface TimeSelectProps {
  value: string | undefined;
  onChange: (value: string) => void;
  placeholder: string;
}

export const TimeSelect: FC<TimeSelectProps> = (props) => {
  const { onChange, value, placeholder } = props;
  const times = useMemo(
    () => [
      "00:00",
      "01:00",
      "02:00",
      "03:00",
      "04:00",
      "05:00",
      "06:00",
      "07:00",
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
      "23:00",
    ],
    []
  );

  return (
    <Select
      value={value ? value : undefined}
      onValueChange={(value) => onChange(value)}
    >
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {times.map((value) => {
          return (
            <SelectItem key={value} value={`${value}`}>
              {value}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
