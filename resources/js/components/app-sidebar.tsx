import { usePage } from '@inertiajs/react';
import { House,Package,FileSpreadsheet,Settings } from 'lucide-react';

import AppLogo from './app-logo';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,

} from '@/components/ui/sidebar';
import { dashboard, entregas, relatorios } from '@/routes';
import { edit } from '@/routes/profile';
import type { NavItem } from '@/types';



const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: House,
        role: ['admin', 'vendedor']
    },
    {
        title: 'Entregas',
        href: entregas(),
        icon: Package,
        role: ['admin', 'vendedor']
    },
    {
        title: 'Relatorios',
        href: relatorios(),
        icon: FileSpreadsheet,
        role: ['admin']
    },
    {
        title: 'Configuracoes',
        href: edit(),
        icon: Settings,
        role: ['admin', 'vendedor']
    },
];

type User = {
    id: number;
    name: string;
    email: string;
    role: string;
};

type PageProps = {
    auth: {
        user: User | null;
        role: string ;
    };
};

export function AppSidebar() {

    // const { auth } = usePage<PageProps>().props;
    //
    // const filteredNavItems = mainNavItems.filter(item =>
    //     item.role?.includes(auth.role || '')
    // );


    return (
        <Sidebar collapsible="icon" variant="inset" className="bg-login-bg p-0">
            <SidebarHeader className="flex items-center justify-center">
                <AppLogo />
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
