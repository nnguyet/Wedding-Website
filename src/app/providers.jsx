'use client';

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    colors: {
        pink: {
            light: '#FFFAF5',
            default: '#F7E9E8',
            dark: '#E3C5C1',
        },
        textColor: {
            default: '#645553',
        },
        gray: {
            default: '#E3D9D8',
        },
        brown: {
            default: '#A97069',
        },
        yellow: {
            light: '#EDE2D8',
        },
        btn: {
            dark: '#C7A9A5',
        }
    },
})

export function Providers({ children }) {
    return (
        <CacheProvider>
            <ChakraProvider theme={theme}>
                {children}
            </ChakraProvider>
        </CacheProvider>
    )
}