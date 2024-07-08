import { ObjectT } from "@/api/Object/types";
import { App } from "@/components/templates/calendar/components/ui/app";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getImageUrl } from "@/lib/get-image-url";
import { UploadMediaType } from "@/types/shared";
import { FocusModal } from "@medusajs/ui";
import { EllipsisVertical } from "lucide-react";
import { FC, useState } from "react";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export interface CalendarCardProps extends ObjectT {
  selectedCalendarObject: {
    id: number;
    name: string;
  }[];
  onAddNewObject: (objectId: number) => void;
}
export const CalendarCard: FC<CalendarCardProps> = (props) => {
  const {
    anObjectImages,
    name,
    onAddNewObject,
    selectedCalendarObject,
    id,
  } = props;
  const [tabValue, setTabValue] = useState(id);

  return (
    <Card className="rounded-lg flex h-44">
      <CardHeader className="p-2 rounded-t-lg overflow-hidden relative w-[10%] rounded-md">
        <Swiper
          grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-120%", 0, -500],
            },
            next: {
              shadow: true,
              translate: ["120%", 0, -500],
            },
          }}
          modules={[EffectCreative]}
          className="w-full h-48"
        >
          {anObjectImages?.map(({ fileName }) => {
            return (
              <SwiperSlide key={fileName} className="h-40 rounded-lg">
                <img
                  src={getImageUrl({
                    fileName,
                    type: UploadMediaType.OBJECT,
                  })}
                  alt={fileName}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="absolute top-2 right-4 z-50 w-6 h-6"
              variant={"outline"}
              size={"icon"}
            >
              <EllipsisVertical />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                Profile
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Billing
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Settings
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Keyboard shortcuts
                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>Email</DropdownMenuItem>
                    <DropdownMenuItem>Message</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>More...</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuItem>
                New Team
                <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>GitHub</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuItem disabled>API</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Log out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <div className="flex flex-col">
        <CardContent className="mt-4">
          <div className="flex justify-between">
            <div className="flex flex-col gap-1">
              <CardTitle>{name}</CardTitle>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <FocusModal>
            <FocusModal.Trigger asChild>
              <Button
                onClick={() => {
                  onAddNewObject(id);
                }}
              >
                Перейти в календарь
              </Button>
            </FocusModal.Trigger>
            <Tabs
              value={`${tabValue}`}
              onValueChange={(value) => {
                setTabValue(parseInt(value));
              }}
            >
              <FocusModal.Content className="z-50">
                <FocusModal.Header className="flex w-full items-center justify-start">
                  <TabsList>
                    {selectedCalendarObject.map(({ id, name }) => {
                      return <TabsTrigger value={`${id}`}>{name}</TabsTrigger>;
                    })}
                  </TabsList>
                </FocusModal.Header>
                <FocusModal.Body className="py-2 ">
                  {selectedCalendarObject.map(({ id }) => {
                    return (
                      <TabsContent value={`${id}`}>
                        <App objectId={id} />
                      </TabsContent>
                    );
                  })}
                </FocusModal.Body>
              </FocusModal.Content>
            </Tabs>
          </FocusModal>
        </CardFooter>
      </div>
    </Card>
  );
};
