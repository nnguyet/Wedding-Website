import { Image, Flex } from '@chakra-ui/react'

export const Wallpaper = () => {
    return (
        <Flex>
            <Image
                src='/images/wallpaper01.jpg'
                alt='wallpaper1'
                w={{base:'33.33%'}}
            />
            <Image
                src='/images/wallpaper02.jpg'
                alt='wallpaper2'
                w={{base:'33.33%'}}
            />
            <Image
                src='/images/wallpaper03.jpg'
                alt='wallpaper3'
                w={{base:'33.33%'}}
            />
        </Flex>
    )
}