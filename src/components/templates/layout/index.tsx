import { Header } from "@/components/organisms/header";
import { Sidebar } from "@/components/organisms/sidebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { cn } from "@/lib/utils";
import { FC, PropsWithChildren, useState } from "react";
import { useLockBodyScroll } from "react-use";
interface LayoutProps {
  defaultLayout: number[] | undefined;
  defaultCollapsed?: boolean;
  navCollapsedSize: number;
}
export const Layout: FC<PropsWithChildren<LayoutProps>> = (props) => {
  const {
    defaultLayout = [265, 440, 655],
    defaultCollapsed = false,
    navCollapsedSize,
    children,
  } = props;
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  useLockBodyScroll(true);
  return (
    <div className="h-dvh">
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(
            sizes
          )}`;
        }}
        className="h-screen items-stretch"
      >
        <ResizablePanel
          defaultSize={defaultLayout[0]}
          collapsedSize={navCollapsedSize}
          collapsible={true}
          minSize={9}
          maxSize={15}
          onCollapse={() => {
            setIsCollapsed(true);
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              true
            )}`;
          }}
          onExpand={() => {
            setIsCollapsed(false);
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              false
            )}`;
          }}
          className={cn(
            isCollapsed &&
              "min-w-[50px] transition-all duration-300 ease-in-out",
            "bg-white"
          )}
        >
          <Sidebar isCollapsed={isCollapsed} />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel
          defaultSize={defaultLayout[1]}
          minSize={30}
          className="h-full flex flex-col"
        >
          <Header />
          <main className="p-10 h-full overflow-y-auto flex-1">{children}</main>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};
