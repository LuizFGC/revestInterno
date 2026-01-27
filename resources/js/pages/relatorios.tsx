import { Head } from '@inertiajs/react';
import { Calendar, Filter } from 'lucide-react';
import {Button} from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from '@/components/ui/card';
import {Icon} from '@/components/ui/icon';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';





export default function Relatorios() {
    return (
        <AppLayout title="Relatorios" date={new Date()} >
            <Head title="Relatorios" />

            <div className="flex  justify-center items-center h-full mb-30 m-25 mt-10 ">
                <Card className="w-full h-full bg-white border border-background ">

                    <CardHeader className="text-black 2xl:text-lg">
                        Filtros
                    </CardHeader>
                    <CardContent>
                        <form action="" className="flex flex-col text-black px-6 py-2 gap-8">
                            <section className=" flex  gap-3">

                                <div>
                                    <Label>
                                        Cliente
                                    </Label>
                                    <Input
                                        className="border border-background h-10 "
                                        placeholder="Ex: Luiz Filipe"

                                    />
                                </div>

                                <div>
                                    <Label>
                                        Entregador
                                    </Label>
                                    <Input
                                        className="border border-background h-10 "
                                        placeholder="Ex: Gustavo"

                                    />
                                </div>

                                <div>
                                    <Label>Data</Label>
                                    <Input
                                        className="border border-background h-10"
                                        placeholder="01/2026 A 02/2026"
                                        rightIcon={Calendar}

                                    />
                                </div>


                            </section>

                            <section className="flex gap-3">

                                <div >
                                    <Label>
                                        Status
                                    </Label>
                                    <select name="" id=""  className="border border-background px-3 rounded-xl text-black w-full h-10" >
                                        <option value="Cancelada">Cancelada</option>
                                        <option value="Entregue">Entregue</option>
                                        <option value="Em rota">Em rota</option>
                                        <option value="Pendente">Pendente</option>
                                    </select>
                                </div>

                                <div className="ml-10">
                                    <Label>
                                        Numero da Entrega
                                    </Label>
                                    <Input
                                        className="border border-background w-40 h-10 "
                                        placeholder="Ex: 125"

                                    />
                                </div>


                            </section>
                            <div>
                                <Label>
                                    Endereco
                                </Label>
                                <Input
                                    className="border border-background h-10 "
                                    placeholder="Ex: Av. Adail Gomes Ferreira, 2101"

                                />
                            </div>
                        </form>

                    </CardContent>
                    <CardFooter className="flex gap-3 2xl:items-end">
                        <Button
                            variant='primary'
                            className="h-9 w-50 "
                            type="submit"
                        >
                            Gerar Relatorio
                        </Button>
                        <Button
                            variant='secondary'
                            className="h-9 w-50"
                        >
                            <Icon iconNode={Filter}/>

                            Limpar Filtros
                        </Button>
                    </CardFooter>

                </Card>


            </div>

        </AppLayout>
    );
}
