import { RoomGeneralForm } from "@/components/forms/room-general-form";
import { RoomGeneralType } from "@/components/forms/room-general-form/schema";
import { Section } from "@/components/molecules/section";
import { Button } from "@/components/ui/button";
import { NestedForm } from "@/utils/nested-from";
import { FC } from "react";
interface RoomGeneralSectionProps {
  form: NestedForm<RoomGeneralType>;
}
export const RoomGeneralSection: FC<RoomGeneralSectionProps> = ({ form }) => {
  const { formState } = form;
  return (
    <Section
      title="Основная информация"
      actions={<Button disabled={!formState.isDirty}>Сохранить</Button>}
    >
      <RoomGeneralForm form={form} noBorder noTitle />
    </Section>
  );
};
