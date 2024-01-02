import { Image, Flex } from '@chakra-ui/react'

export const Logo = () => {
    return (
        <Flex
            w={{base:'3.75em', md:'4em', lg:'5em'}}
            mt={{base:'0.75em', md:'0'}}
            borderRadius={{base:'50%'}}
            border={{base:'1px dotted white'}}
            alignItems={{base:'center'}}
            justifyContent={{base:'center'}}
        >
            <Image
                src='/images/logo.png'
                alt='monogram'
                w={{base:'70%', md:'78%', lg:'80%'}}
                filter={{base:'invert(100%)'}}
                mb={{base:'-0.25em', lg:'-0.3em'}}
                px={{md:'0.125em', lg:'0.25em'}}
            />
        </Flex>
    )
}