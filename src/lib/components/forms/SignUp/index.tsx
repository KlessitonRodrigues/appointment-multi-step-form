import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { Form } from "src/lib/base/form/forms";
import { Text } from "src/lib/base/text/Title";
import NumberInput from "../../common/inputs/NumberInput";
import TextInput from "../../common/inputs/TextInput";
import PasswordInput from "../../common/inputs/PasswordInput";
import { Row } from "src/lib/base/containers/Flex";
import { ButtonOutline } from "src/lib/base/buttons/ButtonOutline";
import { ButtonBlue } from "src/lib/base/buttons/Button";
import { ISignInForm } from "../SignIn/form";
import { signUpform } from "./form";
import { PiSignIn, PiUserPlus } from "react-icons/pi";
import { Card } from "src/lib/base/cards/Card";

const SignUpForm = () => {
  const { register, formState, ...form } = useForm(signUpform);
  const submitQuery = useMutation({ mutationFn: async (data: any) => {} });

  const onSubmit = async (data: ISignInForm) => {
    await submitQuery.mutateAsync(data);
  };

  return (
    <Form onSubmit={form.handleSubmit(onSubmit)}>
      <Text className="text-center">Criar Conta</Text>
      <NumberInput
        name="cpf"
        label="CPF"
        input={register("cpf")}
        error={formState.errors.cpf?.message}
      />
      <TextInput
        name="name"
        label="Nome"
        placeholder="Digite o nome de usuário"
        input={register("name")}
        error={formState.errors.name?.message}
      />
      <TextInput
        name="email"
        label="Email"
        placeholder="Digite o email"
        input={register("email")}
        error={formState.errors.email?.message}
      />
      <PasswordInput
        name="password"
        label="Senha"
        placeholder="Digite a senha"
        input={register("password")}
        error={formState.errors.password?.message}
      />
      <PasswordInput
        name="confirmPassword"
        label="Senha de confirmação"
        placeholder="Digite a senha de confirmação"
        input={register("confirmPassword")}
        error={formState.errors.confirmPassword?.message}
      />

      <Row>
        <ButtonBlue>
          <PiUserPlus size={18} />
          Criar nova conta
        </ButtonBlue>
        <ButtonOutline itemType="button">
          <PiSignIn size={18} />
          Login
        </ButtonOutline>
      </Row>
    </Form>
  );
};

export default SignUpForm;
