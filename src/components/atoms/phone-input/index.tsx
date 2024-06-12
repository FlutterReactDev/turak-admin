import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";

import { MutableRefObject, forwardRef, useState } from "react";
import {
  CountryIso2,
  FlagImage,
  defaultCountries,
  parseCountry,
  usePhoneInput,
} from "react-international-phone";
export interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  defaultCountry?: CountryIso2;
}
export const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ value, onChange, defaultCountry }, ref) => {
    const [open, setOpen] = useState(false);
    const {
      country,
      handlePhoneValueChange,
      inputRef,
      inputValue,
      setCountry,
    } = usePhoneInput({
      defaultCountry: defaultCountry || "kg",
      value,
      countries: defaultCountries,
      onChange: (data) => {
        onChange(data.phone);
      },
      inputRef: ref as MutableRefObject<HTMLInputElement | null>,
    });

    return (
      <div className="relative">
        <Popover open={open} onOpenChange={setOpen} modal>
          <PopoverTrigger asChild>
            <Button
              className="absolute  left-2 top-2/4 -translate-y-[50%] gap-1 hover:bg-transparent"
              variant={"ghost"}
              size={"icon"}
              type="button"
            >
              <FlagImage
                iso2={country.iso2}
                style={{ display: "flex", width: "25px", height: "25px" }}
              />
              <ChevronDown className="w-5 h-5" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0">
            <Command>
              <CommandInput placeholder="Поиск..." />
              <CommandList>
                <CommandEmpty>Не найдено</CommandEmpty>
                <CommandGroup>
                  {defaultCountries.map((c) => {
                    const country = parseCountry(c);

                    return (
                      <CommandItem
                        key={country.dialCode}
                        onSelect={() => {
                          setOpen(false);
                          setCountry(country.iso2);
                        }}
                        value={country.name}
                      >
                        <div className="flex h-10 gap-1">
                          <FlagImage
                            iso2={country.iso2}
                            style={{ marginRight: "8px" }}
                          />
                          <p>{country.name}</p>
                          <p>+{country.dialCode}</p>
                        </div>
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        <Input
          type="tel"
          className="pl-12"
          ref={inputRef}
          value={inputValue}
          onChange={handlePhoneValueChange}
        />
      </div>
    );
  }
);
