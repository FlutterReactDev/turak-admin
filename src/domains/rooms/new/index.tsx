import { roomTypeSchema } from "@/components/forms/room-type-form/schema";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { usePrompt } from "@/hooks/use-prompt";
import { FocusModal, ProgressTabs } from "@medusajs/ui";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { object } from "yup";
const roomNewSchema = object({
  roomType: roomTypeSchema,
  general,
});
export const NewRooms = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const prompt = usePrompt();
  const form = useForm();
  return (
    <FocusModal open={open}>
      <FocusModal.Trigger>
        <Button className="gap-2">
          <Plus />
          Добавить комнаты
        </Button>
      </FocusModal.Trigger>

      <ProgressTabs>
        <FocusModal.Content>
          <FocusModal.Header className="flex w-full items-center justify-start">
            <ScrollArea className="border-ui-border-base -my-2 ml-2 min-w-0 w-full border-l">
              <ProgressTabs.List>
                <ProgressTabs.Trigger className="w-full min-w-0 max-w-[200px]"></ProgressTabs.Trigger>
              </ProgressTabs.List>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </FocusModal.Header>
        </FocusModal.Content>
      </ProgressTabs>
    </FocusModal>
  );
};
