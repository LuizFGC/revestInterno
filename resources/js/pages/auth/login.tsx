import { Form, Head } from '@inertiajs/react';
import {Lock, Eye, User } from 'lucide-react'
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import AuthLayout from '@/layouts/auth-layout';
import { register } from '@/routes';
import { store } from '@/routes/login';
import { request } from '@/routes/password';

type Props = {
    status?: string;
    canResetPassword: boolean;
    canRegister: boolean;
};

export default function Login({
    status,
    canResetPassword,
    canRegister,
}: Props) {
    return (
        <AuthLayout
            title="Bem vindo ao sistema de controle interno Revest"
            description="Utilize suas credenciais para realizar login"

        >
            <Head title="Log in" />

            <Form
                {...store.form()}
                resetOnSuccess={['password']}
                className="flex flex-col gap-6"
            >
                {({ processing, errors }) => (
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
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    autoFocus
                                    tabIndex={1}
                                    autoComplete="email"
                                    placeholder="Digite seu usuário"
                                />
                                <InputError message={errors.email} />
                            </div>

                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label
                                        className="text-sm text-login-card-border"
                                        htmlFor="password"
                                    >
                                        Senha
                                    </Label>
                                    {canResetPassword && (
                                        <TextLink
                                            href={request()}
                                            className="ml-auto text-sm"
                                            tabIndex={5}
                                        >
                                            Forgot password?
                                        </TextLink>
                                    )}
                                </div>
                                <Input
                                    leftIcon={Lock}
                                    className="} h-[40px] border-login-card-border text-sm 2xl:h-[52px]"
                                    id="password"
                                    type="password"
                                    name="password"
                                    required
                                    tabIndex={2}
                                    autoComplete="current-password"
                                    placeholder="Digite sua senha"
                                    rightIcon={Eye}
                                />
                                <InputError message={errors.password} />
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

                        {canRegister && (
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
                        )}
                    </>
                )}
            </Form>

            {status && (
                <div className="mb-4 text-center text-sm font-medium text-green-600">
                    {status}
                </div>
            )}
        </AuthLayout>
    );
}
