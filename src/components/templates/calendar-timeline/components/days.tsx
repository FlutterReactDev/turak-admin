import { useSelector } from "react-redux";
import { getColumnDays } from "../store/selectors";
import { Day } from "./day";

export const Days = () => {
  const days = useSelector(getColumnDays);
  console.log(days);

  return (
    <div className="[grid-area:days] overflow-hidden">
      <div className="cursor-ew-resize flex ">
        {days.map((day, index) => {
          return <Day key={index} {...day} />;
        })}
      </div>
    </div>
  );
};
