"use client";
import "./contact.css";
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/Form';
import Title from "@/components/title/Title";
import ContactInfo from "@/app/contact/(components)/contact_item";

const userSchema = z.object({
  email: z.string()
      .min(1, { message: 'Email é obrigatório' })
      .email({ message: 'Formato de e-mail inválido' })
      .toLowerCase(),
  name: z.string()
      .min(1, { message: 'Nome é obrigatório' })
      .toUpperCase(),
  text: z.string().min(1, { message: 'Texto é obrigatório' })
});

type UserData = z.infer<typeof userSchema>;

export default function Contact() {
  const UserForm = useForm<UserData>({
    resolver: zodResolver(userSchema),
  });

  const [output, setOutput] = useState<string>('');
  const { handleSubmit, formState: { isSubmitting }, getValues, register } = UserForm;

  const userText = async (data: UserData) => {
    console.log(data);
    setOutput(JSON.stringify(data, null, 3));
  };

  return (
      <section className="py-12 px-24 text-zinc-200 bg-[#2A2E35] max-sm:py-8 max-sm:px-14">
        <div className="font-firaCode">
          <Title text="Contact" textSpan="me" span="Contact me" />
          <div className="flex flex-col pt-12">
            <div className="flex-2 justify-center items-center text-center">
              <h4 className="mt-4 text-4xl uppercase">Contact me here</h4>
              <p className="my-4 mx-auto leading-8 max-w-prose">
                Precisa de mais informações ou deseja entrar em contato comigo? Preencha o formulário abaixo com seu nome, e-mail e mensagem. Responderei o mais breve possível.
              </p>
              <div>
                <ContactInfo icon="/assets/locate.svg" label="Localização" value="Paraíba, João Pessoa" />
                <ContactInfo icon="/assets/email2.svg" label="Email" value="gustaf_alfredo@outlook.com" />
                <ContactInfo icon="/assets/phone.svg" label="Celular" value="(83) 99338-6900" />
                <ContactInfo icon="/assets/language.svg" label="Linguagens" value="Português e Inglês" />
              </div>
            </div>
            <div className="flex-3 ml-12 pb-8 gap-8 max-sm:ml-0">
              <FormProvider {...UserForm}>
                <form onSubmit={handleSubmit(userText)} className="flex flex-col gap-4 w-3/4 justify-center m-auto max-sm:w-full max-sm:my-9">
                  <Form.Field>
                    <Form.Label className="text-zinc-300 text-base" htmlFor="name">Nome</Form.Label>
                    <Form.Input type="text" name="name" />
                    <Form.ErrorMessage field="name" />
                  </Form.Field>
                  <Form.Field>
                    <Form.Label className="text-zinc-300 text-base" htmlFor="email">Email</Form.Label>
                    <Form.Input type="email" name="email" />
                    <Form.ErrorMessage field="email" />
                  </Form.Field>
                  <Form.Field>
                    <Form.Label className="text-zinc-500 text-base" htmlFor="text">Texto</Form.Label>
                    <Form.TextArea cols={5} rows={5} text="text" name="text" />
                    <Form.ErrorMessage field="text"/>
                  </Form.Field>
                  <button type="submit" disabled={isSubmitting}  className="bg-[#972DA8] text-white rounded px-3 h-10 font-semibold text-sm hover:bg-violet-600 max-sm:my-4">
                    Enviar
                  </button>
                </form>
              </FormProvider>
            </div>
          </div>
        </div>
        {/*{output && (*/}
        {/*    <pre className="text-sm bg-zinc-800 text-zinc-100 p-6 rounded-lg">*/}
        {/*  {output}*/}
        {/*</pre>)}*/}
      </section>
  );
}
