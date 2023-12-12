import { Heading, Box, Text, Grid, GridItem, Button, Link } from '@chakra-ui/react'
import { Party } from './timeline.section'
import NextLink from 'next/link'

export const Timeline = () => {
    return (
        <Box
            bg={'pink.light'}
        >
            <Grid
                px={{base:'2em', sm:'48px', md:'15%'}}
                py={{base:'2em'}}
                templateColumns={{base:'repeat(1, 1fr)', md:'repeat(3, 1fr)'}}
                gap={{base:'0.5em', md:'1em'}}
            >
                <Party img='/images/img1.jpg' title='Lễ Gia tiên' info='7:00 | Thứ Năm - 18.01.2024' place='Tại Tư gia'/>
                <Party img='/images/img1.jpg' title='Tiệc Vu Quy' info='17:30 | Thứ Tư - 17.01.2024' place='Sảnh Diamond - Aroma Center' address='119 Hoàng Hoa Thám, P. Thắng Tam, TP. Vũng Tàu' margin='0.25em'/>
                <Party img='/images/img1.jpg' title='Tiệc Thành hôn' info='17:30 | Thứ Bảy - 20.01.2024' place='Sảnh Titan 1 - Pavillon Tân Sơn Nhất' address='202 Hoàng Văn Thụ, P.9, Q. Phú Nhuận, TP. HCM' />
                <GridItem>
                    <Text
                        textAlign={{base:'center'}}
                        fontSize={{base:'1.25em', md:'0.875em'}}
                        fontWeight={{base:'300'}}
                        lineHeight={{base:'1.5em', md:'2.125em'}}
                    >
                        Nhà trai & nhà gái trân trọng thông báo
                        <br />
                        tin vui về lễ thành hôn của con chúng tôi:
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
                    fontSize={{base:'1.25em', md:'0.875em'}}
                    fontWeight={{base:'300'}}
                    lineHeight={{base:'1.5em', md:'2.125em'}}
                >
                    <Text>
                        Trân trọng kính mời/thân mời các khách quý đến dự
                        <br />
                        buổi tiệc tối mừng cưới thân mật của Thành Việt & Minh Ngọc tại:
                        <br />
                        VT: Aroma Center
                        <br />
                        SG: Pavillon Tân Sơn Nhất 
                        <br />
                        Sự có mặt của Quý khách tại bữa tiệc tối ấm cúng này
                        <br />
                        là niềm vinh hạnh cho Việt, Ngọc cùng gia đình
                    </Text>
                    <Link
                        as={NextLink}
                        href='/parties'
                        _hover={{
                            textDecoration:'none',
                        }}
                        >
                        <Box
                            m={{base:'0 auto', md:'1.5em auto 0'}}
                            borderRadius={{md:'1.5em'}}
                            fontSize={{base:'1em', md:'1em'}}
                            bg={'btn.dark'}
                            color={'white'}
                            w={{base:'60%', md:'25%'}}
                            h={{base:'2.5em', md:'1.75em'}}
                            lineHeight={{base:'1.5em', md:'1.75em'}}
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