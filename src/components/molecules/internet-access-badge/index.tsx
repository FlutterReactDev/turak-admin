import { useGetInternetAccessQuery } from "@/api/InternetAccess";
import { Badge } from "@/components/ui/badge";
import { FC } from "react";

interface InternetAccessBadgeProps {
  value: number;
}

export const InternetAccessBadge: FC<InternetAccessBadgeProps> = (props) => {
  const { value } = props;
  const { data, isSuccess } = useGetInternetAccessQuery();
  if (isSuccess) {
    return (
      <Badge variant={"outline"}>
        {data.result.filter((d) => d.value == value)[0].name}
      </Badge>
    );
  }
  return <></>;
};
