import { Head } from '@inertiajs/react';
import { Pen, Pencil, Plus, Search, X, Check, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import {Label} from '@/components/ui/label'
import {
    Popover,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
} from '@/components/ui/popover';
import AppLayout from '@/layouts/app-layout';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,

    DialogTrigger,
} from "@/components/ui/dialog"

const entregas = [
    {
        codigo: 1,
        cliente: 'Jose',
        endereco: 'Av.Lasasdasd 34',
        status: 'Em rota',
        color: 'emRota',
        entregador: 'Paulo',
    },
    {
        codigo: 2,
        cliente: 'Jose',
        endereco: 'Av.Lasasdasd 34',
        status: 'Cancelada',
        color: 'cancelada',
        entregador: 'Paulo',
    },
    {
        codigo: 3,
        cliente: 'Jose',
        endereco: 'Av.Lasasdasd 34',
        status: 'Entregue',
        color: 'entregue',
        entregador: 'Paulo',
    },
    {
        codigo: 4,
        cliente: 'Jose',
        endereco: 'Av.Lasasdasd 34',
        status: 'Pendente',
        color: 'pendentes',
        entregador: 'Paulo',
    },
    {
        codigo: 5,
        cliente: 'Jose',
        endereco: 'Av.Lasasdasd 34',
        status: 'Em rota',
        color: 'emRota',
        entregador: 'Paulo',
    },
    {
        codigo: 6,
        cliente: 'Jose',
        endereco: 'Av.Lasasdasd 34',
        status: 'Em rota',
        color: 'emRota',
        entregador: 'Paulo',
    },
    {
        codigo: 7,
        cliente: 'Jose',
        endereco: 'Av.Lasasdasd 34',
        status: 'Em rota',
        color: 'emRota',
        entregador: 'Paulo',
    },
    {
        codigo: 8,
        cliente: 'Jose',
        endereco: 'Av.Lasasdasd 34',
        status: 'Em rota',
        color: 'emRota',
        entregador: 'Paulo',
    },
    {
        codigo: 9,
        cliente: 'Jose',
        endereco: 'Av.Lasasdasd 34',
        status: 'Cancelada',
        color: 'cancelada',
        entregador: 'Paulo',
    },
    {
        codigo: 10,
        cliente: 'Jose',
        endereco: 'Av.Lasasdasd 34',
        status: 'Em rota',
        color: 'emRota',
        entregador: 'Paulo',
    },    {
        codigo: 11,
        cliente: 'Jose',
        endereco: 'Av.Lasasdasd 34',
        status: 'Em rota',
        color: 'emRota',
        entregador: 'Paulo',
    },    {
        codigo: 12,
        cliente: 'Jose',
        endereco: 'Av.Lasasdasd 34',
        status: 'Em rota',
        color: 'emRota',
        entregador: 'Paulo',
    },    {
        codigo: 13,
        cliente: 'Jose',
        endereco: 'Av.Lasasdasd 34',
        status: 'Em rota',
        color: 'emRota',
        entregador: 'Paulo',
    },    {
        codigo: 14,
        cliente: 'Jose',
        endereco: 'Av.Lasasdasd 34',
        status: 'Entregue',
        color: 'entregue',
        entregador: 'Paulo',
    },    {
        codigo: 15,
        cliente: 'Jose',
        endereco: 'Av.Lasasdasd 34',
        status: 'Pendente',
        color: 'pendentes',
        entregador: 'Paulo',
    },
];

export default function Entregas() {
    return (
        <AppLayout title="Entregas" date={new Date()}   >
            <Head title="Entregas" />

            <div className="flex flex-1 flex-col gap-4 rounded-xl p-4">

                {/*//Botoes do topo*/}
                <div className="mt-1 mb-1 flex items-center gap-3">

                    {/*//Criar Entrega*/}
                    <Dialog>
                        <DialogTrigger>
                            <Button variant="primary" className="h-9 w-50">
                                <Icon iconNode={Plus} />
                                Adicionar nova entrega
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="p-0 border-none bg-white  rounded-xl">
                            <DialogHeader  className="flex flex-row items-center justify-between text-black px-4 py-2 pb-2 border-b border-background  ">
                                Criar Entrega
                                <DialogClose>
                                    <Icon iconNode={X} className="size-4 cursor-pointer "/>
                                </DialogClose>
                            </DialogHeader>

                            <form action=""  className=" rounded-b-xl ">

                                <section className="flex flex-col gap-3 px-6 pt-2 text-black  ">
                                    <div>
                                        <Label >
                                           Codigo
                                        </Label>
                                        <Input
                                            className="border border-background w-full  text-sm h-10"
                                            placeholder="Codigo da entrega"
                                        />
                                    </div>


                                    <div>
                                        <Label >
                                            Cliente
                                        </Label>
                                        <Input
                                            className="border border-background w-full text-sm h-10"
                                            placeholder="Nome do entregador"
                                        />

                                    </div>
                                    <div>
                                        <Label >
                                            Previsao de Entrega
                                        </Label>
                                        <Input
                                            className="border border-background w-full   text-sm h-10"
                                            placeholder="21/01/2026"
                                            rightIcon={Calendar}
                                        />
                                    </div>
                                    <div>
                                        <Label >
                                            Endereco
                                        </Label>
                                        <Input
                                            className="border border-background w-full  text-sm h-10"
                                            placeholder="Endereco de entrega"
                                        />
                                    </div>
                                </section>
                                <section className="py-2 px-6">
                                    <Button variant="primary" className=" h-10 ">
                                        Criar
                                    </Button>
                                </section>
                            </form>

                        </DialogContent>
                    </Dialog>

                    {/*//Colocar Entrega em rota*/}
                    <Dialog>
                        <DialogTrigger>
                            <Button variant="secondary" className="h-9 w-50">
                                <Icon iconNode={Pencil} />
                                Colocar entrega em rota
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="p-0 border-none rounded-xl">
                            <DialogHeader  className="flex flex-row items-center justify-between text-black px-4 py-2 pb-0 ">
                                    Colocar entrega em Rota
                                <DialogClose>
                                    <Icon iconNode={X} className="size-4 cursor-pointer "/>
                                </DialogClose>
                            </DialogHeader>

                                <form action=""  className="bg-sidebar-bg rounded-b-xl ">

                                    <section className="flex flex-row  gap-3 px-6 pt-2 ">
                                    <div>
                                        <Label >
                                            Entrega
                                        </Label>
                                        <Input
                                            className="border border-background w-full bg-white text-black text-sm h-10"
                                            placeholder="Codigo da entrega"
                                        />
                                    </div>


                                    <div>
                                        <Label >
                                            Entregador
                                        </Label>
                                        <Input
                                            className="border border-background w-full bg-white text-black  text-sm h-10"
                                            placeholder="Nome do entregador"
                                        />
                                    </div>
                                    </section>
                                        <section className="py-2 px-6">
                                    <Button className="hover:bg-bg-button-1/50 h-10">
                                            Adicionar
                                    </Button>
                                        </section>


                                </form>

                        </DialogContent>
                    </Dialog>

                </div>

                {/*//Tabela de Entregas*/}
                <div >
                    <Card className="mx-auto flex flex-col items-start justify-end gap-1 self-stretch rounded-xl border-background bg-white pb-0 h-[calc(100vh-200px)] ">
                        <CardHeader className="flex w-full flex-row items-start pb-4 text-black gap-2">
                            {/*//Campo de Pesquisa*/}
                            <Input
                                className="h-8  rounded-xl border border-background 2xl:h-10 text-sm"
                                placeholder="Codigo"
                            ></Input>
                            <Input
                                className="h-8  rounded-xl border border-background 2xl:h-10 text-sm"
                                placeholder="Cliente"
                            ></Input>
                            <Input
                                className="h-8  rounded-xl border border-background 2xl:h-10 text-sm"
                                placeholder="Entregador"
                            ></Input>

                            <select name="" id=""   className="h-8  w-full rounded-xl border 2xl:h-10 border-background text-sm">
                                <option selected value=""></option>
                                <option value="Cancelada">Cancelada</option>
                                <option value="Entregue">Entregue</option>
                                <option value="Em rota">Em rota</option>
                                <option value="Pendente">Pendente</option>
                            </select>
                            <Button variant='secondary' className="m-0 h-8 2xl:h-10 ">
                                <Icon iconNode={Search}/>
                                Pesquisar
                            </Button>

                        </CardHeader>

                        <CardContent className="w-full h-[calc(100vh-200px)] overflow-auto ">
                            <table className="w-full ">
                                <thead className="h-10 w-full  bg-background text-base text-text-2 2xl:text-lg sticky top-0  z-10 ">
                                    <tr>
                                        <th>Codigo</th>
                                        <th>Cliente</th>
                                        <th>Endereco</th>
                                        <th>Status</th>
                                        <th>Entregador</th>
                                        <th>Acoes</th>
                                    </tr>
                                </thead>
                                {entregas.map((entrega, index) => (
                                    <tbody
                                        key={index}
                                        className="border-b border-background text-sm text-black 2xl:text-base"
                                    >
                                        <tr>
                                            <th className="py-4 font-light">
                                                {entrega.codigo}
                                            </th>
                                            <th className="font-light">
                                                {entrega.cliente}
                                            </th>
                                            <th className="font-light">
                                                {entrega.endereco}
                                            </th>
                                            <th>
                                                <Badge
                                                    variant={`${entrega.color}`}
                                                    className={`font-light text-${entrega.color} text-sm 2xl:text-base`}
                                                >
                                                    {entrega.status}
                                                </Badge>
                                            </th>
                                            <th className="font-light">
                                                {entrega.entregador}
                                            </th>
                                            <th className="flex justify-center gap-3 py-4">
                                                {/*//Editar entrega*/}
                                                <Dialog>
                                                    <DialogTrigger>
                                                        <Icon
                                                            iconNode={Pen}
                                                            className="size-4 cursor-pointer hover:fill-gray-500 "
                                                        />
                                                    </DialogTrigger>
                                                    <DialogContent className="p-0 border-none bg-white  rounded-xl">
                                                        <DialogHeader  className="flex flex-row items-center justify-between text-black px-4 py-2 pb-2 border-b border-background  ">
                                                            Editar Entrega
                                                            <DialogClose>
                                                                <Icon iconNode={X} className="size-4 cursor-pointer "/>
                                                            </DialogClose>
                                                        </DialogHeader>

                                                        <form action=""  className=" rounded-b-xl ">

                                                            <section className="flex flex-col gap-3 px-6 pt-2 text-black  ">
                                                                <div>
                                                                    <Label >
                                                                        Codigo
                                                                    </Label>
                                                                    <Input
                                                                        className="border border-background w-full  text-sm h-10"
                                                                        placeholder="Codigo da entrega"
                                                                    />
                                                                </div>


                                                                <div>
                                                                    <Label >
                                                                        Cliente
                                                                    </Label>
                                                                    <Input
                                                                        className="border border-background w-full text-sm h-10"
                                                                        placeholder="Nome do entregador"
                                                                    />

                                                                </div>
                                                                <div>
                                                                    <Label >
                                                                        Previsao de Entrega
                                                                    </Label>
                                                                    <Input
                                                                        className="border border-background w-full   text-sm h-10"
                                                                        placeholder="21/01/2026"
                                                                        rightIcon={Calendar}
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <Label >
                                                                        Endereco
                                                                    </Label>
                                                                    <Input
                                                                        className="border border-background w-full  text-sm h-10"
                                                                        placeholder="Endereco de entrega"
                                                                    />
                                                                </div>
                                                            </section>
                                                            <section className="py-2 px-6">
                                                                <Button variant="primary" className=" h-10 ">
                                                                    Salvar
                                                                </Button>
                                                            </section>
                                                        </form>

                                                    </DialogContent>
                                                </Dialog>
                                                {/*//Cancelar Entrega*/}
                                                <Dialog>
                                                    <DialogTrigger>
                                                        <Icon
                                                            iconNode={X}
                                                            className="size-4 cursor-pointer hover:text-cancelada"
                                                        />
                                                    </DialogTrigger>
                                                    <DialogContent className="p-0 border-none rounded-xl">
                                                        <DialogHeader  className="flex flex-row items-center justify-between text-black px-4 py-2 pb-0  ">
                                                            Cancelar Entrega
                                                            <DialogClose>
                                                                <Icon iconNode={X} className="size-4 cursor-pointer "/>
                                                            </DialogClose>
                                                        </DialogHeader>

                                                        <form action=""  className="bg-sidebar-bg rounded-b-xl ">

                                                            <section className=" w-full ">
                                                                <div className="w-full text-center px-6 flex flex-col gap-3 pt-2 ">
                                                                    <Label >
                                                                        Motivo do cancelamento
                                                                    </Label>
                                                                    <Input
                                                                        className="border border-background w-full bg-white text-black text-sm h-10 "
                                                                        placeholder="Motivo"
                                                                    />
                                                                </div>
                                                            </section>
                                                            <section className="pb-2 px-6">
                                                                <Button className="hover:bg-bg-button-1/50 h-10">
                                                                    Cancelar
                                                                </Button>
                                                            </section>


                                                        </form>

                                                    </DialogContent>
                                                </Dialog>
                                                {/*Finalizar Entrega*/}
                                                <Popover>
                                                    <PopoverTrigger>
                                                        <Icon iconNode={Check} className="size-4 hover:text-entregue cursor-pointer"/>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="bg-white text-black rounded-xl border-background ">
                                                        <PopoverHeader>
                                                            Finalizar entrega ?
                                                        </PopoverHeader>
                                                        <div className="flex gap-2">
                                                            <Button>
                                                                Finalizar
                                                            </Button>
                                                        </div>
                                                    </PopoverContent>
                                                </Popover>
                                            </th>
                                        </tr>
                                    </tbody>
                                ))}
                            </table>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}

