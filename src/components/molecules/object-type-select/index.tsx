import { useGetObjectTypeQuery } from "@/api/ObjectType";
import { useGetAllObjectTypePropertyQuery } from "@/api/ObjectTypeProperty";

import { ChoiceBox, RadioGroup } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { FC, useEffect, useState } from "react";
interface ObjectTypeSelectProps {
  value: {
    objectType: number | undefined;
    objectTypeProperty: number | undefined;
  };
  onChange: (value: { objectType: number; objectTypeProperty: number }) => void;
}
export const ObjectTypeSelect: FC<ObjectTypeSelectProps> = (props) => {
  const { onChange, value } = props;
  const [objectType, setObjectType] = useState<undefined | string>(
    `${value.objectType}`
  );
  const [objectTypeProperty, setObjectTypeProperty] = useState<
    undefined | string
  >(`${value.objectTypeProperty}`);
  const { data: objectTypes, isSuccess: objectTypesIsSuccess } =
    useGetObjectTypeQuery();
  const { data: objectTypesProperty, isSuccess: objectTypesPropertyIsSuccess } =
    useGetAllObjectTypePropertyQuery();

  useEffect(() => {
    if (objectTypesIsSuccess && objectTypesPropertyIsSuccess) {
      onChange({
        objectType: objectTypes.result[0].id,
        objectTypeProperty: objectTypesProperty.result.filter(
          ({ anObjectTypeId }) => {
            return objectTypes.result[0].id == anObjectTypeId;
          }
        )[0].id,
      });

      setObjectType(`${objectTypes.result[0].id}`);
      setObjectTypeProperty(
        `${
          objectTypesProperty.result.filter(({ anObjectTypeId }) => {
            return objectTypes.result[0].id == anObjectTypeId;
          })[0].id
        }`
      );
    }
  }, [objectTypesIsSuccess, objectTypesPropertyIsSuccess]);

  const onObjectTypeChange = (value: string) => {
    setObjectType(value);
    if (objectTypesProperty?.result) {
      setObjectTypeProperty(
        `${
          objectTypesProperty.result.filter(({ anObjectTypeId }) => {
            return parseInt(value) == anObjectTypeId;
          })[0].id
        }`
      );
      onChange({
        objectType: parseInt(value),
        objectTypeProperty: objectTypesProperty.result.filter(
          ({ anObjectTypeId }) => {
            return parseInt(value) == anObjectTypeId;
          }
        )[0].id,
      });
    }
  };

  const onObjectTypeProperty = (value: string) => {
    setObjectTypeProperty(value);
    onChange({
      objectType: parseInt(objectType as string),
      objectTypeProperty: parseInt(value),
    });
  };

  if (objectTypesIsSuccess && objectTypesPropertyIsSuccess) {
    return (
      <div className="flex flex-col gap-4">
        <RadioGroup value={objectType} onValueChange={onObjectTypeChange}>
          <div className="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-2">
            {objectTypes.result.map(({ description, name, id }) => {
              return (
                <>
                  <ChoiceBox
                    label={name}
                    value={`${id}`}
                    description={description}
                  />
                </>
              );
            })}
          </div>
        </RadioGroup>
        <div className="px-10">
          <Separator />
        </div>
        <h3 className="text-foreground">Выберите заголовок объявления:</h3>
        <RadioGroup
          value={objectTypeProperty}
          onValueChange={onObjectTypeProperty}
        >
          <div className="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-2">
            {objectTypesProperty.result
              .filter(({ anObjectTypeId }) => {
                return parseInt(objectType as string) == anObjectTypeId;
              })
              .map(({ name, id }) => {
                return (
                  <ChoiceBox label={name} value={`${id}`} description={""} />
                );
              })}
          </div>
        </RadioGroup>
      </div>
    );
  }
  return <></>;
};
