import { ObjectGeneralForm } from "@/components/forms/object-general-form";
import { ObjectGeneralType } from "@/components/forms/object-general-form/schema";
import { Section } from "@/components/molecules/section";
import { Button } from "@/components/ui/button";
import { NestedForm } from "@/utils/nested-from";
import { FC } from "react";
import { FieldError } from "react-hook-form";
interface ObjectGeneralSectionProps {
  form: NestedForm<ObjectGeneralType>;
  formState: {
    invalid: boolean;
    isDirty: boolean;
    isTouched: boolean;
    isValidating: boolean;
    error?: FieldError;
  };
  onEdit: () => void;
}
export const ObjectGeneralSection: FC<ObjectGeneralSectionProps> = ({
  form,
  formState,
  onEdit,
}) => {
  return (
    <Section
      title="Основная информация"
      actions={
        <Button onClick={onEdit} disabled={!formState.isDirty}>
          Сохранить
        </Button>
      }
    >
      <ObjectGeneralForm form={form} noBorder noTitle />
    </Section>
  );
};
