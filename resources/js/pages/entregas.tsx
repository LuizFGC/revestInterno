import { Head } from '@inertiajs/react';
import { Pen, Pencil, Plus, Search, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import AppLayout from '@/layouts/app-layout';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {Label} from '@/components/ui/label'
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
        status: 'Em rota',
        color: 'emRota',
        entregador: 'Paulo',
    },
    {
        codigo: 10,
        cliente: 'Jose',
        endereco: 'Av.Lasasdasd 34',
        status: 'Em rota',
        color: 'emRota',
        entregador: 'Paulo',
    },
];

export default function Entregas() {
    return (
        <AppLayout title="Entregas" date={new Date()}>
            <Head title="Entregas" />

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="mt-4 mb-4 flex items-center gap-3">
                    <Dialog>
                        <DialogTrigger>
                            <Button variant="primary" className="h-9 w-50">
                                <Icon iconNode={Plus} />
                                Adicionar nova entrega
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader  className="flex flex-row items-center justify-between text-black">
                                <DialogTitle >
                                    Colocar entrega em Rota
                                </DialogTitle>
                                <DialogClose>
                                    <Icon iconNode={X} className="size-4 cursor-pointer "/>
                                </DialogClose>
                            </DialogHeader>
                                <div className="bg-sidebar-bg">
                                    <form action="">
                                        <Input />

                                    </form>
                                </div>

                        </DialogContent>
                    </Dialog>
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

                                    <section className="flex flex-row  gap-3 px-6 py-2">
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
                <div>
                    <Card className="mx-auto flex flex-col items-start justify-end gap-1 self-stretch rounded-xl border-background bg-white pb-0">
                        <CardHeader className="flex w-full flex-col items-start pb-4 text-black">
                            <Input
                                className="h-8 w-70 rounded-xl border border-background text-sm"
                                leftIcon={Search}
                                placeholder="Pesquisar Entrega"
                            ></Input>
                        </CardHeader>

                        <CardContent className="w-full">
                            <table className="w-full">
                                <thead className="h-8 w-full border border-background bg-background text-base text-text-2 2xl:text-lg">
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
                                                <Dialog>
                                                    <DialogTrigger>
                                                        <Icon
                                                            iconNode={Pen}
                                                            className="size-4 cursor-pointer hover:text-entregue "
                                                        />
                                                    </DialogTrigger>
                                                    <DialogContent>
                                                        <DialogHeader>
                                                            Teste
                                                        </DialogHeader>
                                                    </DialogContent>
                                                </Dialog>

                                                <Dialog>
                                                    <DialogTrigger>
                                                        <Icon
                                                            iconNode={X}
                                                            className="size-4 cursor-pointer hover:text-cancelada"
                                                        />
                                                    </DialogTrigger>
                                                    <DialogContent>
                                                        <DialogHeader>
                                                            Teste
                                                        </DialogHeader>
                                                    </DialogContent>
                                                </Dialog>

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
{
}
