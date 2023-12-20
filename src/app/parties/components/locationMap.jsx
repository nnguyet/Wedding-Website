'use client';

import { Heading, Box, Text, Grid, GridItem, Button, Link, Flex } from '@chakra-ui/react'
import { Info } from './info';

export const LocationMap = () => {
    return (
        <Flex
            w={{base:'80%'}}
            m={{base:'1.5em auto', md:'3em auto'}}
            justifyContent={{base:'space-around'}}
            alignItems={{base:'center'}}
            flexDir={{base:'column', md:'row'}}
        >
            <Box
                // pt={{base:'0.5em', md:'0'}}
            >
                <Info place='Vũng Tàu' time='17:30 | Thứ Tư – 17.01.2024' hall='Sảnh Diamond - Aroma Center' address='119 Hoàng Hoa Thám, P. Thắng Tam, TP. Vũng Tàu' />
                <Box>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.033427941641!2d107.08260717411639!3d10.339209967107976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31756ff6b6411cdd%3A0xa7040a8de32b73ed!2zVHJ1bmcgdMOibSBUaeG7h2MgY8aw4bubaSAmIEjhu5lpIG5naOG7iyBBUk9NQSBDRU5URVI!5e0!3m2!1svi!2s!4v1702745322353!5m2!1svi!2s" width="400" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Box>
            </Box>
            <Box
                pt={{base:'2.5em', md:'0'}}
            >
                <Info place='TP. HCM' time='17:30 | Thứ Bảy – 20.01.2024' hall='Sảnh Titan 1 - Pavillon Tân Sơn Nhất' address='202 Hoàng Văn Thụ, P.9, Q. Phú Nhuận, TP. HCM' />
                <Box>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15676.538855086552!2d106.6708459!3d10.8009928!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752928af1513fb%3A0xd2651b40d27136ec!2zTmjDoCBIw6BuZyBQYXZpbGxvbg!5e0!3m2!1svi!2s!4v1702745079858!5m2!1svi!2s" width="400" height="250"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Box>
            </Box>
        </Flex>

    )
}