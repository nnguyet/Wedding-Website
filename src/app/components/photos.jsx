import { Box, Text, Flex, Link } from '@chakra-ui/react'
import { Album } from './photos.section'
import { albumList } from './albumList'
import { Lobster } from "next/font/google";
import NextLink from 'next/link'

const lobster = Lobster({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400']
});

export const Photos = () => {
    return (
        <Box
            p={{base:'1.5em 1em 1em', sm:'1.25em 1.5em 0.75em', md:'1.25em 1.5em 0.5em'}}
            backgroundColor='pink.dark'
        >
            <Box
                
            >
                <Text
                    textAlign='center'
                    fontSize={{base:'2.125em', sm:'2.25rem', md:'2rem', lg:'2.125rem', xl:'2.5rem'}}
                    mb={{base:'0'}}
                    className={lobster.className}
                >
                    Hình ảnh
                </Text>
                <Flex
                    flexWrap={{base:'wrap'}}
                    flexDir={{base:'column', sm:'row'}}
                    justifyContent={{base:'center'}}
                    alignItems={{base:'center'}}
                    my={{base:'0.25rem'}}
                >
                    {
                        albumList.map((value) => {
                            return <Album key={value.id} {...value} />
                        })
                    }
                </Flex>
            </Box>
            <Flex
                id='phim-phong-su'
                w={{base:'100%'}}
                pt={{base:'11rem', md:'8rem'}}
                mt={{base:'-10rem', md:'-7rem'}}
                justifyContent={{base:'center'}}
                alignItems={{base:'center'}}
                flexDir={{base:'column'}}
            >
                <Link
                    as={NextLink}
                    href='/video'
                    _hover={{textDecoration:'none'}}
                >
                    <Text
                        textAlign='center'
                        fontSize={{base:'2.125em', sm:'2.25rem', md:'2rem', lg:'2.125rem', xl:'2.5rem'}}
                        mb={{base:'0'}}
                        className={lobster.className}
                    >
                        Phim phóng sự cưới
                    </Text>
                </Link>
                <Flex
                    justifyContent={{base:'center'}}
                    alignItems={{base:'center'}}
                    flexDir={{base:'column'}}
                    pt={{base:'0.625rem'}}
                    pb={{base:'0.75rem'}}
                    w={{base:'100%', md:'46.5rem'}}
                    aspectRatio={{base:'4/3', md:'16/9'}}
                >
                    <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/Vp_e4pZ4TsQ?si=ADIhm59VxhBCkZ0l" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </Flex>
            </Flex>
        </Box>
    )
}