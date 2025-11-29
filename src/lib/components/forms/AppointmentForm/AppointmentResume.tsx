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
import { dateInputToISO, formatDateAndTime } from "src/utils/date";

type IAppointmentResumeForm = {
  appointment?: IAppointmentModel;
  isLoading?: boolean;
  onSubmit?: (data: IAppointmentModel) => void;
  onNext?: () => void;
  onBack?: () => void;
};

export const resolver: Resolver<IAppointmentModel> = async (data, ctx, opt) => {
  const schema: GlobalTypes.ZodSchema<typeof data> = {};
  return zodResolver(z.object(schema))(data, ctx, opt);
};

const AppointmentResumeForm = (props: IAppointmentResumeForm) => {
  const { appointment, isLoading, onNext, onBack } = props;
  const values = { ...AppointmentModel, ...appointment };
  const { register, formState, ...form } = useForm({ values, resolver });
  const onSubmit = async (data: IAppointmentModel) => {
    if (props.onSubmit) await props.onSubmit(data);
    if (onNext) onNext();
  };

  return (
    <Form onSubmit={form.handleSubmit(onSubmit)}>
      <Text fs="lg">John, aqui está o resumo da sua consulta</Text>
      <Text fs="sm" fo="50">
        Revise com atenção antes de confirmar
      </Text>
      <If condition={false}>
        <ListLoader title="Aguarde... estamos buscando os métodos de pagamento disponíveis" />
      </If>
      <Column flexX="start" gap={4}>
        <Row>
          <div className="p-2 border rounded-full">
            <PiCalendarDots size={24} className="text-default-blue" />
          </div>
          <Text>
            <span className="opacity-60 mr-1">A sua consulta será no dia</span>
            <b>
              {formatDateAndTime(
                dateInputToISO(appointment?.date || "") || "",
                appointment?.time || ""
              )}
            </b>
          </Text>
        </Row>

        <Row>
          <div className="p-2 border rounded-full">
            <PiStethoscope size={24} className="text-default-blue" />
          </div>
          <Text>
            <span className="opacity-60 mr-1">A sua consulta será no dia</span>
            <b>{appointment?.doctorName}</b>
          </Text>
        </Row>

        <Row>
          <div className="p-2 border rounded-full">
            <PiMapPin size={24} className="text-default-blue" />
          </div>
          <Text>
            <span className="opacity-60 mr-1">
              Na {appointment?.clinicName}
            </span>
          </Text>
        </Row>
        <Row>
          <div className="p-2 border rounded-full">
            <PiCardholder size={24} className="text-default-blue" />
          </div>
          <Text>
            <span className="opacity-60 mr-1">Valor da consulta</span>
            <b>R$ {appointment?.price}</b>
            <span>, no </span>
            <b>{appointment?.paymentName}</b>
          </Text>
        </Row>
      </Column>
      <Row className="w-fit ml-auto">
        <ButtonOutline type="button" onClick={onBack}>
          Voltar
        </ButtonOutline>
        <ButtonBlue type="submit" loading={isLoading}>
          Continuar
        </ButtonBlue>
      </Row>
    </Form>
  );
};

export default AppointmentResumeForm;
