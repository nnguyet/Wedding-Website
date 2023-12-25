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
                pt={{base:'1em'}}
                flexDir={{base:'column', sm:'row'}}
            >
                {
                    ([{
                        id: 1,
                        bank: 'Techcombank',
                        name: 'LUONG MINH NGOC',
                        number: '1903 6239 9140 19'
                    },
                    {
                        id: 2,
                        bank: 'Vietcombank',
                        name: 'PHAN NGUYEN THANH VIET',
                        number: '0421 000 535 750'
                    }].map((item, index) => (
                        <Flex
                            key={index}
                            flexDir={{base:'column'}}
                            justifyContent={{base:'center'}}
                            alignItems={{base:'center'}}
                            m={{base:'1em', sm:'1em 7%', md:'1em 4em', lg:'1em 5em', xl:'1em 5.5em'}}
                            textAlign={{base:'center'}}
                        >
                            <Image
                                src={`/images/bank${item.id}.png`}
                                alt={`${item.bank}`}
                                w={{base:'40%', sm:'5em', md:'7em'}}
                                h={{base:'auto', md:'4.5em'}}
                                m={{base:'auto'}}
                                p={{base:'0 0 0.75em'}}
                                objectFit={{base:'contain'}}
                            />

                            <Image
                                src={`/images/qrcode${item.id}.jpg`}
                                alt={`QR-Code-${item.bank}`}
                                w={{base:'60%', sm:'10em', md:'12em'}}
                                m={{base:'auto'}}
                                p={{base:'0'}}
                            />

                            <Text
                                fontWeight={{base:'500'}}
                                fontSize={{base:'1.125em', md:'1.25em'}}
                                pt={{base:'0.75em'}}
                            >
                                {item.name}
                            </Text>
                            <Text
                                fontSize={{base:'1em', md:'1.125em'}}
                            >
                                {item.number}
                            </Text>
                        </Flex>
                    )
                    ))
                }
            </Flex>
        </Box>
    )
}