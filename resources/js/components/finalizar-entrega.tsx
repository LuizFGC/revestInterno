import {
    Popover,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
} from '@/components/ui/popover';
import { Icon } from '@/components/ui/icon';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { Input } from '@/components/ui/input';
import { useForm } from '@inertiajs/react';

interface FinalizarEntregaProps{

    codigo: number;
}


export default function FinalizarEntrega({codigo}:FinalizarEntregaProps){

    const { data, patch, processing, reset, } = useForm({

        codigo: codigo,
        status: 'Entregue'
    })



    function handleFinalizarEntrega(e: React.FormEvent){
        e.preventDefault()
        patch('/entregas/finalizar', {

            onSuccess: () => {
                reset()
            }
        })

    }

    return(
        <Popover>
            <PopoverTrigger>
                <Icon
                    iconNode={Check}
                    className="hover:text-Entregue size-4 cursor-pointer"
                />
            </PopoverTrigger>
            <PopoverContent className="rounded-xl border-background bg-white text-black">
                <PopoverHeader>
                    Finalizar
                    entrega ?
                </PopoverHeader>
                <form onSubmit={handleFinalizarEntrega}>
                    <div className="flex gap-2">
                        <Button  type='submit' disabled={processing}>
                            {processing && <Spinner />}
                            Finalizar
                        </Button>
                    </div>
                    <Input className="hidden"
                           name='status'
                           id='status'
                           value={data.status}
                    />
                    <Input className="hidden"
                           name='codigo'
                           id='codigo'
                           value={data.codigo}
                    />
                </form>
            </PopoverContent>
        </Popover>
    )
}
