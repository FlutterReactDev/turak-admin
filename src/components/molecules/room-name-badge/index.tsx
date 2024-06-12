import { useGetRoomTypeNamesQuery } from "@/api/RoomTypeNames";
import { Badge } from "@/components/ui/badge";
import { FC } from "react";

interface RoomNameBadgeProps {
  value: number;
  anObjectPropertyTypeId: number;
}
export const RoomNameBadge: FC<RoomNameBadgeProps> = (props) => {
  const { value, anObjectPropertyTypeId } = props;
  const { data, isSuccess } = useGetRoomTypeNamesQuery(anObjectPropertyTypeId);

  if (isSuccess) {
    return (
      <Badge variant={"outline"}>
        {
          data.result.filter(({ id }) => {
            return id == value;
          })[0].name
        }
      </Badge>
    );
  }

  return <></>;
};
