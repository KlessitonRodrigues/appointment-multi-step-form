"use client";

import { useForm } from "react-hook-form";
import { Column, Row } from "src/lib/base/containers/Flex";
import { Form } from "src/lib/base/form/forms";

import { zodResolver } from "@hookform/resolvers/zod";
import { Resolver } from "react-hook-form";
import { z } from "zod";
import { AppointmentModel, IAppointmentModel } from "src/constants/models";
import Text from "src/lib/base/text/Text_2";
import Link from "next/link";

type IAppointmentConfirmedForm = {
  appointment?: IAppointmentModel;
  onNext?: () => void;
  onBack?: () => void;
};

export const resolver: Resolver<IAppointmentModel> = async (data, ctx, opt) => {
  const schema: GlobalTypes.ZodSchema<typeof data> = {};
  return zodResolver(z.object(schema))(data, ctx, opt);
};

const AppointmentConfirmedForm = (props: IAppointmentConfirmedForm) => {
  const { appointment, onNext, onBack } = props;
  const values = { ...AppointmentModel, ...appointment };
  const { register, formState, ...form } = useForm({ values, resolver });
  const onSubmit = async (data: IAppointmentModel) => {
    if (onNext) onNext();
  };

  return (
    <Form onSubmit={form.handleSubmit(onSubmit)}>
      <Column flexX="start" flexY="center" gap={4} className="max-w-md m-auto">
        <Text fs="xl">John, sua consulta foi marcada.</Text>
        <Text fo="50">
          Para mais informações e detalhes acesse a página{" "}
          <b>Minhas Consultas</b> para acompanhar o seu agendamento
        </Text>
        <Text fc="blue">
          <Link href="/welcome">Ver minhas consultas</Link>
        </Text>
      </Column>
    </Form>
  );
};

export default AppointmentConfirmedForm;
