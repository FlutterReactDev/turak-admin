import FileUploadField from "@/components/atoms/file-upload-field";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/components/ui/use-toast";
import { useDownloadFile } from "@/hooks/use-download-file";
import { usePrompt } from "@/hooks/use-prompt";
import { getImageUrl } from "@/lib/get-image-url";
import { cn } from "@/lib/utils";
import Api from "@/services/api";
import { UploadMediaType } from "@/types/shared";
import { NestedForm } from "@/utils/nested-from";
import { FocusModal } from "@medusajs/ui";
import { Download, Edit, Images, Loader2, Trash } from "lucide-react";
import { FC, useState } from "react";
import { useFieldArray } from "react-hook-form";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { ImageType } from "./schema";
interface EditImageFormProps {
  form: NestedForm<ImageType>;
  editMode?: boolean;
  isOpen: boolean;
  id: number;
  refetch: () => void;
  setOpen: (value: boolean) => void;
  uploadMediaType: UploadMediaType;
}

export const EditImageForm: FC<EditImageFormProps> = ({
  form,
  editMode = false,
  isOpen,
  id,
  setOpen,
  refetch,
  uploadMediaType,
}) => {
  const { control, path } = form;
  const { fields, remove } = useFieldArray({
    name: path("media"),
    control,
  });

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [editModeState, setEditModeState] = useState(editMode);
  const [activeSlide, setActiveSlide] = useState(0);
  const [downloadIsLoading, setDownloadIsLoading] = useState(false);
  const [uploadFilesIsLoading, setUploadFilesIsLoading] = useState(false);
  const { download } = useDownloadFile();
  const { toast } = useToast();
  const prompt = usePrompt();

  const onDelete = async () => {
    const yes = await prompt({
      title: "Вы уверены что хотите удалить файл",
    });
    if (yes) {
      remove(activeSlide);
    }
  };

  const onDonwload = async () => {
    setDownloadIsLoading(true);
    try {
      const file = await fetch(
        getImageUrl({
          fileName: fields[activeSlide].fileName,
          type: uploadMediaType,
        }),
        {
          method: "get",
          mode: "no-cors",
          referrerPolicy: "no-referrer",
        }
      ).then((res) => res.blob());

      const dataUrl = URL.createObjectURL(file);
      download(dataUrl, fields[activeSlide].fileName);
    } catch (error) {
      toast({
        title: "Ошибка при скачивании",
        variant: "destructive",
      });
    } finally {
      setDownloadIsLoading(false);
    }
  };

  const onToggleEditMode = () => {
    if (editModeState) {
      setEditModeState(false);
      return;
    }

    setEditModeState(true);
  };

  const onUploadFiles = async (files: File[]) => {
    if (files.length) {
      setUploadFilesIsLoading(true);
      try {
        await Api.uploads.create(files, {
          ID: id,
          uploadMediaType: uploadMediaType,
        });
        refetch();
      } catch (error) {
        toast({
          title: "Ошибка при загрузке файла",
          variant: "destructive",
        });
      } finally {
        setUploadFilesIsLoading(false);
      }
    }
  };
  return (
    <FocusModal open={isOpen} onOpenChange={setOpen}>
      <FocusModal.Content className="z-50">
        <FocusModal.Header className="flex w-full items-center justify-between">
          {!editModeState && (
            <div className="flex items-center gap-2">
              <Images />

              <h5 className="scroll-m-20 text-xl font-semibold tracking-tight overflow-hidden text-ellipsis whitespace-nowrap min-w-0 max-w-[500px] w-full">
                {fields[activeSlide]?.fileName}
              </h5>
            </div>
          )}

          <div className="flex gap-2">
            {!editModeState && (
              <>
                <Tooltip>
                  <TooltipTrigger>
                    <Button size={"icon"} onClick={onDelete}>
                      <Trash />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Удалить</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <Button
                      size={"icon"}
                      disabled={downloadIsLoading}
                      onClick={onDonwload}
                    >
                      {!downloadIsLoading && <Download />}
                      {downloadIsLoading && (
                        <Loader2 className="animate-spin" />
                      )}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Скачать изображение</TooltipContent>
                </Tooltip>
              </>
            )}

            <Tooltip>
              <TooltipTrigger>
                <Button onClick={onToggleEditMode}>
                  <Edit /> Редактировать
                </Button>
              </TooltipTrigger>
              <TooltipContent>Редактировать изображение</TooltipContent>
            </Tooltip>
          </div>
        </FocusModal.Header>
        <FocusModal.Body className="relative h-full ">
          <div className="flex flex-col h-full w-full">
            <div
              className={cn("w-full ", !editModeState && "py-6")}
              style={{
                height: "calc(100% - 130px)",
              }}
            >
              {editModeState && (
                <div className="grid grid-cols-[2fr_1fr] w-full h-full">
                  <div className="bg-muted overflow-y-auto h-full">
                    <div className="grid grid-cols-4 gap-2 p-4 ">
                      {fields.map(({ fileName, id }) => {
                        return (
                          <img
                            key={id}
                            className="w-full h-[180px] object-cover rounded-xl bg-white border p-1"
                            src={getImageUrl({
                              fileName,
                              type: uploadMediaType,
                            })}
                            alt={fileName}
                          />
                        );
                      })}
                    </div>
                  </div>

                  <div className="p-4 relative">
                    {uploadFilesIsLoading && (
                      <div className="w-full h-full bg-foreground/50 absolute top-0 left-0 text-white flex items-center justify-center">
                        <Loader2 className="w-28 h-28 animate-spin" />
                      </div>
                    )}
                    <FileUploadField
                      onFileChosen={(files) => {
                        onUploadFiles(files);
                      }}
                      multiple
                      filetypes={[
                        "image/gif",
                        "image/jpeg",
                        "image/png",
                        "image/webp",
                      ]}
                      className="py-6"
                    />
                  </div>
                </div>
              )}

              {!editModeState && (
                <Swiper
                  spaceBetween={10}
                  navigation={true}
                  centeredSlides
                  className="h-full overflow-hidden user-select-none"
                  thumbs={{
                    swiper:
                      thumbsSwiper && !thumbsSwiper.destroyed
                        ? thumbsSwiper
                        : null,
                  }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  onSlideChange={({ activeIndex }) => {
                    setActiveSlide(activeIndex);
                  }}
                >
                  {fields.map(({ fileName }) => {
                    return (
                      <SwiperSlide className="user-select-none flex items-center justify-center rounded-lg">
                        <div className="h-[500px] w-[500px]  overflow-hidden rounded-lg border">
                          <img
                            src={getImageUrl({
                              fileName,
                              type: uploadMediaType,
                            })}
                            alt={fileName}
                            className="w-full h-full object-cover user-select-none"
                          />
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              )}
            </div>
            <div className="flex w-full py-4 px-4 border-ui-border-base border-t ">
              {!editModeState && (
                <Swiper
                  onSwiper={(swiper) => {
                    setThumbsSwiper(swiper);
                  }}
                  spaceBetween={10}
                  slidesPerView={"auto"}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                >
                  {fields.map(({ fileName }, i) => {
                    return (
                      <SwiperSlide className="rounded-lg h-16 w-16 cursor-pointer">
                        <div
                          className={cn(
                            "border-transparent border-2 rounded-2xl  w-full h-full overflow-hidden",
                            "p-0.5",
                            activeSlide == i && "border-primary"
                          )}
                        >
                          <img
                            className="rounded-lg h-full w-full"
                            src={getImageUrl({
                              fileName,
                              type: uploadMediaType,
                            })}
                            alt={fileName}
                          />
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              )}
            </div>
          </div>
        </FocusModal.Body>
      </FocusModal.Content>
    </FocusModal>
  );
};
