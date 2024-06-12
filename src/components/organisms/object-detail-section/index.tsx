import { ObjectT } from "@/api/Object/types";
import { Section } from "@/components/molecules/section";
import { FC } from "react";

interface ObjectDetailProps {
  data: ObjectT;
  
}
export const ObjectDetail: FC<ObjectDetailProps> = (props) => {
  const { data } = props;
  return (
    <Section title="Сведение">
        
    </Section>
  )
};
