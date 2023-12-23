import { Image, Flex, Text, Heading, Box } from '@chakra-ui/react'
import { Navigation } from './navigation'

export const Title = () => {
    return (
        <Flex
            alignItems={{base:'center'}}
            justifyContent={{base:'center'}}
            flexDir={{base:'column'}}
            pb={{md:'1em'}}
            mt={{base:'0.5em', md:'1.2em'}}
            // mr={{base:'0', md:'1.5em'}}
        >
            <Heading
                display={{base:'flex'}}
                justifyContent={{base:'center'}}
                alignItems={{base:'center'}}
                className='font-windsong'
                color={{base:'white'}}
                fontWeight={{base:'400'}}
                fontSize={{base:'1.6em', sm:'2em', md:'2.25em'}}
                ml={{base:'0', sm:'0.2em', md:'0'}}
            >
                <Text
                    mr={{base:'0.65em', md:'0.75em'}}
                    textAlign={{base:'center'}}
                >
                    Thành Việt
                </Text>
                <Image
                    src='/images/love.png'
                    alt='love'
                    w={{base:'0.8em', md:'26px'}}
                    mr={{base:'0.15em', md:'0.35em'}}
                    filter={{base:'invert(100%)'}}
                />
                <Text
                    textAlign={{base:'center'}}
                >
                    Minh Ngọc
                </Text>
            </Heading>
            <Navigation />
        </Flex>
    )
}