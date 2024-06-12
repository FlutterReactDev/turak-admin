/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useSuggestsQuery } from "@/api/2GiS";
import { Item, LatLon } from "@/api/2GiS/types";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, Loader2, MapPin, SearchIcon } from "lucide-react";
import { forwardRef, useState } from "react";
import { Map2GIS } from "../2GIS";
import { Marker2GIS } from "../2GIS/Marker2GIS";
export interface SuggestInputProps {
  placeholder?: string;
  value:
    | {
        addressName: string;
        id: string;
        point: LatLon;
      }
    | undefined;
  onChange: (value: { addressName: string; id: string; point: LatLon }) => void;
}
export const SuggestInput = forwardRef<HTMLInputElement, SuggestInputProps>(
  ({ value, onChange, placeholder }, ref) => {
    const [query, setQuery] = useState(value?.addressName || "");

    const { data, isFetching } = useSuggestsQuery(query, {
      skip: query.length == 0,
      refetchOnMountOrArgChange: true,
    });
    console.log(value);

    const onSelect = (value: Item) => {
      onChange({
        addressName: value.address_name || "",
        id: value.id,
        point: value.point,
      });
    };

    return (
      <Combobox
        value={value}
        onChange={(e) => {
          //@ts-ignore
          onSelect(e);
        }}
      >
        <Combobox.Button className={"w-full p-0 border-0 relative"}>
          <Combobox.Input
            onChange={(event) => setQuery(event.target.value)}
            className={
              "flex h-10 w-full rounded-md border border-input bg-background pl-8 pr-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            }
            ref={ref}
            placeholder={placeholder}
            //@ts-ignore
            displayValue={(value: Item) => value.addressName || ""}
          />
          <SearchIcon className="absolute top-2/4 -translate-y-[50%] left-2 w-5 h-5" />
          <div
            className={cn(
              "absolute w-5 h-5 top-2/4 -translate-y-[50%] right-2 hidden",
              isFetching && "block"
            )}
          >
            <Loader2
              className={cn("w-5 h-5 ", isFetching && "animate-spin ")}
            />
          </div>
        </Combobox.Button>

        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          {data?.result?.items?.length && (
            <Combobox.Options
              className={
                "mt-1 p-2 max-h-60 w-full overflow-auto rounded-md border border-input bg-background  text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              }
            >
              {data?.result?.items
                ?.filter((item, i, arr) => {
                  return i == arr.findIndex(({ id }) => id == item.id);
                })
                .map((value) => {
                  if (value.address_name) {
                    return (
                      <Combobox.Option
                        className={({ active }) =>
                          `relative cursor-default select-none p-2 rounded-md ${
                            active ? "bg-accent" : "text-gray-900"
                          }`
                        }
                        key={value.id}
                        value={value}
                      >
                        {({ selected }) => {
                          return (
                            <div className="flex gap-2 items-center cursor-pointer">
                              {selected && <CheckIcon className="w-5 h-5 " />}
                              <span>{value.address_name}</span>
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
                                        center: [
                                          value.point.lon,
                                          value.point.lat,
                                        ],
                                        zoom: 18,
                                      }}
                                      className="rounded-lgs"
                                    >
                                      <Marker2GIS
                                        coordinates={[
                                          value.point.lon,
                                          value.point.lat,
                                        ]}
                                      />
                                    </Map2GIS>
                                  </div>
                                </HoverCardContent>
                              </HoverCard>
                            </div>
                          );
                        }}
                      </Combobox.Option>
                    );
                  }
                })}
            </Combobox.Options>
          )}
        </Transition>
      </Combobox>
    );
  }
);
