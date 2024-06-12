import { useGetParkingQuery } from "@/api/Parking";
import { Badge } from "@/components/ui/badge";
import { FC } from "react";

interface ParkingBadgeProps {
  value: number;
}
export const ParkingBadge: FC<ParkingBadgeProps> = (props) => {
  const { value } = props;
  const { data, isSuccess } = useGetParkingQuery();

  if (isSuccess) {
    return (
      <Badge variant={"outline"}>
        {data.result.filter((v) => v.value == value)[0].name}
      </Badge>
    );
  }

  return <></>;
};
