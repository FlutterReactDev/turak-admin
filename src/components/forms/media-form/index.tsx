import Actionables, { ActionType } from "@/components/atoms/actionables";
import FileUploadField from "@/components/atoms/file-upload-field";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FormImage } from "@/types/shared";
import { NestedForm } from "@/utils/nested-from";
import clsx from "clsx";
import { CheckCircle2, TrashIcon } from "lucide-react";
import { useMemo } from "react";
import {
  Controller,
  FieldArrayWithId,
  useFieldArray,
  useWatch,
} from "react-hook-form";

type ImageType = { selected: boolean } & FormImage;

export type MediaFormType = {
  images: ImageType[];
};

type Props = {
  form: NestedForm<MediaFormType>;
};

const MediaForm = ({ form }: Props) => {
  const { control, path, setValue } = form;

  const { fields, append, remove } = useFieldArray({
    control: control,
    name: path("images"),
  });

  const handleFilesChosen = (files: File[]) => {
    if (files.length) {
      const toAppend = files.map((file) => ({
        url: URL.createObjectURL(file),
        name: file.name,
        size: file.size,
        nativeFile: file,
        selected: false,
      }));

      append(toAppend);
    }
  };

  const images = useWatch({
    control,
    name: path("images"),
    defaultValue: [],
  });

  const selected = useMemo(() => {
    const selected: number[] = [];

    images.forEach((i, index) => {
      if (i.selected) {
        selected.push(index);
      }
    });

    return selected;
  }, [images]);

  const handleRemove = () => {
    remove(selected);
  };

  const handleDeselect = () => {
    selected.forEach((i) => {
      setValue(path(`images.${i}.selected`), false);
    });
  };

  return (
    <div>
      <div>
        <div>
          <FileUploadField
            onFileChosen={handleFilesChosen}
            placeholder="1200 x 1600 (3:4) recommended, up to 10MB each"
            multiple
            filetypes={["image/gif", "image/jpeg", "image/png", "image/webp"]}
            className="py-6"
          />
        </div>
      </div>
      {fields.length > 0 && (
        <div className="mt-6">
          <div className="mb-3 flex items-center justify-between">
            <h2>Загрузки</h2>
            <ModalActions
              number={selected.length}
              onDeselect={handleDeselect}
              onRemove={handleRemove}
            />
          </div>
          <div className="gap-y-1 flex flex-col">
            {fields.map((field, index) => {
              return (
                <Image
                  key={field.id}
                  image={field}
                  index={index}
                  remove={remove}
                  form={form}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

type ImageProps = {
  image: FieldArrayWithId<MediaFormType, "images", "id">;
  index: number;
  remove: (index: number) => void;
  form: NestedForm<MediaFormType>;
};

const Image = ({ image, index, form, remove }: ImageProps) => {
  const { control, path } = form;

  const actions: ActionType[] = [
    {
      label: "Удалить",
      onClick: () => remove(index),
      icon: <TrashIcon size={20} />,
      variant: "destructive",
    },
  ];

  return (
    <Controller
      name={path(`images.${index}.selected`)}
      control={control}
      render={({ field: { value, onChange } }) => {
        return (
          <div className="relative">
            <button
              className={clsx(
                "px-4 gap-3 py-2 hover:bg-muted rounded-lg group flex items-center justify-between",
                {
                  "bg-grey": value,
                }
              )}
              type="button"
              onClick={() => onChange(!value)}
            >
              <div className="gap-x-6 flex items-center">
                <div className="flex h-16 w-16 items-center justify-center">
                  <img
                    src={image.url}
                    alt={image.name || "Uploaded image"}
                    className="rounded-lg max-h-[64px] max-w-[64px]"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <p>{image.name}</p>
                  <p className="text-grey-50">
                    {image.size ? `${(image.size / 1024).toFixed(2)} KB` : ""}
                  </p>
                </div>
              </div>
              <div className="gap-x-4 flex items-center">
                <span
                  className={clsx("hidden", {
                    "!text-violet-60 !block": value,
                  })}
                >
                  <CheckCircle2 size={24} />
                </span>
              </div>
            </button>
            <div className="right-4 absolute top-0 bottom-0 flex items-center">
              <Actionables actions={actions} forceDropdown />
            </div>
          </div>
        );
      }}
    />
  );
};

type ModalActionsProps = {
  number: number;
  onRemove: () => void;
  onDeselect: () => void;
};

const ModalActions = ({ number, onRemove, onDeselect }: ModalActionsProps) => {
  return (
    <div className="flex h-10 items-center overflow-y-hidden pr-1">
      <div
        className={clsx(
          "gap-x-3 flex items-center transition-all duration-200",
          {
            "translate-y-[-42px]": !number,
            "translate-y-[0px]": number,
          }
        )}
      >
        <span>{number} выбрано</span>
        <div className="bg-grey-20 h-5 w-px" />
        <div className="gap-x-2 flex items-center">
          <Button
            variant="secondary"
            size="sm"
            type="button"
            onClick={onDeselect}
          >
            Отменить выбор
          </Button>
          <Separator orientation="vertical" className="h-6" />
          <Button
            variant="destructive"
            size="sm"
            type="button"
            onClick={onRemove}
          >
            Удалить
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MediaForm;
