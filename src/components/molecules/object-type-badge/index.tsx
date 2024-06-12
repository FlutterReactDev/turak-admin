import { useGetObjectTypeQuery } from "@/api/ObjectType";
import { Badge } from "@/components/ui/badge";
import { FC } from "react";

interface ObjectTypeBadgeProps {
  value: number;
}
export const ObjectTypeBadge: FC<ObjectTypeBadgeProps> = (props) => {
  const { value } = props;
  const { data, isSuccess } = useGetObjectTypeQuery();

  if (isSuccess) {
    return (
      <Badge variant={"outline"}>
        {data.result.filter(({ id }) => value == id)[0].name}
      </Badge>
    );
  }
  return <></>;
};
