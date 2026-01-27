import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';


export default ({
    children,
    title,
    date,

    ...props
}: {
    children: React.ReactNode;
    title: string;
    date: Date
    className?: string;
}) => (
    <AppLayoutTemplate title={title}  date={date} {...props}>
        {children}
    </AppLayoutTemplate>
);
