import { Heading, Box, Text, Grid, GridItem, Button, Link, Show } from '@chakra-ui/react'
import { Party } from './timeline.section'
import NextLink from 'next/link'

export const Timeline = () => {
    return (
        <Box
            bg={'pink.light'}
        >
            <Grid
                px={{base:'1em', sm:'0.5em', md:'1%', lg:'5%', xl:'10%'}}
                py={{base:'2em'}}
                templateColumns={{base:'repeat(1, 1fr)', md:'repeat(3, 1fr)'}}
                gap={{base:'0.5em', md:'0.25em', lg:'0.5em'}}
            >
                <Party img='/images/img1.jpg' title='Lễ Gia tiên' info='7:00 | Thứ Năm - 18.01.2024' place='Tại Tư gia'/>
                <Party img='/images/img1.jpg' title='Tiệc Vu Quy' info='17:30 | Thứ Tư - 17.01.2024' place='Sảnh Diamond - Aroma Center' address='119 Hoàng Hoa Thám, P. Thắng Tam, TP. Vũng Tàu' margin='0.25em'/>
                <Party img='/images/img1.jpg' title='Tiệc Thành hôn' info='17:30 | Thứ Bảy - 20.01.2024' place='Sảnh Titan 1 - Pavillon Tân Sơn Nhất' address='202 Hoàng Văn Thụ, P.9, Q. Phú Nhuận, TP. HCM' />
                
                <GridItem
                    rowStart={{base:2}}
                    pb={{base:'1.5em', md:'0'}}
                    px={{base:'1em', sm:'2em', md:'0'}}
                >
                    <Text
                        textAlign={{base:'center'}}
                        fontSize={{base:'1.0625em', md:'0.875em', lg:'1em', xl:'1.125em'}}
                        fontWeight={{base:'300'}}
                        lineHeight={{base:'1.5em', md:'2.125em'}}
                        maxW={{base:'100%', sm:'20em', md:'20.5em'}}
                        m={{base:'0 auto'}}
                    >
                        Nhà trai & nhà gái trân trọng thông báo tin vui về lễ thành hôn của con chúng tôi:
                        <br />
                        Được cử hành tại tư gia.
                        <br />
                        Làm lễ rước dâu nhà gái: 7:00
                        <br />
                        Làm lễ thành hôn: 11:00
                        <br />
                        Tiệc trưa thân mật của hai gia đình: 12:00
                    </Text>
                </GridItem>
                <GridItem
                    colSpan={{base:1, md:2}}
                    textAlign={{base:'center'}}
                    fontSize={{base:'1.0625em', md:'0.875em', lg:'1em', xl:'1.125em'}}
                    fontWeight={{base:'300'}}
                    lineHeight={{base:'1.5em', md:'2.125em'}}
                    pt={{base:'0.25em', md:'0'}}
                >
                    <Text
                        px={{base:'0.25em', md:'2em'}}
                        minW={{base:'100%', sm:'27em', md:'50%'}}
                        maxW={{base:'100%', sm:'28em', md:'32em', xl:'37em'}}
                        m={{base:'0 auto'}}
                    >
                        Trân trọng kính mời/thân mời các khách quý đến dự buổi tiệc tối mừng cưới thân mật của Thành Việt & Minh Ngọc tại:
                        <br />
                        VT: Aroma Center
                        <br />
                        SG: Pavillon Tân Sơn Nhất 
                        <br />
                        Sự có mặt của Quý khách tại bữa tiệc tối ấm cúng này là niềm vinh hạnh cho Việt, Ngọc cùng gia đình
                    </Text>
                    <Link
                        as={NextLink}
                        href='/parties'
                        _hover={{
                            textDecoration:'none',
                        }}
                    >
                        <Box
                            m={{base:'1.5em auto 0', md:'1.5em auto 0'}}
                            borderRadius={{base:'1.5em'}}
                            fontSize={{base:'1em'}}
                            bg={'btn.dark'}
                            color={'white'}
                            w={{base:'60%', md:'25%'}}
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