import { Flex } from '@chakra-ui/react'
import { Logo, Title, Music } from './header.section'

export const Header = () => {
    return (
        <Flex
            justifyContent={{base:'center'}}
            align={{base:'center'}}
            bg={{base:'pink.dark'}}
        >
            <Logo />
            <Title />
            <Music />
        </Flex>
    )
}