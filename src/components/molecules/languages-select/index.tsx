import { useGetLanguagesQuery } from "@/api/Languages";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FC } from "react";
export interface LanguageSelectProps {
  value?: number | undefined;
  onChange: (value: number) => void;
}
export const LanguageSelect: FC<LanguageSelectProps> = (props) => {
  const { onChange, value } = props;
  const { data } = useGetLanguagesQuery();

  return (
    <Select
      value={value ? `${value}` : undefined}
      onValueChange={(value) => onChange(parseInt(value))}
    >
      <SelectTrigger>
        <SelectValue placeholder="Выберите язык" />
      </SelectTrigger>
      <SelectContent>
        {data?.result.map(({ id, name, symbol }) => {
          return (
            <SelectItem value={`${id}`}>
              {name} <Badge>{symbol}</Badge>
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
