import { ObjectAdditionalComfortForm } from "@/components/forms/object-additional-comfort-form";
import { ObjectAdditionalComfortType } from "@/components/forms/object-additional-comfort-form/schema";
import { Section } from "@/components/molecules/section";
import { Button } from "@/components/ui/button";
import { NestedForm } from "@/utils/nested-from";
import { FC } from "react";

interface ObjectAdditionalComfortSectionProps {
  form: NestedForm<ObjectAdditionalComfortType>;
}
export const ObjectAdditionalComfortSection: FC<
  ObjectAdditionalComfortSectionProps
> = ({ form }) => {
  const { formState } = form;
  return (
    <Section title="Удобства и услуги" actions={<Button disabled={!formState.isDirty}>Сохранить</Button>}>
      <ObjectAdditionalComfortForm form={form} noBorder noTitle />
    </Section>
  );
};
