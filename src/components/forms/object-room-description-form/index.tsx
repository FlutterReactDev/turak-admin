import { NestedForm } from "@/utils/nested-from";
import { ObjectRoomDescriptionType } from "./schema";
import { FC } from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RoomTypeNamesSelect } from "@/components/molecules/room-type-names-select";

interface ObjectRoomDescriptionFormProps {
  form: NestedForm<ObjectRoomDescriptionType>;
}
export const ObjectRoomDescriptionForm: FC<ObjectRoomDescriptionFormProps> = ({
  form,
}) => {
  const { control, path } = form;

  return (
    <>
      <FormField
        control={control}
        name={path("roomNameTypeId")}
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel>Название номера</FormLabel>
            <FormControl>
              <RoomTypeNamesSelect value={field} onChange={}/>
            </FormControl>
            <FormMessage />
            <FormDescription>
              это название будут видеть гости при поиске (если у вас нет
              названия, можете указать название улицы, номер дома)
            </FormDescription>
          </FormItem>
        )}
      />
    </>
  );
};
