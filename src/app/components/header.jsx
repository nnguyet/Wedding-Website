import { Flex } from '@chakra-ui/react'
import { Logo, Title, Music, Menu } from './header.section'

export const Header = () => {
    return (
        <Flex
            justifyContent={{base:'space-around', '2xl':'center'}}
            alignItems={{base:'center'}}
            bg={{base:'pink.dark'}}
            flexDir={{base:'column', md:'row'}}
            position={{base:'fixed'}}
            top={{base:'0'}}
            left={{base:'0'}}
            right={{base:'0'}}
            zIndex={{base:'2'}}
            px={{base:'0', md:'2em', lg:'10%', xl:'17%'}}
            className='font-nunito'
        >
            <Logo />
            <Title />
            <Music />
            <Menu />
        </Flex>
    )
}