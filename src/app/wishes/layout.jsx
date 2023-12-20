import React from "react"
import { Heading, Center, Flex, Button, Text, Show, Link } from '@chakra-ui/react'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faHouse } from '@fortawesome/free-solid-svg-icons'
import NextLink from 'next/link'


export default function WishesLayout({ children }) {
    return (
        <React.Fragment>
            {/* <Flex
                justifyContent={{base:'space-between'}}
                alignItems={{base:'center'}}
                m={{base:'24px 16px', md:'24px 48px'}}
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
                
                <Link as={NextLink} href='/photos' className='hover:no-underline'>
                    <Button
                        variant={{base:'ghost'}}
                        className='transition ease-in-out delay-50
                            hover:-translate-y-1 hover:scale-102'
                    >
                        <Show above="sm">
                            <Text
                                marginRight={{base:'6px'}}
                            >
                                Photos
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