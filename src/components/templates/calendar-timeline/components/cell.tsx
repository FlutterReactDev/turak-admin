import { FC } from "react";

interface CellProps {
  inRange: boolean;
  cost: number;
  isPast: boolean;
  isBlocked: boolean;
  isRangeBorderLeft: boolean;
  isRangeBorderRight: boolean;
  onMouseMove: (date: Date) => void;
  onMouseDown: (date: Date) => void;
  onMouseUp: () => void;
  currency: string;
  date: Date;
}

export const Cell: FC<CellProps> = (props) => {
    return 
};
