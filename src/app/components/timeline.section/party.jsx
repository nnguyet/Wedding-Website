import { Heading, Image, Text, Flex, Box, Grid, GridItem, Center } from '@chakra-ui/react'

export const Party = ({ title, info, address, place, margin}) => {
    return (
        <GridItem
            w={{base:'100%'}}
            m={{base:'0 auto'}}
            pr={{lg:margin}}
            pb={{base:margin, md:'0'}}
            textAlign={{base:'center'}}
        >
            <Text
                fontSize={{base:'1.5em', md:'1.375em', lg:'1.5em', xl:'1.6875em'}}
                pb={{base:'0.5em'}}
                fontWeight={{base:'600'}}
            >
                {title}
            </Text>
            <Box
                fontSize={{base:'1em', sm:'1.125em', md:'0.9em', lg:'1em', xl:'1.125em'}}
                fontWeight={{base:'500'}}
            >
                <Text>
                    {info}

                </Text>
                <Text
                    py={{base:'0.1em', md:'0.25em'}}
                >
                    {place}
                </Text>
                <Text>
                    {address}
                </Text>
            </Box>
        </GridItem>
    )
}