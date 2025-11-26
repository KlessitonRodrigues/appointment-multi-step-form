"use client";

import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { axiosClient } from "src/services/axiosClient";
import { Row } from "src/lib/base/containers/Flex";
import { ButtonBlue } from "src/lib/base/buttons/Button";
import { ButtonOutline } from "src/lib/base/buttons/ButtonOutline";
import { PiSignIn, PiUser } from "react-icons/pi";
import TextInput from "../../common/inputs/TextInput";
import { Form } from "src/lib/base/form/forms";
import PasswordInput from "../../common/inputs/PasswordInput";

import { zodResolver } from "@hookform/resolvers/zod";
import { Resolver } from "react-hook-form";
import { z } from "zod";
import { signInModel as values, SignInModel } from "src/constants/models";

export const resolver: Resolver<SignInModel> = async (data, ctx, opt) => {
  const schema: GlobalTypes.ZodSchema<typeof data> = {};
  schema.email = z
    .string()
    .nonempty("Email é obrigatório")
    .email("Formato inválido");
  schema.password = z.string().nonempty("Senha é obrigatório");
  return zodResolver(z.object(schema))(data, ctx, opt);
};

const SignInForm = (props: any) => {
  const { goAccountForm } = props;
  const { register, formState, ...form } = useForm({ values, resolver });

  const onLogin = async (data: SignInModel) => {
    return axiosClient.post("auth/sign-in", data);
  };

  const submitQuery = useMutation({ mutationFn: onLogin });

  const onSubmit = async (data: SignInModel) => {
    const res = await submitQuery.mutateAsync(data);
    setTimeout(() => (window.location.pathname = "/dashboard"), 1500);
  };

  return (
    <Form onSubmit={form.handleSubmit(onSubmit)}>
      <TextInput
        label="Email"
        placeholder="Digite o email"
        input={register("email")}
        error={formState.errors.email?.message}
      />
      <PasswordInput
        label="Senha"
        placeholder="Digite a senha"
        input={register("password")}
        error={formState.errors.password?.message}
      />
      <Row>
        <ButtonBlue>
          <PiSignIn size={18} />
          Entrar
        </ButtonBlue>
        <ButtonOutline itemType="button" onClick={goAccountForm}>
          <PiUser size={18} />
          Criar nova conta
        </ButtonOutline>
      </Row>
    </Form>
  );
};

export default SignInForm;
