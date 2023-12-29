import { Box, Text, Image } from '@chakra-ui/react'

export const Footer = () => {
    return (
        <Box
            bg={{base:'pink.default'}}
            p={{base:'1em 0.5em 0.125em', md:'1em 1em 0.25em', lg:'1.25em 1.5em 0.5em'}}
            className='font-nunito'
        >
            <Text
                textAlign={{base:'center'}}
                fontStyle={{base:'italic'}}
                fontSize={{base:'1rem', xl:'1.125rem'}}
                fontWeight={{base:'300'}}
                w={{base:'calc(min(20.125rem, 90%))', sm:'25rem', md:'28rem'}}
                m={{base:'auto'}}
            >
                Nếu cần hỗ trợ trong quá trình đến với sảnh tiệc có thể liên hệ qua team Wedding Planner của chúng mình nhé!
            </Text>
            <Image
                src='/images/contact.png'
                alt='contact-logo'
                w={{base:'11em', sm:'14em', md:'15em', xl:'16em'}}
                m={{base:'0.75em auto'}}
            />
            <Text
                textAlign={{base:'center'}}
                fontStyle={{base:'italic'}}
                fontSize={{base:'1rem', xl:'1.125rem'}}
                fontWeight={{base:'400'}}
                m={{base:'auto'}}
                pb={{base:'0.75em', md:'0.1em'}}
            >
                Trâm (Emma): 0828.498.209
                <br />
                Trân (Ori): 0938.301.168
            </Text>
            {/* <Text
                textAlign={{base:'center', md:'right'}}
                fontSize={{base:'0.75em'}}
            >
                Develop by nnguyet
            </Text> */}
        </Box>
    )
}