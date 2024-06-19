import { useGetRoomByIdQuery } from "@/api/ObjectRoom";
import { ObjectRoom } from "@/api/ObjectRoom/types";
import { imageSchema } from "@/components/forms/edit-image-form/schema";
import { roomAmenitiesSchema } from "@/components/forms/room-amenities-form/schema";
import { roomBathroomSchema } from "@/components/forms/room-bathroom-form/schema";
import { roomEquipmentSchema } from "@/components/forms/room-equipment-form/schema";
import { roomGeneralSchema } from "@/components/forms/room-general-form/schema";
import { roomKitchenEquipmentSchema } from "@/components/forms/room-kitchen-equipment-form/schema";
import { postingRulesSchema } from "@/components/forms/room-posting-rules-form/schema";
import { roomViewFromWindowSchema } from "@/components/forms/room-view-from-window-form/schema";
import { RoomAmenitiesSection } from "@/components/organisms/room-amenities-section";
import { RoomBathroomSection } from "@/components/organisms/room-bathroom-section";
import { RoomEquipmentSection } from "@/components/organisms/room-equipment-section";
import { RoomGeneralSection } from "@/components/organisms/room-general-section";
import { RoomImageSection } from "@/components/organisms/room-image-section";
import { RoomKitchenEquipmentSection } from "@/components/organisms/room-kitchen-equipment-section";
import { RoomPostingRulesSection } from "@/components/organisms/room-posting-rules-section";
import { RoomViewFromWindowSection } from "@/components/organisms/room-view-from-window-section";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePrompt } from "@/hooks/use-prompt";
import { nestedForm } from "@/utils/nested-from";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useParams } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { object } from "yup";
const roomSchema = object({
  general: roomGeneralSchema,
  bathroom: roomBathroomSchema,
  amenities: roomAmenitiesSchema,
  viewFromWindow: roomViewFromWindowSchema,
  equipment: roomEquipmentSchema,
  kitchenEquipment: roomKitchenEquipmentSchema,
  postingRules: postingRulesSchema,
  images: imageSchema,
});

export const RoomEditPage = () => {
  const { id } = useParams({
    from: "/a/_layout/rooms/$id/edit",
  });

  const { data, isSuccess, refetch } = useGetRoomByIdQuery(parseInt(id));
  if (isSuccess) {
    return <RoomEditPageContent refetch={refetch} data={data.result} />;
  }

  return <></>;
};

interface RoomEditPageContentProps {
  data: ObjectRoom;
  refetch: () => void;
}
export const RoomEditPageContent: FC<RoomEditPageContentProps> = ({
  data,
  refetch,
}) => {
  const { id } = useParams({
    from: "/a/_layout/rooms/$id/edit",
  });
  const form = useForm({
    resolver: yupResolver(roomSchema),
  });
  const { formState } = form;
  const navigate = useNavigate({
    from: "/a/objects/$id/edit",
  });
  const prompt = usePrompt();

  const onBack = async () => {
    if (formState.isDirty) {
      const yes = await prompt({
        title: "Вы уверены?",
        description:
          "У вас есть несохраненные изменения. Вы уверены, что хотите выйти?",
        cancelText: "Отмена",
        confirmText: "Да",
      });

      if (yes) {
        navigate({
          to: "/a/objects/$id/rooms",
        });
      }
    } else {
      navigate({
        to: "/a/objects/$id/rooms",
      });
    }
  };
  return (
    <Form {...form}>
      <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 w-full">
        <div className="w-full flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" onClick={onBack}>
                  <ChevronLeft />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Назад</TooltipContent>
            </Tooltip>

            <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
              {data.anObjectRoomDescription.ownName}
            </h1>

            <div className="hidden items-center gap-2 md:ml-auto md:flex">
              <Button size="sm">Сохранить</Button>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
            <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
              <RoomGeneralSection form={nestedForm(form, "general")} />
              <RoomBathroomSection form={nestedForm(form, "bathroom")} />
              <RoomAmenitiesSection form={nestedForm(form, "amenities")} />
              <RoomViewFromWindowSection
                form={nestedForm(form, "viewFromWindow")}
              />
              <RoomEquipmentSection form={nestedForm(form, "equipment")} />
              <RoomKitchenEquipmentSection
                form={nestedForm(form, "kitchenEquipment")}
              />
              <RoomPostingRulesSection
                form={nestedForm(form, "postingRules")}
              />
            </div>
            <div className="grid auto-rows-max items-start gap-4 lg:gaps-8">
              <RoomImageSection
                form={nestedForm(form, "images")}
                id={parseInt(id)}
                refetch={refetch}
              />
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
};
