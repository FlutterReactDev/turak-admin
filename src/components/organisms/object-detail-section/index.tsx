import { ObjectDetailForm } from "@/components/forms/object-detail-form";
import { ObjectDetailType } from "@/components/forms/object-detail-form/schema";
import { Section } from "@/components/molecules/section";
import { Button } from "@/components/ui/button";
import { NestedForm } from "@/utils/nested-from";
import { FC } from "react";
interface ObjectDetailProps {
  form: NestedForm<ObjectDetailType>;
}
export const ObjectDetailSection: FC<ObjectDetailProps> = ({ form }) => {
  const { formState } = form;
  return (
    <Section
      title="Сведение"
      actions={<Button disabled={!formState.isDirty}>Сохранить</Button>}
    >
      <ObjectDetailForm form={form} noBorder noTitle />
    </Section>
  );
};
