"use client";

import { useForm } from "react-hook-form";
import { Column, Row } from "src/lib/base/containers/Flex";
import { ButtonBlue } from "src/lib/base/buttons/Button";
import { Form } from "src/lib/base/form/forms";

import { zodResolver } from "@hookform/resolvers/zod";
import { Resolver } from "react-hook-form";
import { z } from "zod";
import { AppointmentModel, IAppointmentModel } from "src/constants/models";
import Text from "src/lib/base/text/Text_2";
import DateInput from "../../common/inputs/DateInput";
import If from "src/lib/base/containers/If";
import { ListLoader } from "src/lib/base/progress/Loader";
import ClinicCard from "../../common/Cards/ClinicCard";
import useClinics from "src/hooks/useClinics";
import { HorizontalNav } from "src/lib/base/navigation/HorizontalNav";

type IAppoinmentPlaceForm = {
  appointment?: IAppointmentModel;
  onSubmit?: (data: IAppointmentModel) => void;
  onNext?: () => void;
};

export const resolver: Resolver<IAppointmentModel> = async (data, ctx, opt) => {
  const schema: GlobalTypes.ZodSchema<typeof data> = {};
  schema.date = z.string().nonempty("A data é obrigatória");
  schema.time = z.string().nonempty("O horário é obrigatório");
  schema.clinicId = z.number().min(1, "Selecionar clínica é obrigatória");
  schema.clinicName = z.string();
  return zodResolver(z.object(schema))(data, ctx, opt);
};

const AppointmentPlaceForm = (props: IAppoinmentPlaceForm) => {
  const { appointment, onNext } = props;
  const { getClinics } = useClinics();

  const values = { ...AppointmentModel, ...appointment };
  const { register, formState, ...form } = useForm({ values, resolver });
  const clinicId = form.watch("clinicId");

  const onSubmit = async (data: IAppointmentModel) => {
    if (props.onSubmit) props.onSubmit(data);
    if (onNext) onNext();
  };

  return (
    <Form onSubmit={form.handleSubmit(onSubmit)}>
      <Text fs="lg">Escolha o dia e o local de sua consulta</Text>
      <Column flexX="start" className="max-w-sm h-fit">
        <Text>Quando será a sua consulta?</Text>
        <DateInput
          input={register("date")}
          error={formState.errors.date?.message}
        />
        <DateInput
          time
          input={register("time")}
          error={formState.errors.time?.message}
        />
      </Column>
      <Column flexX="start">
        <Text>Onde?</Text>
        <If condition={getClinics.isLoading}>
          <ListLoader title="Aguarde... estamos buscando as clínicas disponíveis" />
        </If>
        <If condition={!getClinics.isLoading}>
          <HorizontalNav>
            {getClinics.data?.map((clinic) => (
              <ClinicCard
                key={clinic.id}
                data={clinic}
                selected={clinicId === clinic.id}
                onSelect={() => {
                  form.setValue("clinicId", clinic.id);
                  form.setValue("clinicName", clinic.name);
                }}
              />
            ))}
          </HorizontalNav>
        </If>
        <Text fc="red">{formState.errors.clinicId?.message}</Text>
      </Column>
      <Row className="w-fit ml-auto">
        <ButtonBlue type="submit">Continuar</ButtonBlue>
      </Row>
    </Form>
  );
};

export default AppointmentPlaceForm;
