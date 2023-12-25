import { Box, Heading, Center, Flex } from '@chakra-ui/react'
import { Album } from './photos.section'
import { albumList } from './albumList'

export const Photos = () => {
    return (
        <Box
            p={{base:'1.5em 1em 1em', sm:'1.25em 1.5em 0.75em', md:'1.25em 2em 0.5em'}}
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