import { Box, Text, Flex, Image } from '@chakra-ui/react'


export const Footer = () => {
    return (
        <Box
            bg={{base:'pink.default'}}
            p={{base:'1.75em 0.5em', md:'1.5em 1em', lg:'1.5em 10em'}}
        >
            <Text
                textAlign={{base:'center'}}
                fontStyle={{base:'italic'}}
                fontSize={{base:'1.15em', md:'1.375em'}}
                fontWeight={{base:'300'}}
                w={{base:'90%', md:'70%'}}
                maxW={{sm:'26em'}}
                m={{base:'auto'}}
            >
                Nếu cần hỗ trợ trong quá trình đến với sảnh tiệc có thể liên hệ qua team Wedding Planner của chúng mình nhé!
            </Text>
            <Image
                src='/images/contact.png'
                alt='contact-logo'
                w={{base:'16.5em', sm:'19em', md:'23em'}}
                m={{base:'1.5em auto'}}
            />
            <Text
                textAlign={{base:'center'}}
                fontStyle={{base:'italic'}}
                fontSize={{base:'1.25em'}}
                fontWeight={{base:'300'}}
                m={{base:'auto'}}
            >
                Trâm (Emma): 0828.498.209
                <br />
                Trân (Ori): 0938.301.168
            </Text>
        </Box>
    )
}