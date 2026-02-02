import { Head, useForm } from '@inertiajs/react';
import {Lock, Eye, User } from 'lucide-react'

import React from 'react';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import AuthLayout from '@/layouts/auth-layout';
import { register } from '@/routes';
import { toast } from 'sonner';


export default function Login(){

    const { data, setData, post, processing, errors, reset, clearErrors } = useForm({

        user: '',
        password: '',
    })

    function handleLogin(e: React.FormEvent){
        e.preventDefault()

        post('/login-interno', {

            onSuccess: () => {

                toast.success('Entrega criada com sucesso!')
                reset()

            }
        })
    }

    return (
        <AuthLayout
            title="Bem vindo ao sistema de controle interno Revest"
            description="Utilize suas credenciais para realizar login"

        >
            <Head title="Log in" />

                <form  onSubmit={handleLogin}
                       className="flex flex-col gap-6">
                    <>
                        <div className="grid gap-6">
                            <div className="grid gap-2">
                                <Label
                                    className="text-sm text-login-card-border"
                                    htmlFor="email"
                                >
                                    Nome de Usuário
                                </Label>
                                <Input
                                    leftIcon={User}
                                    className="h-[40px] border-login-card-border text-sm 2xl:h-[52px]"
                                    id="user"
                                    type="text"
                                    name="user"
                                    required
                                    value={data.user}
                                    onChange={e => {setData('user', e.target.value); clearErrors('user')}}
                                    autoFocus
                                    tabIndex={1}
                                    autoComplete="email"
                                    placeholder="Digite seu usuário"
                                />
                                {errors.user && (
                                    <p className="text-red-500 text-xs">{errors.user}</p>
                                )}
                            </div>


                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label
                                        className="text-sm text-login-card-border"
                                        htmlFor="password"
                                    >
                                        Senha
                                    </Label>
                                </div>
                                <Input
                                    leftIcon={Lock}
                                    className="} h-[40px] border-login-card-border text-sm 2xl:h-[52px]"
                                    id="password"
                                    type="password"
                                    name="password"
                                    required
                                    value={data.password}
                                    onChange={e => {setData('password', e.target.value); clearErrors('password')}}
                                    tabIndex={2}
                                    autoComplete="current-password"
                                    placeholder="Digite sua senha"
                                    rightIcon={Eye}
                                />
                                {errors.password && (
                                    <p className="text-red-500 text-xs p-0 m-0">{errors.password}</p>
                                )}


                            </div>

                            <Button
                                type="submit"
                                tabIndex={4}
                                disabled={processing}
                                data-test="login-button"

                            >
                                {processing && <Spinner />}
                                Entrar
                            </Button>
                        </div>


                            <div className="text-center text-sm">
                                <ul>
                                    <li>
                                        <TextLink
                                            href={register()}
                                            tabIndex={5}
                                            className="text-login-card-border"
                                        >
                                            Esqueceu sua senha?
                                        </TextLink>
                                    </li>
                                    <li>
                                        <TextLink
                                            href={register()}
                                            tabIndex={5}
                                            className="pt-3 text-login-card-border"
                                        >
                                            Esqueceu seu nome de Usuário?
                                        </TextLink>
                                    </li>
                                </ul>

                                <div className="pt-3 text-login-card-border">
                                    © 2025 Revest Materiais
                                </div>
                            </div>
                    </>
                </form>

        </AuthLayout>
    );
}
