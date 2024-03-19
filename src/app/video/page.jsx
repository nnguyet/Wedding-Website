import { Flex, Text } from '@chakra-ui/react'
import { Lobster } from "next/font/google";

const lobster = Lobster({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400']
});


export default function Wishes() {
    return (
        <Flex
            justifyContent={{base:'center'}}
            alignItems={{base:'center'}}
            flexDir={{base:'column'}}
            p={{base:'0.5rem'}}
            w={{base:'100%'}}
        >
            <Text
                textAlign='center'
                fontSize={{base:'2.125em', sm:'2.25rem', md:'2rem', lg:'2.125rem', xl:'2.5rem'}}
                mb={{base:'0.5rem'}}
                className={lobster.className}
            >
                Phim phóng sự cưới
            </Text>
            <Flex
                justifyContent={{base:'center'}}
                alignItems={{base:'center'}}
                aspectRatio={{base:'4/3', md:'16/9'}}
                w={{base:'100%', md:'46.5rem'}}
                pb={{base:'0.5rem'}}
            >
                <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/Vp_e4pZ4TsQ?si=ADIhm59VxhBCkZ0l" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </Flex>
        </Flex>
    )
}