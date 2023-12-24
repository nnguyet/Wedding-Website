import { Image, Flex, Heading, Box, Text, Divider, Show, Icon } from '@chakra-ui/react'

export const Time = ({ico, title, message, time, dir='column-reverse', top, left, bottom, right}) => {

    return (
        <Flex
            position={{md:'absolute'}}
            flexDir={{base:'column', md:dir}}
            justifyContent={{base:'center'}}
            alignItems={{base:'center'}}
            w={{base:'100%', md:'40%'}}
            top={{md:top}}
            bottom={{md:bottom}}
            right={{md:right}}
            left={{md:left}}
        >
            <Image
                src={ico}
                alt='Wedding Icon'
                w={{base:'4.5em'}}
                backgroundColor={{base:'pink.light'}}
                p={{base:'0.75em'}}
            />
            <Flex
                justifyContent={{base:'center'}}
                alignItems={{base:'center'}}
                flexDir={{base:'column'}}
                m={{base:'0', md:'4px'}}
                textAlign={{base:'center'}}
            >
                <Text
                    color={{base:'yellow.gold'}}
                    fontSize={{base:'1.125em', md:'1.25em'}}
                >
                    {time}
                </Text>
                <Text
                    fontWeight={{base:'500'}}
                    fontSize={{base:'1.25em', md:'1.375em'}}
                >
                    {title}
                </Text>
                <Text
                    fontSize={{base:'1.125em', md:'1.25em'}}
                    fontStyle={{base:'italic'}}
                    w={{base:'100%', lg:'23em'}}
                >
                    {message}
                </Text>
            </Flex>
        </Flex>
        
    )
}