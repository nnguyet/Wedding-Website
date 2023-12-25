// These styles apply to every route in the application
import './globals.css';
import { Providers } from "./providers";
import { Box } from '@chakra-ui/react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { WindSong, Lobster, Ephesis, Nunito  } from "next/font/google";
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

const ephesis = Ephesis({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400'],
    variable: '--font-ephesis'
});

const nunito = Nunito({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400'],
    variable: '--font-nunito'
});

export const metadata = {
  title: 'Việt Ngọc Wedding',
  description: 'This is Việt Ngọc Wedding website',
}
 
export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${windSong.variable} ${lobster.variable} ${ephesis.variable} ${nunito.variable}`}>
            <body>
                <Providers>
                    <Header />
                    <Box p={{base:'9.53125em 0 0', sm:'10.65625em 0 0', md:'7em 0 0'}} className='font-nunito'>
                        {children}
                    </Box>
                    <Footer />
                    <SpeedInsights />
                    <Analytics />
                </Providers>
            </body>
        </html>
    )
}