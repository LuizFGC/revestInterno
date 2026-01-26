import { Transition } from '@headlessui/react';
import { Form, Head,usePage } from '@inertiajs/react';
import {Save, Lock} from 'lucide-react';
import { useRef } from 'react';
import PasswordController from '@/actions/App/Http/Controllers/Settings/PasswordController';
import ProfileController from '@/actions/App/Http/Controllers/Settings/ProfileController';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardHeader } from '@/components/ui/card';
import {Icon} from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import type { SharedData } from '@/types';
import {Badge} from '@/components/ui/badge';



export default function Profile(){
    const passwordInput = useRef<HTMLInputElement>(null)
    const currentPasswordInput = useRef<HTMLInputElement>(null)
    const { auth } = usePage<SharedData>().props

    return (
        <AppLayout title="Configuracoes" date={new Date()}>
            <Head title="Configuracoes" />

                <div className="flex flex-col justify-center items-center h-full w-full gap-4 px-6 py-6 2xl:py-0 ">

                    <Form
                        {...ProfileController.update.form()}
                        options={{
                            preserveScroll: true,
                        }}
                        className="space-y-6 w-full  "
                    >
                        {({ processing, recentlySuccessful, errors }) => (
                            <>

                                <Card className="bg-transparent  gap-3 text-black border border-background px-6 py-2 gap-8 w-full ">

                                    <CardHeader className="text-black  2xl:text-lg px-0   ">
                                        Perfil do Usuario
                                    </CardHeader>

                                    <section  className="flex gap-3 w-full ">
                                        <div className="w-full "  >
                                            <Label htmlFor="name">Nome</Label>

                                            <Input
                                                id="name"
                                                className="border border-background "
                                                defaultValue={auth.user.name}
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

                                        <div className="w-full " >
                                            <Label htmlFor="email">Email </Label>

                                            <Input
                                                id="email"
                                                type="email"
                                                className="border border-background "
                                                defaultValue={auth.user.email}
                                                name="email"
                                                required
                                                autoComplete="username"
                                                placeholder="Digite seu email"
                                            />

                                            <InputError
                                                className="mt-2"
                                                message={errors.email}
                                            />
                                        </div>
                                    </section>

                                    <section className="flex gap-3 w-full ">
                                        <div className="w-full ">
                                            <Label>Telefone</Label>
                                            <Input
                                                className="border border-background "
                                                placeholder="(34) 9 9912-6903"
                                            />
                                        </div>
                                        <div className="w-full ">
                                            <Label>Cargo</Label>
                                            <Input
                                                className="border border-background "
                                                placeholder="Auxiliar Administrativo"
                                            />
                                        </div>
                                    </section>

                                    <div className="flex items-center gap-4">
                                        <Button
                                            disabled={processing}
                                            data-test="update-profile-button"
                                        >
                                            <Icon iconNode={Save}/>
                                            Salvar Configuracoes
                                        </Button>

                                        <Transition
                                            show={recentlySuccessful}
                                            enter="transition ease-in-out"
                                            enterFrom="opacity-0"
                                            leave="transition ease-in-out"
                                            leaveTo="opacity-0"
                                        >
                                            <p className="text-sm text-neutral-600">
                                                Salvo
                                            </p>
                                        </Transition>
                                    </div>

                                </Card>


                            </>
                        )}
                    </Form>
                    <Form
                        {...PasswordController.update.form()}
                        options={{
                            preserveScroll: true,
                        }}
                        resetOnError={[
                            'password',
                            'password_confirmation',
                            'current_password',
                        ]}
                        resetOnSuccess
                        onError={(errors) => {
                            if (errors.password) {
                                passwordInput.current?.focus();
                            }

                            if (errors.current_password) {
                                currentPasswordInput.current?.focus();
                            }
                        }}
                        className="space-y-6 w-full "
                    >
                        {({ errors, processing, recentlySuccessful }) => (
                            <>

                                <Card className="bg-transparent  gap-3 text-black border border-background px-6 py-2 gap-8 ">
                                    <CardHeader className="text-black  2xl:text-lg px-0   ">
                                        Seguranca
                                    </CardHeader>
                                        <section className="flex gap-3 w-full">
                                            <div className="w-full " >
                                                <Label htmlFor="current_password">
                                                    Senha Atual
                                                </Label>

                                                <Input
                                                    id="current_password"
                                                    ref={currentPasswordInput}
                                                    name="current_password"
                                                    type="password"
                                                    className="border border-background w-full"
                                                    autoComplete="current-password"
                                                    placeholder="Senha Atual"
                                                />

                                                <InputError
                                                    message={errors.current_password}
                                                />
                                            </div>

                                        </section>
                                    <section className="flex gap-3 w-full  ">
                                        <div className="w-full ">
                                            <Label htmlFor="password">
                                                Nova Senha
                                            </Label>

                                            <Input
                                                id="password"
                                                ref={passwordInput}
                                                name="password"
                                                type="password"
                                                className="border border-background"
                                                autoComplete="new-password"
                                                placeholder="Nova senha"
                                            />

                                            <InputError message={errors.password} />
                                        </div>
                                        <div className="w-full " >
                                            <Label htmlFor="password_confirmation">
                                                Confirmar Senha
                                            </Label>

                                            <Input
                                                id="password_confirmation"
                                                name="password_confirmation"
                                                type="password"
                                                className="border border-background"
                                                autoComplete="new-password"
                                                placeholder="Confirme sua senha"
                                            />

                                            <InputError
                                                message={errors.password_confirmation}
                                            />
                                        </div>
                                    </section>
                                    <div className="flex items-center gap-4">
                                        <Button
                                            disabled={processing}
                                            data-test="update-password-button"
                                        >
                                            <Icon iconNode={Lock}/>
                                            Atualizar Senha
                                        </Button>

                                        <Transition
                                            show={recentlySuccessful}
                                            enter="transition ease-in-out"
                                            enterFrom="opacity-0"
                                            leave="transition ease-in-out"
                                            leaveTo="opacity-0"
                                        >
                                            <p className="text-sm text-neutral-600">
                                                Saved
                                            </p>
                                        </Transition>
                                    </div>
                                </Card>

                            </>
                        )}
                    </Form>
                </div>
        </AppLayout>
    );
}
