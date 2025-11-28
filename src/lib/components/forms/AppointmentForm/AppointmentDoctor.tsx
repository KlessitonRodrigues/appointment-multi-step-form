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
import useDoctors from "src/hooks/useDoctors";
import { HorizontalNav } from "src/lib/base/navigation/HorizontalNav";

type IAppointmentDoctorForm = {
  appointment?: IAppointmentModel;
  onSubmit?: (data: IAppointmentModel) => void;
  onNext?: () => void;
  onBack?: () => void;
};

export const resolver: Resolver<IAppointmentModel> = async (data, ctx, opt) => {
  const schema: GlobalTypes.ZodSchema<typeof data> = {};
  schema.doctorId = z.number().min(1, "Selecione um médico");
  schema.doctorName = z.string();
  schema.price = z.number();
  return zodResolver(z.object(schema))(data, ctx, opt);
};

const AppointmentDoctorForm = (props: IAppointmentDoctorForm) => {
  const { appointment, onNext, onBack } = props;
  const { getDoctors } = useDoctors();

  const values = { ...AppointmentModel, ...appointment };
  const { register, formState, ...form } = useForm({ values, resolver });
  const doctorId = form.watch("doctorId");

  const onSubmit = async (data: IAppointmentModel) => {
    props.onSubmit?.(data);
    if (onNext) onNext();
  };

  return (
    <Form onSubmit={form.handleSubmit(onSubmit)}>
      <Column flexX="start">
        <Text fs="lg">Baseados em sua pesquisa</Text>
        <Text fc="red">{formState.errors.doctorId?.message}</Text>
        <If condition={getDoctors.isLoading}>
          <ListLoader title="Aguarde... estamos buscando os médicos disponíveis" />
        </If>
        <HorizontalNav>
          {getDoctors.data?.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              data={doctor}
              selected={doctorId === doctor.id}
              onSelect={() => {
                form.setValue("doctorId", doctor.id);
                form.setValue("doctorName", doctor.name);
                form.setValue("price", doctor.price);
              }}
            />
          ))}
        </HorizontalNav>
        <Text fs="lg">Médicos recomendados</Text>
        <If condition={getDoctors.isLoading}>
          <ListLoader title="Aguarde... estamos buscando os médicos disponíveis" />
        </If>
        <HorizontalNav>
          {getDoctors.data?.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              data={doctor}
              selected={doctorId === doctor.id}
              onSelect={() => {
                form.setValue("doctorId", doctor.id);
                form.setValue("doctorName", doctor.name);
                form.setValue("price", doctor.price);
              }}
            />
          ))}
        </HorizontalNav>
      </Column>
      <Row className="w-fit ml-auto">
        <ButtonOutline type="button" onClick={onBack}>
          Voltar
        </ButtonOutline>
        <ButtonBlue type="submit">Continuar</ButtonBlue>
      </Row>
    </Form>
  );
};

export default AppointmentDoctorForm;
