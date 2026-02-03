import { Head, useForm } from '@inertiajs/react';
import {Save, Lock} from 'lucide-react';

import React, { useEffect } from 'react';
import { toast, Toaster } from 'sonner';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardHeader } from '@/components/ui/card';
import {Icon} from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';

interface UserProps {

    user: {
        name: string,
        telefone: string,
        user: string,
        cargo: string,



},


}


export default function Profile({ user }: UserProps) {

    const { data, setData, patch, processing, errors,reset, clearErrors } =
        useForm({
            name: user.name,
            telefone: user.telefone,
            user: user.user,
            cargo: user.cargo,
            currentPassword: '',
            newPassword: '',
            confirmPassword: '',
        });

    function handleUpdateProfile(e: React.FormEvent) {
        e.preventDefault()

        patch('/settings/update-profile', {
            onSuccess: () => {

                toast.success('Edicao feita com sucesso!');
            },
        });
    }

    function handleUpdatePassword(e: React.FormEvent) {
        e.preventDefault()

        patch('/settings/update-password', {
            onSuccess: () => {

                toast.success('Senha Alterada com sucesso!');
                reset()
            },
        });
    }
    useEffect(() => {
        if (errors.currentPassword) {
            toast.error(errors.currentPassword)
        }
    }, [errors.currentPassword])

    useEffect(() => {
        if (errors.confirmPassword) {
            toast.error(errors.confirmPassword)
        }
    }, [errors.confirmPassword])

    return (
        <AppLayout title="Configuracoes">
            <Head title="Configuracoes" />
            <Toaster position="top-right" richColors />
            <div className="flex h-full w-full flex-col items-center justify-center gap-4 px-6 py-6 2xl:py-0">
                <form onSubmit={handleUpdateProfile} className="w-full">
                    <>
                        <Card className="w-full gap-3 gap-8 border border-background bg-transparent px-6 py-2 text-black">
                            <CardHeader className="px-0 text-black 2xl:text-lg">
                                Perfil do Usuario
                            </CardHeader>

                            <section className="flex w-full gap-3">
                                <div className="w-full">
                                    <Label htmlFor="name">Nome</Label>

                                    <Input
                                        id="name"
                                        className="h-10 border border-background"
                                        value={data.name}
                                        onChange={(e) => {
                                            setData('name', e.target.value);
                                            clearErrors('name');
                                        }}
                                        name="name"
                                        required
                                        autoComplete="name"
                                        placeholder="Nome Completo"
                                    />

                                    <InputError
                                        className="mt-2"
                                        message={errors.name}
                                    />
                                </div>

                                <div className="w-full">
                                    <Label htmlFor="email">Usuario </Label>

                                    <Input
                                        id="user"
                                        type="text"
                                        className="h-10 border border-background"
                                        value={data.user}
                                        onChange={(e) => {
                                            setData('user', e.target.value);
                                            clearErrors('user');
                                        }}
                                        name="user"
                                        required
                                        autoComplete="username"
                                        placeholder="Digite seu usuario"
                                    />

                                    <InputError
                                        className="mt-2"
                                        message={errors.user}
                                    />
                                </div>
                            </section>

                            <section className="flex w-full gap-3">
                                <div className="w-full">
                                    <Label>Telefone</Label>
                                    <Input
                                        id="telefone"
                                        name="telefone"
                                        value={data.telefone}
                                        onChange={(e) => {
                                            setData('telefone', e.target.value);
                                            clearErrors('telefone');
                                        }}
                                        className="h-10 border border-background"
                                        placeholder="(34) 9 9912-6903"
                                    />
                                </div>
                                <div className="w-full">
                                    <Label>Cargo</Label>
                                    <Input
                                        id="cargo"
                                        name="cargo"
                                        onChange={(e) => {
                                            setData('cargo', e.target.value);
                                            clearErrors('cargo');
                                        }}
                                        value={data.cargo}
                                        className="h-10 border border-background"
                                        placeholder="Auxiliar Administrativo"
                                    />
                                </div>
                            </section>

                            <div className="flex items-center gap-4">
                                <Button
                                    variant="primary"
                                    disabled={processing}
                                    type="submit"
                                >
                                    <Icon iconNode={Save} />
                                    Salvar Configuracoes
                                </Button>
                            </div>
                        </Card>
                    </>
                </form>


                <form onSubmit={handleUpdatePassword} className="w-full">
                    <>
                        <Card className="gap-3 gap-8 border border-background bg-transparent px-6 py-2 text-black">
                            <CardHeader className="px-0 text-black 2xl:text-lg">
                                Seguranca
                            </CardHeader>
                            <section className="flex h-10 w-full gap-3">
                                <div className="w-full">

                                        <Label >
                                            Senha Atual
                                        </Label>




                                    <Input
                                        id="current_password"
                                        value={data.currentPassword}
                                        onChange={(e) => {
                                            setData('currentPassword', e.target.value);
                                            clearErrors('currentPassword');
                                        }}
                                        name="current_password"
                                        type="password"
                                        className="h-10 w-full border border-background"
                                        autoComplete="current-password"
                                        placeholder="Senha Atual"
                                    />
                                </div>

                            </section>
                            <section className="flex w-full gap-3">
                                <div className="w-full">

                                        <Label >
                                            Nova Senha
                                        </Label>


                                    <Input
                                        id="password"
                                        value={data.newPassword}
                                        onChange={(e) => {
                                            setData('newPassword', e.target.value);
                                            clearErrors('newPassword');
                                        }}
                                        name="password"
                                        type="password"
                                        className="h-10 border border-background"
                                        autoComplete="new-password"
                                        placeholder="Nova senha"
                                    />

                                </div>
                                <div className="w-full">
                                        <Label >
                                            Confirmar Senha
                                        </Label>

                                    <Input
                                        id="password_confirmation"
                                        name="password_confirmation"
                                        type="password"
                                        value={data.confirmPassword}
                                        onChange={(e) => {
                                            setData('confirmPassword', e.target.value);
                                            clearErrors('confirmPassword');
                                        }}
                                        className="h-10 border border-background"
                                        autoComplete="new-password"
                                        placeholder="Confirme sua senha"
                                    />


                                </div>

                            </section>

                            <div className="flex items-center gap-4">
                                <Button
                                    variant="primary"
                                    disabled={processing}
                                    type="submit"
                                >
                                    <Icon iconNode={Lock} />
                                    Atualizar Senha
                                </Button>
                            </div>
                        </Card>
                    </>
                </form>
            </div>
        </AppLayout>
    );
}
