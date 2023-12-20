import { Heading, Box, Text, Grid, GridItem, Button, Link, Flex } from '@chakra-ui/react'

export const Info = ({ place, time, hall, address }) => {
    return (
        <Box
            textAlign={{base:'center'}}
            pb={{base:'1em'}}
        >
            <Text
                fontWeight={{base:'500'}}
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