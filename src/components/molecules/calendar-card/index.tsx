import { ObjectT } from "@/api/Object/types";
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
import { getImageUrl } from "@/lib/get-image-url";
import { UploadMediaType } from "@/types/shared";
import { EllipsisVertical } from "lucide-react";
import { FC } from "react";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export interface CalendarCardProps extends ObjectT {}
export const CalendarCard: FC<CalendarCardProps> = (props) => {
  const { anObjectImages, name, anObjectFeeAdditionalService, anObjectDetail } =
    props;

  return (
    <Card className="rounded-lg">
      <CardHeader className="p-0 rounded-t-lg overflow-hidden relative">
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
              <SwiperSlide key={fileName}>
                <img
                  src={getImageUrl({
                    fileName,
                    type: UploadMediaType.OBJECT,
                  })}
                  alt={fileName}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="absolute top-1 right-1 z-50"
              variant={"secondary"}
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
      <CardContent className="mt-4">
        <div className="flex justify-between">
          <div className="flex flex-col gap-1">
            <CardTitle>{name}</CardTitle>
            <CardDescription>
              {anObjectFeeAdditionalService.detailComment}
            </CardDescription>
            <Badge className="bg-green">Сегодня свободно</Badge>
          </div>
          <div className="flex flex-col gap-1">
            <Badge>
              {anObjectDetail.checkInAfter} - {anObjectDetail.checkOutAfter}
            </Badge>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant={"outline"}>Перейти в календарь</Button>
      </CardFooter>
    </Card>
  );
};
