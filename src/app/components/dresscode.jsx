import { Image, Flex, Heading, Box, Text, Divider, Show, Center, Hide } from '@chakra-ui/react'


export const Dresscode = () => {
    return (
        <Box
            textAlign={{base:'center'}}
            bg={'pink.light'}
            pb={{base:'2em'}}
        >
            <Text
                // px={{base:'1.5em', sm:'2em', md:'5em', lg:'11em'}}
                mx={'auto'}
                w={{base:'80%', md:'40em'}}
            >
                Xin kính mời các khách quý đến trong khoảng giờ đón khách, để có thể cùng Việt & Ngọc lưu lại các hình ảnh kỷ niệm và dành thời gian trò chuyện trước tiệc cưới nhé!
            </Text>
            <Text
                mt={{base:'1em'}}
                mb={{base:'2em'}}
            >
                Dresscode Tone Pastel
            </Text>
            <Flex
                justifyContent={{base:'space-around', sm:'center'}}
                alignItems={{base:'center'}}
                flexWrap={{base:'wrap', md:'nowrap'}}
                px={{base:'0.5em'}}
                // pt={{base:'1em'}}
            >
                {[1,2,3,4,5,6].map((item, index) => (
                    <Image
                        key={index}
                        src={`/images/waxseal${item}.png`}
                        alt='wax-seal'
                        w={{base:'2.75em', sm:'3em', md:'4em', lg:'4.5em'}}
                        m={{base:'0', sm:'auto 0.5em', md:'auto 1em', lg:'auto 1.5em'}}
                    />
                ))}
            </Flex>
        </Box>
    )
}