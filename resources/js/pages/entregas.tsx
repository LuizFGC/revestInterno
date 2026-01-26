import { Head } from '@inertiajs/react';
import { Card } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';



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





export default function Entregas() {
    return (
        <AppLayout title="Entregas" date={new Date()}>
            <Head title="Entregas" />

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="mt-8 mb-8 flex items-center justify-center gap-20 self-stretch">
                    {cardItems.map((item, index) => (
                        <Card
                            key={index}
                            className="flex h-24 w-80 flex-col gap-2 rounded-xl border border-background bg-white px-6 pt-6 pb-0.5 2xl:h-32"
                        >
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
                    <div className="items-sbtart order-b flex w-full flex-col border-background">
                        <p className="text-black">Ultimas Entregas</p>
                    </div>
                    <Card></Card>
                </div>
            </div>
        </AppLayout>
    );
}
