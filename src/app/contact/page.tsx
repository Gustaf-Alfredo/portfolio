"use client";
import "./contact.css";
import {useState} from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {Form} from '@/components/Form';
import Title from "@/components/title/Title";
import ContactInfo from "@/app/contact/(components)/contact_item";
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import {toast, ToastContainer} from "react-toastify";

const userSchema = z.object({
    email: z.string()
        .min(1, {message: 'Email é obrigatório'})
        .email({message: 'Formato de e-mail inválido'})
        .toLowerCase(),
    name: z.string()
        .min(1, {message: 'Nome é obrigatório'})
        .toLowerCase(),
    message: z.string().min(1, {message: 'Texto é obrigatório'})
});

type UserData = z.infer<typeof userSchema>;

export default function Contact() {
    const UserForm = useForm<UserData>({
        resolver: zodResolver(userSchema),
    });

    const [output, setOutput] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const {handleSubmit, formState: {isSubmitting}, getValues, register, reset} = UserForm;

    const userText = async (data: UserData) => {
        setIsLoading(true);
        setOutput(JSON.stringify(data, null, 3));
        emailjs.send("service_usmc56d","template_8w6jpxw",data,"b2avlMLvU5oTcRKSH").then((res) => {
            console.log("Success", res.text, res.status);
            reset();
            toast.success("Mensagem enviada com sucesso!");
        }, (err) => {
            console.log("Failed", err);
            toast.error("Erro ao enviar mensagem!");
        }).finally(() => {
            setIsLoading(false);
        });
    };

    return (
        <section className="py-12 px-24 text-zinc-200 bg-[#2A2E35] max-sm:py-8 max-sm:px-4 overflow-x-hidden">
            <div className="font-firaCode">
                <Title text="Contact" textSpan="me" span="Contact me"/>
                <div className="flex flex-col pt-12">
                    <div className="flex-2 justify-center items-center text-center">
                        <h4 className="mt-4 text-4xl uppercase max-sm:text-3xl">Contact me here</h4>
                        <p className="my-4 mx-auto leading-8 max-w-prose max-sm:text-base">
                            Precisa de mais informações ou deseja entrar em contato comigo? Preencha o formulário abaixo
                            com seu nome, e-mail e mensagem. Responderei o mais breve possível.
                        </p>
                        <div>
                            <ContactInfo icon="/assets/locate.svg" label="Localização" value="Paraíba, João Pessoa"/>
                            <ContactInfo icon="/assets/email2.svg" label="Email" value="gustavo64501@gmail.com"/>
                            <ContactInfo icon="/assets/phone.svg" label="Celular" value="(83) 99338-6900"/>
                            <ContactInfo icon="/assets/language.svg" label="Linguagens" value="Português e Inglês"/>
                        </div>
                    </div>
                    <div className="flex-3 ml-12 pb-8 gap-8 max-sm:ml-0">
                        <FormProvider {...UserForm}>
                            <form onSubmit={handleSubmit(userText)}
                                  className="flex flex-col gap-4 w-3/4 justify-center m-auto max-sm:w-full max-sm:my-9">
                                <Form.Field>
                                    <Form.Label className="text-zinc-300 text-base" htmlFor="name">Nome</Form.Label>
                                    <Form.Input type="text" name="name"/>
                                    <Form.ErrorMessage field="name"/>
                                </Form.Field>
                                <Form.Field>
                                    <Form.Label className="text-zinc-300 text-base" htmlFor="email">Email</Form.Label>
                                    <Form.Input type="email" name="email"/>
                                    <Form.ErrorMessage field="email"/>
                                </Form.Field>
                                <Form.Field>
                                    <Form.Label className="text-zinc-300 text-base" htmlFor="message">Texto</Form.Label>
                                    <Form.TextArea cols={5} rows={5} text="message" name="message"/>
                                    <Form.ErrorMessage field="message"/>
                                </Form.Field>
                                <button type="submit" disabled={isSubmitting || isLoading}
                                        className="bg-[#972DA8] text-white rounded px-3 h-10 font-semibold text-sm hover:bg-violet-600 max-sm:my-4">
                                    {isLoading ?  "Enviando..."  : "Enviar" }
                                </button>
                            </form>
                        </FormProvider>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
}