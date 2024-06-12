import { useGetObjectStarRatingQuery } from "@/api/ObjectStarRating";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FC } from "react";
export interface ObjectStarRatingSelectProps {
  value?: number | undefined;
  onChange: (value: number) => void;
}
export const ObjectStarRatingSelect: FC<ObjectStarRatingSelectProps> = (
  props
) => {
  const { onChange, value } = props;
  const { data } = useGetObjectStarRatingQuery();
  return (
    <Select
      value={value ? `${value}` : undefined}
      onValueChange={(value) => {
        onChange(parseInt(value));
      }}
    >
      <SelectTrigger>
        <SelectValue placeholder="Выберите" />
      </SelectTrigger>
      <SelectContent>
        {data?.result.map(({ value, name }) => {
          return (
            <SelectItem
              key={value}
              value={`${value}`}
              onSelect={() => {
                onChange(value);
              }}
            >
              {name}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
