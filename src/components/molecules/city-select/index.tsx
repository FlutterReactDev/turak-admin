import { Check, ChevronDown } from "lucide-react";

import { useGetCitiesQuery } from "@/api/Cities";
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
import { FC, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import FocusLock from "react-focus-lock";
interface CitySelectProps {
  value: number;
  onChange: (value: number) => void;
  regionId: number;
}
export const CitySelect: FC<CitySelectProps> = (props) => {
  const { onChange, regionId, value } = props;
  const { data } = useGetCitiesQuery(regionId);
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
            : "Выберите город"}
          <ChevronDown
            className={cn(
              "ml-2 h-4 w-4 shrink-0 opacity-50 transition-all",
              open && "rotate-180"
            )}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0" style={{ width }}>
        <FocusLock>
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
        </FocusLock>
      </PopoverContent>
    </Popover>
  );
};
