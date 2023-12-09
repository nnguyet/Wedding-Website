import { Image, Flex } from '@chakra-ui/react'

export const Wallpaper = () => {
    return (
        <Flex
            justifyContent={'center'}
            alignItems={'center'}
            pt={{base:'0', md:'0.75em'}}
            px={{base:'0', md:'3em'}}
            bg={'pink.light'}
        >
            <Image
                src='/images/wallpaper01.jpg'
                alt='wallpaper1'
                w={{base:'33.33%', md:'28%'}}
                px={{base:'0', md:'0.375em'}}
            />
            <Image
                src='/images/wallpaper02.jpg'
                alt='wallpaper2'
                w={{base:'33.33%', md:'28%'}}
                px={{base:'0', md:'0.375em'}}
            />
            <Image
                src='/images/wallpaper03.jpg'
                alt='wallpaper3'
                w={{base:'33.33%', md:'28%'}}
                px={{base:'0', md:'0.375em'}}
            />
        </Flex>
    )
}