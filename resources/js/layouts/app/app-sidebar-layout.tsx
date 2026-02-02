import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import { AppSidebar } from '@/components/app-sidebar';
import { AppSidebarHeader } from '@/components/app-sidebar-header';


export default function AppSidebarLayout({
    children,
    title,

}: {
    children: React.ReactNode;
    title: string;

}) {
    return (
        <AppShell variant="sidebar">
            <AppSidebar />
            <AppContent variant="sidebar" className={`overflow-x-hidden`}>
                <AppSidebarHeader title={title}  />
                {children}
            </AppContent>
        </AppShell>
    );
}
