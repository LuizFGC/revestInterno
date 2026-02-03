import { Head, useForm } from '@inertiajs/react';
import {Lock, Eye, User } from 'lucide-react'

import React, { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import AuthLayout from '@/layouts/auth-layout';


export default function Login(){

    const [mostrarSenha, setMostrarSenha] = useState(false);

     function  handleMostrarSenha(){

        setMostrarSenha(!mostrarSenha)

    }

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
                                    className=" h-[40px] border-login-card-border text-sm 2xl:h-[52px]"
                                    id="password"
                                    type={mostrarSenha ? "text" : "password"}
                                    name="password"
                                    required
                                    value={data.password}
                                    onChange={e => {setData('password', e.target.value); clearErrors('password')}}
                                    tabIndex={2}
                                    autoComplete="current-password"
                                    placeholder="Digite sua senha"
                                    rightIcon={Eye}
                                    onRightIconClick={handleMostrarSenha}
                                />



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


                                <div className="pt-3 text-login-card-border">
                                    © 2025 Revest Materiais
                                </div>
                            </div>
                    </>
                </form>

        </AuthLayout>
    );
}
