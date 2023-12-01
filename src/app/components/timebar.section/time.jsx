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
                w={{base:'72px'}}
                backgroundColor={{base:'white'}}
                p={{base:'16px'}}
            />
            <Flex
                justifyContent={{base:'center'}}
                alignItems={{base:'center'}}
                flexDir={{base:'column'}}
                m={{base:'0', md:'4px'}}
            >
                <Text textAlign={{base:'center'}}>
                    {time}
                </Text>
                <Text textAlign={{base:'center'}}>
                    {title}
                </Text>
                <Text textAlign={{base:'center'}} maxW={{base:'90%', md:'100%'}}>
                    {message}
                </Text>
            </Flex>
        </Flex>
        
    )
}