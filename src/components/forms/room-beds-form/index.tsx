import { FormCard } from "@/components/atoms/form-card";
import { FormItem, FormLabel } from "@/components/ui/form";
import { NestedForm } from "@/utils/nested-from";
import { RoomBedsType } from "./schema";
import { FC } from "react";
import { ObjectFormCard } from "../types";
import { useFieldArray } from "react-hook-form";
import { BedTypesSelect } from "@/components/molecules/bed-types-select";
import { Input } from "@/components/ui/input";
interface RoomBedsFormProps extends ObjectFormCard {
  form: NestedForm<RoomBedsType>;
}
export const RoomBedsForm: FC<RoomBedsFormProps> = (props) => {
  const { form, noBorder, noTitle } = props;
  const { control, path } = form;
  const beds = useFieldArray({
    control,
    name: path("beds"),
  });

  return (
    <FormCard
      title="Вместимость и спальные места"
      description=""
      noBorder={noBorder}
      noTitle={noTitle}
    >
      <FormItem>
        <FormLabel>Тип и количество кроватей</FormLabel>
        {beds.fields.map(({ bedType, count }, index) => {
          const onChangeBedType = (value: number) => {
            const prevVal = beds.fields[index];
            beds.update(index, {
              ...prevVal,
              bedType: value,
            });
          };

          const onChangeCount = (value: number) => {
            const prevVal = beds.fields[index];
            beds.update(index, {
              ...prevVal,
              count: value,
            });
          };

          return (
            <div className="flex gap-2">
              <BedTypesSelect onChange={onChangeBedType} value={bedType} />
              <Input
                value={count}
                onChange={({ target }) => {
                  onChangeCount(parseInt(target.value));
                }}
                type="number"
              />
            </div>
          );
        })}
      </FormItem>
    </FormCard>
  );
};
