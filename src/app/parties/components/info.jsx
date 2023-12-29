import { Box, Text, Flex } from '@chakra-ui/react'

export const Info = ({ place, time, hall, address, city }) => {
    return (
        <Box
            textAlign={{base:'center'}}
            pb={{base:'1em'}}
            fontSize={{base:'1em', md:'0.875em', lg:'1em', xl:'1.125em'}}
        >
            <Text
                fontSize={{base:'1.5em', md:'1.25rem', lg:'1.5em', xl:'1.6875rem'}}
                fontWeight={{base:'600'}}
                pb={{base:'0.25em'}}
            >
                {place}
            </Text>
            <Text>
                {time}
            </Text>
            <Text>
                {hall}
            </Text>
            <Flex
                flexDir={{base:'column', sm:'row'}}
                justifyContent={{base:'center'}}
                alignItems={{base:'center'}}
            >
                <Text>
                    {address}
                </Text>
                <Text
                    ml={{base:'0', sm:'0.25rem'}}
                >
                    {city}
                </Text>
            </Flex>
        </Box>
    )
}