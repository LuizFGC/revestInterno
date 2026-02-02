import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';


export default function EmDesenvolvimento() {
    return (
        <AppLayout title="Relatorios" >
            <Head title="Relatorios" />

            <div className="flex h-screen items-center justify-center overflow-hidden">
                <div className="text-center">
                    <h1 className="text-3xl text-black font-bold mb-2">🚧 Em desenvolvimento</h1>
                    <p className="text-black">
                        Esta funcionalidade ainda está sendo construída.
                    </p>
                </div>
            </div>

        </AppLayout>

    )
}
