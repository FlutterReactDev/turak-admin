import { ObjectTypeSelect } from "@/components/molecules/object-type-select";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { NestedForm } from "@/utils/nested-from";
import { ObjectTypeSchema } from "./schema";
import { FC, memo } from "react";
import { FormCard } from "@/components/atoms/form-card";
interface ObjectTypeFormProps {
  form: NestedForm<ObjectTypeSchema>;
}
export const ObjectTypeForm: FC<ObjectTypeFormProps> = memo(({ form }) => {
  const { control, path } = form;

  return (
    <FormCard title="Тип объекта" description="">
      <FormField
        control={control}
        name={path("objectType")}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <ObjectTypeSelect value={field.value} onChange={field.onChange} />
            </FormControl>
          </FormItem>
        )}
      />
    </FormCard>
  );
});
