import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import { AppSidebar } from '@/components/app-sidebar';
import { AppSidebarHeader } from '@/components/app-sidebar-header';


export default function AppSidebarLayout({
    children,
    title,
    date,
}: {
    children: React.ReactNode;
    title: string;
    date: Date
}) {
    return (
        <AppShell variant="sidebar">
            <AppSidebar />
            <AppContent variant="sidebar" className="overflow-x-hidden">
                <AppSidebarHeader title={title} date={date} />
                {children}
            </AppContent>
        </AppShell>
    );
}
