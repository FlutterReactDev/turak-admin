import { useGetRoomTypeNamesQuery } from "@/api/RoomTypeNames";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FC } from "react";
export interface RoomTypeNamesSelectProps {
  value?: number | undefined;
  onChange: (value: number) => void;
  anObjectPropertyTypeId: number;
}
export const RoomTypeNamesSelect: FC<RoomTypeNamesSelectProps> = (props) => {
  const { onChange, value, anObjectPropertyTypeId } = props;

  const { data } = useGetRoomTypeNamesQuery(anObjectPropertyTypeId);

  return (
    <Select
      value={value ? `${value}` : undefined}
      onValueChange={(value) => onChange(parseInt(value))}
    >
      <SelectTrigger>
        <SelectValue placeholder="Название номера" />
      </SelectTrigger>
      <SelectContent>
        {data?.result.map(({ id, name }) => {
          return (
            <SelectItem key={value} value={`${id}`}>
              {name}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
