import { Box, Text, Center } from '@chakra-ui/react'


export const Announce = () => {
    return (
        <Box
            w={{ base: "100%" }}
            p={{ base: "1.5em 1.75em", sm:'2em 10%', md:'4em 6.5em', lg: "4em 19%" }}
            bg={{ base: "pink.light"}}
        >
            <Text
                fontSize={{ base: "1.5em", md: "2em" }}
                textAlign={{base:'center'}}
                pb={{ base: "0.5em", sm: "1em" }}
                px={{ base: "2em", sm: "0" }}
            >
                Vậy là chúng mình cưới nhau
            </Text>
            
            <Text
                textAlign={{base:'center'}}
                lineHeight={{ base: "2em", sm: "2.25em", md:'2.5em' }}
            >
                Chúng mình đã chẳng thể biết trước được ngày sẽ va vào một người mà mình nguyện sẽ gắn bó cả cuộc đời. 
                <br />
                 Nó thậm chí chẳng có gì dự báo hoặc có chút gì giống với 
                những thứ hai đứa đã từng tưởng tượng ra trước đây. 
                <br />
                 Chỉ là vào một ngày nào đó, đúng lúc, đúng người, 
                có hai con người gặp được nhau, và rồi quyết định ở lại với nhau.
            
            </Text>
            <Text
                textAlign={{base:'center'}}
                p={{ base: "1.75em 0 0", md: "2.25em 0 0" }}
            >
                Vậy là, chúng mình cưới nhau, và sẽ cùng nhau bắt đầu một khởi đầu mới!
            </Text>
        </Box>
    )
}