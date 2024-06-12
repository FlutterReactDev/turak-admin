import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FC } from "react";
interface AgeSelectProps {
  onChange: (value: number) => void;
  value: number | undefined;
}
export const AgeSelect: FC<AgeSelectProps> = (props) => {
  const { onChange, value } = props;
  return (
    <Select
      value={value ? `${value}` : undefined}
      onValueChange={(value) => {
        onChange(parseInt(value));
      }}
    >
      <SelectTrigger>
        <SelectValue placeholder="Возраст" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="0">дети любого возраста</SelectItem>
        <SelectItem value="1">с 1 года</SelectItem>
        <SelectItem value="2">с 2 лет</SelectItem>
        <SelectItem value="3">с 3 лет</SelectItem>
        <SelectItem value="4">с 4 лет</SelectItem>
        <SelectItem value="5">с 5 лет</SelectItem>
        <SelectItem value="6">с 6 лет</SelectItem>
        <SelectItem value="7">с 7 лет</SelectItem>
        <SelectItem value="8">с 8 лет</SelectItem>
        <SelectItem value="9">с 9 лет</SelectItem>
        <SelectItem value="10">с 10 лет</SelectItem>
        <SelectItem value="11">с 11 лет</SelectItem>
        <SelectItem value="12">с 12 лет</SelectItem>
        <SelectItem value="13">с 13 лет</SelectItem>
        <SelectItem value="14">с 14 лет</SelectItem>
        <SelectItem value="15">с 15 лет</SelectItem>
        <SelectItem value="16">с 16 лет</SelectItem>
        <SelectItem value="17">с 17 лет</SelectItem>
      </SelectContent>
    </Select>
  );
};
