import { Flex } from '@chakra-ui/react'
import { Logo, Title, Music, Menu } from './header.section'

export const Header = () => {
    return (
        <Flex
            justifyContent={{base:'center'}}
            alignItems={{base:'center'}}
            bg={{base:'pink.dark'}}
            flexDir={{base:'column', md:'row'}}
            position={{base:'fixed'}}
            top={{base:'0'}}
            left={{base:'0'}}
            right={{base:'0'}}
            zIndex={{base:'2'}}
        >
            <Logo />
            <Title />
            <Music />
            <Menu />
        </Flex>
    )
}