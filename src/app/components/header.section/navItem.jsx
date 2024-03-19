'use client';

import { Box, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

export const NavItem = ({ title, href='/' }) => {
    const path = usePathname();

    return (
        <Link as={NextLink} href={href} _hover={{textDecor:'none'}} >
            <Box
                p={{md:'0 1em'}}
                fontSize={{md:'0.875em', '2xl':'1rem'}}
                textAlign={{md:'center'}}
                color={path === href ? 'brown.default' : 'textColor.default'}
                _hover={{
                    color:'brown.default'
                }}
                mx={{md:'0.5em'}}
            >
                {title}
            </Box>
        </Link>
    )
}