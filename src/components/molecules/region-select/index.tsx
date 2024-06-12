import { Check, ChevronDown } from "lucide-react";

import { useGetRegionsQuery } from "@/api/Regions";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { FC, useEffect, useRef, useState } from "react";
interface RegionSelectProps {
  value: number;
  onChange: (value: number) => void;
  counrtyId: number;
}
export const RegionSelect: FC<RegionSelectProps> = (props) => {
  const { onChange, counrtyId, value } = props;
  const { data } = useGetRegionsQuery(counrtyId);
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(0);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (buttonRef.current) {
      const width = buttonRef.current.getClientRects();
      setWidth(width[0].width);
    }
  }, [open]);
  return (
    <Popover open={open} onOpenChange={setOpen} modal>
      <PopoverTrigger className="block w-full">
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between w-full"
          ref={buttonRef}
        >
          {value
            ? data?.result.find((city) => city.id === value)?.name
            : "Выберите регион"}
          <ChevronDown
            className={cn(
              "ml-2 h-4 w-4 shrink-0 opacity-50 transition-all",
              open && "rotate-180"
            )}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="p-0"
        style={{
          width,
        }}
      >
        <Command>
          <CommandInput placeholder="Поиск города..." />
          <CommandList>
            <CommandEmpty>Город не найден</CommandEmpty>
            <CommandGroup>
              {data?.result.map(({ id, name }) => (
                <CommandItem
                  key={id}
                  onSelect={() => {
                    setOpen(false);
                    onChange(id);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === id ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
