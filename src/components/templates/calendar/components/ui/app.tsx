import { FC } from "react";
import { Providers } from "../../providers";
import { Calendar } from "./Calendar";
interface AppProps {
  objectId: number;
}
export const App: FC<AppProps> = (props) => {
  const { objectId } = props;
  return (
    <Providers>
      <Calendar objectId={objectId}/>
    </Providers>
  );
};
