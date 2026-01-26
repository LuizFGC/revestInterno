import { House,Package,FileSpreadsheet,Settings } from 'lucide-react';

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

import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: House,
    },
    {
        title: 'Entregas',
        href: entregas(),
        icon: Package,
    },
    {
        title: 'Relatorios',
        href: relatorios(),
        icon: FileSpreadsheet,
    },
    {
        title: 'Configuracoes',
        href: edit(),
        icon: Settings,
    },
];



export function AppSidebar() {
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
