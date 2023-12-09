import { Box, Text, Flex, Image } from '@chakra-ui/react'

export const Gallery = () => {
    return (
        <Flex
            bg={'pink.light'}
            w={'100%'}
            h={'35em'}
            p={{base:'0', lg:'1.5em 18% 3.5em'}}
            justifyContent={'space-around'}
            alignItems={'center'}
        >
            <Flex
                w={{base:'30%'}}
                h={'100%'}
                justifyContent={'center'}
                alignItems={'center'}
                overflow={'hidden'}
            >
                <Image
                    src='/images/image01.jpg'
                    alt='img1'
                    w={{base:'90%'}}
                    objectFit={'cover'}
                />
            </Flex>
            <Flex
                h={'100%'}
                w={{base:'39%'}}
                justifyContent={'space-around'}
                overflow={'hidden'}
                alignItems={'space-around'}
                flexDir={'column'}
            >
                <Flex
                    justifyContent={'space-around'}
                    overflow={'hidden'}
                    alignItems={'center'}
                >
                    <Image
                        src='/images/image01.jpg'
                        alt='img1'
                        w={{base:'45%'}}
                        objectFit={'cover'}
                    />
                    <Image
                        src='/images/image01.jpg'
                        alt='img1'
                        w={{base:'45%'}}
                        objectFit={'cover'}
                    />
                </Flex>
                <Image
                    src='/images/img1.jpg'
                    alt='img1'
                    w={{base:'100%'}}
                    maxH={{base:'48%'}}
                    objectFit={'cover'}
                />
            </Flex>
            <Flex
                h={'100%'}
                w={{base:'30%'}}
                justifyContent={'center'}
                alignItems={'center'}
                overflow={'hidden'}
            >
                <Image
                    src='/images/wallpaper02.jpg'
                    alt='img1'
                    w={{base:'90%'}}
                    objectFit={'cover'}
                />
            </Flex>
        </Flex>
    )
}