import { Days } from "./days";

export const App = () => {
  return (
    <div className="grid grid-cols-[270px_1fr] [grid-template-areas:'sidebar_days''sidebar_frontdesk']">
      <Days />
    </div>
  );
};
