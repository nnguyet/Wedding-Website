// These styles apply to every route in the application
import './globals.css';
import { Providers } from "./providers";
import { Box } from '@chakra-ui/react';
import { Analytics } from '@vercel/analytics/react';
import { WindSong, Lobster } from "next/font/google";
import { Header, Footer } from "./components";
 
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
                    <Header />
                    <Box p={{base:'8.875em 0 0', sm:'9.375em 0 0', md:'6.875em 0 0'}}>
                        {children}
                    </Box>
                    <Footer />
                    <Analytics />
                </Providers>
            </body>
        </html>
    )
}