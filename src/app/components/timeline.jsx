import { Box, Text, Grid, GridItem, Link, Show, Hide } from '@chakra-ui/react'
import { Party } from './timeline.section'
import NextLink from 'next/link'

export const Timeline = () => {
    return (
        <Box
            bg={'pink.light'}
        >
            <Grid
                px={{base:'0', sm:'0.5em', md:'calc(0.3% + (100% - 48rem)/3)', lg:'5%', xl:'10%'}}
                py={{base:'1.5em'}}
                templateColumns={{base:'repeat(1, 1fr)', md:'repeat(3, 1fr)'}}
                gap={{base:'0.25em', md:'0.125em', lg:'0.5em'}}
            >
                <Party img='/images/img1.jpg' title='Lễ Gia Tiên' info='7:00 | Thứ Năm - 18.01.2024' place='Tại Tư gia'/>
                <Party img='/images/img1.jpg' title='Tiệc Vu Quy' info='17:30 | Thứ Tư - 17.01.2024' place='Sảnh Diamond - Aroma Center' address='119 Hoàng Hoa Thám, P. Thắng Tam,' city='TP. Vũng Tàu' margin='0.25em' pb='0.75em'/>
                <Party img='/images/img1.jpg' title='Tiệc Thành Hôn' info='17:30 | Thứ Bảy - 20.01.2024' place='Sảnh Titan 1 - Pavillon Tân Sơn Nhất' address='202 Hoàng Văn Thụ, P.9, Q. Phú Nhuận,' city='TP. HCM' />
                
                <GridItem
                    rowStart={{base:2}}
                    pb={{base:'1.5em', md:'0'}}
                    px={{base:'0', sm:'2em', md:'0'}}
                >
                    <Text
                        textAlign={{base:'center'}}
                        fontSize={{base:'1rem', md:'0.875em', lg:'1em', xl:'1.0625em'}}
                        fontWeight={{base:'300'}}
                        lineHeight={{base:'1.5em', md:'2.125em'}}
                        w={{base:'100%', sm:'24rem', md:'18em'}}
                        m={{base:'0 auto'}}
                        px={{base:'1.75rem', md:'0'}}
                    >
                        Nhà trai & nhà gái trân trọng thông báo tin vui về lễ thành hôn của con chúng tôi:
                        <br />
                        Được cử hành tại tư gia.
                        <br />
                        Lễ vu quy: 7:00
                        <br />
                        Lễ tân hôn: 11:00
                        <br />
                        Tiệc trưa thân mật hai gia đình: 12:00
                    </Text>
                </GridItem>
                <GridItem
                    colSpan={{base:1, md:2}}
                    textAlign={{base:'center'}}
                    fontSize={{base:'1rem', md:'0.875em', lg:'1em', xl:'1.0625em'}}
                    fontWeight={{base:'300'}}
                    lineHeight={{base:'1.5em', md:'2.125em'}}
                    pt={{base:'0.25em', md:'0'}}
                >
                    <Text
                        px={{base:'0', md:'2em'}}
                        minW={{base:'100%', sm:'27em', md:'50%'}}
                        maxW={{base:'100%', sm:'28em', md:'32em', xl:'37em'}}
                        m={{base:'0 auto'}}
                    >
                        Trân trọng kính mời/thân mời các khách quý{' '}
                        <Hide above='md'>
                            <br />
                        </Hide>
                        đến dự buổi tiệc tối mừng cưới thân mật{' '}
                        <Hide above='md'>
                            <br />
                        </Hide>
                        của Thành Việt & Minh Ngọc tại:
                    </Text>
                    <Text
                        px={{base:'0', md:'2em'}}
                        minW={{base:'100%', sm:'27em', md:'50%'}}
                        maxW={{base:'100%', sm:'28em', md:'32em', xl:'37em'}}
                        m={{base:'0 auto'}}
                        color={'yellow.gold'}
                        fontWeight={{base:'500'}}
                    >
                        VT - Aroma Center
                        <br />
                        TP. HCM - Pavillon Tân Sơn Nhất 
                    </Text>
                    <Text
                        px={{base:'1em', md:'2em'}}
                        minW={{base:'100%', sm:'27em', md:'50%'}}
                        maxW={{base:'100%', sm:'28em', md:'32em', xl:'37em'}}
                        m={{base:'0 auto'}}
                    >
                        Sự có mặt của Quý khách tại bữa tiệc là{' '}
                        <Hide above='md'>
                            <br />
                        </Hide>
                        niềm vinh hạnh{' '}
                        <Show above='md'>
                            <br />
                        </Show>
                        cho Việt, Ngọc cùng gia đình.
                    </Text>
                    <Link
                        as={NextLink}
                        href='/parties'
                        _hover={{
                            textDecoration:'none',
                        }}
                    >
                        <Box
                            m={{base:'1.5em auto 0', md:'1em auto 0'}}
                            borderRadius={{base:'1.5em'}}
                            fontSize={{base:'1em'}}
                            bg={'btn.dark'}
                            color={'white'}
                            w={{base:'10rem', md:'25%'}}
                            h={{base:'2em', md:'1.75em'}}
                            lineHeight={{base:'2em', md:'1.75em'}}
                            _hover={{
                                bg:'pink.dark',
                            }}
                            >
                                Xem thêm
                        </Box>
                    </Link>
                </GridItem>
            </Grid>
        </Box>
    )
}