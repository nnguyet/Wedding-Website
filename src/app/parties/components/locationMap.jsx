'use client';

import { Box, Flex } from '@chakra-ui/react'
import { Info } from './info';

export const LocationMap = () => {
    return (
        <Flex
            w={{basse:'90%', md:'80%', lg:'70%'}}
            m={{base:'1.5em auto'}}
            justifyContent={{base:'space-around', md:'center'}}
            alignItems={{base:'center'}}
            flexDir={{base:'column', md:'row'}}
        >
            <Box
                w={{base:'100%', md:'22rem', lg:'25rem', xl:'32rem'}}
                mx={{base:'0', md:'2%', lg:'1%'}}
            >
                <Info place='Vũng Tàu' time='17:30 | Thứ Tư – 17.01.2024' hall='Sảnh Diamond - Aroma Center' address='119 Hoàng Hoa Thám, P. Thắng Tam,' city='TP. Vũng Tàu' />
                <Box
                    p={{base:'0 1em', md:'0.5em'}}
                    w={{base:'85%', md:'21em', lg:'22em'}}
                    m={{base:'auto'}}
                >
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.033427941641!2d107.08260717411639!3d10.339209967107976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31756ff6b6411cdd%3A0xa7040a8de32b73ed!2zVHJ1bmcgdMOibSBUaeG7h2MgY8aw4bubaSAmIEjhu5lpIG5naOG7iyBBUk9NQSBDRU5URVI!5e0!3m2!1svi!2s!4v1702745322353!5m2!1svi!2s" width="100%" height="230" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </Box>
            </Box>

            <Box
                w={{base:'100%', md:'22rem', lg:'25rem', xl:'32rem'}}
                mx={{base:'0', md:'2%', lg:'1%'}}
                pt={{base:'2.5em', md:'0'}}
            >
                <Info place='TP. HCM' time='17:30 | Thứ Bảy – 20.01.2024' hall='Sảnh Titan 1 - Pavillon Tân Sơn Nhất' address='202 Hoàng Văn Thụ, P.9, Q. Phú Nhuận,' city='TP. HCM' />
                <Box
                    p={{base:'0 1em', md:'0.5em'}}
                    w={{base:'85%', md:'21em', lg:'22em'}}
                    m={{base:'auto'}}
                >
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15676.538855086552!2d106.6708459!3d10.8009928!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752928af1513fb%3A0xd2651b40d27136ec!2zTmjDoCBIw6BuZyBQYXZpbGxvbg!5e0!3m2!1svi!2s!4v1702745079858!5m2!1svi!2s" width="100%" height="230"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </Box>
            </Box>
        </Flex>

    )
}