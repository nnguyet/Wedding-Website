import { Heading, Image, Text, Flex, Box, Grid, GridItem, Center } from '@chakra-ui/react'

export const Party = ({ title, info, address, place, margin}) => {
    return (
        <GridItem
            w={{base:'100%', xl:'17em'}}
            m={{base:'0 auto'}}
            pr={{md:margin}}
            pb={{base:margin, md:'0'}}
            textAlign={{base:'center'}}
        >
            <Text
                fontSize={{base:'1.5em', md:'1.375em', lg:'1.5em'}}
                pb={{base:'0.5em'}}
                fontWeight={{md:'400'}}
            >
                {title}
            </Text>
            <Box
                fontSize={{base:'1em', md:'0.875em', lg:'1em'}}
                fontWeight={{base:'400', md:'500'}}
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