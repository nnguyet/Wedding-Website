import { Image, Box, Heading, Center, Flex } from '@chakra-ui/react'
import { Album } from './photos.section'
import { albumList } from './albumList'

export const Photos = () => {
    return (
        <Box
            my={{base:'12px', sm:'12px', md:'64px'}}
            p={{base:'4px 16px', sm:'4px 24px', md:'16px 48px'}}
            backgroundColor={{base:'#E3C5C1'}}
        >
            <Center>
                <Heading
                    as='h2'
                >
                    Photos
                </Heading>
            </Center>
            <Flex
                flexWrap={{base:'wrap'}}
                flexDir={{base:'column', sm:'row'}}
                justifyContent={{base:'center'}}
                alignItems={{base:'center'}}
                my={{base:'16px'}}
            >
                {
                    albumList.map((value) => {
                        return <Album key={value.id} {...value} />
                    })
                }
            </Flex>
        </Box>
    )
}