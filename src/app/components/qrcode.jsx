import { Image, Box, Heading, Center, Flex, Text } from '@chakra-ui/react'

export const Qrcode = () => {
    return (
        <Box
            bg={{base:'pink.light'}}
            p={{base:'1.5em 0'}}
        >
            <Text
                fontStyle={{base:'italic'}}
                fontWeight={{base:'500'}}
                fontSize={{base:'1.5em', md:'1.75em'}}
                textAlign={{base:'center'}}
                mx={{base:'1em', md:'auto'}}
            >
                Ươm mầm cho cuộc sống hôn nhân của Dâu Rể tại đây nè
            </Text>
            <Flex
                justifyContent={{base:'center'}}
                alignItems={{base:'center'}}
                pt={{base:'1.5em', md:'2em'}}
                flexDir={{base:'column', sm:'row'}}
            >
                {
                    ([1,2].map((item, index) => (
                        <Box
                            key={index}
                            w={{base:'60%', sm:'10em', md:'12em'}}
                            m={{base:'1em', sm:'1em 7%', md:'1em 4em'}}
                        >
                            <Image
                                src={`/images/qrcode${item}.jpg`}
                                alt={`QR-Code-${item}`}
                                borderRadius={{base:'1em'}}
                                m={{base:'auto'}}
                                p={{base:'0'}}
                            />
                        </Box>
                    )
                    ))
                }
            </Flex>
        </Box>
    )
}