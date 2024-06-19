import { FormCard } from "@/components/atoms/form-card";
import { AdditionalServiceSelect } from "@/components/molecules/additional-service-select";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { NestedForm } from "@/utils/nested-from";
import { FC } from "react";
import { ObjectFeeAdditionalServiceType } from "./schema";
import { AdditionalServices } from "@/api/AdditionalService/types";
import { Input } from "@/components/ui/input";
import { ReportingDocumentTypeSelect } from "@/components/molecules/reporting-document-type-select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { ObjectFormCard } from "../types";

interface ObjectFeeAdditionalServiceFormProps extends ObjectFormCard {
  form: NestedForm<ObjectFeeAdditionalServiceType>;
}

export const ObjectFeeAdditionalServiceForm: FC<
  ObjectFeeAdditionalServiceFormProps
> = ({ form, noBorder, noTitle }) => {
  const { path, control, watch } = form;
  const cleaning = watch(path("cleaning"));
  const bedLinen = watch(path("bedLinen"));
  const hasTransfer = watch(path("hasTransfer"));
  return (
    <FormCard
      title="Плата за дополнительные услуги"
      noBorder={noBorder}
      noTitle={noTitle}
      description="Это дополнительные услуги, их можно предоставить только по запросу
  гостя или с его согласия. Стоимость этих услуг не включается в
  расчёт общей цены при бронировании. Если у вас есть обязательная
  платная уборка, укажите её стоимость при редактировании категории
  номера."
    >
      <FormField
        control={control}
        name={path("cleaning")}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Уборка</FormLabel>
            <FormControl>
              <AdditionalServiceSelect
                value={field.value}
                onChange={field.onChange}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      {cleaning == AdditionalServices.PAID && (
        <FormField
          control={control}
          name={path("cleaningSum")}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cколько стоит уборка?</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
      )}
      <FormField
        control={control}
        name={path("bedLinen")}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Постельное бельё</FormLabel>
            <FormControl>
              <AdditionalServiceSelect
                value={field.value}
                onChange={field.onChange}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      {bedLinen == AdditionalServices.PAID && (
        <FormField
          control={control}
          name={path("bedLinenSum")}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Стоимость комплекта белья?</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
      )}
      <FormField
        control={control}
        name={path("reportingDocuments")}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Отчётные документы</FormLabel>
            <FormControl>
              <ReportingDocumentTypeSelect
                value={field.value}
                onChange={field.onChange}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name={path("hasTransfer")}
        render={({ field }) => (
          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
            <div className="space-y-0.5">
              <FormLabel>Всё включено</FormLabel>
              <FormDescription>
                Отметьте этот пункт, если вы предоставляете гостям трансфер к
                месту проживания (например, от вокзала или аэропорта)
              </FormDescription>
            </div>
            <FormControl>
              <Switch checked={field.value} onCheckedChange={field.onChange} />
            </FormControl>
          </FormItem>
        )}
      />
      {hasTransfer && (
        <FormField
          control={control}
          name={path("transferDetails")}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Предоставляется трансфер</FormLabel>
              <FormControl>
                <Textarea placeholder="Трансфер" {...field} />
              </FormControl>
              <FormDescription>
                Опишите условия предоставления трансфера
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
      <FormField
        control={control}
        name={path("detailComment")}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Подробное описание</FormLabel>
            <FormDescription>
              Здесь можно рассказать об объекте подробнее (кроме той информации,
              которую вы указали выше)
            </FormDescription>
            <FormControl>
              <Textarea
                placeholder="Подробное описание"
                value={field.value}
                onChange={field.onChange}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
    </FormCard>
  );
};
