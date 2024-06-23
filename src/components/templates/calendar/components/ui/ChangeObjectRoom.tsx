/* eslint-disable react-hooks/exhaustive-deps */
import { Select } from "@chakra-ui/react";

import { useGetCurrenciesQuery } from "@/api/Currencies";
import { useGetAllObjectsQuery } from "@/api/Object";
import { useGetRoomsByAnObjectIdQuery } from "@/api/ObjectRoom";
import { useGetRoomCategoriesQuery } from "@/api/RoomCategories";
import { useEffect } from "react";
import { CalendarObject } from "../../model/types";
import { useObjects } from "../../model/useObjects";

export const ChangeObjectRoom = () => {
  const { setObjects, currentObject, setCurrentObject } = useObjects();

  const {
    data: objectsData,
    isSuccess: objectIsSuccess,
    isFetching: objectIsLoading,
  } = useGetAllObjectsQuery();
  const {
    data: roomsData,
    isSuccess: roomsIsSuccess,
    isFetching: roomsIsLoading,
  } = useGetRoomsByAnObjectIdQuery(currentObject as number, {
    skip: !objectIsSuccess || !currentObject,
    refetchOnMountOrArgChange: true,
  });

  const { data: currencyData, isSuccess: currencyIsSuccess } =
    useGetCurrenciesQuery();
  const { data: roomCategory, isSuccess: roomCategoryIsSuccess } =
    useGetRoomCategoriesQuery();
    
  useEffect(() => {
    if (objectIsSuccess && objectsData.result.length && !currentObject) {
      setCurrentObject(objectsData.result[0].id);
    }
  }, [objectIsSuccess]);

  useEffect(() => {
    if (
      roomsIsSuccess &&
      roomsData &&
      currencyIsSuccess &&
      roomCategoryIsSuccess
    ) {
      const objectsData: CalendarObject[] = roomsData.result.map(
        ({
          anObjectRoomDescription: { ownName },
          anObjectRoomBookingSettings: { checkInAfter, checkOutAfter },
          anObjectRoomBaseCost: { pricePerDay, currencyId },
          id,
          categoryType,
        }) => ({
          id: id,
          name: ownName,
          availability: [],
          seasonsPrice: [],
          address: "",
          checkIn: checkInAfter,
          checkOut: checkOutAfter,
          objectDefaultPerDayCost: pricePerDay,
          currency: currencyData.result.filter(({ id }) => id == currencyId)[0]
            .symbol,
          roomCategoryName: roomCategory.result.filter(
            ({ value }) => value == categoryType
          )[0].name,
        })
      );

      setObjects(objectsData);
    }
  }, [roomsIsSuccess, roomsData, currencyIsSuccess, roomCategoryIsSuccess]);

  return (
    <>
      {objectIsSuccess && currentObject && (
        <Select
          onChange={(e) => setCurrentObject(Number(e.target.value))}
          value={currentObject}
          bgColor="white"
        >
          {objectsData.result.map(({ name, id }) => {
            return <option value={id}>{name}</option>;
          })}
        </Select>
      )}
    </>
  );
};
