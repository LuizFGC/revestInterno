import type { PropsWithChildren } from 'react';
import { CardTitle } from '@/components/ui/card';



export function AppSidebarHeader({ title, date}:PropsWithChildren<{
    title?:string
    date?: Date
}>){


    return (
        <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-white border-background px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4">
            <div className="flex items-start flex-col gap-1">
                <CardTitle className="text-black 2xl:text-2xl text-xl ">{title}</CardTitle>
                <CardTitle className="text-text-2 2xl:text-lg text-sm ">
                    {date &&
                        ` ${date.toLocaleDateString('pt-BR', {
                            weekday: 'long',
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                        })}`}
                </CardTitle>
            </div>
        </header>
    );
}

