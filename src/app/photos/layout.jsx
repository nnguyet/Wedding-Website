import React from "react"
import { Heading, Center, Flex, Button, Text, Show, Link } from '@chakra-ui/react'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faHouse } from '@fortawesome/free-solid-svg-icons'
import NextLink from 'next/link'


export default function PhotosLayout({ children }) {
    return (
        <React.Fragment>
            {/* <Flex
                position={{base:'fixed'}}
                justifyContent={{base:'space-between'}}
                alignItems={{base:'center'}}
                p={{base:'12px 16px 10px', md:'16px 36px 16px'}}
                top={{base:'0'}}
                left={{base:'0'}}
                right={{base:'0'}}
                backgroundColor={{base:'white'}}
                zIndex={{base:'1'}}
            >
                <Link as={NextLink} href='/' className='hover:no-underline'>
                    <Button
                        variant={{base:'ghost'}}
                        className='transition ease-in-out delay-50
                            hover:-translate-y-1 hover:scale-102'
                    >
                        <FontAwesomeIcon icon={faHouse}/>
                        <Show above="sm">
                            <Text
                                marginLeft={{base:'6px'}}
                            >
                                Trang chủ
                            </Text>
                        </Show>
                    </Button>
                </Link>
                <Heading
                    as='h1'
                    textAlign={{base:'center'}}
                    justifySelf={{base:'center'}}
                >
                    Photos
                </Heading>
                <Link as={NextLink} href='/wishes' className='hover:no-underline'>
                    <Button
                        variant={{base:'ghost'}}
                        className='transition ease-in-out delay-50
                            hover:-translate-y-1 hover:scale-102'
                    >
                        <Show above="sm">
                            <Text
                                marginRight={{base:'6px'}}
                            >
                                Lời chúc
                            </Text>
                        </Show>
                        <FontAwesomeIcon icon={faChevronRight}/>
                    </Button>
                </Link>
            </Flex> */}
            <section>
                {children}
            </section>
        </React.Fragment>
    )
}