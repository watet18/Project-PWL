import AppLogoIcon from '@/components/app-logo-icon';
import { Link } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';

interface AuthLayoutProps {
    name?: string;
    title?: string;
    description?: string;
}

export default function AuthSimpleLayout({ children, title, description }: PropsWithChildren<AuthLayoutProps>) {
    return (
        <div className="bg-black flex min-h-screen flex-col items-center justify-center gap-4 p-4 md:p-6">
            {/* Wrapper dengan border gradasi kuning-putih */}
            <div className="w-full max-w-sm rounded-2xl p-[2px] bg-gradient-to-r from-yellow-400 via-yellow-300 to-white shadow-lg">
                {/* Konten dalam dengan background hitam dan rounded agar gradasi terlihat sebagai border */}
                <div className="bg-black rounded-2xl flex flex-col gap-8 p-8">
                    <div className="flex flex-col items-center gap-4">
                        <Link href={route('home')} className="flex flex-col items-center gap-2 font-medium">
                            <div className="mb-1 flex items-center justify-center rounded-md">
                                <AppLogoIcon className="w-16 h-16" />
                            </div>
                            <span className="sr-only">{title}</span>
                        </Link>

                        <div className="space-y-2 text-center">
                            <h1 className="text-xl font-medium text-white">{title}</h1>
                            <p className="text-white text-center text-sm">{description}</p>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
