import { Image, Flex } from '@chakra-ui/react'

export const Logo = () => {
    return (
        <Flex
            w={{base:'3.25em', md:'4em'}}
            mr={{base:'0.75em', md:'0'}}
            mt={{base:'0.75em', md:'0'}}
            borderRadius={{base:'50%'}}
            border={{base:'1px dotted white'}}
            alignItems={{base:'center'}}
            justifyContent={{base:'center'}}
            aspectRatio={{base:'1/1'}}
        >
            <Image
                src='/images/logo.png'
                alt='monogram'
                w={{base:'90%'}}
                filter={{base:'invert(100%)'}}
                pb={{base:'0.25em'}}
            />
        </Flex>
    )
}