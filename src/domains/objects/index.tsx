import { useGetAllObjectsQuery } from "@/api/Object";
import {
  Page,
  PageContent,
  PageHeader,
  PageHeaderButtons,
  PageTitle,
} from "@/components/organisms/page";
import { ObjectsTable } from "@/components/templates/objects-table";
import { columns } from "@/components/templates/objects-table/columns";
import { NewObject } from "./new";

import { Container } from "@medusajs/ui";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export const ObjectsPage = () => {
  const { data, isSuccess } = useGetAllObjectsQuery();

  return (
    <Container>
      <Page>
        <PageHeader>
          <PageTitle>Мои объекты</PageTitle>
          <PageHeaderButtons>
            <NewObject />
            <Button>
              <Download />
              Выгрузить в excel
            </Button>
          </PageHeaderButtons>
        </PageHeader>
        <PageContent>
          {isSuccess && <ObjectsTable data={data.result} columns={columns} />}
        </PageContent>
      </Page>
    </Container>
  );
};
