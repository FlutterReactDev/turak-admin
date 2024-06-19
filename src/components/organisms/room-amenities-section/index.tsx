import { RoomAmenitiesForm } from "@/components/forms/room-amenities-form";
import { RoomAmenitiesType } from "@/components/forms/room-amenities-form/schema";
import { Section } from "@/components/molecules/section";
import { Button } from "@/components/ui/button";
import { NestedForm } from "@/utils/nested-from";
import { FC } from "react";
interface RoomAmenitiesSectionProps {
  form: NestedForm<RoomAmenitiesType>;
}
export const RoomAmenitiesSection: FC<RoomAmenitiesSectionProps> = (props) => {
  const { form } = props;
  const { formState } = form;
  return (
    <Section
      title="Удобства"
      description="Популярные услуги и удобства, на которые чаще всего обращают
          внимание гости при поиске жилья. После публикации можно добавить
          другие"
      actions={<Button disabled={!formState.isDirty}>Сохранить</Button>}
    >
      <RoomAmenitiesForm form={form} noBorder noTitle />
    </Section>
  );
};
