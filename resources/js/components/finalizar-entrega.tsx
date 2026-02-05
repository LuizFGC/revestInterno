import { useForm } from '@inertiajs/react';
import { Check } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import {
    Popover,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
} from '@/components/ui/popover';
import { Spinner } from '@/components/ui/spinner';

interface FinalizarEntregaProps{

    codigo: number;
    status: string;
    user: string;
}


export default function FinalizarEntrega({codigo, status, user}:FinalizarEntregaProps){
    console.log(user)
    const [open, setOpen] = useState(false)

    const { data, patch, processing, reset,errors } = useForm({

        codigo: codigo,
        status: 'Entregue'
    })



    function handleFinalizarEntrega(e: React.FormEvent){
        e.preventDefault()
        patch('/entregas/finalizar', {

            onSuccess: () => {
                setOpen(false)
                toast.success('Entrega finalizada com sucesso!')
                reset()
            }, onError: () => {

                toast.error(errors.status)
            }
        })

    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger
                hidden={ user != 'admin' || status == 'Cancelado' || status == 'Entregue'}
            >
                <Icon
                    iconNode={Check}
                    className="size-4 cursor-pointer hover:text-Entregue"
                />
            </PopoverTrigger>
            <PopoverContent className="rounded-xl border-background bg-white text-black">
                <PopoverHeader>Finalizar entrega ?</PopoverHeader>
                <form onSubmit={handleFinalizarEntrega}>
                    <div className="flex gap-2">
                        <Button type="submit" disabled={processing}>
                            {processing && <Spinner />}
                            Finalizar
                        </Button>
                    </div>
                    <Input
                        className="hidden"
                        name="status"
                        id="status"
                        value={data.status}
                    />
                    <Input
                        className="hidden"
                        name="codigo"
                        id="codigo"
                        value={data.codigo}
                    />
                </form>
            </PopoverContent>
        </Popover>
    );
}
