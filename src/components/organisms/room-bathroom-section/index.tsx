import { RoomBathroomForm } from "@/components/forms/room-bathroom-form";
import { RoomBathroomType } from "@/components/forms/room-bathroom-form/schema";
import { Section } from "@/components/molecules/section";
import { Button } from "@/components/ui/button";
import { NestedForm } from "@/utils/nested-from";
import { FC } from "react";

interface RoomBathroomSectionProps {
  form: NestedForm<RoomBathroomType>;
}
export const RoomBathroomSection: FC<RoomBathroomSectionProps> = ({ form }) => {
  const { formState } = form;
  return (
    <Section
      title="Ванная комната"
      actions={<Button disabled={!formState.isDirty}>Сохранить</Button>}
    >
      <RoomBathroomForm form={form} noBorder noTitle />
    </Section>
  );
};
