import { useGetAllObjectsQuery } from "@/api/Object";
import { useGetRoomTypeNamesQuery } from "@/api/RoomTypeNames";
import { Badge } from "@/components/ui/badge";
import { FC } from "react";

interface RoomNameBadgeProps {
  value: number;
  anObjectId: number;
}
export const RoomNameBadge: FC<RoomNameBadgeProps> = (props) => {
  const { value, anObjectId } = props;

  const { data: objectsData, isSuccess: objectsIsSuccess } =
    useGetAllObjectsQuery();

  const { data, isSuccess } = useGetRoomTypeNamesQuery(
    objectsData?.result.filter(({ id }) => {
      id == anObjectId;
    })[0]?.anObjectTypeId as number,
    {
      skip: !objectsIsSuccess,
    }
  );

  if (isSuccess && objectsIsSuccess) {
    return (
      <Badge variant={"outline"}>
        {
          data.result.filter(({ id }) => {
            return id == value;
          })[0]?.name
        }
      </Badge>
    );
  }

  return <></>;
};
