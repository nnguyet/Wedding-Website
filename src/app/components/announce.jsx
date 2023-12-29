import { Box, Text, Show, Hide } from '@chakra-ui/react'

export const Announce = () => {
    return (
        <Box
            w={{ base: "100%" }}
            p={{ base: "1rem 0", md:'0.5rem 0 1.5rem', lg:'1em 0 2em' }}
            bg={{ base: "pink.light"}}
            fontSize={{base:'1rem', md:'0.875rem', lg:'1rem', xl:'1.0625rem'}}
            fontStyle={{base:'italic'}}
        >
            <Text
                fontSize={{ base: "2.75rem", sm:'3.125rem', md:'3.25rem', lg: "3.5rem", xl:'4.5rem' }}
                textAlign={{base:'center'}}
                pb={{ base: "0.125em", sm: "0.25rem", md:'0'}}
                className='font-corinthia'
            >
                Vậy là chúng mình cưới nhau
            </Text>
            
            <Text
                textAlign={{base:'center'}}
                lineHeight={{ base: "1.5em", sm: "1.75em", md:'1.65em', lg:'1.75em'}}
                w={{base:'calc(min(20.25rem, 93%))', sm:'26rem', md:'100%'}}
                m={{base:'auto'}}
            >
                Chúng mình đã chẳng thể biết trước được ngày sẽ va vào một người mà mình nguyện sẽ gắn bó cả cuộc đời. 
            </Text>
            <Text
                textAlign={{base:'center'}}
                lineHeight={{ base: "1.5em", sm: "1.75em", md:'1.65em', lg:'1.75em'}}
                py={{ base: "0.5em", sm: "0.375em", md:'0.375rem' }}
                w={{base:'calc(min(17.5rem, 87%))', sm:'27rem', md:'100%'}}
                m={{base:'auto'}}
            >
                 Nó thậm chí chẳng có gì dự báo hoặc có chút gì giống với 
                những thứ hai đứa đã từng tưởng tượng ra trước đây. 
            </Text>
            <Text
                textAlign={{base:'center'}}
                lineHeight={{ base: "1.5em", sm: "1.75em", md:'1.65em', lg:'1.75em' }}
                w={{base:'100%'}}
                m={{base:'auto'}}
            >
                 Chỉ là vào một ngày nào đó, đúng lúc,{' '}
                <Hide above='sm'>
                    <br />
                </Hide>                
                đúng người,{' '}
                <Show above='sm'>
                    <Hide above='md'>
                        <br />
                    </Hide>
                </Show>
                có hai con người gặp được nhau,{' '}
                <Hide above='sm'>
                    <br />
                </Hide>
                và rồi quyết định ở lại với nhau.
            </Text>
            <Text
                textAlign={{base:'center'}}
                pt={{ base: "1.5rem", md: "1rem" }}
                m={{base:'auto'}}
                w={{base:'calc(min(22rem, 90%))', md:'100%'}}
            >
                Vậy là, chúng mình cưới nhau, và sẽ cùng nhau bắt đầu một khởi đầu mới!
            </Text>
        </Box>
    )
}