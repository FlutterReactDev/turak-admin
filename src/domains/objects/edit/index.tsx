import { useGetObjectByIdQuery } from "@/api/Object";
import { ObjectT } from "@/api/Object/types";
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
import { ObjectImageSection } from "@/components/organisms/object-image-section";
import { ObjectMapSection } from "@/components/organisms/object-map-section";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { nestedForm } from "@/utils/nested-from";
import { yupResolver } from "@hookform/resolvers/yup";

import { useParams } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import { FC, useEffect } from "react";
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
  const { data, refetch } = props;

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

  const updateForm = () => {
    setValue("type.objectType.objectType", data.anObjectTypeId);
    setValue("type.objectType.objectTypeProperty", data.anObjectPropertyTypeId);
  };

  useEffect(() => {
    setValue("images.media", data.anObjectImages);
  }, [data]);

  const onChange = (data: ObjectType) => {
    console.log(data);
  };
  return (
    <Form {...form}>
      <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 w-full">
        <div className="w-full flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
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
              <Section title="Комнаты"></Section>
            </div>
            <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
              <ObjectImageSection
                form={nestedForm(form, "images")}
                id={parseInt(id)}
                refetch={refetch}
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
