import { useGetAllObjectsQuery } from "@/api/Object";
import { CalendarCard } from "@/domains/calendar/ui/calendar-card";
import {
  Page,
  PageContent,
  PageHeader,
  PageHeaderButtons,
  PageTitle,
} from "@/components/organisms/page";

import { Container } from "@medusajs/ui";
import { useState } from "react";

export const CalendarPage = () => {
  const { data, isSuccess } = useGetAllObjectsQuery();
  const [selectedCalendarObject, setSelectedCalendarObject] = useState<
    {
      name: string;
      id: number;
    }[]
  >([]);

  const onAddNewObject = (objectId: number) => {
    setSelectedCalendarObject((prevState) => {
      if (
        prevState.some((objects) => {
          return objects.id == objectId;
        })
      ) {
        return [...prevState];
      }

      return [
        ...prevState,
        {
          id: objectId,
          name:
            data?.result.find(({ id }) => {
              return id == objectId;
            })?.name || "",
        },
      ];
    });
  };
  return (
    <Page>
      <Container>
        <PageHeader>
          <PageTitle>Календарь</PageTitle>
          <PageHeaderButtons></PageHeaderButtons>
        </PageHeader>

        <PageContent>
          <div className="grid grid-cols-1 gap-4 mt-10">
            {isSuccess &&
              data.result.map((data) => {
                return (
                  <CalendarCard
                    selectedCalendarObject={selectedCalendarObject}
                    onAddNewObject={onAddNewObject}
                    key={data.id}
                    {...data}
                  />
                );
              })}
          </div>
        </PageContent>
      </Container>
    </Page>
  );
};
