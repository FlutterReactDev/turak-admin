import { InferType, object, string, addMethod } from "yup";
import { PhoneNumberUtil } from "google-libphonenumber";

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

export const LoginSchema = object({
  phone: string().phone().required("Необходимо указать номер телефона"),
  password: string()
    .min(6, "Пароль должен быть не менее 6 символов")
    .required("Поле обязательно для запонения"),
});

export type LoginType = InferType<typeof LoginSchema>;
