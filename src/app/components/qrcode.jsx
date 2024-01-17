import { Image, Box, Flex, Text } from '@chakra-ui/react'

export const Qrcode = () => {
    return (
        <Box
            bg={{base:'pink.light'}}
            p={{base:'1rem 0'}}
        >
            <Text
                fontStyle={{base:'italic'}}
                fontWeight={{base:'500'}}
                fontSize={{base:'1.5em', md:'1.375rem', lg:'1.5rem', xl:'1.6875rem'}}
                textAlign={{base:'center'}}
                mx={{base:'0.5em', md:'auto'}}
            >
                Ươm mầm cho cuộc sống hôn nhân của Dâu Rể tại đây nè
            </Text>
            <Flex
                justifyContent={{base:'center'}}
                alignItems={{base:'center'}}
                pt={{base:'1em', sm:'0.5rem'}}
                flexDir={{base:'column', sm:'row'}}
            >
                {
                    ([{
                        id: 1,
                        bank: 'Techcombank',
                        name: 'LUONG MINH NGOC',
                        number: '1903 6239 9140 18'
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
                            m={{base:'1em', sm:'1rem 0.5rem', md:'1em', lg:'1em 1.5em', xl:'1em 2em'}}
                            w={{base:'100%', sm:'48%', md:'40%', lg:'30%'}}
                            textAlign={{base:'center'}}
                        >
                            <Image
                                src={`/images/bank${item.id}.png`}
                                alt={`${item.bank}`}
                                w={{base:'30%', sm:'5em', md:'6em', xl:'25%'}}
                                h={{base:'auto', sm:'3rem', md:'4.5em'}}
                                m={{base:'auto'}}
                                p={{base:'0 0 0.75em'}}
                                objectFit={{base:'contain'}}
                            />

                            <Image
                                src={`/images/qrcode${item.id}.jpg`}
                                alt={`QR-Code-${item.bank}`}
                                w={{base:'11em', sm:'9em', md:'10em', xl:'45%'}}
                                m={{base:'auto'}}
                                p={{base:'0'}}
                            />

                            <Text
                                fontWeight={{base:'500'}}
                                fontSize={{base:'1.125em', sm:'1rem', md:'1.125rem'}}
                                pt={{base:'0.75em'}}
                            >
                                {item.name}
                            </Text>
                            <Text
                                fontSize={{base:'1rem'}}
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