import { Box, Text, Center } from '@chakra-ui/react'

export const Introduction = () => {
    return (
        <Box
            p={{base:'1em', md:'2em'}}
            bg={{base:'pink.dark'}}
            fontStyle={{base:'italic'}}
        >
            <Text
                fontSize={{ base: "1.625em", sm:'1.75em', md: "1.875em" }}
                textAlign={{base:'center'}}
                pb={{ base: "0.5em", sm: "0.5em" }}
            >
                Ngày mình có nhau
            </Text>
            <Text
                textAlign={{base:'center'}}
                lineHeight={{ base: "1.5em", md:'1.5em' }}
                fontSize={{ base: "1em", md:'1.25em' }}
                w={{md:'80%', lg:'60%'}}
                m={{base:'auto'}}
            >
                Chúng mình đã dành hơn nửa năm để lên kế hoạch,
                 rong ruổi khắp VT-SG và chuẩn bị chiếc hôn lễ này.
                 Không ít sự vất vả, không ít sự bất đồng quan điểm, cũng không ít sự cãi vã,
                 nhưng chúng mình vui khi được thực hiện hóa ước mơ cùng nhau.
                <Text
                    p={{base:'0.5em 0 0', md:'0.75em 0 0'}}
                >
                    Đó sẽ một ngày gió nhẹ, có nắng vàng, và chúng mình bên nhau,
                     bên những người thương nhất, được họ chứng kiến và cứ thế trở thành vợ chồng.
                </Text>
            </Text>
        </Box>
    )
}