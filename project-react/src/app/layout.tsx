import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const dynamicParams = false;

export const metadata: Metadata = {
    title: 'My Store',
    description:
        'An ecommerce website built with React, Next.js, Tailwind CSS, & more.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={
                    inter.className +
                    ' bg-neutral-100 text-gray-700 dark:bg-neutral-700 dark:text-neutral-50'
                }
            >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
