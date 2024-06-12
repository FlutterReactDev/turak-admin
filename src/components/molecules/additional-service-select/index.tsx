import { useGetAdditionalServiceQuery } from "@/api/AdditionalService";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";
import { FC } from "react";

interface AdditionalServiceSelectProps {
  value: number | undefined;
  onChange: (value: number) => void;
}
export const AdditionalServiceSelect: FC<AdditionalServiceSelectProps> = (
  props
) => {
  const { onChange, value } = props;
  const { data } = useGetAdditionalServiceQuery();
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
          return <SelectItem value={`${value}`}>{name}</SelectItem>;
        })}
      </SelectContent>
    </Select>
  );
};
