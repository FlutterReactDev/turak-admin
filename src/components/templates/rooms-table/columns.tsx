import { ObjectRoom } from "@/api/ObjectRoom/types";
import { RoomNameBadge } from "@/components/molecules/room-name-badge";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./data-table-column-header";

export const columns: ColumnDef<ObjectRoom>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
  },
  {
    id: "ownName",
    accessorFn: ({ anObjectRoomDescription: { ownName } }) => ownName,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Свое название" />
    ),
    cell: ({ getValue }) => {
      const ownName = getValue<string>();
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">{ownName}</span>
        </div>
      );
    },
  },
  {
    id: "uniqueName",
    accessorFn: ({ anObjectRoomDescription: { uniqueName } }) => uniqueName,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Уникальное название" />
    ),
    cell: ({ getValue }) => {
      const uniqueName = getValue<string>();
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {uniqueName}
          </span>
        </div>
      );
    },
  },
  {
    id: "roomNameTypeId",
    accessorFn: ({
      anObjectRoomDescription: { roomNameTypeId },
      anObjectId,
    }) => ({
      roomNameTypeId,
      anObjectId,
    }),
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Название номера" />
    ),
    cell: ({ getValue }) => {
      const { anObjectId, roomNameTypeId } = getValue<{
        roomNameTypeId: number;
        anObjectId: number;
      }>();

      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            <RoomNameBadge value={roomNameTypeId} anObjectId={anObjectId} />
          </span>
        </div>
      );
    },
  },
];
