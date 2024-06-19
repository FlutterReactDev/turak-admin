import { RoomPostingRulesForm } from "@/components/forms/room-posting-rules-form";
import { PostingRulesType } from "@/components/forms/room-posting-rules-form/schema";
import { Section } from "@/components/molecules/section";
import { Button } from "@/components/ui/button";
import { NestedForm } from "@/utils/nested-from";
import { FC } from "react";

interface RoomPostingRulesSectionProps {
  form: NestedForm<PostingRulesType>;
}
export const RoomPostingRulesSection: FC<RoomPostingRulesSectionProps> = (
  props
) => {
  const { form } = props;
  const { formState } = form;
  return (
    <Section
      title="Правила размещения"
      description="Правила проживания можно будет всегда настроить после публикации
                объявления на странице «Настройки бронирования»."
      actions={<Button disabled={!formState.isDirty}>Сохранить</Button>}
    >
      <RoomPostingRulesForm form={form} />
    </Section>
  );
};
