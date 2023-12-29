import { Image, Flex } from '@chakra-ui/react'

export const Wallpaper = () => {
    return (
        <Flex
            justifyContent={'center'}
            alignItems={'center'}
            pt={{base:'0', md:'0.5em'}}
            px={{base:'0', md:'3em'}}
            bg={'pink.light'}
        >
            <Image
                src='/albums/pre-wedding/img34.jpg'
                alt='wallpaper1'
                w={{base:'33.33%', md:'29%'}}
                px={{base:'0', md:'0.5em'}}
            />
            <Image
                src='/albums/pre-wedding/img28.jpg'
                alt='wallpaper2'
                w={{base:'33.33%', md:'29%'}}
                px={{base:'0', md:'0.5em'}}
                mx={{base:'0', md:'-0.5em'}}
            />
            <Image
                src='/albums/pre-wedding/img24.jpg'
                alt='wallpaper3'
                w={{base:'33.33%', md:'29%'}}
                px={{base:'0', md:'0.5em'}}
            />
        </Flex>
    )
}