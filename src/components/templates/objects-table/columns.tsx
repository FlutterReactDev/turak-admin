import { ObjectT } from "@/api/Object/types";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./data-table-column-header";
import { ObjectTypeBadge } from "@/components/molecules/object-type-badge";
import { ObjectPropertyTypeBadge } from "@/components/molecules/object-property-type-badge";
import { InternetAccessBadge } from "@/components/molecules/internet-access-badge";
import { ParkingBadge } from "@/components/molecules/parking-badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { Map2GIS } from "@/components/atoms/2GIS";
import { Marker2GIS } from "@/components/atoms/2GIS/Marker2GIS";
import { SmokingBadge } from "@/components/molecules/smoking-badge";
import { PaymentTypeBadge } from "@/components/molecules/payment-type-badge";
import { DataTableRowActions } from "./data-table-actions";

export const columns: ColumnDef<ObjectT>[] = [
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
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Название" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("name")}
          </span>
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "fullAddress",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Адрес" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("fullAddress")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "rating",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Рейтинг" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("rating")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "anObjectTypeId",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Объект" />
    ),
    cell: ({ row }) => {
      return (
        <div className="max-w-[500px] truncate font-medium">
          <ObjectTypeBadge value={row.getValue("anObjectTypeId")} />
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "anObjectPropertyTypeId",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Тип объекта" />
    ),
    cell: ({ row }) => {
      return (
        <div className="max-w-[500px] truncate font-medium">
          <ObjectPropertyTypeBadge
            value={row.getValue("anObjectPropertyTypeId")}
          />
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "internetAccess",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Интернет" />
    ),
    cell: ({ row }) => {
      return (
        <div className="max-w-[500px] truncate font-medium">
          <InternetAccessBadge value={row.getValue("internetAccess")} />
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "parking",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Парковка" />
    ),
    cell: ({ row }) => {
      return (
        <div className="max-w-[500px] truncate font-medium">
          <ParkingBadge value={row.getValue("parking")} />
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorFn: ({ latitude, longitude }) => {
      return {
        latitude,
        longitude,
      };
    },
    id: "position",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Расположение на карте" />
    ),

    cell: ({ getValue }) => {
      const { latitude, longitude } = getValue<{
        latitude: number;
        longitude: number;
      }>();

      return (
        <div className="min-w-[170px] truncate font-medium flex justify-center">
          <HoverCard openDelay={0} closeDelay={0}>
            <HoverCardTrigger>
              <Button className="w-8 h-8 p-0">
                <MapPin className="w-5 h-5" />
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-96" side="right">
              <div className="w-full h-96 rounded-lg ">
                <Map2GIS
                  initialMapOptions={{
                    center: [longitude, latitude],
                    zoom: 18,
                  }}
                  className="rounded-lgs"
                >
                  <Marker2GIS coordinates={[longitude, latitude]} />
                </Map2GIS>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "yearOfConstruntion",
    accessorFn: ({ anObjectDetail }) => anObjectDetail.yearOfConstruntion,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Год постройки" />
    ),

    cell: ({ getValue }) => {
      const yearOfConstruntion = getValue<number>();
      return (
        <div className="max-w-[500px] truncate font-medium flex justify-center">
          {yearOfConstruntion} год
        </div>
      );
    },
  },
  {
    id: "numberOfRooms",
    accessorFn: ({ anObjectDetail }) => anObjectDetail.numberOfRooms,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Количество комнат" />
    ),

    cell: ({ getValue }) => {
      const numberOfRooms = getValue<number>();
      return (
        <div className="max-w-[500px] truncate font-medium flex justify-center">
          {numberOfRooms} комнат
        </div>
      );
    },
  },
  {
    id: "areaOfTheLand",
    accessorFn: ({ anObjectDetail }) => anObjectDetail.areaOfTheLand,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Площадь" />
    ),

    cell: ({ getValue }) => {
      const areaOfTheLand = getValue<number>();
      return (
        <div className="max-w-[500px] truncate font-medium flex justify-center">
          {areaOfTheLand} м<sub>2</sub>
        </div>
      );
    },
  },
  {
    id: "checkInAfter",
    accessorFn: ({ anObjectDetail }) => anObjectDetail.checkInAfter,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Заезд после" />
    ),

    cell: ({ getValue }) => {
      const checkInAfter = getValue<string>();
      return (
        <div className="max-w-[500px] truncate font-medium flex justify-center">
          {checkInAfter}
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "checkOutAfter",
    accessorFn: ({ anObjectDetail }) => anObjectDetail.checkOutAfter,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Выезд после" />
    ),
    cell: ({ getValue }) => {
      const checkOutAfter = getValue<string>();
      return (
        <div className="max-w-[500px] truncate font-medium flex justify-center">
          {checkOutAfter}
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "smokingOnSite",
    accessorFn: ({ anObjectDetail }) => anObjectDetail.smokingOnSite,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Курение на территории" />
    ),
    cell: ({ getValue }) => {
      const smokingOnSite = getValue<number>();
      return (
        <div className="max-w-[500px] truncate font-medium flex justify-center">
          <SmokingBadge value={smokingOnSite} />
        </div>
      );
    },
  },
  {
    id: "paymentType",
    accessorFn: ({ anObjectDetail }) => anObjectDetail.paymentType,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Тип оплаты" />
    ),
    cell: ({ getValue }) => {
      const paymentType = getValue<number>();
      return (
        <div className="max-w-[500px] truncate font-medium  ">
          <PaymentTypeBadge value={paymentType} />
        </div>
      );
    },
  },
  {
    id: "action",
    cell: ({ row }) => {
      return <DataTableRowActions row={row} />;
    },
  },
];
