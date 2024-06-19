import { useGetAllObjectsQuery } from "@/api/Object";
import { CalendarCard } from "@/components/molecules/calendar-card";
import {
  Page,
  PageContent,
  PageHeader,
  PageHeaderButtons,
  PageTitle,
} from "@/components/organisms/page";

import { AddBookingButton } from "@/components/templates/calendar-timeline/components/add-booking-button";
import { Container } from "@medusajs/ui";

export const CalendarPage = () => {
  const { data, isSuccess } = useGetAllObjectsQuery();
  return (
    <Page>
      <Container>
        <PageHeader>
          <PageTitle>Календарь</PageTitle>
          <PageHeaderButtons>
            <AddBookingButton />
          </PageHeaderButtons>
        </PageHeader>

        <PageContent>
          {/* <FocusModal>
            <FocusModal.Trigger>
              <Button>Календарь бронирования</Button>
            </FocusModal.Trigger>
            <Tabs>
              <FocusModal.Content className="p-0 z-50 inset-0">
                <FocusModal.Header className="flex w-full items-center justify-start">
                  <TabsList>
                    <TabsTrigger value="1">Account</TabsTrigger>
                    <TabsTrigger value="2">Password</TabsTrigger>
                  </TabsList>
                  <NewBookingBtn />
                </FocusModal.Header>
                <FocusModal.Body className="py-2 ">
                  <TabsContent value="1">
                    <App />
                  </TabsContent>
                  <TabsContent value="2">
                    <App />
                  </TabsContent>
                </FocusModal.Body>
              </FocusModal.Content>
            </Tabs>
          </FocusModal> */}
          <div className="grid grid-cols-3 gap-4 mt-5">
            {isSuccess &&
              data.result.map((data) => {
                return <CalendarCard {...data} />;
              })}
          </div>
        </PageContent>
      </Container>
    </Page>
  );
};
