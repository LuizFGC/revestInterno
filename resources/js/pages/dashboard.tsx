import { Head } from '@inertiajs/react';
import { Card } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';


const cardItems = [
    {
        title: 'Total de Entrega',
        value: 4,
    },
    {
        title : 'Pendentes',
        value: 2
    },
    {
        title: 'Em rota de entrega',
        value: 1
    },
    {
        title: 'Entregues',
        value: 1
    }
];





export default function Dashboard() {
    return (
        <AppLayout title="Dashboard" date={new Date()}>
            <Head title="Dashboard" />

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex items-center justify-center gap-20 self-stretch">
                    {cardItems.map((item, index) => (
                        <Card key={index} className="flex h-24 grow flex-col gap-2 rounded-xl border border-background bg-white px-6 pt-6 pb-0.5">
                            <div className="flex h-6 shrink-0 items-start self-stretch text-black">
                                {item.title}
                            </div>
                            <div className="flex h-6 shrink-0 items-start self-stretch text-black">
                                {item.value}
                            </div>
                        </Card>
                    ))}
                </div>
                <div className="flex flex-col items-start justify-end self-stretch rounded-xl border border-background bg-white">
                    <div className="flex w-full flex-col items-sbtart order-b border-background">
                        <p className="text-black">Ultimas Entregas</p>
                    </div>
                    <Card></Card>
                </div>
            </div>
        </AppLayout>
    );
}
