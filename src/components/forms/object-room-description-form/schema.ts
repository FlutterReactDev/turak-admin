import { InferType, number, object, string } from "yup";

export const objectRoomDescriptionSchema = object({
  ownName: string().required("Поле обязательно для заполнения"),
  roomNameTypeId: number()
    .required("Поле обязательно для заполнения")
    .typeError("Поле обязательно для заполнения"),
  uniqueName: string().required("Поле обязательно для заполнения"),
  area: number()
    .typeError("Поле обязательно для заполнения")
    .required("Поле обязательно для заполнения"),
  floorType: number()
    .typeError("Поле обязательно для заполнения")
    .required("Поле обязательно для заполнения"),
  floorsInTheBuilding: number()
    .when("floorType", (floorType, schema) => {
      if (floorType[0] !== 0) {
        return schema
          .min(
            Number(floorType[0]),
            "Общее число этажей не может быть меньше выбранного в поле «Этаж»"
          )
          .required("Выберите один из предложенных вариантов");
      }
      return schema;
    })
    .min(1)
    .required("Поле обязательно для заполнения"),
});


export type ObjectRoomDescriptionType = InferType<typeof objectRoomDescriptionSchema>