import { Image, Flex, Text, Heading, Box } from '@chakra-ui/react'

export const Title = () => {
    return (
        <Flex
            alignItems={{base:'center'}}
            justifyContent={{base:'center'}}
            flexDir={{base:'column'}}
            pt={{md:'1.5em'}}
            pb={{md:'1em'}}
        >
            <Heading
                display={{base:'flex'}}
                justifyContent={{base:'center'}}
                alignItems={{base:'center'}}
                className='font-windsong'
                color={{base:'white'}}
                fontWeight={{base:'400'}}
            >
                <Text
                    mr={{base:'16px'}}
                >
                    Thành Việt
                </Text>
                <Image
                    src='/images/love.png'
                    alt='love'
                    w={{base:'26px'}}
                    mx={{base:'12px'}}
                    filter={{base:'invert(100%)'}}
                />
                <Text>
                    Minh Ngọc
                </Text>
            </Heading>
            <Box
                borderRadius={{base:'1.5em'}}
                bg={{base:'pink.default'}}
                padding={{base:'0.25em 2.5em 0.28em'}}
                mt={{base:'0.5em'}}
            >
                <Text
                    textAlign={{base:'center'}}
                    fontSize={{base:'1.5em'}}
                    className='font-lobster'
                >
                    You{`'`}re my serendipity
                </Text>
            </Box>
        </Flex>
    )
}