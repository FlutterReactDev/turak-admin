import { useUploadMediaMutation } from "@/api/Media";
import { useCreateMutation } from "@/api/Object";
import { AddressForm } from "@/components/forms/address-form";
import { addressFormSchema } from "@/components/forms/address-form/schema";
import { LocationForm } from "@/components/forms/location-form";
import { locationSchema } from "@/components/forms/location-form/schema";
import MediaForm from "@/components/forms/media-form";
import { ObjectAdditionalComfortForm } from "@/components/forms/object-additional-comfort-form";
import { objectAdditionalComfortSchema } from "@/components/forms/object-additional-comfort-form/schema";
import { ObjectDetailForm } from "@/components/forms/object-detail-form";
import { objectDetailSchema } from "@/components/forms/object-detail-form/schema";
import { ObjectFeeAdditionalServiceForm } from "@/components/forms/object-fee-additional-service";
import { objectFeeAdditionalServiceSchema } from "@/components/forms/object-fee-additional-service/schema";
import { ObjectGeneralForm } from "@/components/forms/object-general-form";
import { objectGeneralSchema } from "@/components/forms/object-general-form/schema";
import { ObjectMealForm } from "@/components/forms/object-meal-form";
import { objectMealSchema } from "@/components/forms/object-meal-form/schema";
import { ObjectTypeForm } from "@/components/forms/object-type-from";
import { objectTypeSchema } from "@/components/forms/object-type-from/schema";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";
import { usePrompt } from "@/hooks/use-prompt";
import { isFetchBaseQueryError } from "@/lib/server-error-handler";
import { UploadMediaType } from "@/types/shared";
import { nestedForm } from "@/utils/nested-from";
import { yupResolver } from "@hookform/resolvers/yup";
import { FocusModal, ProgressStatus, ProgressTabs } from "@medusajs/ui";
import { Loader2, PlusIcon } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { InferType, array, mixed, object, string } from "yup";
import Api from "@/services/api";
enum Tab {
  TYPE = "type",
  LOCATION = "location",
  ADDRESS = "address",
  GENERAL = "general",
  DETAIL = "detail",
  ADDITIONAL_COMFORT = "addition_comfort",
  MEAL = "meal",
  ADDITIONAL_SERVICE = "additional_service",
  MEDIA = "media",
}
type StepStatus = {
  [key in Tab]: ProgressStatus;
};

const objectNewSchema = object({
  type: objectTypeSchema,
  location: locationSchema,
  address: addressFormSchema,
  general: objectGeneralSchema,
  detail: objectDetailSchema,
  additionalComfort: objectAdditionalComfortSchema,
  meal: objectMealSchema,
  additionalService: objectFeeAdditionalServiceSchema,
  media: object({
    images: array()
      .of(
        object({
          url: string(),
          name: string(),
          size: string(),
          nativeFile: mixed().required(),
        })
      )
      .required(),
  }),
});

type ObjectNewType = InferType<typeof objectNewSchema>;
export const NewObject = () => {
  const { toast } = useToast();
  const [create, { isLoading }] = useCreateMutation();

  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<Tab>(Tab.TYPE);
  const [status, setStatus] = useState<StepStatus>({
    [Tab.TYPE]: "not-started",
    [Tab.LOCATION]: "not-started",
    [Tab.ADDRESS]: "not-started",
    [Tab.GENERAL]: "not-started",
    [Tab.DETAIL]: "not-started",
    [Tab.ADDITIONAL_COMFORT]: "not-started",
    [Tab.MEAL]: "not-started",
    [Tab.ADDITIONAL_SERVICE]: "not-started",
    [Tab.MEDIA]: "not-started",
  });
  const prompt = usePrompt();
  const form = useForm({
    resolver: yupResolver(objectNewSchema),
    defaultValues: {
      type: {
        objectType: createObjectTypeBlank(),
      },

      additionalService: {
        bedLinenSum: 0,
        cleaningSum: 0,
        detailComment: "",
        transferDetails: "",
        objectInAnotherResources: "",
        hasTransfer: false,
      },
      general: {
        internetAccessSumm: 0,
        parkingSumm: 0,
      },
    },
  });

  const {
    formState: { isDirty },
    handleSubmit,
    reset,
    trigger,
  } = form;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onCreate = async (data: ObjectNewType) => {
    const {
      additionalComfort,
      additionalService,
      address: {
        suggest: { addressName, id, point },
      },
      detail,
      general: {
        internetAccess,
        name,
        parking,
        internetAccessSumm,
        parkingSumm,
        rating,
      },
      location: { cityId, countryId, regionId },
      meal,
      type: {
        objectType: { objectType, objectTypeProperty },
      },
      media,
    } = data;
    const formData = new FormData();
    for (const f of media.images) {
      formData.append("files", f.nativeFile as File);
    }
    try {
      const res = await create({
        cityId,
        countryId,
        regionId,
        building: "",
        buildingId: id,
        fullAddress: addressName,
        id: 0,
        latitude: point.lat,
        longitude: point.lon,
        name: name,
        parking,

        internetAccess: internetAccess,
        internetAccessSumm: internetAccessSumm || 0,
        anObjectDetail: {
          id: 0,
          ...detail,
        },
        anObjectTypeId: objectType,
        anObjectPropertyTypeId: objectTypeProperty,

        parkingSumm: parkingSumm || 0,
        rating: rating || 0,
        anObjectRooms: [],
        anObjectAdditionalComfort: {
          id: 0,
          ...additionalComfort,
        },
        anObjectMeal: {
          id: 0,
          allInclusive: meal.allInclusive,
          breakfast: meal.breakfast || 0,
          breakfastService: meal.breakfastService || 0,
          dinner: meal.dinner || 0,
          dinnerService: meal.dinnerService || 0,
          lunch: meal.lunch || 0,
          lunchService: meal.lunchService || 0,
        },
        anObjectFeeAdditionalService: {
          id: 0,
          ...additionalService,
        },
        anObjectImages: [],
      }).unwrap();
      const files = media.images.map(({ nativeFile }) => nativeFile) as File[];
      await Api.uploads.create(files, {
        ID: res.result.id,
        uploadMediaType: UploadMediaType.OBJECT,
      });

      toast({
        title: res.message,
        description: res.details,
        variant: "success",
      });
      onCloseModal();
    } catch (error) {
      if (isFetchBaseQueryError(error)) {
        const errMsg = "error" in error ? error.error : error.data;
        if (typeof errMsg == "string") {
          toast({
            variant: "destructive",
            title: errMsg,
          });
        } else {
          toast({
            variant: "destructive",
            title: errMsg.message,
          });
        }
      }
    }
  };

  const onTabChange = useCallback(
    (value: Tab) => {
      setTab(value);
    },
    [tab]
  );

  const onCloseModal = useCallback(() => {
    setOpen(false);
    setTab(Tab.TYPE);
    setStatus({
      [Tab.TYPE]: "not-started",
      [Tab.LOCATION]: "not-started",
      [Tab.ADDRESS]: "not-started",
      [Tab.GENERAL]: "not-started",
      [Tab.DETAIL]: "not-started",
      [Tab.ADDITIONAL_COMFORT]: "not-started",
      [Tab.MEAL]: "not-started",
      [Tab.ADDITIONAL_SERVICE]: "not-started",
      [Tab.MEDIA]: "not-started",
    });
    reset();
  }, [reset]);

  const onModalStateChange = useCallback(
    async (open: boolean) => {
      if (!open && isDirty) {
        const response = await prompt({
          title: "Вы уверены?",
          description:
            "У вас есть несохраненные изменения. Вы уверены, что хотите выйти?",
          cancelText: "Отмена",
          confirmText: "Закрыть",
        });
        if (!response) {
          setOpen(true);
          return;
        }
        onCloseModal();
      }
      setOpen(open);
    },
    [isDirty, onCloseModal, prompt]
  );

  const onValidateType = useCallback(async () => {
    const result = await trigger("type");
    if (!result) {
      setStatus((prev) => ({
        ...prev,
        [Tab.TYPE]: "in-progress",
      }));

      return;
    }
    setTab(Tab.LOCATION);
    setStatus((prev) => ({
      ...prev,
      [Tab.TYPE]: "completed",
    }));
  }, [trigger]);

  const onValidateLocation = useCallback(async () => {
    const result = await trigger("location", {});
    if (!result) {
      setStatus((prev) => ({
        ...prev,
        [Tab.LOCATION]: "in-progress",
      }));

      return;
    }
    setTab(Tab.ADDRESS);
    setStatus((prev) => ({
      ...prev,
      [Tab.LOCATION]: "completed",
    }));
  }, [trigger]);

  const onValidateAddress = useCallback(async () => {
    const result = await trigger("address");
    if (!result) {
      setStatus((prev) => ({
        ...prev,
        [Tab.ADDRESS]: "in-progress",
      }));

      return;
    }
    setTab(Tab.GENERAL);
    setStatus((prev) => ({
      ...prev,
      [Tab.ADDRESS]: "completed",
    }));
  }, [trigger]);

  const onValidateGeneral = useCallback(async () => {
    const result = await trigger("general");
    if (!result) {
      setStatus((prev) => ({
        ...prev,
        [Tab.GENERAL]: "in-progress",
      }));

      return;
    }
    setTab(Tab.DETAIL);
    setStatus((prev) => ({
      ...prev,
      [Tab.GENERAL]: "completed",
    }));
  }, [trigger]);
  const onValidateDetail = useCallback(async () => {
    const result = await trigger("detail");
    if (!result) {
      setStatus((prev) => ({
        ...prev,
        [Tab.DETAIL]: "in-progress",
      }));

      return;
    }
    setTab(Tab.ADDITIONAL_COMFORT);
    setStatus((prev) => ({
      ...prev,
      [Tab.DETAIL]: "completed",
    }));
  }, [trigger]);
  const onValidateAdditionalComfort = useCallback(async () => {
    const result = await trigger("additionalComfort");
    if (!result) {
      setStatus((prev) => ({
        ...prev,
        [Tab.ADDITIONAL_COMFORT]: "in-progress",
      }));

      return;
    }
    setTab(Tab.MEAL);
    setStatus((prev) => ({
      ...prev,
      [Tab.ADDITIONAL_COMFORT]: "completed",
    }));
  }, [trigger]);
  const onValidateMeal = useCallback(async () => {
    const result = await trigger("meal");

    if (!result) {
      setStatus((prev) => ({
        ...prev,
        [Tab.MEAL]: "in-progress",
      }));

      return;
    }
    setTab(Tab.ADDITIONAL_SERVICE);
    setStatus((prev) => ({
      ...prev,
      [Tab.MEAL]: "completed",
    }));
  }, [trigger]);

  const onValidateAdditionalService = useCallback(async () => {
    const result = await trigger("additionalService");
    if (!result) {
      setStatus((prev) => ({
        ...prev,
        [Tab.ADDITIONAL_SERVICE]: "in-progress",
      }));

      return false;
    }
    setTab(Tab.MEDIA);
    setStatus((prev) => ({
      ...prev,
      [Tab.ADDITIONAL_SERVICE]: "completed",
    }));
    return result;
  }, [trigger]);
  const onValidateMediaFiles = useCallback(async () => {
    const result = await trigger("media");
    if (!result) {
      setStatus((prev) => ({
        ...prev,
        [Tab.MEDIA]: "in-progress",
      }));

      return false;
    }

    handleSubmit(onCreate)();
    setStatus((prev) => ({
      ...prev,
      [Tab.MEDIA]: "completed",
    }));
    return result;
  }, [trigger]);
  const onBack = useCallback(async () => {
    switch (tab) {
      case Tab.TYPE:
        await onModalStateChange(false);
        break;
      case Tab.LOCATION:
        setTab(Tab.TYPE);
        break;
      case Tab.ADDRESS:
        setTab(Tab.LOCATION);
        break;
      case Tab.GENERAL:
        setTab(Tab.ADDRESS);
        break;
      case Tab.DETAIL:
        setTab(Tab.GENERAL);
        break;
      case Tab.ADDITIONAL_COMFORT:
        setTab(Tab.DETAIL);
        break;
      case Tab.MEAL:
        setTab(Tab.ADDITIONAL_COMFORT);
        break;
      case Tab.ADDITIONAL_SERVICE:
        setTab(Tab.MEAL);
        break;
      case Tab.MEDIA:
        setTab(Tab.ADDITIONAL_SERVICE);
        break;
    }
  }, [onModalStateChange, tab]);
  const onNext = useCallback(async () => {
    switch (tab) {
      case Tab.TYPE:
        await onValidateType();
        break;
      case Tab.LOCATION:
        await onValidateLocation();
        break;
      case Tab.ADDRESS:
        await onValidateAddress();
        break;
      case Tab.GENERAL:
        await onValidateGeneral();
        break;
      case Tab.DETAIL:
        await onValidateDetail();
        break;
      case Tab.ADDITIONAL_COMFORT:
        await onValidateAdditionalComfort();
        break;
      case Tab.MEAL:
        await onValidateMeal();
        break;
      case Tab.ADDITIONAL_SERVICE:
        onValidateAdditionalService();
        break;
      case Tab.MEDIA:
        onValidateMediaFiles();
        break;
    }
  }, [
    onValidateAdditionalComfort,
    onValidateAdditionalService,
    onValidateAddress,
    onValidateDetail,
    onValidateGeneral,
    onValidateLocation,
    onValidateMeal,
    onValidateMediaFiles,
    onValidateType,
    tab,
  ]);

  const backButtonText = useMemo(() => {
    switch (tab) {
      case Tab.TYPE:
        return "Отмена";
      default:
        return "Назад";
    }
  }, [tab]);
  const nextButtonText = useMemo(() => {
    switch (tab) {
      case Tab.MEDIA:
        return "Создать объект";
      default:
        return "Продолжить";
    }
  }, [tab]);

  return (
    <div>
      <FocusModal open={open} onOpenChange={onModalStateChange}>
        <FocusModal.Trigger asChild>
          <Button>
            <PlusIcon /> Добавить объект
          </Button>
        </FocusModal.Trigger>
        <ProgressTabs
          value={tab}
          onValueChange={(tab) => onTabChange(tab as Tab)}
        >
          <FocusModal.Content className="z-50">
            <FocusModal.Header className="flex w-full items-center justify-start">
              <ScrollArea className="border-ui-border-base -my-2 ml-2 min-w-0 w-full border-l">
                <ProgressTabs.List>
                  <ProgressTabs.Trigger
                    value={Tab.TYPE}
                    className="w-full min-w-0 max-w-[200px]"
                    status={status[Tab.TYPE]}
                  >
                    <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                      Тип объекта
                    </span>
                  </ProgressTabs.Trigger>
                  <ProgressTabs.Trigger
                    value={Tab.LOCATION}
                    className="w-full min-w-0 max-w-[200px]"
                    status={status[Tab.LOCATION]}
                    disabled={status[Tab.TYPE] !== "completed"}
                  >
                    <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                      Местоположение
                    </span>
                  </ProgressTabs.Trigger>
                  <ProgressTabs.Trigger
                    value={Tab.ADDRESS}
                    disabled={status[Tab.LOCATION] !== "completed"}
                    className="w-full min-w-0  max-w-[200px]"
                    status={status[Tab.ADDRESS]}
                  >
                    <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                      Адрес
                    </span>
                  </ProgressTabs.Trigger>
                  <ProgressTabs.Trigger
                    value={Tab.GENERAL}
                    disabled={status[Tab.ADDRESS] !== "completed"}
                    className="w-full min-w-0  max-w-[200px]"
                    status={status[Tab.GENERAL]}
                  >
                    <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                      Основная информация
                    </span>
                  </ProgressTabs.Trigger>
                  <ProgressTabs.Trigger
                    value={Tab.DETAIL}
                    disabled={status[Tab.GENERAL] !== "completed"}
                    className="w-full min-w-0  max-w-[200px]"
                    status={status[Tab.DETAIL]}
                  >
                    <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                      Сведение
                    </span>
                  </ProgressTabs.Trigger>
                  <ProgressTabs.Trigger
                    value={Tab.ADDITIONAL_COMFORT}
                    disabled={status[Tab.DETAIL] !== "completed"}
                    className="w-full min-w-0  max-w-[200px]"
                    status={status[Tab.ADDITIONAL_COMFORT]}
                  >
                    <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                      Удобства и услуги
                    </span>
                  </ProgressTabs.Trigger>
                  <ProgressTabs.Trigger
                    value={Tab.MEAL}
                    disabled={status[Tab.ADDITIONAL_COMFORT] !== "completed"}
                    className="w-full min-w-0  max-w-[200px]"
                    status={status[Tab.MEAL]}
                  >
                    <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                      Питание
                    </span>
                  </ProgressTabs.Trigger>
                  <ProgressTabs.Trigger
                    value={Tab.ADDITIONAL_SERVICE}
                    disabled={status[Tab.MEAL] !== "completed"}
                    className="w-full min-w-0 max-w-[300px]"
                    status={status[Tab.ADDITIONAL_SERVICE]}
                  >
                    <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                      Плата за дополнительные услуги
                    </span>
                  </ProgressTabs.Trigger>
                  <ProgressTabs.Trigger
                    value={Tab.MEDIA}
                    disabled={status[Tab.ADDITIONAL_SERVICE] !== "completed"}
                    className="w-full min-w-0 max-w-[300px]"
                    status={status[Tab.MEDIA]}
                  >
                    <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                      Изображения
                    </span>
                  </ProgressTabs.Trigger>
                </ProgressTabs.List>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>

              <div className="ml-auto flex items-center justify-end gap-x-2">
                <Button
                  variant="secondary"
                  onClick={onBack}
                  type="button"
                  disabled={isLoading}
                >
                  {backButtonText}
                </Button>

                <Button
                  type="button"
                  onClick={() => {
                    onNext();
                  }}
                  disabled={isLoading}
                >
                  {!isLoading && nextButtonText}
                  {isLoading && <Loader2 className="animate-spin" />}
                </Button>
              </div>
            </FocusModal.Header>
            <FocusModal.Body className="flex h-full w-full flex-col items-center overflow-y-auto py-6 px-3">
              <Form {...form}>
                <ProgressTabs.Content
                  value={Tab.TYPE}
                  className="h-full w-full"
                >
                  <ObjectTypeForm form={nestedForm(form, "type")} />
                </ProgressTabs.Content>
                <ProgressTabs.Content
                  value={Tab.LOCATION}
                  className="h-full w-full max-w-[720px]"
                >
                  <LocationForm form={nestedForm(form, "location")} />
                </ProgressTabs.Content>
                <ProgressTabs.Content
                  value={Tab.ADDRESS}
                  className="h-full w-full max-w-[720px]"
                >
                  <AddressForm form={nestedForm(form, "address")} />
                </ProgressTabs.Content>
                <ProgressTabs.Content
                  value={Tab.GENERAL}
                  className="h-full w-full max-w-[720px]"
                >
                  <div className="grid grid-cols-1 gap-5">
                    <ObjectGeneralForm form={nestedForm(form, "general")} />
                  </div>
                </ProgressTabs.Content>
                <ProgressTabs.Content
                  value={Tab.DETAIL}
                  className="h-full w-full max-w-[720px]"
                >
                  <div className="grid grid-cols-1 gap-5">
                    <ObjectDetailForm form={nestedForm(form, "detail")} />
                  </div>
                </ProgressTabs.Content>
                <ProgressTabs.Content
                  value={Tab.ADDITIONAL_COMFORT}
                  className="h-full w-full max-w-[720px]"
                >
                  <div className="grid grid-cols-1 gap-5">
                    <ObjectAdditionalComfortForm
                      form={nestedForm(form, "additionalComfort")}
                    />
                  </div>
                </ProgressTabs.Content>
                <ProgressTabs.Content
                  value={Tab.MEAL}
                  className="h-full w-full max-w-[720px]"
                >
                  <div className="grid grid-cols-1 gap-5">
                    <ObjectMealForm form={nestedForm(form, "meal")} />
                  </div>
                </ProgressTabs.Content>
                <ProgressTabs.Content
                  value={Tab.ADDITIONAL_SERVICE}
                  className="h-full w-full max-w-[720px]"
                >
                  <div className="grid grid-cols-1 gap-5">
                    <ObjectFeeAdditionalServiceForm
                      form={nestedForm(form, "additionalService")}
                    />
                  </div>
                </ProgressTabs.Content>
                <ProgressTabs.Content
                  value={Tab.MEDIA}
                  className="h-full w-full max-w-[720px]"
                >
                  <div className="grid grid-cols-1 gap-5">
                    <MediaForm form={nestedForm(form, "media")} />
                  </div>
                </ProgressTabs.Content>
              </Form>
            </FocusModal.Body>
          </FocusModal.Content>
        </ProgressTabs>
      </FocusModal>
    </div>
  );
};

const createObjectTypeBlank = () => {
  return {
    objectType: 6,
    objectTypeProperty: 23,
  };
};
