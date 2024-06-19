import { ObjectMealForm } from "@/components/forms/object-meal-form";
import { ObjectMealType } from "@/components/forms/object-meal-form/schema";
import { Section } from "@/components/molecules/section";
import { Button } from "@/components/ui/button";
import { NestedForm } from "@/utils/nested-from";
import { FC } from "react";

interface ObjectMealSectionProps {
  form: NestedForm<ObjectMealType>;
}
export const ObjectMealSection: FC<ObjectMealSectionProps> = ({ form }) => {
  const { formState } = form;
  return (
    <Section
      title="Питание"
      actions={<Button disabled={!formState.isDirty}>Сохранить</Button>}
    >
      <ObjectMealForm form={form} noBorder noTitle />
    </Section>
  );
};
