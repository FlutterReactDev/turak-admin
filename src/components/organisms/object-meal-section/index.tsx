import { ObjectMealForm } from "@/components/forms/object-meal-form";
import { ObjectMealType } from "@/components/forms/object-meal-form/schema";
import { Section } from "@/components/molecules/section";
import { Button } from "@/components/ui/button";
import { NestedForm } from "@/utils/nested-from";
import { FC } from "react";
import { FieldError } from "react-hook-form";

interface ObjectMealSectionProps {
  form: NestedForm<ObjectMealType>;
  formState: {
    invalid: boolean;
    isDirty: boolean;
    isTouched: boolean;
    isValidating: boolean;
    error?: FieldError;
  };
  onEdit: () => void;
}
export const ObjectMealSection: FC<ObjectMealSectionProps> = ({
  form,
  formState,
  onEdit,
}) => {
  return (
    <Section
      title="Питание"
      actions={
        <Button onClick={onEdit} disabled={!formState.isDirty}>
          Сохранить
        </Button>
      }
    >
      <ObjectMealForm form={form} noBorder noTitle />
    </Section>
  );
};
