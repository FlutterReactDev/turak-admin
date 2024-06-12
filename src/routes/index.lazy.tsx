import { SuggestInput } from "@/components/atoms/suggest-input";
import { CitySelect } from "@/components/molecules/city-select";
import { CurrencySelect } from "@/components/molecules/currency-select";
import { ObjectTypeSelect } from "@/components/molecules/object-type-select";
import { createLazyFileRoute } from "@tanstack/react-router";
export const Route = createLazyFileRoute("/")({
  component: () => (
    <div>
      <CitySelect value={1} onChange={() => {}} regionId={1} />
      <CurrencySelect value={0} onChange={() => {}} />
      <SuggestInput
        onChange={(data) => {
          console.log(data);
        }}
        value={undefined}
      />
      <ObjectTypeSelect
        onChange={() => {}}
        value={{
          objectType: 6,
          objectTypeProperty: 23,
        }}
      />
    </div>
  ),
});
