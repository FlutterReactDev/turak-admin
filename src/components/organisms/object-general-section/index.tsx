import { Section } from "@/components/molecules/section";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { ImagePlus } from "lucide-react";
import { useState } from "react";

export const ObjectGeneralSection = () => {
  const [open, setOpen] = useState(false);
  return (
    <Section
      title="Основная информация"
      actions={
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger>
            <Button
              variant="ghost"
              className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
            >
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Button variant="ghost" size={"sm"} className="gap-2">
                <ImagePlus className="w-5 h-5" /> Загрузить картинки
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      }
    ></Section>
  );
};
