import { useGetAllObjectsQuery } from "@/api/Object";
import { useGetRoomsByAnObjectIdQuery } from "@/api/ObjectRoom";
import {
  Page,
  PageContent,
  PageHeader,
  PageHeaderButtons,
  PageTitle,
} from "@/components/organisms/page";
import { NewRoomsButton } from "@/components/templates/new-room-button";
import { RoomsTable } from "@/components/templates/rooms-table";
import { columns } from "@/components/templates/rooms-table/columns";
import { Container } from "@medusajs/ui";
import { useParams } from "@tanstack/react-router";
export const RoomsPage = () => {
  const { id } = useParams({
    from: "/a/_layout/objects/$id/rooms/",
  });
  const { data, isSuccess } = useGetRoomsByAnObjectIdQuery(parseInt(id));
  const { data: objectData, isSuccess: objectIsSuccess } =
    useGetAllObjectsQuery();

  if (isSuccess && objectIsSuccess) {
    const anObjectPropertyTypeId = objectData.result.find((object) => {
      return object.id == parseInt(id);
    })?.anObjectPropertyTypeId as number;
    return (
      <Container>
        <Page>
          <PageHeader>
            <PageTitle>Комнаты</PageTitle>
            <PageHeaderButtons>
              <NewRoomsButton anObjectPropertyTypeId={anObjectPropertyTypeId} />
            </PageHeaderButtons>
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
