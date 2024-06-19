import { RoomViewFromWindowForm } from "@/components/forms/room-view-from-window-form";
import { RoomViewFromWindowType } from "@/components/forms/room-view-from-window-form/schema";
import { Section } from "@/components/molecules/section";
import { Button } from "@/components/ui/button";
import { NestedForm } from "@/utils/nested-from";
import { FC } from "react";
export interface RoomViewFromWindowSectionProps {
  form: NestedForm<RoomViewFromWindowType>;
}
export const RoomViewFromWindowSection: FC<RoomViewFromWindowSectionProps> = ({
  form,
}) => {
  const { formState } = form;
  return (
    <Section
      title="Вид из окон"
      description="Укажите, что можно увидеть из окон вашего объекта. В разделе
      «Фото» загрузите фотографии всех видов, которые вы отметили"
      actions={<Button disabled={!formState.isDirty}>Сохранить</Button>}
    >
      <RoomViewFromWindowForm form={form} />
    </Section>
  );
};
