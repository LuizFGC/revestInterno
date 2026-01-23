import AppLogoIcon from '@/components/app-logo-icon';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { home } from '@/routes';
import { Link } from '@inertiajs/react';
import type { PropsWithChildren } from 'react';

export default function AuthCardLayout({
    children,
    title,
    description,
}: PropsWithChildren<{
    name?: string;
    title?: string;
    description?: string;
}>) {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-login-bg p-6 md:p-10">
            <div className="flex w-full max-w-md flex-col gap-6">


                        <div className="flex justify-center mt-0  ">
                        <AppLogoIcon className="2xl:w-[158px] 2xl:h-[158px]  w-[80pxpx] h-[93px]  " />
                        </div>

                    <div className="flex flex-col items-center justify-center gap-6">
                    <Card className="rounded-xl bg-transparent border-login-card-border 2xl:w-[508px] 2xl:h-[596px] w-[408px] h-[396px] ">
                        <CardHeader className="2xl:px-10 2xl:pt-8 2xl:pb-0 text-center">
                            <CardTitle className="2xl:text-2xl text-xl font-sans">{title}</CardTitle>
                            <CardDescription className="text-login-card-border 2xl:text-sm text-xs">{description}</CardDescription>
                        </CardHeader>
                        <CardContent className="px-10 ">
                            {children}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
