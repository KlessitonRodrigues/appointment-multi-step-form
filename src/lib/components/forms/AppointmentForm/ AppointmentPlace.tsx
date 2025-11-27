"use client";

import { useForm } from "react-hook-form";
import { Column, Row } from "src/lib/base/containers/Flex";
import { ButtonBlue } from "src/lib/base/buttons/Button";
import { ButtonOutline } from "src/lib/base/buttons/ButtonOutline";
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

type IAppoinmentPlaceForm = {
  appointment?: IAppointmentModel;
};

export const resolver: Resolver<IAppointmentModel> = async (data, ctx, opt) => {
  const schema: GlobalTypes.ZodSchema<typeof data> = {};
  schema.date = z.string().nonempty("A data é obrigatória");
  schema.time = z.string().nonempty("O horário é obrigatório");
  schema.clinicId = z.string().nonempty("A clínica é obrigatória");
  return zodResolver(z.object(schema))(data, ctx, opt);
};

const AppointmentPlaceForm = (props: IAppoinmentPlaceForm) => {
  const { appointment } = props;
  const values = { ...AppointmentModel, ...appointment };
  const { register, formState, ...form } = useForm({ values, resolver });
  const onSubmit = async (data: IAppointmentModel) => {};

  return (
    <Form onSubmit={form.handleSubmit(onSubmit)}>
      <Text fs="lg">Escolha o dia e o local de sua consulta</Text>
      <Column className="max-w-sm">
        <DateInput
          label="Quando será a sua consulta?"
          input={register("date")}
          error={formState.errors.date?.message}
        />
        <DateInput
          time
          input={register("time")}
          error={formState.errors.time?.message}
        />
      </Column>
      <Column flexY="start">
        <Text>Onde?</Text>
        <Text fc="red">{formState.errors.clinicId?.message}</Text>
        <If condition={true}>
          <ListLoader title="Aguarde... estamos buscando as clínicas disponíveis" />
        </If>
        <If condition={true}>
          <Row>
            <ClinicCard
              selected
              name="Clínica Médica - Sul"
              distance="2.5 km"
              address="Rua Lorem Ipsum, 123"
            />
            <ClinicCard
              name="Clínica Médica - Sul"
              distance="2.5 km"
              address="Rua Lorem Ipsum, 123"
            />
          </Row>
        </If>
      </Column>
      <Row className="w-fit ml-auto">
        <ButtonOutline type="button">Voltar</ButtonOutline>
        <ButtonBlue type="submit">Continuar</ButtonBlue>
      </Row>
    </Form>
  );
};

export default AppointmentPlaceForm;
