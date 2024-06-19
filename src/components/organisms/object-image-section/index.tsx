import { ImageType } from "@/components/forms/edit-image-form/schema";
import { Section } from "@/components/molecules/section";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getImageUrl } from "@/lib/get-image-url";
import { UploadMediaType } from "@/types/shared";
import { NestedForm } from "@/utils/nested-from";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { FC, useState } from "react";
import { useFieldArray } from "react-hook-form";

import { EditImageForm } from "@/components/forms/edit-image-form";
import { Eye, ImagePlus, Upload } from "lucide-react";
interface ObjectImageSectionProps {
  form: NestedForm<ImageType>;
  id: number;
  refetch: () => void;
}
export const ObjectImageSection: FC<ObjectImageSectionProps> = ({
  form,
  id,
  refetch,
}) => {
  const [open, setOpen] = useState(false);
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const { path, control } = form;
  const [editMode, setEditMode] = useState(false);

  const { fields } = useFieldArray({
    name: path("media"),
    control,
  });

  const onEdit = () => {
    setEditMode(true);
    setImageModalOpen(true);
  };

  const onPreview = () => {
    setEditMode(false);
    setImageModalOpen(true);
  };

  return (
    <Section
      title="Изображение"
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
              <Button
                variant="ghost"
                onClick={onEdit}
                size={"sm"}
                className="gap-2"
              >
                <ImagePlus className="w-5 h-5" /> Загрузить картинки
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button
                variant="ghost"
                onClick={onPreview}
                size={"sm"}
                className="gap-2 w-full"
              >
                <Eye className="w-5 h-5" /> Просмотр
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      }
    >
      <div className="flex flex-col gap-4">
        <div
          className="w-full h-64 rounded-lg overflow-hidden group  relative cursor-pointer"
          onClick={onPreview}
        >
          <div className="absolute top-0 w-full z-10 h-full rounded-lg opacity-0 group-hover:bg-black/20  group-hover:opacity-100 flex items-center justify-center transition-all text-white">
            <Eye />
          </div>
          <img
            className="w-full h-full object-none rounded-lg"
            src={getImageUrl({
              fileName: fields[0]?.fileName,
              type: UploadMediaType.OBJECT,
            })}
          />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {fields.slice(1, 3).map(({ fileName, id }) => {
            return (
              <div
                key={id}
                className="h-20 cursor-pointer group  relative"
                onClick={onPreview}
              >
                <img
                  className="w-full h-full rounded-lg"
                  src={getImageUrl({
                    fileName: fileName,
                    type: UploadMediaType.OBJECT,
                  })}
                />
                <div className="absolute top-0 w-full z-10 h-full rounded-lg opacity-0 group-hover:bg-black/20  group-hover:opacity-100 flex items-center justify-center transition-all text-white">
                  <Eye />
                </div>
              </div>
            );
          })}
          <Button
            variant={"outline"}
            className="h-20 flex items-center justify-center"
            onClick={onEdit}
          >
            <Upload />
          </Button>
        </div>
      </div>
      {imageModalOpen && (
        <EditImageForm
          setOpen={setImageModalOpen}
          refetch={refetch}
          id={id}
          form={form}
          isOpen={imageModalOpen}
          editMode={editMode}
          uploadMediaType={UploadMediaType.OBJECT}
        />
      )}
    </Section>
  );
};
