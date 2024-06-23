import { PrivateRoute } from "@/components/private-route";
import { Layout } from "@/components/templates/layout";
import { Outlet, createFileRoute } from "@tanstack/react-router";
import { useCookie } from "react-use";

export const Route = createFileRoute("/a/")({
  component: Index,
});

function Index() {
  const [layout] = useCookie("react-resizable-panels:layout");
  const [collapsed] = useCookie("react-resizable-panels:collapsed");

  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined;

  return (
    <PrivateRoute>
      <Layout
        navCollapsedSize={4}
        defaultLayout={undefined}
        defaultCollapsed={undefined}
      >
        <Outlet />
      </Layout>
    </PrivateRoute>
  );
}
