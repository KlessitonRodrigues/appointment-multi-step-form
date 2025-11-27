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
import PaymentCard from "../../common/Cards/PaymentCard";
import { PiCreditCard, PiMoney, PiPixLogo } from "react-icons/pi";

type IAppointmentPaymentForm = {
  appointment?: IAppointmentModel;
};

export const resolver: Resolver<IAppointmentModel> = async (data, ctx, opt) => {
  const schema: GlobalTypes.ZodSchema<typeof data> = {};
  schema.paymentMethod = z.string().min(1, "Selecione um método de pagamento");
  return zodResolver(z.object(schema))(data, ctx, opt);
};

const AppointmentPaymentForm = (props: IAppointmentPaymentForm) => {
  const { appointment } = props;
  const values = { ...AppointmentModel, ...appointment };
  const { register, formState, ...form } = useForm({ values, resolver });
  const onSubmit = async (data: IAppointmentModel) => {};

  return (
    <Form onSubmit={form.handleSubmit(onSubmit)}>
      <Text fs="lg">Selecione a forma de pagamento</Text>
      <Text fc="red">{formState.errors.paymentMethod?.message}</Text>
      <If condition={false}>
        <ListLoader title="Aguarde... estamos buscando os métodos de pagamento disponíveis" />
      </If>
      <Column flexY="start" gap={4}>
        <PaymentCard
          selected
          icon={<PiPixLogo size={32} />}
          data={{
            name: "Pix",
          }}
        />
        <PaymentCard
          icon={<PiCreditCard size={32} />}
          data={{
            name: "Cartão de Crédito",
          }}
        />
        <PaymentCard
          icon={<PiMoney size={32} />}
          data={{
            name: "Dinheiro",
          }}
        />
      </Column>

      <Row className="w-fit ml-auto">
        <ButtonOutline type="button">Voltar</ButtonOutline>
        <ButtonBlue type="submit">Continuar</ButtonBlue>
      </Row>
    </Form>
  );
};

export default AppointmentPaymentForm;
