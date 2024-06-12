import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  CaretSortIcon,
  EyeNoneIcon,
} from "@radix-ui/react-icons";
import { Column } from "@tanstack/react-table";
import { useMedia } from "react-use";

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  const isMobile = useMedia("(max-width: 768px)");
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      {!isMobile && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="-ml-3 h-8 data-[state=open]:bg-accent"
            >
              <span>{title}</span>
              {column.getIsSorted() === "desc" ? (
                <ArrowDownIcon className="ml-2 h-4 w-4" />
              ) : column.getIsSorted() === "asc" ? (
                <ArrowUpIcon className="ml-2 h-4 w-4" />
              ) : (
                <CaretSortIcon className="ml-2 h-4 w-4" />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
              <ArrowUpIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
              по возрастанию
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
              <ArrowDownIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
              по убыванию
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
              <EyeNoneIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
              Спрятать
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
      {isMobile && (
        <Drawer>
          <DrawerTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="-ml-3 h-8 data-[state=open]:bg-accent"
            >
              <span>{title}</span>
              {column.getIsSorted() === "desc" ? (
                <ArrowDownIcon className="ml-2 h-4 w-4" />
              ) : column.getIsSorted() === "asc" ? (
                <ArrowUpIcon className="ml-2 h-4 w-4" />
              ) : (
                <CaretSortIcon className="ml-2 h-4 w-4" />
              )}
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>{title}</DrawerTitle>
              </DrawerHeader>
              <div className="grid gap-3 grid-cols-1">
                <DrawerClose asChild>
                  <Button
                    variant={"outline"}
                    onClick={() => column.toggleSorting(false)}
                  >
                    <ArrowUpIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                    по возрастанию
                  </Button>
                </DrawerClose>
                <DrawerClose asChild>
                  <Button
                    variant={"outline"}
                    onClick={() => column.toggleSorting(true)}
                  >
                    <ArrowDownIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                    по убыванию
                  </Button>
                </DrawerClose>
                <DrawerClose asChild>
                  <Button
                    variant={"outline"}
                    onClick={() => column.toggleVisibility(false)}
                  >
                    <EyeNoneIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                    Спрятать
                  </Button>
                </DrawerClose>
              </div>
            </div>
            <DrawerFooter>
              <DrawerClose>
                <Button className="w-full" variant="outline">
                  Закрыть
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )}
    </div>
  );
}
