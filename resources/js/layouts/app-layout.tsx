import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';


export default ({
    children,
    title,

    ...props
}: {
    children: React.ReactNode;
    title: string;
    className?: string;
}) => (
    <AppLayoutTemplate title={title}  {...props}>
        {children}
    </AppLayoutTemplate>
);
