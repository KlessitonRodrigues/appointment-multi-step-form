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
import {
  PiCalendarDots,
  PiCardholder,
  PiMapPin,
  PiStethoscope,
} from "react-icons/pi";

type IAppointmentResumeForm = {
  appointment?: IAppointmentModel;
};

export const resolver: Resolver<IAppointmentModel> = async (data, ctx, opt) => {
  const schema: GlobalTypes.ZodSchema<typeof data> = {};
  return zodResolver(z.object(schema))(data, ctx, opt);
};

const AppointmentResumeForm = (props: IAppointmentResumeForm) => {
  const { appointment } = props;
  const values = { ...AppointmentModel, ...appointment };
  const { register, formState, ...form } = useForm({ values, resolver });
  const onSubmit = async (data: IAppointmentModel) => {};

  return (
    <Form onSubmit={form.handleSubmit(onSubmit)}>
      <Text fs="lg">John, aqui está o resumo da sua consulta</Text>
      <Text fs="sm" fo="40">
        Revise com atenção antes de confirmar
      </Text>
      <If condition={false}>
        <ListLoader title="Aguarde... estamos buscando os métodos de pagamento disponíveis" />
      </If>
      <Column flexY="start" gap={4}>
        <Row>
          <div className="p-2 border rounded-full">
            <PiCalendarDots size={24} className="text-default-blue" />
          </div>
          <Text>
            <span className="opacity-60 mr-1">A sua consulta será no dia</span>
            <b>10 de Nov, segunda-feira às 14h.</b>
          </Text>
        </Row>

        <Row>
          <div className="p-2 border rounded-full">
            <PiStethoscope size={24} className="text-default-blue" />
          </div>
          <Text>
            <span className="opacity-60 mr-1">A sua consulta será no dia</span>
            <b>Dra. Elena Schultz. </b>
          </Text>
        </Row>

        <Row>
          <div className="p-2 border rounded-full">
            <PiMapPin size={24} className="text-default-blue" />
          </div>
          <Text>
            <span className="opacity-60 mr-1">Na Clínica Medica - Sul</span>
          </Text>
        </Row>
        <Row>
          <div className="p-2 border rounded-full">
            <PiCardholder size={24} className="text-default-blue" />
          </div>
          <Text>
            <span className="opacity-60 mr-1">Valor da consulta</span>
            <b>R$ 70,00</b>
            <span>, no </span>
            <b>cartão de crédito.</b>
          </Text>
        </Row>
      </Column>
      <Row className="w-fit ml-auto">
        <ButtonOutline type="button">Voltar</ButtonOutline>
        <ButtonBlue type="submit">Continuar</ButtonBlue>
      </Row>
    </Form>
  );
};

export default AppointmentResumeForm;
