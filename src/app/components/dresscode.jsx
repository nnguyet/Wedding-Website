import { Image, Flex, Box, Text, Hide, Show } from '@chakra-ui/react'


export const Dresscode = () => {
    return (
        <Box
            textAlign={{base:'center'}}
            bg={'pink.light'}
            pb={{base:'2em'}}
        >
            <Text
                mx={'auto'}
                w={{base:'100%', sm:'28rem', md:'40em'}}
                fontSize={{base:'1em', lg:'1.125rem', xl:'1.125rem'}}
            >
                Xin kính mời các khách quý đến trong khoảng{' '}
                <Show breakpoint='(min-width:20.25rem)'>
                    <Hide above='sm'>
                        <br />
                    </Hide>
                </Show>
                giờ đón khách, để có thể cùng{' '}
                <Show breakpoint='(max-width:20.125rem)'>
                    <Hide breakpoint='(max-width:16.75rem)'>
                        <br />
                    </Hide>
                </Show>
                Việt & Ngọc{' '}
                <Show breakpoint='(min-width:20.25rem)'>
                    <Hide above='sm'>
                        <br />
                    </Hide>
                </Show>
                lưu lại các hình ảnh kỷ niệm và dành thời gian{' '}
                <Show breakpoint='(min-width:20.25rem)'>
                    <Hide above='sm'>
                        <br />
                    </Hide>
                </Show>
                trò chuyện trước tiệc cưới nhé!
            </Text>
            <Text
                mt={{base:'1.5em'}}
                mb={{base:'1em'}}
                fontWeight={'600'}
                fontSize={{base:'1.125em', md:'1.25em', lg:'1.5rem', xl:'1.6875rem'}}
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