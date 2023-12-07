import { Image, Flex, Text, Heading, Box } from '@chakra-ui/react'

export const Title = () => {
    return (
        <Flex
            alignItems={{base:'center'}}
            justifyContent={{base:'center'}}
            flexDir={{base:'column'}}
            pb={{md:'1em'}}
            mt={{base:'0.5em', md:'1.2em'}}
            mr={{base:'0', md:'1.5em'}}
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
            {/* <Box
                borderRadius={{base:'1.5em'}}
                bg={{base:'pink.default'}}
                padding={{base:'0.1em 1em 0.2em 1em', md:'0.25em 2.5em 0.28em'}}
                mt={{base:'0.5em', sm:'0.3em', md:'0.5em'}}
            >
                <Text
                    textAlign={{base:'center'}}
                    fontSize={{base:'1.25em', sm:'1.4em', md:'1.5em'}}
                    className='font-lobster'
                >
                    You{`'`}re my serendipity
                </Text>
            </Box> */}
        </Flex>
    )
}