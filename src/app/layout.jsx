// These styles apply to every route in the application
import './globals.css';
import { Providers } from "./providers";
import { Box } from '@chakra-ui/react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Ephesis, Nunito, Corinthia  } from "next/font/google";
import { Header, Footer } from "./components";

const ephesis = Ephesis({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400'],
    variable: '--font-ephesis'
});

const nunito = Nunito({
    subsets: ['latin'],
    variable: '--font-nunito'
});

const corinthia = Corinthia({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400'],
    variable: '--font-corinthia'
});

export const metadata = {
  title: 'VietNgocWedding',
  description: 'Việt & Ngọc Wedding website',
}
 
export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${ephesis.variable} ${nunito.variable} ${corinthia.variable}`}>
            <body>
                <Providers>
                    <Header />
                    <Box bg='pink.light' p={{base:'9.53125rem 0 0', sm:'10.65625rem 0 0', md:'7rem 0 0', '2xl':'7.9375rem 0 0'}} className='font-nunito'>
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