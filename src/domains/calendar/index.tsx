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
            <FocusModal.Content className="p-0 z-50 inset-0">
              <FocusModal.Header>
                <NewBookingBtn />
              </FocusModal.Header>
              <FocusModal.Body className="py-2 ">
                <App />
              </FocusModal.Body>
            </FocusModal.Content>
          </FocusModal>
        </PageContent>
      </Container>
    </Page>
  );
};
