import { Image, Box, Text, Heading } from '@chakra-ui/react'

export const Header = () => {
    return (
        <Box position='relative' mb={{base:'24px'}}>
            <Image
                src='/images/homepage_cover.jpg'
                w='100%'
                h={{base: '60vh', sm:'56vh', md:'65vh'}}
                alt='Homepage Cover'
                fit='cover'
                objectPosition={{base:'60% 50%', sm:'50% 50%', md:'50% 44%', lg:'50% 30%'}}
            />
            <Box
                position='absolute'
                bottom='15%'
                right='4%'
                w='45%'
                minW='200px'
                textColor='white'
            >
                <Heading
                    as='h1'
                    w='100%'
                    float='right'
                    textAlign='right'
                    fontSize={{base:'28px', sm: '32px', md: '40px'}}
                >
                    YOU{`'`}RE MY SERENDIPITY
                </Heading>
                <Text
                    float='right'
                    textAlign='right'
                    fontSize={{base:'24px', md:'28px'}}
                    mt={{base:'0', md:'2px'}}
                >
                    20.01.2024
                </Text>
            </Box>
        </Box>
    )
}