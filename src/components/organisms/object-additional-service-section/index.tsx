import { ObjectFeeAdditionalServiceForm } from "@/components/forms/object-fee-additional-service";
import { ObjectFeeAdditionalServiceType } from "@/components/forms/object-fee-additional-service/schema";
import { Section } from "@/components/molecules/section";
import { Button } from "@/components/ui/button";
import { NestedForm } from "@/utils/nested-from";
import { FC } from "react";
import { FieldError } from "react-hook-form";

interface ObjectAdditionalServiceSectionProps {
  form: NestedForm<ObjectFeeAdditionalServiceType>;
  formState: {
    invalid: boolean;
    isDirty: boolean;
    isTouched: boolean;
    isValidating: boolean;
    error?: FieldError;
  };
  onEdit: () => void;
}
export const ObjectAdditionalServiceSection: FC<
  ObjectAdditionalServiceSectionProps
> = ({ form, formState, onEdit }) => {
  return (
    <Section
      title="Плата за дополнительные услуги"
      actions={
        <Button disabled={!formState.isDirty} onClick={onEdit}>
          Сохранить
        </Button>
      }
    >
      <ObjectFeeAdditionalServiceForm form={form} noBorder noTitle />
    </Section>
  );
};
