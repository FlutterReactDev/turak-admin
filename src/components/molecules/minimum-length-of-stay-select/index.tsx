import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FC, useMemo } from "react";

interface MinimumLengthOfStaySelectProps {
  value?: number | undefined;
  onChange: (value: number) => void;
}
export const MinimumLengthOfStaySelect: FC<MinimumLengthOfStaySelectProps> = ({
  onChange,
  value,
}) => {
  const data = useMemo(() => {
    return [
      {
        name: "1 сутки (рекомендуется)",
        value: "1",
      },
      {
        name: "2 суток",
        value: "2",
      },
      {
        name: "3 суток",
        value: "3",
      },
      {
        name: "4 суток",
        value: "4",
      },
      {
        name: "5 суток",
        value: "5",
      },
      {
        name: "6 суток",
        value: "6",
      },
      {
        name: "7 суток",
        value: "7",
      },
      {
        name: "8 суток",
        value: "8",
      },
      {
        name: "9 суток",
        value: "9",
      },
      {
        name: "10 суток",
        value: "10",
      },
      {
        name: "11 суток",
        value: "11",
      },
      {
        name: "12 суток",
        value: "12",
      },
      {
        name: "13 суток",
        value: "13",
      },
      {
        name: "14 суток",
        value: "14",
      },
      {
        name: "15 суток",
        value: "15",
      },
      {
        name: "16 суток",
        value: "16",
      },
      {
        name: "17 суток",
        value: "17",
      },
      {
        name: "18 суток",
        value: "18",
      },
      {
        name: "19 суток",
        value: "19",
      },
      {
        name: "20 суток",
        value: "20",
      },
      {
        name: "21 суток",
        value: "21",
      },
      {
        name: "22 суток",
        value: "22",
      },
      {
        name: "23 суток",
        value: "23",
      },
      {
        name: "24 суток",
        value: "24",
      },
      {
        name: "25 суток",
        value: "25",
      },
      {
        name: "26 суток",
        value: "26",
      },
      {
        name: "27 суток",
        value: "27",
      },
      {
        name: "28 суток",
        value: "28",
      },
      {
        name: "29 суток",
        value: "29",
      },
      {
        name: "30 суток",
        value: "30",
      },
    ];
  }, []);
  return (
    <Select
      value={value ? `${value}` : undefined}
      onValueChange={(value) => onChange(parseInt(value))}
    >
      <SelectTrigger>
        <SelectValue placeholder="Минимальный срок проживания" />
      </SelectTrigger>
      <SelectContent>
        {data.map(({ value, name }) => {
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
