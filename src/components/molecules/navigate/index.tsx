import { useNavigate } from "@tanstack/react-router";
import { FC, useEffect } from "react";

export interface NavigateProps {
  to: string;
}

export const Navigate: FC<NavigateProps> = (props) => {
  const { to } = props;
  const navigate = useNavigate();
  useEffect(() => {
    navigate({ to });
  }, [navigate, to]);
  return <></>;
};
