import { RoomKitchenEquipmentForm } from "@/components/forms/room-kitchen-equipment-form";
import { RoomKitchenEquipmentType } from "@/components/forms/room-kitchen-equipment-form/schema";
import { Section } from "@/components/molecules/section";
import { Button } from "@/components/ui/button";
import { NestedForm } from "@/utils/nested-from";
import { FC } from "react";
interface RoomKitchenEquipmentSectionProps {
  form: NestedForm<RoomKitchenEquipmentType>;
}
export const RoomKitchenEquipmentSection: FC<
  RoomKitchenEquipmentSectionProps
> = (props) => {
  const { form } = props;
  const { formState } = form;
  return (
    <Section
      title="Кухонное оборудование"
      actions={<Button disabled={!formState.isDirty}>Сохранить</Button>}
    >
      <RoomKitchenEquipmentForm form={form} />
    </Section>
  );
};
