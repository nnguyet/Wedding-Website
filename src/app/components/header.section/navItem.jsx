'use client';

import { Box, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

export const NavItem = ({ title, href='/' }) => {
    const path = usePathname();

    return (
        <Link as={NextLink} href={href} className='hover:no-underline' >
            <Box
                p={{md:'0 2.5em'}}
                fontSize={{md:'0.875em'}}
                textAlign={{md:'center'}}
                color={path === href ? 'brown.default' : 'textColor.default'}
                _hover={{
                    color:'brown.default'
                }}
            >
                {title}
            </Box>
        </Link>
    )
}