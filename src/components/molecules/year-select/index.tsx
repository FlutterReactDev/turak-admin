import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { eachYearOfInterval, subYears } from "date-fns";
import { FC } from "react";

interface YearSelectProps {
  value: number | undefined;
  onChange: (value: number) => void;
  range: number;
}

export const YearSelect: FC<YearSelectProps> = (props) => {
  const { onChange, range, value } = props;
  const datesRange = eachYearOfInterval({
    start: subYears(new Date(), range),
    end: new Date(),
  })
    .map((date) => `${date.getFullYear()}`)
    .reverse();

  return (
    <Select
      value={value ? `${value}` : undefined}
      onValueChange={(value) => onChange(parseInt(value))}
    >
      <SelectTrigger>
        <SelectValue placeholder="Год постройки" />
      </SelectTrigger>
      <SelectContent>
        {datesRange.map((value) => {
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
