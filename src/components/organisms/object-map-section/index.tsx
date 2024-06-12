import { Map2GIS } from "@/components/atoms/2GIS";
import { Marker2GIS } from "@/components/atoms/2GIS/Marker2GIS";
import { AddressFormType } from "@/components/forms/address-form/schema";
import { Section } from "@/components/molecules/section";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NestedForm } from "@/utils/nested-from";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { FC, useState } from "react";
import { EditButton } from "./edit-button";
interface ObjectMapSectionProps {
  form: NestedForm<AddressFormType>;
}
export const ObjectMapSection: FC<ObjectMapSectionProps> = ({ form }) => {
  const [open, setOpen] = useState(false);
  const { path, watch } = form;
  const coords = watch(path("suggest.point"));

  return (
    <Section
      title="Расположение"
      className="h-96 rounded-lg"
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
              <EditButton form={form} onClose={() => setOpen(false)} />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      }
    >
      <Map2GIS
        initialMapOptions={{
          center: [coords.lon, coords.lat],
          zoom: 18,
        }}
        className="w-full h-full rounded-lg"
      >
        <Marker2GIS coordinates={[coords.lon, coords.lat]} />
      </Map2GIS>
    </Section>
  );
};
