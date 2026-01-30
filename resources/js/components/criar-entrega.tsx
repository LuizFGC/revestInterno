import { useForm } from '@inertiajs/react';
import { Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DatePickerInput } from '@/components/ui/date-picker';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Icon } from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';


export default function CriarEntrega(){

    const { data, setData, post, processing, errors, reset, clearErrors } = useForm({

        codigo: '',
        cliente: '',
        endereco: '',
        previsao: null as Date | null,
        status: 'Pendente'
    })
    function handleAdicionarEntrega(e: React.FormEvent){
        e.preventDefault()

        post('/entregas/store', {

            onSuccess: () => {
                reset()
            }
        })
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="primary" className="h-9 w-50">
                    <Icon iconNode={Plus} />
                    Adicionar nova entrega
                </Button>
            </DialogTrigger>
            <DialogContent className="rounded-xl border-none bg-white p-0">
                <DialogHeader className="flex flex-row items-center justify-between border-b border-background px-4 py-2 pb-2 text-black">
                    <DialogTitle>Criar Entrega</DialogTitle>
                    <DialogClose>
                        <Icon
                            iconNode={X}
                            className="size-4 cursor-pointer"
                        />
                    </DialogClose>
                </DialogHeader>

                <form className="rounded-b-xl" onSubmit={handleAdicionarEntrega}>
                    <section className="flex flex-col gap-3 px-6 pt-2 text-black">
                        <div>
                            <Label>Codigo</Label>
                            <Input
                                type="number"
                                min="0"
                                id="codigo"
                                name="codigo"
                                value={data.codigo}
                                onChange={e => {setData('codigo', e.target.value); clearErrors('codigo')}}
                                className="h-10 w-full border border-background text-sm"
                                placeholder="Codigo da entrega"
                            />
                            {errors.codigo && (
                                <p className="text-red-500 text-xs">{errors.codigo}</p>
                            )}
                        </div>

                        <div>
                            <Label>Cliente</Label>
                            <Input
                                id="cliente"
                                name="cliente"
                                value={data.cliente}
                                onChange={e => {setData('cliente', e.target.value); clearErrors('cliente')}}
                                className="h-10 w-full border border-background text-sm"
                                placeholder="Nome do cliente"
                            />
                            {errors.cliente && (
                                <p className="text-red-500 text-xs">{errors.cliente}</p>
                            )}
                        </div>
                        <div>
                            <Label>Previsao de Entrega</Label>

                            <DatePickerInput
                                value={data.previsao || undefined}
                                onChange={(date) => {
                                    setData('previsao', date || null)
                                    clearErrors('previsao')
                                }}/>

                            {errors.previsao && (
                                <p className="text-red-500 text-xs">{errors.previsao}</p>
                            )}
                        </div>
                        <div>
                            <Label>Endereco</Label>
                            <Input
                                type="text"
                                id="endereco"
                                name="endereco"
                                className="h-10 w-full border border-background text-sm"
                                placeholder="Endereco de entrega"
                                value={data.endereco}
                                onChange={e => {setData('endereco', e.target.value); clearErrors('endereco')

                                }}
                            />
                            {errors.endereco && (
                                <p className="text-red-500 text-xs">{errors.endereco}</p>
                            )}

                            <Input
                                className="hidden"
                                id="status"
                                name="status"
                                value={data.status}
                            />
                        </div>
                    </section>
                    <section className="px-6 py-2">
                        <Button
                            variant="primary"
                            className="h-10"
                            type="submit"
                            disabled={processing}
                        >
                            {processing && <Spinner />}
                            Criar
                        </Button>
                    </section>
                </form>
            </DialogContent>
        </Dialog>

    )

}


