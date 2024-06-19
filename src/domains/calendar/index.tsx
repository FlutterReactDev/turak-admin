import {
  Page,
  PageContent,
  PageHeader,
  PageHeaderButtons,
  PageTitle,
} from "@/components/organisms/page";

import { AddBookingButton } from "@/components/templates/calendar-timeline/components/add-booking-button";
import { NewBookingBtn } from "@/components/templates/calendar/components/ui/NewBookingBtn";
import { App } from "@/components/templates/calendar/components/ui/app";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Container, FocusModal } from "@medusajs/ui";

export const CalendarPage = () => {
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
          <FocusModal>
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
          </FocusModal>
        </PageContent>
      </Container>
    </Page>
  );
};
