import { RoomEquipmentForm } from "@/components/forms/room-equipment-form";
import { RoomEquipmentType } from "@/components/forms/room-equipment-form/schema";
import { Section } from "@/components/molecules/section";
import { Button } from "@/components/ui/button";
import { NestedForm } from "@/utils/nested-from";
import { FC } from "react";
interface RoomEquipmentSectionProps {
  form: NestedForm<RoomEquipmentType>;
}
export const RoomEquipmentSection: FC<RoomEquipmentSectionProps> = ({
  form,
}) => {
  const { formState } = form;
  return (
    <Section
      title="Оснащение"
      actions={<Button disabled={!formState.isDirty}>Сохранить</Button>}
    >
      <RoomEquipmentForm form={form} />
    </Section>
  );
};
