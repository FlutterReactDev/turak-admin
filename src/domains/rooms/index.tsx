import { useGetRoomsByAnObjectIdQuery } from "@/api/ObjectRoom";
import {
  Page,
  PageContent,
  PageHeader,
  PageHeaderButtons,
  PageTitle,
} from "@/components/organisms/page";
import { RoomsTable } from "@/components/templates/rooms-table";
import { useParams } from "@tanstack/react-router";
import { columns } from "@/components/templates/rooms-table/columns";
import { Container } from "@medusajs/ui";
export const RoomsPage = () => {
  const { id } = useParams({
    from: "/a/_layout/objects/$id/rooms/",
  });
  const { data, isSuccess } = useGetRoomsByAnObjectIdQuery(parseInt(id));
  if (isSuccess) {
    return (
      <Container>
        <Page>
          <PageHeader>
            <PageTitle>Комнаты</PageTitle>
            <PageHeaderButtons></PageHeaderButtons>
          </PageHeader>
          <PageContent>
            {isSuccess && <RoomsTable data={data.result} columns={columns} />}
          </PageContent>
        </Page>
      </Container>
    );
  }

  return <></>;
};
