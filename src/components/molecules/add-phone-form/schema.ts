import { PhoneNumberUtil } from "google-libphonenumber";

import { InferType, addMethod, object, string } from "yup";
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

export const addPhoneSchema = object({
  phone: string().phone().required(),
});

export type AddPhoneType = InferType<typeof addPhoneSchema>;
