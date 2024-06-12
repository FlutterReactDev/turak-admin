import { Check, ChevronDown } from "lucide-react";

import { useGetCountiresQuery } from "@/api/Countries";
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
interface CountrySelectProps {
  value: number;
  onChange: (value: number) => void;
}
export const CountrySelect: FC<CountrySelectProps> = (props) => {
  const { onChange, value } = props;
  const { data } = useGetCountiresQuery();
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
          type="button"
          ref={buttonRef}
        >
          {value
            ? data?.result.find((city) => city.id === value)?.name
            : "Выберите страну"}
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
          width: width,
        }}
        side="bottom"
      >
        <Command className="w-full">
          <CommandInput placeholder="Поиск страны..." />
          <CommandList className="w-full">
            <CommandEmpty>Страна не найдена</CommandEmpty>
            <CommandGroup className="w-full">
              {data?.result.map(({ id, name }) => (
                <CommandItem
                  key={id}
                  onSelect={() => {
                    setOpen(false);
                    onChange(id);
                  }}
                  className="w-full"
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
