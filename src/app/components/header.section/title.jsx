import { Image, Box, Text, Heading } from '@chakra-ui/react'

export const Title = () => {
    return (
        <Box
            alignItems={{base:'center'}}
            justifyContent={{base:'center'}}
            pt={{md:'2em'}}
            pb={{md:'1em'}}
        >
            <Heading
                display={{base:'flex'}}
                justifyContent={{base:'center'}}
                alignItems={{base:'center'}}
            >
                <Text>
                    Thành Việt
                </Text>
                <Image
                    src='/images/love.png'
                    alt='love'
                    w={{base:'26px'}}
                    mx={{base:'16px'}}
                />
                <Text>
                    Minh Ngọc
                </Text>
            </Heading>
            <Text
                textAlign={{base:'center'}}
                fontSize={{base:'26px'}}
            >
                You{`'`}re my serendipity
            </Text>
        </Box>
    )
}