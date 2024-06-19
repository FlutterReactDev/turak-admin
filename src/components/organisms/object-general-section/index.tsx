import { ObjectGeneralForm } from "@/components/forms/object-general-form";
import { ObjectGeneralType } from "@/components/forms/object-general-form/schema";
import { Section } from "@/components/molecules/section";
import { Button } from "@/components/ui/button";
import { NestedForm } from "@/utils/nested-from";
import { FC } from "react";
interface ObjectGeneralSectionProps {
  form: NestedForm<ObjectGeneralType>;
}
export const ObjectGeneralSection: FC<ObjectGeneralSectionProps> = ({
  form,
}) => {
  const { formState } = form;
  return (
    <Section
      title="Основная информация"
      actions={<Button disabled={!formState.isDirty}>Сохранить</Button>}
    >
      <ObjectGeneralForm form={form} noBorder noTitle />
    </Section>
  );
};
