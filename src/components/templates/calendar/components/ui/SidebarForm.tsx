import { eachDayOfInterval, max, min, setHours } from "date-fns";

import { yupResolver } from "@hookform/resolvers/yup";

import { useCreateAvailabilityMutation } from "@/api/ObjectRoomCalendar";
import { AddBookignForm } from "@/components/forms/add-booking-form";
import { AddBookingSchema } from "@/components/forms/add-booking-form/schema";
import { colors } from "@/components/molecules/color-picker/colors";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useToast } from "@/components/ui/use-toast";
import { usePrompt } from "@/hooks/use-prompt";
import { isFetchBaseQueryError } from "@/lib/server-error-handler";
import { nestedForm } from "@/utils/nested-from";
import { memo } from "react";
import { useForm } from "react-hook-form";
import { InferType, object } from "yup";
import { calendarActions } from "../..";
import {
  getCalendar,
  getObject,
  getObjectAvailibility,
  getSeasonPriceByDate,
} from "../../model/selectors";
import { useSidebar } from "../../model/useSidebar";
import { convertToHour } from "../../utils/convertToHour";
import { isOverlaping } from "../../utils/isOverlaping";
import { useAppDispatch } from "../shared/hooks/useAppDispatch";
import { useAppSelector } from "../shared/hooks/useAppSelecter";
const createBooking = object({
  addBooking: AddBookingSchema,
});

type CreateBookingType = InferType<typeof createBooking>;

export const SidebarForm = memo(() => {
  const [createAvailability] = useCreateAvailabilityMutation();
  const dispatch = useAppDispatch();
  const prompt = usePrompt();
  const { toast } = useToast();
  const { onClose, objectId } = useSidebar();

  const { rangeSelect } = useAppSelector(getCalendar);
  const availability = useAppSelector(
    getObjectAvailibility(objectId as number)
  );

  const object = useAppSelector(getObject(objectId as number));

  const selectedDatesForCost = useAppSelector(
    getSeasonPriceByDate(
      objectId,
      rangeSelect.in != null && rangeSelect.out != null
        ? eachDayOfInterval({
            start: min([rangeSelect.in, rangeSelect.out]),
            end: max([rangeSelect.in, rangeSelect.out]),
          })
        : []
    )
  );

  // const getCellPrice = useCallback(() => {
  //   if (
  //     selectedDatesForCost.length >= 1 &&
  //     Math.min(...selectedDatesForCost.map((s) => s.cost)) ==
  //       Math.max(...selectedDatesForCost.map((s) => s.cost))
  //   ) {
  //     return `${Math.max(...selectedDatesForCost.map((s) => s.cost))}`;
  //   }

  //   return "";
  // }, [selectedDatesForCost]);

  const form = useForm({
    resolver: yupResolver(createBooking),
    defaultValues: {
      addBooking: {
        dates: {
          startDate: rangeSelect.in as Date,
          endDate: rangeSelect.out as Date,
        },
        color: colors[0].value,
        timeEnd: object.checkIn,
        timeStart: object.checkOut,
        guestPhone: "+996",
      },
    },
  });

  const { formState, getValues, handleSubmit } = form;

  const onCreateAvailibility = async ({
    maxDate,
    minDate,
    comment,
    color,
    phoneNumber,
    clientFullname,
    checkIn,
    checkOut,
  }: {
    minDate: Date;
    maxDate: Date;
    comment: string;
    color: string;
    phoneNumber?: string;
    clientFullname?: string;
    checkIn: string;
    checkOut: string;
  }) => {
    const isCanSelect =
      availability.filter((a) => {
        return isOverlaping(
          {
            start: setHours(minDate, convertToHour(checkIn) || 0),
            end: setHours(maxDate, convertToHour(checkOut) || 0),
          },
          {
            start: a.minDate,
            end: a.maxDate,
          }
        );
      }).length == 0;

    if (isCanSelect && objectId != undefined) {
      try {
        const data = await createAvailability({
          data: [
            {
              comment,
              createdDate: new Date(),
              startDate: minDate,
              endDate: maxDate,
              guestPhone: phoneNumber || "",
              color,
              id: 0,
              anObjectRoomId: objectId,
              gusetName: clientFullname || "",
            },
          ],
          roomId: objectId,
        }).unwrap();
        toast({
          title: data.message,
          description: data.details,
          variant: "success",
        });
        dispatch(
          calendarActions.createAvailability({
            id: 0,
            minDate: setHours(minDate, convertToHour(checkIn) || 0),
            maxDate: setHours(maxDate, convertToHour(checkOut) || 0),
            objectId,
            comment,
            color,
            createdDate: new Date(),
            totalSum: selectedDatesForCost.reduce(
              (acc, cur) => acc + cur.cost,
              0
            ),
            phoneNumber: phoneNumber || "",
            clientFullname: clientFullname || "",
          })
        );
        onClose();
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
    }
  };

  const onSave = ({ addBooking }: CreateBookingType) => {
    onCreateAvailibility({
      minDate: addBooking.dates.startDate,
      maxDate: addBooking.dates.endDate,
      comment: addBooking.comment || "",
      color: addBooking.color,
      phoneNumber: addBooking.guestPhone,
      clientFullname: addBooking.gusetName,
      checkIn: addBooking.timeStart,
      checkOut: addBooking.timeEnd,
    });
  };
  const onCancel = async () => {
    const isFormEdited =
      JSON.stringify(formState.defaultValues?.addBooking) !=
      JSON.stringify(getValues().addBooking);

    if (isFormEdited) {
      const data = await prompt({
        title: "Вы уверены что хотите закрыть?",
        description: "У вас есть не сохраненные данные",
      });

      if (data) {
        onClose();
      }
    } else {
      onClose();
    }
  };
  return (
    <Sheet open modal onOpenChange={onCancel}>
      <Form {...form}>
        <SheetContent className="overflow-y-auto w-full sm:max-w-lg p-0">
          <SheetHeader className="p-6">
            <SheetTitle>Добавить бронирование</SheetTitle>
          </SheetHeader>
          <div className="grid grid-cols-1 gap-4 p-6">
            <AddBookignForm form={nestedForm(form, "addBooking")} />
          </div>

          <SheetFooter className="sticky bottom-0 p-2 bg-white gap-2">
            <Button type="button" variant={"outline"} onClick={onCancel}>
              Закрыть
            </Button>

            <Button type="submit" onClick={handleSubmit(onSave)}>
              Создать
            </Button>
          </SheetFooter>
        </SheetContent>
      </Form>
    </Sheet>
  );
});
