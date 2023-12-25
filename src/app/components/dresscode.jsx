import { Image, Flex, Box, Text } from '@chakra-ui/react'


export const Dresscode = () => {
    return (
        <Box
            textAlign={{base:'center'}}
            bg={'pink.light'}
            pb={{base:'2em'}}
        >
            <Text
                mx={'auto'}
                w={{base:'85%', md:'40em'}}
                fontSize={{base:'1.0625em', md:'1.125em', lg:'1.1875em'}}
            >
                Xin kính mời các khách quý đến trong khoảng giờ đón khách, để có thể cùng Việt & Ngọc lưu lại các hình ảnh kỷ niệm và dành thời gian trò chuyện trước tiệc cưới nhé!
            </Text>
            <Text
                mt={{base:'1.5em', lg:'2em'}}
                mb={{base:'1.5em'}}
                fontWeight={'600'}
                fontSize={{base:'1.125em', md:'1.25em', xl:'1.375em'}}
            >
                Dresscode Tone Pastel
            </Text>
            <Flex
                justifyContent={{base:'space-around', sm:'center'}}
                alignItems={{base:'center'}}
                flexWrap={{base:'wrap', md:'nowrap'}}
                px={{base:'0.5em'}}
            >
                {[1,2,3,4,5,6].map((item, index) => (
                    <Image
                        key={index}
                        src={`/dresscode/waxseal${item}.png`}
                        alt='wax-seal'
                        w={{base:'2.75em', sm:'3em', md:'3.25em', lg:'3.75em'}}
                        m={{base:'0', sm:'auto 0.5em', md:'auto 1em', lg:'auto 1.5em'}}
                    />
                ))}
            </Flex>
        </Box>
    )
}