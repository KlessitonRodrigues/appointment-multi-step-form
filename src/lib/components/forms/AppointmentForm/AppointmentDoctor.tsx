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
import If from "src/lib/base/containers/If";
import { ListLoader } from "src/lib/base/progress/Loader";
import DoctorCard from "../../common/Cards/DoctorCard";

type IAppointmentDoctorForm = {
  appointment?: IAppointmentModel;
};

export const resolver: Resolver<IAppointmentModel> = async (data, ctx, opt) => {
  const schema: GlobalTypes.ZodSchema<typeof data> = {};
  schema.doctorId = z.string().min(1, "Selecione um médico");
  return zodResolver(z.object(schema))(data, ctx, opt);
};

const AppointmentDoctorForm = (props: IAppointmentDoctorForm) => {
  const { appointment } = props;
  const values = { ...AppointmentModel, ...appointment };
  const { register, formState, ...form } = useForm({ values, resolver });
  const onSubmit = async (data: IAppointmentModel) => {};

  return (
    <Form onSubmit={form.handleSubmit(onSubmit)}>
      <Text fs="lg">Baseados em sua pesquisa</Text>
      <Text fc="red">{formState.errors.doctorId?.message}</Text>
      <If condition={false}>
        <ListLoader title="Aguarde... estamos buscando os médicos disponíveis" />
      </If>
      <Row>
        <DoctorCard
          selected
          data={{
            name: "Dr. Marcus Hale",
            specialty: "Cardiologista",
            startPrice: 120,
          }}
        />
        <DoctorCard
          data={{
            name: "Dra. Ana Paula",
            specialty: "Dermatologista",
            startPrice: 150,
          }}
        />
        <DoctorCard
          data={{
            name: "Dra. Ana Paula",
            specialty: "Dermatologista",
            startPrice: 150,
          }}
        />
      </Row>
      <Text fs="lg">Médicos recomendados</Text>
      <If condition={false}>
        <ListLoader title="Aguarde... estamos buscando os médicos disponíveis" />
      </If>
      <Row>
        <DoctorCard
          selected
          data={{
            name: "Dr. Marcus Hale",
            specialty: "Cardiologista",
            startPrice: 120,
          }}
        />
        <DoctorCard
          data={{
            name: "Dra. Ana Paula",
            specialty: "Dermatologista",
            startPrice: 150,
          }}
        />
        <DoctorCard
          data={{
            name: "Dra. Ana Paula",
            specialty: "Dermatologista",
            startPrice: 150,
          }}
        />
      </Row>
      <Row className="w-fit ml-auto">
        <ButtonOutline type="button">Voltar</ButtonOutline>
        <ButtonBlue type="submit">Continuar</ButtonBlue>
      </Row>
    </Form>
  );
};

export default AppointmentDoctorForm;
