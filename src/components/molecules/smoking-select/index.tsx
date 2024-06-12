import { useGetSmokingOnSiteQuery } from "@/api/SmokingOnSite";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FC } from "react";

export interface SmokingSelectProps {
  value: number | undefined;
  onChange: (value: number) => void;
}

export const SmokingSelect: FC<SmokingSelectProps> = (props) => {
  const { onChange, value } = props;
  const { data } = useGetSmokingOnSiteQuery();
  return (
    <Select
      value={value ? `${value}` : undefined}
      onValueChange={(value) => onChange(parseInt(value))}
    >
      <SelectTrigger>
        <SelectValue placeholder="Курение на территории" />
      </SelectTrigger>
      <SelectContent>
        {data?.result.map(({ value, name }) => {
          return <SelectItem value={`${value}`}>{name}</SelectItem>;
        })}
      </SelectContent>
    </Select>
  );
};
