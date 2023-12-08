'use client';

import { Box, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export const NavItem = ({ title, href='/' }) => {
    const path = usePathname();

    return (
        <Link as={NextLink} href={href} className='hover:no-underline' >
            <Box
                p={{md:'0 2.75em'}}
                fontSize={{md:'0.875em'}}
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