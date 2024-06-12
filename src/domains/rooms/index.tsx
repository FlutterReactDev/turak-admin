import { useGetObjectByIdQuery } from "@/api/Object";
import {
  Page,
  PageHeader,
  PageContent,
  PageHeaderButtons,
  PageTitle,
  } from "@/components/organisms/page";
import { useParams } from "@tanstack/react-router";

export const RoomsPage = () => {
  const { id } = useParams({
    from: "/a/_layout/objects/$id/rooms/",
  });
  const { data, isSuccess } = useGetObjectByIdQuery(id);
  if (isSuccess) {
    return (
      <Page>
        <PageHeader>
          <PageTitle>Комнаты</PageTitle>
          <PageHeaderButtons>
            <NewObject />
          </PageHeaderButtons>
        </PageHeader>
        <PageContent>
          {isSuccess && <ObjectsTable data={data.result} columns={columns} />}
        </PageContent>
      </Page>
    );
  }

  return <></>;
};
