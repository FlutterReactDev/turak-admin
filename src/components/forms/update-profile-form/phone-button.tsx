import { UserPhoneNumber } from "@/api/User/types";
import { AddPhone } from "@/components/molecules/add-phone-form";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { usePrompt } from "@/hooks/use-prompt";
import { Pencil, Trash2 } from "lucide-react";
import { FC, useState } from "react";
import { defaultCountries, usePhoneInput } from "react-international-phone";
interface PhoneButtonProps {
  value: string;
  onDelete: () => void;
  onEdit: (value: string) => void;
  phoneNumbers: UserPhoneNumber[];
  onClick: () => void;
  isMain: boolean;
}
export const PhoneButton: FC<PhoneButtonProps> = ({
  value,
  onDelete,
  onEdit,
  phoneNumbers,
  onClick,
  isMain,
}) => {
  const { inputValue } = usePhoneInput({
    defaultCountry: "kg",
    value,
    countries: defaultCountries,
  });
  const prompt = usePrompt();
  const [open, setOpen] = useState(false);

  return (
    <Button className="relative h-auto" variant={"outline"} onClick={onClick}>
      <div className="flex flex-col gap-2 pt-2">
        <div>{inputValue}</div>
        <div className="flex gap-2">
          {!isMain && (
            <Button
              variant={"destructive"}
              size={"icon"}
              className="rounded-full w-6 h-6"
              onClick={async (e) => {
                e.stopPropagation();
                const yes = await prompt({
                  title: "Вы уверены что хотите удвлить номер телефона?",
                });

                if (yes) {
                  onDelete();
                }
              }}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          )}

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button
                variant={"secondary"}
                size={"icon"}
                className="rounded-full w-6 h-6"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <Pencil className="w-4 h-4" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <AddPhone
                phoneNumbers={phoneNumbers}
                defaultPhone={value}
                onAdd={(phone) => {
                  onEdit(phone);
                  setOpen(false);
                }}
              />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </Button>
  );
};
