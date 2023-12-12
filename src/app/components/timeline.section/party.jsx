import { Heading, Image, Text, Flex, Box, Grid, GridItem, Center } from '@chakra-ui/react'

export const Party = ({ title, info, address, place, margin}) => {
    return (
        <GridItem
            // w={{base:'100%', lg:'16em'}}
            w={{base:'100%', md:'15em'}}
            // maxW={{base:'auto', md:'80%', lg:'16em'}}
            m={{base:'0 auto'}}
            pr={{md:margin}}
            textAlign={{base:'center'}}
            // ml={{md:margin, lg:'0'}}
        >
            <Text
                fontSize={{base:'1em', md:'1.25em'}}
                pb={{base:'0.5em'}}
                fontWeight={{md:'400'}}
            >
                {title}
            </Text>
            <Box
                fontSize={{md:'0.875em'}}
                fontWeight={{md:'500'}}
            >
                <Text>
                    {info}

                </Text>
                <Text
                    py={{base:'0.25em'}}
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