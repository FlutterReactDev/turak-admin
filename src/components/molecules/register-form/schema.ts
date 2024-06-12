import { PhoneNumberUtil } from "google-libphonenumber";
import {
  InferType,
  addMethod,
  date,
  number,
  object,
  ref,
  string
} from "yup";
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
export const RegisterSchema = object({
  name: string().required("Необходимо указать имя"),
  surname: string().required("Необходимо указать фамилию"),
  gender: number().required("Необходимо указать пол"),

  dateOfBirth: date().required("Необходимо указать дату рождения"),
  countryID: number()
    .typeError("Необходимо указать страну")
    .required("Необходимо указать страну"),
  languageID: number().required("Необходимо выбрать язык"),
  email: string()
    .email("Необходимо указать почту")
    .required("Необходимо указать почту"),
  password: string()
    .min(6, "Необходимо указать пaроль не меньше 6 символов")
    .required("Необходимо указать пaроль"),
  confirmPassword: string()
    .oneOf([ref("password")], "Пороли должны быть похожи")
    .required("Необходимо указать пороль"),
  phone: string().phone().required("Необходимо указать номер телефона"),
});

export type RegisterType = InferType<typeof RegisterSchema>;
