import { useGetAllObjectTypePropertyQuery } from "@/api/ObjectTypeProperty";
import { Badge } from "@/components/ui/badge";
import { FC } from "react";
interface ObjectPropertyTypeBadgeProps {
  value: number;
}

export const ObjectPropertyTypeBadge: FC<ObjectPropertyTypeBadgeProps> = (
  props
) => {
  const { value } = props;

  const { data, isSuccess } = useGetAllObjectTypePropertyQuery();

  if (isSuccess) {
    return (
      <Badge variant={"outline"}>
        {data.result.filter(({ id }) => value == id)[0].name}
      </Badge>
    );
  }

  return <></>;
};
