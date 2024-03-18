'use client';

import { Box, Link, useDisclosure, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

export const SubNavItem = ({ title, href='/', subContent }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const path = usePathname();

    return (
        <Box
            p={{md:'0 2em'}}
            mx={{md:'0.5em'}}
            fontSize={{md:'0.875em', '2xl':'1rem'}}
            textAlign={{md:'center'}}
            color={path.includes(href) ? 'brown.default' : 'textColor.default'}
            _hover={{
                color:'brown.default',
                cursor:'pointer'
            }}
            position={'relative'}
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
        >
            {title}
            {
                path.includes('photos') ? null : (
                    <Box
                        display={isOpen?'block':'none'}
                        position={'absolute'}
                        top={'100%'}
                        right={{md:'-15%'}}
                        left={{md:'-15%'}}
                        zIndex={'2'}
                        bg={'yellow.light'}
                        mt={'0.5em'}
                        _before={{
                            content:'""',
                            position:'absolute',
                            right:'5%',
                            left:'5%',
                            bottom:'100%',
                            height:'0.5em',
                            bg:'transparent',
                        }}
                    >
                        {subContent.map((item, index) => (
                            <Link
                                as={NextLink}
                                href={`${href}/${item.query}`}
                                key={index}
                                _hover={{textDecoration:'none'}}
                                >
                                <Text
                                    p={{base:'0.5em'}}
                                    color={path.includes(item.query)?'brown.default':'textColor.default'}
                                    textAlign={'center'}
                                    _hover={{
                                        color:'brown.default',
                                    }}
                                    m={{md:'auto'}}
                                    maxW={{md:'7.25rem'}}
                                >
                                    {item.title}
                                </Text>
                            </Link>
                        ))}
                    </Box>
                )
            }
        </Box>
    )
}