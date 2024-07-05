import { InferType, array, boolean, number, object, string } from "yup";

export const updateProfileSchema = object({
  name: string().required("Необходимо указать имя"),
  surname: string().required("Необходимо указать фамилию"),
  gender: number().required("Необходимо указать пол"),

  dateOfBirth: string().required("Необходимо указать дату рождения"),
  countryID: number()
    .typeError("Необходимо указать страну")
    .required("Необходимо указать страну"),
  languageID: number().required("Необходимо выбрать язык"),
  email: string()
    .email("Необходимо указать почту")
    .required("Необходимо указать почту"),
  phoneNumbers: array()
    .of(
      object({
        id: number().required(),
        phoneNumber: string().required(),
        isMain: boolean().required(),
        isDelete: boolean().required(),
      })
    )
    .required(),
});

export type UpdateProfileType = InferType<typeof updateProfileSchema>;
