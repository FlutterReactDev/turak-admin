import { ObjectAdditionalComfortForm } from "@/components/forms/object-additional-comfort-form";
import { ObjectAdditionalComfortType } from "@/components/forms/object-additional-comfort-form/schema";
import { Section } from "@/components/molecules/section";
import { Button } from "@/components/ui/button";
import { NestedForm } from "@/utils/nested-from";
import { FC } from "react";
import { FieldError } from "react-hook-form";

interface ObjectAdditionalComfortSectionProps {
  form: NestedForm<ObjectAdditionalComfortType>;
  formState: {
    invalid: boolean;
    isDirty: boolean;
    isTouched: boolean;
    isValidating: boolean;
    error?: FieldError;
  };
  onEdit: () => void;
}
export const ObjectAdditionalComfortSection: FC<
  ObjectAdditionalComfortSectionProps
> = ({ form, formState, onEdit }) => {
  return (
    <Section
      title="Удобства и услуги"
      actions={
        <Button disabled={!formState.isDirty} onClick={onEdit}>
          Сохранить
        </Button>
      }
    >
      <ObjectAdditionalComfortForm form={form} noBorder noTitle />
    </Section>
  );
};
