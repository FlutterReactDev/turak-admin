import { AddBookignForm } from "@/components/forms/add-booking-form";
import { AddBookingSchema } from "@/components/forms/add-booking-form/schema";
import { colors } from "@/components/molecules/color-picker/colors";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Providers } from "@/providers";
import { nestedForm } from "@/utils/nested-from";
import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { createRoot } from "react-dom/client";
import { useForm } from "react-hook-form";
import { InferType, object } from "yup";
import { useAppSelector } from "../components/shared/hooks/useAppSelecter";
import { getObject } from "../model/selectors";
const createBooking = object({
  addBooking: AddBookingSchema,
});
type CreateBookingType = InferType<typeof createBooking>;

interface UseBookingSheetProps {
  objectId: number;
  startDate: Date;
  endDate: Date;

  onConfirm?: (data: {
    comment?: string | undefined;
    gusetName?: string | undefined;
    dates: {
      startDate: Date;
      endDate: Date;
    };

    guestPhone: string;
    color: string;
  }) => void;
  onCancel?: () => void;
}
interface CreateAvailabilitySheetProps {
  open: boolean;
  objectId: number;
  startDate: Date;
  endDate: Date;

  onConfirm: (data: {
    comment?: string | undefined;
    gusetName?: string | undefined;
    dates: {
      startDate: Date;
      endDate: Date;
    };

    guestPhone: string;
    color: string;
  }) => void;

  onCancel: () => void;
}

const CreateAvailabilitySheet: FC<CreateAvailabilitySheetProps> = (props) => {
  const { endDate, startDate, objectId, onConfirm, open, onCancel } = props;
  const { checkIn, checkOut } = useAppSelector(getObject(objectId));

  const form = useForm({
    resolver: yupResolver(createBooking),
    defaultValues: {
      addBooking: {
        dates: {
          startDate: startDate,
          endDate: endDate,
        },
        color: colors[0].value,
        timeEnd: checkOut,
        timeStart: checkIn,
      },
    },
  });

  const onSubmit = (data: CreateBookingType) => {
    const { addBooking } = data;

    onConfirm({
      color: addBooking.color,
      dates: {
        startDate: addBooking.dates.startDate,
        endDate: addBooking.dates.endDate,
      },
      guestPhone: addBooking.guestPhone,
      comment: addBooking.comment,
      gusetName: addBooking.gusetName,
    });
  };

  const onCreate = () => {
    form.handleSubmit(onSubmit)();
  };
  return (
    <Sheet
      open={open}
      onOpenChange={() => {
        onCancel();
      }}
    >
      <Form {...form}>
        <SheetContent className="overflow-y-auto w-full sm:max-w-lg p-0">
          <SheetHeader className="p-6">
            <SheetTitle>Добавить бронирование</SheetTitle>
          </SheetHeader>
          <div className="grid grid-cols-1 gap-4 p-6">
            <AddBookignForm form={nestedForm(form, "addBooking")} />
          </div>

          <SheetFooter className="sticky bottom-0 p-2 bg-white gap-2">
            <SheetClose asChild>
              <Button type="button" variant={"outline"}>
                Закрыть
              </Button>
            </SheetClose>

            <Button type="button" onClick={onCreate}>
              Создать
            </Button>
          </SheetFooter>
        </SheetContent>
      </Form>
    </Sheet>
  );
};

export const useBookingSheet = () => {
  return (
    props: UseBookingSheetProps
  ): Promise<
    | {
        comment?: string | undefined;
        gusetName?: string | undefined;
        dates: {
          startDate: Date;
          endDate: Date;
        };

        guestPhone: string;
        color: string;
      }
    | undefined
  > => {
    return new Promise((resolve) => {
      const mountRoot = createRoot(document.createElement("div"));
      let open = true;

      const onConfirm = (data: {
        comment?: string | undefined;
        gusetName?: string | undefined;
        dates: {
          startDate: Date;
          endDate: Date;
        };

        guestPhone: string;
        color: string;
      }) => {
        open = false;
        resolve(data);

        render();
      };

      const onCancel = () => {
        open = false;
        resolve(undefined);

        render();
      };

      // attach the dialog in the mount node
      const render = () => {
        mountRoot.render(
          <Providers>
            <CreateAvailabilitySheet
              onCancel={onCancel}
              onConfirm={onConfirm}
              open={open}
              endDate={props.endDate}
              startDate={props.startDate}
              objectId={props.objectId}
            />
          </Providers>
        );
      };

      render();
    });
  };
};
