import { Head } from '@inertiajs/react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';



const statusColorMap = {
    Pendente: 'text-Pendente',
    Rota: 'text-Rota',
    Entregue: 'text-Entregue',
    Cancelado: 'text-Cancelado',
    black: 'text-black',
};


export default function Dashboard({entregas, cardValues}) {


    return (
        <AppLayout title="Dashboard" date={new Date()}>
            <Head title="Dashboard" />

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="mt-8 mb-8 flex items-center justify-center gap-12 self-stretch">

                    <Card className="flex h-30 w-80 flex-col w-full rounded-xl border border-background bg-white px-6 pt-6 pb-0.5 2xl:h-40">
                        <div className="flex h-6 shrink-0 items-start w-full self-stretch text-[16px] text-text-2 2xl:h-10 2xl:text-xl">
                            Total de Entregas
                        </div>
                        <div
                            className={`flex h-6 shrink-0 items-start self-stretch 2xl:h-10  text-black text-[16px] 2xl:text-xl`}
                        >
                            {cardValues.total}
                        </div>
                    </Card>
                    {cardValues.status.map((item, index:number) => (
                        <Card
                            key={index}
                            className="flex h-30 w-80 flex-col w-full rounded-xl border border-background bg-white px-6 pt-6 pb-0.5 2xl:h-40"
                        >
                            <div className="flex h-6 shrink-0 items-start w-full self-stretch text-[16px] text-text-2 2xl:h-10 2xl:text-xl">
                                {item.status}
                            </div>
                            <div
                                className={`flex h-6 shrink-0 items-start self-stretch 2xl:h-10  text-${item.status}  text-[16px] 2xl:text-xl`}
                            >
                                {item.total}
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
                                {entregas.map((entrega, index:number) => (

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
                                                <Badge variant={entrega.status}  className={`font-light text-${entrega.status}  text-sm 2xl:text-base ` }>
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

