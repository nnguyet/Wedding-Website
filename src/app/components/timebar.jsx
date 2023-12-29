import { Flex, Box, Text, Divider, Show, Center, Hide } from '@chakra-ui/react'
import { Time, VerticalLine } from './timebar.section'

export const Timebar = () => {
    return (
        <Box
            pt={{base:'2em', lg:'1.5rem'}}
            pb={{base:'1.75em', md:'8.5rem'}}
            bg={'pink.light'}
        >
            <Text
                fontWeight={{base:'600'}}
                fontStyle={{base:'italic'}}
                textAlign={{base:'center'}}
                fontSize={{base:'1.5rem', md:'1.375rem', lg:'1.5rem', xl:'1.6875rem'}}
            >
                Timeline Tiệc Cưới
            </Text>

            <Box
                position={{md:'relative'}}
                mt={{base:'0.5rem', md:'8em'}}
                mx={{base:'0.5em', md:'2em'}}
                >
                <Show above='md'>
                    <Box
                        position={{md:'relative'}}
                        >
                        <Center>
                            <Divider
                                borderColor={{base:'black'}}
                                w={{md:'60%'}}
                            />
                        </Center>
                        <Time
                            ico='/images/arch.svg'
                            title='Đón Khách'
                            message='Hãy đến sớm để có những tấm hình thật đẹp'
                            time='17:30'
                            bottom='calc(100% - 28px)'
                            left='2%'
                            margin='-0.25em'
                            />
                        <Time
                            ico='/images/ring.svg'
                            title='Lễ Cưới'
                            message='Giây phút Việt & Ngọc về chung một nhà'
                            time='18:30'
                            dir='column'
                            top='calc(100% - 28px)'
                            left='30%'
                            />
                        <Time
                            ico='/images/drink.svg'
                            title='Khai Tiệc'
                            message='Cùng nâng ly chúc mừng ngày đặc biệt'
                            time='19:00'
                            bottom='calc(100% - 28px)'
                            right='2%'
                            margin='-0.5em'
                            />
                    </Box>
                </Show>


                <Hide above='md'>
                    <Flex
                        position={{md:'absolute'}}
                        flexDir={{base:'column', md:'row'}}
                        bottom={{md:'calc(100% - 40px)'}}
                        justifyContent={{md:'space-between'}}
                    >
                        <Time
                            ico='/images/arch.svg'
                            title='Đón Khách'
                            message='Hãy đến sớm để có những tấm hình thật đẹp'
                            time='17:30'
                        />
                        <VerticalLine />
                        <Time
                            ico='/images/ring.svg'
                            title='Lễ Cưới'
                            message='Giây phút Việt & Ngọc về chung một nhà'
                            time='18:30'
                            dir='column'
                        />
                        <VerticalLine />
                        <Time
                            ico='/images/drink.svg'
                            title='Khai Tiệc'
                            message='Cùng nâng ly chúc mừng ngày đặc biệt'
                            time='19:00'
                            />
                    </Flex>
                </Hide>
            </Box>
        </Box>
    )
}