import { Box, Text, Center } from '@chakra-ui/react'


export const Announce = () => {
    return (
        <Box
            w={{ base: "100%" }}
            p={{ base: "1.5em 0", sm:'2em 0', md:'4em 0' }}
            bg={{ base: "pink.light"}}
        >
            <Text
                fontSize={{ base: "1.5em", md: "2em" }}
                textAlign={{base:'center'}}
                pb={{ base: "0.5em", sm: "1em" }}
            >
                Vậy là chúng mình cưới nhau
            </Text>
            
            <Text
                textAlign={{base:'center'}}
                lineHeight={{ base: "1.5em", sm: "1.75em", md:'2em'}}
                px={{ base: "2.75em", sm: "2em", md:'11em', lg:'0' }}
            >
                Chúng mình đã chẳng thể biết trước được ngày sẽ va vào một người mà mình nguyện sẽ gắn bó cả cuộc đời. 
            </Text>
            <Text
                textAlign={{base:'center'}}
                lineHeight={{ base: "1.5em", sm: "1.75em", md:'2em'}}
                px={{ base: "2.25em", sm: "2em", md:'11em', lg:'0' }}
                py={{ base: "0.4em", sm: "0.375em" }}
            >
                 Nó thậm chí chẳng có gì dự báo hoặc có chút gì giống với 
                những thứ hai đứa đã từng tưởng tượng ra trước đây. 
            </Text>
            <Text
                textAlign={{base:'center'}}
                lineHeight={{ base: "1.5em", sm: "1.75em", md:'2em' }}
                px={{ base: "2.5em", sm: "2em", md:'8.5em', lg:'0' }}
            >
                 Chỉ là vào một ngày nào đó, đúng lúc, đúng người, 
                có hai con người gặp được nhau, và rồi quyết định ở lại với nhau.
            </Text>
            <Text
                textAlign={{base:'center'}}
                p={{ base: "1.5em 1em 0", md: "2em 0 0" }}
            >
                Vậy là, chúng mình cưới nhau, và sẽ cùng nhau bắt đầu một khởi đầu mới!
            </Text>
        </Box>
    )
}