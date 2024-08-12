'use client'
import Image from 'next/image';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import Loading from "../components/LoadingDots";
import React, {Suspense} from 'react';

import './css/home.css';
import './css/globals.css';

export default function RootLayout({children}: {
    children: React.ReactNode,
}) {
    const pathname = usePathname();

    const routes = [
        {path: '/', icon: '/assets/home.svg', alt: 'home'},
        {path: '/profile', icon: '/assets/profile.svg', alt: 'profile'},
        {path: '/folder', icon: '/assets/folder.svg', alt: 'folder'},
        {path: '/news', icon: '/assets/book.svg', alt: 'book'},
        {path: '/contact', icon: '/assets/email.svg', alt: 'email'},
    ];

    return (
        <html lang="pt-br">
        <body className="bg-[#2A2E35] text-lg text-zinc-300 font-firaCode">
        <Suspense fallback={<Loading/>}>
            {children}
        </Suspense>
        <div className="controls">
            {routes.map((route) => (
                <Link href={route.path} key={route.path}>
                    <div
                        className={`control ${pathname === route.path ? 'active' : ''}`}
                    >
                        <Image
                            src={route.icon}
                            alt={route.alt}
                            width={24}
                            height={24}
                        />
                    </div>
                </Link>
            ))}
        </div>
        </body>
        </html>
    );
}