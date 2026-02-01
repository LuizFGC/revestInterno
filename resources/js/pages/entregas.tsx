import { Head } from '@inertiajs/react';
import { Pen, X, } from 'lucide-react';
import { useState, useMemo } from 'react';
import CancelarEntrega from '@/components/cancelar-entrega';
import ColocarEmRota from '@/components/colocar-em-rota';
import CriarEntrega from '@/components/criar-entrega';
import FinalizarEntrega from '@/components/finalizar-entrega';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { DatePickerInput } from '@/components/ui/date-picker';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Icon } from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import {Label} from '@/components/ui/label'

import AppLayout from '@/layouts/app-layout';
import EditarEntrega from '@/components/editar-entrega';

export default function Entregas({entregas}) {

    const [filtros, setFiltros] = useState({

        codigo: '',
        cliente: '',
        entregador: '',
        data: '',
        status: '',
    })


    function handleFiltrosEntregas(e) {

        const {name, value} = e.target

        setFiltros(prev => ({
            ...prev,
            [name]:value,
        }) )

    }

    function handleLimparFiltros(e) {

        e.preventDefault()

        setFiltros({
            codigo: '',
            cliente: '',
            entregador: '',
            data: '',
            status: '',
        })
    }


    const entregasFiltradas = useMemo(() => {



        return entregas.filter(entrega => {

            const codigoEntrega = entrega.codigo


            const codigo = !filtros.codigo || codigoEntrega.toString().includes(filtros.codigo)

            const cliente = entrega.cliente.toLowerCase().includes(filtros.cliente.toLowerCase())

            const entregador = !entrega.entregador || entrega.entregador.toLowerCase().includes(filtros.entregador.toLowerCase())

            const status = !filtros.status || entrega.status === filtros.status

            return (
                codigo && cliente && entregador && status

            )
        })

    }, [entregas, filtros])


    return (
        <AppLayout title="Entregas" date={new Date()}>
            <Head title="Entregas" />

            <div className="flex flex-1 flex-col gap-4 rounded-xl p-4">
                {/*//Botoes do topo*/}
                <div className="mb-1 flex items-center gap-3">
                    {/*//Criar Entrega*/}
                    <CriarEntrega />
                    {/*//Colocar Entrega em rota*/}
                    <ColocarEmRota />
                </div>
                {/*//Tabela de Entregas*/}
                <div>
                    <Card className="mx-auto flex h-[calc(100vh-200px)] flex-col justify-end gap-1 self-stretch rounded-xl border-background bg-white pb-0">
                        <CardHeader className="flex w-full flex-row items-start gap-2 px-3 pb-1 text-black">
                            {/*//Campos de Pesquisa*/}

                            <Input
                                type="number"
                                min="0"
                                id="codigo"
                                name="codigo"
                                value={filtros.codigo}
                                onChange={handleFiltrosEntregas}
                                className="h-8 rounded-xl border border-background text-sm 2xl:h-10"
                                placeholder="Codigo"
                            ></Input>
                            <Input
                                type="text"
                                id="cliente"
                                name="cliente"
                                value={filtros.cliente}
                                onChange={handleFiltrosEntregas}
                                className="h-8 rounded-xl border border-background text-sm 2xl:h-10"
                                placeholder="Cliente"
                            ></Input>
                            <Input
                                type="text"
                                id="entregador"
                                name="entregador"
                                value={filtros.entregador}
                                onChange={handleFiltrosEntregas}
                                className="h-8 rounded-xl border border-background text-sm 2xl:h-10"
                                placeholder="Entregador"
                            ></Input>

                            <select
                                name="status"
                                id="status"
                                className="h-8 w-full rounded-xl border border-background text-sm 2xl:h-10"
                                value={filtros.status}
                                onChange={handleFiltrosEntregas}
                            >
                                <option selected value="">
                                    Todos
                                </option>
                                <option value="Cancelado">Cancelada</option>
                                <option value="Entregue">Entregue</option>
                                <option value="Rota">em Rota</option>
                                <option value="Pendente">Pendente</option>
                            </select>

                            <Button
                                onClick={handleLimparFiltros}
                                variant="secondary"
                                className="m-0 h-8 w-full 2xl:h-10"
                            >
                                Limpar Filtros
                            </Button>
                        </CardHeader>

                        <CardContent className="h-[calc(100vh-200px)] w-full overflow-auto">
                            <table className="w-full">
                                <thead className="sticky top-0 z-10 h-10 w-full bg-background text-base text-text-2 2xl:text-lg">
                                    <tr>
                                        <th>Codigo</th>
                                        <th>Cliente</th>
                                        <th>Endereco</th>
                                        <th>Status</th>
                                        <th>Entregador</th>
                                        <th>Acoes</th>
                                    </tr>
                                </thead>
                                {entregasFiltradas.map(
                                    (entrega, index: number) => (
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
                                                        variant={entrega.status}
                                                        className={`font-light text-${entrega.status} text-sm 2xl:text-base`}
                                                    >
                                                        {entrega.status}
                                                    </Badge>
                                                </th>
                                                <th className="font-light">
                                                    {entrega.entregador}
                                                </th>

                                                <th className="flex justify-center gap-3 py-4">
                                                    {/*//Editar entrega*/}
                                                    <EditarEntrega
                                                        entrega={entrega}
                                                    />
                                                    {/*//Cancelar Entrega*/}
                                                    <CancelarEntrega
                                                        codigo={entrega.codigo}
                                                        status={entrega.status}
                                                    />
                                                    {/*Finalizar Entrega*/}
                                                    <FinalizarEntrega
                                                        codigo={entrega.codigo}
                                                        status={entrega.status}
                                                    />
                                                </th>
                                            </tr>
                                        </tbody>
                                    ),
                                )}
                            </table>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}

