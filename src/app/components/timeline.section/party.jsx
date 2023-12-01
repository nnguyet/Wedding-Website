import { Heading, Image, Text, Flex, Box, Grid, GridItem, Center } from '@chakra-ui/react'

export const Party = ({ img, alt='hình cưới', title, info, address, order='0' }) => {
    return (
        <Grid
            mx={{base:'36px', sm:'48px', md:'128px'}}
            my={{base:'36px'}}
            templateColumns={{base:'repeat(2, 1fr)'}}
        >
            <GridItem
                mb={{base:'8px', md:'0'}}
                mx={{base:'20px'}}
                colSpan={{base:'2', md:'1'}}
                order={{base:'0', md:order}}
                justifyContent={{base:'center'}}
                alignItems={{base:'center'}}
                display={{base:'flex'}}
                h={{base:'48', md:'256'}}
            >
                <Image
                    src={img}
                    fit={{base: 'cover'}}
                    alt={alt}
                    maxH={{base:'100%'}}
                    maxW={{base:'100%'}}
                    w={{md:'512px'}}
                />
            </GridItem>
            <GridItem
                mt={{base:'8px', md:'0'}}
                display={{base:'flex'}}
                textAlign={{base:'center'}}
                justifyContent={{base:'center'}}
                alignItems={{base:'center'}}
                flexDir={{base:'column'}}
                colSpan={{base:'2', md:'1'}}
            >
                <Heading>
                    {title}
                </Heading>
                <Text>
                    {info}
                </Text>
                <Text>
                    {address}
                </Text>
            </GridItem>
        </Grid>
    )
}