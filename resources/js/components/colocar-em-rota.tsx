import { useForm } from '@inertiajs/react';
import { Pencil, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog';
import { Icon } from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';

export default function ColocarEmRota(){

    const { data, setData, patch, processing, errors, reset, clearErrors } = useForm({

        codigo: '',
        entregador: '',
        status: 'Rota'
    })



    function handleColocarEmRota(e: React.FormEvent){
        e.preventDefault()

        patch('/entregas/rota', {

            onSuccess: () => {
                reset()
            }
        })
    }



    return (
        <Dialog>
            <DialogTrigger>
                <Button variant="secondary" className="h-9 w-50">
                    <Icon iconNode={Pencil} />
                    Colocar entrega em rota
                </Button>
            </DialogTrigger>
            <DialogContent className="rounded-xl border-none p-0">
                <DialogHeader className="flex flex-row items-center justify-between px-4 py-2 pb-0 text-black">
                    Colocar entrega em Rota
                    <DialogClose>
                        <Icon
                            iconNode={X}
                            className="size-4 cursor-pointer"
                        />
                    </DialogClose>
                </DialogHeader>

                <form
                    onSubmit={handleColocarEmRota}
                    className="rounded-b-xl bg-sidebar-bg"
                >
                    <section className="flex flex-row gap-3 px-6 pt-2">
                        <div>
                            <Label>Entrega</Label>
                            <Input
                                type='number'
                                min={0}
                                id="codigo"
                                name="codigo"
                                value={data.codigo}
                                onChange={e => {setData ('codigo', e.target.value); clearErrors('codigo')}}
                                className="h-10 w-full border border-background bg-white text-sm text-black"
                                placeholder="Codigo da entrega"
                            />
                            {errors.codigo && (
                                <p className="text-red-500 text-xs">{errors.codigo}</p>
                                )}
                        </div>

                        <div>
                            <Label>Entregador</Label>
                            <Input
                                id='entregador'
                                name='entregador'
                                value={data.entregador}
                                onChange={e => {setData ('entregador', e.target.value); clearErrors('entregador')}}
                                className="h-10 w-full border border-background bg-white text-sm text-black"
                                placeholder="Nome do entregador"
                            />
                        {errors.entregador && (
                            <p className="text-red-500 text-xs">{errors.entregador}</p>
                        )}
                                <Input className="hidden"
                                       name='status'
                                       id='status'
                                       value={data.status}
                                />
                        </div>
                    </section>
                    <section className="px-6 py-2">
                        <Button className="h-10 hover:bg-bg-button-1/50" disabled={processing} type='submit'>
                            {processing && <Spinner />}
                            Adicionar
                        </Button>
                    </section>
                </form>
            </DialogContent>
        </Dialog>


)
}
