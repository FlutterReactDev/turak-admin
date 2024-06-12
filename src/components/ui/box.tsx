import { FC, HTMLAttributes } from "react";

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {}

export const Box: FC<BoxProps> = (props) => {
  return <div {...props} />;
};
