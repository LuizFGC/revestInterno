import { Head } from '@inertiajs/react';
import {  useMemo } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useData } from '@/contexts/DataContext';
import AppLayout from '@/layouts/app-layout';
// const statusColorMap = {
//     Pendente: 'text-Pendente',
//     Rota: 'text-Rota',
//     Entregue: 'text-Entregue',
//     Cancelado: 'text-Cancelado',
//     black: 'text-black',
// };


export default function Dashboard({entregas}) {


    const {dataSelecionada} = useData()

    // Fixed: Removed useEffect and derived filtros directly from dataSelecionada
    const filtros = useMemo(() => ({
        data: dataSelecionada,
    }), [dataSelecionada]);

    const entregasFiltradas = useMemo(() => {



        return entregas.filter(entrega => {


            const dataEntrega = entrega.created_at ? new Date(entrega.created_at).toISOString().split('T')[0] : null

            const dataFiltro = filtros.data ? new Date(filtros.data).toISOString().split('T')[0] : null


            return dataEntrega === dataFiltro



        })

    }, [entregas, filtros])



    const ultimas5 = [...entregasFiltradas]
        .sort((a, b) => {
            const dateA = new Date(a.created_at).getTime();
            const dateB = new Date(b.created_at).getTime();
            return dateB - dateA;
        })
        .slice(0, 5);

    const quantidadePorStatus = entregasFiltradas.reduce((acc, entrega) => {
        const status = entrega.status;
        acc[status] = (acc[status] || 0) + 1;
        return acc;
    }, {});



    const cards = [

        {
            Title: 'Total de Entregas',
            value: entregasFiltradas.length,
            color: 'black'
        },
        {
            Title: 'Pendentes',
            value:  quantidadePorStatus.Pendente|| 0,
            color: 'Pendente'
        },
        {
            Title: 'Entregue',
            value:  quantidadePorStatus.Entregue|| 0,
            color: 'Entregue'
        },
        {
            Title: 'Em Rota',
            value:  quantidadePorStatus.Rota|| 0,
            color: 'Rota'
        },
        {
            Title: 'Canceladas',
            value:  quantidadePorStatus.Cancelado|| 0,
            color: 'Cancelado'
        }


    ]

    return (
        <AppLayout title="Dashboard" >
            <Head title="Dashboard" />

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                {/*DashboardCards*/}
                <div className="mt-8 mb-8 flex items-center justify-center gap-12 self-stretch">

                    {cards.map((card) =>
                        <Card key={card.Title} className="flex h-30 w-80 flex-col w-full rounded-xl border border-background bg-white px-6 pt-6 pb-0.5 2xl:h-40">
                            <div className="flex h-6 shrink-0 items-start w-full self-stretch text-[16px] text-text-2 2xl:h-10 2xl:text-xl">
                                {card.Title}
                            </div>
                            <div
                                className={`flex h-6 shrink-0 items-start self-stretch 2xl:h-10  text-${card.color} text-[16px] 2xl:text-xl`}
                            >
                                {card.value}
                            </div>
                        </Card>)}



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
                                {ultimas5.map((entrega, index:number) => (

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
