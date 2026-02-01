import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog';
import { Icon } from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from '@inertiajs/react';
import { Spinner } from '@/components/ui/spinner';

interface CancelarEntregaProps{

    codigo: number;
    status: string;
}


export default function CancelarEntrega({codigo, status}:CancelarEntregaProps){

    const { data, setData, patch, processing, errors, reset, clearErrors } = useForm({

        codigo: codigo,
        motivo: '',
        status: 'Cancelado'
    })

    function handleCancelarEntrega(e: React.FormEvent){
        e.preventDefault()

        patch('/entregas/cancelar', {

            onSuccess: () => {
                reset()
            }
        })


    }

    return (
        <Dialog>
            <DialogTrigger
                hidden={status == 'Cancelado' || status == 'Entregue'}
            >
                <Icon
                    iconNode={X}
                    className="size-4 cursor-pointer hover:text-Cancelado"
                />
            </DialogTrigger>
            <DialogContent className="rounded-xl border-none p-0">
                <DialogHeader className="flex flex-row items-center justify-between px-4 py-2 pb-0 text-black">
                    Cancelar Entrega
                    <DialogClose>
                        <Icon iconNode={X} className="size-4 cursor-pointer" />
                    </DialogClose>
                </DialogHeader>

                <form
                    onSubmit={handleCancelarEntrega}
                    className="rounded-b-xl bg-sidebar-bg"
                >
                    <section className="w-full">
                        <div className="flex w-full flex-col gap-3 px-6 pt-2 text-center">
                            <Label>Motivo do cancelamento</Label>
                            <Input
                                id="motivo"
                                name="motivo"
                                value={data.motivo}
                                onChange={(e) => {
                                    setData('motivo', e.target.value);
                                    clearErrors('motivo');
                                }}
                                className="h-10 w-full border border-background bg-white text-sm text-black"
                                placeholder="Motivo"
                            />
                            {errors.motivo && (
                                <p className="text-xs text-red-500">
                                    {errors.motivo}
                                </p>
                            )}

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
                        </div>
                    </section>
                    <section className="px-6 pb-2">
                        <Button
                            className="h-10 hover:bg-bg-button-1/50"
                            disabled={processing}
                            type="submit"
                        >
                            {processing && <Spinner />}
                            Cancelar
                        </Button>
                    </section>
                </form>
            </DialogContent>
        </Dialog>
    );
}
