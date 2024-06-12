import { useDeleteMutation } from "@/api/Object";
import { ObjectT } from "@/api/Object/types";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";
import { usePrompt } from "@/hooks/use-prompt";
import { isFetchBaseQueryError } from "@/lib/server-error-handler";

import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { useNavigate } from "@tanstack/react-router";
import { Row } from "@tanstack/react-table";
import { Copy, Edit2, Trash2Icon } from "lucide-react";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const object = row.original as ObjectT;
  const promt = usePrompt();
  const { toast } = useToast();
  const [deleteObject, { isLoading }] = useDeleteMutation();

  const navigate = useNavigate();

  const onDelete = async () => {
    const yes = await promt({
      title: "Удалить объект",

      description: "Вы уверены, что хотите удалить этот объект?",
      cancelText: "Отмена",
      confirmText: "Да, удалить",
      verificationText: object.name,
    });

    if (yes) {
      try {
        const res = await deleteObject(object.id).unwrap();
        toast({
          variant: "success",
          title: res.message,
          description: res.details,
        });
      } catch (error) {
        if (isFetchBaseQueryError(error)) {
          const errMsg = "error" in error ? error.error : error.data;
          if (typeof errMsg == "string") {
            toast({
              variant: "destructive",
              title: errMsg,
            });
          } else {
            toast({
              variant: "destructive",
              title: errMsg.message,
            });
          }
        }
      }
    }
  };
  const onDuplicate = async () => {};

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem
          onClick={() =>
            navigate({
              to: "/a/objects/$id",
              params: {
                id: `${object.id}`,
              },
            })
          }
          className="gap-2"
        >
          <Edit2 />
          Редактировать
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2" onClick={onDuplicate}>
          <Copy />
          Дублировать
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="gap-2"
          onClick={onDelete}
          disabled={isLoading}
        >
          <Trash2Icon />
          Удалить
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
