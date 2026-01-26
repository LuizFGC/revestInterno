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
        color: "emRota"
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
        color: 'emRota',
        entregador: 'Paulo'

    },
    {
        codigo: 2,
        cliente: 'Jose',
        endereco: 'Av.Lasasdasd 34',
        status:'Cancelada',
        color: 'cancelada',
        entregador: 'Paulo'

    },
    {
        codigo: 3,
        cliente: 'Jose',
        endereco: 'Av.Lasasdasd 34',
        status:'Entregue',
        color: 'entregue',
        entregador: 'Paulo'

    },
    {
        codigo: 4,
        cliente: 'Jose',
        endereco: 'Av.Lasasdasd 34',
        status:'Pendente',
        color: 'pendentes',
        entregador: 'Paulo'

    },
    {
        codigo: 5,
        cliente: 'Jose',
        endereco: 'Av.Lasasdasd 34',
        status:'Em rota',
        color: 'emRota',
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
                    <Card className="mx-auto flex flex-col items-start justify-end gap-1 self-stretch rounded-xl border-background bg-white pb-0">
                        <CardHeader className="flex w-full flex-col items-Start justify-center pb-1 text-base  text-black 2xl:text-lg">
                            Ultimas Entregas
                        </CardHeader>

                        <CardContent className="w-full">
                            <table className="w-full">
                                <thead className="w-full bg-background text-text-2 2xl:text-lg h-8 border border-background text-base">
                                    <tr >
                                        <th>Codigo</th>
                                        <th>Cliente</th>
                                        <th>Endereco</th>
                                        <th>Status</th>
                                        <th>Entregador</th>
                                    </tr>
                                </thead>
                                {entregas.map((entrega, index) => (

                                    <tbody key={index} className="text-black  text-sm 2xl:text-base border-b border-background">
                                        <tr >
                                            <th className="py-4 font-light " >
                                                {entrega.codigo}
                                            </th>
                                            <th className="font-light">
                                                {entrega.cliente}
                                            </th>
                                            <th className="font-light">
                                                {entrega.endereco}
                                            </th>
                                            <th  >
                                                <Badge variant={`${entrega.color}`}  className={`font-light text-${entrega.color}  text-sm 2xl:text-base ` }>
                                                    {entrega.status}
                                                </Badge>

                                            </th>
                                            <th className="font-light">
                                                {entrega.entregador}
                                            </th>
                                        </tr>
                                    </tbody>


                                    )

                                )}
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
