import { useForm } from '@inertiajs/react';
import { Pen, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DatePickerInput } from '@/components/ui/date-picker';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Icon } from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { useState } from 'react';
import { toast } from 'sonner';

interface EditarEntregaProps {

    entrega:{
        id: number,
        codigo: string,
        cliente: string,
        endereco: string,
        previsao: Date | null,
        entregador?: string
        status: string;
    }
}


export default function EditarEntrega({entrega}:EditarEntregaProps){

    const [open, setOpen] = useState(false)

    const { data, setData, patch, processing,errors, clearErrors } = useForm({
        id: entrega.id,
        codigo: entrega.codigo,
        cliente: entrega.cliente,
        endereco: entrega.endereco,
        entregador: entrega.entregador,
        previsao: new Date(`${entrega.previsao}T12:00:00`) ,
    })


    function handleEditarEntrega(e: React.FormEvent){
        e.preventDefault()

        patch('/entregas/update', {
            onSuccess: () => {

                setOpen(false)
                toast.success('Edicao feita com sucesso!')
            }
        })
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger hidden={entrega.status == 'Cancelado' || entrega.status == 'Entregue'}>
                <Icon
                    iconNode={Pen}
                    className="size-4 cursor-pointer hover:fill-gray-500"
                />
            </DialogTrigger>
            <DialogContent className="rounded-xl border-none bg-white p-0">
                <DialogHeader className="flex flex-row items-center justify-between border-b border-background px-4 py-2 pb-2 text-black">
                    Editar Entrega
                    <DialogClose>
                        <Icon
                            iconNode={
                                X
                            }
                            className="size-4 cursor-pointer"
                        />
                    </DialogClose>
                </DialogHeader>

                <form
                    onSubmit={handleEditarEntrega}
                    className="rounded-b-xl"
                >
                    <section className="flex flex-col gap-3 px-6 pt-2 text-black">
                        <div>
                            <Label>
                                Codigo
                            </Label>
                            <Input
                                type='number'
                                min={0}
                                id='codigo'
                                name='codigo'
                                value={data.codigo}
                                onChange={e => {setData ('codigo', e.target.value); clearErrors('codigo')}}
                                className="h-10 w-full border border-background text-sm"
                                placeholder="Codigo da entrega"
                            />
                            {errors.codigo && (
                                <p className="text-red-500 text-xs">{errors.codigo}</p>
                            )}
                        </div>


                        <div>
                            <Label>
                                Cliente
                            </Label>
                            <Input
                                id='cliente'
                                name='cliente'
                                value={data.cliente}
                                onChange={e => {setData ('cliente', e.target.value); clearErrors('cliente')}}
                                className="h-10 w-full border border-background text-sm"
                                placeholder="Nome do cliente"
                            />
                        </div>
                        {errors.cliente && (
                            <p className="text-red-500 text-xs">{errors.cliente}</p>
                        )}
                        <div>
                            <Label>
                                Previsao
                                de
                                Entrega
                            </Label>

                            <DatePickerInput
                                value={data.previsao}
                                side="top"
                            />


                        </div>
                        {errors.previsao && (
                            <p className="text-red-500 text-xs">{errors.previsao}</p>
                        )}
                        <div>
                            <Label>
                                Endereco
                            </Label>
                            <Input
                                id='endereco'
                                name='endereco'
                                value={data.endereco}
                                onChange={e => {setData ('endereco', e.target.value); clearErrors('endereco')}}
                                className="h-10 w-full border border-background text-sm"
                                placeholder="Endereco de entrega"
                            />
                        </div>
                        {errors.endereco && (
                            <p className="text-red-500 text-xs">{errors.endereco}</p>
                        )}
                        <div>
                            <Label>Entregador</Label>
                            <Input
                                id="entregador"
                                name="entregador"
                                value={data.entregador}
                                onChange={(e) => {
                                    setData('entregador', e.target.value);
                                    clearErrors('entregador');
                                }}
                                className="h-10 w-full border border-background text-sm"
                                placeholder="Nome do entregador"
                            />
                        </div>
                        {errors.entregador && (
                            <p className="text-red-500 text-xs">{errors.entregador}</p>
                        )}
                        <Input
                            className="hidden"
                            name='id'
                            id='id'
                            value={data.id}
                        />
                    </section>
                    <section className="px-6 py-2">
                        <Button
                            variant="primary"
                            className="h-10"
                            disabled={processing}
                        >
                            {processing && <Spinner />}
                            Salvar
                        </Button>
                    </section>
                </form>
            </DialogContent>
        </Dialog>
    )
}
