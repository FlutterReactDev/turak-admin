import { useGetSmokingOnSiteQuery } from "@/api/SmokingOnSite";
import { Badge } from "@/components/ui/badge";
import { FC } from "react";

interface SmokingBadgeProps {
  value: number;
}

export const SmokingBadge: FC<SmokingBadgeProps> = (props) => {
  const { value } = props;
  const { data, isSuccess } = useGetSmokingOnSiteQuery();

  if (isSuccess) {
    return (
      <Badge variant={"outline"}>
        {data.result.filter((v) => v.value == value)[0].name}
      </Badge>
    );
  }
  return <></>;
};
