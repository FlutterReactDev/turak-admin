import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  HStack,
  Hide,
  IconButton,
  Stack,
  useMediaQuery,
} from "@chakra-ui/react";

import { calendarActions } from "../..";

import { FC, memo, useCallback, useEffect, useState } from "react";
import {
  getColumnDays,
  getCommonSettings,
  getObjectGroup,
} from "../../model/selectors";
import { Day } from "./Day";

import { ActionTop } from "./ActionTop";
import { CalendarCollapseGroup } from "./CalendarCollapseGroup";
import { CalendarScroller } from "./CalendarScroller";
import { ChangeObjectRoom } from "./ChangeObjectRoom";
import { ModalDeleteAvailibility } from "./ModalDeleteAvailibility";
import { ObjectItem } from "./ObjectItem";
import { SearchAvailibilityRoomsBtn } from "./SearchAvailibilityRoomsBtn";
import { SearchAvailibilityRoomsModal } from "./SearchAvailibilityRoomsModal";
import { SearchObject } from "./SearchObject";
import { Sidebar } from "./Sidebar";
import { SmallGoToDateBtn } from "./SmallGoToDateBtn";
import { useSelector, useDispatch } from "react-redux";
import { useAppSelector } from "../shared/hooks/useAppSelecter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useObjects } from "../../model/useObjects";
import { useGetRoomsByAnObjectIdQuery } from "@/api/ObjectRoom";
import { useGetCurrenciesQuery } from "@/api/Currencies";
import { useGetRoomCategoriesQuery } from "@/api/RoomCategories";
import { CalendarObject } from "../../model/types";
interface CalendarProps {
  objectId: number;
}
export const Calendar: FC<CalendarProps> = memo(({ objectId }) => {
  const dispatch = useDispatch();
  const { setObjects } = useObjects();
  const { data: roomsData, isSuccess: roomsIsSuccess } =
    useGetRoomsByAnObjectIdQuery(objectId);
  const { data: currencyData, isSuccess: currencyIsSuccess } =
    useGetCurrenciesQuery();
  const { data: roomCategory, isSuccess: roomCategoryIsSuccess } =
    useGetRoomCategoriesQuery();
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
  const objectsGroup = useSelector(getObjectGroup);

  const [isLessThan968] = useMediaQuery("(max-width: 968px)");
  const days = useSelector(getColumnDays);

  const [rangeObjectId, setRangeObjectId] = useState<null | number>(null);

  const { sidebarWidth } = useAppSelector(getCommonSettings);

  const onResize = () => {
    dispatch(calendarActions.initWidthWindow());
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    dispatch(calendarActions.initWidthWindow());

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const onPrev = () => {
    dispatch(calendarActions.decreaseStep());
  };
  const onNext = () => {
    dispatch(calendarActions.increaseStep());
  };

  const onRangeObjectId = useCallback((id: number) => {
    setRangeObjectId(id);
  }, []);

  return (
    <Box>
      <Grid
        gridTemplateColumns={isLessThan968 ? "1fr" : "270px 1fr"}
        gridTemplateRows={isLessThan968 ? "auto auto" : "124px 80px"}
        gridTemplateAreas={
          isLessThan968
            ? ` "filter filter"
              "actionsTop actionsTop"
              "actionsBottom actionsBottom"
              `
            : `
              "filter actionsTop"
              " filter actionsBottom"`
        }
        {...(!isLessThan968 && {
          position: "sticky",
          top: 0,
          zIndex: "9",
        })}
      >
        <GridItem area={"filter"}>
          <Stack alignItems={"center"} h="full" spacing={3}>
            <Hide breakpoint="(max-width: 968px)">
              <SearchAvailibilityRoomsBtn />
              <SearchObject />
            </Hide>
          </Stack>
        </GridItem>

        <ActionTop />

        <GridItem area={"actionsBottom"} overflow={"hidden"} w="full">
          <Grid
            gridTemplateColumns={
              isLessThan968 ? `${sidebarWidth}px 1fr` : "1fr"
            }
            alignItems={"flex-end"}
          >
            {isLessThan968 && (
              <Flex alignItems={"center"} justifyContent={"center"} pb={1}>
                <SmallGoToDateBtn />
              </Flex>
            )}

            <HStack
              cursor={"ew-resize"}
              borderBottom={"1px solid"}
              borderColor={"#d8d8d8"}
              overflow={"hidden"}
              spacing={0}
              h="full"
              userSelect={"none"}
              pos={"relative"}
              style={{
                touchAction: "none",
              }}
            >
              {!isLessThan968 && (
                <Button
                  onClick={onPrev}
                  size={"icon"}
                  variant={"secondary"}
                  className="absolute left-[15px] top-[15px] mt-4 rounded-full"
                >
                  <ChevronLeft />
                </Button>
              )}

              {days.map((day, index) => {
                return <Day key={index} {...day} />;
              })}

              {!isLessThan968 && (
                <Button
                  onClick={onNext}
                  size={"icon"}
                  variant={"secondary"}
                  className="absolute mt-4 right-[15px] top-[15px] rounded-full"
                >
                  <ChevronRight />
                </Button>
              )}
            </HStack>
          </Grid>
        </GridItem>
      </Grid>

      <Box position={"relative"}>
        {objectsGroup.map(({ name, objects }, idx) => {
          return (
            <CalendarCollapseGroup
              title={`${name}`}
              {...(idx != 0 && {
                defaultIsOpen: false,
              })}
              key={`${name} ${idx}`}
            >
              {objects.map((object) => {
                return (
                  <ObjectItem
                    setRangeObjectId={onRangeObjectId}
                    rangeObjectId={rangeObjectId}
                    {...object}
                    key={object.id}
                  />
                );
              })}
            </CalendarCollapseGroup>
          );
        })}

        <CalendarScroller />
      </Box>
      <ModalDeleteAvailibility />
      <SearchAvailibilityRoomsModal />
      <Sidebar />
    </Box>
  );
});
