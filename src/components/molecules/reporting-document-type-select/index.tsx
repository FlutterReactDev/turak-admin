import { useGetReportingDocumentTypeQuery } from "@/api/ReportingDocumentType";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FC } from "react";
export interface ReportingDocumentTypeSelectProps {
  value?: number | undefined;
  onChange: (value: number) => void;
}

export const ReportingDocumentTypeSelect: FC<
  ReportingDocumentTypeSelectProps
> = (props) => {
  const { onChange, value } = props;
  const { data } = useGetReportingDocumentTypeQuery();
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
