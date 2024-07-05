import { ObjectDetailForm } from "@/components/forms/object-detail-form";
import { ObjectDetailType } from "@/components/forms/object-detail-form/schema";
import { Section } from "@/components/molecules/section";
import { Button } from "@/components/ui/button";
import { NestedForm } from "@/utils/nested-from";
import { FC } from "react";
import { FieldError } from "react-hook-form";
interface ObjectDetailProps {
  form: NestedForm<ObjectDetailType>;
  formState: {
    invalid: boolean;
    isDirty: boolean;
    isTouched: boolean;
    isValidating: boolean;
    error?: FieldError;
  };
  onEdit: () => void;
}
export const ObjectDetailSection: FC<ObjectDetailProps> = ({
  form,
  formState,
  onEdit
}) => {
  return (
    <Section
      title="Сведение"
      actions={<Button onClick={onEdit} disabled={!formState.isDirty}>Сохранить</Button>}
    >
      <ObjectDetailForm form={form} noBorder noTitle />
    </Section>
  );
};
