import { Image, Flex, Text } from '@chakra-ui/react'

export const Time = ({ico, title, message, time, dir='column-reverse', top, left, bottom, right, margin}) => {

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
            mb={{md:margin}}
        >
            <Image
                src={ico}
                alt='Wedding Icon'
                w={{base:'4.5em'}}
                backgroundColor={{base:'pink.light'}}
                p={{base:'0.75em', md:'0.875em', lg:'0.75em'}}
                mt={{base:'-0.5em', md:'0'}}
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
                    fontSize={{base:'1.125rem', md:'1rem', lg:'1.125rem'}}
                    fontWeight={{base:'500'}}
                >
                    {time}
                </Text>
                <Text
                    fontWeight={{base:'500'}}
                    fontSize={{base:'1.125rem', md:'1rem', lg:'1.125rem'}}
                >
                    {title}
                </Text>
                <Text
                    fontSize={{base:'1rem', md:'0.875rem', lg:'1rem', xl:'1.0625rem'}}
                    fontStyle={{base:'italic'}}
                    w={{base:'100%', lg:'23em'}}
                    fontWeight={{base:'300'}}
                >
                    {message}
                </Text>
            </Flex>
        </Flex>
        
    )
}