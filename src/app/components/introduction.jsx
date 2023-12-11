import { Box, Text, Center } from '@chakra-ui/react'

export const Introduction = () => {
    return (
        <Box
            p={{base:'1em', md:'2em'}}
            bg={{base:'pink.dark'}}
            fontStyle={{base:'italic'}}
        >
            <Text
                fontSize={{ base: "1.25em", md: "1.875em" }}
                textAlign={{base:'center'}}
                pb={{ base: "0.5em", sm: "0.5em" }}
                px={{ base: "2em", sm: "0" }}
            >
                You{'\''}re my serendipity
            </Text>
            <Text
                textAlign={{base:'center'}}
                lineHeight={{ base: "2em", md:'2em' }}
                fontSize={{ base: "1em", md:'1.25em' }}
            >
                I wasn{'\''}t looking for you
                <br />
                I wasn{'\''}t expecting you
                <br />
                But I{'\''}m very lucky I met you.
            </Text>
        </Box>
    )
}