import { ObjectFeeAdditionalServiceForm } from "@/components/forms/object-fee-additional-service";
import { ObjectFeeAdditionalServiceType } from "@/components/forms/object-fee-additional-service/schema";
import { Section } from "@/components/molecules/section";
import { Button } from "@/components/ui/button";
import { NestedForm } from "@/utils/nested-from";
import { FC } from "react";

interface ObjectAdditionalServiceSectionProps {
  form: NestedForm<ObjectFeeAdditionalServiceType>;
}
export const ObjectAdditionalServiceSection: FC<
  ObjectAdditionalServiceSectionProps
> = ({ form }) => {
  const { formState } = form;
  return (
    <Section
      title="Плата за дополнительные услуги"
      actions={<Button disabled={!formState.isDirty}>Сохранить</Button>}
    >
      <ObjectFeeAdditionalServiceForm form={form} noBorder noTitle />
    </Section>
  );
};
