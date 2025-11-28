"use client";

import { useForm } from "react-hook-form";
import { Column, Row } from "src/lib/base/containers/Flex";
import { ButtonBlue } from "src/lib/base/buttons/Button";
import { ButtonOutline } from "src/lib/base/buttons/ButtonOutline";
import { Form } from "src/lib/base/form/forms";

import { zodResolver } from "@hookform/resolvers/zod";
import { Resolver } from "react-hook-form";
import { z } from "zod";
import {
  AppointmentModel,
  IAppointmentModel,
  IPaymentModel,
} from "src/constants/models";
import Text from "src/lib/base/text/Text_2";
import If from "src/lib/base/containers/If";
import { ListLoader } from "src/lib/base/progress/Loader";
import PaymentCard from "../../common/Cards/PaymentCard";
import { PiCreditCard, PiMoney, PiPixLogo } from "react-icons/pi";

type IAppointmentPaymentForm = {
  appointment?: IAppointmentModel;
  onSubmit?: (data: IAppointmentModel) => void;
  onNext?: () => void;
  onBack?: () => void;
};

const paymentMethodMap: (IPaymentModel & { icon: JSX.Element })[] = [
  { id: 1, name: "Pix", icon: <PiPixLogo size={32} /> },
  {
    id: 2,
    name: "Cartão de Crédito",
    icon: <PiCreditCard size={32} />,
  },
  { id: 3, name: "Dinheiro", icon: <PiMoney size={32} /> },
];

export const resolver: Resolver<IAppointmentModel> = async (data, ctx, opt) => {
  const schema: GlobalTypes.ZodSchema<typeof data> = {};
  schema.paymentId = z.number().min(1, "Selecione um método de pagamento");
  schema.paymentName = z.string().nonempty("Selecione um método de pagamento");
  return zodResolver(z.object(schema))(data, ctx, opt);
};

const AppointmentPaymentForm = (props: IAppointmentPaymentForm) => {
  const { appointment, onNext, onBack } = props;

  const values = { ...AppointmentModel, ...appointment };
  const { register, formState, ...form } = useForm({ values, resolver });
  const paymentId = form.watch("paymentId");

  const onSubmit = async (data: IAppointmentModel) => {
    console.log("PAYMENT", data);

    if (props.onSubmit) props.onSubmit(data);
    if (onNext) onNext();
  };

  return (
    <Form onSubmit={form.handleSubmit(onSubmit)}>
      <Text fs="lg">Selecione a forma de pagamento</Text>
      <Text fc="red">{formState.errors.paymentId?.message}</Text>
      <If condition={false}>
        <ListLoader title="Aguarde... estamos buscando os métodos de pagamento disponíveis" />
      </If>
      <Column flexX="start">
        {paymentMethodMap.map((payment) => (
          <PaymentCard
            key={payment.id}
            data={payment}
            icon={payment.icon}
            selected={paymentId === payment.id}
            onSelect={() => {
              form.setValue("paymentId", payment.id);
              form.setValue("paymentName", payment.name);
            }}
          />
        ))}
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

export default AppointmentPaymentForm;
