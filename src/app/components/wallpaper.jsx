import { Image, Flex } from '@chakra-ui/react'

export const Wallpaper = () => {
    return (
        <Flex>
            <Image
                src='/images/wallpaper01.jpg'
                alt='wallpaper1'
                w={{md:'33.33%'}}
            />
            <Image
                src='/images/wallpaper02.jpg'
                alt='wallpaper2'
                w={{md:'33.33%'}}
            />
            <Image
                src='/images/wallpaper03.jpg'
                alt='wallpaper3'
                w={{md:'33.33%'}}
            />
        </Flex>
    )
}