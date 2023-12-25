import { Image, Flex, Text } from '@chakra-ui/react'
import { Navigation } from './navigation'

export const Title = () => {
    return (
        <Flex
            alignItems={{base:'center'}}
            justifyContent={{base:'center'}}
            flexDir={{base:'column'}}
            pb={{md:'0.75em'}}
            mt={{base:'0', md:'0.25em'}}
        >
            <Flex
                justifyContent={{base:'center'}}
                alignItems={{base:'center'}}
                className='font-ephesis'
                color={{base:'white'}}
                fontWeight={{base:'400'}}
                fontSize={{base:'2.125em', sm:'2.875em', md:'3em'}}
                ml={{base:'0', sm:'0.2em', md:'0'}}
            >
                <Text
                    textAlign={{base:'center'}}
                >
                    Thành Việt
                </Text>
                <Image
                    src='/images/love.png'
                    alt='love'
                    w={{base:'0.6em', sm:'0.675em', md:'1.75rem'}}
                    filter={{base:'invert(100%)'}}
                    mr={{base:'0.25em', md:'0.35em'}}
                    ml={{base:'0.325em', md:'0.4em'}}
                />
                <Text
                    textAlign={{base:'center'}}
                >
                    Minh Ngọc
                </Text>
            </Flex>
            <Navigation />
        </Flex>
    )
}