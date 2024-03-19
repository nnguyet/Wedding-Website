import { Image, Flex, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

export const Logo = () => {
    return (
        <Link
            as={NextLink}
            href='/'
            _hover={{textDecoration:'none'}}
        >
            <Flex
                w={{base:'3.75em', md:'4em', lg:'4.75em'}}
                mt={{base:'0.75em', md:'0'}}
                borderRadius={{base:'50%'}}
                border={{base:'1px dotted white'}}
                alignItems={{base:'center'}}
                justifyContent={{base:'center'}}
            >
                <Image
                    src='/images/logo.png'
                    alt='monogram'
                    w={{base:'65%', md:'78%', lg:'80%'}}
                    filter={{base:'invert(100%)'}}
                    mb={{base:'-0.25em', lg:'-0.3em'}}
                    px={{md:'0.125em', lg:'0.25em'}}
                />
            </Flex>
        </Link>
    )
}