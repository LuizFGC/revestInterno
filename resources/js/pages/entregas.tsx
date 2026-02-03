import { Head } from '@inertiajs/react';

import { useState, useMemo } from 'react';
import { Toaster } from 'sonner'
import CancelarEntrega from '@/components/cancelar-entrega';
import ColocarEmRota from '@/components/colocar-em-rota';
import CriarEntrega from '@/components/criar-entrega';
import FinalizarEntrega from '@/components/finalizar-entrega';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

import { Input } from '@/components/ui/input';
import VisualizarEntrega from '@/components/visualizar-entrega';
import { useData } from '@/contexts/DataContext';
import AppLayout from '@/layouts/app-layout';








export default function Entregas({entregas}) {


    const {dataSelecionada} = useData();


    const [filtros, setFiltros] = useState({

        codigo: '',
        cliente: '',
        entregador: '',
        data: dataSelecionada,
        status: '',
    })

    // Fixed: Removed useEffect and using useMemo to sync filtros.data with dataSelecionada
    const filtrosAtualizados = useMemo(() => ({
        ...filtros,
        data: dataSelecionada
    }), [filtros, dataSelecionada]);

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
            data: dataSelecionada,
            status: '',
        })
    }


    const entregasFiltradas = useMemo(() => {



        return entregas.filter(entrega => {

            const codigoEntrega = entrega.codigo


            const dataEntrega = entrega.created_at ? new Date(entrega.created_at).toISOString().split('T')[0] : null

            const dataFiltro = filtrosAtualizados.data ? new Date(filtrosAtualizados.data).toISOString().split('T')[0] : null


            const data = dataEntrega === dataFiltro

            const codigo = !filtrosAtualizados.codigo || codigoEntrega.toString().includes(filtrosAtualizados.codigo)

            const cliente = entrega.cliente.toLowerCase().includes(filtrosAtualizados.cliente.toLowerCase())

            const filtro = filtrosAtualizados.entregador.toLowerCase()

            const entregador = !filtro || (entrega.entregador?.toLowerCase().includes(filtro))

            const status = !filtrosAtualizados.status || entrega.status === filtrosAtualizados.status

            return (
                codigo && cliente && entregador && status && data

            )
        })

    }, [entregas, filtrosAtualizados])


    return (
        <AppLayout title="Entregas" >
            <Head title="Entregas" />

            <Toaster position="top-right"  richColors />
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
                                value={filtrosAtualizados.codigo}
                                onChange={handleFiltrosEntregas}
                                className="h-8 rounded-xl border border-background text-sm 2xl:h-10"
                                placeholder="Codigo"
                            ></Input>
                            <Input
                                type="text"
                                id="cliente"
                                name="cliente"
                                value={filtrosAtualizados.cliente}
                                onChange={handleFiltrosEntregas}
                                className="h-8 rounded-xl border border-background text-sm 2xl:h-10"
                                placeholder="Cliente"
                            ></Input>
                            <Input
                                type="text"
                                id="entregador"
                                name="entregador"
                                value={filtrosAtualizados.entregador}
                                onChange={handleFiltrosEntregas}
                                className="h-8 rounded-xl border border-background text-sm 2xl:h-10"
                                placeholder="Entregador"
                            ></Input>

                            <select
                                name="status"
                                id="status"
                                className="h-8 w-full rounded-xl border border-background text-sm 2xl:h-10"
                                value={filtrosAtualizados.status}
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
                                <tbody>
                                {entregasFiltradas.length === 0 ? (
                                    <tr >
                                        <td  colSpan={5} className="text-center py-4 text-black/50">
                                            Nenhuma Entrega Encontrada
                                        </td>
                                    </tr>
                                )  : (
                                    entregasFiltradas.map(
                                        (entrega,) => (

                                            <tr key={entrega.codigo} className="border-b border-background text-sm text-black 2xl:text-base">
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
                                                    {/*visualizar entrega*/}
                                                    <VisualizarEntrega entrega={entrega} />

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

                                        ),
                                    ))}

                                </tbody>
                            </table>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}
