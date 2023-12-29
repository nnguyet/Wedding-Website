import { Text, Box, GridItem, Flex } from '@chakra-ui/react'

export const Party = ({ title, info, address, place, city, margin, pb}) => {
    return (
        <GridItem
            w={{base: '100%'}}
            m={{base:'0 auto'}}
            pr={{lg:margin}}
            pb={{base:pb, md:'0'}}
            textAlign={{base:'center'}}
        >
            <Text
                fontSize={{base:'1.5em', md:'1.25em', lg:'1.5em', xl:'1.6875em'}}
                fontWeight={{base:'600'}}
                pb={{base:'0.125em', md:'0.5em'}}
            >
                {title}
            </Text>
            <Box
                fontSize={{base:'1em', sm:'1.125em', md:'0.875em', lg:'1em', xl:'1.125em'}}
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
                <Flex
                    flexDir={{base:'column', sm:'row', md:'column'}}
                    justifyContent={{base:'center'}}
                    alignItems={{base:'center'}}
                >
                    <Text
                    >
                        {address}
                    </Text>
                    <Text
                        ml={{base:'0', sm:'0.25rem', md:'0'}}
                    >
                        {city}
                    </Text>
                </Flex>
            </Box>
        </GridItem>
    )
}