import { zodResolver } from "@hookform/resolvers/zod";
import { Resolver } from "react-hook-form";
import { z } from "zod";

export type ISignUpForm = {
  cpf?: string;
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  rule?: string;
};

const values: ISignUpForm = {
  cpf: "",
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  rule: "",
};

const resolver: Resolver<typeof values> = async (data, ctx, opt) => {
  const schema: Utils.ZodSchema<typeof values> = {};

  schema.cpf = z
    .string()
    .nonempty("CPF é obrigatório")
    .min(11, "CPF deve ter 11 dígitos")
    .max(11, "CPF deve ter 11 dígitos");

  schema.name = z.string().nonempty("Nome é obrigatório");

  schema.email = z
    .string()
    .nonempty("Email é obrigatório")
    .email("Formato inválido");

  schema.password = z.string().nonempty("Senha é obrigatório");

  schema.confirmPassword = z
    .string()
    .nonempty("Senha de confirmação é obrigatório");

  schema.rule = z.string().nonempty("Tipo é obrigatório");

  return zodResolver(z.object(schema))(data, ctx, opt);
};

export const signUpform = {
  values,
  resolver,
};
