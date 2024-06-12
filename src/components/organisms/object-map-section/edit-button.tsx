import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Edit2 } from "lucide-react";
import { FC, useState } from "react";

import { AddressForm } from "@/components/forms/address-form";
import { AddressFormType } from "@/components/forms/address-form/schema";
import { NestedForm } from "@/utils/nested-from";
interface EditButtonProps {
  form: NestedForm<AddressFormType>;
  onClose: () => void;
}
export const EditButton: FC<EditButtonProps> = (props) => {
  const { form, onClose } = props;
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button variant="ghost" size={"sm"} className="gap-2">
          <Edit2 className="w-5 h-5" /> Редактировать
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Редактирование расположение объекта</DialogTitle>
          <DialogDescription>
            Изменить расположение объекта на карте 2GIS
          </DialogDescription>
        </DialogHeader>
        {open && <AddressForm form={form} />}
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary" onClick={onClose}>
              Закрыть
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="button" onClick={onClose}>
              Сохранить
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
