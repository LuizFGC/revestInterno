import { Head } from '@inertiajs/react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';



const cardItems = [
    {
        title: 'Total de Entregas',
        value: 4,
        color: "black"
    },
    {
        title : 'Pendentes',
        value: 2,
        color: "pendentes"
    },
    {
        title: 'Em rota de entrega',
        value: 1,
        color: "em-rota"
    },
    {
        title: 'Entregues',
        value: 1,
        color: "entregue"
    }
];

const entregas = [

    {
        codigo: 1,
        cliente: 'Jose',
        endereco: 'Av.Lasasdasd 34',
        status:'Em rota',
        color: 'em-rota',
        entregador: 'Paulo'

    },
    {
        codigo: 2,
        cliente: 'Jose',
        endereco: 'Av.Lasasdasd 34',
        status:'Em rota',
        color: 'em-rota',
        entregador: 'Paulo'

    },
    {
        codigo: 3,
        cliente: 'Jose',
        endereco: 'Av.Lasasdasd 34',
        status:'Em rota',
        color: 'em-rota',
        entregador: 'Paulo'

    },
    {
        codigo: 4,
        cliente: 'Jose',
        endereco: 'Av.Lasasdasd 34',
        status:'Em rota',
        color: 'em-rota',
        entregador: 'Paulo'

    },
    {
        codigo: 5,
        cliente: 'Jose',
        endereco: 'Av.Lasasdasd 34',
        status:'Em rota',
        color: 'em-rota',
        entregador: 'Paulo'

    }
]







export default function Dashboard() {
    return (
        <AppLayout title="Dashboard" date={new Date()}>
            <Head title="Dashboard" />

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="mt-8 mb-8 flex items-center justify-center gap-20 self-stretch">
                    {cardItems.map((item, index) => (
                        <Card
                            key={index}
                            className="flex h-30 w-80 flex-col gap-2 rounded-xl border border-background bg-white px-6 pt-6 pb-0.5 2xl:h-40"
                        >
                            <div className="flex h-6 shrink-0 items-start self-stretch text-[16px] text-text-2 2xl:h-10 2xl:text-xl">
                                {item.title}
                            </div>
                            <div
                                className={`flex h-6 shrink-0 items-start self-stretch 2xl:h-10 text-${item.color} text-[16px] 2xl:text-xl`}
                            >
                                {item.value}
                            </div>
                        </Card>
                    ))}
                </div>
                <div>
                    <Card className="mx-auto flex flex-col items-start justify-end gap-6 self-stretch rounded-xl border-background bg-white pb-0">
                        <CardHeader className="flex w-full flex-col items-start border-b border-background pb-0.5 text-[16px] text-black 2xl:text-lg">
                            Ultimas Entregas
                        </CardHeader>
                        <ul className="flex w-full shrink-0 items-start justify-between border-b border-background bg-background text-sm font-bold text-text-2 2xl:text-[16px]">
                            <li className="flex items-center px-14 py-2 pl-6">
                                Codigo
                            </li>
                            <li className="flex items-center px-14 py-2 pl-6">
                                Cliente
                            </li>
                            <li className="flex items-center px-14 py-2 pl-6">
                                Endereco
                            </li>
                            <li className="flex items-center px-14 py-2 pl-6">
                                Status
                            </li>
                            <li className="flex items-center px-14 py-2 pl-6">
                                Entregador
                            </li>
                        </ul>
                        {entregas.map((entrega, index) => (
                            <CardContent key={index} className="w-full">
                                <ul className="flex w-full shrink-0 items-start justify-between text-xs text-black 2xl:text-sm">
                                    <li className="flex items-center px-14 py-2 pl-6">
                                        {entrega.codigo}
                                    </li>
                                    <li className="flex items-center px-14 py-2 pl-6">
                                        {entrega.cliente}
                                    </li>
                                    <li className="flex items-center px-14 py-2 pl-6">
                                        {entrega.endereco}
                                    </li>
                                    <li
                                        className={`flex items-center px-14 py-2 pl-6 text-${entrega.color}`}
                                    >
                                        <Badge
                                            variant={'default'}
                                            className={`bg-${entrega.color} text-${entrega.color}`}
                                        >
                                            {entrega.status}
                                        </Badge>
                                    </li>
                                    <li className="flex items-center px-14 py-2 pl-6">
                                        {entrega.entregador}
                                    </li>
                                </ul>
                            </CardContent>
                        ))}
                        ;
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}
{

}
