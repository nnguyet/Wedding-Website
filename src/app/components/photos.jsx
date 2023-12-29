import { Box, Text, Flex } from '@chakra-ui/react'
import { Album } from './photos.section'
import { albumList } from './albumList'

export const Photos = () => {
    return (
        <Box
            p={{base:'1.5em 1em 1em', sm:'1.25em 1.5em 0.75em', md:'1.25em 1.5em 0.5em'}}
            backgroundColor='pink.dark'
        >
            <Text
                textAlign='center'
                fontSize={{base:'2.125em', sm:'2.25rem', md:'2rem', lg:'2.125rem', xl:'2.5rem'}}
                mb={{base:'0'}}
                className='font-lobster'
            >
                Hình ảnh
            </Text>
            <Flex
                flexWrap={{base:'wrap'}}
                flexDir={{base:'column', sm:'row'}}
                justifyContent={{base:'center'}}
                alignItems={{base:'center'}}
                my={{base:'0.25rem'}}
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