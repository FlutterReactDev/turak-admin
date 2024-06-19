import { useGetObjectByIdQuery } from "@/api/Object";
import { ObjectT } from "@/api/Object/types";
import { useGetRoomsByAnObjectIdQuery } from "@/api/ObjectRoom";
import { addressFormSchema } from "@/components/forms/address-form/schema";
import { imageSchema } from "@/components/forms/edit-image-form/schema";
import { locationSchema } from "@/components/forms/location-form/schema";
import { objectAdditionalComfortSchema } from "@/components/forms/object-additional-comfort-form/schema";
import { objectDetailSchema } from "@/components/forms/object-detail-form/schema";
import { objectFeeAdditionalServiceSchema } from "@/components/forms/object-fee-additional-service/schema";
import { objectGeneralSchema } from "@/components/forms/object-general-form/schema";
import { objectMealSchema } from "@/components/forms/object-meal-form/schema";
import { objectTypeSchema } from "@/components/forms/object-type-from/schema";
import { Section } from "@/components/molecules/section";
import { ObjectAdditionalComfortSection } from "@/components/organisms/object-additional-comfort-section";
import { ObjectAdditionalServiceSection } from "@/components/organisms/object-additional-service-section";
import { ObjectDetailSection } from "@/components/organisms/object-detail-section";
import { ObjectGeneralSection } from "@/components/organisms/object-general-section";
import { ObjectImageSection } from "@/components/organisms/object-image-section";
import { ObjectMapSection } from "@/components/organisms/object-map-section";
import { ObjectMealSection } from "@/components/organisms/object-meal-section";
import { RoomsTable } from "@/components/templates/rooms-table";
import { columns } from "@/components/templates/rooms-table/columns";
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
import { ChevronLeft, Plus } from "lucide-react";
import { FC, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { InferType, object } from "yup";
const objectSchema = object({
  type: objectTypeSchema,
  location: locationSchema,
  address: addressFormSchema,
  general: objectGeneralSchema,
  detail: objectDetailSchema,
  additionalComfort: objectAdditionalComfortSchema,
  meal: objectMealSchema,
  additionalService: objectFeeAdditionalServiceSchema,
  images: imageSchema,
});

type ObjectType = InferType<typeof objectSchema>;
export const ObjectEditPage = () => {
  const { id } = useParams({
    from: "/a/_layout/objects/$id/edit",
  });
  const { data, isSuccess, refetch } = useGetObjectByIdQuery(parseInt(id));

  if (isSuccess) {
    return <ObjectEditPageContent refetch={refetch} data={data.result} />;
  }
  return <></>;
};
interface ObjectEditPageContentProps {
  data: ObjectT;
  refetch: () => void;
}
const ObjectEditPageContent: FC<ObjectEditPageContentProps> = (props) => {
  const { id } = useParams({
    from: "/a/_layout/objects/$id/edit",
  });
  const {
    data: roomData,

    isSuccess,
  } = useGetRoomsByAnObjectIdQuery(parseInt(id));
  const { data, refetch } = props;
  const navigate = useNavigate({
    from: "/a/objects/$id/edit",
  });

  const prompt = usePrompt();
  const form = useForm({
    resolver: yupResolver(objectSchema),
    defaultValues: {
      type: {
        objectType: {
          objectType: data.anObjectTypeId,
          objectTypeProperty: data.anObjectPropertyTypeId,
        },
      },
      additionalComfort: {
        ...data.anObjectAdditionalComfort,
      },
      additionalService: {
        ...data.anObjectFeeAdditionalService,
      },
      address: {
        suggest: {
          addressName: data.fullAddress,
          id: data.buildingId,
          point: {
            lat: data.latitude,
            lon: data.longitude,
          },
        },
      },
      detail: {
        ...data.anObjectDetail,
      },
      general: {
        internetAccess: data.internetAccess,
        internetAccessSumm: data.internetAccessSumm,
        name: data.name,
        parking: data.parking,
        parkingSumm: data.parkingSumm,
        rating: data.rating,
      },
      location: {
        cityId: data.cityId,
        countryId: data.countryId,
        regionId: data.regionId,
      },
      meal: {
        ...data.anObjectMeal,
      },
      images: {
        media: data.anObjectImages,
      },
    },
  });

  const {
    formState: { isDirty },
    setValue,
  } = form;
  const updateAddress = useCallback(() => {
    setValue("address", {
      suggest: {
        addressName: data.fullAddress,
        id: data.buildingId,
        point: {
          lat: data.latitude,
          lon: data.longitude,
        },
      },
    });
  }, [
    data.buildingId,
    data.fullAddress,
    data.latitude,
    data.longitude,
    setValue,
  ]);
  const updateObjectType = useCallback(() => {
    setValue("type.objectType", {
      objectType: data.anObjectTypeId,
      objectTypeProperty: data.anObjectPropertyTypeId,
    });
  }, [data.anObjectPropertyTypeId, data.anObjectTypeId, setValue]);

  const updateLocation = useCallback(() => {
    setValue("location", {
      cityId: data.cityId,
      countryId: data.countryId,
      regionId: data.regionId,
    });
  }, [data.cityId, data.countryId, data.regionId, setValue]);

  const updateMeal = useCallback(() => {
    setValue("meal", {
      ...data.anObjectMeal,
    });
  }, [data.anObjectMeal, setValue]);

  const updateGeneral = useCallback(() => {
    setValue("general", {
      internetAccess: data.internetAccess,
      name: data.name,
      parking: data.parking,
      rating: data.rating,
      internetAccessSumm: data.internetAccessSumm,
      parkingSumm: data.parkingSumm,
    });
  }, [
    data.internetAccess,
    data.internetAccessSumm,
    data.name,
    data.parking,
    data.parkingSumm,
    data.rating,
    setValue,
  ]);

  const updateImage = useCallback(() => {
    setValue("images.media", data.anObjectImages);
  }, [data.anObjectImages, setValue]);

  const updateAdditionalService = useCallback(() => {
    setValue("additionalService", {
      ...data.anObjectFeeAdditionalService,
    });
  }, [data.anObjectFeeAdditionalService, setValue]);

  const updateAdditionalComfort = useCallback(() => {
    setValue("additionalComfort", {
      ...data.anObjectAdditionalComfort,
    });
  }, [data.anObjectAdditionalComfort, setValue]);

  const updateDetail = useCallback(() => {
    setValue("detail", {
      ...data.anObjectDetail,
    });
  }, [data.anObjectDetail, setValue]);

  const updateForm = useCallback(() => {
    updateObjectType();
    updateLocation();
    updateMeal();
    updateGeneral();
    updateImage();
    updateAdditionalService();
    updateAdditionalComfort();
    updateDetail();
    updateAddress();
  }, [
    updateAdditionalComfort,
    updateAdditionalService,
    updateAddress,
    updateDetail,
    updateGeneral,
    updateImage,
    updateLocation,
    updateMeal,
    updateObjectType,
  ]);

  useEffect(() => {
    updateForm();
  }, [data, updateForm]);

  const onChange = (data: ObjectType) => {
    console.log(data);
  };

  const onBack = async () => {
    if (isDirty) {
      const yes = await prompt({
        title: "Вы уверены?",
        description:
          "У вас есть несохраненные изменения. Вы уверены, что хотите выйти?",
        cancelText: "Отмена",
        confirmText: "Да",
      });

      if (yes) {
        navigate({
          to: "/a/objects",
        });
      }
    } else {
      navigate({
        to: "/a/objects",
      });
    }
  };
  return (
    <Form {...form}>
      <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 w-full">
        <div className="w-full flex flex-col gap-4">
          <div className="flex items-center gap-4  ">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant={"outline"} size="icon" onClick={onBack}>
                  <ChevronLeft />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Назад</TooltipContent>
            </Tooltip>

            <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
              {data.name}
            </h1>

            <div className="hidden items-center gap-2 md:ml-auto md:flex">
              <Button
                size="sm"
                disabled={!isDirty}
                onClick={form.handleSubmit(onChange)}
              >
                Сохранить
              </Button>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
            <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
              <ObjectMapSection form={nestedForm(form, "address")} />
              <Section
                title="Комнаты"
                actions={
                  <div className="flex gap-2">
                    <Button>
                      <Plus /> Добавить комнату
                    </Button>
                  </div>
                }
              >
                {isSuccess && (
                  <RoomsTable data={roomData.result} columns={columns} />
                )}
              </Section>
              <ObjectGeneralSection form={nestedForm(form, "general")} />
              <ObjectDetailSection form={nestedForm(form, "detail")} />

              <ObjectMealSection form={nestedForm(form, "meal")} />
              <ObjectAdditionalServiceSection
                form={nestedForm(form, "additionalService")}
              />
            </div>
            <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
              <ObjectImageSection
                form={nestedForm(form, "images")}
                id={parseInt(id)}
                refetch={refetch}
              />
              <ObjectAdditionalComfortSection
                form={nestedForm(form, "additionalComfort")}
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 md:hidden">
            <Button
              size="sm"
              disabled={!isDirty}
              onClick={form.handleSubmit(onChange)}
            >
              Сохранить
            </Button>
          </div>
        </div>
      </div>
    </Form>
  );
};
