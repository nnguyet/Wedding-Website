// These styles apply to every route in the application
import './globals.css';
import { Providers } from "./providers";
import { Analytics } from '@vercel/analytics/react';
import { WindSong, Lobster } from "next/font/google";
 
const windSong = WindSong({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400'],
    variable: '--font-windsong'
});

const lobster = Lobster({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400'],
    variable: '--font-lobster'
});

export const metadata = {
  title: 'Việt Ngọc Wedding',
  description: 'This is Việt Ngọc Wedding website',
}
 
export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${windSong.variable} ${lobster.variable}`}>
            <body>
                <Providers>
                    {children}
                    <Analytics />
                </Providers>
            </body>
        </html>
    )
}