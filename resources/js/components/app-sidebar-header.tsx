import { router } from '@inertiajs/react';
import type  { PropsWithChildren } from 'react';
import { CardTitle } from '@/components/ui/card';
import { DatePickerInput } from '@/components/ui/date-picker';
import { useData } from '@/contexts/DataContext';



export function AppSidebarHeader({ title} :PropsWithChildren<{
    title?:string
}>){

    const { dataSelecionada, setDataSelecionada } = useData();

    function handleSetDate(date: Date | undefined) {
        setDataSelecionada(date);

        // if (date) {
        //     router.post('dashboard/data', {
        //         data: date.toISOString()
        //     });
        // }


    }

    return (
        <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-white border-background px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4 ">
            <div className="flex items-start flex-col gap-1 ">
                <CardTitle className="text-black 2xl:text-2xl text-xl ">{title}</CardTitle>
                <CardTitle className="text-text-2 2xl:text-lg text-sm ">

                    <DatePickerInput className={"h-4 border-none pb-3 px-0 "} side={'bottom'} value={dataSelecionada} onChange={handleSetDate}/>

                </CardTitle>
            </div>
        </header>
    );
}

