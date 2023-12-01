// These styles apply to every route in the application
import './globals.css'
import { Providers } from "./providers"
import { Analytics } from '@vercel/analytics/react';
 
export const metadata = {
  title: 'Việt Ngọc Wedding',
  description: 'This is Việt Ngọc Wedding website',
}
 
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    {children}
                    <Analytics />
                </Providers>
            </body>
        </html>
    )
}