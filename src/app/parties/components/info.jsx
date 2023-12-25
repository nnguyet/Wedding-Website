import { Box, Text } from '@chakra-ui/react'

export const Info = ({ place, time, hall, address }) => {
    return (
        <Box
            textAlign={{base:'center'}}
            pb={{base:'1em'}}
        >
            <Text
                fontWeight={{base:'600'}}
                fontSize={{base:'1.25em'}}
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
            <Text>
                {address}
            </Text>
        </Box>
    )
}