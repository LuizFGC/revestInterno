
import {
    Calendar,
    Text,
    Eye,
    MapPin,
    Package,
    User,
    X,
    Truck,
} from 'lucide-react';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Icon } from '@/components/ui/icon';
import EditarEntrega from '@/components/editar-entrega';

interface VisualizarEntregaProps {

    entrega:{
        id: number,
        codigo: string,
        cliente: string,
        endereco: string,
        previsao: string,
        entregador?: string
        status: string;
        motivo: string;
        created_at: string;
    }
}


export default function VisualizarEntrega({entrega}:VisualizarEntregaProps){

    const data = new Date(`${entrega.previsao}T12:00:00`);

    const options = { day: "2-digit", month: "long", year: "numeric" };
    const dataFormatada = data.toLocaleDateString("pt-BR", options);

    const emissao = new Date(entrega.created_at);

    const emissaoFormatada = emissao.toLocaleDateString("pt-BR", options);

    const [open, setOpen] = useState(false)

    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogTrigger

            >
                <Icon
                    iconNode={Eye}
                    className="size-4 cursor-pointer hover:fill-gray-500"
                />
            </DialogTrigger>
            <DialogContent className="gap-0 rounded-xl border-background bg-white p-0 w-full ">
                <DialogHeader className="flex flex-row items-center justify-between border-b border-background px-4 py-2 text-black">
                    <section className="flex gap-2">
                        <div>
                            Entrega N° {entrega.codigo}
                        </div>

                        <Badge
                            variant={entrega.status}
                            className={`font-light text-${entrega.status}  text-sm 2xl:text-base`}
                        >
                            {entrega.status}
                        </Badge>
                    </section>

                    <DialogClose>
                        <Icon iconNode={X} className="size-4 cursor-pointer" />
                    </DialogClose>
                </DialogHeader>


                {/* Informações do Cliente */}
                <section  className="border border-gray-200 rounded p-3 space-y-2 text-black">
                    <h3 className="font-bold flex items-center gap-2"><User size={18} /> Informações do Cliente</h3>

                    <div className="pl-4">
                        <p className="text-xs text-text-2">Nome do Cliente</p>
                        <p className="text-sm"> {entrega.cliente}</p>
                    </div>

                </section>




                {/* Detalhes da Entrega */}
                <section  className="border border-gray-300 rounded p-3 space-y-2 text-black">
                    <h3 className="font-bold flex items-center gap-2"><Package size={18} /> Detalhes da Entrega</h3>

                    <section className="flex">
                    <div className="pl-4">

                        <p className=" text-xs text-text-2 flex items-center gap-2"><Calendar size={14} />Emissao</p>
                        <p className="text-sm"> {emissaoFormatada}</p>
                    </div>

                        {entrega.status == 'Cancelado' ?  '' :
                            <div className="pl-4">
                                {entrega.status == 'Pendente' ||entrega.status == 'Rota' ?
                                    <p className=" text-xs text-text-2 flex items-center gap-2"><Truck size={14} />Previsao</p>
                                    :  <p className=" text-xs text-text-2 flex items-center gap-2"><Truck size={14} />Entrega</p>
                                }
                                <p className="text-sm"> {dataFormatada}</p>
                            </div> }


                    </section>

                    <div className="pl-4">
                        <p className="text-xs text-text-2 flex items-center gap-2"><MapPin size={14} /> Endereço</p>
                        <p className="text-sm"> {entrega.endereco}</p>
                    </div>

                </section>

                {/* Entregador */}
                <section  className="border border-gray-300 rounded p-3 space-y-2 text-black">
                    <h3 className="font-bold flex items-center gap-2"><Package size={18} /> Entregador</h3>

                    <div className="pl-4">
                        <p className="text-xs text-text-2 ">Nome do Entregador</p>
                        <p className="text-sm"> {entrega.entregador}</p>
                    </div>

                </section>

                {entrega.status == 'Cancelado' ?

                    <section  className="border border-gray-300 rounded p-3 space-y-2 text-black">
                        <h3 className="font-bold flex items-center gap-2"><Text size={18} /> Motivo do Cancelamento</h3>

                        <div className="pl-4">
                            <p className="text-xs text-text-2 f">Motivo</p>
                            <p className="text-sm"> {entrega.motivo}</p>
                        </div>

                    </section> :

                    ''
                }

                {/*//Editar entrega*/}
                <EditarEntrega
                    entrega={entrega}
                />
            </DialogContent>
        </Dialog>
    );
}
