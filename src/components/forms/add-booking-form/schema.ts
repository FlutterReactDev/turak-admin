import { PhoneNumberUtil } from "google-libphonenumber";
import { InferType, addMethod, date, object, string } from "yup";
const phoneUtil = PhoneNumberUtil.getInstance();
const isPhoneValid = (phone: string) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch (error) {
    return false;
  }
};

addMethod(string, "phone", function (messageError = "Неверный номер телефона") {
  return this.test("phone", messageError, (value) => {
    if (value && value.length > 0) {
      return isPhoneValid(value);
    }
    return true;
  });
});
export const AddBookingSchema = object({
  dates: object({
    startDate: date().required(),
    endDate: date().required(),
  }),
  timeStart: string().required(),
  timeEnd: string().required(),
  comment: string(),
  guestPhone: string().phone().required("Необходимо указать номер телефона"),
  gusetName: string(),
  color: string().required(),
});

export type AddBookingType = InferType<typeof AddBookingSchema>;
